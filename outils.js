// alo.ht — salary tools in the candidate space (signed-in only): « Salaire net » and « Comparer deux offres ».
// Rates come from the database (alo_settings 'salary', edited in admin.html). SALARY_DEFAULT mirrors the values
// checked to the gourde on real Haitian payslips. Each person can switch any deduction on or off (e.g. OFATMA,
// which is not withheld everywhere). While « confirmed » is false, results carry a small « Estimation » tag.

const SALARY_DEFAULT = {
  year: "2025-2026", confirmed: false,
  source: "Barème vérifié sur des fiches de paie réelles jusqu’à 1 000 000 HTG par an (à confirmer par un comptable).",
  brackets: [[360000, 0], [540000, 12], [null, 18]],   // IRI: yearly HTG upper bound, rate %
  verified_up_to: 1000000,
  deductions: [   // on the gross salary of employees; « optional » ones start switched off
    { id: "cas", name: "CAS", pct: 1 },
    { id: "fdu", name: "FDU", pct: 1 },
    { id: "ona", name: "ONA", pct: 6 },
    { id: "ofatma", name: "OFATMA", pct: 3, optional: true },
  ],
  allowance_pct: 15, contract_pct: 2,
  usd_htg: 130.7986, usd_date: "2026-11-11", usd_source: "BRH",
};
const DEDUCTION_HELP = {
  ir: "Impôt sur le revenu individuel. L’employeur le retient chaque mois et le verse à la DGI. Il est calculé par tranches sur le salaire de l’année : plus le salaire est élevé, plus la part imposée est grande.",
  ona: "Cotisation pour votre pension de vieillesse à l’Office National d’Assurance-Vieillesse (ONA). Votre employeur verse aussi sa part.",
  cas: "Contribution de 1 % du salaire brut, retenue chaque mois.",
  fdu: "Contribution de 1 % du salaire brut, retenue chaque mois.",
  ofatma: "Assurance de l’OFATMA, retenue par certains employeurs seulement : activez-la si elle figure sur votre fiche de paie.",
  allow: "Les allocations (primes, indemnités) ne sont pas ajoutées au salaire pour l’impôt : une retenue fixe s’applique dessus.",
  contract: "Pour un contrat de consultance ou de prestation : un acompte d’impôt est retenu sur le montant brut, à la place de l’IRI et des cotisations.",
};
let SALARY = SALARY_DEFAULT, SALARY_LOADED = false;
async function loadSalaryRules() {
  if (SALARY_LOADED) return SALARY;
  SALARY_LOADED = true;
  if (db() && !DEMO) { try { const { data, error } = await db().rpc("salary_rules"); if (!error && data && data.brackets) SALARY = { ...SALARY_DEFAULT, ...data }; } catch {} }
  // Optional deductions known to ALO stay available even if the stored rules do not list them yet.
  SALARY_DEFAULT.deductions.filter((d) => d.optional && !SALARY.deductions.some((z) => z.id === d.id)).forEach((d) => (SALARY = { ...SALARY, deductions: [...SALARY.deductions, d] }));
  return SALARY;
}

// ---------- Which deductions apply: the person's own switches (shared by both tools) ----------
function dedOn(id) { const s = (toolState().ded || {}); if (id in s) return !!s[id]; const d = SALARY.deductions.find((z) => z.id === id); return !(d && d.optional); }
function setDed(id, on) { const all = toolState(); all.ded = { ...(all.ded || {}), [id]: on }; saveToolState(all); }

