// alo.ht — Profil ALO onboarding + guided editor (mon-profil.html).
// Welcome → choose how to start → 7 guided sections → review & publish.
// Progress is saved automatically (this browser + the account), so nothing is lost.

const $ = (id) => document.getElementById(id);
const x = (s) => esc(s || "");
const KEY = "alo-profile-draft";
const SECTIONS = [
  ["perso", "Informations personnelles", true],
  ["exp", "Expériences professionnelles", false],
  ["edu", "Formations et diplômes", false],
  ["skills", "Compétences", false],
  ["certs", "Certifications", false],
  ["proj", "Projets et réalisations", false],
  ["prefs", "Préférences professionnelles", false],
];
const blank = () => ({
  name: "", title: "", email: "", phone: "", city: "", linkedin: "", summary: "", photo: "",
  experiences: [], education: [], skills: [], languages: [], certifications: [], projects: [],
  preferences: { jobs: "", cities: "", contracts: [], availability: "", salary: "", open: true },
  visibility: "recruteurs", published: false, step: "welcome", section: 0, started: false,
});
let P = blank(), ME = null, LI = null, CHAT = [], PROPOSED = null, saveTimer = null, IMPORT = null, NOTICE = "";

// ---- Saving --------------------------------------------------------------------------
function saveLocal() { try { localStorage.setItem(KEY, JSON.stringify(P)); } catch {} }
function loadLocal() { try { const d = JSON.parse(localStorage.getItem(KEY) || "null"); if (d) { P = { ...blank(), ...d, preferences: { ...blank().preferences, ...(d.preferences || {}) } }; return true; } } catch {} return false; }
function autosave() {
  saveLocal();
  setStatus("Enregistrement…");
  clearTimeout(saveTimer);
  saveTimer = setTimeout(async () => {
    if (ME && !DEMO) {
      const { error } = await db().from("alo_profiles").upsert({ data: P, updated_at: new Date().toISOString() });
      setStatus(error ? "Enregistré sur cet appareil" : "Enregistré");
    } else setStatus("Enregistré");
  }, 900);
}
function setStatus(s) { const el = $("mp-status"); if (el) { el.dataset.fr = s; el.textContent = t(s); } }

// ---- Who is signed in (LinkedIn gives name, photo, email) ---------------------------------
function linkedinInfo(u) {
  if (!u) return null;
  const m = u.user_metadata || {};
  const viaLinkedIn = (u.app_metadata && (u.app_metadata.provider === "linkedin_oidc" || (u.app_metadata.providers || []).includes("linkedin_oidc")));
  return { viaLinkedIn, first: m.given_name || (m.name || m.full_name || "").split(" ")[0] || "", name: m.name || m.full_name || "", photo: m.picture || m.avatar_url || "", email: u.email || "" };
}

// ---- Completion ------------------------------------------------------------------------
function completion() { return profileCompletion(P); }

// ---- Screens ----------------------------------------------------------------------------
function render() {
  const view = { welcome: welcomeView, ai: aiView, edit: editView, merge: mergeView, review: reviewView, done: doneView, view: profileView }[P.step] || welcomeView;
  $("mp").innerHTML = view();
  wire();
  translatePage();
}

