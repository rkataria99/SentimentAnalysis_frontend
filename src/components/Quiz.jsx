import React, { useState } from "react";
import { api } from "../lib/api";

const QUESTIONS = [
  { text: "I love this game!", answer: "positive" },
  { text: "This is the worst snack.", answer: "negative" },
  { text: "The book is on the shelf.", answer: "neutral" },
  { text: "My team did a great job.", answer: "positive" },
  { text: "The movie was boring.", answer: "negative" },
  { text: "We have school tomorrow.", answer: "neutral" },
];

/**
 * Props:
 *  - onSaved?: () => void   // parent (QuizPage) can pass a callback to refresh the scores list
 */
export default function Quiz({ onSaved }) {
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  const total = QUESTIONS.length;
  const q = QUESTIONS[idx];
  const progress = ((done ? total : idx) / total) * 100;

  function choose(label) {
    setMsg("");
    if (label === q.answer) setScore((s) => s + 1);
    if (idx + 1 < total) setIdx((i) => i + 1);
    else setDone(true);
  }

  async function save() {
    setMsg("");
    const trimmed = name.trim();

    // 1) require name
    if (!trimmed) {
      setMsg("Please enter your name before saving.");
      return;
    }
    // 2) block repeated clicks
    if (saving) return;

    try {
      setSaving(true);
      await api.saveScore(trimmed, score, total);
      setMsg("Saved! 🎉");

      // 3) tell parent to refresh list (auto-reload)
      onSaved && onSaved();
     // reset quiz so user must play again before saving another score
     setIdx(0);
     setScore(0);
     setDone(false);
     setName("");
    } catch (e) {
      setMsg(e.message || "Could not save score.");
    } finally {
      setSaving(false);
    }
  }

  if (done)
    return (
      <div className="bg-white shadow-soft rounded-2xl p-4 md:p-6">
        <div className="mb-3">
          <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
            <div className="h-full bg-indigo-500" style={{ width: "100%" }} aria-hidden />
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-semibold mb-2 text-center">Quiz Complete! ✅</h3>
        <p className="text-lg text-center">
          Your score: <strong>{score}</strong> / {total}
        </p>

        {/* Save form */}
        <div className="mt-4 flex flex-col sm:flex-row gap-2 sm:justify-center">
          <input
            placeholder="Your name"
            className="border rounded-xl px-3 py-2 w-full sm:w-72 focus:ring-2 focus:ring-indigo-400 outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            onClick={save}
            disabled={saving}
            className={`px-4 py-2 rounded-xl text-white focus:ring-2 focus:ring-indigo-400
              ${saving ? "bg-indigo-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"}`}
          >
            {saving ? "Saving..." : "Save Score"}
          </button>
        </div>

        {msg && <p className={`mt-2 text-center ${/saved/i.test(msg) ? "text-green-700" : "text-red-600"}`}>{msg}</p>}
      </div>
    );

  return (
    <div className="bg-white shadow-soft rounded-2xl p-4 md:p-6">
      {/* Progress bar */}
      <div className="mb-3">
        <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
          <div
            className="h-full bg-indigo-500 transition-[width] duration-300"
            style={{ width: `${progress}%` }}
            aria-hidden
          />
        </div>
      </div>

      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-1">Quick Quiz 🧠</h3>
          <p className="text-sm text-gray-600">
            Question {idx + 1} of {total}
          </p>
        </div>
        <div className="text-sm font-medium text-indigo-700 shrink-0">
          {score}/{total}
        </div>
      </div>

      {/* Question */}
      <div className="text-lg mt-4 content-width">{q.text}</div>

      {/* Answers */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
        {["positive", "neutral", "negative"].map((label) => (
          <button
            key={label}
            onClick={() => choose(label)}
            className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 focus:ring-2 focus:ring-indigo-400 text-center"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