// ---------- The calculation (one place, used everywhere) ----------
// opts: { allow: monthly allowances (HTG), contract: consultant/contract worker, other: other monthly deductions (HTG) }
function netSalary(grossMonthHTG, rules = SALARY, opts = {}) {
  const g = Math.max(0, +grossMonthHTG || 0), allow = opts.contract ? 0 : Math.max(0, +opts.allow || 0), other = Math.max(0, +opts.other || 0), year = g * 12;
  const pctOf = (base, p) => Math.round(base * (+p || 0)) / 100;
  if (opts.contract) {
    const c = { id: "contract", name: "Acompte sur contrat", pct: +rules.contract_pct || 0, month: pctOf(g, rules.contract_pct), on: true };
    const total = c.month + other;
    return { gross: g, allow: 0, other, taxMonth: 0, irOn: false, contrib: [c], allowRet: 0, totalMonth: total, net: g - total, netYear: (g - total) * 12, rate: g ? total / g : 0, slices: [], taxable: 0, contract: true };
  }
  const contrib = rules.deductions.map((d) => ({ id: d.id, name: d.name, pct: +d.pct || 0, deductible: !!d.deductible, on: dedOn(d.id), month: pctOf(g, d.pct) }));
  const taxable = Math.max(0, year - contrib.filter((c) => c.on && c.deductible).reduce((n, c) => n + c.month * 12, 0));
  let prev = 0, taxYear = 0; const slices = [];
  for (const [top, rate] of rules.brackets) {
    const upper = top == null ? Infinity : +top, part = Math.max(0, Math.min(taxable, upper) - prev);
    slices.push({ from: prev, to: upper, rate: +rate, part, tax: part * (+rate) / 100 });
    taxYear += part * (+rate) / 100; prev = upper; if (taxable <= upper) break;
  }
  const irOn = dedOn("ir"), taxMonth = Math.round(taxYear / 12 * 100) / 100, allowRet = dedOn("allow") ? pctOf(allow, rules.allowance_pct) : 0;
  const totalMonth = (irOn ? taxMonth : 0) + contrib.filter((c) => c.on).reduce((n, c) => n + c.month, 0) + allowRet + other, income = g + allow;
  return { gross: g, allow, other, taxMonth, irOn, contrib, allowRet, totalMonth, net: income - totalMonth, netYear: (income - totalMonth) * 12, rate: income ? totalMonth / income : 0, slices, taxable,
    beyond: rules.verified_up_to && taxable > rules.verified_up_to };
}

// ---------- Helpers ----------
const otHtg = (n) => `${Math.round(+n || 0).toLocaleString(LANG === "en" ? "en-US" : "fr-FR")} HTG`;
const otPct = (r) => `${(r * 100).toLocaleString(LANG === "en" ? "en-US" : "fr-FR", { maximumFractionDigits: 1 })} %`;
const TOOLS_KEY = "alo-outils";
function toolState() { try { return JSON.parse(localStorage.getItem(TOOLS_KEY) || "{}"); } catch { return {}; } }
function saveToolState(s) { try { localStorage.setItem(TOOLS_KEY, JSON.stringify(s)); } catch {} }
const amt = (v) => +String(v ?? "").replace(/[^\d]/g, "") || 0;   // "45 000", "45,000" → 45000
const dec = (v) => +String(v ?? "").replace(/\s/g, "").replace(",", ".").replace(/[^\d.]/g, "") || 0;
const rateOf = (st) => dec(st.rate) || +SALARY.usd_htg || 0;
const toHTG = (amount, cur, st) => cur === "USD" ? amt(amount) * rateOf(st) : amt(amount);
const estTag = () => SALARY.confirmed ? "" : `<span class="ot-tag">${t("Estimation")}</span>`;
const numIn = (name, val, ph, attrs = "") => `<input name="${name}" type="text" inputmode="numeric" autocomplete="off" value="${esc(val ?? "")}" placeholder="${esc(ph || "")}" ${attrs} />`;

// ---------- Form pieces ----------
function statusSeg(prefix, st) {
  const v = st[prefix + "status"] || "salarie";
  return `<div class="ot-seg" role="radiogroup" aria-label="${t("Type de contrat")}">
    <label class="${v === "salarie" ? "on" : ""}"><input type="radio" name="${prefix}status" value="salarie" ${v === "salarie" ? "checked" : ""} />${t("Salarié(e)")}</label>
    <label class="${v === "contrat" ? "on" : ""}"><input type="radio" name="${prefix}status" value="contrat" ${v === "contrat" ? "checked" : ""} />${t("Consultant(e)")}</label></div>`;
}
function moneyRow(prefix, st, label) {
  const cur = st[prefix + "cur"] || "HTG";
  return `<label class="ot-field"><span>${t(label)}</span><div class="ot-money">${numIn(prefix + "gross", st[prefix + "gross"], t("Ex. 45 000"))}
    <select name="${prefix}cur" aria-label="${t("Devise")}"><option ${cur === "HTG" ? "selected" : ""}>HTG</option><option ${cur === "USD" ? "selected" : ""}>USD</option></select></div></label>`;
}
function rateRow(st, needed) {
  if (!needed) return "";
  return `<label class="ot-field"><span>${t("Taux (HTG pour 1 USD)")}</span><input name="rate" type="text" inputmode="decimal" autocomplete="off" value="${esc(st.rate ?? "")}" placeholder="${esc(String(SALARY.usd_htg || ""))}" />
    <small>${t("Taux de référence BRH du")} ${fmtDay(SALARY.usd_date)}</small></label>`;
}