function welcomeView() {
  const first = (LI && LI.first) || (P.name || "").split(" ")[0];
  const head = P.started ? `
    <section class="mp-welcome">
      ${P.photo ? `<img class="mp-avatar" src="${x(P.photo)}" alt="" referrerpolicy="no-referrer" />` : ""}
      <h1>${t("Continuer mon profil")}</h1>
      <p class="mp-lead">${t("Votre progression est enregistrée. Reprenez où vous en étiez ou ajoutez des informations avec une autre méthode.")}</p>
      <div class="mp-progress center"><div class="mp-bar"><i style="width:${completion()}%"></i></div><span>${t("Profil complété à")} ${completion()} %</span></div>
      <button type="button" class="btn btn-lg" id="resume">${t("Continuer mon profil")}</button>
      <p class="mp-or">${t("ou choisissez une autre méthode :")}</p>
    </section>` : "";
  if (P.started) return head + optionsHtml() + `<p class="mp-skip"><a href="espace.html">${t("Enregistrer et continuer plus tard")}</a></p>`;
  return `
    <section class="mp-welcome">
      ${LI && LI.photo ? `<img class="mp-avatar" src="${x(LI.photo)}" alt="" referrerpolicy="no-referrer" />` : ""}
      <h1>${first ? `${t("Bienvenue sur ALO,")} ${x(first)} !` : t("Bienvenue sur ALO !")}</h1>
      <p class="mp-lead">${t("Votre compte est créé. Maintenant, construisons votre profil professionnel.")}</p>
    </section>
    ${optionsHtml()}
    <p class="mp-skip"><a href="espace.html">${t("Passer cette étape")}</a> · <span>${t("Vous pourrez compléter votre profil plus tard.")}</span></p>`;
}
function optionsHtml() {
  return `
    <div class="mp-options">
      <button type="button" class="mp-opt" data-start="import">
        <b>${t("Importer mon CV")}</b><span>${t("Importez votre CV et laissez l’IA préparer votre profil automatiquement.")}</span>
        <em class="btn">${t("Importer mon CV")}</em>
      </button>
      <button type="button" class="mp-opt" data-start="ai">
        <b>${t("Créer avec l’IA")}</b><span>${t("Répondez à quelques questions pour construire votre profil avec notre assistant.")}</span>
        <em class="btn">${t("Commencer avec l’IA")}</em>
      </button>
      <button type="button" class="mp-opt" data-start="manual">
        <b>${t("Remplir manuellement")}</b><span>${t("Ajoutez vos expériences, formations et compétences à votre rythme.")}</span>
        <em class="btn">${t("Commencer")}</em>
      </button>
      ${LI && LI.viaLinkedIn ? `
      <button type="button" class="mp-opt li" data-start="linkedin">
        <b>${t("Utiliser mes informations LinkedIn")}</b><span>${t("Reprenez votre nom, votre photo et votre e-mail LinkedIn, puis complétez le reste.")}</span>
        <em class="btn btn-linkedin">${t("Utiliser LinkedIn")}</em>
      </button>` : ""}
    </div>
    <input type="file" id="mp-file" accept=".pdf,.docx" hidden />
    <p class="start-status" id="mp-msg" aria-live="polite"></p>`;
}
// Top bar shown on every building screen: switch method or leave, progress is kept.
function topBar() {
  return `<div class="mp-top"><button type="button" class="linkbtn" id="change-method">${t("← Changer de méthode")}</button><span class="mp-save" id="mp-status"></span><button type="button" class="btn btn-plain" id="save-later">${t("Enregistrer et continuer plus tard")}</button></div>
    ${NOTICE ? `<div class="ap-note">${t(NOTICE)}</div>` : ""}`;
}

function aiView() {
  return `
    ${topBar()}
    <div class="mp-head"><h1>${t("Créer avec l’IA")}</h1></div>
    <p class="ai-rule">${t("L’IA reformule vos informations. Elle n’invente jamais d’expérience, de diplôme ou de compétence.")}</p>
    <div class="chat-log mp-chat" id="mp-chat">${CHAT.map((m) => `<div class="msg ${m.role}">${x(m.content)}</div>`).join("")}
      ${PROPOSED ? `<div class="sugg"><div class="sugg-head"><b>${t("Mise à jour proposée")}</b><span>${t("Vérifiez avant d’enregistrer :")} ${changedLabels().join(", ")}</span></div>
        <div class="sugg-act"><button type="button" class="btn" id="mp-accept">${t("Appliquer")}</button><button type="button" class="btn btn-plain" id="mp-skip-prop">${t("Ignorer")}</button></div></div>` : ""}
    </div>
    <form class="chat-form" id="mp-chat-form"><textarea name="msg" rows="2" placeholder="${t("Votre réponse…")}"></textarea><button class="btn" type="submit">${t("Envoyer")}</button></form>
    <div class="mp-nav"><button type="button" class="btn btn-plain" id="to-edit">${t("Voir et modifier mon profil")}</button></div>`;
}
function changedLabels() {
  const names = { name: "Nom complet", title: "Titre professionnel", summary: "Profil", experiences: "Expériences professionnelles", education: "Formations et diplômes", skills: "Compétences", languages: "Langues", certifications: "Certifications", projects: "Projets et réalisations", city: "Ville", phone: "Téléphone / WhatsApp" };
  return Object.keys(names).filter((k) => JSON.stringify(P[k] ?? "") !== JSON.stringify(PROPOSED[k] ?? "")).map((k) => t(names[k]));
}

