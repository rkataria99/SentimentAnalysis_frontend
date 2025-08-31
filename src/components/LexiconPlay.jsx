import React, { useState } from "react";
import { POS_WORDS, NEG_WORDS } from "../lib/lexicon";

export default function LexiconPlay(){
  const [text, setText] = useState("I love Chitti days but hate boring homework");
  const tokens = text.toLowerCase().replace(/[^a-z\s]/g," ").split(/\s+/).filter(Boolean);

  return (
    <div className="bg-white shadow-soft rounded-2xl p-4 md:p-6">
      <h3 className="text-xl md:text-2xl font-semibold mb-3">Spot the Happy & Sad Words 👀</h3>
      <p className="text-sm text-gray-600 mb-2 content-width">
        Words that make the sentence feel happy or sad are highlighted.
      </p>

      <textarea
        className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-indigo-400"
        rows={2}
        value={text}
        onChange={e=>setText(e.target.value)}
        placeholder="Type here… e.g., I love sunny days but hate boring homework"
      />

      {/* Chips wrap on small screens; scroll if there are too many */}
      <div className="mt-3 text-base">
        <div className="flex flex-wrap gap-1 max-h-32 overflow-auto pr-1">
          {tokens.map((t, i) => {
            const pos = POS_WORDS.has(t);
            const neg = NEG_WORDS.has(t);
            return (
              <span
                key={i}
                className={[
                  "inline-block px-2 py-0.5 rounded-lg border",
                  pos ? "bg-green-50 text-green-800 border-green-200" :
                  neg ? "bg-red-50 text-red-800 border-red-200" :
                        "bg-gray-50 text-gray-700 border-gray-200"
                ].join(" ")}
              >
                {t}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
