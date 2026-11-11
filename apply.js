// alo.ht — application flow (apply.html?id=JOB).
// 1. Choose how to start  2. Pre-filled form  3. Review  4. Sent.
// Progress is kept in this browser (and in the account once signed in), so signing in never loses it.
// Nothing is ever sent without the person pressing "Envoyer ma candidature".

const JOB_ID = new URLSearchParams(location.search).get("id");
const DRAFT_KEY = `alo-apply-${JOB_ID}`;
let JOB = null, ME = null, CVS = [];
let ST = { step: "start", method: "", importText: "", app: blankApp() };
const FILES = {}; // document name -> File (kept in memory until sent)
const OPEN_FOLD = new Set(); // optional sections the person opened
document.addEventListener("toggle", (e) => { const d = e.target; if (d.dataset && d.dataset.fold) { if (d.open) OPEN_FOLD.add(d.dataset.fold); else OPEN_FOLD.delete(d.dataset.fold); } }, true);

function blankApp() {
  return { contact: { name: "", email: "", phone: "", city: "" }, experiences: [], education: [], skills: [], skillsAll: [],
    cvId: "", answers: {}, message: "", saveToProfile: false };
}
function saveLocal() { try { localStorage.setItem(DRAFT_KEY, JSON.stringify(ST)); } catch {} }
function loadLocal() { try { const d = JSON.parse(localStorage.getItem(DRAFT_KEY) || "null"); if (d && d.app) { ST = d; return true; } } catch {} return false; }
function clearLocal() { try { localStorage.removeItem(DRAFT_KEY); } catch {} }
const $ = (id) => document.getElementById(id);
const x = (s) => esc(s || "");

// ---- Filling the form from a source -------------------------------------------------------
function jobText() { return norm([JOB.title, JOB.about, ...(JOB.needs || []), ...(JOB.responsibilities || [])].join(" ")); }
function fromProfile(p) {
  const a = blankApp();
  a.contact = { name: p.name || "", email: p.email || (ME && ME.email) || "", phone: p.phone || "", city: p.city || "" };
  a.experiences = (p.experiences || []).map((e) => ({ role: e.role || "", company: e.company || "", start: e.start || "", end: e.end || "", bullets: e.bullets || [], include: true }));
  a.education = (p.education || []).map((e) => ({ degree: e.degree || "", school: e.school || "", year: e.year || "", include: true }));
  // Relevant skills: the ones the offer mentions are pre-selected (all of them if none match).
  a.skillsAll = p.skills || [];
  const jt = jobText();
  const match = a.skillsAll.filter((s) => s && jt.includes(norm(s)));
  a.skills = match.length ? match : [...a.skillsAll];
  return a;
}
async function fetchProfile() {
  const { data } = await db().from("alo_profiles").select("data").maybeSingle();
  return data && data.data && Object.keys(data.data).length ? data.data : null;
}
async function fetchLastApplication() {
  const { data, error } = await db().from("applications").select("name,phone,email,data").order("created_at", { ascending: false }).limit(1).maybeSingle();
  if (error || !data) return null;
  const d = data.data || {};
  return { name: data.name, phone: data.phone, email: data.email || (ME && ME.email), city: d.contact?.city || "",
    experiences: d.experiences || [], education: d.education || [], skills: d.skillsAll || d.skills || [] };
}