function stepper() {
  return `<ol class="mp-steps">${SECTIONS.map(([id, name], i) => `<li class="${i < P.section ? "past" : i === P.section ? "on" : ""}"><button type="button" data-go="${i}"><span>${i + 1}</span>${t(name)}</button></li>`).join("")}</ol>`;
}
const f = (label, path, val, type) => `<label class="field"><span>${t(label)}</span><input data-p="${path}" value="${x(val)}" ${type ? `type="${type}"` : ""} /></label>`;
const area = (label, path, val, rows = 3) => `<label class="field"><span>${t(label)}</span><textarea data-p="${path}" rows="${rows}">${x(Array.isArray(val) ? val.join("\n") : val)}</textarea></label>`;
function listSection(key, fields, addLabel, emptyLabel) {
  const items = P[key].map((it, i) => `
    <div class="ap-item"><div class="two">${fields.filter((q) => !q[2]).map(([k, l]) => f(l, `${key}.${i}.${k}`, it[k])).join("")}</div>
      ${fields.filter((q) => q[2]).map(([k, l]) => area(l, `${key}.${i}.${k}`, it[k])).join("")}
      <button type="button" class="mini danger" data-rm="${key}:${i}">${t("Supprimer")}</button></div>`).join("");
  return `${items || `<p class="hint-l">${t(emptyLabel)}</p>`}<button type="button" class="btn btn-plain" data-add="${key}">+ ${t(addLabel)}</button>`;
}
function sectionBody(id) {
  if (id === "perso") return `
    ${P.photo ? `<div class="mp-photo"><img src="${x(P.photo)}" alt="" referrerpolicy="no-referrer" /><span>${t("Photo LinkedIn")}</span></div>` : ""}
    <div class="two">${f("Nom complet", "name", P.name)}${f("Titre professionnel", "title", P.title)}${f("E-mail", "email", P.email, "email")}${f("Téléphone / WhatsApp", "phone", P.phone, "tel")}${f("Ville", "city", P.city)}${f("LinkedIn (facultatif)", "linkedin", P.linkedin)}</div>
    ${area("Résumé professionnel", "summary", P.summary, 4)}`;
  if (id === "exp") return listSection("experiences", [["role", "Poste"], ["company", "Entreprise"], ["start", "Début"], ["end", "Fin"], ["bullets", "Réalisations (une par ligne)", 1]], "Ajouter une expérience", "Aucune expérience pour l’instant.");
  if (id === "edu") return listSection("education", [["degree", "Diplôme"], ["school", "Établissement"], ["year", "Année"], ["description", "Détails (facultatif)", 1]], "Ajouter une formation", "Aucune formation pour l’instant.");
  if (id === "skills") return `${area("Compétences (une par ligne)", "skills", P.skills, 5)}${area("Langues (une par ligne)", "languages", P.languages, 3)}<p class="hint-l">${t("Vos compétences sont « déclarées ». Les évaluations et vérifications arrivent bientôt.")}</p>`;
  if (id === "certs") return listSection("certifications", [["name", "Certification"], ["issuer", "Organisme"], ["year", "Année"]], "Ajouter une certification", "Aucune certification pour l’instant.");
  if (id === "proj") return listSection("projects", [["name", "Projet"], ["description", "Description", 1]], "Ajouter un projet", "Aucun projet pour l’instant.");
  const pr = P.preferences;
  return `
    ${f("Postes recherchés", "preferences.jobs", pr.jobs)}${f("Villes souhaitées", "preferences.cities", pr.cities)}
    <div class="field"><span>${t("Types de contrat")}</span><div class="sk-row">${["Temps plein", "Temps partiel", "Contrat", "Stage"].map((c) => `<label class="sk ${pr.contracts.includes(c) ? "on" : ""}"><input type="checkbox" data-contract="${c}" ${pr.contracts.includes(c) ? "checked" : ""} />${t(c)}</label>`).join("")}</div></div>
    <div class="two">
      <label class="field"><span>${t("Disponibilité")}</span><select data-p="preferences.availability">${["", "Immédiate", "Dans 1 mois", "Dans 3 mois", "Pas pour le moment"].map((o) => `<option value="${o}" ${pr.availability === o ? "selected" : ""}>${o ? t(o) : "—"}</option>`).join("")}</select></label>
      ${f("Salaire souhaité (facultatif)", "preferences.salary", pr.salary)}
    </div>
    <label class="consent"><input type="checkbox" id="mp-open" ${pr.open ? "checked" : ""} /> ${t("Je suis ouvert(e) à de nouvelles opportunités")}</label>`;
}
function editView() {
  const [id, name, required] = SECTIONS[P.section];
  const last = P.section === SECTIONS.length - 1;
  return `
    ${topBar()}
    <div class="mp-head"><h1>${t("Mon Profil ALO")}</h1></div>
    <div class="mp-progress"><div class="mp-bar"><i style="width:${completion()}%"></i></div><span>${t("Profil complété à")} ${completion()} %</span></div>
    <div class="mp-grid">
      <nav class="mp-side">${stepper()}</nav>
      <section class="ap-card mp-card">
        <div class="mp-card-head"><span class="mp-num">${P.section + 1} / ${SECTIONS.length}</span><h2>${t(name)}</h2>${required ? "" : `<span class="mp-opt-tag">${t("Facultatif")}</span>`}</div>
        ${sectionBody(id)}
        <div class="mp-nav">
          ${P.section > 0 ? `<button type="button" class="btn btn-plain" id="prev">${t("← Précédent")}</button>` : "<span></span>"}
          <span class="mp-nav-r">
            ${required ? "" : `<button type="button" class="linkbtn" id="skip-sec">${t("Passer")}</button>`}
            <button type="button" class="btn" id="next">${last ? t("Vérifier mon profil") : t("Suivant →")}</button>
          </span>
        </div>
      </section>
    </div>`;
}

