import React, { useState } from "react";
import { POS_WORDS, NEG_WORDS } from "../lib/lexicon";

export default function LexiconPlay(){
  const [text, setText] = useState("I love Chitti days but hate boring homework");
  const tokens = text.toLowerCase().replace(/[^a-z\s]/g," ").split(/\s+/).filter(Boolean);

  return (
    <div className="bg-white shadow-soft rounded-2xl p-4 md:p-6">
      <h3 className="text-xl font-semibold mb-3">Spot the Happy & Sad Words 👀</h3>
      <p className="text-sm text-gray-600 mb-2">Words that make the sentence feel happy or sad are highlighted.</p>
      <textarea
        className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-indigo-400"
        rows={2}
        value={text}
        onChange={e=>setText(e.target.value)}
      />
      <div className="mt-3 text-lg">
        {tokens.map((t,i)=>{
          const pos = POS_WORDS.has(t);
          const neg = NEG_WORDS.has(t);
          return (
            <span key={i} className={"mr-1 px-2 py-1 rounded " + (pos?"bg-green-100":neg?"bg-red-100":"")}>
              {t}
            </span>
          );
        })}
      </div>
    </div>
  );
}
