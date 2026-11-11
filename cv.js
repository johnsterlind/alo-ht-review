// alo.ht — CV builder (cv.html). Needs app.js first.
// Left: AI assistant + editing tools. Right: live A4 preview.
// The AI only rewords what is already there; see supabase/functions/cv-assistant.

// ---- Data -------------------------------------------------------------------
const EMPTY_CV = () => ({
  name: "", title: "", email: "", phone: "", city: "", linkedin: "", summary: "",
  experiences: [], education: [], skills: [], languages: [], certifications: [], projects: [],
});
const SAMPLE_CV = () => ({
  name: "Marie-Jeanne Pierre", title: "Assistante comptable", email: "mj.pierre@exemple.com", phone: "+509 3700 0000",
  city: "Delmas", linkedin: "", summary: "Je fais la comptabilité pour un cabinet depuis 3 ans. Je connais Excel et Sage.",
  experiences: [
    { role: "Assistante comptable", company: "Cabinet Fanmi & Associés", city: "Delmas", start: "2022", end: "Aujourd'hui",
      bullets: ["Je fais la saisie des factures", "rapprochements bancaires chaque mois", "Je prépare des rapports pour les clients"] },
    { role: "Caissière", company: "Supermarché Lakay", city: "Pétion-Ville", start: "2020", end: "2022",
      bullets: ["encaisser les clients", "tenir la caisse"] },
  ],
  education: [{ degree: "Licence en comptabilité", school: "Université d'État d'Haïti", year: "2022", description: "" }],
  skills: ["Comptabilité", "Excel", "Sage", "Service client"],
  languages: ["Créole (langue maternelle)", "Français (courant)", "Anglais (intermédiaire)"],
  certifications: [{ name: "Excel – niveau avancé", issuer: "Centre de formation Limyè", year: "2024" }],
  projects: [],
});

let CV = EMPTY_CV();
let TEMPLATE = "classique";
let ACCENT = "#121A3A";
let VERSION = { id: null, name: "Mon CV" };
let VERSIONS = [];
let CHAT = []; // {role, content}
let USER_ = null;
let IMPORTED_TEXT = "";
// mode=profil: the editor fills the Profil ALO (welcome after sign-up). INTERVIEW: the assistant asks questions.
const PROFILE_MODE = new URLSearchParams(location.search).get("mode") === "profil";
let INTERVIEW = false;
let PROPOSED = null; // interview: full updated CV proposed by the assistant

const ACCENTS = ["#121A3A", "#086B4D", "#2B4BC9", "#8A1C3B", "#3D3D3D"];
const TEMPLATES = [
  ["classique", "Classique", "Une colonne, sobre et lisible."],
  ["moderne", "Moderne", "Colonne latérale colorée."],
  ["epure", "Épuré", "Beaucoup d'espace, très minimal."],
];

function saveDraft() {
  try { localStorage.setItem("alo-cv-draft", JSON.stringify({ CV, TEMPLATE, ACCENT, VERSION })); } catch {}
}
function loadDraft() {
  try {
    const d = JSON.parse(localStorage.getItem("alo-cv-draft") || "null");
    if (d && d.CV) { CV = { ...EMPTY_CV(), ...d.CV }; TEMPLATE = d.TEMPLATE || TEMPLATE; ACCENT = d.ACCENT || ACCENT; VERSION = d.VERSION || VERSION; return true; }
  } catch {}
  return false;
}
function changed() { saveDraft(); renderPreview(); }

