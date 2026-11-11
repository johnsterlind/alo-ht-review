// alo.ht — salary tools in the candidate space (signed-in only): « Salaire net » and « Comparer deux offres ».
// Rates come from the database (alo_settings 'salary', edited in admin.html). SALARY_DEFAULT only mirrors the
// proposed starting values. While the rules are not confirmed, every result says « Estimation — taux à confirmer ».

const SALARY_DEFAULT = {
  year: "2025-2026", confirmed: false,
  source: "Barème de l’impôt sur le revenu et cotisations sociales des salariés (à confirmer par un comptable).",
  brackets: [[60000, 0], [240000, 10], [480000, 15], [1000000, 25], [null, 30]],   // yearly HTG upper bound, rate %
  deductions: [
    { id: "ona", name: "ONA — assurance vieillesse", pct: 6, deductible: false },
    { id: "ofatma", name: "OFATMA — assurance maladie et maternité", pct: 3, deductible: false },
    { id: "cfgdct", name: "CFGDCT — contribution aux collectivités territoriales", pct: 1, deductible: false },
  ],
  usd_htg: null,
};
// What each deduction is for, in plain words.
const DEDUCTION_HELP = {
  ir: "Impôt de l’État sur le salaire. L’employeur le retient chaque mois et le verse à la DGI. Il est calculé par tranches sur le salaire de l’année : plus le salaire est élevé, plus la part imposée est grande.",
  ona: "Cotisation pour votre pension de retraite à l’Office National d’Assurance-Vieillesse. Votre employeur verse aussi sa propre part.",
  ofatma: "Assurance maladie et maternité de l’OFATMA. Elle peut couvrir des soins, selon les conditions de l’office.",
  cfgdct: "Contribution versée au fonds des mairies et des collectivités territoriales.",
};
let SALARY = SALARY_DEFAULT, SALARY_LOADED = false;
async function loadSalaryRules() {
  if (SALARY_LOADED) return SALARY;
  SALARY_LOADED = true;
  if (db() && !DEMO) { try { const { data, error } = await db().rpc("salary_rules"); if (!error && data && data.brackets) SALARY = data; } catch {} }
  return SALARY;
}

// ---------- The calculation (one place, used by both tools) ----------
function netSalary(grossMonthHTG, rules = SALARY) {
  const g = Math.max(0, +grossMonthHTG || 0), year = g * 12;
  const contrib = rules.deductions.map((d) => ({ id: d.id, name: d.name, pct: +d.pct || 0, deductible: !!d.deductible, month: Math.round(g * (+d.pct || 0)) / 100 }));
  const taxable = Math.max(0, year - contrib.filter((c) => c.deductible).reduce((n, c) => n + c.month * 12, 0));
  let prev = 0, taxYear = 0; const slices = [];
  for (const [top, rate] of rules.brackets) {
    const upper = top == null ? Infinity : +top, part = Math.max(0, Math.min(taxable, upper) - prev);
    if (part > 0 || prev === 0) slices.push({ from: prev, to: upper, rate: +rate, part, tax: part * (+rate) / 100 });
    taxYear += part * (+rate) / 100; prev = upper; if (taxable <= upper) break;
  }
  const taxMonth = taxYear / 12, totalMonth = taxMonth + contrib.reduce((n, c) => n + c.month, 0);
  return { gross: g, taxMonth, contrib, totalMonth, net: g - totalMonth, netYear: (g - totalMonth) * 12, rate: g ? totalMonth / g : 0, slices, taxable };
}

