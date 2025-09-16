// src/components/HeroSlider.jsx
import LiquidEther from "./LiquidEther";
import TrueFocus from "./TrueFocus";
import StarBorder from "./StarBorder";

export default function HeroSlider() {
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
        <span className="pill">Markanız için</span>

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
            as="a"
            href="#stories"
            color="#FF5E2E" // neon turuncu (outline ile uyumlu)
            speed="5s"
            thickness={2}
            aria-label="Hikayelerimizi izleyin"
          >
            Hikayelerimizi izleyin
          </StarBorder>

          <a href="#contact" className="btn btn-primary">
            Projenizi Konuşalım
          </a>
        </div>
      </div>
    </section>
  );
}
