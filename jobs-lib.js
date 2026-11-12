// alo.ht — job offers: cards, details, saving and applying.
// Used by jobs.html (list + details) and job.html (full page). Needs app.js first.

const EXPERIENCES = ["Débutant", "1 à 3 ans", "3 à 5 ans", "5 ans et plus"];
const CONTRACTS = ["Temps plein", "Temps partiel", "Contrat", "Stage"];
const SALARY_STEPS = [20000, 40000, 60000];

const ICON = {
  pin: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  case: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5h6v2"/></svg>',
  money: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/></svg>',
  clock: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  level: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 20V14M10 20V9M16 20V4"/></svg>',
  save: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M6 3h12v18l-6-4-6 4z"/></svg>',
  saved: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M6 3h12v18l-6-4-6 4z"/></svg>',
  check: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 8.5 3.2 3L13 4.5"/></svg>',
};

// ---- Small pieces ---------------------------------------------------------
function salaryText(j) { return j.pay ? j.pay : t("Salaire non indiqué"); }
function logo(j, size) {
  if (j.logo_url) return `<img class="jlogo ${size || ""}" src="${esc(j.logo_url)}" alt="" />`;
  const initials = j.company.split(/\s+/).filter((w) => /^[A-ZÀ-Ý]/.test(w)).slice(0, 2).map((w) => w[0]).join("");
  return `<span class="jlogo ${size || ""}" style="background:${AVATAR_COLORS[j.id % AVATAR_COLORS.length]}">${esc(initials)}</span>`;
}
function jobUrl(j) { return `job.html?id=${encodeURIComponent(j.id)}${DEMO ? "&demo=1" : ""}`; }

// ---- Signed-in state: saved offers + applications ---------------------------
const SAVED = new Set();
const APPLIED = new Set();
let USER = null;

async function loadUserState() {
  USER = await currentUser();
  if (DEMO) { // demo: remember saves in this browser only
    try { JSON.parse(localStorage.getItem("alo-demo-saved") || "[]").forEach((id) => SAVED.add(id)); } catch {}
    try { JSON.parse(localStorage.getItem("alo-demo-applied") || "[]").forEach((id) => APPLIED.add(id)); } catch {}
    return;
  }
  if (!USER) return;
  const c = db();
  const [s, a] = await Promise.all([
    c.from("saved_jobs").select("job_id"),
    c.from("applications").select("job_id"),
  ]);
  (s.data || []).forEach((r) => SAVED.add(r.job_id));
  (a.data || []).forEach((r) => APPLIED.add(r.job_id));
}

// Send visitors to sign in, then bring them back here.
function goSignIn(reason) {
  try { localStorage.setItem("alo-next", location.pathname.split("/").pop() + location.search); } catch {}
  location.href = "signin.html?pour=" + encodeURIComponent(reason || "");
}

async function toggleSave(j) {
  if (!USER && !DEMO) { goSignIn("enregistrer"); return; }
  const on = SAVED.has(j.id);
  on ? SAVED.delete(j.id) : SAVED.add(j.id);
  if (DEMO) { try { localStorage.setItem("alo-demo-saved", JSON.stringify([...SAVED])); } catch {} return; }
  const c = db();
  const { error } = on
    ? await c.from("saved_jobs").delete().eq("job_id", j.id)
    : await c.from("saved_jobs").insert({ job_id: j.id });
  if (error) { console.error("ALO: save failed", error); on ? SAVED.add(j.id) : SAVED.delete(j.id); }
}