function reviewView() {
  const list = (arr) => arr.length ? `<ul class="rv-list">${arr.map((s) => `<li>${s}</li>`).join("")}</ul>` : `<p class="hint-l">—</p>`;
  const vis = [["public", "Public", "Visible par tous, y compris via vos cartes et votre QR code."], ["recruteurs", "Recruteurs", "Partagé uniquement avec les employeurs vérifiés."], ["prive", "Privé", "Visible par vous seul."]];
  return `
    <div class="mp-head"><h1>${t("Votre Profil ALO est presque prêt !")}</h1><span class="mp-save" id="mp-status"></span></div>
    <div class="mp-progress"><div class="mp-bar"><i style="width:${completion()}%"></i></div><span>${t("Profil complété à")} ${completion()} %</span></div>
    <section class="ap-card rv"><h2>${t("Informations personnelles")} <button type="button" class="linkbtn" data-go="0">${t("Modifier")}</button></h2><p><b>${x(P.name)}</b> · ${x(P.title)}<br>${[P.email, P.phone, P.city].filter(Boolean).map(x).join(" · ")}</p>${P.summary ? `<p>${x(P.summary)}</p>` : ""}</section>
    <section class="ap-card rv"><h2>${t("Expériences professionnelles")} <button type="button" class="linkbtn" data-go="1">${t("Modifier")}</button></h2>${list(P.experiences.map((e) => `<b>${x(e.role)}</b> — ${x(e.company)} <span>${x([e.start, e.end].filter(Boolean).join(" – "))}</span>`))}</section>
    <section class="ap-card rv"><h2>${t("Formations et diplômes")} <button type="button" class="linkbtn" data-go="2">${t("Modifier")}</button></h2>${list(P.education.map((e) => `<b>${x(e.degree)}</b> — ${x(e.school)} <span>${x(e.year)}</span>`))}</section>
    <section class="ap-card rv"><h2>${t("Compétences")} <button type="button" class="linkbtn" data-go="3">${t("Modifier")}</button></h2><p>${P.skills.map(x).join(" · ") || "—"}</p></section>
    <section class="ap-card rv"><h2>${t("Qui peut voir mon profil ?")}</h2>
      ${vis.map(([v, l, d]) => `<label class="cvopt vis"><input type="radio" name="vis" value="${v}" ${P.visibility === v ? "checked" : ""} /><span><b>${t(l)}</b><small>${t(d)}</small></span></label>`).join("")}
    </section>
    <div class="ap-actions">
      <button type="button" class="btn btn-plain" id="later">${t("Continuer plus tard")}</button>
      <button type="button" class="btn btn-lg" id="publish" ${P.name ? "" : "disabled"}>${t("Publier mon Profil ALO")}</button>
    </div>
    ${P.name ? "" : `<p class="hint-l">${t("Ajoutez au moins votre nom pour publier.")}</p>`}`;
}
function doneView() {
  return `<div class="ap-sent"><h1>${t("Votre Profil ALO a été créé avec succès !")}</h1><p>${needsPrefs() ? t("Encore quelques questions pour personnaliser votre expérience…") : t("Redirection vers votre espace ALO…")}</p>
    <div class="row center"><a class="btn btn-lg" href="espace.html">${t("Mon espace ALO")}</a></div></div>`;
}
// Read-only view of the profile ("Voir mon profil").
function profileView() {
  const sec = (title, body) => body ? `<section class="pv-sec"><h2>${t(title)}</h2>${body}</section>` : "";
  const items = (arr, f) => arr.length ? arr.map(f).join("") : "";
  const vis = { public: "Public", recruteurs: "Recruteurs", prive: "Privé" }[P.visibility] || "Recruteurs";
  return `
    <div class="pv-page">
      <header class="pv-head">
        ${P.photo ? `<img src="${x(P.photo)}" alt="" referrerpolicy="no-referrer" />` : `<span class="pv-ini">${x((P.name || "?").split(" ").map((w) => w[0]).slice(0, 2).join(""))}</span>`}
        <div><h1>${x(P.name)}</h1><p>${x(P.title)}${P.city ? " · " + x(P.city) : ""}</p>
          <div class="pv-tags">${P.preferences.open ? `<span class="tag pay">${t("Ouvert(e) aux opportunités")}</span>` : ""}<span class="tag">${t("Visibilité")} : ${t(vis)}</span></div></div>
        <div class="pv-act"><a class="btn" href="mon-profil.html?edit=1">${t("Modifier mon profil")}</a><a class="btn btn-plain" href="espace.html">${t("Mon espace ALO")}</a></div>
      </header>
      <div class="pv-progress"><div class="mp-bar"><i style="width:${completion()}%"></i></div><span>${t("Profil complété à")} ${completion()} %</span></div>
      ${sec("Profil", P.summary ? `<p>${x(P.summary)}</p>` : "")}
      ${sec("Expériences professionnelles", items(P.experiences, (e) => `<div class="pv-item"><b>${x(e.role)}</b><span>${x(e.company)} · ${x([e.start, e.end].filter(Boolean).join(" – "))}</span>${(e.bullets || []).length ? `<ul>${e.bullets.map((b) => `<li>${x(b)}</li>`).join("")}</ul>` : ""}</div>`))}
      ${sec("Formations et diplômes", items(P.education, (e) => `<div class="pv-item"><b>${x(e.degree)}</b><span>${x(e.school)} · ${x(e.year)}</span></div>`))}
      ${sec("Compétences", P.skills.length ? `<div class="pv-chips">${P.skills.map((k) => `<span>${x(k)} <small>${t("Déclarée")}</small></span>`).join("")}</div>` : "")}
      ${sec("Langues", P.languages.length ? `<p>${P.languages.map(x).join(" · ")}</p>` : "")}
      ${sec("Certifications", items(P.certifications, (c) => `<div class="pv-item"><b>${x(c.name)}</b><span>${x(c.issuer)} · ${x(c.year)}</span></div>`))}
      ${sec("Projets et réalisations", items(P.projects, (p) => `<div class="pv-item"><b>${x(p.name)}</b><span>${x(p.description)}</span></div>`))}
    </div>`;
}

