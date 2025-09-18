import "./App.css";
import HeroSlider from "./components/HeroSlider";
import ServicesGrid from "./components/ServicesGrid";
import PortfolioSection from "./components/PortfolioSection";
import SplitText from "./components/SplitText";
import imgPwc from "../src/assets/Produksiyon/PortfolyoKapaklari/etkinlik-cekimleri/pwc.jpg";
import imgAkbank from "../src/assets/Produksiyon/PortfolyoKapaklari/etkinlik-cekimleri/akbank.jpg";
import imgHalkbank from "../src/assets/Produksiyon/PortfolyoKapaklari/etkinlik-cekimleri/halkbank.jpg";
import imgNow from "../src//assets/Produksiyon/PortfolyoKapaklari/etkinlik-cekimleri/now.jpg";
import SocialMediaCarousel from "./components/SocialMediaCarousel";

export default function App() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  // Görsellerini kendi yollarına göre import et

  const items = [
    { image: imgPwc, yearInfo: "2024 • Etkinlik", title: "PWC" },
    { image: imgAkbank, yearInfo: "2023 • Lansman", title: "Akbank" },
    { image: imgHalkbank, yearInfo: "2023 • Etkinlik", title: "Halkbank" },
    { image: imgNow, yearInfo: "2024 • Sahne", title: "NOW" },
    { image: imgPwc, yearInfo: "2024 • Etkinlik", title: "PWC" },
    { image: imgAkbank, yearInfo: "2023 • Lansman", title: "Akbank" },
    { image: imgHalkbank, yearInfo: "2023 • Etkinlik", title: "Halkbank" },
    { image: imgNow, yearInfo: "2024 • Sahne", title: "NOW" },
  ];
  return (
    <>
      <HeroSlider />
      <ServicesGrid />
      <PortfolioSection />
      <div className="portfolio-title-wrap">
        <SplitText
          tag="h1"
          text="Portfolyo"
          className="portfolio-title"
          splitType="chars"
          delay={35} // harfler arası gecikme (ms)
          duration={0.7} // harf animasyon süresi (sn)
          ease="power3.out"
          from={{ opacity: 0, y: 60 }} // alttan gelsin
          to={{ opacity: 1, y: 0 }}
          threshold={0.2} // ekrana %80 girince tetikle
          rootMargin="-120px" // biraz erken başlasın
          textAlign="left" // sola hizalı
        />
      </div>
      <SocialMediaCarousel
        items={items}
        initialIndex={0}
        loop={true}
        onChange={(index) => console.log("Aktif slayt:", index)}
        headerTitle="Kurumsal\nTanıtım Filmleri"
      />
    </>
  );
}