// ---- Card (list) ---------------------------------------------------------------
function jobCard(j, active) {
  return `
  <article class="jcard ${active ? "active" : ""}" data-id="${j.id}">
    <a class="jcard-link" href="${jobUrl(j)}" aria-label="${esc(j.title)} — ${esc(j.company)}"></a>
    <div class="jcard-top">
      ${logo(j)}
      <div class="jcard-co"><b>${esc(j.company)}</b><span>${ago(j.days)}</span></div>
      <button class="save-btn ${SAVED.has(j.id) ? "on" : ""}" type="button" data-save="${j.id}" aria-pressed="${SAVED.has(j.id)}" title="${t("Enregistrer l'offre")}">${SAVED.has(j.id) ? ICON.saved : ICON.save}</button>
    </div>
    <h3>${esc(j.title)}</h3>
    <div class="jmeta">
      <span>${esc(j.city)}</span>
      <span>${t(j.type)}</span>
      ${j.pay ? `<span class="pay">${esc(j.pay)}</span>` : ""}
    </div>
    ${j.days <= 1 ? `<span class="jnew">${t("Nouveau")}</span>` : ""}
    ${APPLIED.has(j.id) ? `<span class="jdone">${ICON.check}${t("Déjà postulé")}</span>` : ""}
  </article>`;
}

// ---- Details (panel or full page) -----------------------------------------------
function list(items) { return `<ul class="jlist">${items.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`; }
function jobDetail(j, opts = {}) {
  const applied = APPLIED.has(j.id), saved = SAVED.has(j.id);
  return `
  <div class="jd-head">
    ${opts.nav || ""}
    <div class="jd-title">
      ${logo(j, "lg")}
      <div>
        <h1 class="jd-h">${esc(j.title)}</h1>
        <div class="jd-co">${esc(j.company)}</div>
      </div>
    </div>
    <div class="jd-facts">
      <span>${esc(j.city)}</span>
      <span>${t(j.type)}</span>
      <span class="${j.pay ? "pay" : ""}">${esc(salaryText(j))}</span>
      ${j.experience ? `<span>${t(j.experience)}</span>` : ""}
      ${j.work_mode && j.work_mode !== "Sur site" ? `<span>${t(j.work_mode)}</span>` : ""}
      ${j.positions > 1 ? `<span class="pay">${j.positions} ${t("postes à pourvoir")}</span>` : ""}
      <span>${ago(j.days)}</span>
      ${j.deadline ? `<span>${t("Date limite")} : ${new Date(j.deadline + "T12:00").toLocaleDateString(LANG === "en" ? "en-US" : "fr-FR", { day: "numeric", month: "long" })}</span>` : ""}
    </div>
    <div class="jd-actions">
      ${applied
        ? `<span class="btn btn-lg btn-done">${ICON.check}${t("Déjà postulé")}</span>`
        : `<button class="btn btn-lg" type="button" data-apply="${j.id}">${t("Postuler avec mon Profil ALO")}</button>`}
      <button class="btn btn-lg btn-outline save-big ${saved ? "on" : ""}" type="button" data-save="${j.id}" aria-pressed="${saved}">${saved ? ICON.saved : ICON.save}<span>${saved ? t("Enregistrée") : t("Enregistrer")}</span></button>
      ${opts.open ? `<a class="link jd-open" href="${jobUrl(j)}">${t("Ouvrir l'offre")} →</a>` : ""}
    </div>
  </div>
  <div class="jd-body">
    <section><h2>${t("Description du poste")}</h2><p>${esc(j.about)}</p></section>
    ${j.responsibilities && j.responsibilities.length ? `<section><h2>${t("Responsabilités")}</h2>${list(j.responsibilities)}</section>` : ""}
    ${j.deliverables && j.deliverables.length ? `<section><h2>${t("Livrables attendus")}</h2>${list(j.deliverables)}</section>` : ""}
    ${j.needs && j.needs.length ? `<section><h2>${t("Qualifications")}</h2>${list(j.needs)}</section>` : ""}
    ${j.skills && j.skills.length ? `<section><h2>${t("Compétences demandées")}</h2>${list(j.skills)}</section>` : ""}
    ${j.benefits && j.benefits.length ? `<section><h2>${t("Avantages")}</h2>${list(j.benefits)}</section>` : ""}
  </div>`;
}

function similarJobs(j, n = 3) {
  return JOBS.filter((x) => x.id !== j.id)
    .map((x) => ({ x, score: (x.category === j.category ? 2 : 0) + (x.city === j.city ? 1 : 0) + (x.type === j.type ? 0.5 : 0) }))
    .filter((r) => r.score > 0).sort((a, b) => b.score - a.score || a.x.days - b.x.days)
    .slice(0, n).map((r) => r.x);
}

