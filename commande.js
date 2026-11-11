// alo.ht — employer checkout: one order, three purchasing paths (pay now · quote for approval · deferred payment request).
// The database (supabase-update-10.sql) recalculates the price and decides approval, payment and activation.
// This page never marks anything as paid: a bank transfer is confirmed by the ALO team.

const $ = (id) => document.getElementById(id);
const x = (s) => esc(s == null ? "" : String(s));
const KEY = "alo-checkout";
const STEPS = ["Votre commande", "Votre organisation", "Mode d’achat"];
const Q = new URLSearchParams(location.search);
let CO = { pkg: "essential", postings: 1, positions: 1, extraDays: 0, addons: [], step: 1, billing: {}, path: "", po: "", supplier: "", deferred: {}, orderId: null, sig: null, done: null };
let USER_OK = false, ROLE_OK = true, SETTINGS = {}, BUSY = false, ERR = "";

try { Object.assign(CO, JSON.parse(localStorage.getItem(KEY) || "{}")); } catch {}
if (Q.get("formule")) { CO.pkg = Q.get("formule"); CO.addons = []; CO.done = null; CO.step = 1; }
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(CO)); } catch {} };
const sel = () => ({ pkg: CO.pkg, postings: CO.postings, positions: CO.positions, extraDays: CO.extraDays, addons: CO.addons });
const sig = () => JSON.stringify(sel());

// ---------- Summary (beside the steps on desktop, folded at the top on phones) ----------
const TIMING = {
  payer: ["Paiement maintenant, par virement bancaire.", "Services activés dès que l’équipe ALO confirme la réception du paiement."],
  devis: ["Paiement après la validation interne de votre devis.", "Services activés après le paiement confirmé."],
  differe: ["Paiement à la date convenue, si ALO accepte votre demande.", "Services activés après l’accord d’ALO et l’acceptation des conditions."],
};
function summary() {
  const q = quote(sel()), pk = catItem(CO.pkg) || {};
  const tax = SETTINGS.tax_note ? t(SETTINGS.tax_note) : t("Taxes éventuelles : confirmées par ALO avant tout paiement.");
  return `
    <div class="pj-sum-h">${x(pk.name)}</div>
    ${q.lines.map((l) => `<div class="pj-line sm"><span>${x(l.label)}</span><span>${l.included ? t("Déjà inclus") : l.amount == null ? t("Sur devis") : usd(l.amount)}</span></div>`).join("")}
    ${q.needsQuote ? `<div class="tf-total sub"><span>${t("Sous-total chiffré")}</span><b>${usd(q.total)}</b></div><p class="tf-unconfirmed">${t("Total non confirmé : l’équipe ALO vous enverra le montant final avant tout paiement.")}</p>`
      : `<div class="tf-total"><span>${t("Total")}</span><b>${usd(q.total)}</b></div>`}
    <p class="co-small">${t("Montants en dollars US.")} ${tax}</p>
    <p class="co-small">${q.n} ${q.n > 1 ? t("offres") : t("offre")} · ${q.v} ${q.v > 1 ? t("postes") : t("poste")} · ${q.days} ${t("jours de publication par offre")}</p>
    ${CO.path ? `<div class="co-sum-path"><b>${t(ORDER_PATHS[CO.path])}</b><span>${t(TIMING[CO.path][0])}</span><span>${t(TIMING[CO.path][1])}</span></div>` : ""}
    <p class="co-small">${t("Paiement unique. Aucun renouvellement automatique.")}</p>`;
}