// ---- Import review: never overwrite without confirmation -------------------------------------
const SCALARS = [["name", "Nom complet"], ["title", "Titre professionnel"], ["email", "E-mail"], ["phone", "Téléphone / WhatsApp"], ["city", "Ville"], ["linkedin", "LinkedIn (facultatif)"], ["summary", "Résumé professionnel"]];
const LISTS = [
  ["experiences", "Expériences professionnelles", (e) => `${e.role || ""} — ${e.company || ""}`, (e) => norm(`${e.role}|${e.company}`)],
  ["education", "Formations et diplômes", (e) => `${e.degree || ""} — ${e.school || ""}`, (e) => norm(`${e.degree}|${e.school}`)],
  ["skills", "Compétences", (e) => e, (e) => norm(e)],
  ["languages", "Langues", (e) => e, (e) => norm(e)],
  ["certifications", "Certifications", (e) => `${e.name || ""}${e.issuer ? " — " + e.issuer : ""}`, (e) => norm(e.name)],
  ["projects", "Projets et réalisations", (e) => e.name || "", (e) => norm(e.name)],
];
function buildMerge(cv) {
  const m = { scalars: [], lists: [] };
  for (const [k, label] of SCALARS) {
    const nv = (cv[k] || "").trim(), cur = (P[k] || "").trim();
    if (!nv || norm(nv) === norm(cur)) continue;
    m.scalars.push({ k, label, cur, nv, choice: cur ? "keep" : "add" });
  }
  for (const [k, label, show, key] of LISTS) {
    const have = new Set((P[k] || []).map(key));
    const items = (cv[k] || []).filter((it) => (typeof it === "string" ? it.trim() : show(it).replace(/[—\s]/g, ""))).map((it) => ({ it, text: show(it), dup: have.has(key(it)) }));
    items.forEach((i) => (i.on = !i.dup));
    if (items.length) m.lists.push({ k, label, items });
  }
  return m;
}
function mergeView() {
  const m = IMPORT;
  const nothing = !m.scalars.length && !m.lists.some((l) => l.items.some((i) => !i.dup));
  return `
    ${topBar()}
    <div class="mp-head"><h1>${t("Vérifiez les informations extraites de votre CV")}</h1></div>
    <p class="mp-sub">${t("Rien n’est ajouté ni remplacé sans votre accord. Choisissez ce que vous gardez.")}</p>
    ${nothing ? `<div class="ap-note">${t("Votre profil contient déjà toutes les informations de ce CV.")}</div>` : ""}
    ${m.scalars.length ? `<section class="ap-card"><h2>${t("Informations personnelles")}</h2>${m.scalars.map((s, i) => s.cur ? `
      <div class="mg-row"><b>${t(s.label)}</b>
        <label class="mg-choice"><input type="radio" name="sc${i}" data-sc="${i}" value="keep" ${s.choice === "keep" ? "checked" : ""} /><span><small>${t("Garder l’actuel")}</small>${x(s.cur)}</span></label>
        <label class="mg-choice"><input type="radio" name="sc${i}" data-sc="${i}" value="add" ${s.choice === "add" ? "checked" : ""} /><span><small>${t("Remplacer par")}</small>${x(s.nv)}</span></label>
      </div>` : `
      <label class="mg-item"><input type="checkbox" data-sc="${i}" ${s.choice === "add" ? "checked" : ""} /><span><b>${t(s.label)}</b> ${x(s.nv)}</span></label>`).join("")}</section>` : ""}
    ${m.lists.map((l, li) => `<section class="ap-card"><h2>${t(l.label)}</h2>${l.items.map((it, ii) => `
      <label class="mg-item ${it.dup ? "dup" : ""}"><input type="checkbox" data-li="${li}:${ii}" ${it.on ? "checked" : ""} ${it.dup ? "disabled" : ""} /><span>${x(it.text)}${it.dup ? ` <em>${t("Déjà dans votre profil")}</em>` : ""}</span></label>`).join("")}</section>`).join("")}
    <div class="ap-actions"><button type="button" class="btn btn-plain" id="mg-cancel">${t("Annuler")}</button><button type="button" class="btn btn-lg" id="mg-apply">${t("Ajouter à mon profil")}</button></div>`;
}
function applyMerge() {
  for (const s of IMPORT.scalars) if (s.choice === "add") P[s.k] = s.nv;
  for (const l of IMPORT.lists) for (const i of l.items) if (i.on && !i.dup) P[l.k] = [...(P[l.k] || []), i.it];
  IMPORT = null; NOTICE = "Les informations choisies ont été ajoutées à votre profil.";
  go("edit", 0);
}

