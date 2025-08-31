import React, { useState } from "react";
import { api } from "../lib/api";

/* Tiny emoji helper without affecting EmojiMeter */
function emojiFor(label) {
  switch (label) {
    case "positive": return "😄";
    case "negative": return "😟";
    default: return "😐";
  }
}

export default function SentimentDemoCompact() {
  const [text, setText] = useState("");
  const [lex, setLex] = useState(null);
  const [sig, setSig] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  async function analyze() {
    setErr("");
    setLoading(true);
    try {
      const [lexOut, sigOut] = await Promise.all([
        api.lexicon(text),
        api.signals(text),
      ]);
      setLex(lexOut);
      setSig(sigOut);
    } catch (e) {
      setErr(e.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-soft p-4 md:p-5 xl:p-6">
      <h3 className="text-xl font-semibold mb-2">Try it yourself ✍️</h3>
      <p className="text-sm text-gray-600 mb-3">
        Type a sentence and compare two approaches:
      </p>
      <ul className="list-disc pl-6 text-sm text-gray-600 mb-3">
        <li><strong>Lexicon</strong>: checks for happy/sad words.</li>
        <li><strong>Signals</strong>: emojis 😊/☹️, “!”, boosters, and the part after “but”.</li>
      </ul>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={3}
        placeholder="I love ice cream but homework is boring..."
        className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-indigo-400"
      />

      <button
        onClick={analyze}
        disabled={loading || !text.trim()}
        className="mt-3 px-4 py-2 rounded-xl bg-indigo-600 text-white disabled:opacity-50"
      >
        {loading ? "Analyzing..." : "Analyze"}
      </button>

      {err && <p className="text-red-600 mt-2">{err}</p>}

      {(lex || sig) && (
        <div className="mt-4 border rounded-2xl p-3">
          {/* one compact row showing both results */}
          <div className="grid gap-3 md:grid-cols-2">
            {/* Lexicon */}
            {lex && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-base font-semibold">Lexicon</span>
                  <span className="text-2xl leading-none">{emojiFor(lex.label)}</span>
                  <span className="text-sm text-gray-600">({lex.label})</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {lex.tokens?.map((t, i) => {
                    const pos = lex.details?.find(d => d.t === t && d.effect === 1);
                    const neg = lex.details?.find(d => d.t === t && d.effect === -1);
                    return (
                      <span
                        key={i}
                        className={[
                          "px-2 py-0.5 rounded-lg border text-xs",
                          pos ? "bg-green-50 text-green-800 border-green-200" :
                          neg ? "bg-red-50 text-red-800 border-red-200" :
                                "bg-gray-50 text-gray-700 border-gray-200",
                        ].join(" ")}
                      >
                        {t}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Signals */}
            {sig && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-base font-semibold">Signals</span>
                  <span className="text-2xl leading-none">{emojiFor(sig.label)}</span>
                  <span className="text-sm text-gray-600">({sig.label})</span>
                </div>
                {sig.details?.length ? (
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                    {sig.details.map((d, i) => (
                      <li key={i} className="break-words">
                        {d.t} {d.effect !== undefined ? `(${d.effect})` : ""}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span className="text-sm text-gray-500">No strong signals detected.</span>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
