// alo.ht — simple version. Shared by every page.
// Sample jobs: shown when Supabase isn't configured, or with ?demo=1 in the address (for previews).

let JOBS = [
  { id: 1, title: "Assistant(e) comptable", company: "Cabinet Fanmi & Associés", city: "Delmas", type: "Temps plein", category: "Bureau",
    pay: "35 000 – 40 000 HTG / mois", salary_min: 35000, experience: "1 à 3 ans", days: 1,
    about: "Rejoignez une équipe de 12 personnes qui accompagne des PME haïtiennes dans leur comptabilité et leurs déclarations fiscales.",
    responsibilities: ["Saisir les factures et les pièces comptables", "Faire les rapprochements bancaires mensuels", "Préparer les rapports pour les clients"],
    needs: ["Licence en comptabilité ou en cours", "Maîtrise d'Excel", "Rigueur et discrétion"],
    benefits: ["Assurance santé", "Formation continue", "Transport remboursé"] },
  { id: 2, title: "Infirmier(ère)", company: "Clinique Espwa", city: "Port-au-Prince", type: "Temps plein", category: "Santé",
    pay: "45 000 – 55 000 HTG / mois", salary_min: 45000, experience: "1 à 3 ans", days: 2,
    about: "Clinique de quartier offrant des soins généraux et de maternité.",
    responsibilities: ["Soins aux patients", "Suivi des dossiers médicaux", "Soutien aux médecins"],
    needs: ["Diplôme d'infirmier(ère)", "2 ans d'expérience", "Français et créole"],
    benefits: ["Assurance santé", "Repas sur place"] },
  { id: 3, title: "Agent(e) service client", company: "Konekte Telecom", city: "Port-au-Prince", type: "Temps plein", category: "Service client", positions: 3, skills: ["Service client", "Communication", "Excel"],
    pay: "20 000 – 24 000 HTG / mois", salary_min: 20000, experience: "Débutant", days: 0,
    about: "Opérateur télécom en croissance, à l'écoute de ses clients 7 jours sur 7.",
    responsibilities: ["Répondre aux appels et messages WhatsApp", "Résoudre les problèmes simples", "Orienter les demandes complexes"],
    needs: ["Français, créole, anglais de base", "Bonne écoute", "À l'aise avec un ordinateur"],
    benefits: ["Prime de performance", "Forfait téléphone"] },
  { id: 4, title: "Développeur(se) web junior", company: "Kod Ayiti", city: "Télétravail", type: "Temps plein", category: "Technologie",
    pay: "60 000 – 80 000 HTG / mois", salary_min: 60000, experience: "Débutant", days: 2,
    about: "Studio numérique qui crée des sites et des applications pour des entreprises en Haïti et dans la diaspora.",
    responsibilities: ["Construire des pages web", "Corriger des bugs", "Travailler avec les designers"],
    needs: ["HTML, CSS, JavaScript", "Un projet à montrer", "Envie d'apprendre"],
    benefits: ["100 % télétravail", "Ordinateur fourni", "Mentorat"] },
  { id: 5, title: "Caissier / Caissière", company: "Supermarché Lakay", city: "Pétion-Ville", type: "Temps plein", category: "Commerce",
    pay: "18 000 – 22 000 HTG / mois", salary_min: 18000, experience: "Débutant", days: 1,
    about: "Supermarché familial ouvert 7 jours sur 7.",
    responsibilities: ["Accueillir les clients", "Encaisser les achats", "Tenir la caisse à jour"],
    needs: ["Bon contact avec les clients", "Calcul rapide", "Disponible le samedi"],
    benefits: ["Réduction sur les achats"] },
  { id: 6, title: "Responsable des ressources humaines", company: "Groupe Solèy", city: "Port-au-Prince", type: "Temps plein", category: "Bureau",
    pay: "", salary_min: null, experience: "5 ans et plus", days: 3,
    about: "Groupe de distribution présent dans 5 villes, 300 employés.",
    responsibilities: ["Piloter le recrutement", "Gérer la paie avec la comptabilité", "Mettre en place les évaluations annuelles"],
    needs: ["Master en RH ou gestion", "5 ans d'expérience", "Leadership"],
    benefits: ["Véhicule de fonction", "Assurance santé famille"] },
  { id: 7, title: "Chauffeur livreur", company: "Transport Nò", city: "Cap-Haïtien", type: "Temps plein", category: "Transport",
    pay: "25 000 HTG / mois", salary_min: 25000, experience: "1 à 3 ans", days: 4,
    about: "Entreprise de livraison pour les commerces du Nord.",
    responsibilities: ["Livrer les marchandises", "Vérifier l'état du véhicule", "Encaisser les paiements à la livraison"],
    needs: ["Permis de conduire valide", "Connaître la région", "Ponctuel"],
    benefits: ["Repas fourni"] },
  { id: 8, title: "Professeur de mathématiques", company: "Collège Limyè", city: "Jacmel", type: "Temps partiel", category: "Éducation",
    pay: "", salary_min: null, experience: "Tous niveaux", days: 5,
    about: "Collège privé de 600 élèves.",
    responsibilities: ["Enseigner en 3e cycle et secondaire", "Préparer les examens", "Suivre les élèves en difficulté"],
    needs: ["Licence ou études en cours", "Patience", "Expérience en classe"],
    benefits: ["Horaires flexibles"] },
  { id: 9, title: "Stagiaire marketing digital", company: "Kod Ayiti", city: "Télétravail", type: "Stage", category: "Technologie",
    pay: "10 000 HTG / mois", salary_min: 10000, experience: "Débutant", days: 6,
    about: "Stage de 6 mois pour apprendre le marketing en ligne.",
    responsibilities: ["Publier sur les réseaux sociaux", "Suivre les statistiques", "Proposer des idées de contenu"],
    needs: ["Étudiant(e) en communication ou marketing", "Créativité", "Bon français écrit"],
    benefits: ["Attestation de stage", "Mentorat"] },
]

// Sector look: emoji + tile color
const CATS = {
  "Commerce": ["🛒", "var(--yellow-soft)"], "Santé": ["🩺", "var(--green-soft)"], "Transport": ["🚚", "var(--primary-soft)"],
  "Bureau": ["📊", "var(--violet-soft)"], "Éducation": ["📚", "var(--orange-soft)"], "Service client": ["🎧", "var(--pink-soft)"],
  "Construction": ["🔧", "var(--yellow-soft)"], "Technologie": ["💻", "var(--primary-soft)"], "Hôtellerie": ["🍽️", "var(--orange-soft)"],
};
const AVATAR_COLORS = ["var(--primary-soft)", "var(--orange-soft)", "var(--green-soft)", "var(--violet-soft)", "var(--yellow-soft)", "var(--pink-soft)"];
function avatar(j, big) {
  const initials = j.company.split(/\s+/).filter((w) => /^[A-ZÀ-Ý]/.test(w)).slice(0, 2).map((w) => w[0]).join("");
  return `<div class="avatar${big ? " lg" : ""}" style="background:${AVATAR_COLORS[j.id % AVATAR_COLORS.length]}">${esc(initials)}</div>`;
}

// The AI assistant (CV import and rewording) needs its server function deployed; until then it is shown as « Bientôt ».
const AI_LIVE = !!(window.ALO_CONFIG && window.ALO_CONFIG.AI_ASSISTANT);
// ---- Translations live in i18n.js, loaded only for Kreyòl and English (French is the default) ----
const KR = {}, EN = {};
function mergeI18n() { const d = window.ALO_I18N; if (!d) return false; Object.assign(KR, d.KR); Object.assign(EN, d.EN); return true; }
mergeI18n();
let I18N_LOADING = null;
function loadI18n() {
  if (window.ALO_I18N) { mergeI18n(); return Promise.resolve(); }
  return I18N_LOADING || (I18N_LOADING = new Promise((ok) => { const s = document.createElement("script"); s.src = "i18n.js?v=20261111n"; s.onload = () => { mergeI18n(); ok(); }; s.onerror = () => ok(); document.head.appendChild(s); }));
}
function getLang() { try { const l = localStorage.getItem("alo-lang"); return ["fr", "kr", "en"].includes(l) ? l : "fr"; } catch { return "fr"; } }
function setLang(l) { try { localStorage.setItem("alo-lang", l); } catch {} }
// A shared link can choose the language: ?lang=en, ?lang=kr (or ht), ?lang=fr
(() => { const q = (new URLSearchParams(location.search).get("lang") || "").toLowerCase(); const l = q === "ht" ? "kr" : q; if (["fr", "kr", "en"].includes(l)) setLang(l); })();
let LANG = getLang();
const t = (s) => (LANG === "kr" && KR[s]) || (LANG === "en" && EN[s]) || s;
const LANG_NAMES = { fr: ["FR", "Français"], kr: ["KR", "Kreyòl ayisyen"], en: ["EN", "English"] };