// ---- Actions -----------------------------------------------------------------------------
function go(step, section) { P.step = step; if (section !== undefined) P.section = section; autosave(); render(); scrollTo(0, 0); }
async function start(kind, file) {
  const msg = $("mp-msg");
  P.started = true; NOTICE = "";
  if (kind === "linkedin") {
    const added = [];
    if (!P.name && LI.name) { P.name = LI.name; added.push("nom"); }
    if (!P.email && LI.email) { P.email = LI.email; added.push("e-mail"); }
    if (!P.photo && LI.photo) { P.photo = LI.photo; added.push("photo"); }
    NOTICE = added.length ? "Informations LinkedIn ajoutées à votre profil (nom, e-mail, photo). Les informations déjà présentes n’ont pas été modifiées." : "Vos informations LinkedIn sont déjà dans votre profil.";
    return go("edit", 0);
  }
  if (kind === "manual") return go("edit", P.section || 0);
  if (kind === "ai") {
    if (CHAT.length && CHAT.at(-1).role === "assistant" && P.name) CHAT.push({ role: "assistant", content: t("Je reprends avec votre profil actuel. Que souhaitez-vous ajouter ou améliorer ?") });
    if (!CHAT.length) CHAT.push({ role: "assistant", content: t("Bonjour ! Je vais vous aider à créer votre Profil ALO, une question à la fois. Pour commencer : quel est votre nom, et quel métier exercez-vous ou recherchez-vous ?") });
    return go("ai");
  }
  if (kind === "import" && file) {
    msg.className = "start-status"; msg.textContent = t("Lecture de votre CV…");
    let text = "";
    try { text = await extractText(file); } catch (e) { msg.textContent = t(e.message === "format" ? "Formats acceptés : PDF ou Word (.docx)." : "Impossible de lire ce fichier."); msg.classList.add("err"); return; }
    if (!text) { msg.textContent = t("Aucun texte trouvé dans ce fichier (CV scanné ?)."); msg.classList.add("err"); return; }
    msg.textContent = t("L’assistant range vos informations…");
    try {
      const out = await callAssistant({ mode: "import", text }, async () => ({ cv: demoCv() }));
      IMPORT = buildMerge(out.cv || {});
      go("merge");
    } catch (err) { msg.textContent = aiError(err) + " " + t("Vous pouvez remplir votre profil manuellement."); msg.classList.add("err"); }
  }
}
async function sendAi(message) {
  if (!message.trim()) return;
  CHAT.push({ role: "user", content: message }); PROPOSED = null; render();
  try {
    const out = await callAssistant({ mode: "interview", cv: P, message, history: CHAT.slice(0, -1) }, async (p) => ({ reply: "(Démo) Merci ! Parlez-moi de votre dernière expérience : poste, entreprise, années.", cv: { ...P, title: P.title || p.message.slice(0, 60) } }));
    CHAT.push({ role: "assistant", content: out.reply || "" });
    PROPOSED = out.cv ? { ...P, ...out.cv } : null;
    if (PROPOSED && !changedLabels().length) PROPOSED = null;
  } catch (err) { CHAT.push({ role: "assistant", content: aiError(err) }); }
  render();
  const log = $("mp-chat"); if (log) log.scrollTop = log.scrollHeight;
}
async function publish() {
  P.published = true; P.step = "view"; saveLocal();
  if (ME && !DEMO) await db().from("alo_profiles").upsert({ data: P, updated_at: new Date().toISOString() });
  P.step = "done"; render(); scrollTo(0, 0);
  P.step = "view"; saveLocal();
  setTimeout(() => (location.href = needsPrefs() ? "preferences.html?debut=1" : "espace.html"), 2500);
}
function needsPrefs() { const c = P.career || {}; return !c.done && !c.stage && !(c.fields || []).length; }
function demoCv() {
  return { name: "Marie-Jeanne Pierre", title: "Assistante comptable", email: "mj.pierre@exemple.com", phone: "+509 3700 0000", city: "Delmas", summary: "Assistante comptable avec 3 ans d’expérience en cabinet.",
    experiences: [{ role: "Assistante comptable", company: "Cabinet Fanmi & Associés", start: "2022", end: "Aujourd’hui", bullets: ["Saisie des factures", "Rapprochements bancaires"] }],
    education: [{ degree: "Licence en comptabilité", school: "Université d’État d’Haïti", year: "2022", description: "" }],
    skills: ["Comptabilité", "Excel", "Sage"], languages: ["Créole", "Français"], certifications: [], projects: [] };
}

