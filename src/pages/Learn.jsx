import React from "react";
import Story from "../components/Story.jsx";
import LexiconPlay from "../components/LexiconPlay.jsx";

export default function Learn(){
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      <Story />
      <LexiconPlay />
      <div className="bg-white shadow-soft rounded-2xl p-4 md:p-6">
        <h3 className="text-xl font-semibold mb-3">What you learned</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Words can carry feelings (happy/sad/neutral).</li>
          <li>We can make rules to count happy vs. sad words (Lexicon approach).</li>
          <li>We can also <em>learn</em> from many labeled sentences (Naive Bayes approach).</li>
          <li>Both methods try to guess the overall sentiment of a sentence.</li>
        </ul>
      </div>
    </div>
  );
}
