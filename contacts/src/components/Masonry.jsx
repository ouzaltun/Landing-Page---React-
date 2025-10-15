// src/components/Masonry.jsx
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";

/** --- hooks & utils --- */
const useMedia = (queries, values, defaultValue) => {
  const get = () =>
    values[queries.findIndex((q) => matchMedia(q).matches)] ?? defaultValue;
  const [value, setValue] = useState(get);
  useEffect(() => {
    const handler = () => setValue(get);
    queries.forEach((q) => matchMedia(q).addEventListener("change", handler));
    return () =>
      queries.forEach((q) =>
        matchMedia(q).removeEventListener("change", handler)
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queries]);
  return value;
};

const useMeasure = () => {
  const ref = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);
  return [ref, size];
};

const loadRatios = async (items) => {
  const entries = await Promise.all(
    items.map(
      (it) =>
        new Promise((resolve) => {
          const im = new Image();
          im.src = it.img;
          im.onload = () =>
            resolve([it.id, im.naturalHeight / im.naturalWidth || 0.5]);
          im.onerror = () => resolve([it.id, 0.5]);
        })
    )
  );
  return Object.fromEntries(entries);
};

/** --- Masonry --- */
export default function Masonry({
  items,
  ease = "power3.out",
  duration = 0.6,
  stagger = 0.05,
  animateFrom = "bottom",
  scaleOnHover = true,
  hoverScale = 0.95,
  blurToFocus = true,
  colorShiftOnHover = false,
}) {
  // Desktop (≥1024px): 3 kolon, Mobile/Tablet (<1024px): 4 kolon
  const columns = useMedia(["(min-width:1024px)"], [3], 4);

  const [containerRef, { width, height: stageH }] = useMeasure();
  const [ratios, setRatios] = useState({});
  const [ready, setReady] = useState(false);
  const [inView, setInView] = useState(false);
  const introPlayed = useRef(false);

  // görünürlük
  useEffect(() => {
    if (!containerRef.current) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.15 }
    );
    io.observe(containerRef.current);
    return () => io.disconnect();
  }, [containerRef]);

  // oranları yükle
  useEffect(() => {
    loadRatios(items).then((map) => {
      setRatios(map);
      setReady(true);
    });
  }, [items]);

  // grid hesaplama (auto boyut + merkezleme)
  const layout = useMemo(() => {
    if (!width || !ready) {
      return { nodes: [], usedWidth: 0, totalHeight: 0 };
    }

    const gap = 16;
    const minCardW = 110;
    const maxCardW = 180;
    const ideal = (width - gap * (columns - 1)) / columns;
    const columnW = Math.min(Math.max(ideal, minCardW), maxCardW);
    const usedWidth = columns * columnW + (columns - 1) * gap;

    const imgScale = 0.9;
    const pad = 6;

    const colHeights = new Array(columns).fill(0);
    const nodes = items.map((child) => {
      const ratio = ratios[child.id] ?? 0.5; // h/w
      const imgW = columnW * imgScale;
      const imgH = imgW * ratio;
      const cardW = Math.round(imgW + pad * 2);
      const cardH = Math.round(imgH + pad * 2);

      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = col * (columnW + gap) + (columnW - cardW) / 2; // sütunda ortala
      const y = colHeights[col];
      colHeights[col] += cardH + gap;

      return { ...child, x, y, w: cardW, h: cardH, pad };
    });

    const totalHeight = Math.max(...colHeights, 0);
    return { nodes, usedWidth, totalHeight };
  }, [width, ready, columns, items, ratios]);

  // ilk frame'de gizle
  useLayoutEffect(() => {
    if (!ready || introPlayed.current) return;
    layout.nodes.forEach((n) =>
      gsap.set(`[data-key="${n.id}"]`, { opacity: 0 })
    );
  }, [ready, layout]);

  // animasyon (viewport’a girince 1 kez)
  useLayoutEffect(() => {
    if (!ready || !inView) return;

    const topOffset = Math.max(
      ((stageH || layout.totalHeight) - layout.totalHeight) / 2,
      0
    );

    layout.nodes.forEach((n, i) => {
      const sel = `[data-key="${n.id}"]`;
      const anim = { x: n.x, y: n.y + topOffset, width: n.w, height: n.h };

      if (!introPlayed.current) {
        // başlangıç pozisyonu
        const start =
          animateFrom === "top"
            ? { x: n.x, y: -200 }
            : animateFrom === "bottom"
            ? { x: n.x, y: window.innerHeight + 200 }
            : animateFrom === "left"
            ? { x: -200, y: n.y + topOffset }
            : animateFrom === "right"
            ? { x: window.innerWidth + 200, y: n.y + topOffset }
            : { x: n.x, y: n.y + topOffset + 100 };

        gsap.fromTo(
          sel,
          {
            opacity: 0,
            ...start,
            width: n.w,
            height: n.h,
            ...(blurToFocus && { filter: "blur(10px)" }),
          },
          {
            opacity: 1,
            ...anim,
            ...(blurToFocus && { filter: "blur(0px)" }),
            duration,
            ease,
            delay: i * stagger,
          }
        );
      } else {
        gsap.to(sel, { ...anim, duration, ease, overwrite: "auto" });
      }
    });

    introPlayed.current = true;
  }, [
    layout,
    ready,
    inView,
    duration,
    ease,
    stagger,
    blurToFocus,
    animateFrom,
    stageH,
  ]);

  const onEnter = (id) =>
    scaleOnHover &&
    gsap.to(`[data-key="${id}"]`, {
      scale: hoverScale,
      duration: 0.2,
      ease: "power2.out",
    });
  const onLeave = (id) =>
    scaleOnHover &&
    gsap.to(`[data-key="${id}"]`, {
      scale: 1,
      duration: 0.2,
      ease: "power2.out",
    });

  // wrapper: yatayda tam ortaya al
  const wrapperStyle = {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    width: layout.usedWidth,
    height: layout.totalHeight,
    top: Math.max(((stageH || layout.totalHeight) - layout.totalHeight) / 2, 0),
  };

  return (
    <div ref={containerRef} className="relative w-full h-full">
      <div style={wrapperStyle}>
        {layout.nodes.map((it) => (
          <div
            key={it.id}
            data-key={it.id}
            className="absolute box-content"
            style={{ willChange: "transform, width, height, opacity" }}
            onMouseEnter={() => onEnter(it.id)}
            onMouseLeave={() => onLeave(it.id)}
            onClick={() => it.url && window.open(it.url, "_blank", "noopener")}
          >
            <div className="rounded-xl ring-1 ring-white/5 bg-neutral-900/35">
              {/* arka plan/padding doğrudan img üzerinde */}
              <img
                src={it.img}
                alt={it.alt || "logo"}
                className="block object-contain select-none pointer-events-none"
                style={{ padding: it.pad ?? 6, width: it.w, height: it.h }}
                loading="lazy"
                draggable={false}
              />
              {colorShiftOnHover && (
                <div className="color-overlay absolute inset-0 rounded-xl bg-gradient-to-tr from-pink-500/50 to-sky-500/50 opacity-0 pointer-events-none" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