const BRAND = `<span class="brand">alo<span>.</span>ht</span>`;
function translatePage() {
  document.querySelectorAll("input[data-cities]").forEach((i) => i._texts && i._texts());
  const root = document.documentElement;
  root.lang = LANG === "kr" ? "ht" : LANG === "en" ? "en" : "fr";
  document.querySelectorAll("[data-t]").forEach((el) => {
    if (!el.dataset.fr) el.dataset.fr = el.textContent.trim();
    const txt = t(el.dataset.fr);
    // "alo.ht" in running text is shown like the logo (yellow dot).
    if (txt.includes("alo.ht")) el.innerHTML = esc(txt).replace(/alo\.ht/g, BRAND);
    else if (el.textContent !== txt) el.textContent = txt;
  });
  document.querySelectorAll("[data-tp]").forEach((el) => {
    if (!el.dataset.frp) el.dataset.frp = el.placeholder;
    el.placeholder = t(el.dataset.frp);
  });
  // Browser tab title: "Mon espace — alo.ht" → "My space — alo.ht"
  // (left alone when the page sets its own title, e.g. a job's name)
  if (!root.dataset.frTitle) root.dataset.frTitle = document.title;
  if (document.title === root.dataset.frTitle || document.title === root.dataset.lastTitle) {
    document.title = root.dataset.frTitle.split(" — ").map((x) => (x === "alo.ht" ? x : t(x))).join(" — ");
    root.dataset.lastTitle = document.title;
  }
  updateLangUI();
  root.classList.remove("i18n-wait");
}

// ---- Language selector: one button (flag + code) opening a small menu with the full names ----
function buildLangMenus() {
  document.querySelectorAll(".langs:not(.lm)").forEach((g) => {
    g.classList.add("lm"); g.removeAttribute("role");
    const flags = [...g.querySelectorAll(".lang-flag")];
    const btn = document.createElement("button");
    btn.type = "button"; btn.className = "lang-cur"; btn.setAttribute("aria-haspopup", "true"); btn.setAttribute("aria-expanded", "false");
    const menu = document.createElement("div");
    menu.className = "lang-menu"; menu.setAttribute("role", "menu"); menu.hidden = true;
    flags.forEach((f) => {
      f.setAttribute("role", "menuitemradio"); f.removeAttribute("title"); f.tabIndex = -1;
      if (!f.querySelector(".lang-name")) f.insertAdjacentHTML("beforeend", `<span class="lang-name">${LANG_NAMES[f.dataset.lang][1]}</span><span class="lang-code">${LANG_NAMES[f.dataset.lang][0]}</span>`);
      menu.appendChild(f);
    });
    g.prepend(btn); g.appendChild(menu);
  });
  updateLangUI();
}
function updateLangUI() {
  document.querySelectorAll(".langs.lm").forEach((g) => {
    const cur = g.querySelector(`.lang-flag[data-lang="${LANG}"]`), btn = g.querySelector(".lang-cur"), svg = cur && cur.querySelector("svg");
    if (btn) { btn.innerHTML = `${svg ? svg.outerHTML : ""}<span>${LANG_NAMES[LANG][0]}</span>`; btn.setAttribute("aria-label", `${t("Langue")} : ${LANG_NAMES[LANG][1]}`); }
    g.querySelectorAll(".lang-flag").forEach((f) => { const on = f.dataset.lang === LANG; f.classList.toggle("on", on); f.setAttribute("aria-checked", on); });
  });
  document.querySelectorAll(".m-lang").forEach((b) => { const on = b.dataset.lang === LANG; b.classList.toggle("on", on); b.setAttribute("aria-pressed", on); });
}
function closeLangMenus(except) {
  document.querySelectorAll(".langs.lm.open").forEach((g) => { if (g === except) return; g.classList.remove("open"); g.querySelector(".lang-menu").hidden = true; g.querySelector(".lang-cur").setAttribute("aria-expanded", "false"); });
}
function openLangMenu(g) {
  closeLangMenus(g); g.classList.add("open"); g.querySelector(".lang-menu").hidden = false; g.querySelector(".lang-cur").setAttribute("aria-expanded", "true");
  (g.querySelector(".lang-flag.on") || g.querySelector(".lang-flag")).focus();
}

// Keep what the person typed when a page redraws itself in the new language.
function fieldKey(el) {
  const k = el.id || el.name || el.dataset.k || el.dataset.p || el.dataset.filter; if (!k) return null;
  return `${el.form ? el.form.id || el.form.dataset.hire || el.form.dataset.int || "" : ""}|${k}|${el.type}${el.type === "checkbox" || el.type === "radio" ? "|" + el.value : ""}`;
}
function snapshotFields() {
  const m = new Map();
  document.querySelectorAll("main input, main textarea, main select").forEach((el) => {
    if (["hidden", "file", "submit", "button"].includes(el.type)) return;
    const k = fieldKey(el); if (!k) return;
    if (el.type === "checkbox" || el.type === "radio") m.set(k, el.checked); else if (el.value !== "") m.set(k, el.value);
  });
  const a = document.activeElement;
  return { m, focus: a && a.matches && a.matches("main input, main textarea") ? fieldKey(a) : null, pos: a && a.selectionStart };
}
function restoreFields(snap) {
  document.querySelectorAll("main input, main textarea, main select").forEach((el) => {
    const k = fieldKey(el); if (!k || !snap.m.has(k)) return;
    if (el.type === "checkbox" || el.type === "radio") { if (!el.disabled) el.checked = snap.m.get(k); return; }
    if (el.value !== "") return;
    if (el.tagName === "SELECT" && ![...el.options].some((o) => o.value === snap.m.get(k))) return;
    el.value = snap.m.get(k);
  });
  if (snap.focus) { const el = [...document.querySelectorAll("main input, main textarea")].find((z) => fieldKey(z) === snap.focus);
    if (el) { el.focus({ preventScroll: true }); try { if (snap.pos != null) el.setSelectionRange(snap.pos, snap.pos); } catch {} } }
}

// Switch language without reloading: same place on the page, same typed text, a short fade to show it worked.
function switchLang(l, fromOtherTab) {
  if (!["fr", "kr", "en"].includes(l) || l === LANG) return;
  if (l !== "fr" && !window.ALO_I18N) { loadI18n().then(() => switchLang(l, fromOtherTab)); return; }   // fetch the translations once, then switch
  const probe = document.elementFromPoint(innerWidth / 2, Math.min(160, innerHeight / 3));
  const anchor = probe && probe.closest("h1, h2, h3, p, li, label, .ap-card, section, article");
  const before = anchor ? anchor.getBoundingClientRect().top : 0, y0 = scrollY;
  const snap = snapshotFields();
  LANG = l; if (!fromOtherTab) setLang(l);
  translatePage();
  if (window.onLang) { try { window.onLang(); } catch (e) { console.error("ALO: language redraw", e); } }
  restoreFields(snap);
  if (anchor && anchor.isConnected) window.scrollBy({ top: anchor.getBoundingClientRect().top - before, behavior: "instant" });
  else window.scrollTo({ top: y0, behavior: "instant" });
  const main = document.querySelector("main");
  if (main && main.animate && !matchMedia("(prefers-reduced-motion: reduce)").matches) main.animate([{ opacity: 0.35 }, { opacity: 1 }], { duration: 200, easing: "ease-out" });
  let live = document.getElementById("lang-live");
  if (!live) { live = document.createElement("div"); live.id = "lang-live"; live.className = "sr-only"; live.setAttribute("aria-live", "polite"); document.body.appendChild(live); }
  live.textContent = LANG_NAMES[LANG][1];
}

document.addEventListener("click", (e) => {
  const ml = e.target.closest(".m-lang"); if (ml) { switchLang(ml.dataset.lang); return; }
  const g = e.target.closest(".langs.lm");
  if (!g) return closeLangMenus();
  if (e.target.closest(".lang-cur")) { if (g.classList.contains("open")) closeLangMenus(); else openLangMenu(g); return; }
  const flag = e.target.closest(".lang-flag");
  if (flag) { closeLangMenus(); switchLang(flag.dataset.lang); g.querySelector(".lang-cur").focus({ preventScroll: true }); }
});
document.addEventListener("keydown", (e) => {
  const g = e.target.closest && e.target.closest(".langs.lm.open"); if (!g) return;
  const items = [...g.querySelectorAll(".lang-flag")], i = items.indexOf(document.activeElement);
  if (e.key === "Escape") { closeLangMenus(); g.querySelector(".lang-cur").focus(); }
  else if (e.key === "ArrowDown" || e.key === "ArrowUp") { e.preventDefault(); items[(i + (e.key === "ArrowDown" ? 1 : items.length - 1)) % items.length].focus(); }
  else if (e.key === "Tab") closeLangMenus();
});
// Another tab changed the language: follow it.
window.addEventListener("storage", (e) => { if (e.key === "alo-lang" && e.newValue) switchLang(e.newValue, true); });

