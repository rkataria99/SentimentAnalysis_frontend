import React from "react";

export default function Story(){
  return (
    <div className="bg-white shadow-soft rounded-2xl p-4 md:p-6">
      <h3 className="text-xl md:text-2xl font-semibold mb-3">
        The Story of Chitti & Sana 📖
      </h3>

      <p className="text-gray-700 leading-7 content-width">
        Meet <strong>Chitti</strong>, a curious little robot, and <strong>Sana</strong>, a 6th grader who loves comics.
        One day, they read online comments about their school fair. Some comments were kind and cheerful.
        Others were grumpy or just neutral facts. Sana asked, “How can we teach Chitti to understand if a message
        sounds <em>happy</em>, <em>sad</em>, or <em>neutral</em>?” That’s where <strong>Sentiment Analysis</strong> comes in!
      </p>

      <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-1 content-width">
        <li>
          <strong>Step 1</strong>: Look for happy or sad words. <span className="text-gray-600">(Lexicon approach)</span>
        </li>
        <li>
          <strong>Step 2</strong>: Notice simple <em>signals</em> kids already use — emojis 😊/☹️, “!”, booster words
          (“very”, “really”), and the part after “but”. <span className="text-gray-600">(Signals method)</span>
        </li>
        <li>
          <strong>Goal</strong>: Help Chitti guess the feeling of any sentence.
        </li>
      </ul>

      <p className="mt-3 text-gray-700 content-width">
        You’ll first spot happy/sad words, then try the simple Signals method. By the end,
        you’ll be a <strong>Sentiment Detective</strong>! 🕵️‍♀️
      </p>
    </div>
  );
}