// ---------- Display helpers ----------
const otHtg = (n) => `${Math.round(+n || 0).toLocaleString(LANG === "en" ? "en-US" : "fr-FR")} HTG`;
const otPct = (r) => `${(r * 100).toLocaleString(LANG === "en" ? "en-US" : "fr-FR", { maximumFractionDigits: 1 })} %`;
const TOOLS_KEY = "alo-outils";
function toolState() { try { return JSON.parse(localStorage.getItem(TOOLS_KEY) || "{}"); } catch { return {}; } }
function saveToolState(s) { try { localStorage.setItem(TOOLS_KEY, JSON.stringify(s)); } catch {} }
// Amounts can be typed with spaces or separators ("45 000", "45,000"): keep the digits. Rates may have decimals.
const amt = (v) => +String(v ?? "").replace(/[^\d]/g, "") || 0;
const dec = (v) => +String(v ?? "").replace(/\s/g, "").replace(",", ".").replace(/[^\d.]/g, "") || 0;
const toHTG = (amount, cur, rate) => cur === "USD" ? amt(amount) * dec(rate) : amt(amount);
function banner() {
  return SALARY.confirmed ? `<p class="ot-src">${t("Taux")} ${esc(SALARY.year || "")} · ${esc(t(SALARY.source || ""))}</p>`
    : `<p class="ot-warn"><b>${t("Estimation — taux à confirmer.")}</b> ${t("Les taux affichés sont en cours de vérification par l’équipe ALO. Votre fiche de paie fait foi.")}</p>`;
}
function moneyFields(prefix, st, label) {
  const cur = st[prefix + "cur"] || "HTG";
  return `<div class="ot-money"><label class="field"><span>${t(label)}</span><input name="${prefix}gross" type="text" inputmode="numeric" autocomplete="off" value="${esc(st[prefix + "gross"] ?? "")}" placeholder="${t("Ex. 45 000")}" /></label>
    <label class="field ot-cur"><span>${t("Devise")}</span><select name="${prefix}cur"><option ${cur === "HTG" ? "selected" : ""}>HTG</option><option ${cur === "USD" ? "selected" : ""}>USD</option></select></label></div>`;
}
function rateField(st, needed) {
  if (!needed) return "";
  return `<label class="field"><span>${t("Taux du jour (HTG pour 1 USD)")}</span><input name="rate" type="text" inputmode="decimal" autocomplete="off" value="${esc(st.rate ?? SALARY.usd_htg ?? "")}" /></label>`;
}

// ---------- Tool 1: net salary, every deduction explained ----------
function netView(st) {
  const needRate = (st.cur || "HTG") === "USD", g = toHTG(st.gross, st.cur, st.rate), r = netSalary(g);
  const line = (id, name, amount, note) => `<div class="ot-line"><div><b>${esc(t(name))}</b>${note ? `<small>${note}</small>` : ""}
      <details class="ot-why"><summary>${t("À quoi ça sert ?")}</summary><p>${t(DEDUCTION_HELP[id] || "")}</p></details></div><span>− ${otHtg(amount)}</span></div>`;
  const ready = g > 0 && (!needRate || dec(st.rate) > 0);
  return [`<form class="ot-form" data-tool="net">${moneyFields("", st, "Salaire brut par mois")}${rateField(st, needRate)}</form>`, `
    ${banner()}
    ${!ready ? `<p class="hint-l">${t(needRate && !(dec(st.rate) > 0) ? "Indiquez le taux du jour pour convertir en gourdes." : "Indiquez votre salaire brut mensuel : le calcul se fait tout de suite.")}</p>` : `
    <div class="ot-result" aria-live="polite">
      <div class="ot-big"><span>${t("Salaire net estimé par mois")}</span><b>${otHtg(r.net)}</b><small>${otHtg(r.netYear)} ${t("par an")} · ${t("retenues")} ${otPct(r.rate)}</small></div>
      <div class="ot-line ot-gross"><b>${t("Salaire brut")}</b><span>${otHtg(r.gross)}</span></div>
      ${line("ir", "Impôt sur le revenu", r.taxMonth, r.taxMonth ? "" : t("Votre salaire est dans la tranche non imposée."))}
      ${r.contrib.map((c) => line(c.id, c.name, c.month, `${c.pct} % ${t("du salaire brut")}`)).join("")}
      <div class="ot-line ot-total"><b>${t("Total des retenues")}</b><span>− ${otHtg(r.totalMonth)}</span></div>
      <div class="ot-line ot-net"><b>${t("Salaire net")}</b><span>${otHtg(r.net)}</span></div>
    </div>
    <details class="ot-how"><summary>${t("Comment l’impôt est calculé")}</summary>
      <p>${t("Le salaire de l’année est découpé en tranches. Chaque tranche a son propre taux ; seule la partie du salaire dans une tranche est imposée à ce taux.")}</p>
      <table class="ot-table"><thead><tr><th>${t("Tranche annuelle")}</th><th>${t("Taux")}</th><th>${t("Impôt par an")}</th></tr></thead><tbody>
        ${SALARY.brackets.map(([top, rate], i) => { const from = i ? +SALARY.brackets[i - 1][0] : 0, s = r.slices.find((z) => z.from === from);
          return `<tr class="${s && s.part > 0 ? "on" : ""}"><td>${top == null ? `${t("plus de")} ${otHtg(from)}` : `${otHtg(from)} – ${otHtg(top)}`}</td><td>${rate} %</td><td>${s ? otHtg(s.tax) : "—"}</td></tr>`; }).join("")}
      </tbody></table>
      <p class="hint-l">${t("Revenu annuel imposable")} : ${otHtg(r.taxable)} · ${t("impôt annuel")} : ${otHtg(r.taxMonth * 12)}</p>
    </details>`}
    <p class="hint-l">${t("Non compris : le 13e mois (boni), les primes, les avantages en nature et les retenues propres à votre employeur (prêt, mutuelle…).")}</p>`];
}