// ---- Helpers ------------------------------------------------------------
const norm = (s) => (s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
function ago(d) {
  if (d === 0) return t("Aujourd'hui");
  if (d === 1) return t("Hier");
  if (LANG === "en") return `${d} days ago`;
  return `${t("Il y a")} ${d} ${t("jours")}`;
}
// city can hold several cities separated by commas: an offer matches if it is in any of them.
function searchJobs(q, city) {
  const nq = norm(q), cities = String(city || "").split(",").map((c) => norm(c.trim())).filter(Boolean);
  return JOBS.filter((j) =>
    (!nq || norm(`${j.title} ${j.company} ${j.category}`).includes(nq)) &&
    (!cities.length || cities.some((c) => norm(j.city).includes(c)))
  );
}

// ---- City picker: choose one or several cities (replaces the browser's plain suggestion list) ----
const CITY_LIST = ["Port-au-Prince", "Pétion-Ville", "Delmas", "Tabarre", "Carrefour", "Croix-des-Bouquets", "Cap-Haïtien", "Les Cayes", "Gonaïves", "Saint-Marc",
  "Jacmel", "Jérémie", "Hinche", "Port-de-Paix", "Fort-Liberté", "Ouanaminthe", "Léogâne", "Petit-Goâve", "Miragoâne", "Mirebalais", "Télétravail"];
function setupCityPicker(inp) {
  if (inp._cp) return; inp._cp = true;
  inp.removeAttribute("list"); inp.type = "hidden";
  const wrap = document.createElement("div"); wrap.className = "cp";
  wrap.innerHTML = `<button type="button" class="cp-btn" aria-haspopup="dialog" aria-expanded="false"></button>
    <div class="cp-panel" role="dialog" hidden><div class="cp-top"><b class="cp-title"></b><button type="button" class="cp-close"></button></div>
      <input class="cp-find" type="text" autocomplete="off" />
      <div class="cp-list"></div>
      <div class="cp-foot"><button type="button" class="btn btn-plain cp-clear"></button><button type="button" class="btn cp-ok"></button></div></div>`;
  inp.after(wrap);
  const btn = wrap.querySelector(".cp-btn"), panel = wrap.querySelector(".cp-panel"), find = wrap.querySelector(".cp-find"), list = wrap.querySelector(".cp-list");
  let sel = new Set();
  const read = () => new Set(String(inp.value || "").split(",").map((c) => c.trim()).filter(Boolean));
  const label = () => { const a = [...read()]; btn.innerHTML = a.length ? `<span>${esc(a.slice(0, 2).map((c) => t(c)).join(", "))}${a.length > 2 ? ` +${a.length - 2}` : ""}</span>` : `<span class="cp-ph">${t("Toutes les villes")}</span>`; };
  const drawList = () => {
    const q = norm(find.value.trim()), extra = [...sel].filter((c) => !CITY_LIST.includes(c));
    const names = [...extra, ...CITY_LIST].filter((c) => !q || norm(c).includes(q) || norm(t(c)).includes(q));
    const typed = find.value.trim();
    list.innerHTML = names.map((c) => `<label class="cp-item ${sel.has(c) ? "on" : ""}"><input type="checkbox" value="${esc(c)}" ${sel.has(c) ? "checked" : ""} /><span>${esc(t(c))}</span></label>`).join("")
      + (typed && !names.some((c) => norm(c) === norm(typed)) ? `<button type="button" class="cp-add" data-v="${esc(typed)}">${t("Ajouter")} « ${esc(typed)} »</button>` : "");
  };
  const texts = () => { wrap.querySelector(".cp-title").textContent = t("Villes"); wrap.querySelector(".cp-close").textContent = t("Fermer"); find.placeholder = t("Rechercher une ville");
    wrap.querySelector(".cp-clear").textContent = t("Effacer"); wrap.querySelector(".cp-ok").textContent = t("Valider"); label(); };
  const open = () => { sel = read(); find.value = ""; drawList(); panel.hidden = false; btn.setAttribute("aria-expanded", "true"); document.body.classList.add("cp-lock"); if (!matchMedia("(max-width: 760px)").matches) find.focus(); };
  const close = () => { panel.hidden = true; btn.setAttribute("aria-expanded", "false"); document.body.classList.remove("cp-lock"); };
  const apply = () => { inp.value = [...sel].join(", "); label(); close(); inp.dispatchEvent(new Event("change", { bubbles: true })); };
  btn.onclick = () => (panel.hidden ? open() : close());
  wrap.querySelector(".cp-close").onclick = close;
  wrap.querySelector(".cp-ok").onclick = apply;
  wrap.querySelector(".cp-clear").onclick = () => { sel.clear(); drawList(); };
  find.oninput = drawList;
  find.onkeydown = (e) => { if (e.key === "Enter") { e.preventDefault(); const v = find.value.trim(); if (v) { const m = CITY_LIST.find((c) => norm(c) === norm(v)) || v; sel.add(m); find.value = ""; drawList(); } } };
  list.onchange = (e) => { const c = e.target.value; e.target.checked ? sel.add(c) : sel.delete(c); e.target.closest(".cp-item").classList.toggle("on", e.target.checked); };
  list.onclick = (e) => { const a = e.target.closest(".cp-add"); if (a) { sel.add(a.dataset.v); find.value = ""; drawList(); } };
  document.addEventListener("click", (e) => { if (!panel.hidden && !wrap.contains(e.target)) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !panel.hidden) { close(); btn.focus(); } });
  inp._sync = label;
  texts(); inp._texts = texts;
}
function setupCityPickers(root = document) { root.querySelectorAll("input[data-cities]").forEach(setupCityPicker); }
document.addEventListener("DOMContentLoaded", () => setupCityPickers());

// ---- Supabase ------------------------------------------------------------
const CFG = window.ALO_CONFIG || {};
const LIVE = /^https:\/\/[a-z0-9-]+\.supabase\.co\/?$/.test(CFG.SUPABASE_URL || "") &&
  !!CFG.SUPABASE_ANON_KEY && !/YOUR-/.test(CFG.SUPABASE_ANON_KEY);
let sb = null;
function db() {
  if (!LIVE) return null;
  if (!sb && window.supabase) sb = window.supabase.createClient(CFG.SUPABASE_URL, CFG.SUPABASE_ANON_KEY);
  return sb;
}
const JOB_COLS = "id,title,company,city,type,category,pay,about,needs,created_at,responsibilities,benefits,experience,salary_min,logo_url,questions,documents";
const JOB_COLS_2 = JOB_COLS.replace(",questions,documents", "");
const JOB_COLS_6 = JOB_COLS + ",positions,occupation,department,work_mode,skills,deadline";
const DEMO = new URLSearchParams(location.search).has("demo") || (() => { try { return sessionStorage.getItem("alo-demo") === "1"; } catch { return false; } })();
if (DEMO) { try { sessionStorage.setItem("alo-demo", "1"); } catch {} }

// Loads approved jobs from Supabase, or keeps the sample jobs when not configured.
async function loadJobs() {
  const c = db();
  if (!c || DEMO) return JOBS;
  let { data, error } = await c.from("jobs").select(JOB_COLS_6).eq("status", "approved")
    .order("created_at", { ascending: false }).limit(200);
  if (error && error.code === "42703") { // supabase-update-6.sql not run yet
    ({ data, error } = await c.from("jobs").select(JOB_COLS).eq("status", "approved").order("created_at", { ascending: false }).limit(200));
  }
  if (error && error.code === "42703") { // supabase-update-4.sql not run yet: skip questions/documents
    ({ data, error } = await c.from("jobs").select(JOB_COLS_2).eq("status", "approved").order("created_at", { ascending: false }).limit(200));
  }
  if (error && error.code === "42703") { // database not updated yet (supabase-update-2.sql): use the basic columns
    ({ data, error } = await c.from("jobs").select("id,title,company,city,type,category,pay,about,needs,created_at")
      .eq("status", "approved").order("created_at", { ascending: false }).limit(200));
  }
  if (error) { console.error("ALO: loading jobs failed", error); JOBS = []; return JOBS; }
  JOBS = data.map((j) => ({
    ...j, skills: j.skills || [], needs: j.needs || [], responsibilities: j.responsibilities || [], benefits: j.benefits || [], questions: j.questions || [], documents: j.documents || [],
    days: Math.max(0, Math.floor((Date.now() - new Date(j.created_at)) / 864e5)),
  }));
  return JOBS;
}

