import React from "react";
import SentimentDemo from "../components/SentimentDemo.jsx";
import Container from "../components/Container.jsx";

export default function Play(){
  return (
    <Container className="py-8 lg:py-10 xl:py-14 space-y-6">
      <SentimentDemo />
      <div className="bg-white rounded-2xl p-4 md:p-6 shadow-soft">
        <h3 className="text-xl md:text-2xl font-semibold mb-2">Tip 🤓</h3>
        <p className="text-gray-700">
          Try mixing happy and sad words to see how the two approaches behave.
        </p>
      </div>
    </Container>
  );
}