// ---- Preview (templates) ----------------------------------------------------------
const e = (s) => esc(s || "");
function section(title, body) { return body ? `<section class="cv-sec"><h3>${e(t(title))}</h3>${body}</section>` : ""; }
function expHtml() {
  return CV.experiences.map((x) => `
    <div class="cv-item">
      <div class="cv-row"><b>${e(x.role)}</b><span>${e([x.start, x.end].filter(Boolean).join(" – "))}</span></div>
      <div class="cv-sub">${e([x.company, x.city].filter(Boolean).join(" · "))}</div>
      ${x.bullets && x.bullets.filter(Boolean).length ? `<ul>${x.bullets.filter(Boolean).map((b) => `<li>${e(b)}</li>`).join("")}</ul>` : ""}
    </div>`).join("");
}
function eduHtml() {
  return CV.education.map((x) => `
    <div class="cv-item">
      <div class="cv-row"><b>${e(x.degree)}</b><span>${e(x.year)}</span></div>
      <div class="cv-sub">${e(x.school)}</div>${x.description ? `<p>${e(x.description)}</p>` : ""}
    </div>`).join("");
}
const certHtml = () => CV.certifications.map((x) => `<div class="cv-item"><div class="cv-row"><b>${e(x.name)}</b><span>${e(x.year)}</span></div><div class="cv-sub">${e(x.issuer)}</div></div>`).join("");
const projHtml = () => CV.projects.map((x) => `<div class="cv-item"><b>${e(x.name)}</b>${x.description ? `<p>${e(x.description)}</p>` : ""}</div>`).join("");
const chips = (arr) => arr.filter(Boolean).length ? `<div class="cv-chips">${arr.filter(Boolean).map((s) => `<span>${e(s)}</span>`).join("")}</div>` : "";
const lines = (arr) => arr.filter(Boolean).length ? `<ul class="cv-plain">${arr.filter(Boolean).map((s) => `<li>${e(s)}</li>`).join("")}</ul>` : "";
const contact = () => [CV.email, CV.phone, CV.city, CV.linkedin].filter(Boolean).map((x) => `<span>${e(x)}</span>`).join("");

function cvHtml() {
  const main = section("Profil", CV.summary ? `<p>${e(CV.summary)}</p>` : "")
    + section("Expériences professionnelles", expHtml())
    + section("Formation", eduHtml())
    + section("Projets et réalisations", projHtml());
  const side = section("Compétences", TEMPLATE === "moderne" ? lines(CV.skills) : chips(CV.skills))
    + section("Langues", lines(CV.languages))
    + section("Certifications", certHtml());
  const head = `<header class="cv-head"><h1>${e(CV.name) || `<span class="ph">${t("Votre nom")}</span>`}</h1><div class="cv-title">${e(CV.title)}</div><div class="cv-contact">${contact()}</div></header>`;
  if (TEMPLATE === "moderne") return `<div class="cvdoc t-moderne" style="--acc:${ACCENT}"><aside class="cv-side">${head}${side}</aside><div class="cv-main">${main}</div></div>`;
  return `<div class="cvdoc t-${TEMPLATE}" style="--acc:${ACCENT}">${head}${main}${side}</div>`;
}
function renderPreview() {
  document.getElementById("cv-preview").innerHTML = cvHtml();
  fitPreview();
}
function fitPreview() {
  const wrap = document.getElementById("cv-stage"), doc = document.querySelector("#cv-preview .cvdoc");
  if (!wrap || !doc) return;
  const scale = Math.min(1, (wrap.clientWidth - 24) / 794);
  document.getElementById("cv-preview").style.transform = `scale(${scale})`;
  document.getElementById("cv-preview").style.height = `${doc.offsetHeight * scale}px`;
}
addEventListener("resize", fitPreview);

// ---- Editing forms ------------------------------------------------------------------
const LIST_DEFS = {
  experiences: { title: "Expériences professionnelles", add: "Ajouter une expérience", blank: () => ({ role: "", company: "", city: "", start: "", end: "", bullets: [] }),
    fields: [["role", "Poste"], ["company", "Entreprise"], ["city", "Ville"], ["start", "Début"], ["end", "Fin"], ["bullets", "Réalisations (une par ligne)", "lines"]],
    label: (x) => x.role || x.company },
  education: { title: "Formation", add: "Ajouter une formation", blank: () => ({ degree: "", school: "", year: "", description: "" }),
    fields: [["degree", "Diplôme"], ["school", "Établissement"], ["year", "Année"], ["description", "Détails (facultatif)", "area"]], label: (x) => x.degree || x.school },
  certifications: { title: "Certifications", add: "Ajouter une certification", blank: () => ({ name: "", issuer: "", year: "" }),
    fields: [["name", "Certification"], ["issuer", "Organisme"], ["year", "Année"]], label: (x) => x.name },
  projects: { title: "Projets et réalisations", add: "Ajouter un projet", blank: () => ({ name: "", description: "" }),
    fields: [["name", "Projet"], ["description", "Description", "area"]], label: (x) => x.name },
};