// ---------- Result pieces ----------
// A breakdown line with its own switch: the person removes or adds what applies to them.
function dedLine(id, name, amount, note, on) {
  return `<div class="ot-row ${on ? "" : "off"}"><label class="ot-sw"><input type="checkbox" data-ded="${id}" ${on ? "checked" : ""} aria-label="${esc(t(name))}" /><i></i></label>
    <div class="ot-row-l"><b>${esc(t(name))}</b>${note ? `<small>${note}</small>` : ""}</div><span>${on ? `− ${otHtg(amount)}` : t("non appliqué")}</span></div>`;
}
function netPanel(r, contract) {
  return `<div class="ot-panel">
    <div class="ot-hero"><span>${t("Salaire net par mois")} ${estTag()}</span><b>${otHtg(r.net)}</b><small>${otHtg(r.netYear)} ${t("par an")} · ${t("retenues")} ${otPct(r.rate)}</small></div>
    <div class="ot-rows">
      <div class="ot-row plain"><div class="ot-row-l"><b>${t(contract ? "Montant brut" : "Salaire brut")}</b></div><span>${otHtg(r.gross)}</span></div>
      ${r.allow ? `<div class="ot-row plain"><div class="ot-row-l"><b>${t("Allocations")}</b></div><span>+ ${otHtg(r.allow)}</span></div>` : ""}
      ${contract ? `<div class="ot-row"><span class="ot-sw-ph"></span><div class="ot-row-l"><b>${t("Acompte sur contrat")}</b><small>${r.contrib[0].pct} % ${t("du montant brut")}</small></div><span>− ${otHtg(r.contrib[0].month)}</span></div>`
        : `${dedLine("ir", "IRI — impôt sur le revenu", r.taxMonth, r.beyond ? t("Barème à vérifier au-delà de 1 000 000 HTG par an.") : "", r.irOn)}
           ${r.contrib.map((c) => dedLine(c.id, c.name, c.month, `${c.pct} % ${t("du salaire brut")}`, c.on)).join("")}
           ${r.allow ? dedLine("allow", "Retenue sur allocations", r.allowRet, `${SALARY.allowance_pct} % ${t("des allocations")}`, dedOn("allow")) : ""}`}
      ${r.other ? `<div class="ot-row"><span class="ot-sw-ph"></span><div class="ot-row-l"><b>${t("Autres retenues")}</b></div><span>− ${otHtg(r.other)}</span></div>` : ""}
      <div class="ot-row total"><div class="ot-row-l"><b>${t("Total des retenues")}</b></div><span>− ${otHtg(r.totalMonth)}</span></div>
    </div>
    <p class="ot-hint">${t("Touchez un interrupteur pour retirer ou ajouter une retenue, selon votre fiche de paie.")}</p>
  </div>`;
}
function howFold(r, contract) {
  const ids = contract ? ["contract"] : ["ir", ...r.contrib.map((c) => c.id), ...(r.allow ? ["allow"] : [])];
  const names = { ir: "IRI", contract: "Acompte sur contrat", allow: "Retenue sur allocations" };
  return `<details class="ot-how"><summary>${t("Comment c’est calculé")}</summary>
    <dl class="ot-gloss">${ids.filter((id) => DEDUCTION_HELP[id]).map((id) => `<dt>${esc(t(names[id] || (r.contrib.find((c) => c.id === id) || {}).name || id))}</dt><dd>${t(DEDUCTION_HELP[id])}</dd>`).join("")}</dl>
    ${contract ? "" : `<table class="ot-table"><thead><tr><th>${t("Tranche annuelle")}</th><th>${t("Taux")}</th><th>${t("Impôt par an")}</th></tr></thead><tbody>
      ${SALARY.brackets.map(([top, rate], i) => { const from = i ? +SALARY.brackets[i - 1][0] : 0, s = r.slices.find((z) => z.from === from);
        return `<tr class="${s && s.part > 0 ? "on" : ""}"><td>${top == null ? `${t("plus de")} ${otHtg(from)}` : `${otHtg(from)} – ${otHtg(top)}`}</td><td>${rate} %</td><td>${s ? otHtg(s.tax) : "—"}</td></tr>`; }).join("")}
    </tbody></table>`}
    <p class="ot-hint">${esc(t(SALARY.source || ""))} ${t("Non compris : le 13e mois (boni).")}</p>
  </details>`;
}

