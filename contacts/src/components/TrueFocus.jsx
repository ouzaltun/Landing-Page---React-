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
  const leftIndex = 0;
  const rightIndex = Math.max(0, words.length - 1);

  // Sıra: sağ -> sol -> ikisi
  const steps = ["right", "left", "both"];
  const [stepIndex, setStepIndex] = useState(0);
  const [lastActiveIndex, setLastActiveIndex] = useState(null);

  const containerRef = useRef(null);
  const wordRefs = useRef([]);
  const [focusRect, setFocusRect] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  // Otomatik animasyon döngüsü
  useEffect(() => {
    if (!manualMode) {
      const t = setInterval(
        () => setStepIndex((p) => (p + 1) % steps.length),
        (animationDuration + pauseBetweenAnimations) * 1000
      );
      return () => clearInterval(t);
    }
  }, [manualMode, animationDuration, pauseBetweenAnimations]);

  // Mevcut adımın hangi index(ler)i aktif ettiğini hesapla
  const activeIndices = (() => {
    const step = steps[stepIndex];
    if (manualMode) return []; // manual modda hover belirler
    if (step === "right") return [rightIndex];
    if (step === "left") return [leftIndex];
    return [leftIndex, rightIndex]; // both
  })();

  // Çerçeve konumu — tek kelime veya iki kelimeyi kapsayacak şekilde
  useEffect(() => {
    if (!containerRef.current) return;

    const parent = containerRef.current.getBoundingClientRect();

    const rectForIndex = (i) => {
      const el = wordRefs.current[i];
      if (!el) return null;
      return el.getBoundingClientRect();
    };

    let rect = null;

    if (manualMode) {
      // manual modda bir önceki aktif index'i esas al (hover ile set ediliyor)
      if (lastActiveIndex != null) {
        const r = rectForIndex(lastActiveIndex);
        if (r) {
          rect = {
            x: r.left - parent.left,
            y: r.top - parent.top,
            width: r.width,
            height: r.height,
          };
        }
      }
    } else {
      if (activeIndices.length === 1) {
        const r = rectForIndex(activeIndices[0]);
        if (r) {
          rect = {
            x: r.left - parent.left,
            y: r.top - parent.top,
            width: r.width,
            height: r.height,
          };
        }
      } else if (activeIndices.length > 1) {
        // "both": iki ucu kapsayan birleştirilmiş dikdörtgen
        const rects = activeIndices
          .map(rectForIndex)
          .filter(Boolean)
          .sort((a, b) => a.left - b.left);

        if (rects.length) {
          const left = rects[0].left;
          const right = rects[rects.length - 1].right;
          const top = Math.min(...rects.map((r) => r.top));
          const bottom = Math.max(...rects.map((r) => r.bottom));
          rect = {
            x: left - parent.left,
            y: top - parent.top,
            width: right - left,
            height: bottom - top,
          };
        }
      }
    }

    if (rect) setFocusRect(rect);
  }, [
    stepIndex,
    activeIndices.join(","),
    manualMode,
    lastActiveIndex,
    words.length,
  ]);

  // Hover davranışı (manualMode true iken)
  const onEnter = (i) => {
    if (!manualMode) return;
    setLastActiveIndex(i);
  };
  const onLeave = () => {
    if (!manualMode) return;
    // hover kalkınca son index'i koruyoruz; istersen null yapıp çerçeveyi gizleyebilirsin
  };

  // Bir kelime aktif mi?
  const isWordActive = (i) => {
    if (manualMode) return i === lastActiveIndex;
    return activeIndices.includes(i);
  };

  return (
    <div className={`focus-container ${className}`} ref={containerRef}>
      {words.map((w, i) => {
        const active = isWordActive(i);
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
          opacity: manualMode && lastActiveIndex == null ? 0 : 1,
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