// ---- Step 1: start options --------------------------------------------------------------------
async function choose(method, file) {
  ST.method = method;
  const status = $("start-status"); status.textContent = ""; status.className = "start-status";
  if (method === "import" && file) {
    status.textContent = t("Lecture de votre CV…");
    try { ST.importText = await extractText(file); }
    catch (err) { status.textContent = t(err.message === "format" ? "Formats acceptés : PDF ou Word (.docx)." : "Impossible de lire ce fichier."); status.classList.add("err"); return; }
    if (!ST.importText) { status.textContent = t("Aucun texte trouvé dans ce fichier (CV scanné ?)."); status.classList.add("err"); return; }
  }
  saveLocal();
  // Manual filling works without an account; the other options need to know who you are.
  if (method !== "manual" && !ME && !DEMO) { ST.step = "signin"; saveLocal(); render(); return; }
  await runMethod();
}
async function runMethod() {
  const status = $("start-status");
  try {
    if (ST.method === "profile") {
      const p = DEMO ? demoProfile() : await fetchProfile();
      if (p) ST.app = fromProfile(p);
      else { ST.app = blankApp(); ST.app.contact.email = (ME && ME.email) || ""; ST.notice = "Votre Profil ALO est encore vide : complétez le formulaire, vous pourrez l’enregistrer dans votre profil à la fin."; }
    } else if (ST.method === "last") {
      const p = DEMO ? demoProfile() : await fetchLastApplication();
      if (p) ST.app = fromProfile(p);
      else { ST.app = blankApp(); ST.app.contact.email = (ME && ME.email) || ""; ST.notice = "Aucune candidature précédente trouvée : complétez le formulaire."; }
    } else if (ST.method === "import") {
      status.textContent = t("L’assistant range vos informations…");
      try {
        const out = await callAssistant({ mode: "import", text: ST.importText }, async () => ({ cv: demoProfile() }));
        ST.app = fromProfile(out.cv || {});
        ST.notice = "Informations extraites de votre CV par l’IA : vérifiez-les et corrigez-les si besoin.";
      } catch (err) {
        ST.app = blankApp(); ST.app.contact.email = (ME && ME.email) || "";
        ST.notice = aiError(err) + " " + t("Complétez le formulaire ; le texte de votre CV est affiché pour vous aider.");
        ST.showImported = true;
      }
    } else {
      if (!ST.app.contact.email && ME) ST.app.contact.email = ME.email || "";
    }
  } catch (err) { console.error(err); ST.app = ST.app || blankApp(); }
  // Fast path (phones): when the profile already has everything this offer asks for, go straight to the review.
  const ready = ["profile", "last"].includes(ST.method) && !ST.notice && !missing().length;
  if (ready) ST.notice = "Votre candidature est prête, préremplie avec votre profil. Vérifiez-la, puis envoyez-la.";
  ST.step = ready ? "review" : "form"; saveLocal(); render(); scrollTo(0, 0);
}

// ---- Rendering -----------------------------------------------------------------------------------
function jobHead() {
  return `<div class="ap-job">${logo(JOB)}<div><b>${x(JOB.title)}</b><span>${x(JOB.company)} · ${x(JOB.city)}</span></div><a class="link" href="${jobUrl(JOB)}">${t("Voir l’offre")}</a></div>`;
}
function steps() {
  const order = ["start", "form", "review", "sent"];
  const names = { start: "Démarrer", form: "Informations", review: "Vérification", sent: "Envoyée" };
  const cur = Math.max(0, order.indexOf(ST.step === "signin" ? "start" : ST.step));
  return `<ol class="ap-steps">${order.map((s, i) => `<li class="${i < cur ? "past" : i === cur ? "on" : ""}">${t(names[s])}</li>`).join("")}</ol>`;
}

function renderStart() {
  return `
    <h1>${t("Commencez votre candidature")}</h1>
    <p class="ap-sub">${t("Choisissez la méthode la plus simple pour vous. Vous pourrez tout vérifier et modifier avant l’envoi.")}</p>
    ${ST.serverDraft ? `<div class="ap-note">${t("Vous avez un brouillon pour cette offre.")} <button type="button" class="linkbtn" id="resume-draft">${t("Reprendre mon brouillon")}</button></div>` : ""}
    <div class="ap-options">
      <button type="button" class="ap-opt" data-m="profile"><b>${t("Utiliser mon Profil ALO")}</b><span>${t("Remplir automatiquement la candidature avec les informations de votre profil.")}</span></button>
      ${AI_LIVE || DEMO ? `<label class="ap-opt"><input type="file" id="ap-file" accept=".pdf,.docx" hidden /><b>${t("Importer mon CV")}</b><span>${t("PDF ou Word. L’IA extrait les informations pour préremplir la candidature.")}</span></label>`
        : `<div class="ap-opt off" aria-disabled="true"><b>${t("Importer mon CV")} <span class="soon">${t("Bientôt")}</span></b><span>${t("PDF ou Word. L’IA extrait les informations pour préremplir la candidature.")}</span></div>`}
      <button type="button" class="ap-opt" data-m="last"><b>${t("Réutiliser ma dernière candidature")}</b><span>${t("Reprendre les informations d’une candidature précédente.")}</span></button>
      <button type="button" class="ap-opt" data-m="manual"><b>${t("Remplir manuellement")}</b><span>${t("Saisir les informations directement dans le formulaire.")}</span></button>
    </div>
    <p class="start-status" id="start-status" aria-live="polite"></p>`;
}