// Returns null on success, or an error message to show. Requires a signed-in user.
async function saveApplication(jobId, name, phone, message, email) {
  const c = db();
  if (!c || DEMO) return null; // demo mode: pretend it worked
  const { error } = await c.from("applications").insert({ job_id: jobId, name, phone, message, email: email || "" });
  if (error && error.code === "23505") return t("Vous avez déjà postulé à cette offre.");
  if (error) { console.error("ALO: apply failed", error); return t("Erreur. Vérifiez votre connexion et réessayez."); }
  return null;
}
async function saveJob(job) {
  const c = db();
  if (!c || DEMO) return null; // sample mode: nothing is saved
  let { error } = await c.from("jobs").insert({ ...job, status: "pending" });
  if ((error && error.code === "PGRST204") || (error && error.code === "23514" && job.plan === "organisation")) { // supabase-update-8.sql not run yet
    const { employer_size, package: _pk, addons, order_id, ...rest } = job; job = { ...rest, plan: rest.plan === "organisation" ? "entreprise" : rest.plan };
    ({ error } = await c.from("jobs").insert({ ...job, status: "pending" }));
  }
  if (error && error.code === "PGRST204") { // supabase-update-6.sql not run yet: keep the older fields
    const { positions, occupation, department, work_mode, skills, deadline, plan, price_usd, salary_from, salary_to, salary_currency, salary_public, employer_size, ...older } = job;
    job = older; ({ error } = await c.from("jobs").insert({ ...job, status: "pending" }));
  }
  if (error && error.code === "PGRST204" && (job.questions || job.documents)) {
    const { questions, documents, ...rest } = job;
    ({ error } = await c.from("jobs").insert({ ...rest, status: "pending" }));
  }
  if (error && error.code === "PGRST204") { // database not updated yet (supabase-update-2.sql): send the basic fields
    const { responsibilities, benefits, experience, salary_min, questions, documents, ...basic } = job;
    ({ error } = await c.from("jobs").insert({ ...basic, type: basic.type === "Stage" ? "Contrat" : basic.type, status: "pending" }));
  }
  if (error) { console.error("ALO: post failed", error); return t("Erreur. Vérifiez votre connexion et réessayez."); }
  return null;
}

// ---- Sign in (email link or LinkedIn) -------------------------------------
const AUTH_RETURN = () => new URL("signin.html", location.href).href;
async function currentUser() {
  const c = db();
  if (!c) return null;
  const { data } = await c.auth.getSession();
  return data.session ? data.session.user : null;
}
async function signInEmail(email) {
  const c = db();
  if (!c) return t("Connexion indisponible pour le moment.");
  const { error } = await c.auth.signInWithOtp({ email, options: { emailRedirectTo: AUTH_RETURN() } });
  if (error) { console.error("ALO: email sign-in failed", error); return t("Erreur. Vérifiez votre connexion et réessayez."); }
  return null;
}
async function signInLinkedIn() {
  const c = db();
  if (!c) return t("Connexion indisponible pour le moment.");
  const { error } = await c.auth.signInWithOAuth({ provider: "linkedin_oidc", options: { redirectTo: AUTH_RETURN() } });
  if (error) { console.error("ALO: LinkedIn sign-in failed", error); return t("LinkedIn n'est pas encore activé."); }
  return null;
}
async function signOut() { const c = db(); if (c) await c.auth.signOut(); }

// Header: "Connexion" becomes "Mon compte" once signed in.
async function updateHeader() {
  const user = await currentUser();
  document.querySelectorAll(".signin").forEach((a) => {
    a.dataset.fr = user ? "Mon espace" : "Connexion";
    a.href = user ? "espace.html" : "signin.html";
    a.textContent = t(a.dataset.fr);
  });
  buildAccountMenu(user);
}

// ---- Account menu (signed in): Mon espace, profile, preferences, employer space, sign out ----
async function buildAccountMenu(user) {
  document.querySelectorAll(".acct, .m-signout").forEach((x) => x.remove());
  const link = document.querySelector(".top .signin");
  if (link) link.hidden = !!user;
  if (!user || !link) return;
  let employer = false;
  try { const r = await db().rpc("claim_invites"); employer = !!r.data; } catch {}
  if (!employer) { try { const { data } = await db().from("employers").select("user_id").limit(1); employer = !!(data && data.length); } catch {} }
  const meta = user.user_metadata || {}, who = meta.full_name || meta.name || user.email || "";
  const box = document.createElement("div");
  box.className = "acct";
  box.innerHTML = `<button type="button" class="btn btn-outline acct-btn" aria-haspopup="true" aria-expanded="false"><span data-t>Mon espace</span></button>
    <div class="acct-menu" role="menu" hidden>
      <div class="acct-who"><span data-t>Connecté(e) en tant que</span><b>${esc(who)}</b>${meta.full_name && user.email ? `<small>${esc(user.email)}</small>` : ""}</div>
      <a role="menuitem" href="espace.html" data-t>Mon espace</a>
      <a role="menuitem" href="mon-profil.html" data-t>Mon Profil ALO</a>
      <a role="menuitem" href="preferences.html" data-t>Mes préférences</a>
      ${employer ? `<a role="menuitem" href="employeur.html" data-t>Espace employeur</a>` : ""}
      <button type="button" role="menuitem" class="acct-out" data-t>Se déconnecter</button>
    </div>`;
  link.after(box);
  const panel = document.getElementById("m-menu");
  if (panel) panel.insertAdjacentHTML("beforeend", `<div class="m-signout"><span>${esc(who)}</span><button type="button" class="btn btn-outline btn-block acct-out" data-t>Se déconnecter</button></div>`);
  translatePage();
}
function closeAcct() { document.querySelectorAll(".acct.open").forEach((a) => { a.classList.remove("open"); a.querySelector(".acct-menu").hidden = true; a.querySelector(".acct-btn").setAttribute("aria-expanded", "false"); }); }
async function doSignOut(btn) {
  if (btn) { btn.disabled = true; btn.textContent = t("Déconnexion…"); }
  try { await signOut(); } catch (e) { console.error("ALO: sign out", e); }
  // Forget what was saved on this device (shared phones), but keep the language.
  try {
    Object.keys(localStorage).filter((k) => k.startsWith("alo-") && !["alo-lang", "alo-ref"].includes(k)).forEach((k) => localStorage.removeItem(k));
    sessionStorage.removeItem("alo-demo");
  } catch {}
  location.href = "index.html?deconnecte=1";
}
document.addEventListener("click", (e) => {
  if (e.target.closest(".acct-out")) { e.preventDefault(); closeAcct(); return doSignOut(e.target.closest(".acct-out")); }
  const a = e.target.closest(".acct");
  if (a && e.target.closest(".acct-btn")) {
    const open = !a.classList.contains("open"); closeAcct();
    if (open) { a.classList.add("open"); a.querySelector(".acct-menu").hidden = false; a.querySelector(".acct-btn").setAttribute("aria-expanded", "true"); a.querySelector(".acct-menu a").focus(); }
    return;
  }
  if (!a) closeAcct();
});
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && document.querySelector(".acct.open")) { closeAcct(); document.querySelector(".acct-btn").focus(); } });
// After signing out: a short confirmation, then a clean address.
document.addEventListener("DOMContentLoaded", () => {
  const q = new URLSearchParams(location.search); if (!q.has("deconnecte")) return;
  q.delete("deconnecte"); history.replaceState(null, "", location.pathname + (q.toString() ? "?" + q : "") + location.hash);
  const n = document.createElement("div"); n.className = "alo-toast"; n.setAttribute("role", "status"); n.dataset.t = ""; n.textContent = "Vous êtes déconnecté(e).";
  document.body.appendChild(n); translatePage(); setTimeout(() => n.classList.add("hide"), 3200); setTimeout(() => n.remove(), 3800);
});

// Referral: remember who invited this visitor; record it once they have an account.
(() => { const r = new URLSearchParams(location.search).get("ref"); if (r && /^[0-9a-f]{8,32}$/.test(r)) { try { localStorage.setItem("alo-ref", r); } catch {} } })();
async function recordReferral() {
  let code = null; try { code = localStorage.getItem("alo-ref"); } catch {}
  const user = code && (await currentUser());
  if (!user) return;
  const { data: referrer } = await db().rpc("referrer_from_code", { code });
  if (referrer && referrer !== user.id) await db().from("referrals").insert({ referrer_id: referrer });
  try { localStorage.removeItem("alo-ref"); } catch {}
}

// ---- Profil ALO: one shared reader for the dashboard and the profile page ----------------
// Reads the account's profile (Supabase), falling back to what this browser saved.
function profileCompletion(p) {
  if (!p) return 0;
  const pr = p.preferences || {};
  const checks = [!!p.name, !!p.title, !!(p.phone || p.email), !!p.city, !!p.summary, (p.experiences || []).length > 0, (p.education || []).length > 0, (p.skills || []).length >= 3, (p.languages || []).length > 0, !!(pr.jobs || (pr.contracts || []).length)];
  return Math.round((checks.filter(Boolean).length / checks.length) * 100);
}
function profileStatus(p) {
  if (!p || !(p.name || p.title || (p.experiences || []).length || p.started)) return "none";
  return p.published ? "complete" : "started";
}
async function loadMyProfile() {
  let local = null;
  try { local = JSON.parse(localStorage.getItem("alo-profile-draft") || "null"); } catch {}
  const c = db();
  if (c && !DEMO) {
    const { data, error } = await c.from("alo_profiles").select("data").maybeSingle();
    if (!error && data && data.data && Object.keys(data.data).length) return data.data;
    // Saved only on this device (e.g. the database wasn't ready): push it to the account now.
    if (!error && local && profileStatus(local) !== "none") { await c.from("alo_profiles").upsert({ data: local, updated_at: new Date().toISOString() }); }
  }
  return local;
}

