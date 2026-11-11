// alo.ht — shared AI helpers: call the CV assistant, read PDF/Word files. Needs app.js first.

const LIBS = {
  pdfjs: "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js",
  pdfjsWorker: "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js",
  mammoth: "https://cdnjs.cloudflare.com/ajax/libs/mammoth/1.6.0/mammoth.browser.min.js",
  html2pdf: "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js",
};
const loaded = {};
function loadScript(src) {
  if (!loaded[src]) loaded[src] = new Promise((ok, ko) => {
    const s = document.createElement("script"); s.src = src; s.onload = ok; s.onerror = ko; document.head.appendChild(s);
  });
  return loaded[src];
}

const norm2 = (s) => norm(s).replace(/[^a-z0-9+#]/g, "");

async function callAssistant(payload, demoFn) {
  if (DEMO && demoFn) return demoFn(payload);
  if (!LIVE) throw new Error("not_configured");
  const { data } = await db().auth.getSession();
  if (!data.session) throw new Error("sign_in_required");
  const r = await fetch(`${CFG.SUPABASE_URL}/functions/v1/cv-assistant`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${data.session.access_token}`, apikey: CFG.SUPABASE_ANON_KEY },
    body: JSON.stringify({ ...payload, lang: LANG }),
  });
  const out = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(out.error || (r.status === 404 ? "not_deployed" : "ai_error"));
  return out;
}
function aiError(err) {
  const m = {
    sign_in_required: "Connectez-vous pour utiliser l'assistant IA.",
    not_configured: "L'assistant IA n'est pas encore activé.",
    not_deployed: "L'assistant IA n'est pas encore activé.",
    busy: "L'assistant est très sollicité. Réessayez dans un instant.",
    refused: "L'assistant ne peut pas traiter cette demande.",
    too_long: "Votre CV est trop long pour l'assistant. Raccourcissez-le un peu.",
  }[err.message];
  return t(m || "Erreur. Vérifiez votre connexion et réessayez.");
}


async function extractText(file) {
  const name = file.name.toLowerCase();
  if (name.endsWith(".pdf")) {
    await loadScript(LIBS.pdfjs);
    pdfjsLib.GlobalWorkerOptions.workerSrc = LIBS.pdfjsWorker;
    const pdf = await pdfjsLib.getDocument({ data: await file.arrayBuffer() }).promise;
    let text = "";
    for (let i = 1; i <= Math.min(pdf.numPages, 10); i++) {
      const page = await pdf.getPage(i);
      const c = await page.getTextContent();
      text += c.items.map((x) => x.str + (x.hasEOL ? "\n" : " ")).join("") + "\n";
    }
    return text.trim();
  }
  if (name.endsWith(".docx")) {
    await loadScript(LIBS.mammoth);
    const r = await mammoth.extractRawText({ arrayBuffer: await file.arrayBuffer() });
    return r.value.trim();
  }
  throw new Error("format");
}

