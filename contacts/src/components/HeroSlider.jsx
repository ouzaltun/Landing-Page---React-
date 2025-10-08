import { useState } from "react";
import LiquidEther from "./LiquidEther";
import TrueFocus from "./TrueFocus";
import StarBorder from "./StarBorder";

export default function HeroSlider() {
  const [showVideo, setShowVideo] = useState(false); // 🔥 modal kontrolü

  return (
    <section className="hero-wrap">
      <div className="hero-bg">
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
        <div className="hero-vignette" />
      </div>

      <div className="hero-inner">
        {/* <span className="pill">Markanız için</span> */}

        <TrueFocus
          sentence="Dijital Odak"
          blurAmount={5}
          borderColor="#FF5E2E"
          glowColor="rgba(255,94,46,.6)"
          animationDuration={0.5}
          pauseBetweenAnimations={1}
        />

        <h1 className="hero-title">ETKİ YARATAN DENEYİMLER</h1>

        <p className="hero-sub">
          Hedef kitlenizin ilgisini çeken, hafızada kalan, reklam
          performansınızı yükselten yaratıcı prodüksiyon
        </p>

        <div className="cta-row">
          <StarBorder
            as="button"
            onClick={() => setShowVideo(true)} // 👈 tıklayınca popup aç
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

      {/* 🎬 Pop-up Video Modal */}
      {showVideo && (
        <div className="video-modal" onClick={() => setShowVideo(false)}>
          <div className="video-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowVideo(false)}>
              ✕
            </button>
            <iframe
              width="800"
              height="450"
              src="https://www.youtube.com/embed/nw9tGjxdoSw?autoplay=1"
              title="Showreel"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