// ---- Business rules (NOT final: change them here, nothing else is hardcoded) ----------------
// Employer prices are NOT here: they live in the database table pricing_catalog and are edited
// by ALO administrators (admin.html). DEFAULT_CATALOG only mirrors the starting values so pages
// work before the database answers.
const RULES = {
  maxPositions: 50,
  candidateBonusMaxPct: 5,   // "up to 5 %" of the verified first monthly salary
  candidateBonusCapHTG: null, // maximum amount per hire; null = not decided yet
  // Shown to referrers. The referral reward never depends on (or reveals) the hired person's salary.
  referralReward: null,      // e.g. 1000 (HTG) once decided; null = "à définir"
};

// ---- Recruitment packages (what the employer buys) ------------------------------------------
const DEFAULT_CATALOG = [
  { id: "essential", kind: "package", name: "ALO Essential", price_usd: 49, unit: "par offre", postings: 1, days: 30, includes: [],
    features: ["Gestion des candidatures", "Questions de présélection", "Description de poste rédigée avec l’IA"], sort: 1 },
  { id: "professional", kind: "package", name: "ALO Professional", price_usd: 149, unit: "par offre", postings: 1, days: 45, includes: ["ai_screening", "assessments", "interviews", "analytics"],
    features: ["Présélection des candidats par l’IA", "Gestion des candidatures", "Planification des entretiens", "Évaluations de compétences", "Statistiques de recrutement"], sort: 2 },
  { id: "institutional", kind: "package", name: "ALO Institutional", price_usd: null, unit: "sur devis", postings: null, days: null, includes: ["ai_screening", "assessments", "interviews", "team", "analytics"],
    features: ["Plusieurs recruteurs", "Grilles d’évaluation", "Recrutement de consultants (termes de référence)", "Rapports de recrutement", "Circuits de validation institutionnels"], sort: 3 },
  { id: "extra_posting", kind: "addon", name: "Offres d’emploi supplémentaires", price_usd: null, unit: "par offre", sort: 10 },
  { id: "extra_position", kind: "addon", name: "Postes supplémentaires dans une même offre", price_usd: null, unit: "par poste", sort: 11 },
  { id: "extra_days", kind: "addon", name: "Durée de publication prolongée", price_usd: null, unit: "par tranche de 15 jours", days: 15, sort: 12 },
  { id: "ai_screening", kind: "addon", name: "Analyse et tri des candidatures", price_usd: null, unit: "par offre", grants: ["candidate_insights", "screening_advanced"], sort: 13 },
  { id: "assessments", kind: "addon", name: "Évaluations de compétences", price_usd: null, unit: "par offre", grants: ["assessments"], sort: 14 },
  { id: "interviews", kind: "addon", name: "Planification des entretiens", price_usd: null, unit: "par offre", grants: ["interviews"], sort: 15 },
  { id: "team", kind: "addon", name: "Collaboration en équipe", price_usd: null, unit: "par offre", grants: ["team"], sort: 16 },
  { id: "analytics", kind: "addon", name: "Statistiques de recrutement avancées", price_usd: null, unit: "par offre", grants: ["analytics"], sort: 17 },
  { id: "featured", kind: "addon", name: "Offre mise en avant", price_usd: null, unit: "par offre", sort: 18 },
  { id: "campaign", kind: "addon", name: "Campagne de recrutement ciblée", price_usd: null, unit: "sur devis", grants: ["campaigns"], sort: 19 },
  { id: "evaluation_matrix", kind: "addon", name: "Grilles d’évaluation", price_usd: null, unit: "par offre", grants: ["evaluation_matrix"], sort: 20 },
  { id: "employment_intel", kind: "addon", name: "Données sur l’emploi", price_usd: null, unit: "sur devis", grants: ["employment_intel"], sort: 21 },
];
let CATALOG = DEFAULT_CATALOG;
async function loadCatalog() {
  const c = db();
  if (!c || DEMO) return CATALOG;
  try { const { data, error } = await c.from("pricing_catalog").select("*").order("sort"); if (!error && data && data.length) CATALOG = data; } catch {}
  return CATALOG;
}
const catItem = (id) => CATALOG.find((x) => x.id === id);
const PACKAGES = () => CATALOG.filter((x) => x.kind === "package" && x.active !== false);
const ADDONS = () => CATALOG.filter((x) => x.kind === "addon" && x.active !== false);
// ---- Employer tools (entitlements) ---------------------------------------------------------
// One registry for every employer tool. What an employer sees comes from their entitlements
// (database: my_entitlements()), never from the package name. live:false = « Bientôt ».
const FEATURES = {
  overview:           { name: "Tableau de bord", live: true },
  jobs:               { name: "Gestion des offres", live: true },
  pipeline:           { name: "Suivi des candidatures", live: true },
  screening_basic:    { name: "Présélection de base", live: true },
  job_builder:        { name: "Assistant de rédaction d’offres", live: false, pitch: "Rédigez et améliorez vos offres d’emploi." },
  candidate_insights: { name: "Analyse des candidatures", live: true, pitch: "Voyez en un coup d’œil ce qui correspond à votre offre et ce qu’il faut vérifier." },
  screening_advanced: { name: "Présélection avancée", live: true, pitch: "Classez les candidatures selon vos critères obligatoires." },
  interviews:         { name: "Planification des entretiens", live: true, pitch: "Planifiez et suivez vos entretiens au même endroit." },
  comparison:         { name: "Comparaison des candidats", live: true, pitch: "Comparez vos candidats plus facilement." },
  assessments:        { name: "Évaluations de compétences", live: false, pitch: "Évaluez les compétences techniques et professionnelles." },
  team:               { name: "Collaboration en équipe", live: true, pitch: "Invitez vos collègues à examiner et évaluer les candidats." },
  evaluation_matrix:  { name: "Grilles d’évaluation", live: true, pitch: "Appliquez des critères pondérés et consolidez les notes de votre comité." },
  analytics:          { name: "Statistiques de recrutement", live: true, pitch: "Comprenez ce qui fonctionne dans vos recrutements." },
  talent_discovery:   { name: "Talents à découvrir", live: true, pitch: "Découvrez des professionnels qui ont choisi d’être visibles par les recruteurs." },
  reports:            { name: "Rapports institutionnels", live: true, pitch: "Exportez l’activité, les évaluations et les délais de recrutement." },
  approvals:          { name: "Circuits d’approbation", live: false, pitch: "Faites valider chaque étape par les bonnes personnes." },
  departments:        { name: "Gestion par département et par projet", live: false, pitch: "Organisez vos recrutements par département ou par projet." },
  campaigns:          { name: "Campagnes de recrutement ciblées", live: false, pitch: "Touchez les professionnels qui correspondent à vos besoins." },
  employment_intel:   { name: "Données sur l’emploi", live: false, pitch: "Repères sur le marché de l’emploi en Haïti." },
  assistant:          { name: "Assistant ALO", live: false, pitch: "Posez vos questions sur vos recrutements." },
};
const BASE_FEATURES = ["overview", "jobs", "pipeline", "screening_basic"];
// Mirror of the database table feature_entitlements (proposed, subject to approval).
const DEFAULT_ENTITLEMENTS = {
  essential:     { inclus: ["job_builder"], option: ["assessments", "campaigns", "employment_intel"] },
  professional:  { inclus: ["job_builder", "candidate_insights", "screening_advanced", "interviews", "comparison", "team", "analytics", "talent_discovery"],
                   option: ["assessments", "evaluation_matrix", "campaigns", "employment_intel"] },
  institutional: { inclus: ["job_builder", "candidate_insights", "screening_advanced", "interviews", "comparison", "team", "analytics", "talent_discovery", "evaluation_matrix", "approvals", "departments", "reports"],
                   option: ["assessments", "campaigns", "employment_intel"] },
};
let ENTITLEMENT_MAP = DEFAULT_ENTITLEMENTS;
async function loadEntitlementMap() {
  const c = db(); if (!c || DEMO) return ENTITLEMENT_MAP;
  try { const { data, error } = await c.from("feature_entitlements").select("*");
    if (!error && data && data.length) { const m = {}; data.forEach((r) => { (m[r.package] = m[r.package] || { inclus: [], option: [] })[r.mode].push(r.feature); }); ENTITLEMENT_MAP = m; } } catch {}
  return ENTITLEMENT_MAP;
}
// The cheapest package that includes a feature (for « disponible avec … »), or null if only as an add-on.
function packageFor(feature) { return ["essential", "professional", "institutional"].find((p) => (ENTITLEMENT_MAP[p] || { inclus: [] }).inclus.includes(feature)) || null; }
// Entitlements for a set of paid orders (used in sample mode and as a fallback).
function entitlementsFrom(orders) {
  const set = new Set(BASE_FEATURES);
  (orders || []).filter((o) => (o.activation_status ? o.activation_status === "active" : o.status === "payee")).forEach((o) => {
    ((ENTITLEMENT_MAP[o.package] || {}).inclus || []).forEach((f) => set.add(f));
    (o.addons || []).forEach((a) => ((catItem(a) || {}).grants || []).forEach((f) => set.add(f)));
  });
  return set;
}
// The three features that define each package (pricing cards, posting form), with their real status.
const PACKAGE_HIGHLIGHTS = {
  essential: ["pipeline", "screening_basic", "job_builder"],
  professional: ["candidate_insights", "interviews", "analytics"],
  institutional: ["evaluation_matrix", "team", "approvals"],
};
const packageHighlights = (pkg) => (PACKAGE_HIGHLIGHTS[pkg] || []).map((f) => ({ id: f, name: FEATURES[f].name, live: FEATURES[f].live }));
// Full list of a package, grouped by task: the cards show 3 highlights, this list is one click away.
const FEATURE_GROUPS = [
  ["Publier et suivre", ["overview", "jobs", "pipeline", "job_builder"]],
  ["Trier et analyser", ["screening_basic", "screening_advanced", "candidate_insights", "comparison", "talent_discovery", "assessments"]],
  ["Entretiens et décisions", ["interviews", "evaluation_matrix", "approvals"]],
  ["Équipe et rapports", ["team", "analytics", "reports", "departments"]],
  ["Diffusion et données", ["campaigns", "employment_intel"]],
];
// Pricing cards build on each other: Essential, then « Tout Essential, plus : », then « Tout Professional, plus : ».
const LADDER = ["essential", "professional", "institutional"];
const FEATURE_SHORT = { jobs: "Gestion des offres", pipeline: "Suivi des candidatures", screening_basic: "Présélection", job_builder: "Rédaction d’offres",
  candidate_insights: "Analyse des candidatures", screening_advanced: "Tri par critères", interviews: "Entretiens", comparison: "Comparaison", team: "Travail en équipe",
  analytics: "Statistiques", talent_discovery: "Talents à découvrir", evaluation_matrix: "Grilles d’évaluation", reports: "Rapports", approvals: "Circuits d’approbation", departments: "Départements et projets" };