function field(label, path, value, kind) {
  const v = Array.isArray(value) ? value.join("\n") : (value || "");
  return kind
    ? `<label class="field"><span>${t(label)}</span><textarea data-path="${path}" data-kind="${kind}" rows="${kind === "lines" ? 4 : 3}">${e(v)}</textarea></label>`
    : `<label class="field"><span>${t(label)}</span><input data-path="${path}" value="${e(v)}" /></label>`;
}
function renderEditor() {
  const listBlock = (key) => {
    const d = LIST_DEFS[key];
    const items = CV[key].map((x, i) => `
      <div class="ed-item">
        <div class="ed-item-head"><b>${e(d.label(x)) || t("Nouvel élément")}</b>
          <span><button type="button" class="mini" data-move="${key}:${i}:-1" ${i === 0 ? "disabled" : ""}>↑</button><button type="button" class="mini" data-move="${key}:${i}:1" ${i === CV[key].length - 1 ? "disabled" : ""}>↓</button><button type="button" class="mini danger" data-del="${key}:${i}">${t("Supprimer")}</button></span>
        </div>
        <div class="two">${d.fields.filter((f) => !f[2]).map(([k, l]) => field(l, `${key}.${i}.${k}`, x[k])).join("")}</div>
        ${d.fields.filter((f) => f[2]).map(([k, l, kind]) => field(l, `${key}.${i}.${k}`, x[k], kind)).join("")}
      </div>`).join("");
    return `<details class="ed-sec" ${CV[key].length ? "" : ""}><summary>${t(d.title)} <span class="cnt">${CV[key].length}</span></summary>${items}<button type="button" class="btn btn-plain" data-add="${key}">+ ${t(d.add)}</button></details>`;
  };
  document.getElementById("tab-edit").innerHTML = `
    ${IMPORTED_TEXT ? `<details class="ed-sec" open><summary>${t("Texte de votre CV importé")}</summary><p class="hint-l">${t("Copiez les informations dans les sections ci-dessous.")}</p><textarea readonly rows="8" class="imported">${e(IMPORTED_TEXT)}</textarea></details>` : ""}
    <details class="ed-sec" open><summary>${t("Coordonnées")}</summary>
      <div class="two">${field("Nom complet", "name", CV.name)}${field("Titre professionnel", "title", CV.title)}${field("E-mail", "email", CV.email)}${field("Téléphone / WhatsApp", "phone", CV.phone)}${field("Ville", "city", CV.city)}${field("LinkedIn (facultatif)", "linkedin", CV.linkedin)}</div>
    </details>
    <details class="ed-sec"><summary>${t("Profil")}</summary>${field("Résumé professionnel", "summary", CV.summary, "area")}</details>
    ${listBlock("experiences")}
    ${listBlock("education")}
    <details class="ed-sec"><summary>${t("Compétences")} <span class="cnt">${CV.skills.length}</span></summary>${field("Compétences (une par ligne)", "skills", CV.skills, "lines")}</details>
    <details class="ed-sec"><summary>${t("Langues")} <span class="cnt">${CV.languages.length}</span></summary>${field("Langues (une par ligne)", "languages", CV.languages, "lines")}</details>
    ${listBlock("certifications")}
    ${listBlock("projects")}`;
}
function setPath(path, value) {
  const parts = path.split(".");
  let o = CV;
  for (let i = 0; i < parts.length - 1; i++) o = o[isNaN(parts[i]) ? parts[i] : +parts[i]];
  o[parts[parts.length - 1]] = value;
}
document.addEventListener("input", (ev) => {
  const el = ev.target.closest("[data-path]");
  if (!el) return;
  const v = el.dataset.kind === "lines" ? el.value.split("\n").map((s) => s.trim()).filter(Boolean) : el.value;
  setPath(el.dataset.path, v);
  changed();
});
document.addEventListener("click", (ev) => {
  const a = ev.target.closest("[data-add]"), d = ev.target.closest("[data-del]"), m = ev.target.closest("[data-move]");
  if (a) { CV[a.dataset.add].push(LIST_DEFS[a.dataset.add].blank()); renderEditor(); openSec(a.dataset.add); changed(); }
  if (d) { const [k, i] = d.dataset.del.split(":"); CV[k].splice(+i, 1); renderEditor(); openSec(k); changed(); }
  if (m) { const [k, i, s] = m.dataset.move.split(":"); const j = +i + +s; [CV[k][+i], CV[k][j]] = [CV[k][j], CV[k][+i]]; renderEditor(); openSec(k); changed(); }
});
function openSec(key) {
  const title = t(LIST_DEFS[key].title);
  document.querySelectorAll("#tab-edit details").forEach((d) => { if (d.querySelector("summary").textContent.startsWith(title)) d.open = true; });
}

