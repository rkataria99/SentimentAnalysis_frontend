import React from "react";
import Story from "../components/Story.jsx";
import LexiconPlay from "../components/LexiconPlay.jsx";
import Container from "../components/Container.jsx";

export default function Learn() {
  return (
    <Container className="py-8 lg:py-10 xl:py-14 space-y-6">
      <Story />
      <LexiconPlay />

      <div className="bg-white shadow-soft rounded-2xl p-4 md:p-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-3">What you learned</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-1 content-width">
          <li>Words can carry feelings (happy / sad / neutral).</li>
          <li>We can make rules to count happy vs. sad words (Lexicon approach).</li>
          <li>
            We can also use simple <strong>Signals</strong> like emojis, “!”, booster words, and the part after
            “but” to guess the vibe.
          </li>
          <li>Both methods try to guess the overall sentiment of a sentence.</li>
        </ul>
      </div>
    </Container>
  );
}