const PACKAGE_PURPOSE = { essential: "Publiez une offre et suivez vos candidatures.", professional: "Triez, comparez et organisez vos entretiens en équipe.", institutional: "Évaluez en comité, avec grilles et rapports." };
function packageLadder(pkg) {
  const inc = (p) => new Set([...BASE_FEATURES, ...((ENTITLEMENT_MAP[p] || {}).inclus || [])]);
  const i = LADDER.indexOf(pkg), prev = i > 0 ? LADDER[i - 1] : null, before = prev ? inc(prev) : new Set();
  const items = [...inc(pkg)].filter((f) => FEATURE_SHORT[f] && !before.has(f)).map((f) => ({ id: f, name: FEATURE_SHORT[f], live: FEATURES[f].live }))
    .sort((p, q) => q.live - p.live);
  return { prev, items };
}
// Expandable details: <button data-xp aria-controls> + <div class="xp" hidden>. Open ones stay open across redraws.
const XP_OPEN = new Set();
const xpOpen = (id) => XP_OPEN.has(id);
function xpButton(id, openLabel, closeLabel = t("Réduire") + " ↑") {
  return `<button type="button" class="xp-btn" data-xp aria-controls="${id}" aria-expanded="${xpOpen(id)}"><span class="xp-o">${openLabel} ↓</span><span class="xp-c">${closeLabel}</span></button>`;
}
document.addEventListener("click", (e) => {
  const b = e.target.closest && e.target.closest("[data-xp]"); if (!b) return;
  const box = document.getElementById(b.getAttribute("aria-controls")); if (!box) return;
  const open = b.getAttribute("aria-expanded") !== "true";
  b.setAttribute("aria-expanded", open); box.hidden = !open;
  if (open) { XP_OPEN.add(box.id); box.classList.remove("xp-in"); void box.offsetWidth; box.classList.add("xp-in"); } else XP_OPEN.delete(box.id);
});
// ---------- Orders: three purchasing paths; approval, payment and activation tracked separately (supabase-update-10.sql) ----------
const ORDER_PATHS = { payer: "Payer maintenant", devis: "Devis pour validation", differe: "Paiement différé" };
const APPROVAL_ST = { soumise: "Soumise", en_examen: "En cours d’examen", info_demandee: "Information demandée", approuvee: "Approuvée", refusee: "Refusée", annulee: "Annulée" };
const PAYMENT_ST = { non_payee: "Non payée", en_cours: "Vérification en cours", payee: "Payée", echouee: "Échec du paiement", remboursee_partiel: "Partiellement remboursée", remboursee: "Remboursée" };
const ACTIVATION_ST = { non_activee: "Non activés", active: "Actifs", terminee: "Terminés", suspendue: "Suspendus" };
const ST_TONE = { approuvee: "ok", payee: "ok", active: "ok", refusee: "no", annulee: "no", echouee: "no", suspendue: "no", remboursee: "no", info_demandee: "warn", en_examen: "wait", en_cours: "wait", soumise: "wait" };
// Only methods that really work are offered; the others are announced, never sold.
const PAY_METHODS = [{ id: "virement", name: "Virement bancaire", live: true }, { id: "carte", name: "Carte bancaire", live: false }, { id: "moncash", name: "MonCash", live: false }, { id: "natcash", name: "NatCash", live: false }];
const fmtDay = (d) => d ? new Date(String(d).length === 10 ? d + "T12:00:00" : d).toLocaleDateString(LANG === "en" ? "en-US" : "fr-FR", { day: "numeric", month: "long", year: "numeric" }) : "";
// Three labelled statuses (text, never colour alone).
function orderStatuses(o) {
  const chip = (label, map, v) => `<span class="os os-${ST_TONE[v] || "none"}"><small>${t(label)}</small>${t(map[v] || v)}</span>`;
  return `<div class="os-row">${chip("Approbation", APPROVAL_ST, o.approval_status)}${chip("Paiement", PAYMENT_ST, o.payment_status)}${chip("Services", ACTIVATION_ST, o.activation_status)}</div>`;
}
// What happens next, in plain words.
function orderNextStep(o) {
  const overdue = o.due_date && new Date(o.due_date + "T23:59:59") < new Date() && o.payment_status !== "payee";
  if (o.approval_status === "annulee") return t("Commande annulée.");
  if (o.approval_status === "refusee") return o.path === "differe" ? t("Demande de paiement différé refusée. Vous pouvez régler la commande avant l’activation des services.") : t("Commande refusée. Contactez l’équipe ALO pour en savoir plus.");
  if (o.approval_status === "info_demandee") return `${t("ALO a besoin d’une information complémentaire")} : ${o.info_request || ""}`;
  if (o.activation_status === "suspendue") return t("Services suspendus. Contactez l’équipe ALO.");
  if (o.activation_status === "terminee") return t("Commande terminée.");
  if (o.payment_status === "remboursee") return t("Commande remboursée.");
  if (o.activation_status === "active" && o.payment_status === "payee") return t("Vos services sont actifs. Paiement reçu.");
  if (o.activation_status === "active") return overdue ? `${t("Vos services sont actifs. Votre facture est en retard depuis le")} ${fmtDay(o.due_date)}.` : `${t("Vos services sont actifs. Votre facture est payable le")} ${fmtDay(o.due_date)}.`;
  if (o.payment_status === "en_cours") return t("ALO vérifie la réception de votre paiement.");
  if (o.payment_status === "echouee") return t("Le paiement n’a pas abouti. Votre commande est conservée : vous pouvez réessayer.");
  if (o.path === "differe") return o.approval_status === "approuvee" ? t("ALO a approuvé un paiement différé. Acceptez les conditions pour activer vos services.") : t("ALO examine votre demande de paiement différé.");
  if (o.path === "devis") {
    if (o.price_usd == null) return t("ALO prépare votre devis.");
    if (o.approval_status === "en_examen") return t("ALO examine les documents envoyés.");
    if (o.approval_status === "approuvee") return t("Votre commande est validée. Réglez-la pour activer vos services.");
    return t("Votre devis est prêt pour validation interne.");
  }
  return `${t("En attente de votre paiement. Indiquez la référence")} ${o.reference || ""}.`;
}
const canPayOrder = (o) => o.price_usd != null && ["non_payee", "echouee"].includes(o.payment_status) && o.approval_status === "approuvee" && !["annulee", "refusee"].includes(o.approval_status);
// Bank transfer: instructions from the ALO team (settings), the order reference, and what counts as payment.
function transferBox(o, settings) {
  const bank = settings && settings.bank_transfer;
  return `<div class="co-transfer">
    <div class="co-ref"><span>${t("Référence à indiquer")}</span><b>${esc(o.reference || "")}</b></div>
    <div class="co-ref"><span>${t("Montant exact")}</span><b>${usd(o.price_usd)}</b></div>
    ${bank ? `<p class="co-bank">${esc(bank)}</p>` : `<p>${t("L’équipe ALO vous envoie les coordonnées bancaires par e-mail avec votre référence.")}</p>`}
    <p class="hint-l">${t("Votre commande reste « en attente de paiement » jusqu’à ce que l’équipe ALO confirme la réception du virement. Une capture d’écran du virement ne vaut pas confirmation.")}</p>
    <p class="co-once">${t("Paiement unique. Aucun renouvellement automatique.")}</p>
    <div class="co-methods">${PAY_METHODS.filter((m) => !m.live).map((m) => `<span class="tf-tag soon-tag">${t(m.name)} <em>${t("Bientôt")}</em></span>`).join("")}</div>
  </div>`;
}
// An add-on can be bought only if at least one tool it unlocks exists today.
const addonLive = (a) => !(a.grants && a.grants.length) || a.grants.some((g) => FEATURES[g] && FEATURES[g].live);
// Status of a feature in a package: "inclus", "option", "bientot" (included/optional but not built yet) or "".
function featureStatus(f, pkg) {
  const e = ENTITLEMENT_MAP[pkg] || { inclus: [], option: [] }, inc = BASE_FEATURES.includes(f) || e.inclus.includes(f), opt = e.option.includes(f);
  if (!inc && !opt) return "";
  return !FEATURES[f].live ? "bientot" : inc ? "inclus" : "option";
}
// Tools that work today on alo.ht; the others are shown as « Bientôt ».
const LIVE_TOOLS = ["Gestion des candidatures", "Questions de présélection", "extra_posting", "extra_position", "extra_days", "featured", "campaign", ...Object.keys(FEATURES).filter((k) => FEATURES[k].live)];
// Same calculation as price_quote() in the database (the database figure is the one that counts).
function quote({ pkg = "essential", postings = 1, positions, extraDays = 0, addons = [] }) {
  const pk = catItem(pkg) || catItem("essential");
  const n = Math.max(1, Math.round(+postings || 1)), v = Math.max(n, Math.round(+positions || n));
  if (pk.price_usd == null) return { total: null, needsQuote: true, lines: [{ label: pk.name, amount: null }], n, v };
  const base = +pk.price_usd, lines = [{ label: `${pk.name} · ${t("1 offre")}`, amount: base }];
  const up = (catItem("extra_posting") || {}).price_usd ?? base, uv = (catItem("extra_position") || {}).price_usd ?? base;
  let total = base + (n - 1) * up + (v - n) * uv, needsQuote = false;
  if (n > 1) lines.push({ label: `${n - 1} × ${t("offre supplémentaire")}`, amount: (n - 1) * up });
  if (v > n) lines.push({ label: `${v - n} × ${t("poste supplémentaire")}`, amount: (v - n) * uv });
  const disc = CATALOG.filter((d) => d.kind === "discount" && d.active !== false).sort((a, b) => b.discount_pct - a.discount_pct)
    .find((d) => (d.applies_to === "postings" && n >= d.min_qty) || (d.applies_to === "positions" && v >= d.min_qty));
  if (disc) { const off = total * disc.discount_pct / 100; total -= off; lines.push({ label: `${t("Remise")} : ${disc.name}`, amount: -off }); }
  if (extraDays > 0) { const a = catItem("extra_days"); if (!a || a.price_usd == null) { needsQuote = true; lines.push({ label: t("Durée de publication prolongée"), amount: null }); } else { const x = a.price_usd * extraDays * n; total += x; lines.push({ label: `${t("Durée de publication prolongée")} (+${extraDays * (a.days || 15)} ${t("jours")})`, amount: x }); } }
  for (const id of addons) {
    const a = catItem(id); if (!a || ["extra_posting", "extra_position", "extra_days"].includes(id)) continue;
    if ((pk.includes || []).includes(id)) { lines.push({ label: t(a.name), amount: 0, included: true }); continue; }
    if (a.price_usd == null || id === "campaign") { needsQuote = true; lines.push({ label: t(a.name), amount: null }); }
    else { total += a.price_usd * n; lines.push({ label: t(a.name), amount: a.price_usd * n }); }
  }
  return { total: Math.round(total * 100) / 100, needsQuote, lines, n, v, days: (pk.days || 30) + extraDays * ((catItem("extra_days") || {}).days || 15) };
}
const usd = (n) => `${(+n || 0).toLocaleString("fr-FR", { maximumFractionDigits: 2 })} $ US`;
function estimateBonus(salaryHTG) {
  if (!salaryHTG || salaryHTG <= 0) return null;
  let b = salaryHTG * RULES.candidateBonusMaxPct / 100;
  if (RULES.candidateBonusCapHTG) b = Math.min(b, RULES.candidateBonusCapHTG);
  return Math.round(b);
}

