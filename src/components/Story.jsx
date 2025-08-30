import React from "react";

export default function Story(){
  return (
    <div className="bg-white shadow-soft rounded-2xl p-4 md:p-6">
      <h3 className="text-xl font-semibold mb-3">The Story of Chitti & Sana 📖</h3>
      <p className="text-gray-700 leading-7">
        Meet <strong>Chitti</strong>, a curious little robot, and <strong>Sana</strong>, a 6th grader who loves comics.
        One day, they read online comments about their school fair. Some comments were kind and cheerful.
        Others were grumpy or just neutral facts. Sana asked, “How can we teach Chitti to understand if a message
        sounds <em>happy</em>, <em>sad</em>, or <em>neutral</em>?” That’s where <strong>Sentiment Analysis</strong> comes in!
      </p>
      <ul className="list-disc pl-6 mt-3 text-gray-700">
        <li><strong>Step 1</strong>: Look for happy or sad words. (Lexicon approach)</li>
        <li><strong>Step 2</strong>: Learn from many labeled examples. (Naive Bayes)</li>
        <li><strong>Goal</strong>: Help Chitti guess the feeling of any sentence.</li>
      </ul>
      <p className="mt-3 text-gray-700">
        You’ll first spot happy/sad words, then try a tiny learning robot model. By the end,
        you’ll be a <strong>Sentiment Detective</strong>! 🕵️‍♀️
      </p>
    </div>
  );
}