function setPath(path, v) { const ps = path.split("."); let o = P; for (let i = 0; i < ps.length - 1; i++) o = o[isNaN(ps[i]) ? ps[i] : +ps[i]]; o[ps.at(-1)] = v; }
const LINE_FIELDS = new Set(["skills", "languages"]);
function wire() {
  document.querySelectorAll("[data-start]").forEach((b) => (b.onclick = () => (b.dataset.start === "import" ? $("mp-file").click() : start(b.dataset.start))));
  const fi = $("mp-file"); if (fi) fi.onchange = (e) => e.target.files[0] && start("import", e.target.files[0]);
  document.querySelectorAll("[data-go]").forEach((b) => (b.onclick = () => go("edit", +b.dataset.go)));
  const n = $("next"); if (n) n.onclick = () => (P.section === SECTIONS.length - 1 ? go("review") : go("edit", P.section + 1));
  const pv = $("prev"); if (pv) pv.onclick = () => go("edit", P.section - 1);
  const sk = $("skip-sec"); if (sk) sk.onclick = () => (P.section === SECTIONS.length - 1 ? go("review") : go("edit", P.section + 1));
  const te = $("to-edit"); if (te) te.onclick = () => go("edit", 0);
  const cf = $("mp-chat-form"); if (cf) cf.onsubmit = (e) => { e.preventDefault(); const v = e.target.elements.msg.value; e.target.elements.msg.value = ""; sendAi(v); };
  const ac = $("mp-accept"); if (ac) ac.onclick = () => { Object.assign(P, PROPOSED); PROPOSED = null; autosave(); render(); };
  const sp = $("mp-skip-prop"); if (sp) sp.onclick = () => { PROPOSED = null; render(); };
  const op = $("mp-open"); if (op) op.onchange = (e) => { P.preferences.open = e.target.checked; autosave(); };
  const pu = $("publish"); if (pu) pu.onclick = publish;
  const cm = $("change-method"); if (cm) cm.onclick = () => { NOTICE = ""; go("welcome"); };
  const sl = $("save-later"); if (sl) sl.onclick = () => { autosave(); setTimeout(() => (location.href = "espace.html"), 950); };
  const rs = $("resume"); if (rs) rs.onclick = () => go("edit", P.section || 0);
  const mc = $("mg-cancel"); if (mc) mc.onclick = () => { IMPORT = null; go("welcome"); };
  const ma = $("mg-apply"); if (ma) ma.onclick = applyMerge;
  const la = $("later"); if (la) la.onclick = () => { autosave(); location.href = "espace.html"; };
}
document.addEventListener("input", (e) => {
  const el = e.target.closest("[data-p]"); if (!el) return;
  const path = el.dataset.p, last = path.split(".").at(-1);
  const v = el.tagName === "TEXTAREA" && (LINE_FIELDS.has(path) || last === "bullets") ? el.value.split("\n").map((s) => s.trim()).filter(Boolean) : el.value;
  setPath(path, v); autosave();
  const bar = document.querySelector(".mp-bar i"); if (bar) { bar.style.width = completion() + "%"; document.querySelector(".mp-progress span").textContent = `${t("Profil complété à")} ${completion()} %`; }
});
document.addEventListener("change", (e) => {
  const el = e.target;
  if (el.dataset.contract) { const c = el.dataset.contract, arr = P.preferences.contracts; P.preferences.contracts = el.checked ? [...arr, c] : arr.filter((v) => v !== c); el.closest(".sk").classList.toggle("on", el.checked); autosave(); }
  if (el.name === "vis") { P.visibility = el.value; autosave(); }
  if (el.dataset.sc !== undefined && IMPORT) { const s = IMPORT.scalars[+el.dataset.sc]; s.choice = el.type === "checkbox" ? (el.checked ? "add" : "keep") : el.value; }
  if (el.dataset.li && IMPORT) { const [a, b] = el.dataset.li.split(":"); IMPORT.lists[+a].items[+b].on = el.checked; }
  if (el.tagName === "SELECT" && el.dataset.p) { setPath(el.dataset.p, el.value); autosave(); }
});
document.addEventListener("click", (e) => {
  const a = e.target.closest("[data-add]"), r = e.target.closest("[data-rm]");
  const blanks = { experiences: { role: "", company: "", start: "", end: "", bullets: [] }, education: { degree: "", school: "", year: "", description: "" }, certifications: { name: "", issuer: "", year: "" }, projects: { name: "", description: "" } };
  if (a) { P[a.dataset.add].push({ ...blanks[a.dataset.add] }); autosave(); render(); }
  if (r) { const [k, i] = r.dataset.rm.split(":"); P[k].splice(+i, 1); autosave(); render(); }
});

