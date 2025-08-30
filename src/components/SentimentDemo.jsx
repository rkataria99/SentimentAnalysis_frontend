import React, { useState } from "react";
import { api } from "../lib/api";
import EmojiMeter from "./EmojiMeter";

export default function SentimentDemo(){
  const [text, setText] = useState("");
  const [ml, setML] = useState(null);
  const [lex, setLex] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  async function analyze(){
    setErr("");
    setLoading(true);
    try {
      const [a,b] = await Promise.all([api.predict(text), api.lexicon(text)]);
      setML(a);
      setLex(b);
    } catch (e){
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white shadow-soft rounded-2xl p-4 md:p-6">
      <h3 className="text-xl font-semibold mb-3">Try it yourself ✍️</h3>
      <p className="text-sm text-gray-600 mb-2">Type a sentence and compare two approaches:</p>
      <ul className="list-disc pl-6 text-sm text-gray-600 mb-3">
        <li><strong>Lexicon</strong> (rule-based): checks for happy/sad words.</li>
        <li><strong>Naive Bayes</strong> (ML): learns from examples.</li>
      </ul>
      <textarea
        value={text}
        onChange={e=>setText(e.target.value)}
        rows={3}
        placeholder="I love ice cream but my homework is boring..."
        className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <button onClick={analyze} disabled={loading || !text.trim()} className="mt-3 px-4 py-2 rounded-xl bg-indigo-600 text-white disabled:opacity-50">
        {loading ? "Analyzing..." : "Analyze"}
      </button>
      {err && <p className="text-red-600 mt-2">{err}</p>}
      {(ml || lex) && (
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          {lex && (
            <div className="border rounded-xl p-4">
              <h4 className="font-semibold mb-2">Lexicon Result</h4>
              <div className="flex items-center gap-3">
                <EmojiMeter label={lex.label}/>
                <div>
                  <div className="text-sm">Label: <span className="font-semibold">{lex.label}</span></div>
                  <div className="text-xs text-gray-600">Score: {lex.score}</div>
                </div>
              </div>
              <div className="mt-2 text-sm">
                {lex.tokens?.map((t, i) => <span key={i} className={"mr-1 px-1 rounded " + (lex.details?.find(d=>d.t===t && d.effect===1) ? "bg-green-100" : lex.details?.find(d=>d.t===t && d.effect===-1) ? "bg-red-100" : "")}>{t}</span>)}
              </div>
            </div>
          )}
          {ml && (
            <div className="border rounded-xl p-4">
              <h4 className="font-semibold mb-2">Naive Bayes Result</h4>
              <div className="flex items-center gap-3">
                <EmojiMeter label={ml.label}/>
                <div className="text-sm">
                  Label: <span className="font-semibold">{ml.label}</span>
                  <div className="text-xs text-gray-600 mt-1">
                    {Object.entries(ml.probabilities).map(([k,v])=> (
                      <div key={k}>{k}: {(v*100).toFixed(1)}%</div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-2 text-sm">
                {ml.tokens?.map((t,i)=>(<span key={i} className="mr-1 px-1 rounded bg-gray-100">{t}</span>))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
