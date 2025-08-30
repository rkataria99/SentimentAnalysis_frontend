import React from "react";
import { Link } from "react-router-dom";
import SentimentDemo from "../components/SentimentDemo.jsx";

export default function Home(){
  return (
    <div>
      <section className="bg-gradient-to-b from-cyan-100 to-indigo-100 border-b">
        <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Learn Sentiment Analysis with <span className="text-indigo-700">Chitti</span> & <span className="text-cyan-700">Sana</span>
            </h1>
            <p className="mt-3 text-gray-700">A friendly, interactive site for 6th graders to see how computers feel the vibe of a sentence.</p>
            <div className="mt-5 space-x-3">
              <Link to="/learn" className="px-4 py-2 rounded-xl bg-indigo-600 text-white shadow-soft">Start Learning</Link>
              <Link to="/quiz" className="px-4 py-2 rounded-xl bg-white border">Take Quiz</Link>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-soft p-4">
            <SentimentDemo />
          </div>
        </div>
      </section>
    </div>
  );
}
