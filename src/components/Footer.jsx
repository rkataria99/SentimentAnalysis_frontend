import React from "react";

export default function Footer(){
  return (
    <footer className="bg-white border-t">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-600">
        Built with ❤️ for 6th graders to learn Sentiment Analysis • © {new Date().getFullYear()}
      </div>
    </footer>
  );
}
