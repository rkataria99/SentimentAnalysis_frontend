import React, { useMemo, useState } from "react";
import { api } from "../lib/api";

const QUESTIONS = [
  {text: "I love this game!", answer: "positive"},
  {text: "This is the worst snack.", answer: "negative"},
  {text: "The book is on the shelf.", answer: "neutral"},
  {text: "My team did a great job.", answer: "positive"},
  {text: "The movie was boring.", answer: "negative"},
  {text: "We have school tomorrow.", answer: "neutral"},
];

export default function Quiz(){
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const total = QUESTIONS.length;

  const q = QUESTIONS[idx];

  function choose(label){
    if (label === q.answer) setScore(s => s + 1);
    if (idx + 1 < total) setIdx(i => i + 1);
    else setDone(true);
  }

  async function save(){
    try {
      await api.saveScore(name || "Anonymous", score, total);
      alert("Score saved! 🎉");
    } catch (e) {
      alert("Could not save score: " + e.message);
    }
  }

  if (done) return (
    <div className="bg-white shadow-soft rounded-2xl p-4 md:p-6 text-center">
      <h3 className="text-xl font-semibold mb-2">Quiz Complete! ✅</h3>
      <p className="text-lg">Your score: <strong>{score}</strong> / {total}</p>
      <div className="mt-3">
        <input placeholder="Your name (optional)" className="border rounded-xl p-2 mr-2" value={name} onChange={e=>setName(e.target.value)} />
        <button onClick={save} className="px-4 py-2 rounded-xl bg-indigo-600 text-white">Save Score</button>
      </div>
    </div>
  );

  return (
    <div className="bg-white shadow-soft rounded-2xl p-4 md:p-6">
      <h3 className="text-xl font-semibold mb-3">Quick Quiz 🧠</h3>
      <p className="text-sm text-gray-600 mb-2">Question {idx+1} of {total}</p>
      <div className="text-lg mb-4">{q.text}</div>
      <div className="flex gap-2">
        {["positive","neutral","negative"].map(label => (
          <button key={label} onClick={()=>choose(label)} className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200">{label}</button>
        ))}
      </div>
    </div>
  );
}
