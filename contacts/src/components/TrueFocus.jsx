import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import "./TrueFocus.css";

export default function TrueFocus({
  sentence = "Dijital Odak",
  manualMode = false,
  blurAmount = 5,
  borderColor = "#FF5E2E",
  glowColor = "rgba(255,94,46,.6)",
  animationDuration = 0.5,
  pauseBetweenAnimations = 1,
  className = "",
}) {
  const words = sentence.split(" ");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastActiveIndex, setLastActiveIndex] = useState(null);
  const containerRef = useRef(null);
  const wordRefs = useRef([]);
  const [focusRect, setFocusRect] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (!manualMode) {
      const t = setInterval(
        () => setCurrentIndex((p) => (p + 1) % words.length),
        (animationDuration + pauseBetweenAnimations) * 1000
      );
      return () => clearInterval(t);
    }
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  useEffect(() => {
    if (!wordRefs.current[currentIndex] || !containerRef.current) return;
    const parent = containerRef.current.getBoundingClientRect();
    const rect = wordRefs.current[currentIndex].getBoundingClientRect();
    setFocusRect({
      x: rect.left - parent.left,
      y: rect.top - parent.top,
      width: rect.width,
      height: rect.height,
    });
  }, [currentIndex, words.length]);

  const onEnter = (i) => {
    if (!manualMode) return;
    setLastActiveIndex(i);
    setCurrentIndex(i);
  };
  const onLeave = () => {
    if (!manualMode) return;
    setCurrentIndex(lastActiveIndex);
  };

  return (
    <div className={`focus-container ${className}`} ref={containerRef}>
      {words.map((w, i) => {
        const active = i === currentIndex;
        return (
          <span
            key={i}
            ref={(el) => (wordRefs.current[i] = el)}
            className={`focus-word ${manualMode ? "manual" : ""} ${
              active && !manualMode ? "active" : ""
            }`}
            style={{
              filter: active ? "blur(0px)" : `blur(${blurAmount}px)`,
              "--border-color": borderColor,
              "--glow-color": glowColor,
              transition: `filter ${animationDuration}s ease`,
            }}
            onMouseEnter={() => onEnter(i)}
            onMouseLeave={onLeave}
          >
            {w}
          </span>
        );
      })}

      <motion.div
        className="focus-frame"
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: currentIndex >= 0 ? 1 : 0,
        }}
        transition={{ duration: animationDuration }}
        style={{ "--border-color": borderColor, "--glow-color": glowColor }}
      >
        <span className="corner top-left"></span>
        <span className="corner top-right"></span>
        <span className="corner bottom-left"></span>
        <span className="corner bottom-right"></span>
      </motion.div>
    </div>
  );
}
