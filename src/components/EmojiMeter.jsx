import React from "react";

export default function EmojiMeter({ label }) {
  const map = {
    positive: "😄",
    negative: "☹️",
    neutral: "😐"
  };
  return (
    <div className="text-6xl md:text-7xl" aria-label={`Sentiment is ${label}`}>
      {map[label] || "🤔"}
    </div>
  );
}