// ---- Template tab ---------------------------------------------------------------------
function renderTemplates() {
  document.getElementById("tab-style").innerHTML = `
    <h4>${t("Modèle")}</h4>
    <div class="tpl-grid">${TEMPLATES.map(([id, name, desc]) => `
      <button type="button" class="tpl ${id === TEMPLATE ? "on" : ""}" data-tpl="${id}"><span class="tpl-thumb th-${id}"><i></i><i></i><i></i></span><b>${t(name)}</b><small>${t(desc)}</small></button>`).join("")}</div>
    <h4>${t("Couleur")}</h4>
    <div class="acc-row">${ACCENTS.map((c) => `<button type="button" class="acc ${c === ACCENT ? "on" : ""}" data-acc="${c}" style="background:${c}" aria-label="${c}"></button>`).join("")}</div>`;
}
document.addEventListener("click", (ev) => {
  const tp = ev.target.closest("[data-tpl]"), ac = ev.target.closest("[data-acc]");
  if (tp) { TEMPLATE = tp.dataset.tpl; renderTemplates(); changed(); }
  if (ac) { ACCENT = ac.dataset.acc; renderTemplates(); changed(); }
});

// ---- AI assistant -----------------------------------------------------------------------
// Safety net on top of the server rules: never accept a skill that isn't already in the CV.
function safeSuggestions(list) {
  const known = new Set(CV.skills.map(norm2));
  return (list || []).filter((s) => {
    if (s.section === "skills") return s.after.every((x) => known.has(norm2(x)));
    if (["experience", "education", "project", "certification"].includes(s.section)) {
      const arr = { experience: CV.experiences, education: CV.education, project: CV.projects, certification: CV.certifications }[s.section];
      return s.index >= 0 && s.index < arr.length;
    }
    return true;
  });
}
function currentValue(s) {
  if (s.section === "summary") return [CV.summary];
  if (s.section === "title") return [CV.title];
  if (s.section === "skills") return CV.skills;
  if (s.section === "experience") return CV.experiences[s.index]?.bullets || [];
  if (s.section === "education") return [CV.education[s.index]?.description || ""];
  if (s.section === "project") return [CV.projects[s.index]?.description || ""];
  if (s.section === "certification") return [CV.certifications[s.index]?.name || ""];
  return [];
}
function applySuggestion(s) {
  const v = s.after;
  if (s.section === "summary") CV.summary = v.join(" ");
  else if (s.section === "title") CV.title = v.join(" ");
  else if (s.section === "skills") CV.skills = v;
  else if (s.section === "experience") CV.experiences[s.index].bullets = v;
  else if (s.section === "education") CV.education[s.index].description = v.join(" ");
  else if (s.section === "project") CV.projects[s.index].description = v.join(" ");
  else if (s.section === "certification") CV.certifications[s.index].name = v.join(" ");
  renderEditor(); changed();
}

let PENDING = [];
const SECTION_NAMES = { name: "Nom complet", title: "Titre professionnel", email: "E-mail", phone: "Téléphone / WhatsApp", city: "Ville", linkedin: "LinkedIn (facultatif)",
  summary: "Profil", experiences: "Expériences professionnelles", education: "Formation", skills: "Compétences", languages: "Langues", certifications: "Certifications", projects: "Projets et réalisations" };