// ---------- Step 1: package and extras ----------
function step1() {
  const pk = catItem(CO.pkg) || {}, blk = (catItem("extra_days") || {}).days || 15;
  const extras = ADDONS().filter((a) => !["extra_posting", "extra_position", "extra_days"].includes(a.id));
  return `
    <div class="field"><span>${t("Formule")}</span><div class="co-packs">${PACKAGES().map((p) => `
      <label class="co-pack ${CO.pkg === p.id ? "on" : ""}"><input type="radio" name="pkg" value="${p.id}" ${CO.pkg === p.id ? "checked" : ""} />
        ${CO.pkg === p.id ? `<em class="co-on">${t("Choisi")}</em>` : ""}<b>${x(p.name)}</b><span>${p.price_usd == null ? t("Sur devis") : `${t("À partir de")} ${usd(p.price_usd)}`}</span>
        <small>${p.price_usd == null ? t("Offres, postes et durée sur mesure") : `${p.postings} ${t("offre")} · ${p.days} ${t("jours")}`}</small></label>`).join("")}</div></div>
    <ul class="co-benefits">${packageHighlights(CO.pkg).map((f) => `<li>${x(t(f.name))}${f.live ? "" : ` <span class="soon">${t("Bientôt")}</span>`}</li>`).join("")}</ul>
    <a class="link co-all" href="fonctionnalites.html#employeurs" target="_blank" rel="noopener">${t("Voir toutes les fonctionnalités")}</a>
    <div class="three-f">
      <label class="field"><span>${t("Offres d’emploi")}</span><input name="postings" type="number" min="1" max="500" value="${CO.postings}" inputmode="numeric" /></label>
      <label class="field"><span>${t("Postes à pourvoir au total")}</span><input name="positions" type="number" min="1" max="5000" value="${CO.positions}" inputmode="numeric" /></label>
      <label class="field"><span>${t("Durée de publication")}</span><select name="extraDays">${[0, 1, 2, 3, 4].map((k) => `<option value="${k}" ${CO.extraDays === k ? "selected" : ""}>${(pk.days || 30) + k * blk} ${t("jours")}${k ? ` (+${k * blk})` : ""}</option>`).join("")}</select></label>
    </div>
    <div class="field"><span>${t("Options")}</span>
      <div class="co-extras">${extras.map((a) => {
        const inc = (pk.includes || []).includes(a.id), live = addonLive(a), on = !inc && live && CO.addons.includes(a.id);
        return `<label class="tf-addon ${inc ? "inc" : ""} ${live ? "" : "off"} ${on ? "on" : ""}"><input type="checkbox" name="addon" value="${a.id}" ${inc || on ? "checked" : ""} ${inc || !live ? "disabled" : ""} />
          <span>${x(t(a.name))}<small>${inc ? "" : x(t(a.unit || ""))}</small></span>
          <em>${inc && !live ? t("Inclus, bientôt disponible") : inc ? t("Déjà inclus") : !live ? t("Bientôt") : a.price_usd == null || a.id === "campaign" ? t("Sur devis") : `+ ${usd(a.price_usd)}`}</em></label>`; }).join("")}</div></div>`;
}

// ---------- Step 2: organization and billing ----------
function step2() {
  if (!USER_OK) return `<div class="co-signin"><p>${t("Connectez-vous ou créez votre compte employeur pour continuer. Votre sélection est conservée.")}</p>
    <a class="btn btn-lg" href="signin.html?pour=employeur" data-act="signin">${t("Connexion")}</a></div>`;
  if (!ROLE_OK) return `<div class="co-signin"><p>${t("Seul le propriétaire du compte employeur peut passer une commande. Partagez ce lien avec lui ou elle.")}</p></div>`;
  const b = CO.billing, f = (k, label, attrs = "") => `<label class="field"><span>${t(label)}</span><input name="b_${k}" value="${x(b[k])}" ${attrs} /></label>`;
  return `
    <div class="two">${f("organization", "Entreprise ou organisation", 'required minlength="2" maxlength="160" autocomplete="organization"')}${f("contact", "Personne responsable de la facturation", 'required minlength="2" maxlength="120" autocomplete="name"')}</div>
    <div class="two">${f("email", "E-mail de facturation", 'type="email" required maxlength="160" autocomplete="email"')}${f("phone", "Téléphone / WhatsApp", 'type="tel" maxlength="30" autocomplete="tel"')}</div>
    <div class="two">${f("address", "Adresse de facturation", 'maxlength="240" autocomplete="street-address"')}${f("tax_id", "Numéro d’identification fiscale (NIF), si nécessaire", 'maxlength="40"')}</div>
    <label class="pq-consent"><input type="checkbox" name="b_proc_other" ${b.proc_other ? "checked" : ""} /><span>${t("Le contact des achats est une autre personne")}</span></label>
    ${b.proc_other ? `<div class="two">${f("proc_name", "Contact des achats", 'maxlength="120"')}${f("proc_email", "E-mail du contact des achats", 'type="email" maxlength="160"')}</div>` : ""}
    <label class="field"><span>${t("Référence interne ou numéro de bon de commande (facultatif)")}</span><input name="po" value="${x(CO.po)}" maxlength="80" /></label>`;
}