function renderSignin() {
  const what = { profile: "Utiliser mon Profil ALO", import: "Importer mon CV", last: "Réutiliser ma dernière candidature" }[ST.method];
  return `
    <h1>${t("Connectez-vous pour continuer")}</h1>
    <p class="ap-sub">${t("Votre choix est conservé :")} <b>${t(what)}</b>${ST.method === "import" ? ` — ${t("votre CV est déjà lu.")}` : ""} ${t("Après la connexion, vous reviendrez directement ici.")}</p>
    <div class="ap-signin">
      <button class="btn btn-linkedin btn-lg btn-block" type="button" id="ap-li">${t("Continuer avec LinkedIn")}</button>
      <div class="or"><span>${t("ou")}</span></div>
      <form class="email-row" id="ap-email"><input name="email" type="email" required autocomplete="email" placeholder="${t("Adresse e-mail")}" /><button class="btn btn-lg" type="submit">${t("Continuer avec l'e-mail")}</button></form>
      <div class="done" id="ap-msg"></div>
      <p class="legal">${t("Pas encore de compte ? Il est créé automatiquement, gratuitement.")}</p>
    </div>
    <button type="button" class="linkbtn" id="ap-back">${t("← Choisir une autre méthode")}</button>`;
}

const AUTO = { "contact.name": 'autocomplete="name" autocapitalize="words"', "contact.email": 'autocomplete="email" inputmode="email"', "contact.phone": 'autocomplete="tel" inputmode="tel" placeholder="+509 3700 0000"', "contact.city": 'autocomplete="address-level2"' };
function inp(label, path, val, type) { return `<label class="field"><span>${t(label)}</span><input data-p="${path}" value="${x(val)}" ${type ? `type="${type}"` : ""} ${AUTO[path] || ""} enterkeyhint="next" /></label>`; }
function renderForm() {
  const a = ST.app;
  const exp = a.experiences.map((e, i) => `
    <div class="ap-item ${e.include ? "" : "off"}">
      <label class="ap-inc"><input type="checkbox" data-inc="experiences:${i}" ${e.include ? "checked" : ""} /> ${t("Inclure")}</label>
      <div class="two">${inp("Poste", `experiences.${i}.role`, e.role)}${inp("Entreprise", `experiences.${i}.company`, e.company)}${inp("Début", `experiences.${i}.start`, e.start)}${inp("Fin", `experiences.${i}.end`, e.end)}</div>
      <button type="button" class="mini danger" data-rm="experiences:${i}">${t("Supprimer")}</button>
    </div>`).join("");
  const edu = a.education.map((e, i) => `
    <div class="ap-item ${e.include ? "" : "off"}">
      <label class="ap-inc"><input type="checkbox" data-inc="education:${i}" ${e.include ? "checked" : ""} /> ${t("Inclure")}</label>
      <div class="two">${inp("Diplôme", `education.${i}.degree`, e.degree)}${inp("Établissement", `education.${i}.school`, e.school)}${inp("Année", `education.${i}.year`, e.year)}</div>
      <button type="button" class="mini danger" data-rm="education:${i}">${t("Supprimer")}</button>
    </div>`).join("");
  const allSkills = [...new Set([...(a.skillsAll || []), ...a.skills])];
  const skills = allSkills.map((s) => `<label class="sk ${a.skills.includes(s) ? "on" : ""}"><input type="checkbox" data-skill="${x(s)}" ${a.skills.includes(s) ? "checked" : ""} />${x(s)}</label>`).join("");
  const qs = (JOB.questions || []).map((q, i) => `<label class="field"><span>${x(q)}</span><textarea data-ans="${i}" rows="3">${x(a.answers[q] || "")}</textarea></label>`).join("");
  const docs = (JOB.documents || []).map((d) => `
    <label class="field"><span>${x(d)}</span>${ME || DEMO ? `<input type="file" data-doc="${x(d)}" accept=".pdf,.doc,.docx,image/*" /><small class="hint-l">${t("PDF, Word ou photo prise avec votre téléphone.")}</small>${FILES[d] ? `<small class="okfile">${x(FILES[d].name)}</small>` : ""}` : `<small class="hint-l">${t("Connectez-vous à l’étape suivante pour joindre ce document.")}</small>`}</label>`).join("");
  const cvOpts = CVS.map((c) => `<label class="cvopt"><input type="radio" name="cv" value="${c.id}" ${a.cvId === c.id ? "checked" : ""} /> ${x(c.name)}</label>`).join("");
  return `
    <h1>${t("Vos informations")}</h1>
    ${ST.notice ? `<div class="ap-note">${t(ST.notice)}</div>` : ""}
    ${ST.showImported && ST.importText ? `<details class="ed-sec"><summary>${t("Texte de votre CV importé")}</summary><textarea readonly rows="8" class="imported">${x(ST.importText)}</textarea></details>` : ""}
    <section class="ap-card"><h2>${t("Coordonnées")}</h2>
      <div class="two">${inp("Nom complet", "contact.name", a.contact.name)}${inp("Numéro WhatsApp", "contact.phone", a.contact.phone, "tel")}${inp("E-mail", "contact.email", a.contact.email, "email")}${inp("Ville", "contact.city", a.contact.city)}</div>
    </section>
    ${qs ? `<section class="ap-card"><h2>${t("Questions de l’employeur")}</h2>${qs}</section>` : ""}
    ${docs ? `<section class="ap-card"><h2>${t("Documents demandés")}</h2>${docs}</section>` : ""}
    <details class="ap-card ap-fold" ${OPEN_FOLD.has("exp") ? "open" : ""} data-fold="exp"><summary><h2>${t("Expériences")}</h2><span>${a.experiences.filter((e) => e.include).length || t("facultatif")}</span></summary>${exp || `<p class="hint-l">${t("Aucune expérience pour l’instant.")}</p>`}
      <button type="button" class="btn btn-plain" data-addl="experiences">+ ${t("Ajouter une expérience")}</button></details>
    <details class="ap-card ap-fold" ${OPEN_FOLD.has("edu") ? "open" : ""} data-fold="edu"><summary><h2>${t("Formation")}</h2><span>${a.education.filter((e) => e.include).length || t("facultatif")}</span></summary>${edu || `<p class="hint-l">${t("Aucune formation pour l’instant.")}</p>`}
      <button type="button" class="btn btn-plain" data-addl="education">+ ${t("Ajouter une formation")}</button></details>
    <details class="ap-card ap-fold" ${OPEN_FOLD.has("sk") ? "open" : ""} data-fold="sk"><summary><h2>${t("Compétences pertinentes")}</h2><span>${a.skills.length || t("facultatif")}</span></summary>
      <div class="sk-row">${skills}</div>
      <form class="sk-add" id="sk-add"><input name="s" placeholder="${t("Ajouter une compétence")}" enterkeyhint="done" /><button class="btn btn-plain" type="submit">${t("Ajouter")}</button></form></details>
    <details class="ap-card ap-fold" ${OPEN_FOLD.has("cv") ? "open" : ""} data-fold="cv"><summary><h2>${t("CV")}</h2><span>${a.cvId ? x((CVS.find((c) => c.id === a.cvId) || {}).name || "") : t("facultatif")}</span></summary>
      <label class="cvopt"><input type="radio" name="cv" value="" ${!a.cvId ? "checked" : ""} /> ${t("Sans CV (le formulaire suffit)")}</label>
      ${cvOpts}
      <div class="row"><a class="btn btn-plain" href="cv.html?start=profil" target="_blank" rel="noopener">${t("Générer un CV avec l’IA")}</a>${ME ? `<button type="button" class="linkbtn" id="reload-cvs">${t("Actualiser la liste")}</button>` : ""}</div></details>
    <section class="ap-card"><h2>${t("Un mot pour l'employeur (facultatif)")}</h2><textarea data-p="message" rows="3" maxlength="1000">${x(a.message)}</textarea></section>
    <p class="ap-note err" id="ap-miss" role="alert" hidden></p>
    <div class="ap-actions">
      <button type="button" class="btn btn-plain" id="save-draft">${t("Enregistrer le brouillon")}</button>
      <button type="button" class="btn btn-lg" id="to-review">${t("Vérifier ma candidature")}</button>
    </div>`;
}

