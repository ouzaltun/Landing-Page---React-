import SpotlightCard from "./SpotlightCard";

// DEĞİŞİKLİK 1: Resim importları, ekran görüntüsündeki dosya adlarına göre güncellendi.
// Lütfen dosya adlarının ve yollarının projenizle tam olarak eşleştiğinden emin olun.
import imgKurumsal from "../assets/Produksiyon/PortfolyoKapaklari/Slideralti/kurumsal tanıtım filmleri.jpg";
import imgSosyal from "../assets/Produksiyon/PortfolyoKapaklari/Slideralti/sosyal medya.jpg";
import imgInfluencer from "../assets/Produksiyon/PortfolyoKapaklari/Slideralti/Influencer.jpg";
import imgEtkinlik from "../assets/Produksiyon/PortfolyoKapaklari/Slideralti/etkinlik.jpg";

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
                  {/* DEĞİŞİKLİK 3: Resmin kartı kaplaması için Tailwind sınıfları eklendi */}
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </figure>
                {/* DEĞİŞİKLİK 2: Resmin altındaki başlık bölümü kaldırıldı */}
                {/*
                <div className="card-body">
                  <h3 className="card-title">{c.title}</h3>
                </div>
                */}
              </a>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