function proposalHtml() {
  const changedKeys = Object.keys(SECTION_NAMES).filter((k) => JSON.stringify(CV[k] ?? "") !== JSON.stringify(PROPOSED[k] ?? ""));
  if (!changedKeys.length) return "";
  return `<div class="sugg"><div class="sugg-head"><b>${t("Mise à jour proposée")}</b><span>${t("Vérifiez avant d’enregistrer :")} ${changedKeys.map((k) => t(SECTION_NAMES[k])).join(", ")}</span></div>
    <div class="sugg-act"><button type="button" class="btn" id="accept-prop">${t("Appliquer")}</button><button type="button" class="btn btn-plain" id="skip-prop">${t("Ignorer")}</button></div></div>`;
}
document.addEventListener("click", (ev) => {
  if (ev.target.id === "accept-prop") { CV = PROPOSED; PROPOSED = null; renderEditor(); renderChat(); changed(); }
  if (ev.target.id === "skip-prop") { PROPOSED = null; renderChat(); }
});
function renderChat(busy) {
  const log = document.getElementById("chat-log");
  log.innerHTML = CHAT.map((m) => `<div class="msg ${m.role}">${e(m.content)}</div>`).join("")
    + PENDING.map((s, i) => `
      <div class="sugg" data-i="${i}">
        <div class="sugg-head"><b>${e(s.label)}</b><span>${e(s.reason)}</span></div>
        <div class="sugg-before">${currentValue(s).filter(Boolean).map((x) => `<div>${e(x)}</div>`).join("") || "<div>—</div>"}</div>
        <div class="sugg-after">${s.after.map((x) => `<div>${e(x)}</div>`).join("")}</div>
        <div class="sugg-act"><button type="button" class="btn" data-apply-s="${i}">${t("Appliquer")}</button><button type="button" class="btn btn-plain" data-skip-s="${i}">${t("Ignorer")}</button></div>
      </div>`).join("")
    + (PROPOSED ? proposalHtml() : "")
    + (busy ? `<div class="msg assistant typing">${t("L'assistant réfléchit…")}</div>` : "");
  log.scrollTop = log.scrollHeight;
}
document.addEventListener("click", (ev) => {
  const ap = ev.target.closest("[data-apply-s]"), sk = ev.target.closest("[data-skip-s]");
  if (ap) { applySuggestion(PENDING[+ap.dataset.applyS]); PENDING.splice(+ap.dataset.applyS, 1); renderChat(); }
  if (sk) { PENDING.splice(+sk.dataset.skipS, 1); renderChat(); }
});

async function send(message, job) {
  if (!message.trim()) return;
  CHAT.push({ role: "user", content: message });
  PENDING = [];
  renderChat(true);
  try {
    const out = await callAssistant({ mode: INTERVIEW ? "interview" : "chat", cv: CV, message, job, history: CHAT.slice(0, -1) }, demoAssistant);
    CHAT.push({ role: "assistant", content: out.reply || "" });
    if (INTERVIEW) PROPOSED = out.cv ? { ...EMPTY_CV(), ...out.cv } : null;
    else PENDING = safeSuggestions(out.suggestions);
  } catch (err) {
    CHAT.push({ role: "assistant", content: aiError(err) });
  }
  renderChat();
}

// Demo mode (?demo=1): a fixed example so the interface can be previewed without the AI.
async function demoAssistant(p) {
  await new Promise((r) => setTimeout(r, 700));
  if (p.mode === "import") return { reply: "(Démo) Import simulé.", cv: SAMPLE_CV() };
  if (p.mode === "interview") return { reply: "(Démo) Merci ! Parlez-moi maintenant de votre dernière expérience : poste, entreprise, années et tâches principales.",
    cv: { ...CV, title: CV.title || p.message.slice(0, 60) } };
  const sugg = [];
  if (CV.summary) sugg.push({ section: "summary", index: -1, field: "text", label: t("Profil"), reason: "(Démo) Plus clair et plus professionnel, sans ajouter d'information.",
    after: ["Assistante comptable avec 3 ans d'expérience en cabinet. Maîtrise d'Excel et de Sage, rigoureuse dans la saisie et le suivi bancaire."] });
  if (CV.experiences[0]) sugg.push({ section: "experience", index: 0, field: "bullets", label: `${CV.experiences[0].role} — ${CV.experiences[0].company}`, reason: "(Démo) Verbes d'action, même faits.",
    after: ["Saisie des factures et des pièces comptables", "Rapprochements bancaires mensuels", "Préparation des rapports pour les clients"] });
  return { reply: "(Démo) Voici des propositions. Combien de clients suiviez-vous ? Je pourrai l'ajouter si vous me le dites.", suggestions: sugg };
}

