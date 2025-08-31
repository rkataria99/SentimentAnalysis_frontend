import React from "react";
import Container from "../components/Container.jsx";

export default function About(){
  return (
    <Container className="py-8 lg:py-10 xl:py-14">
      <div className="bg-white rounded-2xl shadow-soft p-4 md:p-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">About this project</h2>
        <p className="text-gray-700 content-width">
          This app teaches Sentiment Analysis through a kid-friendly story and interactive demos.
          We compare a <strong>Lexicon</strong> (rule-based) method with a simple <strong>Signals</strong> method
          that looks at emojis, exclamation marks, booster/softener words, and the part after “but”.
        </p>
        <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-1">
          <li>Frontend: React + Tailwind</li>
          <li>Backend: Node + Express</li>
          <li>Database: MongoDB (scores &amp; examples)</li>
        </ul>
      </div>
    </Container>
  );
}