// ---------- Tool 1: net salary ----------
function netView(st) {
  const cur = st.cur || "HTG", contract = (st.status || "salarie") === "contrat";
  const g = toHTG(st.gross, cur, st), allow = contract ? 0 : toHTG(st.allow, cur, st);
  const r = netSalary(g, SALARY, { allow, contract, other: amt(st.other) });
  const form = `<form class="ot-form" data-tool="net">
    ${statusSeg("", st)}
    ${moneyRow("", st, contract ? "Montant brut du contrat par mois" : "Salaire brut par mois")}
    ${contract ? "" : `<label class="ot-field"><span>${t("Allocations par mois")} <em>${t("facultatif")}</em></span>${numIn("allow", st.allow, t("Primes, indemnités…"))}</label>`}
    <label class="ot-field"><span>${t("Autres retenues par mois")} <em>${t("facultatif")}</em></span>${numIn("other", st.other, t("Prêt, assurance…"))}</label>
    ${rateRow(st, cur === "USD")}
  </form>`;
  const result = g > 0 ? `${netPanel(r, contract)}${howFold(r, contract)}` : `<div class="ot-panel ot-empty"><div class="ot-hero"><span>${t("Salaire net par mois")}</span><b>— HTG</b><small>${t("Entrez un salaire brut.")}</small></div></div>`;
  return [form, result];
}

// ---------- Tool 2: compare two offers ----------
function compareView(st) {
  const side = (k) => {
    const cur = st[k + "cur"] || "HTG", contract = (st[k + "status"] || "salarie") === "contrat";
    const g = toHTG(st[k + "gross"], cur, st), allow = contract ? 0 : toHTG(st[k + "allow"], cur, st);
    const r = netSalary(g, SALARY, { allow, contract }), transport = amt(st[k + "tr"]) * (amt(st[k + "days"]) || 22), extra = amt(st[k + "adv"]);
    return { usd: cur === "USD", g, r, transport, extra, left: r.net - transport + extra };
  };
  const A = side("a"), B = side("b"), needRate = A.usd || B.usd;
  const col = (k, label) => `<fieldset class="ot-col"><legend>${t(label)}</legend>
      ${statusSeg(k, st)}${moneyRow(k, st, "Salaire brut par mois")}
      ${(st[k + "status"] || "salarie") === "contrat" ? "" : `<label class="ot-field"><span>${t("Allocations par mois")} <em>${t("facultatif")}</em></span>${numIn(k + "allow", st[k + "allow"], "")}</label>`}
      <div class="ot-two"><label class="ot-field"><span>${t("Transport par jour")}</span>${numIn(k + "tr", st[k + "tr"], t("Ex. 250"))}</label>
        <label class="ot-field"><span>${t("Jours par mois")}</span>${numIn(k + "days", st[k + "days"] ?? 22, "22", 'maxlength="2"')}</label></div>
      <label class="ot-field"><span>${t("Avantages par mois")} <em>${t("repas, transport payé…")}</em></span>${numIn(k + "adv", st[k + "adv"], "")}</label>
    </fieldset>`;
  const card = (label, S, win) => `<div class="ot-cmp ${win ? "win" : ""}"><span class="ot-cmp-h">${t(label)}${win ? ` <em>${t("Meilleure offre")}</em>` : ""}</span>
      <b>${S.g > 0 ? otHtg(S.left) : "— HTG"}</b><small>${t("vous reste par mois")}</small>
      ${S.g > 0 ? `<div class="ot-cmp-d"><span>${t("Net")} ${otHtg(S.r.net)}</span><span>${t("Transport")} − ${otHtg(S.transport)}</span>${S.extra ? `<span>${t("Avantages")} + ${otHtg(S.extra)}</span>` : ""}</div>` : ""}</div>`;
  const both = A.g > 0 && B.g > 0, diff = B.left - A.left;
  const form = `<form class="ot-form" data-tool="compare"><div class="ot-cols">${col("a", "Offre A")}${col("b", "Offre B")}</div>${rateRow(st, needRate)}</form>`;
  const result = `<div class="ot-panel">
      <div class="ot-cmps">${card("Offre A", A, both && diff < -0.5)}${card("Offre B", B, both && diff > 0.5)}</div>
      ${both ? `<p class="ot-diff">${Math.abs(diff) < 1 ? t("Les deux offres vous laissent le même montant chaque mois.")
        : `${t("Différence")} : <b>${otHtg(Math.abs(diff))}</b> ${t("par mois")} · ${otHtg(Math.abs(diff) * 12)} ${t("par an")} ${estTag()}`}</p>` : ""}
      <p class="ot-hint">${t("Calculé avec les retenues que vous avez choisies dans « Salaire net ».")}</p>
    </div>`;
  return [form, result];
}

