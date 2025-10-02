import SpotlightCard from "./SpotlightCard";

// Görsel importları (senin klasör yapına göre)
import imgKurumsal from "../assets/Produksiyon/PortfolyoKapaklari/Slideralti/PWC.jpg";
import imgSosyal from "../assets/Produksiyon/PortfolyoKapaklari/Slideralti/elvan-bayraktar.jpg";
import imgInfluencer from "../assets/Produksiyon/PortfolyoKapaklari/Slideralti/muslera.jpg";
import imgEtkinlik from "../assets/Produksiyon/PortfolyoKapaklari/Slideralti/dichento.jpg";

const cards = [
  {
    title: "Kurumsal Tanıtım Filmleri",
    image: imgKurumsal,
    href: "#kurumsal-tanitim-filmleri",
  },
  {
    title: "Sosyal Medya İçerikleri",
    image: imgSosyal,
    href: "#sosyal-medya-icerikleri",
  },
  {
    title: "Influencer İşbirlikleri",
    image: imgInfluencer,
    href: "#influencer-calismalari",
  },
  {
    title: "Etkinlik Çekimleri",
    image: imgEtkinlik,
    href: "#etkinlik-cekimleri",
  },
];
export default function ServicesGrid() {
  return (
    <section className="section-dark">
      <div className="section-container">
        <div className="cards-grid">
          {cards.map((c, i) => (
            <SpotlightCard
              key={i}
              spotlightColor="rgba(255,94,46,0.18)" // neon turuncuya uyumlu sıcak ışık
              className="service-card"
            >
              <a className="card-link" href={c.href}>
                <figure className="card-media">
                  <img src={c.image} alt={c.title} loading="lazy" />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">{c.title}</h3>
                </div>
              </a>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