// ---------- Step 3: purchasing path ----------
function step3() {
  const q = quote(sel()), price = q.needsQuote ? null : q.total;
  const card = (id, title, text, extra = "", disabled = "") => `
    <label class="co-path ${CO.path === id ? "on" : ""} ${disabled ? "off" : ""}"><input type="radio" name="path" value="${id}" ${CO.path === id ? "checked" : ""} ${disabled ? "disabled" : ""} />
      ${CO.path === id ? `<em class="co-on">${t("Choisi")}</em>` : ""}<b>${t(title)}</b><span>${t(text)}</span>${disabled ? `<small>${t(disabled)}</small>` : ""}</label>
    ${CO.path === id && extra ? `<div class="co-path-more">${extra}</div>` : ""}`;
  const d = CO.deferred;
  return `<div class="co-paths" role="radiogroup" aria-label="${t("Mode d’achat")}">
    ${card("payer", "Payer maintenant", "Réglez la commande par virement bancaire. Vos services sont activés dès la confirmation du paiement.", "",
      price == null ? "Disponible une fois le montant confirmé par devis." : "")}
    ${card("devis", "Obtenir un devis pour validation", "Téléchargez un devis aux prix standards pour votre validation interne, puis renvoyez le bon de commande ou le devis approuvé.",
      `${xpButton("xp-fournisseur", t("Besoin d’un dossier fournisseur ?"))}<div class="xp" id="xp-fournisseur" ${xpOpen("xp-fournisseur") || CO.supplier ? "" : "hidden"}>
        <label class="field"><span>${t("Documents demandés par votre service des achats")}</span><textarea name="supplier" rows="3" maxlength="2000" placeholder="${t("Ex. attestation fiscale, statuts, coordonnées bancaires certifiées")}">${x(CO.supplier)}</textarea></label></div>`)}
    ${card("differe", "Demander un paiement différé", "Votre organisation souhaite régler après activation des services ? Demandez un paiement différé, soumis à l’accord d’ALO.",
      `<div class="two"><label class="field"><span>${t("Date de paiement souhaitée")}</span><input name="d_date" type="date" value="${x(d.requested_date)}" required /></label>
        <label class="field"><span>${t("Conditions souhaitées (facultatif)")}</span><input name="d_terms" maxlength="120" value="${x(d.terms)}" placeholder="${t("Ex. paiement à 30 jours")}" /></label></div>
       <label class="field"><span>${t("Raison de la demande")}</span><textarea name="d_reason" rows="2" maxlength="1000" required>${x(d.reason)}</textarea></label>
       <label class="field"><span>${t("Bon de commande ou justificatif (facultatif, PDF ou image)")}</span><input name="d_file" type="file" accept=".pdf,image/*" /></label>`)}
  </div>`;
}
function actionLabel() {
  const q = quote(sel());
  return { payer: `${t("Payer")} ${q.needsQuote ? "" : usd(q.total)}`, devis: t("Obtenir mon devis"), differe: t("Envoyer ma demande") }[CO.path] || t("Choisissez un mode d’achat");
}