async function init() {
  ME = await currentUser();
  if (DEMO && !ME) ME = { id: "demo", email: "mj.pierre@exemple.com", user_metadata: { given_name: "Marie-Jeanne", name: "Marie-Jeanne Pierre", picture: "https://images.unsplash.com/photo-1618298363483-e31a31f1a1e2?w=160&h=160&fit=crop&crop=faces" }, app_metadata: { provider: "linkedin_oidc" } };
  if (!ME) { goSignIn("profil"); return; }
  LI = linkedinInfo(ME);
  let had = false;
  const saved = await loadMyProfile();
  if (saved) { P = { ...blank(), ...saved, preferences: { ...blank().preferences, ...(saved.preferences || {}) } }; had = true; }
  if (!P.email) P.email = LI.email;
  if (!P.photo && LI.photo) P.photo = LI.photo;
  // Returning with an existing profile: open the editor instead of the welcome screen.
  if (had && (P.name || P.experiences.length || P.title)) P.started = true;
  // Coming back to an unfinished profile: show "Continuer mon profil" (never the first welcome again).
  if (P.started && !P.published && !["review", "done"].includes(P.step)) P.step = "welcome";
  const q = new URLSearchParams(location.search);
  if (P.published) P.step = q.has("edit") ? "edit" : "view";
  if (P.step === "done") P.step = "view";
  if (q.has("edit") && P.started) { P.step = "edit"; P.section = 0; }
  window.onLang = render;
  render();
}
init();
