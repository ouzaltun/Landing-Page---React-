import CardSwap, { Card } from "./CardSwap";
import StarBorder from "./StarBorder";
import DarkVeil from "./DarkVeil";
import { useState } from "react";

// 🔧 Görselleri ASCII isimlerle kullan (öneri klasör):
// assets/Produksiyon/PortfolyoKapaklari/etkinlik-cekimleri/
import imgPwc from "../assets/Produksiyon/PortfolyoKapaklari/etkinlik-cekimleri/pwc.jpg";
import imgAkbank from "../assets/Produksiyon/PortfolyoKapaklari/etkinlik-cekimleri/akbank.jpg";
import imgHalkbank from "../assets/Produksiyon/PortfolyoKapaklari/etkinlik-cekimleri/halkbank.jpg";
import imgNow from "../assets/Produksiyon/PortfolyoKapaklari/etkinlik-cekimleri/now.jpg";

export default function PortfolioSection() {
  const [showVideo, setShowVideo] = useState(false);

  const jumpToShowcase = (e) => {
    e.preventDefault();
    const el = document.getElementById("brand-showcase");
    if (!el) return;
    const headerOffset = 0; // sabit header varsa 64 gibi bir değer ver
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
            hueShift={216} // 18–30 aralığını deneyebilirsin
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

            {/* YALNIZCA bu bölüm için sola yaslı CTA */}
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

          <div className="cards-col">
            <div className="cards-stage">
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
                  <img src={imgPwc} alt="PWC" />
                </Card>
                <Card className="brand-card">
                  <img src={imgAkbank} alt="Akbank" />
                </Card>
                <Card className="brand-card">
                  <img src={imgHalkbank} alt="Halkbank" />
                </Card>
                <Card className="brand-card">
                  <img src={imgNow} alt="NOW" />
                </Card>
              </CardSwap>
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
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
