import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ROLES = [
  "Software Developer",
  "UI/UX Designer",
  "Full Stack Engineer",
  "Graphic Designer",
];

const TYPE_SPEED = 75;
const DELETE_SPEED = 40;
const HOLD_MS = 1400;

const useTypingCycle = (words) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState("type");

  useEffect(() => {
    const current = words[wordIndex];
    let timeout;
    if (phase === "type") {
      if (text.length < current.length) {
        timeout = setTimeout(
          () => setText(current.slice(0, text.length + 1)),
          TYPE_SPEED
        );
      } else {
        timeout = setTimeout(() => setPhase("delete"), HOLD_MS);
      }
    } else if (phase === "delete") {
      if (text.length > 0) {
        timeout = setTimeout(
          () => setText(current.slice(0, text.length - 1)),
          DELETE_SPEED
        );
      } else {
        setWordIndex((i) => (i + 1) % words.length);
        setPhase("type");
      }
    }
    return () => clearTimeout(timeout);
  }, [text, phase, wordIndex, words]);

  return text;
};

const MainText = () => {
  const typed = useTypingCycle(ROLES);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <p className="text-sm sm:text-base md:text-lg italic font-display">
        Hi, I am a
      </p>
      <h1 className="font-display font-light text-[28px] sm:text-5xl md:text-6xl mt-1.5 sm:mt-2 leading-[0.95] tracking-tightest">
        <span className="opacity-50">{"{"}</span>
        <span className="italic font-medium">{typed}</span>
        <span className="cursor-blink ml-1 -mr-1 font-thin">|</span>
        <span className="opacity-50">{"}"}</span>
      </h1>
    </motion.div>
  );
};

export default MainText;
