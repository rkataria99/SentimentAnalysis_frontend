import React from "react";

export default function About(){
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-soft p-6">
        <h2 className="text-2xl font-bold mb-2">About this project</h2>
        <p className="text-gray-700">
          This app teaches Sentiment Analysis through a kid-friendly story and interactive demos.
          We show two approaches: a <strong>Lexicon</strong> (rule) method and a tiny <strong>Naive Bayes</strong> model.
        </p>
        <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-1">
          <li>Frontend: React + Tailwind</li>
          <li>Backend: Node + Express</li>
          <li>Database: MongoDB (scores & examples)</li>
        </ul>
      </div>
    </div>
  );
}
