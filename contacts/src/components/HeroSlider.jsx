import { useEffect, useMemo, useState, useCallback } from "react";
import { X } from "lucide-react";
import YouTube from "react-youtube";

import LiquidEther from "./LiquidEther";
import TrueFocus from "./TrueFocus";
import StarBorder from "./StarBorder";
import ModalPortal from "./ModalPortal";

export default function HeroSlider() {
  const [activeVideo, setActiveVideo] = useState(null);
  const showreelUrl = "https://www.youtube.com/watch?v=nw9tGjxdoSw";

  const openVideo = useCallback((url) => setActiveVideo(url), []);
  const closeVideo = useCallback(() => setActiveVideo(null), []);

  // ESC ile kapatma
  useEffect(() => {
    if (!activeVideo) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeVideo();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeVideo, closeVideo]);

  // Chrome (ses açık) vs Safari/iOS (sessiz) tespiti
  const playbackPrefs = useMemo(() => {
    const ua = navigator.userAgent || "";
    const isIOS =
      /iPad|iPhone|iPod/.test(ua) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const isSafari = /^((?!chrome|android).)*safari/i.test(ua);
    // iOS ve Safari'de sessiz başlat; diğerlerinde ses açık
    const shouldMute = isIOS || isSafari;
    return { shouldMute, isIOS, isSafari };
  }, []);

  const getVideoId = (url) => {
    try {
      if (!url) return null;
      const urlObj = new URL(url);
      if (urlObj.pathname.includes("embed")) {
        const parts = urlObj.pathname.split("/");
        return parts[parts.length - 1];
      }
      return urlObj.searchParams.get("v");
    } catch {
      return null;
    }
  };

  return (
    <section className="hero-wrap relative z-0">
      {/* === Arka plan === */}
      <div className="hero-bg absolute inset-0 z-0">
        <LiquidEther
          colors={["#FF5E2E", "#FF9F68", "#FFD2A0"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
        <div className="hero-vignette absolute inset-0" />
      </div>

      {/* === İçerik === */}
      <div className="hero-inner relative z-10 text-center px-4 py-20">
        <TrueFocus
          sentence="Dijital Odak"
          blurAmount={5}
          borderColor="#FF5E2E"
          glowColor="rgba(255,94,46,.6)"
          animationDuration={0.5}
          pauseBetweenAnimations={1}
        />
        <h1 className="hero-title text-5xl font-bold text-white mt-6">
          ETKİ YARATAN DENEYİMLER
        </h1>
        <p className="hero-sub text-lg text-white/80 mt-4 max-w-2xl mx-auto">
          Hedef kitlenizin ilgisini çeken, hafızada kalan, reklam
          performansınızı yükselten yaratıcı prodüksiyon
        </p>
        <div className="cta-row flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <StarBorder
            as="button"
            onClick={() => openVideo(showreelUrl)}
            color="#FF5E2E"
            speed="5s"
            thickness={2}
            aria-label="Hikayelerimizi izleyin"
          >
            Hikayelerimizi izleyin
          </StarBorder>
          <a
            href="https://wa.me/905377245929?text=Merhabalar%2C%20cekim.dijitalodak.com%20sitenizden%20ula%C5%9F%C4%B1yorum.%20%C5%9Eu%20konuda%20bilgi%20almak%20istiyorum%3A"
            className="btn btn-primary"
          >
            Projenizi Konuşalım
          </a>
        </div>
      </div>

      {/* === Video Popup (Portal) === */}
      {activeVideo && (
        <ModalPortal>
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[100000] flex items-center justify-center p-4"
          >
            {/* Görsel siyah backdrop: scroll'u BLOKLAMAMAK için pointer-events-none */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm pointer-events-none" />

            {/* Modal kutusu: pointer-events-auto → etkileşim burada */}
            <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden z-[100001] shadow-2xl pointer-events-auto">
              <button
                onClick={closeVideo}
                className="absolute z-[100002] top-[20px] right-3 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white"
                aria-label="Kapat"
              >
                <X size={24} />
              </button>

              <YouTube
                key={getVideoId(activeVideo) || "video"}
                videoId={getVideoId(activeVideo)}
                opts={{
                  height: "100%",
                  width: "100%",
                  playerVars: {
                    autoplay: 1,
                    playsinline: 1,
                    mute: playbackPrefs.shouldMute ? 1 : 0,
                    rel: 0,
                    modestbranding: 1,
                  },
                }}
                onReady={(e) => {
                  try {
                    const iframe = e.target.getIframe?.();
                    if (iframe && !iframe.getAttribute("allow")) {
                      iframe.setAttribute(
                        "allow",
                        "autoplay; encrypted-media; picture-in-picture"
                      );
                    }
                    // Chrome (mute=false) için sesi açık başlat
                    if (!playbackPrefs.shouldMute) {
                      e.target.unMute?.();
                      e.target.setVolume?.(100);
                    }
                    e.target.playVideo?.();
                  } catch {}
                }}
                className="w-full h-full"
                iframeClassName="w-full h-full"
              />
            </div>
          </div>
        </ModalPortal>
      )}
    </section>
  );
}