function missing() {
  const a = ST.app, m = [];
  if (!a.contact.name.trim()) m.push("Nom complet");
  if (!a.contact.phone.trim() && !a.contact.email.trim()) m.push("Numéro WhatsApp ou e-mail");
  (JOB.questions || []).forEach((q) => { if (!(a.answers[q] || "").trim()) m.push(q); });
  (JOB.documents || []).forEach((d) => { if (!FILES[d]) m.push(d); });
  return m;
}
function renderReview() {
  const a = ST.app, miss = missing();
  const list = (arr) => arr.length ? `<ul class="rv-list">${arr.map((s) => `<li>${s}</li>`).join("")}</ul>` : `<p class="hint-l">—</p>`;
  const cv = CVS.find((c) => c.id === a.cvId);
  return `
    <h1>${t("Vérifiez votre candidature")}</h1>
    ${ST.notice && ST.step === "review" ? `<div class="ap-note">${t(ST.notice)}</div>` : ""}
    <p class="ap-sub">${t("Rien n’est envoyé tant que vous n’avez pas cliqué sur « Envoyer ma candidature ».")}</p>
    ${miss.length ? `<div class="ap-note err">${t("À compléter avant l’envoi :")} ${miss.map((s) => x(t(s))).join(" · ")}</div>` : ""}
    <section class="ap-card rv"><h2>${t("Coordonnées")}</h2><p>${x(a.contact.name)}<br>${[a.contact.email, a.contact.phone, a.contact.city].filter(Boolean).map(x).join(" · ")}</p></section>
    <section class="ap-card rv"><h2>${t("Expériences")}</h2>${list(a.experiences.filter((e) => e.include).map((e) => `<b>${x(e.role)}</b> — ${x(e.company)} <span>${x([e.start, e.end].filter(Boolean).join(" – "))}</span>`))}</section>
    <section class="ap-card rv"><h2>${t("Formation")}</h2>${list(a.education.filter((e) => e.include).map((e) => `<b>${x(e.degree)}</b> — ${x(e.school)} <span>${x(e.year)}</span>`))}</section>
    <section class="ap-card rv"><h2>${t("Compétences pertinentes")}</h2><p>${a.skills.map(x).join(" · ") || "—"}</p></section>
    <section class="ap-card rv"><h2>${t("CV")}</h2><p>${cv ? x(cv.name) : t("Sans CV (le formulaire suffit)")}</p></section>
    ${(JOB.questions || []).length ? `<section class="ap-card rv"><h2>${t("Questions de l’employeur")}</h2>${(JOB.questions || []).map((q) => `<p><b>${x(q)}</b><br>${x(a.answers[q] || "—")}</p>`).join("")}</section>` : ""}
    ${(JOB.documents || []).length ? `<section class="ap-card rv"><h2>${t("Documents demandés")}</h2>${list((JOB.documents || []).map((d) => `${x(d)} : ${FILES[d] ? x(FILES[d].name) : `<em>${t("manquant")}</em>`}`))}</section>` : ""}
    ${a.message ? `<section class="ap-card rv"><h2>${t("Un mot pour l'employeur (facultatif)")}</h2><p>${x(a.message)}</p></section>` : ""}
    <label class="consent"><input type="checkbox" id="consent" ${a.saveToProfile ? "checked" : ""} /> ${t("Enregistrer ces informations (coordonnées, expériences, formations, compétences) dans mon Profil ALO pour mes prochaines candidatures.")}</label>
    ${!ME && !DEMO ? `<div class="ap-note">${t("Dernière étape : connectez-vous pour envoyer. Votre candidature est conservée.")}</div>` : ""}
    <div class="ap-actions">
      <button type="button" class="btn btn-plain" id="back-form">${t("← Modifier")}</button>
      ${!ME && !DEMO ? `<button type="button" class="btn btn-lg" id="signin-send">${t("Se connecter pour envoyer")}</button>`
                     : `<button type="button" class="btn btn-lg" id="send" ${miss.length ? "disabled" : ""}>${t("Envoyer ma candidature")}</button>`}
    </div>
    <div class="done" id="send-msg"></div>`;
}
function renderSent() {
  return `
    <div class="ap-sent">
      <h1>${t("Votre candidature a été envoyée !")}</h1>
      <p>${t("Retrouvez son évolution dans votre espace ALO.")}</p>
      <div class="row center"><a class="btn btn-lg" href="espace.html">${t("Suivre ma candidature")}</a><a class="btn btn-lg btn-outline" href="jobs.html">${t("Découvrir d’autres offres")}</a></div>
    </div>`;
}