// Hiring-bonus claim statuses: En attente → Vérification → Approuvée → Versée (+ information requise, rejetée, contestée)
const CLAIM_STATUS = { en_attente: "En attente", verification: "Vérification", info_requise: "Informations requises", approuvee: "Approuvée", versee: "Versée", rejetee: "Rejetée", contestee: "Contestée" };
const CLAIM_CLASS = { en_attente: "s-sent", verification: "s-seen", info_requise: "s-int", approuvee: "s-ok", versee: "s-ok", rejetee: "s-no", contestee: "s-no" };
const CLAIM_COLS = "id,application_id,job_id,job_title,company,start_date,salary_declared,currency,contract_path,payslip_path,payout_method,payout_phone,employer_confirmed,status,message,estimated_bonus_htg,created_at,updated_at";

// ---- Standard lists (same values everywhere → usable for employment statistics later) ----------
const DEPARTMENTS = ["Ouest", "Nord", "Nord-Est", "Nord-Ouest", "Artibonite", "Centre", "Sud", "Sud-Est", "Grand'Anse", "Nippes"];
const CITY_DEPT = { "port-au-prince": "Ouest", "petion-ville": "Ouest", "delmas": "Ouest", "carrefour": "Ouest", "tabarre": "Ouest", "croix-des-bouquets": "Ouest", "leogane": "Ouest", "kenscoff": "Ouest",
  "cap-haitien": "Nord", "limbe": "Nord", "fort-liberte": "Nord-Est", "ouanaminthe": "Nord-Est", "port-de-paix": "Nord-Ouest", "gonaives": "Artibonite", "saint-marc": "Artibonite",
  "hinche": "Centre", "mirebalais": "Centre", "les cayes": "Sud", "jacmel": "Sud-Est", "jeremie": "Grand'Anse", "miragoane": "Nippes" };
const deptOf = (city) => CITY_DEPT[norm(city || "")] || "";
const FIELDS = [ // professional fields → existing job categories they match
  ["Technologie et informatique", ["Technologie"]], ["Finance et comptabilité", ["Bureau"]], ["Marketing et communication", ["Commerce", "Service client"]],
  ["Administration", ["Bureau"]], ["Éducation", ["Éducation"]], ["Santé", ["Santé"]], ["Ingénierie", ["Construction", "Technologie"]],
  ["Opérations et logistique", ["Transport"]], ["Entrepreneuriat", ["Commerce"]], ["Développement international", []], ["Commerce et vente", ["Commerce"]],
  ["Hôtellerie et tourisme", ["Hôtellerie"]], ["Construction", ["Construction"]], ["Service client", ["Service client"]], ["Autre", []],
];
const STAGES = ["Étudiant(e)", "Jeune diplômé(e)", "Début de carrière", "Professionnel(le) expérimenté(e)", "Cadre supérieur(e) / dirigeant(e)", "En reconversion", "Autre"];
const OPPORTUNITIES = ["Emploi à temps plein", "Emploi à temps partiel", "Stage", "Consultance", "Freelance ou contrat", "Formation", "Certifications professionnelles", "Évolution de carrière"];
const WORK_MODES = ["Sur site", "Hybride", "Télétravail"];
// Employer types (one plan each) and organization size, asked of every employer.
// Employer categories identify WHO the employer is; they never decide the price (the package does).
const EMPLOYER_TYPES = [["pme", "PME"], ["entreprise", "Grande entreprise"], ["organisation", "Organisation ou institution"]];
const ORG_SIZES = ["1 à 9 employés", "10 à 49 employés", "50 à 249 employés", "250 à 999 employés", "1 000 employés ou plus"];
const employerTypeLabel = (plan) => (EMPLOYER_TYPES.find((e) => e[0] === plan) || EMPLOYER_TYPES[0])[1];

async function saveMyProfile(p) {
  p.updated = new Date().toISOString();
  try { localStorage.setItem("alo-profile-draft", JSON.stringify(p)); } catch {}
  const c = db();
  if (c && !DEMO && (await currentUser())) { const { error } = await c.from("alo_profiles").upsert({ data: p, updated_at: p.updated }); if (error) return error; }
  return null;
}

