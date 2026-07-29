"use client";

import { useState, useEffect } from "react";

const phrases = [
  "AI Engineer 🤖",
  "LLM whisperer 🧠",
  "building agents that think ⚡",
  "shipping ML to prod 📊",
  "FastAPI girlie 🚀",
];

export default function TypedText() {
  const [display, setDisplay] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];
    let delay = isDeleting ? 60 : 100;

    if (!isDeleting && charIdx === current.length) delay = 2000;
    if (isDeleting && charIdx === 0) delay = 300;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIdx === current.length) {
        setIsDeleting(true);
      } else if (isDeleting && charIdx === 0) {
        setIsDeleting(false);
        setPhraseIdx((prev) => (prev + 1) % phrases.length);
      } else if (isDeleting) {
        setCharIdx((prev) => prev - 1);
        setDisplay(current.substring(0, charIdx - 1));
      } else {
        setCharIdx((prev) => prev + 1);
        setDisplay(current.substring(0, charIdx + 1));
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [charIdx, isDeleting, phraseIdx]);

  return <span className="typed-text">{display}</span>;
}