// ---- Import / start ----------------------------------------------------------------------
async function startFrom(kind, file) {
  const status = document.getElementById("start-status");
  status.textContent = ""; status.className = "start-status";
  if (kind === "zero") { CV = EMPTY_CV(); if (USER_) CV.email = USER_.email || ""; return openEditor(PROFILE_MODE ? "edit" : "ai"); }
  if (kind === "interview") {
    CV = EMPTY_CV(); if (USER_) CV.email = USER_.email || "";
    INTERVIEW = true; openEditor("ai");
    CHAT.push({ role: "assistant", content: t("Bonjour ! Je vais vous aider à créer votre Profil ALO, une question à la fois. Pour commencer : quel est votre nom, et quel métier exercez-vous ou recherchez-vous ?") });
    renderChat();
    return;
  }
  if (kind === "profil") {
    if (DEMO) { CV = SAMPLE_CV(); return openEditor(); }
    if (!USER_) { goSignIn("cv"); return; }
    const { data } = await db().from("alo_profiles").select("data").maybeSingle();
    if (data && data.data && Object.keys(data.data).length) { CV = { ...EMPTY_CV(), ...data.data }; return openEditor(); }
    CV = EMPTY_CV(); CV.email = USER_.email || "";
    openEditor();
    CHAT.push({ role: "assistant", content: t("Votre Profil ALO est encore vide. Remplissez vos informations dans « Modifier » : elles pourront ensuite être enregistrées dans votre Profil ALO.") });
    renderChat();
    return;
  }
  if (kind === "import" && file) {
    status.textContent = t("Lecture de votre CV…");
    let text = "";
    try { text = await extractText(file); }
    catch (err) { status.textContent = t(err.message === "format" ? "Formats acceptés : PDF ou Word (.docx)." : "Impossible de lire ce fichier."); status.classList.add("err"); return; }
    if (!text) { status.textContent = t("Aucun texte trouvé dans ce fichier (CV scanné ?)."); status.classList.add("err"); return; }
    status.textContent = t("L'assistant range vos informations…");
    try {
      const out = await callAssistant({ mode: "import", text }, demoAssistant);
      CV = { ...EMPTY_CV(), ...out.cv };
      IMPORTED_TEXT = "";
      openEditor();
      CHAT.push({ role: "assistant", content: out.reply || "" });
      renderChat();
    } catch (err) {
      // Without the AI: keep the text visible so the person can fill the sections themselves.
      CV = EMPTY_CV(); IMPORTED_TEXT = text;
      openEditor("edit");
      CHAT.push({ role: "assistant", content: aiError(err) + " " + t("Le texte de votre CV est affiché dans « Modifier ».") });
      renderChat();
    }
  }
}

function openEditor(tab) {
  document.getElementById("cv-start").hidden = true;
  document.getElementById("cv-app").hidden = false;
  renderEditor(); renderTemplates(); renderChat(); renderVersionBar();
  showTab(tab || "ai");
  changed();
}
function showTab(id) {
  document.querySelectorAll(".cvb-tabs button").forEach((b) => b.classList.toggle("on", b.dataset.tab === id));
  ["ai", "edit", "style"].forEach((x) => (document.getElementById("tab-" + x).hidden = x !== id));
}