// ---- Recommendations: explainable scores, never hides any job ----------------------------------
function recommend(p, jobs, opts = {}) {
  const car = (p && p.career) || {}, pr = (p && p.preferences) || {};
  const fields = car.fields || [], cats = new Set(fields.flatMap((f) => (FIELDS.find((x) => x[0] === f) || [, []])[1]));
  const skills = ((p && p.skills) || []).filter((k) => k && k.length > 2);
  const titles = [car.titles, pr.jobs, p && p.title].filter(Boolean).join(",").split(/[,;\n]/).map((s) => norm(s.trim())).filter((s) => s.length > 2);
  const depts = car.departments || [], cities = (car.cities || pr.cities || "").split(/[,;]/).map((s) => norm(s.trim())).filter(Boolean);
  const opp = car.opportunities || [], stage = car.stage || "";
  const junior = ["Étudiant(e)", "Jeune diplômé(e)"].includes(stage), senior = stage === "Cadre supérieur(e) / dirigeant(e)";
  const skip = opts.exclude || new Set();
  return jobs.filter((j) => !skip.has(j.id)).map((j) => {
    let score = 0; const why = [];
    const text = norm(`${j.title} ${(j.needs || []).join(" ")} ${(j.skills || []).join(" ")} ${j.about}`);
    if (cats.has(j.category) || fields.includes(j.occupation)) { score += 3; why.push({ k: "domaine", v: fields.find((f) => (FIELDS.find((x) => x[0] === f) || [, []])[1].includes(j.category) || f === j.occupation) }); }
    const sk = skills.filter((k) => text.includes(norm(k))).slice(0, 2);
    if (sk.length) { score += 2 * sk.length; why.push({ k: "competences", v: sk.join(", ") }); }
    if (titles.some((tt) => norm(j.title).includes(tt) || tt.includes(norm(j.title)))) { score += 3; why.push({ k: "poste", v: j.title }); }
    const remote = /teletravail|remote/.test(norm(j.city)) || j.work_mode === "Télétravail";
    if (remote && car.remote) { score += 2; why.push({ k: "lieu", v: "Télétravail" }); }
    else if (cities.includes(norm(j.city))) { score += 2; why.push({ k: "lieu", v: j.city }); }
    else if (depts.includes(j.department || deptOf(j.city))) { score += 1.5; why.push({ k: "lieu", v: j.city }); }
    else if (car.anywhere) score += 0.5;
    const typeMap = { "Temps plein": "Emploi à temps plein", "Temps partiel": "Emploi à temps partiel", "Stage": "Stage", "Contrat": "Freelance ou contrat" };
    if (opp.includes(typeMap[j.type])) { score += 1; if (j.type === "Stage") why.push({ k: "type", v: "Stage" }); }
    if (junior && (j.type === "Stage" || j.experience === "Débutant" || j.experience === "Tous niveaux")) score += 1;
    if (senior && (j.experience === "5 ans et plus" || /responsable|directeur|directrice|manager|chef/.test(norm(j.title)))) score += 1.5;
    if (opts.savedCats && opts.savedCats.has(j.category)) score += 0.5;
    return { j, score, why };
  }).sort((a, b) => b.score - a.score || (a.j.days || 0) - (b.j.days || 0));
}
function whyText(why) {
  const parts = [];
  const sk = why.find((w) => w.k === "competences"), po = why.find((w) => w.k === "poste"), dom = why.find((w) => w.k === "domaine"), lieu = why.find((w) => w.k === "lieu");
  if (sk) parts.push(`${t("correspond à vos compétences en")} ${sk.v}`);
  else if (po) parts.push(t("correspond au poste que vous recherchez"));
  else if (dom && dom.v) parts.push(`${t("correspond à votre intérêt pour")} ${t(dom.v)}`);
  if (lieu) parts.push(`${t("à votre préférence pour")} ${t(lieu.v)}`);
  if (!parts.length) return "";
  return `${t("Recommandé pour vous :")} ${parts.join(` ${t("et")} `)}.`;
}
// Advertised salaries on ALO only (not the whole labour market). Hidden below 3 offers to protect employers.
function salaryInsight(jobs, cats) {
  const xs = jobs.filter((j) => j.salary_min && (!cats || !cats.size || cats.has(j.category))).map((j) => j.salary_min).sort((a, b) => a - b);
  if (xs.length < 3) return null;
  return { n: xs.length, low: xs[0], high: xs[xs.length - 1], median: xs[Math.floor(xs.length / 2)] };
}

// ---- Phone menu + header polish ----------------------------------------------------
// On small screens the header menu is hidden; a text "Menu" button opens the same links.
function setupMobileMenu() {
  const wrap = document.querySelector(".top .wrap"), nav = document.querySelector(".top .nav");
  if (!wrap || !nav || document.getElementById("m-menu")) return;
  const post = wrap.querySelector('a.btn[href="post.html"]');
  const btn = document.createElement("button");
  btn.type = "button"; btn.className = "menu-btn"; btn.id = "m-menu-btn";
  btn.setAttribute("aria-expanded", "false"); btn.setAttribute("aria-controls", "m-menu");
  btn.innerHTML = `<span data-t>Menu</span>`;
  wrap.appendChild(btn);
  const panel = document.createElement("div");
  panel.className = "m-menu"; panel.id = "m-menu"; panel.hidden = true;
  const flags = [...document.querySelectorAll(".top .lang-flag")];
  const langs = flags.length ? `<div class="m-langs" role="group" aria-label="Langue"><span class="m-langs-h" data-t>Langue</span><div>${flags.map((f) => `<button type="button" class="m-lang" data-lang="${f.dataset.lang}" lang="${f.getAttribute("lang") || ""}">${(f.querySelector("svg") || { outerHTML: "" }).outerHTML}<span>${LANG_NAMES[f.dataset.lang][1]}</span></button>`).join("")}</div></div>` : "";
  panel.innerHTML = `<nav class="m-links">${nav.innerHTML}</nav>${post ? `<a class="btn btn-block" href="post.html" data-t>Publier une offre</a>` : ""}${langs}`;
  document.querySelector(".top").appendChild(panel);
  const toggle = (open) => { panel.hidden = !open; btn.setAttribute("aria-expanded", open); btn.querySelector("span").dataset.fr = open ? "Fermer" : "Menu"; translatePage(); };
  btn.onclick = () => toggle(panel.hidden);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !panel.hidden) { toggle(false); btn.focus(); } });
  panel.addEventListener("click", (e) => { if (e.target.closest("a")) toggle(false); });
}
// ---- Header menu: « Recruter » drop-down + current page highlighted ----
function setupNav() {
  const page = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a, .m-links a").forEach((a) => a.classList.toggle("on", a.getAttribute("href") === page));
  const recruit = ["pme.html", "entreprises.html", "organisations.html", "employeur.html", "post.html"].includes(page);
  document.querySelectorAll(".nav-dd-btn").forEach((b) => b.classList.toggle("on", recruit));
}
function closeNavDd() { document.querySelectorAll(".nav .nav-dd.open").forEach((d) => { d.classList.remove("open"); d.querySelector(".nav-dd-menu").hidden = true; d.querySelector(".nav-dd-btn").setAttribute("aria-expanded", "false"); }); }
document.addEventListener("click", (e) => {
  const b = e.target.closest(".nav .nav-dd-btn");
  if (b) { const d = b.closest(".nav-dd"), open = !d.classList.contains("open"); closeNavDd(); if (open) { d.classList.add("open"); d.querySelector(".nav-dd-menu").hidden = false; b.setAttribute("aria-expanded", "true"); } return; }
  if (!e.target.closest(".nav .nav-dd")) closeNavDd();
});
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && document.querySelector(".nav .nav-dd.open")) { closeNavDd(); document.querySelector(".nav .nav-dd-btn").focus(); } });

// ---- Motion: sections appear once; the steps light up in turn; the profile example fills in ----
function setupMotion() {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;   // everything stays visible as is
  document.documentElement.classList.add("js-motion");
  // Each item runs once, when it is (even partly) on screen. Checked on scroll and resize, so nothing stays hidden.
  const items = [];
  document.querySelectorAll(".reveal").forEach((el) => items.push([el, () => el.classList.add("in")]));
  const steps = document.getElementById("hm-steps");
  if (steps) items.push([steps, () => [...steps.children].forEach((li, i) => { setTimeout(() => li.classList.add("lit"), 250 + i * 450); setTimeout(() => li.classList.remove("lit"), 1150 + i * 450); })]);
  const demo = document.getElementById("hm-demo");
  if (demo) items.push([demo, () => demo.querySelectorAll(".hm-part").forEach((p, i) => setTimeout(() => p.classList.add("in"), 200 + i * 450))]);
  let pending = items;
  const check = () => {
    pending = pending.filter(([el, run]) => { const r = el.getBoundingClientRect(); if (r.top < innerHeight * 0.95 && r.bottom > 0) { run(); return false; } return true; });
    if (!pending.length) { removeEventListener("scroll", onScroll); removeEventListener("resize", onScroll); }
  };
  let ticking = false;
  const onScroll = () => { if (ticking) return; ticking = true; requestAnimationFrame(() => { ticking = false; check(); }); };
  addEventListener("scroll", onScroll, { passive: true }); addEventListener("resize", onScroll);
  requestAnimationFrame(check);
}

function headerShadow() { const h = document.querySelector(".top"); if (h) h.classList.toggle("scrolled", scrollY > 4); }
addEventListener("scroll", headerShadow, { passive: true });

buildLangMenus(); translatePage();
document.addEventListener("DOMContentLoaded", () => { setupMobileMenu(); setupNav(); setupMotion(); translatePage(); updateHeader(); headerShadow(); recordReferral().catch(() => {}); });