// ---------- After submission ----------
function doneView() {
  const o = CO.done, back = `<div class="row"><a class="btn btn-plain" href="employeur.html#achats">${t("Voir mes achats et factures")}</a><button class="linkbtn" type="button" data-act="new">${t("Nouvelle commande")}</button></div>`;
  if (o.path === "payer") return `<section class="ap-card co-done"><h2>${t("Commande enregistrée")}</h2>
    <p>${t("Pour régler votre commande, faites un virement bancaire avec la référence ci-dessous.")}</p>${transferBox(o, SETTINGS)}
    <p class="hint-l">${t("Ensuite, publiez votre offre : elle est vérifiée par l’équipe ALO avant sa mise en ligne, et sa durée de publication commence le jour où elle est en ligne.")}</p>
    <div class="row"><a class="btn" href="post.html?formule=${x(o.package)}">${t("Publier une offre")}</a></div>${back}</section>`;
  if (o.path === "devis") return `<section class="ap-card co-done"><h2>${t("Votre devis est prêt pour validation interne.")}</h2>
    <p>${t("Référence")} : <b>${x(o.reference)}</b></p>
    <div class="row"><a class="btn" href="devis.html?id=${x(o.id)}" target="_blank" rel="noopener">${t("Télécharger le devis")}</a></div>
    <p class="hint-l">${t("Une fois le devis validé, ajoutez votre bon de commande ou le devis approuvé dans « Achats et factures ». L’équipe ALO l’examine, puis le paiement suit le processus convenu. Les services sont activés après le paiement confirmé.")}</p>${back}</section>`;
  return `<section class="ap-card co-done"><h2>${t("Demande reçue.")}</h2>
    <p><b>${t("Aucun paiement différé n’est accordé avant validation par ALO.")}</b></p>
    <p>${t("Référence")} : <b>${x(o.reference)}</b></p>
    <p class="hint-l">${t("L’équipe ALO examine votre demande. Elle peut l’accepter avec des conditions précises, vous demander des informations ou proposer un paiement avant activation. Vous suivez la réponse dans « Achats et factures ».")}</p>${back}</section>`;
}

// ---------- Layout ----------
function draw() {
  if (CO.done) { $("co").innerHTML = doneView(); return; }
  const q = quote(sel());
  $("co").innerHTML = `
    <details class="co-sum-m"><summary><span>${t("Récapitulatif")}</span><b>${q.needsQuote ? t("Sur devis") : usd(q.total)}</b></summary><div class="co-sum">${summary()}</div></details>
    <div class="co-grid">
      <form class="co-main" id="co-form" novalidate>
        <ol class="co-steps">${STEPS.map((s, i) => `<li class="${i + 1 === CO.step ? "now" : i + 1 < CO.step ? "done" : ""}" ${i + 1 === CO.step ? 'aria-current="step"' : ""}><span>${i + 1}</span>${t(s)}</li>`).join("")}</ol>
        <section class="ap-card co-step"><h2>${t(STEPS[CO.step - 1])}</h2>
          ${CO.step === 1 ? step1() : CO.step === 2 ? step2() : step3()}
          <p class="ap-err" id="co-err" role="alert" ${ERR ? "" : "hidden"}>${x(ERR)}</p>
          <div class="co-nav">
            ${CO.step > 1 ? `<button class="btn btn-plain" type="button" data-act="back">${t("Retour")}</button>` : "<span></span>"}
            ${CO.step < 3 ? (CO.step === 2 && (!USER_OK || !ROLE_OK) ? "" : `<button class="btn btn-lg" type="submit">${t("Continuer")}</button>`)
              : `<button class="btn btn-lg" type="submit" ${CO.path && !BUSY ? "" : "disabled"} ${BUSY ? 'aria-busy="true"' : ""}>${BUSY ? t("Envoi en cours…") : x(actionLabel())}</button>`}
          </div>
        </section>
      </form>
      <aside class="co-sum co-sum-d" aria-label="${t("Récapitulatif")}">${summary()}</aside>
    </div>`;
  ERR = "";
}