// ---- Versions, profile, downloads --------------------------------------------------------
async function loadVersions() {
  VERSIONS = [];
  if (!USER_ || DEMO) return;
  const { data } = await db().from("cv_versions").select("id,name,template,accent,data,updated_at").order("updated_at", { ascending: false });
  VERSIONS = data || [];
}
function renderVersionBar() {
  document.getElementById("ver-name").value = VERSION.name || "";
  const sel = document.getElementById("ver-list");
  sel.innerHTML = `<option value="">${t("Mes versions")} (${VERSIONS.length})</option>` + VERSIONS.map((v) =>
    `<option value="${v.id}" ${v.id === VERSION.id ? "selected" : ""}>${e(v.name)} · ${new Date(v.updated_at).toLocaleDateString(LANG === "en" ? "en-US" : "fr-FR")}</option>`).join("");
  sel.hidden = !USER_;
}
function flash(msg, err) {
  const el = document.getElementById("cv-flash");
  el.textContent = msg; el.className = "cv-flash show" + (err ? " err" : "");
  clearTimeout(flash.tm); flash.tm = setTimeout(() => (el.className = "cv-flash"), 3200);
}
async function saveVersion(asNew) {
  VERSION.name = document.getElementById("ver-name").value.trim() || t("Mon CV");
  if (DEMO) { flash(t("Démo : version enregistrée dans ce navigateur.")); saveDraft(); return; }
  if (!USER_) { saveDraft(); goSignIn("cv"); return; }
  const row = { name: VERSION.name, template: TEMPLATE, accent: ACCENT, data: CV, updated_at: new Date().toISOString() };
  const q = !asNew && VERSION.id ? db().from("cv_versions").update(row).eq("id", VERSION.id).select("id").single()
                                 : db().from("cv_versions").insert(row).select("id").single();
  const { data, error } = await q;
  if (error) { console.error(error); flash(t("Erreur. Vérifiez votre connexion et réessayez."), true); return; }
  VERSION.id = data.id; saveDraft();
  await loadVersions(); renderVersionBar();
  flash(t("Version enregistrée dans votre espace."));
}
async function saveProfile() {
  if (DEMO) { flash(t("Démo : Profil ALO mis à jour.")); return; }
  if (!USER_) { saveDraft(); goSignIn("cv"); return; }
  const { error } = await db().from("alo_profiles").upsert({ data: CV, updated_at: new Date().toISOString() });
  flash(error ? t("Erreur. Vérifiez votre connexion et réessayez.") : t("Votre Profil ALO est à jour."), !!error);
}
const fileName = (ext) => `${(CV.name || "CV").replace(/[^\p{L}\p{N}]+/gu, "-")}-CV.${ext}`;
async function downloadPdf() {
  flash(t("Préparation du PDF…"));
  await loadScript(LIBS.html2pdf);
  const holder = document.createElement("div");
  holder.style.cssText = "position:fixed;left:-10000px;top:0;width:794px;background:#fff";
  holder.innerHTML = cvHtml();
  document.body.appendChild(holder);
  try {
    await html2pdf().set({ margin: 0, filename: fileName("pdf"), image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true }, jsPDF: { unit: "px", format: [794, 1123], hotfixes: ["px_scaling"] },
      pagebreak: { mode: ["css", "legacy"] } }).from(holder.firstElementChild).save();
  } finally { holder.remove(); }
}
function downloadWord() {
  const acc = ACCENT;
  const h = (s) => `<h2 style="color:${acc};font-size:13pt;border-bottom:1px solid ${acc};margin:14pt 0 6pt">${e(t(s))}</h2>`;
  const body = `
    <h1 style="color:${acc};font-size:22pt;margin:0">${e(CV.name)}</h1>
    <p style="font-size:12pt;margin:2pt 0">${e(CV.title)}</p>
    <p style="color:#555;font-size:10pt">${[CV.email, CV.phone, CV.city, CV.linkedin].filter(Boolean).map(e).join(" · ")}</p>
    ${CV.summary ? h("Profil") + `<p>${e(CV.summary)}</p>` : ""}
    ${CV.experiences.length ? h("Expériences professionnelles") + CV.experiences.map((x) => `<p style="margin:8pt 0 0"><b>${e(x.role)}</b> — ${e(x.company)}${x.city ? ", " + e(x.city) : ""} <span style="color:#555">(${e([x.start, x.end].filter(Boolean).join(" – "))})</span></p><ul>${(x.bullets || []).map((b) => `<li>${e(b)}</li>`).join("")}</ul>`).join("") : ""}
    ${CV.education.length ? h("Formation") + CV.education.map((x) => `<p><b>${e(x.degree)}</b> — ${e(x.school)} <span style="color:#555">(${e(x.year)})</span>${x.description ? "<br>" + e(x.description) : ""}</p>`).join("") : ""}
    ${CV.skills.length ? h("Compétences") + `<p>${CV.skills.map(e).join(" · ")}</p>` : ""}
    ${CV.languages.length ? h("Langues") + `<p>${CV.languages.map(e).join(" · ")}</p>` : ""}
    ${CV.certifications.length ? h("Certifications") + CV.certifications.map((x) => `<p><b>${e(x.name)}</b> — ${e(x.issuer)} (${e(x.year)})</p>`).join("") : ""}
    ${CV.projects.length ? h("Projets et réalisations") + CV.projects.map((x) => `<p><b>${e(x.name)}</b><br>${e(x.description)}</p>`).join("") : ""}`;
  const html = `<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word"><head><meta charset="utf-8"><title>${e(CV.name)}</title></head><body style="font-family:Calibri,Arial,sans-serif;font-size:11pt">${body}</body></html>`;
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob(["﻿", html], { type: "application/msword" }));
  a.download = fileName("doc"); a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
}