function render() {
  const body = { start: renderStart, signin: renderSignin, form: renderForm, review: renderReview, sent: renderSent }[ST.step]();
  $("ap").innerHTML = (ST.step === "sent" ? "" : jobHead() + steps()) + `<div class="ap-body">${body}</div>`;
  wire();
}

// ---- Events ------------------------------------------------------------------------------------
function setP(path, v) { const ps = path.split("."); let o = ST.app; for (let i = 0; i < ps.length - 1; i++) o = o[isNaN(ps[i]) ? ps[i] : +ps[i]]; o[ps.at(-1)] = v; }
function wire() {
  document.querySelectorAll("[data-m]").forEach((b) => (b.onclick = () => choose(b.dataset.m)));
  const f = $("ap-file"); if (f) f.onchange = (ev) => ev.target.files[0] && choose("import", ev.target.files[0]);
  const rd = $("resume-draft"); if (rd) rd.onclick = () => { ST = { ...ST.serverDraft, serverDraft: null }; ST.step = "form"; saveLocal(); render(); };
  const back = $("ap-back"); if (back) back.onclick = () => { ST.step = "start"; saveLocal(); render(); };
  const li = $("ap-li"); if (li) li.onclick = async () => { rememberNext(); const err = await signInLinkedIn(); if (err) showMsg("ap-msg", err, true); };
  const em = $("ap-email"); if (em) em.onsubmit = async (ev) => { ev.preventDefault(); rememberNext(); const err = await signInEmail(ev.target.elements.email.value.trim());
    showMsg("ap-msg", err || t("Vérifiez votre boîte e-mail : nous vous avons envoyé un lien de connexion."), !!err); };
  const sk = $("sk-add"); if (sk) sk.onsubmit = (ev) => { ev.preventDefault(); const v = ev.target.elements.s.value.trim(); if (v && !ST.app.skills.includes(v)) { ST.app.skills.push(v); ST.app.skillsAll = [...new Set([...(ST.app.skillsAll || []), v])]; } saveLocal(); render(); };
  const rc = $("reload-cvs"); if (rc) rc.onclick = async () => { await loadCvs(); render(); };
  const sd = $("save-draft"); if (sd) sd.onclick = saveDraftServer;
  const tr = $("to-review"); if (tr) tr.onclick = () => {
    const miss = missing();
    if (miss.length) {   // say what is missing here, next to the fields, instead of at the end
      const box = $("ap-miss"); box.textContent = `${t("À compléter avant l’envoi :")} ${miss.map((m) => t(m)).join(" · ")}`; box.hidden = false;
      const a = ST.app, q = (JOB.questions || []).findIndex((z) => !(a.answers[z] || "").trim()), d = (JOB.documents || []).find((z) => !FILES[z]);
      const el = !a.contact.name.trim() ? document.querySelector('[data-p="contact.name"]') : !a.contact.phone.trim() && !a.contact.email.trim() ? document.querySelector('[data-p="contact.phone"]')
        : q >= 0 ? document.querySelector(`[data-ans="${q}"]`) : d ? document.querySelector(`[data-doc="${CSS.escape(d)}"]`) : null;
      if (el) { el.scrollIntoView({ block: "center" }); el.focus({ preventScroll: true }); el.setAttribute("aria-invalid", "true"); }
      return;
    }
    ST.step = "review"; saveLocal(); render(); scrollTo(0, 0);
  };
  const bf = $("back-form"); if (bf) bf.onclick = () => { ST.step = "form"; saveLocal(); render(); };
  const ss = $("signin-send"); if (ss) ss.onclick = () => { saveLocal(); goSignIn("postuler"); };
  const se = $("send"); if (se) se.onclick = send;
  const co = $("consent"); if (co) co.onchange = (ev) => { ST.app.saveToProfile = ev.target.checked; saveLocal(); };
}
function rememberNext() { try { localStorage.setItem("alo-next", `apply.html?id=${JOB_ID}`); } catch {} }
function showMsg(id, text, err) { const el = $(id); if (!el) return; el.textContent = text; el.classList.toggle("err", !!err); el.style.display = "block"; }

