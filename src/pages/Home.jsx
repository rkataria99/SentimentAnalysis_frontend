import React from "react";
import { Link } from "react-router-dom";
import SentimentDemoCompact from "../components/SentimentDemoCompact.jsx";
import Container from "../components/Container.jsx";

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-b from-cyan-100 to-indigo-100 border-b">
        <Container
          className="
            py-8 md:py-10 xl:py-16 2xl:py-20
            max-w-[1600px] 4xl:max-w-[1800px] 5xl:max-w-[2000px]
          "
        >
          <div
            className="
              grid items-start
              gap-6 md:gap-8 lg:gap-10
              md:grid-cols-2
              xl:[grid-template-columns:1.15fr_0.85fr]
            "
          >
            {/* Left: headline & CTA */}
            <div className="min-w-0">
              <h1 className="fluid-h1 font-extrabold">
                Learn Sentiment Analysis with{" "}
                <span className="text-indigo-700">Chitti</span> &{" "}
                <span className="text-cyan-700">Sana</span>
              </h1>

              <p className="fluid-lead text-gray-700 mt-3 content-width">
                A friendly, interactive site for 6th graders to see how
                computers feel the vibe of a sentence.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/learn"
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white shadow-soft"
                >
                  Start Learning
                </Link>
                <Link
                  to="/quiz"
                  className="px-5 py-2.5 rounded-xl bg-white border"
                >
                  Take Quiz
                </Link>
              </div>
            </div>

            {/* Right: compact demo (no scrollbars) */}
            <SentimentDemoCompact />
          </div>
        </Container>
      </section>
    </div>
  );
}
