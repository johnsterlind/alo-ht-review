// =============================================================
// alo.ht configuration — fill in these two values to go live.
// Find them in Supabase: Project Settings → API.
// The "anon public" key is safe to put here (Row Level Security
// protects the data). NEVER put the "service_role" key here.
// While these are left as-is, the site shows sample jobs and
// forms don't save anything.
// =============================================================
window.ALO_CONFIG = {
  SUPABASE_URL: "https://mwzwymbfupowaxamrjba.supabase.co",
  // "Publishable" key (sb_publishable_...) or legacy "anon public" key.
  SUPABASE_ANON_KEY: "sb_publishable_O_NYCIzTde96Qaui0smDNQ_5lJaCFtf",
  // Set to true once the AI edge function (supabase/functions/cv-assistant) is deployed.
  AI_ASSISTANT: false,
};