document.addEventListener("input", (ev) => {
  const el = ev.target;
  if (el.getAttribute && el.getAttribute("aria-invalid")) el.removeAttribute("aria-invalid");
  if (el.dataset.p) { setP(el.dataset.p, el.value); saveLocal(); }
  if (el.dataset.ans !== undefined) { ST.app.answers[JOB.questions[+el.dataset.ans]] = el.value; saveLocal(); }
});
document.addEventListener("change", (ev) => {
  const el = ev.target;
  if (el.dataset.inc) { const [k, i] = el.dataset.inc.split(":"); ST.app[k][+i].include = el.checked; saveLocal(); el.closest(".ap-item").classList.toggle("off", !el.checked); }
  if (el.dataset.skill !== undefined) { const s = el.dataset.skill; ST.app.skills = el.checked ? [...ST.app.skills, s] : ST.app.skills.filter((v) => v !== s); el.closest(".sk").classList.toggle("on", el.checked); saveLocal(); }
  if (el.name === "cv") { ST.app.cvId = el.value; saveLocal(); }
  if (el.dataset.doc && el.files[0]) { FILES[el.dataset.doc] = el.files[0]; render(); }
});
document.addEventListener("click", (ev) => {
  const add = ev.target.closest("[data-addl]"), rm = ev.target.closest("[data-rm]");
  if (add) { const k = add.dataset.addl; ST.app[k].push(k === "experiences" ? { role: "", company: "", start: "", end: "", bullets: [], include: true } : { degree: "", school: "", year: "", include: true }); saveLocal(); render(); }
  if (rm) { const [k, i] = rm.dataset.rm.split(":"); ST.app[k].splice(+i, 1); saveLocal(); render(); }
});