// ---- Wiring -----------------------------------------------------------------------------------
async function initCv() {
  USER_ = await currentUser();
  await Promise.all([loadVersions(), loadJobs()]);
  document.querySelectorAll(".cvb-tabs button").forEach((b) => (b.onclick = () => showTab(b.dataset.tab)));
  document.querySelectorAll("[data-start]").forEach((b) => (b.onclick = () => startFrom(b.dataset.start)));
  document.getElementById("import-file").onchange = (ev) => ev.target.files[0] && startFrom("import", ev.target.files[0]);
  document.getElementById("chat-form").onsubmit = (ev) => { ev.preventDefault(); const i = ev.target.elements.msg; send(i.value); i.value = ""; };
  document.querySelectorAll("[data-quick]").forEach((b) => (b.onclick = () => send(t(b.dataset.quick))));
  const jobSel = document.getElementById("job-pick");
  jobSel.innerHTML = `<option value="">${t("Choisir une offre ALO…")}</option>` + JOBS.map((j) => `<option value="${j.id}">${e(j.title)} — ${e(j.company)}</option>`).join("");
  document.getElementById("tailor").onclick = () => {
    const j = JOBS.find((x) => String(x.id) === jobSel.value);
    const pasted = document.getElementById("job-text").value.trim();
    if (!j && !pasted) { flash(t("Choisissez une offre ou collez sa description."), true); return; }
    const job = j ? { title: j.title, company: j.company, about: j.about, responsibilities: j.responsibilities, qualifications: j.needs } : { description: pasted };
    send(t("Adapte mon CV à cette offre, sans rien inventer.") + (j ? ` (${j.title} — ${j.company})` : ""), job);
  };
  document.getElementById("save").onclick = () => (PROFILE_MODE ? saveProfile() : saveVersion(false));
  document.getElementById("save-new").onclick = () => saveVersion(true);
  document.getElementById("save-profile").onclick = saveProfile;
  document.getElementById("dl-pdf").onclick = downloadPdf;
  document.getElementById("dl-word").onclick = downloadWord;
  document.getElementById("restart").onclick = () => { document.getElementById("cv-app").hidden = true; document.getElementById("cv-start").hidden = false; };
  document.getElementById("ver-list").onchange = (ev) => {
    const v = VERSIONS.find((x) => x.id === ev.target.value);
    if (!v) return;
    CV = { ...EMPTY_CV(), ...v.data }; TEMPLATE = v.template; ACCENT = v.accent; VERSION = { id: v.id, name: v.name };
    openEditor("edit");
  };
  window.onLang = () => { if (!document.getElementById("cv-app").hidden) { renderEditor(); renderTemplates(); renderChat(); renderVersionBar(); renderPreview(); } };
  const p = new URLSearchParams(location.search);
  if (PROFILE_MODE) setupProfileMode(p.has("welcome"));
  if (p.get("start")) startFrom(p.get("start"));
  else if (PROFILE_MODE && !p.has("welcome") && USER_ && !DEMO) {
    const { data } = await db().from("alo_profiles").select("data").maybeSingle();
    if (data && data.data && Object.keys(data.data).length) { CV = { ...EMPTY_CV(), ...data.data }; openEditor("edit"); }
  }
  else if (!PROFILE_MODE && loadDraft()) openEditor();
}
initCv();

// Profile mode: "Bienvenue sur ALO ! Comment souhaitez-vous créer votre profil ?"
function setupProfileMode(welcome) {
  const start = document.getElementById("cv-start");
  start.querySelector("h1").dataset.fr = welcome ? "Bienvenue sur ALO !" : "Créer mon Profil ALO";
  start.querySelector(".lead").dataset.fr = "Comment souhaitez-vous créer votre profil ? Vous pourrez vérifier et modifier toutes les informations avant de les enregistrer.";
  start.querySelector(".start-grid").innerHTML = `
    <label class="start-card"><input type="file" id="import-file" accept=".pdf,.docx" hidden /><b data-t>Importer mon CV</b><span data-t>L’IA analyse le document et prépare automatiquement votre Profil ALO.</span></label>
    <button type="button" class="start-card" data-start="interview"><b data-t>Créer mon profil avec l’IA</b><span data-t>Un assistant vous pose quelques questions pour renseigner votre parcours.</span></button>
    <button type="button" class="start-card" data-start="zero"><b data-t>Remplir manuellement</b><span data-t>Complétez les différentes sections de votre profil.</span></button>`;
  start.querySelectorAll("[data-start]").forEach((b) => (b.onclick = () => startFrom(b.dataset.start)));
  document.getElementById("import-file").onchange = (ev) => ev.target.files[0] && startFrom("import", ev.target.files[0]);
  const save = document.getElementById("save"); save.dataset.fr = "Enregistrer mon Profil ALO";
  document.getElementById("save-new").hidden = true;
  document.getElementById("save-profile").hidden = true;
  document.getElementById("ver-name").hidden = true;
  translatePage();
}
