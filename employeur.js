// alo.ht — Espace employeur 2.0: one recruitment workspace that adapts to each employer.
// Four separate layers: organization (EMP) · recruitments (JOBS_E) · entitlements (ENT) · the person's role (ROLE).
// What is shown comes from ENT (what was bought) and ROLE (what this person may do), never from a package name.

const x = (s) => esc(s == null ? "" : String(s));
const $ = (id) => document.getElementById(id);
const fmt = (d) => d ? new Date(d).toLocaleDateString(LANG === "en" ? "en-US" : "fr-FR", { day: "numeric", month: "short", year: "numeric" }) : "";
const fmtT = (d) => d ? new Date(d).toLocaleString(LANG === "en" ? "en-US" : "fr-FR", { weekday: "short", day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" }) : "";
const DAY = 864e5;
const daysSince = (d) => Math.floor((Date.now() - new Date(d)) / DAY);

let EMP = null, ROLE = "proprietaire", ENT = new Set(BASE_FEATURES), ORDERS = [], JOBS_E = [], APPS = [], INTERVIEWS = [], MEMBERS = [];
let CRITERIA = {}, MYSCORES = {}, RESULTS = {}, NOTES = {}, TALENTS = {};
const PHONE = matchMedia("(max-width: 760px)");
const NEW_FILTER = () => ({ q: "", stage: "", min: 0, all: false, job: "", sort: "" });
let OPEN = null, PICK = new Set(), FILTER = NEW_FILTER(), VIEW = null, EDIT = false, FLASH = "", FLASH_ERR = false;
let LOAD_ERR = [], LAST_KEY = null, LAST_JOB = null, PRIO_ALL = false, RETURN_FOCUS = null;
const DRAFTS = {}, BUSY = new Set(); // unfinished form text (kept across redraws) · forms being sent
const box = () => $("em");
const has = (f) => ENT.has(f);
const can = (perm) => ({ voir: true, evaluer: ROLE !== "lecteur", gerer: ["proprietaire", "recruteur"].includes(ROLE), facturer: ROLE === "proprietaire" }[perm]);

// ---------- Pipeline stages (customizable; each has a kind) ----------
const DEFAULT_PIPELINE = [
  { id: "nouvelles", label: "Nouvelles candidatures", kind: "new" }, { id: "examen", label: "À examiner", kind: "review" },
  { id: "preselection", label: "Présélection", kind: "shortlist" }, { id: "entretien", label: "Entretien", kind: "interview" },
  { id: "offre", label: "Offre", kind: "offer" }, { id: "embauche", label: "Embauché", kind: "hired" }, { id: "non_retenu", label: "Non retenu", kind: "rejected" },
];
const KIND_LABEL = { new: "Nouvelle", review: "À examiner", shortlist: "Présélection", interview: "Entretien", offer: "Offre", hired: "Embauché", rejected: "Non retenu" };
const pipeline = () => (EMP && Array.isArray(EMP.pipeline) && EMP.pipeline.length ? EMP.pipeline : DEFAULT_PIPELINE);
const stageOf = (a) => pipeline().find((s) => s.id === a.stage) || pipeline()[0];
const kindOf = (a) => stageOf(a).kind;
const AFTER_SHORTLIST = ["shortlist", "interview", "offer", "hired"];

// ---------- Data ----------
async function rpc(fn, args) { const { data, error } = await db().rpc(fn, args || {}); if (error) throw error; return data; }
async function load() {
  await loadUserState();
  if (!USER && !DEMO) {
    try { localStorage.setItem("alo-next", "employeur.html"); } catch {}
    box().innerHTML = `<div class="ap-sent"><h1>${t("Espace employeur")}</h1><p>${t("Connectez-vous pour publier vos offres et suivre vos candidatures.")}</p><div class="row center"><a class="btn btn-lg" href="signin.html?pour=employeur">${t("Connexion")}</a></div></div>`;
    return;
  }
  await loadCatalog();
  if (DEMO) { demo(); return route(); }
  try {
    await loadEntitlementMap();
    try { await rpc("claim_invites"); } catch {}
    const r = await db().from("employers").select("*").limit(1).maybeSingle();
    if (r.error && r.error.code === "PGRST205") { box().innerHTML = `<div class="ap-sent"><h1>${t("Espace employeur")}</h1><p>${t("Cette fonction sera bientôt disponible.")}</p></div>`; return; }
    if (r.error) throw r.error;
    EMP = r.data;
    if (EMP) await refresh();
  } catch (e) {
    console.warn(e);
    box().innerHTML = `<div class="ap-sent ew-loaderr" role="alert"><h1>${t("Espace employeur")}</h1><p>${t("Impossible de charger votre espace employeur. Vérifiez votre connexion internet, puis réessayez.")}</p>
      <div class="row center"><button class="btn" type="button" data-act="reload">${t("Réessayer")}</button></div></div>`;
    return;
  }
  route();
}
async function refresh() {
  LOAD_ERR = [];
  const safe = async (p, d, label) => { try { return await p; } catch (e) { console.warn(e); if (label) LOAD_ERR.push(label); return d; } };
  let role = null;
  if (EMP.id) role = await safe(rpc("member_role", { p_employer: EMP.id }), null);
  ROLE = role || "proprietaire";
  const [jobs, apps, orders, ent, ints] = await Promise.all([
    safe(rpc("employer_jobs"), [], "vos offres"), safe(rpc("employer_applications", { p_job: null }), null), safe(rpc("my_orders"), [], "votre forfait"),
    safe(rpc("my_entitlements"), null), safe(rpc("employer_interviews"), [], "les entretiens"),
  ]);
  JOBS_E = jobs || []; ORDERS = orders || []; INTERVIEWS = ints || [];
  APPS = apps || [];
  if (!apps || ent === null) { // database not updated yet (update 9): load per job with the older function
    let failed = false;
    const lists = await Promise.all(JOBS_E.map((j) => rpc("employer_applications", { p_job: j.id }).catch((e) => { console.warn(e); failed = true; return []; })));
    if (failed) LOAD_ERR.push("les candidatures");
    APPS = lists.flatMap((l, i) => (l || []).map((a) => ({ ...a, job_id: JOBS_E[i].id, stage: { "Consultée": "examen", "Entretien": "entretien", "Retenue": "embauche", "Non retenue": "non_retenu" }[a.status] || "nouvelles", stage_at: a.created_at })));
  }
  ENT = ent ? new Set(ent.map((e) => e.feature)) : entitlementsFrom(ORDERS);
  if (has("team") && ROLE === "proprietaire") MEMBERS = await safe(rpc("team_members"), [], "votre équipe");
  CO_SETTINGS = (await safe(rpc("checkout_settings"), {})) || {};
}

// ---------- Routing (#accueil, #offres, #offre-12-candidatures …) ----------
const NAV = [
  ["accueil", "Tableau de bord", "overview"], ["offres", "Mes offres", "jobs"], ["candidatures", "Candidatures", "pipeline"],
  ["entretiens", "Entretiens", "interviews"], ["evaluations", "Évaluations", "evaluation_matrix"], ["statistiques", "Statistiques", "analytics"],
  ["talents", "Talents", "talent_discovery"], ["equipe", "Équipe", "team", ["proprietaire"]], ["forfait", "Mon forfait", null, ["proprietaire", "recruteur"]], ["achats", "Achats et factures", null, ["proprietaire"]],
];
const WS_TABS = [["apercu", "Vue d’ensemble", "jobs"], ["candidatures", "Candidatures", "pipeline"], ["comparer", "Comparer", "comparison"],
  ["entretiens", "Entretiens", "interviews"], ["evaluations", "Évaluations", "evaluation_matrix"], ["rapports", "Rapports", "analytics"]];
function hash() { const h = location.hash.slice(1) || "accueil"; const m = h.match(/^offre-(\d+)(?:-(\w+))?$/); return m ? { page: "offre", id: +m[1], tab: m[2] || "apercu" } : { page: h }; }
function go(h) { if (location.hash.slice(1) === h) route(); else location.hash = h; }
window.addEventListener("hashchange", () => { OPEN = null; route(); scrollTo(0, 0); });
async function route() {
  const r = hash();
  // Each recruitment (and each page) starts with clean filters; the selection to compare belongs to one recruitment.
  const key = r.page === "offre" ? "offre-" + r.id : r.page;
  if (key !== LAST_KEY) { FILTER = NEW_FILTER(); EDIT_STAGES = false; STAGES_DRAFT = null; LAST_KEY = key; }
  if (r.page === "offre" && r.id !== LAST_JOB) { PICK = new Set(); LAST_JOB = r.id; }
  if (r.page === "offre") {
    const j = JOBS_E.find((z) => z.id === r.id);
    if (j && r.tab === "evaluations" && has("evaluation_matrix")) await loadEval(j.id);
  }
  if (r.page === "talents") { const j = liveJobs()[0]; if (j && has("talent_discovery")) await loadTalents(j.id); }
  draw();
}

// ---------- Helpers: jobs, requirements, matching (transparent, job-related) ----------
const appsOf = (jobId) => APPS.filter((a) => a.job_id === jobId);
const endDate = (j) => j.published_at ? new Date(new Date(j.published_at).getTime() + (j.days || 30) * DAY) : null;
function jobState(j) {
  if (j.status === "closed") return ["Fermée", "s-no"];
  if (j.status === "pending") return ["En vérification", "s-seen"];
  const e = endDate(j); if (e && e < new Date()) return ["Expirée", "s-no"];
  return ["Actif", "s-ok"];
}
const liveJobs = () => JOBS_E.filter((j) => jobState(j)[0] === "Actif");
function reqs(j) { const r = (j.skills && j.skills.length ? j.skills : j.needs || []).filter(Boolean); return r.slice(0, 12); }
function candText(a) {
  const d = a.data || {};
  return norm([...(d.skills || []), ...(d.skillsAll || []), ...(d.experiences || []).flatMap((e) => [e.role, e.company, e.description, ...(e.bullets || [])]),
    ...(d.education || []).flatMap((e) => [e.degree, e.school]), ...(d.languages || []), a.message, ...Object.values(a.answers || {})].filter(Boolean).join(" · "));
}
function hasReq(text, r) {
  const n = norm(r); if (text.includes(n)) return true;
  const words = n.split(/[^a-z0-9+#]+/).filter((w) => w.length > 3); if (!words.length) return false;
  return words.filter((w) => text.includes(w)).length / words.length >= 0.6;
}
function match(a, j) { const r = reqs(j), txt = candText(a); const ok = r.filter((q) => hasReq(txt, q)); return { ok, miss: r.filter((q) => !ok.includes(q)), total: r.length }; }
function years(a) {
  const now = new Date().getFullYear(); let y = 0;
  ((a.data || {}).experiences || []).forEach((e) => { const s = parseInt(String(e.start || "").match(/\d{4}/)); const f = /actuel|présent|present|aujourd/i.test(e.end || "") || !e.end ? now : parseInt(String(e.end).match(/\d{4}/)); if (s && f && f >= s) y += f - s; });
  return y;
}
const candTitle = (a) => { const e = ((a.data || {}).experiences || [])[0]; return e ? `${e.role || ""}${e.company ? " · " + e.company : ""}` : ""; };

// Recruitment health: transparent indicators, never an opaque score.
function health(j) {
  const as = appsOf(j.id), live = jobState(j)[0] === "Actif", out = [], tips = new Set();
  const pub = j.published_at ? daysSince(j.published_at) : 0, e = endDate(j), left = e ? Math.ceil((e - Date.now()) / DAY) : null;
  if (live && pub >= 7 && as.length < 5) { out.push(`${t("Seulement")} ${as.length} ${t("candidature(s) en")} ${pub} ${t("jours")}.`); tips.add("Améliorer la description du poste"); tips.add("Élargir la zone géographique"); tips.add("Envisager une campagne ciblée"); }
  if (reqs(j).length && as.length >= 10) {
    const full = as.filter((a) => match(a, j).miss.length === 0).length;
    if (full / as.length < 0.2) { out.push(`${as.length} ${t("candidatures reçues, mais seulement")} ${full} ${t("mentionnent tous les critères déclarés.")}`); tips.add("Vérifier si les critères obligatoires sont trop restrictifs"); tips.add("Améliorer la description du poste"); }
  }
  const waiting = as.filter((a) => ["new", "review"].includes(kindOf(a)) && daysSince(a.stage_at || a.created_at) >= 3).length;
  if (waiting) { out.push(`${waiting} ${t("candidature(s) attendent depuis plus de 3 jours.")}`); tips.add("Examiner les nouvelles candidatures"); }
  if (live && left != null && left <= 7) { out.push(`${t("L’offre expire dans")} ${Math.max(0, left)} ${t("jours")}.`); tips.add("Prolonger la durée de publication"); }
  return { ok: out.length === 0, reasons: out, tips: [...tips] };
}

// Candidate analysis from the information the candidate gave and the offer's requirements only.
function insights(a, j) {
  const m = match(a, j), d = a.data || {}, y = years(a), strong = [], check = [], qs = [];
  m.ok.slice(0, 5).forEach((r) => strong.push(`${t("Mentionne")} : ${r}`));
  if (y) strong.push(`${y} ${t("an(s) d’expérience déclarée")}`);
  (d.education || []).slice(0, 1).forEach((e) => e.degree && strong.push(`${t("Formation")} : ${e.degree}`));
  m.miss.slice(0, 5).forEach((r) => check.push(`${t("Aucune information sur")} : ${r}`));
  if (!(d.languages || []).length) check.push(t("Langues non précisées"));
  (j.responsibilities || []).slice(0, 2).forEach((r) => qs.push(`${t("Décrivez votre expérience pour")} : « ${r} ».`));
  m.miss.slice(0, 2).forEach((r) => qs.push(`${t("Quelle est votre expérience avec")} ${r} ?`));
  m.ok.slice(0, 1).forEach((r) => qs.push(`${t("Donnez un exemple concret où vous avez utilisé")} ${r}.`));
  return { m, strong, check, qs };
}

// ---------- Layout ----------
// Unfinished text in forms (a note, an interview, a hire, an evaluation) survives every redraw.
const formKey = (f) => { const d = f.dataset; return d.note ? "note-" + d.note : d.int ? "int-" + d.int : d.hire ? "hire-" + d.hire : d.score ? "score-" + d.score
  : d.odoc ? "odoc-" + d.odoc : d.oaccept ? "oaccept-" + d.oaccept : d.oreply ? "oreply-" + d.oreply : f.id || null; };
function keepDrafts() {
  box().querySelectorAll("form").forEach((f) => { const k = formKey(f); if (!k) return; const v = {};
    [...f.elements].forEach((el) => { if (el.name) v[el.name] = el.type === "checkbox" ? el.checked : el.value; }); DRAFTS[k] = v; });
  const notes = Object.fromEntries(Object.entries(DRAFTS).filter(([k, v]) => k.startsWith("note-") && v.body));
  try { sessionStorage.setItem("alo-emp-notes", JSON.stringify(notes)); } catch {}
}
function restoreDrafts() {
  box().querySelectorAll("form").forEach((f) => { const k = formKey(f), v = k && DRAFTS[k]; if (!v) return;
    [...f.elements].forEach((el) => { if (!el.name || !(el.name in v)) return; if (el.type === "checkbox") el.checked = v[el.name]; else el.value = v[el.name]; });
    if (BUSY.has(k)) busy(f, true); });
}
function dropDraft(k) { delete DRAFTS[k]; try { const n = JSON.parse(sessionStorage.getItem("alo-emp-notes") || "{}"); delete n[k]; sessionStorage.setItem("alo-emp-notes", JSON.stringify(n)); } catch {} }
try { Object.assign(DRAFTS, JSON.parse(sessionStorage.getItem("alo-emp-notes") || "{}")); } catch {}
function busy(f, on) {
  const b = f.querySelector("button[type=submit]"); if (!b) return;
  if (on) { if (!b.dataset.label) b.dataset.label = b.textContent; b.textContent = t("Envoi en cours…"); } else if (b.dataset.label) { b.textContent = b.dataset.label; delete b.dataset.label; }
  b.disabled = on; b.setAttribute("aria-busy", on ? "true" : "false");
}
function toast(msg, err) {
  document.querySelectorAll(".alo-toast.ew-t").forEach((n) => n.remove());
  const n = document.createElement("div"); n.className = "alo-toast ew-t" + (err ? " err" : ""); n.setAttribute("role", err ? "alert" : "status"); n.textContent = msg;
  document.body.appendChild(n); setTimeout(() => n.classList.add("hide"), err ? 5200 : 2600); setTimeout(() => n.remove(), err ? 5800 : 3200);
}
function draw() {
  if (box().querySelector("form")) keepDrafts();
  const drawerTop = OPEN && box().querySelector(".ew-drawer-in") && box().querySelector(".ew-drawer-in").dataset.app === String(OPEN) ? box().querySelector(".ew-drawer-in").scrollTop : 0;
  const hadDrawer = !!box().querySelector(".ew-drawer");
  // Keep keyboard focus on the same control after the redraw.
  const fe = document.activeElement, fd = fe && box().contains(fe) ? fe.dataset : null;
  const fsel = fd && (["ptab", "open", "act", "stageOf", "filter", "view"].map((k) => fd[k] != null ? `[data-${k.replace(/[A-Z]/g, (c) => "-" + c.toLowerCase())}="${fd[k]}"]` : "").find(Boolean));
  if (!EMP || EDIT) { box().innerHTML = companyForm(); restoreDrafts(); return; }
  const r = hash(), nav = NAV.filter(([, , f, roles]) => (!f || has(f)) && (!roles || roles.includes(ROLE)));
  const page = nav.find((n) => n[0] === r.page) || (r.page === "offre" ? ["offres"] : nav[0]);
  const body = r.page === "offre" ? workspace(r) : ({ accueil: home, offres: offersPage, candidatures: allApps, entretiens: interviewsPage, evaluations: evalsPage,
    statistiques: statsPage, talents: talentsPage, equipe: teamPage, forfait: forfait, achats: achatsPage }[page[0]] || home)();
  box().innerHTML = `
    <div class="ew-top">
      <div><span class="spp-label">${t("Espace employeur")}</span><b class="ew-co">${x(EMP.company)}</b>
        <span class="ew-role">${t(ROLE_LABEL[ROLE])}${EMP.size ? " · " + t(EMP.size) : ""}</span></div>
      ${can("gerer") ? `<a class="btn" href="post.html">${t("Publier une offre")}</a>` : ""}
    </div>
    <nav class="ew-nav" aria-label="${t("Espace employeur")}">${nav.map(([id, label]) => `<a href="#${id}" class="${page[0] === id ? "on" : ""}" ${page[0] === id ? 'aria-current="page"' : ""}>${t(label)}</a>`).join("")}</nav>
    <label class="ew-nav-m"><span class="sr-only">${t("Aller à")}</span><select data-nav aria-label="${t("Aller à")}">${nav.map(([id, label]) => `<option value="${id}" ${page[0] === id ? "selected" : ""}>${t(label)}</option>`).join("")}</select></label>
    ${LOAD_ERR.length ? `<div class="ew-warn" role="alert"><span>${t("Certaines informations n’ont pas pu être chargées")}${LANG === "fr" ? " :" : ":"} ${LOAD_ERR.map((s) => t(s)).join(", ")}. ${t("Vérifiez votre connexion internet.")}</span><button class="btn btn-plain" type="button" data-act="retry">${t("Réessayer")}</button></div>` : ""}
    ${body}
    ${OPEN ? panel() : ""}`;
  restoreDrafts();
  document.body.classList.toggle("ew-lock", !!OPEN);
  const din = box().querySelector(".ew-drawer-in");
  const back = fsel && box().querySelector(fsel);
  if (back && back.offsetParent && document.activeElement !== back && !(fd && fd.filter === "q")) back.focus({ preventScroll: true });
  if (din) { din.scrollTop = drawerTop; if (!hadDrawer || !din.contains(document.activeElement)) { const c = [...din.querySelectorAll("[data-act=close]")].find((b) => b.offsetParent); if (c) c.focus({ preventScroll: true }); } }
  else if (hadDrawer && RETURN_FOCUS) { const b = box().querySelector(`[data-open="${RETURN_FOCUS}"]`); if (b) b.focus({ preventScroll: true }); RETURN_FOCUS = null; }
  box().querySelectorAll(".ew-tabs").forEach((n) => { const on = n.querySelector(".on"); if (on) n.scrollLeft = on.offsetLeft - n.clientWidth / 2 + on.offsetWidth / 2; });
  if (FLASH) toast(FLASH, FLASH_ERR);
  FLASH = ""; FLASH_ERR = false;
}
const ROLE_LABEL = { proprietaire: "Propriétaire du compte", recruteur: "Recruteur", evaluateur: "Évaluateur", lecteur: "Lecture seule" };
function upsell(f, compact) {
  const F = FEATURES[f] || { name: f }, pk = packageFor(f), pkName = pk ? (catItem(pk) || {}).name || pk : null;
  return `<div class="ew-upsell ${compact ? "sm" : ""}"><b>${t(F.pitch || F.name)}</b>
    <span>${pkName ? `${t("Cette fonctionnalité est disponible avec")} ${x(pkName)}.` : t("Cette fonctionnalité est disponible en option.")}</span>
    ${can("facturer") ? `<a class="link" href="tarifs.html${pk === "professional" ? "?formule=professional" : ""}#config">${t("Découvrir cette fonctionnalité")}</a>` : `<span class="hint-l">${t("Parlez-en au propriétaire du compte.")}</span>`}</div>`;
}

// ---------- Command center ----------
function home() {
  const live = liveJobs(), first = (EMP.contact_name || (USER && USER.user_metadata && (USER.user_metadata.full_name || USER.user_metadata.name)) || "").split(" ")[0];
  const toReview = APPS.filter((a) => ["new", "review"].includes(kindOf(a))).length;
  const upcoming = INTERVIEWS.filter((i) => i.status === "prevu" && new Date(i.scheduled_at) > new Date());
  const hires = JOBS_E.reduce((n, j) => n + (j.hires || 0), 0);
  return `
    <div class="ew-hello"><h1>${first ? `${t("Bonjour")}, ${x(first)}.` : t("Bonjour.")}</h1><p>${t("Voici ce qui se passe dans vos recrutements aujourd’hui.")}</p></div>
    <div class="em-stats ew-key">
      <div><b>${live.length}</b><span>${t("Recrutements actifs")}</span></div>
      <div><b>${toReview}</b><span>${t("Profils à examiner")}</span></div>
      ${has("interviews") ? `<div><b>${upcoming.length}</b><span>${t("Entretiens à venir")}</span></div>` : `<div><b>${hires}</b><span>${t("Embauches confirmées")}</span></div>`}
    </div>
    ${priorities()}
    <section class="ap-card"><div class="ew-sec-head"><h2>${t("Offres actives")}</h2><a class="link" href="#offres">${t("Toutes mes offres")}</a></div>
      ${activeOffers()}
    </section>`;
}
function activeOffers() {
  const list = JOBS_E.filter((j) => ["Actif", "En vérification"].includes(jobState(j)[0]));
  if (!JOBS_E.length) return `<p class="hint-l">${t("Vous n’avez pas encore publié d’offre.")}</p>${can("gerer") ? `<a class="btn" href="post.html">${t("Publier une offre")}</a>` : ""}`;
  if (!list.length) return `<p class="hint-l">${t("Aucune offre active pour l’instant.")}</p>`;
  return `<div class="ew-offers">${list.map((j) => { const [st, cls] = jobState(j), h = health(j), as = appsOf(j.id), fresh = as.filter((a) => kindOf(a) === "new").length;
    return `<a class="ew-offer" href="#offre-${j.id}-candidatures"><span class="ew-offer-t"><b>${x(j.title)}</b><small>${x(j.city)}</small></span>
      <span class="ew-offer-n"><b>${as.length}</b> ${t("candidatures")}${fresh ? ` · <em>${fresh} ${t("nouvelles")}</em>` : ""} · ${j.hires || 0} / ${j.positions} ${t("postes pourvus")}</span>
      <span class="ew-offer-s">${st === "Actif" ? `<span class="ew-health ${h.ok ? "ok" : "warn"}">${t(h.ok ? "En bonne voie" : "Attention requise")}</span>` : `<span class="st ${cls}">${t(st)}</span>`}</span></a>`; }).join("")}</div>`;
}
function priorities() {
  const items = [];
  const tomorrow = INTERVIEWS.filter((i) => i.status === "prevu" && (new Date(i.scheduled_at) - Date.now()) / DAY < 2 && new Date(i.scheduled_at) > new Date());
  if (tomorrow.length) items.push([`${tomorrow.length} ${t("entretien(s) prévu(s) dans les prochaines 48 heures.")}`, "Voir les entretiens", "#entretiens"]);
  const fresh = APPS.filter((a) => kindOf(a) === "new");
  if (fresh.length) items.push([`${fresh.length} ${t("nouvelle(s) candidature(s) attendent votre examen.")}`, "Examiner les candidatures", "#candidatures"]);
  const stale = APPS.filter((a) => kindOf(a) === "shortlist" && daysSince(a.stage_at || a.created_at) >= 5);
  if (stale.length) items.push([`${stale.length} ${t("candidat(s) présélectionné(s) n’ont pas reçu de réponse depuis 5 jours.")}`, "Voir les candidats", "#candidatures"]);
  liveJobs().forEach((j) => { const left = Math.ceil((endDate(j) - Date.now()) / DAY); if (left <= 7) items.push([`${t("Votre offre")} « ${x(j.title)} » ${t("expire dans")} ${Math.max(0, left)} ${t("jours")}.`, "Ouvrir l’offre", `#offre-${j.id}`]); });
  JOBS_E.filter((j) => !health(j).ok && jobState(j)[0] === "Actif").slice(0, 2).forEach((j) => items.push([`« ${x(j.title)} » : ${t("attention requise")} — ${health(j).reasons[0]}`, "Voir le diagnostic", `#offre-${j.id}`]));
  if (can("facturer") && ORDERS.some((o) => canPayOrder(o) || o.approval_status === "info_demandee" || (o.path === "differe" && o.approval_status === "approuvee" && !o.terms_accepted_at))) items.push([t("Une commande attend une action de votre part."), "Voir mes achats", "#achats"]);
  return `<section class="ap-card ew-prio"><h2>${t("Votre priorité aujourd’hui")}</h2>
    ${items.length ? `<ul>${items.slice(0, PRIO_ALL ? 12 : 3).map(([txt, btn, href]) => `<li><span>${txt}</span><a class="btn btn-plain" href="${href}">${t(btn)}</a></li>`).join("")}</ul>
      ${items.length > 3 ? `<button class="linkbtn" type="button" data-act="prio-all">${PRIO_ALL ? t("Réduire") + " ↑" : `${t("Voir toutes les actions")} (${items.length}) ↓`}</button>` : ""}` : `<p class="hint-l">${t("Rien d’urgent. Vos recrutements sont à jour.")}</p>`}</section>`;
}

// ---------- Offers ----------
function offersPage() {
  return `<section class="ap-card"><h2>${t("Mes offres")} <span class="cnt">${JOBS_E.length}</span></h2>
    ${JOBS_E.map(jobCard).join("") || `<p class="hint-l">${t("Vous n’avez pas encore publié d’offre.")}</p><a class="btn" href="post.html">${t("Publier une offre")}</a>`}</section>`;
}
function jobCard(j) {
  const [st, cls] = jobState(j), end = endDate(j), as = appsOf(j.id), fresh = as.filter((a) => kindOf(a) === "new").length;
  return `<article class="em-job">
    <div class="em-job-top"><div><a href="#offre-${j.id}"><b>${x(j.title)}</b></a><span>${x(j.city)} · ${t(j.type)} · ${x((catItem(j.package) || {}).name || "")}</span></div>
      <div class="em-tags"><span class="st ${cls}">${t(st)}</span>${can("facturer") ? `<span class="st ${j.paid ? "s-ok" : "s-int"}">${j.paid ? t("Payée") : t("Paiement en attente")}</span>` : ""}</div></div>
    <div class="em-facts">
      <span><b>${j.hires || 0} / ${j.positions}</b> ${t("postes pourvus")}${j.pending_positions ? ` · +${j.pending_positions} ${t("en attente de paiement")}` : ""}</span>
      <span><b>${as.length}</b> ${t("candidatures")}${fresh ? ` · <em>${fresh} ${t("nouvelles")}</em>` : ""}</span>
      <span>${j.published_at ? `${t("Publiée le")} ${fmt(j.published_at)} · ${t("expire le")} ${fmt(end)}` : `${t("Envoyée le")} ${fmt(j.created_at)}`}</span>
    </div>
    <div class="row"><a class="btn" href="#offre-${j.id}-candidatures">${t("Voir les candidatures")}</a>
      ${can("gerer") && j.status !== "closed" ? `<button class="btn btn-plain" type="button" data-add="${j.id}">${t("Ajouter des postes")}</button><button class="btn btn-plain" type="button" data-close="${j.id}">${t("Fermer l’offre")}</button>` : ""}</div>
    <div class="em-add" id="add-${j.id}" hidden></div></article>`;
}
function extraUnit(j) { const e = catItem("extra_position"); return e && e.price_usd != null ? +e.price_usd : +((catItem(j.package) || catItem("essential")).price_usd || 0); }
function addBox(j) {
  return `<div class="em-add-in"><label class="field"><span>${t("Postes supplémentaires")}</span><input type="number" min="1" max="${RULES.maxPositions}" value="1" data-n="${j.id}" /></label>
    <p class="em-price" id="price-${j.id}">${t("Frais supplémentaires")} : <b>${usd(extraUnit(j))}</b></p>
    <p class="hint-l">${t("Les postes sont ajoutés à l’offre après paiement. Le montant final est confirmé par l’équipe ALO.")}</p>
    <div class="row"><button class="btn" type="button" data-addok="${j.id}">${t("Confirmer la demande")}</button><button class="btn btn-plain" type="button" data-add="${j.id}">${t("Annuler")}</button></div>
    <p class="ap-err" id="adderr-${j.id}" hidden></p></div>`;
}

// ---------- Recruitment workspace ----------
function workspace(r) {
  const j = JOBS_E.find((z) => z.id === r.id);
  if (!j) return `<p class="hint-l">${t("Offre introuvable.")}</p>`;
  const as = appsOf(j.id), [st, cls] = jobState(j);
  const tabs = WS_TABS.filter(([id, , f]) => id === "comparer" || has(f));
  const tab = tabs.find((z) => z[0] === r.tab) ? r.tab : "apercu";
  return `
    <div class="ew-ws-head"><p class="em-back"><a class="link" href="#offres">← ${t("Mes offres")}</a></p>
      <h1>${t("Recrutement")} : ${x(j.title)}</h1>
      <p class="spp-title">${j.positions} ${j.positions > 1 ? t("postes disponibles") : t("poste disponible")} · ${as.length} ${t("candidatures")} · ${j.hires || 0} ${t("recrutement(s) confirmé(s)")} · <span class="st ${cls}">${t(st)}</span></p></div>
    <nav class="ew-tabs">${tabs.map(([id, label]) => `<a href="#offre-${j.id}-${id}" class="${tab === id ? "on" : ""}">${t(label)}${id === "comparer" && PICK.size ? ` (${PICK.size})` : ""}</a>`).join("")}</nav>
    ${({ apercu: wsOverview, candidatures: wsPipeline, comparer: wsCompare, entretiens: wsInterviews, evaluations: wsEval, rapports: wsReports }[tab])(j)}`;
}
function wsOverview(j) {
  const h = health(j), as = appsOf(j.id), e = endDate(j);
  return `
    <section class="ap-card ew-healthcard ${h.ok ? "ok" : "warn"}"><h2>${t("Santé de ce recrutement")} — ${t(h.ok ? "En bonne voie" : "Attention requise")}</h2>
      ${h.ok ? `<p class="hint-l">${t("Aucun signal d’alerte : candidatures reçues, examen à jour et délai suffisant.")}</p>` : `<ul>${h.reasons.map((s) => `<li>${s}</li>`).join("")}</ul>
      <h3>${t("Suggestions")}</h3><ul>${h.tips.map((s) => `<li>${t(s)}</li>`).join("")}</ul>`}</section>
    <div class="ew-funnel">${pipeline().filter((s) => s.kind !== "rejected").map((s) => `<a href="#offre-${j.id}-candidatures"><b>${as.filter((a) => a.stage === s.id).length}</b><span>${t(s.label)}</span></a>`).join("")}</div>
    <div class="sp-grid2">
      <section class="ap-card"><h2>${t("Critères de l’offre")}</h2>${reqs(j).length ? `<div class="pv-chips">${reqs(j).map((r) => `<span>${x(r)}</span>`).join("")}</div>` : `<p class="hint-l">${t("Ajoutez des compétences demandées à vos prochaines offres pour mieux trier les candidatures.")}</p>`}
        ${(j.questions || []).length ? `<h3>${t("Questions aux candidats")}</h3><ul>${j.questions.map((q) => `<li>${x(q)}</li>`).join("")}</ul>` : ""}</section>
      <section class="ap-card"><h2>${t("Calendrier")}</h2>
        <div class="pf-line"><span>${t("Envoyée le")}</span><b>${fmt(j.created_at)}</b></div>
        <div class="pf-line"><span>${t("Publiée le")}</span><b>${fmt(j.published_at) || "—"}</b></div>
        <div class="pf-line"><span>${t("Expire le")}</span><b>${fmt(e) || "—"}</b></div>
        <div class="pf-line"><span>${t("Première candidature")}</span><b>${as.length ? fmt(as[as.length - 1].created_at) : "—"}</b></div>
        ${can("gerer") && j.status !== "closed" ? `<div class="row"><button class="btn btn-plain" type="button" data-add="${j.id}">${t("Ajouter des postes")}</button></div><div class="em-add" id="add-${j.id}" hidden></div>` : ""}</section>
    </div>`;
}
function filtered(j) {
  let as = appsOf(j.id).map((a) => ({ a, m: match(a, j) }));
  if (FILTER.q) as = as.filter(({ a }) => norm(a.name).includes(norm(FILTER.q)));
  if (FILTER.min) as = as.filter(({ m }) => m.ok.length >= FILTER.min);
  if (FILTER.all && has("screening_advanced")) as = as.filter(({ m }) => m.miss.length === 0);
  if (has("screening_advanced") && FILTER.sort === "match") as.sort((p, q) => q.m.ok.length - p.m.ok.length);
  return as;
}
function wsPipeline(j) {
  const VIEWN = VIEW || (PHONE.matches ? "list" : "board"); // phones start with the list; the person's own choice wins
  const total = reqs(j).length, list = filtered(j);
  const tools = `
    <div class="ew-tools">
      <input class="ew-search" type="search" placeholder="${t("Rechercher un candidat")}" value="${x(FILTER.q)}" data-filter="q" />
      ${total ? `<label class="ew-sel"><span>${t("Critères mentionnés")}</span><select data-filter="min"><option value="0">${t("Tous")}</option>${Array.from({ length: total }, (_, i) => i + 1).map((n) => `<option value="${n}" ${FILTER.min === n ? "selected" : ""}>${t("au moins")} ${n} / ${total}</option>`).join("")}</select></label>` : ""}
      ${has("screening_advanced") ? `<label class="pq-consent"><input type="checkbox" data-filter="all" ${FILTER.all ? "checked" : ""} /><span>${t("Mentionne tous les critères")}</span></label>
        <label class="ew-sel"><span>${t("Trier")}</span><select data-filter="sort"><option value="">${t("Plus récentes")}</option><option value="match" ${FILTER.sort === "match" ? "selected" : ""}>${t("Critères mentionnés")}</option></select></label>` : ""}
      <div class="ew-view"><button type="button" class="sk ${VIEWN === "board" ? "on" : ""}" data-view="board">${t("Tableau")}</button><button type="button" class="sk ${VIEWN === "list" ? "on" : ""}" data-view="list">${t("Liste")}</button></div>
      <button class="btn btn-plain" type="button" data-compare="${j.id}">${t("Comparer les candidats")}${PICK.size ? ` (${PICK.size})` : ""}</button>
      ${can("gerer") ? `<button class="linkbtn" type="button" data-act="stages">${t("Personnaliser les étapes")}</button>` : ""}
    </div>
    ${!has("screening_advanced") && total ? upsell("screening_advanced", true) : ""}
    ${EDIT_STAGES ? stagesEditor() : ""}`;
  const filtersOn = FILTER.q || FILTER.min || FILTER.all;
  const none = appsOf(j.id).length && filtersOn ? `<div class="ew-none"><p class="hint-l">${t("Aucun candidat ne correspond à ces filtres.")}</p><button class="btn btn-plain" type="button" data-act="clear-filters">${t("Effacer les filtres")}</button></div>` : `<p class="hint-l">${t("Aucune candidature pour l’instant.")}</p>`;
  const card = ({ a, m }) => `
    <article class="ew-card" draggable="${can("gerer")}" data-app="${a.id}">
      <label class="ew-pick"><input type="checkbox" data-pick="${a.id}" ${PICK.has(a.id) ? "checked" : ""} aria-label="${t("Comparer")}" /></label>
      <button type="button" class="ew-card-b" data-open="${a.id}"><b>${x(a.name)}</b><span>${x(candTitle(a)) || "&nbsp;"}</span>
        <small>${m.total ? `${m.ok.length} / ${m.total} ${t("critères mentionnés")} · ` : ""}${fmt(a.created_at)}${a.hired ? ` · ${t("Embauche confirmée")}` : ""}</small></button>
    </article>`;
  if (VIEWN === "list") return tools + `<section class="ap-card">${list.map(({ a, m }) => `<div class="em-app-top ew-row"><label class="ew-pick"><input type="checkbox" data-pick="${a.id}" ${PICK.has(a.id) ? "checked" : ""} /></label>
      <button class="em-app-name" type="button" data-open="${a.id}"><b>${x(a.name)}</b><span>${x(candTitle(a))}${m.total ? ` · ${m.ok.length} / ${m.total} ${t("critères mentionnés")}` : ""} · ${fmt(a.created_at)}</span></button>
      ${stageSelect(a)}</div>`).join("") || none}</section>`;
  if (!list.length) return tools + `<section class="ap-card">${none}</section>`;
  return tools + `<div class="ew-board">${pipeline().map((s) => { const items = list.filter(({ a }) => a.stage === s.id);
    return `<div class="ew-col" data-stage="${s.id}"><div class="ew-col-h"><b>${t(s.label)}</b><span>${items.length}</span></div>${items.map(card).join("")}</div>`; }).join("")}</div>`;
}
function stageSelect(a) {
  if (!can("gerer") || a.hired) return `<span class="st s-sent">${t(stageOf(a).label)}</span>`;
  return `<select data-stage-of="${a.id}" aria-label="${t("Étape")}">${pipeline().filter((s) => s.kind !== "hired" || a.hired).map((s) => `<option value="${s.id}" ${a.stage === s.id ? "selected" : ""}>${t(s.label)}</option>`).join("")}</select>`;
}
let EDIT_STAGES = false, STAGES_DRAFT = null;
function stagesEditor() {
  const st = STAGES_DRAFT || (STAGES_DRAFT = pipeline().map((s) => ({ ...s })));
  return `<section class="ap-card ew-stages"><h3>${t("Étapes de votre processus")}</h3>
    ${st.map((s, i) => `<div class="ew-stage-row"><input value="${x(t(s.label))}" data-sl="${i}" maxlength="40" />
      <select data-sk="${i}">${Object.entries(KIND_LABEL).map(([k, l]) => `<option value="${k}" ${s.kind === k ? "selected" : ""}>${t(l)}</option>`).join("")}</select>
      <button type="button" class="linkbtn" data-sup="${i}">↑</button><button type="button" class="linkbtn" data-sdel="${i}">${t("Retirer")}</button></div>`).join("")}
    <div class="row"><button class="btn btn-plain" type="button" data-act="stage-add">${t("Ajouter une étape")}</button><button class="btn" type="button" data-act="stage-save">${t("Enregistrer les étapes")}</button><button class="linkbtn" type="button" data-act="stages">${t("Annuler")}</button></div>
    <p class="hint-l">${t("Chaque étape a un type, qui détermine ce que voit le candidat. Il faut au moins une étape « Nouvelle », « Embauché » et « Non retenu ».")}</p>
    <p class="ap-err" id="stage-err" hidden></p></section>`;
}
function wsCompare(j) {
  if (!has("comparison")) return upsell("comparison");
  const sel = appsOf(j.id).filter((a) => PICK.has(a.id)).slice(0, 4);
  if (sel.length < 2) return `<section class="ap-card"><p class="hint-l">${t("Cochez 2 à 4 candidats dans l’onglet Candidatures pour les comparer.")}</p><a class="btn" href="#offre-${j.id}-candidatures">${t("Choisir des candidats")}</a></section>`;
  const res = RESULTS[j.id] || [];
  const row = (label, f) => `<tr><th>${label}</th>${sel.map((a) => `<td>${f(a)}</td>`).join("")}</tr>`;
  return `<section class="ap-card"><div class="em-table"><table class="ew-cmp"><thead><tr><th></th>${sel.map((a) => `<th><button class="linkbtn" type="button" data-open="${a.id}">${x(a.name)}</button></th>`).join("")}</tr></thead><tbody>
    ${row(t("Étape"), (a) => x(t(stageOf(a).label)))}
    ${row(t("Critères mentionnés"), (a) => { const m = match(a, j); return m.total ? `<b>${m.ok.length} / ${m.total}</b>` : "—"; })}
    ${reqs(j).map((r) => row(x(r), (a) => hasReq(candText(a), r) ? `<span class="ew-yes">${t("Mentionné")}</span>` : `<span class="ew-no">—</span>`)).join("")}
    ${row(t("Expérience déclarée"), (a) => years(a) ? `${years(a)} ${t("an(s)")}` : "—")}
    ${row(t("Dernier poste"), (a) => x(candTitle(a)) || "—")}
    ${row(t("Formation"), (a) => x(((a.data || {}).education || []).map((e) => e.degree).filter(Boolean).join(", ")) || "—")}
    ${row(t("Ville"), (a) => x(((a.data || {}).contact || {}).city) || "—")}
    ${res.length ? row(t("Note du comité"), (a) => { const r = res.find((z) => z.application_id === a.id && z.stage === "technique"); return r ? `${r.weighted} / 5` : "—"; }) : ""}
  </tbody></table></div><p class="hint-l">${t("« Mentionné » signifie que le candidat cite ce critère dans sa candidature. À vérifier en entretien.")}</p></section>`;
}
function wsInterviews(j) { return interviewsList(INTERVIEWS.filter((i) => i.job_id === j.id)); }
function wsReports(j) {
  const as = appsOf(j.id);
  return `<section class="ap-card"><h2>${t("Rapports")}</h2>
    ${statsBlock([j])}
    <div class="row">
      <button class="btn btn-plain" type="button" data-csv="apps" data-job="${j.id}">${t("Exporter les candidatures (CSV)")}</button>
      ${has("evaluation_matrix") ? `<button class="btn btn-plain" type="button" data-csv="eval" data-job="${j.id}">${t("Exporter les résultats d’évaluation (CSV)")}</button>` : ""}
      <button class="btn btn-plain" type="button" data-csv="timeline" data-job="${j.id}">${t("Exporter le calendrier (CSV)")}</button>
    </div><p class="hint-l">${as.length} ${t("candidatures")} · ${t("les fichiers s’ouvrent dans Excel ou Google Sheets.")}</p></section>`;
}

// ---------- Evaluations (criteria, conflicts of interest, independent scores, consolidated results) ----------
async function loadEval(jobId) {
  if (DEMO) return;
  try { CRITERIA[jobId] = await rpc("job_criteria", { p_job: jobId }); } catch { CRITERIA[jobId] = []; }
  try { MYSCORES[jobId] = await rpc("my_scores", { p_job: jobId }); } catch { MYSCORES[jobId] = []; }
  if (can("gerer")) { try { RESULTS[jobId] = await rpc("evaluation_results", { p_job: jobId }); } catch { RESULTS[jobId] = []; } }
}
const myCoi = (jobId) => (MYSCORES[jobId] || []).find((s) => s.coi !== null && s.coi !== undefined);
function wsEval(j) {
  if (!has("evaluation_matrix")) return upsell("evaluation_matrix");
  const cr = CRITERIA[j.id] || [], coi = myCoi(j.id), res = RESULTS[j.id] || [];
  const sum = cr.reduce((n, c) => n + +c.weight, 0);
  const shortlisted = appsOf(j.id).filter((a) => AFTER_SHORTLIST.includes(kindOf(a)));
  return `
    <section class="ap-card"><h2>${t("Grille d’évaluation")}</h2>
      ${can("gerer") ? `<div id="crit">${(CRIT_DRAFT[j.id] || cr).map((c, i) => `<div class="ew-stage-row"><input value="${x(c.name)}" data-cn="${i}" maxlength="120" placeholder="${t("Critère")}" />
          <input type="number" min="1" max="100" value="${c.weight}" data-cw="${i}" class="ad-in sm" aria-label="${t("Poids (%)")}" /> %
          <select data-cs="${i}"><option value="technique" ${c.stage !== "financier" ? "selected" : ""}>${t("Technique")}</option><option value="financier" ${c.stage === "financier" ? "selected" : ""}>${t("Financier")}</option></select>
          <button class="linkbtn" type="button" data-cdel="${i}">${t("Retirer")}</button></div>`).join("")}</div>
        <p class="hint-l">${t("Total des poids")} : <b>${(CRIT_DRAFT[j.id] || cr).reduce((n, c) => n + (+c.weight || 0), 0)} %</b> ${t("(100 % recommandé par étape)")}</p>
        <div class="row"><button class="btn btn-plain" type="button" data-act="crit-add" data-job="${j.id}">${t("Ajouter un critère")}</button><button class="btn" type="button" data-act="crit-save" data-job="${j.id}">${t("Enregistrer la grille")}</button></div>
        <p class="ap-err" id="crit-err" hidden></p>`
      : cr.length ? `<ul>${cr.map((c) => `<li>${x(c.name)} — ${c.weight} %${c.stage === "financier" ? ` (${t("Financier")})` : ""}</li>`).join("")}</ul>` : `<p class="hint-l">${t("Aucune grille pour l’instant.")}</p>`}
    </section>
    <section class="ap-card"><h2>${t("Déclaration de conflit d’intérêts")}</h2>
      ${coi ? `<p>${coi.coi ? t("Vous avez déclaré un conflit d’intérêts : vous ne pouvez pas noter les candidats de cette offre.") : t("Vous avez déclaré n’avoir aucun conflit d’intérêts pour cette offre.")}</p>`
        : `<p class="hint-l">${t("Obligatoire avant de noter les candidats.")}</p>
        <div class="row"><button class="btn" type="button" data-coi="0" data-job="${j.id}">${t("Je n’ai aucun conflit d’intérêts")}</button><button class="btn btn-plain" type="button" data-coi="1" data-job="${j.id}">${t("J’ai un conflit d’intérêts")}</button></div>`}
    </section>
    <section class="ap-card"><h2>${t("Candidats à évaluer")} <span class="cnt">${shortlisted.length}</span></h2>
      ${cr.length ? shortlisted.map((a) => { const mine = (MYSCORES[j.id] || []).filter((s) => s.application_id === a.id).length;
        return `<div class="sp-row"><div><b>${x(a.name)}</b><span>${t(stageOf(a).label)} · ${mine ? `${t("Votre note")} : ${mine} / ${cr.length} ${t("critères")}` : t("Pas encore noté par vous")}</span></div><button class="btn btn-plain" type="button" data-open="${a.id}" data-tab="eval">${t("Évaluer")}</button></div>`; }).join("") || `<p class="hint-l">${t("Les candidats présélectionnés apparaîtront ici.")}</p>`
      : `<p class="hint-l">${t("Définissez d’abord la grille d’évaluation.")}</p>`}
    </section>
    ${can("gerer") && cr.length ? `<section class="ap-card"><h2>${t("Résultats consolidés")}</h2>
      ${res.length ? `<div class="em-table"><table><thead><tr><th>${t("Candidat")}</th><th>${t("Technique")}</th><th>${t("Financier")}</th><th>${t("Évaluateurs")}</th></tr></thead><tbody>
        ${[...new Set(res.map((r) => r.application_id))].map((id) => { const a = APPS.find((z) => z.id === id) || { name: "#" + id }; const tq = res.find((r) => r.application_id === id && r.stage === "technique"), fq = res.find((r) => r.application_id === id && r.stage === "financier");
          return `<tr><td><b>${x(a.name)}</b></td><td>${tq ? `${tq.weighted} / 5` : "—"}</td><td>${fq ? `${fq.weighted} / 5` : "—"}</td><td>${Math.max(tq ? tq.evaluators : 0, fq ? fq.evaluators : 0)}</td></tr>`; }).join("")}</tbody></table></div>
        <p class="hint-l">${t("Moyenne pondérée des notes de chaque évaluateur (0 à 5). Les évaluateurs ne voient pas les notes des autres.")}</p>` : `<p class="hint-l">${t("Aucune note pour l’instant.")}</p>`}</section>` : ""}`;
}
const CRIT_DRAFT = {};

// ---------- Candidate panel ----------
let PANEL_TAB = "profil";
function panel() {
  const a = APPS.find((z) => z.id === OPEN); if (!a) return "";
  const j = JOBS_E.find((z) => z.id === a.job_id) || { skills: [], needs: [], questions: [] }, d = a.data || {}, c = d.contact || {};
  const ins = insights(a, j), wa = (a.phone || "").replace(/[^\d]/g, ""), cr = CRITERIA[j.id] || [];
  const tabs = [["profil", "Profil"], ["analyse", "Analyse"], ["notes", "Notes"]];
  if (has("interviews")) tabs.push(["entretien", "Entretien"]);
  if (has("evaluation_matrix") && cr.length) tabs.push(["eval", "Évaluation"]);
  const tab = tabs.find((z) => z[0] === PANEL_TAB) ? PANEL_TAB : "profil";
  return `<div class="ew-drawer" role="dialog" aria-modal="true" aria-label="${x(a.name)}"><div class="ew-drawer-in" data-app="${a.id}">
    <div class="ew-dbar"><button class="linkbtn" type="button" data-act="close">← ${t("Retour aux candidats")}</button></div>
    <div class="ew-dh"><div><h2>${x(a.name)}</h2><p class="spp-title">${x(candTitle(a))}${c.city ? " · " + x(c.city) : ""}</p>
      <p class="hint-l">${x(j.title)} · ${t("Reçue le")} ${fmt(a.created_at)}${ins.m.total ? ` · ${ins.m.ok.length} / ${ins.m.total} ${t("critères mentionnés")}` : ""}</p></div>
      <button class="btn btn-plain ew-dclose" type="button" data-act="close">${t("Fermer")}</button></div>
    <div class="ew-dact">${stageSelect(a)}
      ${!can("gerer") ? "" : a.phone ? `<a class="btn btn-plain" href="tel:${x(a.phone)}">${x(a.phone)}</a>` : ""}${can("gerer") && wa.length >= 8 ? `<a class="btn btn-plain" href="https://wa.me/${wa}" target="_blank" rel="noopener">WhatsApp</a>` : ""}
      ${can("gerer") && a.email ? `<a class="btn btn-plain" href="mailto:${x(a.email)}">${t("E-mail")}</a>` : ""}</div>
    <nav class="ew-tabs sm">${tabs.map(([id, l]) => `<button type="button" class="${tab === id ? "on" : ""}" data-ptab="${id}">${t(l)}</button>`).join("")}</nav>
    <div class="ew-dbody">${({ profil: () => pProfile(a, j), analyse: () => pAnalysis(a, j, ins), notes: () => pNotes(a), entretien: () => pInterview(a), eval: () => pEval(a, j) }[tab])()}</div>
  </div></div>`;
}
function pProfile(a, j) {
  const d = a.data || {};
  return `
    ${a.message ? `<h3>${t("Message")}</h3><p>${x(a.message)}</p>` : ""}
    ${(d.experiences || []).length ? `<h3>${t("Expériences professionnelles")}</h3>${d.experiences.map((e) => `<div class="pv-item"><b>${x(e.role)}</b><span>${x(e.company)} · ${x([e.start, e.end].filter(Boolean).join(" – "))}</span>${(e.bullets || []).length ? `<ul>${e.bullets.map((b) => `<li>${x(b)}</li>`).join("")}</ul>` : ""}</div>`).join("")}` : ""}
    ${(d.education || []).length ? `<h3>${t("Formations et diplômes")}</h3>${d.education.map((e) => `<div class="pv-item"><b>${x(e.degree)}</b><span>${x(e.school)} · ${x(e.year)}</span></div>`).join("")}` : ""}
    ${(d.skills || []).length ? `<h3>${t("Compétences")}</h3><div class="pv-chips">${d.skills.map((k) => `<span>${x(k)} <small>${t("Déclarée")}</small></span>`).join("")}</div>` : ""}
    ${a.answers && (j.questions || []).length ? `<h3>${t("Réponses à vos questions")}</h3>${j.questions.map((q, i) => `<div class="pv-item"><b>${x(q)}</b><span>${x(Array.isArray(a.answers) ? a.answers[i] : a.answers[q])}</span></div>`).join("")}` : ""}
    ${a.files && Object.keys(a.files).length ? `<h3>${t("Documents")}</h3><div class="row">${Object.entries(a.files).map(([doc, f]) => `<button class="btn btn-plain" type="button" data-file="${x(f.path)}">${x(doc)} — ${x(f.name)}</button>`).join("")}</div>` : ""}
    ${can("gerer") ? (a.hired ? `<p class="em-ok">${t("Embauche confirmée. Merci ! Le candidat pourra demander sa Prime d’embauche ALO.")}</p>` : hireForm(a, j)) : ""}`;
}
function pAnalysis(a, j, ins) {
  const head = `${xpButton("xp-how-" + a.id, t("Comment ça fonctionne"))}<div class="xp" id="xp-how-${a.id}" ${xpOpen("xp-how-" + a.id) ? "" : "hidden"}><dl class="fx-how">
      <dt>${t("Ce qu’elle utilise")}</dt><dd>${t("Les compétences demandées dans votre offre et ce que le candidat a écrit dans sa candidature.")}</dd>
      <dt>${t("Ce qu’elle produit")}</dt><dd>${t("Pour chaque critère : « Mentionné » ou « Non mentionné », avec des points à vérifier en entretien.")}</dd>
      <dt>${t("Ses limites")}</dt><dd>${t("C’est une comparaison de mots, pas une IA : un synonyme peut être manqué, et « mentionné » ne veut pas dire vérifié. Aucun candidat n’est écarté automatiquement.")}</dd></dl></div>`;
  const basic = ins.m.total ? `<h3>${t("Critères de l’offre")}</h3><ul class="ew-crit">${reqs(j).map((r) => `<li class="${ins.m.ok.includes(r) ? "ok" : ""}"><span>${x(r)}</span><em>${ins.m.ok.includes(r) ? t("Mentionné") : t("Non mentionné")}</em></li>`).join("")}</ul>` : `<p class="hint-l">${t("Cette offre n’a pas de compétences demandées : ajoutez-en pour obtenir une analyse.")}</p>`;
  if (!has("candidate_insights")) return head + basic + upsell("candidate_insights", true);
  return head + `
    <div class="sp-grid2 ew-ins"><div><h3>${t("Points forts")}</h3><ul>${ins.strong.map((s) => `<li>${x(s)}</li>`).join("") || `<li>—</li>`}</ul></div>
      <div><h3>${t("Points à vérifier")}</h3><ul>${ins.check.map((s) => `<li>${x(s)}</li>`).join("") || `<li>—</li>`}</ul></div></div>
    ${basic}
    <h3>${t("Questions suggérées pour l’entretien")}</h3><ul>${ins.qs.map((s) => `<li>${x(s)}</li>`).join("") || `<li>${t("Ajoutez des responsabilités et des compétences à l’offre pour obtenir des questions.")}</li>`}</ul>`;
}
function pNotes(a) {
  const ns = NOTES[a.id] || [];
  return `${ns.map((n) => `<div class="ew-note"><b>${x(n.author_email || t("Vous"))}</b><small>${fmtT(n.created_at)}</small><p>${x(n.body)}</p></div>`).join("") || `<p class="hint-l">${t("Aucune note pour l’instant.")}</p>`}
    ${can("evaluer") ? `<form class="ew-note-f" data-note="${a.id}"><textarea name="body" rows="3" maxlength="2000" required placeholder="${t("Ajouter une note pour l’équipe")}"></textarea>${DRAFTS["note-" + a.id] && DRAFTS["note-" + a.id].body ? `<small class="ew-draft">${t("Brouillon conservé — pas encore partagé avec l’équipe.")}</small>` : ""}<button class="btn" type="submit">${t("Ajouter la note")}</button></form>` : ""}
    <p class="hint-l">${t("Les notes sont visibles par les membres de votre équipe, jamais par le candidat.")}</p>`;
}
function pInterview(a) {
  const mine = INTERVIEWS.filter((i) => i.application_id === a.id);
  return `${interviewsList(mine, true)}
    ${can("gerer") ? `<form class="ew-int-f" data-int="${a.id}"><h3>${t("Planifier un entretien")}</h3>
      <div class="three-f"><label class="field"><span>${t("Date et heure")}</span><input name="at" type="datetime-local" required /></label>
        <label class="field"><span>${t("Format")}</span><select name="mode"><option value="Sur place">${t("Sur place")}</option><option value="Téléphone">${t("Téléphone")}</option><option value="Visioconférence">${t("Visioconférence")}</option></select></label>
        <label class="field"><span>${t("Lieu ou lien")}</span><input name="location" maxlength="300" /></label></div>
      <label class="field"><span>${t("Notes internes (facultatif)")}</span><textarea name="notes" rows="2" maxlength="2000"></textarea></label>
      <p class="ap-err" hidden></p><button class="btn" type="submit">${t("Planifier")}</button>
      <p class="hint-l">${t("Prévenez le candidat par téléphone, WhatsApp ou e-mail. Son statut passe à « Entretien ».")}</p></form>` : ""}`;
}
function pEval(a, j) {
  const cr = CRITERIA[j.id] || [], coi = myCoi(j.id);
  if (!coi) return `<p class="hint-l">${t("Déclarez d’abord l’absence de conflit d’intérêts dans l’onglet Évaluations de l’offre.")}</p><a class="btn" href="#offre-${j.id}-evaluations">${t("Aller aux évaluations")}</a>`;
  if (coi.coi) return `<p>${t("Vous avez déclaré un conflit d’intérêts : vous ne pouvez pas noter les candidats de cette offre.")}</p>`;
  const mine = (MYSCORES[j.id] || []).filter((s) => s.application_id === a.id);
  return `<form data-score="${a.id}" data-job="${j.id}">${["technique", "financier"].map((stg) => { const list = cr.filter((c) => (c.stage || "technique") === stg); if (!list.length) return "";
    return `<h3>${t(stg === "technique" ? "Évaluation technique" : "Évaluation financière")}</h3>${list.map((c) => { const s = mine.find((m) => m.criterion_id === c.id) || {};
      return `<div class="ew-score"><span><b>${x(c.name)}</b><small>${c.weight} %</small></span><select name="s-${c.id}">${["", 0, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map((v) => `<option value="${v}" ${String(s.score ?? "") === String(v) ? "selected" : ""}>${v === "" ? "—" : v}</option>`).join("")}</select>
        <input name="c-${c.id}" maxlength="1000" placeholder="${t("Commentaire (facultatif)")}" value="${x(s.comment)}" /></div>`; }).join("")}`; }).join("")}
    <p class="ap-err" hidden></p><button class="btn" type="submit">${t("Enregistrer mon évaluation")}</button>
    <p class="hint-l">${t("Notes de 0 à 5. Votre évaluation reste indépendante : les autres évaluateurs ne la voient pas.")}</p></form>`;
}
function hireForm(a, j) {
  if ((j.hires || 0) >= j.positions) return `<p class="hint-l">${t("Tous les postes de cette offre sont pourvus. Ajoutez un poste pour confirmer une autre embauche.")}</p>`;
  return `<form class="em-hire" data-hire="${a.id}"><h3>${t("Confirmer l’embauche")}</h3>
    <div class="three-f"><label class="field"><span>${t("Date de début")}</span><input name="start" type="date" required /></label>
      <label class="field"><span>${t("Salaire mensuel convenu")}</span><input name="salary" type="number" min="1" required inputmode="numeric" /></label>
      <label class="field"><span>${t("Devise")}</span><select name="currency"><option>HTG</option><option>USD</option></select></label></div>
    <p class="hint-l">${t("Confidentiel : sert uniquement à vérifier la Prime d’embauche du candidat. Jamais publié, jamais montré à d’autres personnes.")}</p>
    <label class="pq-consent"><input type="checkbox" name="certify" required /><span>${t("Je confirme avoir embauché cette personne à ces conditions.")}</span></label>
    <p class="ap-err" hidden></p><button class="btn" type="submit">${t("Confirmer l’embauche")}</button></form>`;
}

// ---------- Other pages ----------
function allApps() {
  let list = APPS.slice();
  if (FILTER.job) list = list.filter((a) => a.job_id === +FILTER.job);
  if (FILTER.stage) list = list.filter((a) => kindOf(a) === FILTER.stage);
  if (FILTER.q) list = list.filter((a) => norm(a.name).includes(norm(FILTER.q)));
  return `<section class="ap-card"><h2>${t("Candidatures")} <span class="cnt">${APPS.length}</span></h2>
    <div class="ew-tools"><input class="ew-search" type="search" placeholder="${t("Rechercher un candidat")}" value="${x(FILTER.q)}" data-filter="q" />
      <select data-filter="job"><option value="">${t("Toutes les offres")}</option>${JOBS_E.map((j) => `<option value="${j.id}" ${String(FILTER.job) === String(j.id) ? "selected" : ""}>${x(j.title)}</option>`).join("")}</select>
      <select data-filter="stage"><option value="">${t("Toutes les étapes")}</option>${Object.entries(KIND_LABEL).map(([k, l]) => `<option value="${k}" ${FILTER.stage === k ? "selected" : ""}>${t(l)}</option>`).join("")}</select></div>
    ${list.map((a) => { const j = JOBS_E.find((z) => z.id === a.job_id) || {}; const m = j.id ? match(a, j) : { total: 0 };
      return `<div class="em-app-top ew-row"><button class="em-app-name" type="button" data-open="${a.id}"><b>${x(a.name)}</b><span>${x(j.title)}${m.total ? ` · ${m.ok.length} / ${m.total} ${t("critères mentionnés")}` : ""} · ${fmt(a.created_at)}</span></button>${stageSelect(a)}</div>`; }).join("") || (APPS.length && (FILTER.job || FILTER.stage || FILTER.q) ? `<div class="ew-none"><p class="hint-l">${t("Aucun candidat ne correspond à ces filtres.")}</p><button class="btn btn-plain" type="button" data-act="clear-filters">${t("Effacer les filtres")}</button></div>` : `<p class="hint-l">${t("Aucune candidature pour l’instant.")}</p>`)}</section>`;
}
function interviewsList(list, compact) {
  const up = list.filter((i) => i.status === "prevu").sort((p, q) => new Date(p.scheduled_at) - new Date(q.scheduled_at)), done = list.filter((i) => i.status !== "prevu");
  const row = (i) => { const a = APPS.find((z) => z.id === i.application_id) || { name: "—" }, j = JOBS_E.find((z) => z.id === i.job_id) || {};
    return `<div class="sp-row"><div><b>${fmtT(i.scheduled_at)}</b><span>${compact ? "" : `${x(a.name)} · ${x(j.title)} · `}${t(i.mode)}${i.location ? " · " + x(i.location) : ""}</span></div>
      <div class="row">${compact ? "" : `<button class="btn btn-plain" type="button" data-open="${a.id}" data-tab="entretien">${t("Ouvrir")}</button>`}
      ${can("gerer") && i.status === "prevu" ? `<button class="linkbtn" type="button" data-ist="fait" data-iid="${i.id}">${t("Marquer comme fait")}</button><button class="linkbtn" type="button" data-ist="annule" data-iid="${i.id}">${t("Annuler")}</button>` : `<span class="st ${i.status === "fait" ? "s-ok" : i.status === "annule" ? "s-no" : "s-seen"}">${t({ prevu: "Prévu", fait: "Fait", annule: "Annulé" }[i.status])}</span>`}</div></div>`; };
  return `<section class="ap-card">${compact ? "" : `<h2>${t("Entretiens à venir")} <span class="cnt">${up.length}</span></h2>`}${up.map(row).join("") || `<p class="hint-l">${t("Aucun entretien prévu.")}</p>`}
    ${done.length ? `<h3 class="sp-h3">${t("Entretiens passés ou annulés")}</h3>${done.map(row).join("")}` : ""}</section>`;
}
function interviewsPage() { return interviewsList(INTERVIEWS); }
function evalsPage() {
  return `<section class="ap-card"><h2>${t("Évaluations")}</h2>
    ${JOBS_E.filter((j) => j.status !== "closed").map((j) => `<div class="sp-row"><div><b>${x(j.title)}</b><span>${appsOf(j.id).filter((a) => AFTER_SHORTLIST.includes(kindOf(a))).length} ${t("candidat(s) présélectionné(s)")}</span></div><a class="btn btn-plain" href="#offre-${j.id}-evaluations">${t("Ouvrir")}</a></div>`).join("") || `<p class="hint-l">${t("Aucune offre.")}</p>`}</section>`;
}
function statsBlock(jobs) {
  const ids = new Set(jobs.map((j) => j.id)), as = APPS.filter((a) => ids.has(a.job_id));
  const short = as.filter((a) => AFTER_SHORTLIST.includes(kindOf(a))).length, hires = as.filter((a) => a.hired);
  const done = INTERVIEWS.filter((i) => ids.has(i.job_id) && i.status === "fait").length;
  const tth = hires.map((a) => { const j = jobs.find((z) => z.id === a.job_id); return j && j.published_at && a.hired_at ? (new Date(a.hired_at) - new Date(j.published_at)) / DAY : null; }).filter((v) => v != null);
  const avg = tth.length ? Math.round(tth.reduce((p, q) => p + q, 0) / tth.length) : null;
  return `<div class="em-stats ew-kpi">
    <div><b>${jobs.filter((j) => jobState(j)[0] === "Actif").length}</b><span>${t("Recrutements actifs")}</span></div>
    <div><b>${as.length}</b><span>${t("Candidatures reçues")}</span></div>
    <div><b>${short}</b><span>${t("Candidats présélectionnés")}</span></div>
    <div><b>${done}</b><span>${t("Entretiens réalisés")}</span></div>
    <div><b>${hires.length}</b><span>${t("Embauches confirmées")}</span></div>
    <div><b>${avg == null ? "—" : avg + " " + t("j")}</b><span>${t("Délai moyen d’embauche")}</span></div></div>`;
}
function statsPage() {
  const weeks = Array.from({ length: 8 }, (_, i) => { const end = Date.now() - i * 7 * DAY, start = end - 7 * DAY; return APPS.filter((a) => { const c = +new Date(a.created_at); return c > start && c <= end; }).length; }).reverse();
  const max = Math.max(1, ...weeks);
  const per = JOBS_E.filter((j) => j.status !== "pending").map((j) => { const as = appsOf(j.id), m = as.filter((a) => { const r = match(a, j); return r.total && r.ok.length / r.total >= 0.5; }).length;
    const stuck = as.filter((a) => ["new", "review"].includes(kindOf(a)) && daysSince(a.stage_at || a.created_at) >= 7).length; return { j, n: as.length, q: m, stuck, open: j.published_at ? daysSince(j.published_at) : 0 }; });
  const tips = [];
  per.forEach((p) => { if (p.n && p.q / p.n >= 0.5) tips.push(`« ${x(p.j.title)} » ${t("attire des candidats qui mentionnent vos critères")} (${p.q} / ${p.n}).`);
    if (p.open >= 7 && p.n < 5) tips.push(`« ${x(p.j.title)} » ${t("reçoit peu de candidatures")} (${p.n} ${t("en")} ${p.open} ${t("jours")}).`);
    if (p.stuck >= 3) tips.push(`« ${x(p.j.title)} » : ${p.stuck} ${t("candidatures attendent depuis plus d’une semaine à l’étape d’examen.")}`); });
  return `<section class="ap-card"><h2>${t("Performance de vos recrutements")}</h2>${statsBlock(JOBS_E)}</section>
    <section class="ap-card"><h2>${t("Candidatures reçues par semaine")}</h2><div class="ew-bars">${weeks.map((n, i) => `<div><i style="height:${Math.round((n / max) * 100)}%"></i><b>${n}</b><span>${i === 7 ? t("cette sem.") : `S-${7 - i}`}</span></div>`).join("")}</div></section>
    <section class="ap-card"><h2>${t("Ce que disent vos chiffres")}</h2>${tips.length ? `<ul>${tips.map((s) => `<li>${s}</li>`).join("")}</ul>` : `<p class="hint-l">${t("Pas encore assez d’activité pour en tirer des enseignements.")}</p>`}
      <div class="em-table"><table><thead><tr><th>${t("Offre")}</th><th>${t("Candidatures")}</th><th>${t("Mentionnent au moins la moitié des critères")}</th><th>${t("En attente > 7 j")}</th><th>${t("Jours en ligne")}</th></tr></thead><tbody>
      ${per.map((p) => `<tr><td><a href="#offre-${p.j.id}">${x(p.j.title)}</a></td><td>${p.n}</td><td>${p.q}</td><td>${p.stuck}</td><td>${p.open}</td></tr>`).join("")}</tbody></table></div></section>`;
}
async function loadTalents(jobId) {
  if (TALENTS[jobId] || DEMO) return;
  try { TALENTS[jobId] = await rpc("discover_talent", { p_job: jobId }); } catch { TALENTS[jobId] = []; }
}
function talentCards(j, n) {
  const list = (TALENTS[j.id] || []).slice(0, n || 12), total = reqs(j).length;
  if (!list.length) return `<p class="hint-l">${t("Aucun profil visible ne correspond encore à")} « ${x(j.title)} ».</p>`;
  return `<div class="ew-talents">${list.map((p) => `<article class="ew-talent"><b>${x(p.display_name || t("Profil confidentiel"))}</b><span>${x(p.title)}${p.city ? " · " + x(p.city) : ""}</span>
    <em>${t("Mentionne")} ${p.matched.length} ${t("des")} ${total} ${t("compétences recherchées")} : ${p.matched.map(x).join(", ")}.</em>
    <small>${(p.experiences || []).slice(0, 2).map((e) => x(e.role)).filter(Boolean).join(" · ")}</small></article>`).join("")}</div>
    <p class="hint-l">${t("Uniquement des Profils ALO publiés, ouverts aux opportunités et visibles par les recruteurs. Aucune coordonnée n’est partagée.")}</p>`;
}
function talentsPage() {
  const live = liveJobs();
  if (!live.length) return `<section class="ap-card"><p class="hint-l">${t("Publiez une offre pour découvrir des talents correspondants.")}</p></section>`;
  const cur = live.find((j) => j.id === +FILTER.tjob) || live[0];
  return `<section class="ap-card"><h2>${t("Talents à découvrir")}</h2>
    <div class="ew-tools"><select data-filter="tjob">${live.map((j) => `<option value="${j.id}" ${j.id === cur.id ? "selected" : ""}>${x(j.title)}</option>`).join("")}</select></div>
    ${talentCards(cur)}</section>`;
}
function teamPage() {
  return `<section class="ap-card"><h2>${t("Équipe")}</h2>
    ${MEMBERS.map((m) => `<div class="sp-row"><div><b>${x(m.email)}</b><span>${t(ROLE_LABEL[m.role])}${m.status === "invite" ? ` · ${t("Invitation en attente")}` : ""}</span></div>${m.role !== "proprietaire" ? `<button class="linkbtn" type="button" data-rm="${x(m.email)}">${t("Retirer")}</button>` : ""}</div>`).join("")}
    <form class="ad-new" id="invite"><input name="email" type="email" required placeholder="${t("E-mail du collègue")}" /><select name="role"><option value="recruteur">${t("Recruteur")}</option><option value="evaluateur">${t("Évaluateur")}</option><option value="lecteur">${t("Lecture seule")}</option></select><button class="btn" type="submit">${t("Inviter")}</button></form>
    <p class="ap-err" id="inv-err" hidden></p>
    <ul class="ew-roles"><li><b>${t("Recruteur")}</b> — ${t("gère les offres, les candidats, les entretiens et les embauches.")}</li><li><b>${t("Évaluateur")}</b> — ${t("consulte les candidatures, ajoute des notes et évalue avec la grille.")}</li><li><b>${t("Lecture seule")}</b> — ${t("consulte sans rien modifier.")}</li></ul>
    <p class="hint-l">${t("Votre collègue se connecte à alo.ht avec cette adresse e-mail : l’invitation est acceptée automatiquement. Seul le propriétaire voit la facturation.")}</p></section>`;
}

// ---------- Mon forfait (commercial layer) ----------
// ---------- Achats et factures (orders: path, approval, payment, activation — tracked separately) ----------
let OACT = null, CO_SETTINGS = {};
function achatsPage() {
  const owed = ORDERS.filter((o) => o.activation_status === "active" && o.payment_status !== "payee" && o.price_usd != null).reduce((n, o) => n + (+o.price_usd - +(o.amount_paid || 0)), 0);
  return `<section class="ap-card"><div class="ew-sec-head"><h2>${t("Achats et factures")}</h2><a class="btn" href="tarifs.html#config">${t("Nouvelle commande")}</a></div>
      ${owed > 0 ? `<p class="ew-warn"><span>${t("Solde à régler")} : <b>${usd(owed)}</b></span></p>` : ""}
      ${ORDERS.length ? ORDERS.map(orderCard).join("") : `<p class="hint-l">${t("Aucune commande pour l’instant.")}</p>`}
      <p class="hint-l">${t("Envoyer un document ne valide pas la commande, n’active pas les services et ne vaut pas paiement : l’équipe ALO l’examine d’abord.")}</p></section>`;
}
function orderCard(o) {
  const pk = catItem(o.package) || {}, act = OACT && OACT.id === o.id ? OACT.kind : null, bill = o.can_bill !== false && can("facturer");
  const closed = ["annulee", "refusee"].includes(o.approval_status);
  const canCancel = bill && !closed && o.payment_status === "non_payee" && o.activation_status !== "active" && !o.used_postings;
  const canAccept = bill && o.path === "differe" && o.approval_status === "approuvee" && o.deferred_terms && !o.terms_accepted_at;
  const dt = o.deferred_terms || {};
  const acts = [
    (o.path === "devis" || o.quote_version) && o.price_usd != null ? `<a class="btn btn-plain" href="devis.html?id=${o.id}" target="_blank" rel="noopener">${t("Télécharger le devis")}</a>` : "",
    bill && !closed ? `<button class="btn btn-plain" type="button" data-oact="doc" data-oid="${o.id}" aria-expanded="${act === "doc"}">${t("Ajouter un document")}</button>` : "",
    bill && canPayOrder(o) ? `<button class="btn" type="button" data-oact="pay" data-oid="${o.id}" aria-expanded="${act === "pay"}">${t("Payer")} ${usd(+o.price_usd - +(o.amount_paid || 0))}</button>` : "",
    o.invoice_number && o.payment_status === "payee" ? `<a class="btn btn-plain" href="devis.html?id=${o.id}&type=facture" target="_blank" rel="noopener">${t("Voir la facture")}</a>` : "",
    `<a class="btn btn-plain" href="mailto:${x(CO_SETTINGS.contact_email || "contact@alo.ht")}?subject=${encodeURIComponent(t("Commande") + " " + (o.reference || ""))}">${t("Contacter ALO")}</a>`,
  ].filter(Boolean).join("");
  return `<article class="ew-order ${closed ? "closed" : ""}">
    <div class="ew-order-h"><div><b>${x(pk.name || o.package)}</b><span>${x(o.reference || "")} · ${fmt(o.created_at)} · ${t(ORDER_PATHS[o.path] || "Payer maintenant")}</span></div>
      <b class="ew-order-amt">${o.price_usd == null ? t("Sur devis") : usd(o.price_usd)}</b></div>
    ${orderStatuses(o)}
    <p class="ew-next">${x(orderNextStep(o))}</p>
    <p class="ew-order-facts">${o.postings} ${o.postings > 1 ? t("offres") : t("offre")} (${o.used_postings || 0} ${t("utilisée(s)")}) · ${o.positions} ${o.positions > 1 ? t("postes") : t("poste")} (${o.used_positions || 0} ${t("couvert(s)")})${o.po_number ? ` · ${t("Bon de commande")} ${x(o.po_number)}` : ""}${o.due_date ? ` · ${t("Échéance")} ${fmtDay(o.due_date)}` : ""}${o.documents ? ` · ${o.documents} ${t("document(s) envoyé(s)")}` : ""}</p>
    ${canAccept ? `<form class="ew-terms" data-oaccept="${o.id}"><h3>${t("Conditions de paiement différé proposées par ALO")}</h3>
        <p>${t("Montant")} : <b>${usd(dt.amount)}</b> · ${t("Échéance")} : <b>${fmtDay(dt.due_date)}</b>${dt.balance_limit ? ` · ${t("Solde maximum autorisé")} : <b>${usd(dt.balance_limit)}</b>` : ""}</p>
        ${dt.conditions ? `<p>${x(dt.conditions)}</p>` : ""}
        <p class="hint-l">${t("Cet accord concerne uniquement cette commande. Il n’autorise pas d’autres achats sans paiement.")}</p>
        <label class="pq-consent"><input type="checkbox" name="ok" required /><span>${t("J’accepte ces conditions au nom de mon organisation.")}</span></label>
        <p class="ap-err" hidden></p><button class="btn" type="submit">${t("Accepter et activer les services")}</button></form>` : ""}
    ${o.approval_status === "info_demandee" && bill ? `<form class="ew-terms" data-oreply="${o.id}"><label class="field"><span>${t("Votre réponse")}</span><textarea name="msg" rows="3" maxlength="4000" required></textarea></label>
        <p class="ap-err" hidden></p><button class="btn" type="submit">${t("Envoyer la réponse")}</button></form>` : ""}
    ${act === "pay" ? transferBox(o, CO_SETTINGS) : ""}
    ${act === "doc" ? `<form class="ew-terms" data-odoc="${o.id}"><div class="two">
        <label class="field"><span>${t("Type de document")}</span><select name="kind"><option value="bon_de_commande">${t("Bon de commande")}</option><option value="devis_approuve">${t("Devis approuvé")}</option><option value="dossier_fournisseur">${t("Dossier fournisseur")}</option><option value="justificatif">${t("Justificatif")}</option><option value="autre">${t("Autre")}</option></select></label>
        <label class="field"><span>${t("Fichier (PDF ou image, 10 Mo maximum)")}</span><input name="file" type="file" accept=".pdf,image/*" required /></label></div>
        <p class="ap-err" hidden></p><button class="btn" type="submit">${t("Envoyer le document")}</button></form>` : ""}
    <div class="row ew-order-acts">${acts}${canCancel ? `<button class="linkbtn" type="button" data-oact="cancel" data-oid="${o.id}">${t("Annuler la commande")}</button>` : ""}</div>
  </article>`;
}
async function reloadOrders() { if (DEMO) return; try { ORDERS = (await rpc("my_orders")) || ORDERS; } catch {} ENT = new Set(((await rpc("my_entitlements").catch(() => null)) || []).map((e) => e.feature)); if (!ENT.size) ENT = entitlementsFrom(ORDERS); }
function forfait() {
  const isActive = (o) => (o.activation_status ? o.activation_status === "active" : o.status === "payee");
  const active = ORDERS.filter((o) => !["annulee", "refusee"].includes(o.approval_status || (o.status === "annulee" ? "annulee" : ""))), usable = active.filter((o) => o.price_usd != null);
  const posts = usable.reduce((a, o) => a + o.postings, 0), postsUsed = usable.reduce((a, o) => a + o.used_postings, 0);
  const vac = usable.reduce((a, o) => a + o.positions, 0), vacUsed = usable.reduce((a, o) => a + o.used_positions, 0);
  const current = active.find(isActive) || active[0], pk = current ? catItem(current.package) : null;
  // Never offer to buy a tool that does not exist yet.
  const status = (f) => ENT.has(f) ? (FEATURES[f].live ? ["Actif", "s-ok"] : ["Inclus · bientôt", "s-seen"])
    : !FEATURES[f].live ? ["Bientôt", "s-sent"] : packageFor(f) === "institutional" ? ["Avec ALO Institutional", "s-sent"] : ["Non inclus", "s-sent"];
  const shown = Object.keys(FEATURES).filter((f) => !BASE_FEATURES.includes(f));
  return `<section class="ap-card em-forfait" id="forfait">
    <div class="em-forfait-head"><div><span class="spp-label">${t("Mon forfait")}</span><h2>${x(pk ? pk.name : t("Aucune formule"))}</h2>
      ${pk && pk.price_usd != null ? `<p class="spp-title">${t("À partir de")} ${usd(pk.price_usd)} · ${t("Votre formule actuelle")}${isActive(current) ? "" : ` · <span class="st s-int">${t("Services non activés")}</span>`}</p>` : ""}</div>
      <div class="row"><a class="btn" href="tarifs.html#config">${t("Ajouter des outils")}</a><a class="btn btn-plain" href="tarifs.html#config">${t("Personnaliser ma formule")}</a></div></div>
    <div class="em-table"><table><thead><tr><th>${t("Service")}</th><th>${t("Statut")}</th></tr></thead><tbody>
      <tr><td>${t("Offres d’emploi actives")}</td><td><b>${postsUsed} / ${posts}</b></td></tr>
      <tr><td>${t("Postes couverts disponibles")}</td><td><b>${Math.max(0, vac - vacUsed)} / ${vac}</b></td></tr>
      ${BASE_FEATURES.map((f) => `<tr><td>${t(FEATURES[f].name)}</td><td><span class="st s-ok">${t("Inclus dans toutes les formules")}</span></td></tr>`).join("")}
      ${shown.map((f) => { const [s, c] = status(f); return `<tr><td>${t(FEATURES[f].name)}</td><td><span class="st ${c}">${t(s)}</span>${!can("facturer") ? "" : s === "Non inclus" ? ` <a class="link" href="tarifs.html${packageFor(f) === "professional" ? "?formule=professional" : ""}#config">${t("Ajouter")}</a>` : s === "Avec ALO Institutional" ? ` <a class="link" href="tarifs.html#devis">${t("Demander un devis")}</a>` : ""}</td></tr>`; }).join("")}
    </tbody></table></div>
    ${can("facturer") ? `<p class="hint-l">${t("Commandes, devis, paiements et factures")} : <a class="link" href="#achats">${t("Achats et factures")}</a></p>` : ""}</section>
    <section class="ap-card"><h2>${t("Informations de l’employeur")}</h2><p>${x(EMP.company)} · ${t(employerTypeLabel(EMP.plan))}${EMP.size ? " · " + t(EMP.size) : ""}${EMP.city ? " · " + x(EMP.city) : ""}</p>
      ${ROLE === "proprietaire" ? `<button class="btn btn-plain" type="button" data-act="edit">${t("Modifier les informations")}</button>` : ""}</section>`;
}
function companyForm() {
  const e = EMP || {};
  return `<h1>${EMP ? t("Informations de l’employeur") : t("Créez votre espace employeur")}</h1>
    ${EMP ? "" : `<p class="mp-lead">${t("Publiez vos offres, suivez les candidatures et confirmez vos embauches au même endroit.")}</p>`}
    <form class="ap-card em-form" id="em-company">
      <div class="two"><label class="field"><span>${t("Nom de l’entreprise ou de l’organisation")}</span><input name="company" required minlength="2" maxlength="120" value="${x(e.company)}" /></label>
        <label class="field"><span>${t("Taille de l’organisation")}</span><select name="size" required><option value="">${t("Nombre d’employés")}</option>${ORG_SIZES.map((z) => `<option value="${z}" ${e.size === z ? "selected" : ""}>${t(z)}</option>`).join("")}</select></label></div>
      <div class="field"><span>${t("Type d’employeur")}</span><div class="sk-row">${EMPLOYER_TYPES.map(([p, label]) => `<label class="sk ${(e.plan || "pme") === p ? "on" : ""}"><input type="radio" name="plan" value="${p}" ${(e.plan || "pme") === p ? "checked" : ""} />${t(label)}</label>`).join("")}</div></div>
      <div class="two"><label class="field"><span>${t("Secteur")}</span><input name="sector" maxlength="80" value="${x(e.sector)}" /></label><label class="field"><span>${t("Ville")}</span><input name="city" maxlength="80" value="${x(e.city)}" /></label></div>
      <div class="two"><label class="field"><span>${t("Personne à contacter")}</span><input name="contact_name" maxlength="120" value="${x(e.contact_name)}" /></label><label class="field"><span>${t("Téléphone / WhatsApp")}</span><input name="phone" type="tel" maxlength="30" value="${x(e.phone)}" /></label></div>
      <p class="ap-err" id="em-err" hidden></p>
      <div class="row"><button class="btn btn-lg" type="submit">${EMP ? t("Enregistrer") : t("Créer mon espace employeur")}</button>${EMP ? `<button class="btn btn-plain" type="button" data-act="cancel-edit">${t("Annuler")}</button>` : ""}</div>
    </form>`;
}

// ---------- CSV exports ----------
function csv(name, rows) {
  const body = rows.map((r) => r.map((v) => `"${String(v == null ? "" : v).replace(/"/g, '""')}"`).join(";")).join("\r\n");
  const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob(["﻿" + body], { type: "text/csv;charset=utf-8" })); a.download = name; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 2000);
}
function exportCsv(kind, jobId) {
  const j = JOBS_E.find((z) => z.id === jobId), as = appsOf(jobId), slug = norm(j.title).replace(/[^a-z0-9]+/g, "-");
  if (kind === "apps") csv(`candidatures-${slug}.csv`, [[t("Candidat"), t("Étape"), t("Reçue le"), t("Critères mentionnés"), t("Dernier poste"), t("Embauche confirmée")],
    ...as.map((a) => { const m = match(a, j); return [a.name, t(stageOf(a).label), fmt(a.created_at), m.total ? `${m.ok.length}/${m.total}` : "", candTitle(a), a.hired ? t("Oui") : ""]; })]);
  if (kind === "eval") { const res = RESULTS[jobId] || []; csv(`evaluation-${slug}.csv`, [[t("Candidat"), t("Technique"), t("Financier"), t("Évaluateurs")],
    ...[...new Set(res.map((r) => r.application_id))].map((id) => { const a = APPS.find((z) => z.id === id) || { name: id }, tq = res.find((r) => r.application_id === id && r.stage === "technique"), fq = res.find((r) => r.application_id === id && r.stage === "financier");
      return [a.name, tq ? tq.weighted : "", fq ? fq.weighted : "", Math.max(tq ? tq.evaluators : 0, fq ? fq.evaluators : 0)]; })]); }
  if (kind === "timeline") csv(`calendrier-${slug}.csv`, [[t("Événement"), t("Date")], [t("Envoyée le"), fmt(j.created_at)], [t("Publiée le"), fmt(j.published_at)], [t("Expire le"), fmt(endDate(j))],
    ...as.slice().reverse().map((a) => [`${t("Candidature")} — ${a.name}`, fmt(a.created_at)]), ...INTERVIEWS.filter((i) => i.job_id === jobId).map((i) => [`${t("Entretien")} — ${(APPS.find((z) => z.id === i.application_id) || {}).name || ""}`, fmtT(i.scheduled_at)]),
    ...as.filter((a) => a.hired).map((a) => [`${t("Embauche confirmée")} — ${a.name}`, fmt(a.hired_at)])]);
}

// ---------- Actions ----------
function errIn(el, e) { if (!el) return; el.textContent = (e && e.message) || t("Erreur. Vérifiez votre connexion et réessayez."); el.hidden = false; }
async function setStage(appId, stage, quiet) {
  const a = APPS.find((z) => z.id === appId); if (!a || a.stage === stage) return;
  const kind = (pipeline().find((s) => s.id === stage) || {}).kind;
  if (kind === "hired" && !a.hired) { FLASH = t("Pour indiquer une embauche, ouvrez le candidat et utilisez « Confirmer l’embauche »."); OPEN = appId; PANEL_TAB = "profil"; return draw(); }
  const prev = a.stage, prevAt = a.stage_at; a.stage = stage; a.stage_at = new Date().toISOString(); draw();
  if (!DEMO) { try { await rpc("set_application_stage", { p_app: appId, p_stage: stage }); } catch (e) { a.stage = prev; a.stage_at = prevAt; FLASH = `${t("L’étape n’a pas pu être modifiée.")} ${e.message || ""}`; FLASH_ERR = true; return draw(); } }
  if (!quiet) toast(`${a.name} · ${t(stageOf(a).label)}`);
}
async function openApp(id, tab) {
  OPEN = id; RETURN_FOCUS = id; PANEL_TAB = tab || "profil"; const a = APPS.find((z) => z.id === id);
  draw(); // open at once; the rest loads behind
  if (a && kindOf(a) === "new" && can("gerer")) { const rev = pipeline().find((s) => s.kind === "review"); if (rev) await setStage(id, rev.id, true); }
  let again = false;
  if (!DEMO && !NOTES[id]) { try { NOTES[id] = await rpc("application_notes_for", { p_app: id }); } catch { NOTES[id] = null; FLASH = t("Les notes n’ont pas pu être chargées."); FLASH_ERR = true; } again = true; }
  if (a && has("evaluation_matrix") && !CRITERIA[a.job_id]) { await loadEval(a.job_id); again = true; }
  if (again && OPEN === id) draw();
}
document.addEventListener("click", async (e) => {
  const el = e.target.closest("button, a, tr[data-go]"); if (!el) { if (e.target.classList.contains("ew-drawer")) { OPEN = null; draw(); } return; }
  const d = el.dataset;
  if (d.go && el.tagName === "TR" && !e.target.closest("a")) return go(d.go);
  if (d.act === "close") { OPEN = null; return draw(); }
  if (d.act === "reload") return location.reload();
  if (d.act === "retry") { el.disabled = true; el.textContent = t("Chargement…"); try { await refresh(); } catch {} if (!LOAD_ERR.length) toast(t("Informations à jour.")); return route(); }
  if (d.act === "prio-all") { PRIO_ALL = !PRIO_ALL; return draw(); }
  if (d.oact === "pay" || d.oact === "doc") { OACT = OACT && OACT.id === d.oid && OACT.kind === d.oact ? null : { id: d.oid, kind: d.oact }; return draw(); }
  if (d.oact === "cancel") {
    if (!confirm(t("Annuler cette commande ? Elle ne pourra pas être réutilisée."))) return;
    try { if (!DEMO) { await rpc("cancel_my_order", { p_order: d.oid }); await reloadOrders(); } else { const o = ORDERS.find((z) => z.id === d.oid); o.approval_status = "annulee"; o.activation_status = "non_activee"; }
      FLASH = t("Commande annulée."); } catch (er) { FLASH = er.message; FLASH_ERR = true; }
    return draw();
  }
  if (d.act === "clear-filters") { FILTER = NEW_FILTER(); return draw(); }
  if (d.act === "edit") { EDIT = true; return draw(); }
  if (d.act === "cancel-edit") { EDIT = false; return draw(); }
  if (d.act === "stages") { EDIT_STAGES = !EDIT_STAGES; STAGES_DRAFT = null; return draw(); }
  if (d.act === "stage-add") { STAGES_DRAFT.push({ id: "etape_" + Date.now().toString(36).slice(-5), label: t("Nouvelle étape"), kind: "review" }); return draw(); }
  if (d.sdel != null && d.sdel !== "") { STAGES_DRAFT.splice(+d.sdel, 1); return draw(); }
  if (d.sup != null && d.sup !== "" && +d.sup > 0) { const i = +d.sup; [STAGES_DRAFT[i - 1], STAGES_DRAFT[i]] = [STAGES_DRAFT[i], STAGES_DRAFT[i - 1]]; return draw(); }
  if (d.act === "stage-save") {
    const st = STAGES_DRAFT.map((s) => ({ id: s.id, label: s.label.trim(), kind: s.kind }));
    try { if (!["new", "hired", "rejected"].every((k) => st.some((s) => s.kind === k))) throw new Error(t("Il faut au moins une étape « Nouvelle », « Embauché » et « Non retenu »."));
      if (!DEMO) await rpc("save_pipeline", { p_stages: st });
      const ids = new Set(st.map((s) => s.id)); APPS.forEach((a) => { if (!ids.has(a.stage)) { const k = (pipeline().find((s) => s.id === a.stage) || {}).kind || "new"; a.stage = (st.find((s) => s.kind === k) || st[0]).id; } });
      EMP.pipeline = st; EDIT_STAGES = false; STAGES_DRAFT = null; FLASH = t("Étapes enregistrées."); draw();
    } catch (er) { errIn($("stage-err"), er); }
    return;
  }
  if (d.view) { VIEW = d.view; return draw(); }
  if (d.compare) { if (!has("comparison")) { FLASH = ""; return go(`offre-${d.compare}-comparer`); } return go(`offre-${d.compare}-comparer`); }
  if (d.open) { e.preventDefault(); return openApp(+d.open, d.tab); }
  if (d.ptab) { PANEL_TAB = d.ptab; return draw(); }
  if (d.add) { const box2 = $("add-" + d.add), j = JOBS_E.find((z) => z.id === +d.add); box2.hidden = !box2.hidden; box2.innerHTML = box2.hidden ? "" : addBox(j); return; }
  if (d.addok) {
    const id = +d.addok, n = +document.querySelector(`[data-n="${id}"]`).value, j = JOBS_E.find((z) => z.id === id);
    try { el.disabled = true; const price = DEMO ? n * extraUnit(j) : await rpc("request_positions", { p_job: id, p_added: n }); j.pending_positions = (j.pending_positions || 0) + n;
      FLASH = `${t("Demande envoyée")} : ${n} ${n > 1 ? t("postes") : t("poste")} · ${usd(price)}. ${t("L’équipe ALO vous contacte pour le paiement.")}`; draw();
    } catch (er) { el.disabled = false; errIn($("adderr-" + id), er); }
    return;
  }
  if (d.close) {
    if (!confirm(t("Fermer cette offre ? Elle ne sera plus visible et n’acceptera plus de candidatures."))) return;
    try { if (!DEMO) await rpc("close_job", { p_job: +d.close }); JOBS_E.find((z) => z.id === +d.close).status = "closed"; draw(); } catch (er) { alert(er.message); }
    return;
  }
  if (d.file) {
    if (DEMO) return alert(t("Exemple : aucun fichier réel."));
    const { data, error } = await db().storage.from("application-files").createSignedUrl(d.file, 120);
    if (error) return alert(t("Document indisponible.")); window.open(data.signedUrl, "_blank", "noopener"); return;
  }
  if (d.ist) {
    const i = INTERVIEWS.find((z) => z.id === d.iid);
    try { if (!DEMO) await rpc("set_interview_status", { p_id: d.iid, p_status: d.ist }); i.status = d.ist; draw(); } catch (er) { alert(er.message); }
    return;
  }
  if (d.act === "crit-add") { const id = +d.job; CRIT_DRAFT[id] = (CRIT_DRAFT[id] || (CRITERIA[id] || []).map((c) => ({ ...c }))); CRIT_DRAFT[id].push({ name: "", weight: 10, stage: "technique" }); return draw(); }
  if (d.cdel != null && d.cdel !== "") { const id = hash().id; CRIT_DRAFT[id] = (CRIT_DRAFT[id] || (CRITERIA[id] || []).map((c) => ({ ...c }))); CRIT_DRAFT[id].splice(+d.cdel, 1); return draw(); }
  if (d.act === "crit-save") {
    const id = +d.job, items = (CRIT_DRAFT[id] || CRITERIA[id] || []).filter((c) => c.name && c.name.trim() && +c.weight > 0).map((c) => ({ id: c.id || null, name: c.name.trim(), weight: +c.weight, stage: c.stage || "technique" }));
    try { if (!DEMO) { await rpc("set_criteria", { p_job: id, p_items: items }); await loadEval(id); } else CRITERIA[id] = items.map((c, i) => ({ ...c, id: c.id || "c" + Date.now() + i }));
      delete CRIT_DRAFT[id]; FLASH = t("Grille enregistrée."); draw(); } catch (er) { errIn($("crit-err"), er); }
    return;
  }
  if (d.coi != null && d.coi !== "") {
    const id = +d.job, conflict = d.coi === "1"; let details = null;
    if (conflict) { details = prompt(t("Précisez brièvement la nature du conflit d’intérêts :")) || ""; }
    try { if (!DEMO) { await rpc("declare_coi", { p_job: id, p_conflict: conflict, p_details: details }); await loadEval(id); } else (MYSCORES[id] = MYSCORES[id] || []).push({ coi: conflict }); draw(); } catch (er) { alert(er.message); }
    return;
  }
  if (d.csv) return exportCsv(d.csv, +d.job);
  if (d.rm) {
    if (!confirm(t("Retirer ce membre de l’équipe ?"))) return;
    try { if (!DEMO) { await rpc("remove_member", { p_email: d.rm }); MEMBERS = await rpc("team_members"); } else MEMBERS = MEMBERS.filter((m) => m.email !== d.rm); draw(); } catch (er) { alert(er.message); }
  }
});
document.addEventListener("input", (e) => {
  const el = e.target, d = el.dataset;
  if (d.filter === "q") { FILTER.q = el.value; const pos = el.selectionStart; draw(); const s = document.querySelector('[data-filter="q"]'); if (s) { s.focus(); s.setSelectionRange(pos, pos); } return; }
  if (d.n) { const j = JOBS_E.find((z) => z.id === +d.n); $("price-" + d.n).innerHTML = `${t("Frais supplémentaires")} : <b>${usd(extraUnit(j) * Math.max(1, +el.value || 1))}</b>`; return; }
  if (d.sl != null && d.sl !== "") { STAGES_DRAFT[+d.sl].label = el.value; return; }
  const id = hash().id;
  if (d.cn != null && d.cn !== "" || d.cw != null && d.cw !== "") { CRIT_DRAFT[id] = (CRIT_DRAFT[id] || (CRITERIA[id] || []).map((c) => ({ ...c }))); const i = +(d.cn ?? d.cw); CRIT_DRAFT[id][i][d.cn != null ? "name" : "weight"] = d.cn != null ? el.value : +el.value; }
});
document.addEventListener("change", async (e) => {
  const el = e.target, d = el.dataset;
  if (el.name === "plan" && el.form && el.form.id === "em-company") el.form.querySelectorAll(".sk").forEach((l) => l.classList.toggle("on", l.querySelector("input").checked));
  if (el.matches("[data-nav]")) return go(el.value);
  if (d.filter && d.filter !== "q") { FILTER[d.filter] = d.filter === "all" ? el.checked : d.filter === "min" ? +el.value : el.value; if (d.filter === "tjob") await loadTalents(+el.value); return draw(); }
  if (d.pick) { const id = +d.pick; if (el.checked) { if (PICK.size >= 4) { el.checked = false; return alert(t("Comparez 4 candidats au maximum.")); } PICK.add(id); } else PICK.delete(id); return draw(); }
  if (d.stageOf) return setStage(+d.stageOf, el.value);
  if (d.sk != null && d.sk !== "") { STAGES_DRAFT[+d.sk].kind = el.value; return; }
  if (d.cs != null && d.cs !== "") { const id = hash().id; CRIT_DRAFT[id] = (CRIT_DRAFT[id] || (CRITERIA[id] || []).map((c) => ({ ...c }))); CRIT_DRAFT[id][+d.cs].stage = el.value; }
});
// Drag and drop between pipeline columns
document.addEventListener("dragstart", (e) => { const c = e.target.closest && e.target.closest(".ew-card"); if (c) { e.dataTransfer.setData("text/plain", c.dataset.app); c.classList.add("drag"); } });
document.addEventListener("dragover", (e) => { const col = e.target.closest && e.target.closest(".ew-col"); if (col) { e.preventDefault(); col.classList.add("over"); } });
document.addEventListener("dragleave", (e) => { const col = e.target.closest && e.target.closest(".ew-col"); if (col) col.classList.remove("over"); });
document.addEventListener("drop", (e) => { const col = e.target.closest && e.target.closest(".ew-col"); if (!col) return; e.preventDefault(); const id = +e.dataTransfer.getData("text/plain"); if (id) setStage(id, col.dataset.stage); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && OPEN) { OPEN = null; draw(); } });
document.addEventListener("submit", async (e) => {
  e.preventDefault();
  const f = e.target, btn = f.querySelector("button[type=submit]"), err = f.querySelector(".ap-err"), d = f.dataset, key = formKey(f) || "form";
  if (BUSY.has(key)) return; // already being sent: never send twice
  BUSY.add(key); busy(f, true); if (err) err.hidden = true;
  const done = (msg) => { BUSY.delete(key); f.reset(); delete DRAFTS[key]; dropDraft(key); if (msg) FLASH = msg; return draw(); };
  try {
    if (f.id === "em-company") {
      const row = Object.fromEntries(["company", "size", "sector", "city", "contact_name", "phone"].map((k) => [k, f.elements[k].value.trim()]));
      row.plan = f.elements.plan.value; row.updated_at = new Date().toISOString();
      if (DEMO) { EMP = { ...EMP, ...row }; EDIT = false; return done(t("Informations enregistrées.")); }
      const { data, error } = await db().from("employers").upsert(row).select("*").single(); if (error) throw error;
      EMP = data; EDIT = false; BUSY.delete(key); dropDraft(key); await refresh(); FLASH = t("Informations enregistrées."); return route();
    }
    if (d.hire) {
      const id = +d.hire, a = APPS.find((z) => z.id === id), j = JOBS_E.find((z) => z.id === a.job_id);
      if (a.hired) return done(); // already confirmed
      const mark = () => { a.hired = true; a.hired_at = new Date().toISOString(); a.stage = (pipeline().find((s) => s.kind === "hired") || {}).id || "embauche"; };
      if (!DEMO) {
        try { await rpc("confirm_hire", { p_app: id, p_start: f.elements.start.value, p_salary: +f.elements.salary.value, p_currency: f.elements.currency.value }); }
        catch (er) { if (/déjà confirmée/i.test(er.message || "")) { mark(); return done(t("Cette embauche était déjà confirmée.")); } throw er; }
      }
      mark(); j.hires = (j.hires || 0) + 1; return done(t("Embauche confirmée."));
    }
    if (d.note) {
      const id = +d.note, body = f.elements.body.value.trim(); if (!body) { BUSY.delete(key); busy(f, false); return; }
      if (!DEMO) { await rpc("add_note", { p_app: id, p_body: body }); NOTES[id] = await rpc("application_notes_for", { p_app: id }); }
      else (NOTES[id] = NOTES[id] || []).push({ author_email: t("Vous"), body, created_at: new Date().toISOString() });
      return done(t("Note ajoutée."));
    }
    if (d.int) {
      const id = +d.int, a = APPS.find((z) => z.id === id), at = new Date(f.elements.at.value).toISOString();
      let iid = "i" + Date.now();
      if (!DEMO) iid = await rpc("schedule_interview", { p_app: id, p_at: at, p_mode: f.elements.mode.value, p_location: f.elements.location.value.trim() || null, p_notes: f.elements.notes.value.trim() || null });
      INTERVIEWS.push({ id: iid, application_id: id, job_id: a.job_id, scheduled_at: at, mode: f.elements.mode.value, location: f.elements.location.value.trim(), status: "prevu" });
      a.stage = (pipeline().find((s) => s.kind === "interview") || {}).id || a.stage; return done(t("Entretien planifié."));
    }
    if (d.score) {
      const id = +d.score, jobId = +d.job, items = (CRITERIA[jobId] || []).map((c) => ({ criterion_id: c.id, score: f.elements["s-" + c.id].value, comment: f.elements["c-" + c.id].value.trim() || null })).filter((s) => s.score !== "");
      if (!items.length) throw new Error(t("Notez au moins un critère."));
      if (!DEMO) { await rpc("score_candidate", { p_app: id, p_items: items.map((s) => ({ ...s, score: +s.score })) }); await loadEval(jobId); }
      else { MYSCORES[jobId] = (MYSCORES[jobId] || []).filter((s) => s.application_id !== id).concat(items.map((s) => ({ application_id: id, criterion_id: s.criterion_id, score: +s.score, comment: s.comment }))); }
      return done(t("Évaluation enregistrée."));
    }
    if (d.odoc) {
      const file = f.elements.file.files[0], kind = f.elements.kind.value;
      if (!file) throw new Error(t("Choisissez un fichier."));
      if (file.size > 10 * 1024 * 1024) throw new Error(t("Le fichier dépasse 10 Mo."));
      if (!DEMO) {
        const path = `${d.odoc}/${Date.now()}-${file.name.replace(/[^\w.-]+/g, "_").slice(-80)}`;
        const up = await db().storage.from("order-documents").upload(path, file, { upsert: false }); if (up.error) throw up.error;
        await rpc("add_order_document", { p_order: d.odoc, p_kind: kind, p_path: path, p_name: file.name }); await reloadOrders();
      } else { const o = ORDERS.find((z) => z.id === d.odoc); o.documents = (o.documents || 0) + 1; if (["soumise", "info_demandee"].includes(o.approval_status) && o.path !== "payer") o.approval_status = "en_examen"; }
      OACT = null; return done(t("Document envoyé. L’équipe ALO l’examine."));
    }
    if (d.oaccept) {
      if (!DEMO) { await rpc("accept_deferred_terms", { p_order: d.oaccept }); await reloadOrders(); }
      else { const o = ORDERS.find((z) => z.id === d.oaccept); o.terms_accepted_at = new Date().toISOString(); o.activation_status = "active"; ENT = entitlementsFrom(ORDERS); }
      return done(t("Conditions acceptées. Vos services sont actifs."));
    }
    if (d.oreply) {
      const msg = f.elements.msg.value.trim(); if (!msg) throw new Error(t("Écrivez votre réponse."));
      if (!DEMO) { await rpc("answer_order_request", { p_order: d.oreply, p_message: msg }); await reloadOrders(); }
      else { const o = ORDERS.find((z) => z.id === d.oreply); o.approval_status = "en_examen"; }
      return done(t("Réponse envoyée à l’équipe ALO."));
    }
    if (f.id === "invite") {
      const email = f.elements.email.value.trim(), role = f.elements.role.value;
      if (!DEMO) { await rpc("invite_member", { p_email: email, p_role: role }); MEMBERS = await rpc("team_members"); } else MEMBERS.push({ email, role, status: "invite" });
      return done(t("Invitation enregistrée. Votre collègue y accède en se connectant avec cette adresse."));
    }
    BUSY.delete(key); busy(f, false);
  } catch (er) { BUSY.delete(key); busy(f, false); errIn(err || $("inv-err"), er); }
});

// ---------- Sample data (?demo=1, add &formule=essential|professional|institutional and &role=evaluateur…) ----------
function demo() {
  const Q = new URLSearchParams(location.search), pkg = ["essential", "professional", "institutional"].includes(Q.get("formule")) ? Q.get("formule") : "professional";
  ROLE = ["proprietaire", "recruteur", "evaluateur", "lecteur"].includes(Q.get("role")) ? Q.get("role") : "proprietaire";
  const dd = (n) => new Date(Date.now() - n * DAY).toISOString(), fut = (h) => new Date(Date.now() + h * 36e5).toISOString();
  EMP = { id: "demo", company: pkg === "institutional" ? "Fondation Lakay" : "Konekte Telecom", contact_name: "Marie Delva", plan: pkg === "institutional" ? "organisation" : "pme", size: "50 à 249 employés", city: "Port-au-Prince", pipeline: DEFAULT_PIPELINE };
  const ob = { extra_days: 0, addons: [], amount_paid: 0, documents: 0, can_bill: true, invoice_number: null, due_date: null, po_number: null, info_request: null, deferred_terms: null, terms_accepted_at: null, quote_version: null };
  ORDERS = [
    { ...ob, id: "o1", reference: "ALO-2026-00012", package: pkg, postings: 4, positions: 8, days: 45, addons: pkg === "professional" ? ["evaluation_matrix"] : [], price_usd: pkg === "institutional" ? 1800 : pkg === "professional" ? 596 : 196,
      path: "payer", approval_status: "approuvee", payment_status: "payee", activation_status: "active", status: "payee", amount_paid: pkg === "institutional" ? 1800 : pkg === "professional" ? 596 : 196, invoice_number: "ALO-F-2026-0012", created_at: dd(20), paid_at: dd(19), used_postings: 4, used_positions: 7 },
    { ...ob, id: "o2", reference: "ALO-2026-00031", package: "professional", postings: 2, positions: 3, days: 45, price_usd: 447, path: "devis", approval_status: "soumise", payment_status: "non_payee", activation_status: "non_activee", status: "en_attente_paiement", quote_version: 1, po_number: "BC-2026-118", created_at: dd(3), used_postings: 0, used_positions: 0 },
    { ...ob, id: "o3", reference: "ALO-2026-00034", package: "essential", postings: 1, positions: 1, days: 30, price_usd: 49, path: "differe", approval_status: "approuvee", payment_status: "non_payee", activation_status: "non_activee", status: "en_attente_paiement",
      deferred_terms: { amount: 49, due_date: new Date(Date.now() + 30 * DAY).toISOString().slice(0, 10), conditions: "Paiement par virement à 30 jours, sur présentation de la facture.", balance_limit: null }, due_date: new Date(Date.now() + 30 * DAY).toISOString().slice(0, 10), created_at: dd(2), used_postings: 0, used_positions: 0 },
    { ...ob, id: "o4", reference: "ALO-2026-00036", package: "essential", postings: 1, positions: 2, days: 30, price_usd: 98, path: "payer", approval_status: "approuvee", payment_status: "non_payee", activation_status: "non_activee", status: "en_attente_paiement", created_at: dd(1), used_postings: 0, used_positions: 0 },
  ];
  ENT = entitlementsFrom(ORDERS);
  JOBS_E = [
    { id: 31, title: "Responsable financier", city: "Port-au-Prince", type: "Temps plein", status: "approved", positions: 3, hires: 1, package: pkg, days: 45, paid: true, created_at: dd(41), published_at: dd(40),
      skills: ["Reporting financier", "Excel", "QuickBooks", "Fiscalité", "Gestion budgétaire", "SAP"], responsibilities: ["Préparer les états financiers mensuels", "Superviser la gestion budgétaire"], questions: ["Quels logiciels comptables utilisez-vous ?"], applications: 0 },
    { id: 32, title: "Comptable", city: "Delmas", type: "Temps plein", status: "approved", positions: 2, hires: 0, package: pkg, days: 45, paid: true, created_at: dd(9), published_at: dd(8),
      skills: ["Excel", "QuickBooks", "Rapprochement bancaire"], responsibilities: ["Saisir les pièces comptables"], questions: [] },
    { id: 33, title: "Développeur web", city: "Télétravail", type: "Temps plein", status: "approved", positions: 1, hires: 0, package: pkg, days: 45, paid: true, created_at: dd(15), published_at: dd(14),
      skills: ["JavaScript", "React", "SQL", "API REST"], responsibilities: ["Développer de nouvelles fonctionnalités"], questions: [] },
    { id: 34, title: "Assistant administratif", city: "Cap-Haïtien", type: "Temps partiel", status: "pending", positions: 1, hires: 0, package: pkg, days: 45, paid: false, created_at: dd(1), published_at: null, skills: ["Word", "Excel", "Accueil"], questions: [] },
  ];
  const P = (id, job, name, stage, ago, skills, exp, extra) => ({ id, job_id: job, name, phone: "+509 3" + String(id).padStart(3, "0") + " 0000", email: name.split(" ")[0].toLowerCase() + "@exemple.com", status: "Consultée", stage, stage_at: dd(Math.max(0, ago - 1)), created_at: dd(ago), hired: false,
    data: { contact: { city: ["Delmas", "Port-au-Prince", "Pétion-Ville", "Cap-Haïtien"][id % 4] }, skills, experiences: exp, education: [{ degree: "Licence en sciences comptables", school: "UEH", year: "2018" }], languages: id % 3 ? ["Français", "Créole"] : [] }, answers: { "Quels logiciels comptables utilisez-vous ?": "QuickBooks et Excel au quotidien." }, ...extra });
  APPS = [
    P(101, 31, "Marie Pierre", "preselection", 12, ["Excel", "QuickBooks", "Fiscalité", "Reporting financier", "Gestion budgétaire"], [{ role: "Comptable senior", company: "Banque Lakay", start: "2019", end: "Présent" }]),
    P(102, 31, "Jean Baptiste", "entretien", 15, ["Excel", "Reporting financier", "SAP"], [{ role: "Analyste financier", company: "Groupe Solèy", start: "2017", end: "2024" }]),
    P(103, 31, "Nadège Louis", "embauche", 30, ["Excel", "QuickBooks", "Gestion budgétaire"], [{ role: "Responsable comptable", company: "Clinique Espwa", start: "2016", end: "2025" }], { hired: true, hired_at: dd(5), status: "Retenue" }),
    P(104, 31, "Ricardo Joseph", "nouvelles", 1, ["Excel"], [{ role: "Caissier", company: "Supermarché Lakay", start: "2021", end: "Présent" }]),
    P(105, 31, "Sophia Charles", "nouvelles", 2, ["QuickBooks", "Fiscalité"], [{ role: "Aide-comptable", company: "Cabinet Fanmi", start: "2022", end: "Présent" }]),
    P(106, 31, "Wilson Désir", "examen", 6, ["Excel", "Reporting financier"], [{ role: "Contrôleur de gestion", company: "Digicom", start: "2018", end: "2025" }]),
    P(107, 31, "Fabienne Michel", "non_retenu", 20, ["Word"], [{ role: "Secrétaire", company: "Collège Limyè", start: "2015", end: "2023" }]),
    P(108, 31, "Kervens Paul", "preselection", 9, ["Excel", "QuickBooks", "Reporting financier", "Fiscalité"], [{ role: "Comptable", company: "Konekte", start: "2020", end: "Présent" }]),
    P(201, 32, "Daphnée Etienne", "nouvelles", 1, ["Excel", "QuickBooks", "Rapprochement bancaire"], [{ role: "Comptable", company: "Cabinet Fanmi", start: "2021", end: "Présent" }]),
    P(202, 32, "Samuel Noël", "nouvelles", 2, ["Excel"], [{ role: "Stagiaire comptable", company: "BNC", start: "2024", end: "2025" }]),
    P(203, 32, "Lovely Augustin", "examen", 4, ["QuickBooks", "Excel"], [{ role: "Aide-comptable", company: "Transport Nò", start: "2020", end: "Présent" }]),
    P(301, 33, "Peterson Valcin", "entretien", 7, ["JavaScript", "React", "SQL"], [{ role: "Développeur front-end", company: "Kod Ayiti", start: "2021", end: "Présent" }]),
    P(302, 33, "Esther Jean", "nouvelles", 1, ["JavaScript", "API REST"], [{ role: "Développeuse", company: "Freelance", start: "2022", end: "Présent" }]),
  ];
  INTERVIEWS = [
    { id: "i1", application_id: 102, job_id: 31, scheduled_at: fut(20), mode: "Sur place", location: "Bureau de Pétion-Ville", status: "prevu" },
    { id: "i2", application_id: 301, job_id: 33, scheduled_at: fut(30), mode: "Visioconférence", location: "Lien envoyé par e-mail", status: "prevu" },
    { id: "i3", application_id: 103, job_id: 31, scheduled_at: dd(12), mode: "Sur place", location: "Bureau", status: "fait" },
  ];
  CRITERIA[31] = [{ id: "c1", name: "Expérience pertinente", weight: 35, stage: "technique" }, { id: "c2", name: "Qualifications techniques", weight: 30, stage: "technique" },
    { id: "c3", name: "Méthodologie", weight: 20, stage: "technique" }, { id: "c4", name: "Exigences linguistiques", weight: 15, stage: "technique" }];
  MYSCORES[31] = [{ coi: false }, { application_id: 101, criterion_id: "c1", score: 4.5 }, { application_id: 101, criterion_id: "c2", score: 4 }];
  RESULTS[31] = [{ application_id: 101, stage: "technique", weighted: 4.2, evaluators: 3 }, { application_id: 108, stage: "technique", weighted: 3.6, evaluators: 2 }, { application_id: 102, stage: "technique", weighted: 3.9, evaluators: 3 }];
  NOTES[101] = [{ author_email: "rh@konekte.ht", body: "Très bon dossier, à rencontrer rapidement.", created_at: dd(3) }];
  MEMBERS = [{ email: "marie@konekte.ht", role: "proprietaire", status: "actif" }, { email: "rh@konekte.ht", role: "recruteur", status: "actif" }, { email: "directeur@konekte.ht", role: "evaluateur", status: "invite" }];
  TALENTS[31] = [{ display_name: "Ketly Saint-Fleur", title: "Comptable senior", city: "Port-au-Prince", matched: ["Reporting financier", "Excel", "QuickBooks", "Fiscalité", "Gestion budgétaire"], experiences: [{ role: "Comptable senior" }, { role: "Auditrice junior" }] },
    { display_name: null, title: "Contrôleur financier", city: "Delmas", matched: ["Reporting financier", "Excel", "SAP"], experiences: [{ role: "Contrôleur financier" }] }];
}
window.onLang = () => EMP && draw();
PHONE.addEventListener("change", () => EMP && !VIEW && draw());
load();