async function saveDraftServer() {
  saveLocal();
  if (!ME || DEMO) { flashAp(t("Brouillon enregistré sur cet appareil.")); return; }
  const { serverDraft, ...data } = ST;
  const { error } = await db().from("application_drafts").upsert({ job_id: JOB.id, data: { ...data, step: "form" }, updated_at: new Date().toISOString() });
  flashAp(error ? t("Brouillon enregistré sur cet appareil.") : t("Brouillon enregistré. Reprenez-le depuis votre espace ALO."));
}
function flashAp(msg) { const el = $("ap-flash"); el.textContent = msg; el.className = "cv-flash show"; clearTimeout(flashAp.tm); flashAp.tm = setTimeout(() => (el.className = "cv-flash"), 3000); }

async function send() {
  const a = ST.app, btn = $("send");
  if (missing().length) return;
  btn.disabled = true; btn.textContent = t("Envoi…");
  try {
    if (!DEMO) {
      const c = db();
      // 1. Documents go to the person's private folder.
      const files = {};
      for (const [doc, file] of Object.entries(FILES)) {
        const path = `${ME.id}/${JOB.id}/${Date.now()}-${file.name.replace(/[^\w.\-]+/g, "_")}`;
        const { error } = await c.storage.from("application-files").upload(path, file);
        if (error) throw error;
        files[doc] = { path, name: file.name };
      }
      const cv = CVS.find((v) => v.id === a.cvId);
      const sent = {
        contact: a.contact, experiences: a.experiences.filter((e) => e.include), education: a.education.filter((e) => e.include),
        skills: a.skills, skillsAll: a.skillsAll,
      };
      const row = { job_id: JOB.id, name: a.contact.name, phone: a.contact.phone || a.contact.email, email: a.contact.email || ME.email, message: a.message,
        job_title: JOB.title, company: JOB.company, data: sent, answers: a.answers, files, cv_version_id: cv ? cv.id : null, cv_snapshot: cv ? cv.data : null };
      let { error } = await c.from("applications").insert(row);
      if (error && error.code === "PGRST204") { // database not updated yet: send the basic fields
        ({ error } = await c.from("applications").insert({ job_id: JOB.id, name: row.name, phone: row.phone, email: row.email, message: row.message }));
      }
      if (error && error.code === "23505") { showMsg("send-msg", t("Vous avez déjà postulé à cette offre."), true); btn.disabled = false; btn.textContent = t("Envoyer ma candidature"); return; }
      if (error) throw error;
      // 2. Only with the person's agreement: keep the reusable information in the Profil ALO.
      if (a.saveToProfile) {
        const prev = (await fetchProfile()) || {};
        const merged = { ...prev, name: a.contact.name, email: a.contact.email, phone: a.contact.phone, city: a.contact.city,
          experiences: sent.experiences.map(({ include, ...e }) => e), education: sent.education.map(({ include, ...e }) => ({ description: "", ...e })),
          skills: [...new Set([...(prev.skills || []), ...a.skills])] };
        await c.from("alo_profiles").upsert({ data: merged, updated_at: new Date().toISOString() });
      }
      await c.from("application_drafts").delete().eq("job_id", JOB.id);
    }
    APPLIED.add(JOB.id);
    if (DEMO) { try { localStorage.setItem("alo-demo-applied", JSON.stringify([...APPLIED])); } catch {} }
    clearLocal();
    ST.step = "sent"; render(); scrollTo(0, 0);
  } catch (err) {
    console.error("ALO: send failed", err);
    showMsg("send-msg", t("Erreur. Vérifiez votre connexion et réessayez."), true);
    btn.disabled = false; btn.textContent = t("Envoyer ma candidature");
  }
}

