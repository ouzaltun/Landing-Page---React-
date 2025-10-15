// src/components/PortfolioSection.jsx
import { useState } from "react";
import StarBorder from "./StarBorder";
import DarkVeil from "./DarkVeil";
import Masonry from "./Masonry";

// import CardSwap, { Card } from "./CardSwap"; // ⬅️ GEÇİCİ OLARAK DEVRE DIŞI

// 🔧 Markalar (PNG) — assets/Produksiyon/Markalar/
import akbank from "../assets/Produksiyon/Markalar/akbank.png";
import audi from "../assets/Produksiyon/Markalar/audi.png";
import cfa from "../assets/Produksiyon/Markalar/cfa.png";
import defacto from "../assets/Produksiyon/Markalar/defacto.png";
import dogus from "../assets/Produksiyon/Markalar/dogus.png";
import haberturk from "../assets/Produksiyon/Markalar/haberturk.png";
import halkbank from "../assets/Produksiyon/Markalar/halkbank.png";
import ibb from "../assets/Produksiyon/Markalar/ibb.png";
import nowLogo from "../assets/Produksiyon/Markalar/now.png";
import pierrecardin from "../assets/Produksiyon/Markalar/pierrecardin.png";
import procsin from "../assets/Produksiyon/Markalar/procsin.png";
import pwc from "../assets/Produksiyon/Markalar/pwc.png";
import saka from "../assets/Produksiyon/Markalar/saka.png";
import strategy from "../assets/Produksiyon/Markalar/strategy.png";
import volkswagen from "../assets/Produksiyon/Markalar/volkswagen.png";

// (İstersen link eklemek istersen items içindeki url alanını doldur)
const brandItems = [
  { id: "akbank", img: akbank, alt: "Akbank", height: 180 },
  { id: "audi", img: audi, alt: "Audi", height: 160 },
  { id: "cfa", img: cfa, alt: "CFA", height: 170 },
  { id: "defacto", img: defacto, alt: "DeFacto", height: 180 },
  { id: "dogus", img: dogus, alt: "Doğuş", height: 170 },
  { id: "haberturk", img: haberturk, alt: "HaberTürk", height: 180 },
  { id: "halkbank", img: halkbank, alt: "Halkbank", height: 170 },
  { id: "ibb", img: ibb, alt: "İBB", height: 165 },
  { id: "now", img: nowLogo, alt: "NOW", height: 160 },
  { id: "pierrecardin", img: pierrecardin, alt: "Pierre Cardin", height: 175 },
  { id: "procsin", img: procsin, alt: "Procsin", height: 165 },
  { id: "pwc", img: pwc, alt: "PwC", height: 160 },
  { id: "saka", img: saka, alt: "Saka Su", height: 170 },
  { id: "strategy", img: strategy, alt: "Strategy", height: 165 },
  { id: "volkswagen", img: volkswagen, alt: "Volkswagen", height: 170 },
];

export default function PortfolioSection() {
  const [showVideo, setShowVideo] = useState(false);

  const jumpToShowcase = (e) => {
    e.preventDefault();
    const el = document.getElementById("brand-showcase");
    if (!el) return;
    const headerOffset = 0;
    const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <>
      <>
        {/*
  <section className="section-dark portfolio-intro" id="portfolio">
    <div className="section-container">
      <h2 className="portfolio-kicker">Portfolyoyu incele</h2>
      <a
        className="down-badge"
        href="#brand-showcase"
        onClick={jumpToShowcase}
        aria-label="Aşağı kaydır"
      >
        <span className="chev">⌄</span>
      </a>
    </div>
  </section>
*/}
        {/* ... */}
      </>

      <section className="section-dark portfolio-showcase" id="brand-showcase">
        <div className="dv-bg">
          <DarkVeil
            hueShift={216}
            noiseIntensity={0.02}
            scanlineIntensity={0.06}
            scanlineFrequency={10.0}
            warpAmount={4.12}
            speed={0.7}
            resolutionScale={0.9}
          />
        </div>

        <div className="section-container showcase-grid">
          <div className="copy-col">
            <h3 className="copy-title">
              <span className="line-weak">Ortak Başarılara</span>
              <span className="line-strong">İmza Attığımız Markalar</span>
            </h3>

            <p className="copy-sub">
              Birlikte ürettiğimiz seçkiden bazı iş ortaklarımız.
            </p>

            <div className="cta-row portfolio-cta">
              <StarBorder
                as="button"
                onClick={() => setShowVideo(true)}
                color="#FF5E2E"
                speed="5s"
                thickness={2}
                aria-label="Hikayelerimizi izleyin"
              >
                Hikayelerimizi İzleyin
              </StarBorder>

              <a
                href="https://wa.me/905377245929?text=Merhabalar%2C%20cekim.dijitalodak.com%20sitenizden%20ula%C5%9F%C4%B1yorum.%20%C5%9Eu%20konuda%20bilgi%20almak%20istiyorum%3A"
                className="btn btn-primary"
              >
                İletişime Geçin
              </a>
            </div>
          </div>

          <div>
            <div className="cards-stage">
              {/* --- Masonry Markalar Duvarı --- */}
              {/* Not: Masonry bileşeninin mutlak konumladığı kutuların görünmesi için
                  kapsayıcıya sabit bir yükseklik veriyoruz. İhtiyaca göre ayarla. */}
              <div>
                <Masonry
                  items={brandItems}
                  ease="power3.out"
                  duration={0.6}
                  stagger={0.05}
                  animateFrom="bottom"
                  scaleOnHover
                  hoverScale={0.95}
                  blurToFocus
                  colorShiftOnHover={false}
                  defaultItemHeight={300} // ← logoları daha büyük göstermek için
                />
              </div>

              {/*
              // —— Eski CardSwap alanı (şimdilik saklıyoruz) ——
              <CardSwap
                cardDistance={60}
                verticalDistance={70}
                delay={5000}
                pauseOnHover={true}
                width={360}
                height={260}
                easing="elastic"
              >
                <Card className="brand-card">
                  <img src={pwc} alt="PWC" />
                </Card>
                <Card className="brand-card">
                  <img src={akbank} alt="Akbank" />
                </Card>
                <Card className="brand-card">
                  <img src={halkbank} alt="Halkbank" />
                </Card>
                <Card className="brand-card">
                  <img src={nowLogo} alt="NOW" />
                </Card>
              </CardSwap>
              */}
            </div>
          </div>
        </div>
      </section>

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
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
