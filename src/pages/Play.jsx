import React from "react";
import SentimentDemo from "../components/SentimentDemo.jsx";

export default function Play(){
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      <SentimentDemo />
      <div className="bg-white rounded-2xl p-4 shadow-soft">
        <h3 className="text-xl font-semibold mb-2">Tip 🤓</h3>
        <p className="text-gray-700">Try mixing happy and sad words to see how the two approaches behave.</p>
      </div>
    </div>
  );
}