// ---------- Pop-up ----------
const TOOLS = { net: ["Salaire net", "Combien vous recevez vraiment, après l’impôt et les cotisations.", netView], compare: ["Comparer deux offres", "Ce qu’il vous reste chaque mois avec chaque offre, transport compris.", compareView] };
let OPEN_TOOL = null;
function drawTool(onlyResult) {
  const d = document.getElementById("ot-dialog"); if (!d || !OPEN_TOOL) return;
  const [title, sub, view] = TOOLS[OPEN_TOOL], st = toolState()[OPEN_TOOL] || {}, [form, result] = view(st);
  const out = d.querySelector(".ot-out");
  if (onlyResult && out) { out.innerHTML = result; return; }
  d.querySelector(".ot-body").innerHTML = `<header class="ot-head"><h2 id="ot-title">${t(title)}</h2><p class="ot-sub">${t(sub)}</p></header>
    <div class="ot-layout ${OPEN_TOOL}"><div class="ot-in">${form}</div><div class="ot-out">${result}</div></div>`;
}
async function openTool(id) {
  await loadSalaryRules();
  let d = document.getElementById("ot-dialog");
  if (!d) {
    d = document.createElement("dialog"); d.id = "ot-dialog"; d.className = "ot-dialog"; d.setAttribute("aria-labelledby", "ot-title");
    d.innerHTML = `<div class="ot-bar"><button type="button" class="linkbtn" data-ot-close>← ${t("Retour")}</button><button type="button" class="ot-x" data-ot-close aria-label="${t("Fermer")}">${t("Fermer")}</button></div><div class="ot-body"></div>`;
    document.body.appendChild(d);
    d.addEventListener("click", (e) => { if (e.target === d || e.target.closest("[data-ot-close]")) d.close(); });
    d.addEventListener("close", () => { if (d.open) return; OPEN_TOOL = null; document.body.classList.remove("ot-lock"); const card = document.querySelector(".ot-card"); if (card) card.outerHTML = toolsCard(); });
    // Typing refreshes only the result (the field stays, so the phone keyboard stays open); a choice that changes the fields redraws all.
    d.addEventListener("input", (e) => {
      const el = e.target;
      if (el.dataset.ded) { setDed(el.dataset.ded, el.checked); return drawTool(true); }
      const f = el.form; if (!f || !f.dataset.tool) return;
      const all = toolState(), cur = all[f.dataset.tool] || {}; [...f.elements].forEach((x) => { if (x.name && (x.type !== "radio" || x.checked)) cur[x.name] = x.value; }); all[f.dataset.tool] = cur; saveToolState(all);
      drawTool(!(el.tagName === "SELECT" || el.type === "radio"));
    });
  }
  d.querySelectorAll("[data-ot-close]").forEach((b, i) => (b.textContent = i === 0 ? `← ${t("Retour")}` : t("Fermer")));
  OPEN_TOOL = id; drawTool();
  if (!d.open) { d.showModal(); document.body.classList.add("ot-lock"); }
  const first = d.querySelector(".ot-in input[type=text]"); if (first && !matchMedia("(max-width: 760px)").matches) first.focus();
}