// ---------- Reading the form ----------
function readForm() {
  const f = $("co-form"); if (!f) return;
  const v = (n) => f.elements[n] ? f.elements[n].value.trim() : undefined;
  if (CO.step === 1) {
    CO.postings = Math.max(1, Math.min(500, +v("postings") || 1));
    CO.positions = Math.max(CO.postings, Math.min(5000, +v("positions") || 1));
    CO.extraDays = +v("extraDays") || 0;
    CO.addons = [...f.querySelectorAll("input[name=addon]:checked:not(:disabled)")].map((i) => i.value);
  }
  if (CO.step === 2 && USER_OK && ROLE_OK) {
    ["organization", "contact", "email", "phone", "address", "tax_id", "proc_name", "proc_email"].forEach((k) => { if (f.elements["b_" + k]) CO.billing[k] = v("b_" + k); });
    CO.billing.proc_other = !!(f.elements.b_proc_other && f.elements.b_proc_other.checked);
    CO.po = v("po") || "";
  }
  if (CO.step === 3) {
    if (f.elements.supplier) CO.supplier = v("supplier");
    if (f.elements.d_date) CO.deferred = { requested_date: v("d_date"), terms: v("d_terms"), reason: v("d_reason") };
  }
  save();
}
function check() {
  const f = $("co-form");
  if (CO.step === 2) {
    const b = CO.billing;
    if (!b.organization || b.organization.length < 2) return [t("Indiquez le nom de l’entreprise ou de l’organisation."), "b_organization"];
    if (!b.contact || b.contact.length < 2) return [t("Indiquez la personne responsable de la facturation."), "b_contact"];
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(b.email || "")) return [t("Indiquez un e-mail de facturation valide."), "b_email"];
    if (b.proc_other && b.proc_email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(b.proc_email)) return [t("Indiquez un e-mail valide pour le contact des achats."), "b_proc_email"];
  }
  if (CO.step === 3) {
    if (!CO.path) return [t("Choisissez un mode d’achat."), null];
    if (CO.path === "payer" && quote(sel()).needsQuote) return [t("Le montant doit d’abord être confirmé par devis."), null];
    if (CO.path === "differe") {
      if (!CO.deferred.requested_date) return [t("Indiquez la date de paiement souhaitée."), "d_date"];
      if (!CO.deferred.reason) return [t("Indiquez la raison de la demande."), "d_reason"];
      const file = f.elements.d_file && f.elements.d_file.files[0];
      if (file && file.size > 10 * 1024 * 1024) return [t("Le fichier dépasse 10 Mo."), "d_file"];
    }
  }
  return null;
}
function fail(msg, field) {
  ERR = msg; draw();
  const el = field && $("co-form").elements[field]; if (el) { el.setAttribute("aria-invalid", "true"); el.focus(); }
}

// ---------- Submitting (one order, never twice) ----------
async function submit() {
  const file = $("co-form").elements.d_file && $("co-form").elements.d_file.files[0];
  BUSY = true; draw();
  try {
    let ref, oid = CO.orderId;
    if (DEMO) { ref = "ALO-2026-00042"; oid = "demo"; }
    else {
      const c = db();
      if (oid && CO.sig !== sig()) { try { await c.rpc("cancel_my_order", { p_order: oid }); } catch {} oid = null; } // selection changed: replace the unpaid draft
      if (!oid) {
        const r = await c.rpc("create_order", { p_package: CO.pkg, p_postings: CO.postings, p_positions: CO.positions, p_extra_days: CO.extraDays, p_addons: CO.addons, p_note: null });
        if (r.error) throw r.error;
        oid = r.data; CO.orderId = oid; CO.sig = sig(); save();
      }
      const r2 = await c.rpc("submit_order", { p_order: oid, p_path: CO.path, p_billing: CO.billing, p_po: CO.po || null, p_supplier_docs: CO.path === "devis" ? CO.supplier || null : null,
        p_deferred: CO.path === "differe" ? CO.deferred : null });
      if (r2.error) throw r2.error;
      ref = r2.data;
      if (file) {
        const path = `${oid}/${Date.now()}-${file.name.replace(/[^\w.-]+/g, "_").slice(-80)}`;
        const up = await c.storage.from("order-documents").upload(path, file, { upsert: false });
        if (!up.error) await c.rpc("add_order_document", { p_order: oid, p_kind: "bon_de_commande", p_path: path, p_name: file.name });
      }
    }
    const q = quote(sel());
    CO.done = { id: oid, reference: ref, path: CO.path, package: CO.pkg, price_usd: q.needsQuote ? null : q.total };
    CO.orderId = null; CO.sig = null; save();
    BUSY = false; draw(); scrollTo(0, 0);
  } catch (e) {
    BUSY = false;
    fail(`${e.message || t("Erreur. Vérifiez votre connexion et réessayez.")} ${t("Votre sélection est conservée.")}`);
  }
}

