import React, { useEffect, useState, useCallback } from "react";
import Quiz from "../components/Quiz.jsx";
import { api } from "../lib/api";
import Container from "../components/Container.jsx";

export default function QuizPage() {
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadScores = useCallback(async () => {
    try {
      setLoading(true);
      const s = await api.listScores();
      setScores(s);
    } catch (e) {
      // ignore
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadScores(); }, [loadScores]);

  return (
    <Container className="py-8 lg:py-10 xl:py-14">
      <div className="grid gap-6 lg:gap-8 md:grid-cols-2">
        {/* Pass onSaved so the list auto-refreshes after saving */}
        <Quiz onSaved={loadScores} />

        <div className="bg-white shadow-soft rounded-2xl p-4 md:p-6">
          <h3 className="text-xl md:text-2xl font-semibold mb-3">Recent Scores 🏆</h3>

          <ul className="space-y-2 text-gray-700 max-h-80 overflow-auto pr-1">
            {loading && <li className="text-gray-500 text-sm">Loading…</li>}
            {!loading && scores.length === 0 && (
              <li className="text-gray-500 text-sm">No scores yet.</li>
            )}
            {!loading && scores.map(s => (
              <li
                key={s._id}
                className="flex items-center justify-between gap-3 border rounded-xl px-3 py-2"
              >
                <span className="truncate">{s.name}</span>
                <span className="shrink-0 font-medium">{s.score}/{s.total}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}