// ---------- Tool 2: compare two offers (net pay, transport, benefits) ----------
function compareView(st) {
  const side = (k) => {
    const needRate = (st[k + "cur"] || "HTG") === "USD", g = toHTG(st[k + "gross"], st[k + "cur"], st.rate);
    const r = netSalary(g), transport = amt(st[k + "tr"]) * (amt(st[k + "days"]) || 22), extra = amt(st[k + "adv"]);
    return { needRate, g, r, transport, extra, left: r.net - transport + extra };
  };
  const A = side("a"), B = side("b"), needRate = A.needRate || B.needRate;
  const col = (k, label, S) => `<fieldset class="ot-col"><legend>${t(label)}</legend>
      ${moneyFields(k, st, "Salaire brut par mois")}
      <label class="field"><span>${t("Transport par jour (aller-retour)")}</span><input name="${k}tr" type="text" inputmode="numeric" autocomplete="off" value="${esc(st[k + "tr"] ?? "")}" placeholder="${t("Ex. 250")}" /></label>
      <label class="field"><span>${t("Jours de travail par mois")}</span><input name="${k}days" type="text" inputmode="numeric" autocomplete="off" maxlength="2" value="${esc(st[k + "days"] ?? 22)}" /></label>
      <label class="field"><span>${t("Avantages par mois (repas, transport payé…)")}</span><input name="${k}adv" type="text" inputmode="numeric" autocomplete="off" value="${esc(st[k + "adv"] ?? "")}" /></label>
    </fieldset>`;
  const mini = (label, S) => S.g > 0 ? `<div class="ot-mini"><b class="ot-mini-h">${t(label)}</b><div><span>${t("Salaire net")}</span><b>${otHtg(S.r.net)}</b></div><div><span>${t("Transport")}</span><b>− ${otHtg(S.transport)}</b></div>${S.extra ? `<div><span>${t("Avantages")}</span><b>+ ${otHtg(S.extra)}</b></div>` : ""}
        <div class="ot-left"><span>${t("Il vous reste par mois")}</span><b>${otHtg(S.left)}</b></div></div>` : "";
  const diff = B.left - A.left, both = A.g > 0 && B.g > 0 && (!needRate || dec(st.rate) > 0);
  return [`<form class="ot-form" data-tool="compare"><div class="ot-cols">${col("a", "Offre A", A)}${col("b", "Offre B", B)}</div>${rateField(st, needRate)}</form>`, `
    ${banner()}
    ${A.g > 0 || B.g > 0 ? `<div class="ot-cols ot-minis">${mini("Offre A", A)}${mini("Offre B", B)}</div>` : ""}
    ${both ? `<div class="ot-verdict" aria-live="polite">${Math.abs(diff) < 1 ? t("Les deux offres vous laissent le même montant chaque mois.")
      : `<b>${t(diff > 0 ? "L’offre B" : "L’offre A")}</b> ${t("vous laisse")} <b>${otHtg(Math.abs(diff))}</b> ${t("de plus par mois")}, ${t("soit")} ${otHtg(Math.abs(diff) * 12)} ${t("par an")}.`}</div>`
      : `<p class="hint-l">${t("Indiquez le salaire brut des deux offres pour les comparer.")}</p>`}
    <p class="hint-l">${t("Le salaire n’est pas tout : pensez aussi au type de contrat, aux horaires, à l’assurance et aux possibilités d’évolution.")}</p>`];
}