// ---------- Events ----------
document.addEventListener("submit", (e) => {
  if (e.target.id !== "co-form") return; e.preventDefault();
  if (BUSY) return;
  readForm();
  const bad = check(); if (bad) return fail(...bad);
  if (CO.step < 3) { CO.step++; save(); draw(); document.querySelector(".co-steps").scrollIntoView({ block: "start", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" }); return; }
  submit();
});
document.addEventListener("click", (e) => {
  const a = e.target.closest("[data-act]"); if (!a) return;
  if (a.dataset.act === "back") { readForm(); CO.step--; save(); draw(); }
  if (a.dataset.act === "signin") { readForm(); try { localStorage.setItem("alo-next", "commande.html"); } catch {} }
  if (a.dataset.act === "new") { CO = { ...CO, done: null, step: 1, path: "", deferred: {}, supplier: "", addons: [] }; save(); draw(); }
});
document.addEventListener("change", (e) => {
  const el = e.target; if (!el.form || el.form.id !== "co-form") return;
  if (el.name === "pkg") { CO.pkg = el.value; CO.addons = []; save(); return draw(); }
  if (el.name === "path") { readForm(); CO.path = el.value; save(); return draw(); }
  if (el.name === "b_proc_other") { readForm(); return draw(); }
  if (el.type === "file") return;
  readForm(); if (CO.step === 1) draw();
});
document.addEventListener("input", (e) => {
  const el = e.target; if (!el.form || el.form.id !== "co-form" || CO.step !== 1 || el.type !== "number") return;
  readForm(); document.querySelectorAll(".co-sum").forEach((n) => (n.innerHTML = summary()));
  const m = document.querySelector(".co-sum-m summary b"); if (m) { const q = quote(sel()); m.textContent = q.needsQuote ? t("Sur devis") : usd(q.total); }
});

async function load() {
  await loadCatalog();
  if (!catItem(CO.pkg) || (catItem(CO.pkg).kind !== "package")) CO.pkg = "essential";
  if (DEMO) { USER_OK = true; CO.billing = { organization: "Konekte Telecom", contact: "Marie Delva", email: "facturation@exemple.com", ...CO.billing }; return draw(); }
  const user = await currentUser(); USER_OK = !!user;
  if (user && db()) {
    try { const s = await db().rpc("checkout_settings"); if (!s.error && s.data) SETTINGS = s.data; } catch {}
    try {
      const { data: emp } = await db().from("employers").select("id,company,contact_name,phone,city").limit(1).maybeSingle();
      if (emp) {
        if (emp.id) { const r = await db().rpc("member_role", { p_employer: emp.id }); if (!r.error && r.data && r.data !== "proprietaire") ROLE_OK = false; }
        CO.billing = { organization: emp.company, contact: emp.contact_name, phone: emp.phone, ...Object.fromEntries(Object.entries(CO.billing).filter(([, v]) => v)) };
      }
      if (!CO.billing.email) CO.billing.email = user.email;
    } catch {}
  }
  draw();
}
window.onLang = draw;
load();
