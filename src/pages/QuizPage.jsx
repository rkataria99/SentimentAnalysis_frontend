import React, { useEffect, useState } from "react";
import Quiz from "../components/Quiz.jsx";
import { api } from "../lib/api";

export default function QuizPage(){
  const [scores, setScores] = useState([]);

  async function loadScores(){
    try {
      const s = await api.listScores();
      setScores(s);
    } catch (e) {}
  }

  useEffect(()=>{ loadScores(); },[]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-6">
      <Quiz />
      <div className="bg-white shadow-soft rounded-2xl p-4 md:p-6">
        <h3 className="text-xl font-semibold mb-3">Recent Scores 🏆</h3>
        <ul className="space-y-2 text-gray-700">
          {scores.map(s => (
            <li key={s._id} className="flex justify-between border rounded-xl px-3 py-2">
              <span>{s.name}</span>
              <span>{s.score}/{s.total}</span>
            </li>
          ))}
          {scores.length===0 && <li className="text-gray-500 text-sm">No scores yet.</li>}
        </ul>
      </div>
    </div>
  );
}
