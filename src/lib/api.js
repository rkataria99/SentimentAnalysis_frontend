const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000" || "";

async function post(path, body) {
  const res = await fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: "unknown" }));
    throw new Error(err.error || "Request failed");
  }
  return res.json();
}

async function get(path) {
  const res = await fetch(`${API_URL}${path}`);
  if (!res.ok) throw new Error("Request failed");
  return res.json();
}

export const api = {
  health: () => get("/api/health"),
  lexicon: (text) => post("/api/lexicon", { text }),
  signals: (text) => post("/api/signals", { text }), //  make sure this exists
  saveScore: (name, score, total) => post("/api/score", { name, score, total }),
  listScores: () => get("/api/scores"),
  addExample: (text, label) => post("/api/examples", { text, label }),
  listExamples: () => get("/api/examples"),
};