// ---------- The card in the candidate space: mini-tools that work in place ----------
function quickNetOut(st) {
  const g = amt(st.gross); if (!g) return `<b class="ot-q-empty">— HTG</b><span>${t("net par mois")}</span>`;
  const cur = st.cur || "HTG", r = netSalary(toHTG(st.gross, cur, st), SALARY, { allow: toHTG(st.allow, cur, st), contract: st.status === "contrat", other: amt(st.other) });
  return `<b>${otHtg(r.net)}</b><span>${t("net par mois")} ${estTag()}</span>`;
}
function quickCmpOut(st) {
  if (!amt(st.agross) || !amt(st.bgross)) return `<b class="ot-q-empty">A · B</b><span>${t("Entrez deux salaires bruts.")}</span>`;
  const n = (k) => netSalary(toHTG(st[k + "gross"], st[k + "cur"] || "HTG", st), SALARY, { contract: st[k + "status"] === "contrat" }).net, d = n("b") - n("a");
  return Math.abs(d) < 1 ? `<b>=</b><span>${t("Même salaire net.")}</span>` : `<b>${d > 0 ? "B" : "A"} + ${otHtg(Math.abs(d))}</b><span>${t("net par mois, avant transport")}</span>`;
}
function toolsCard() {
  const all = toolState(), n = all.net || {}, c = all.compare || {};
  return `<section class="ap-card ot-card"><h2>${t("Mes outils")}</h2>
    <div class="ot-tiles">
      <div class="ot-tile">
        <b class="ot-tile-h">${t("Salaire net")}</b>
        <label class="ot-q"><span>${t("Salaire brut par mois")}</span><input data-quick="net" name="gross" type="text" inputmode="numeric" autocomplete="off" value="${esc(n.gross ?? "")}" placeholder="${t("Ex. 45 000")}" /></label>
        <div class="ot-q-out" id="q-net" aria-live="polite">${quickNetOut(n)}</div>
        <button type="button" class="btn btn-plain" data-tool-open="net">${t("Voir le détail")}</button>
      </div>
      <div class="ot-tile">
        <b class="ot-tile-h">${t("Comparer deux offres")}</b>
        <div class="ot-q2"><label class="ot-q"><span>${t("Offre A")}</span><input data-quick="compare" name="agross" type="text" inputmode="numeric" autocomplete="off" value="${esc(c.agross ?? "")}" placeholder="45 000" /></label>
          <label class="ot-q"><span>${t("Offre B")}</span><input data-quick="compare" name="bgross" type="text" inputmode="numeric" autocomplete="off" value="${esc(c.bgross ?? "")}" placeholder="52 500" /></label></div>
        <div class="ot-q-out" id="q-cmp" aria-live="polite">${quickCmpOut(c)}</div>
        <button type="button" class="btn btn-plain" data-tool-open="compare">${t("Ajouter le transport et comparer")}</button>
      </div>
    </div></section>`;
}
document.addEventListener("input", (e) => {
  const el = e.target; if (!el.dataset || !el.dataset.quick) return;
  const all = toolState(), k = el.dataset.quick, st = all[k] || {}; st[el.name] = el.value; all[k] = st; saveToolState(all);   // the full tool opens with the same numbers
  const out = document.getElementById(k === "net" ? "q-net" : "q-cmp"); if (out) out.innerHTML = k === "net" ? quickNetOut(st) : quickCmpOut(st);
});
document.addEventListener("click", (e) => { const b = e.target.closest("[data-tool-open]"); if (b) openTool(b.dataset.toolOpen); });