// ---------- Pop-up ----------
const TOOLS = { net: ["Salaire net", "Combien vous recevez vraiment, après l’impôt et les cotisations.", netView], compare: ["Comparer deux offres", "Ce qu’il vous reste chaque mois avec chaque offre, transport compris.", compareView] };
let OPEN_TOOL = null;
function drawTool(onlyResult) {
  const d = document.getElementById("ot-dialog"); if (!d || !OPEN_TOOL) return;
  const [title, sub, view] = TOOLS[OPEN_TOOL], st = toolState()[OPEN_TOOL] || {}, [form, result] = view(st);
  const out = d.querySelector(".ot-out");
  if (onlyResult && out) { out.innerHTML = result; return; }
  d.querySelector(".ot-body").innerHTML = `<h2 id="ot-title">${t(title)}</h2><p class="ot-sub">${t(sub)}</p>${form}<div class="ot-out">${result}</div>`;
}
async function openTool(id) {
  await loadSalaryRules();
  let d = document.getElementById("ot-dialog");
  if (!d) {
    d = document.createElement("dialog"); d.id = "ot-dialog"; d.className = "ot-dialog"; d.setAttribute("aria-labelledby", "ot-title");
    d.innerHTML = `<div class="ot-bar"><button type="button" class="linkbtn" data-ot-close>← ${t("Retour")}</button><button type="button" class="btn btn-plain" data-ot-close>${t("Fermer")}</button></div><div class="ot-body"></div>`;
    document.body.appendChild(d);
    d.addEventListener("click", (e) => { if (e.target === d || e.target.closest("[data-ot-close]")) d.close(); });
    d.addEventListener("close", () => { if (d.open) return; OPEN_TOOL = null; document.body.classList.remove("ot-lock"); });   // the close event arrives late: ignore it if another tool is already open
    d.addEventListener("input", (e) => { const f = e.target.form; if (!f || !f.dataset.tool) return;
      const all = toolState(), cur = all[f.dataset.tool] || {}; [...f.elements].forEach((el) => { if (el.name) cur[el.name] = el.value; }); all[f.dataset.tool] = cur; saveToolState(all); drawTool(e.target.tagName !== "SELECT"); });   // a currency change may add the rate field
  }
  d.querySelectorAll("[data-ot-close]").forEach((b, i) => (b.innerHTML = i === 0 ? `← ${t("Retour")}` : t("Fermer")));
  OPEN_TOOL = id; drawTool();
  if (!d.open) { d.showModal(); document.body.classList.add("ot-lock"); }
  const first = d.querySelector("input"); if (first && !matchMedia("(max-width: 760px)").matches) first.focus();
}
// The card shown in the candidate space.
function toolsCard() {
  return `<section class="ap-card ot-card"><h2>${t("Mes outils")}</h2>
    <p class="hint-l">${t("Pour décider avec les bons chiffres.")}</p>
    <div class="ot-tiles">${Object.entries(TOOLS).map(([id, [title, sub]]) => `<button type="button" class="ot-tile" data-tool-open="${id}"><b>${t(title)}</b><span>${t(sub)}</span></button>`).join("")}</div></section>`;
}
document.addEventListener("click", (e) => { const b = e.target.closest("[data-tool-open]"); if (b) openTool(b.dataset.toolOpen); });