async function loadCvs() {
  CVS = [];
  if (!ME || DEMO) return;
  const { data } = await db().from("cv_versions").select("id,name,data,updated_at").order("updated_at", { ascending: false });
  CVS = data || [];
}
function demoProfile() {
  return { name: "Marie-Jeanne Pierre", email: "mj.pierre@exemple.com", phone: "+509 3700 0000", city: "Delmas",
    experiences: [{ role: "Assistante comptable", company: "Cabinet Fanmi & Associés", start: "2022", end: "Aujourd'hui", bullets: [] },
                  { role: "Caissière", company: "Supermarché Lakay", start: "2020", end: "2022", bullets: [] }],
    education: [{ degree: "Licence en comptabilité", school: "Université d'État d'Haïti", year: "2022" }],
    skills: ["Comptabilité", "Excel", "Sage", "Service client"] };
}

async function initApply() {
  await Promise.all([loadJobs(), loadUserState()]);
  ME = USER;
  JOB = JOBS.find((j) => String(j.id) === JOB_ID);
  if (!JOB) { $("ap").innerHTML = `<div class="empty">${t("Cette offre n'est plus disponible.")} <a class="link" href="jobs.html">${t("Voir les offres")}</a></div>`; return; }
  if (DEMO && !JOB.questions) { JOB.questions = ["Pourquoi ce poste vous intéresse-t-il ?"]; JOB.documents = ["Copie du diplôme"]; }
  if (APPLIED.has(JOB.id)) { $("ap").innerHTML = `<div class="ap-sent"><h1>${t("Vous avez déjà postulé à cette offre.")}</h1><div class="row center"><a class="btn btn-lg" href="espace.html">${t("Suivre ma candidature")}</a><a class="btn btn-lg btn-outline" href="jobs.html">${t("Découvrir d’autres offres")}</a></div></div>`; return; }
  await loadCvs();
  const hadLocal = loadLocal();
  if (ME && !DEMO) {
    const { data } = await db().from("application_drafts").select("data").eq("job_id", JOB.id).maybeSingle();
    if (data && data.data && !hadLocal) ST.serverDraft = data.data;
  }
  // Back from signing in: continue exactly where the person was.
  if (ST.step === "signin" && ME) { await runMethod(); return; }
  render();
}
window.onLang = () => { if (JOB) render(); };
initApply();