// ---- Apply (sign-in first, then a short form prefilled from the Profil ALO) --------
function ensureApplyModal() {
  if (document.getElementById("apply-modal")) return;
  document.body.insertAdjacentHTML("beforeend", `
  <div class="modal" id="apply-modal" role="dialog" aria-modal="true" aria-labelledby="am-title">
    <form class="box" id="am-form">
      <h3 id="am-title"></h3>
      <p class="sub" id="am-sub"></p>
      <div class="am-profile">${ICON.check}<span>${t("Votre Profil ALO sera transmis à l'employeur.")}</span><b id="am-email"></b></div>
      <label class="field"><span>${t("Nom complet")}</span><input name="name" required autocomplete="name" /></label>
      <label class="field"><span>${t("Numéro WhatsApp")}</span><input name="phone" required type="tel" placeholder="+509 3xxx xxxx" autocomplete="tel" /></label>
      <label class="field"><span>${t("Un mot pour l'employeur (facultatif)")}</span><textarea name="msg" rows="3" maxlength="1000"></textarea></label>
      <div class="row">
        <button class="btn" type="submit">${t("Envoyer ma candidature")}</button>
        <button class="btn btn-plain" type="button" id="am-cancel">${t("Annuler")}</button>
      </div>
      <div class="done" id="am-done"></div>
    </form>
  </div>`);
  const modal = document.getElementById("apply-modal"), f = document.getElementById("am-form");
  const close = () => modal.classList.remove("open");
  document.getElementById("am-cancel").onclick = close;
  modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  f.addEventListener("submit", async (e) => {
    e.preventDefault();
    const j = JOBS.find((x) => String(x.id) === modal.dataset.id);
    const btn = f.querySelector("button[type=submit]"), done = document.getElementById("am-done");
    const name = f.elements.name.value.trim(), phone = f.elements.phone.value.trim();
    try { localStorage.setItem("alo-applicant", JSON.stringify({ name, phone })); } catch {}
    btn.disabled = true;
    const err = await saveApplication(j.id, name, phone, f.elements.msg.value.trim(), USER && USER.email);
    btn.disabled = false;
    done.textContent = err || t("Candidature envoyée ! L'employeur vous contactera.");
    done.classList.toggle("err", !!err);
    done.style.display = "block";
    if (!err) {
      APPLIED.add(j.id);
      if (DEMO) { try { localStorage.setItem("alo-demo-applied", JSON.stringify([...APPLIED])); } catch {} }
      setTimeout(() => { close(); if (window.onJobsChanged) window.onJobsChanged(); }, 1400);
    }
  });
}

function openApply(j) {
  location.href = `apply.html?id=${encodeURIComponent(j.id)}${DEMO ? "&demo=1" : ""}`;
}
function openApplyModal(j) { // previous quick form, kept for reference
  ensureApplyModal();
  const modal = document.getElementById("apply-modal"), f = document.getElementById("am-form");
  modal.dataset.id = String(j.id);
  document.getElementById("am-title").textContent = j.title;
  document.getElementById("am-sub").textContent = `${j.company} · ${j.city}`;
  document.getElementById("am-email").textContent = (USER && USER.email) || "";
  document.getElementById("am-done").style.display = "none";
  f.reset();
  try { const p = JSON.parse(localStorage.getItem("alo-applicant") || "{}"); f.elements.name.value = p.name || ""; f.elements.phone.value = p.phone || ""; } catch {}
  modal.classList.add("open");
  (f.elements.name.value ? f.elements.msg : f.elements.name).focus();
}

// One click handler for save/apply buttons anywhere on the page.
document.addEventListener("click", async (e) => {
  const s = e.target.closest("[data-save]");
  if (s) {
    e.preventDefault(); e.stopPropagation();
    const j = JOBS.find((x) => String(x.id) === s.dataset.save);
    if (j) { await toggleSave(j); if (window.onJobsChanged) window.onJobsChanged(); }
    return;
  }
  const a = e.target.closest("[data-apply]");
  if (a) {
    e.preventDefault();
    const j = JOBS.find((x) => String(x.id) === a.dataset.apply);
    if (j) openApply(j);
  }
});
