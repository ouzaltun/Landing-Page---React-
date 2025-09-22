import "./App.css";
import HeroSlider from "./components/HeroSlider";
import ServicesGrid from "./components/ServicesGrid";
import PortfolioSection from "./components/PortfolioSection";
import SplitText from "./components/SplitText";
import Divider from "./components/Divider";
import SocialMediaCarousel from "./components/SocialMediaCarousel";

import imgPwc from "../src/assets/Produksiyon/PortfolyoKapaklari/etkinlik-cekimleri/pwc.jpg";
import imgAkbank from "../src/assets/Produksiyon/PortfolyoKapaklari/etkinlik-cekimleri/akbank.jpg";
import imgHalkbank from "../src/assets/Produksiyon/PortfolyoKapaklari/etkinlik-cekimleri/halkbank.jpg";
import imgNow from "../src//assets/Produksiyon/PortfolyoKapaklari/etkinlik-cekimleri/now.jpg";

import imgDerya from "../src/assets/Produksiyon/PortfolyoKapaklari/Influencer İçerikleri/derya.jpg";
import imgGururAydogan from "../src/assets/Produksiyon/PortfolyoKapaklari/Influencer İçerikleri/gurur aydoğan.jpg";
import imgMuslera from "../src/assets/Produksiyon/PortfolyoKapaklari/Influencer İçerikleri/muslera.jpg";
import imgYilmazVural from "../src/assets/Produksiyon/PortfolyoKapaklari/Influencer İçerikleri/yılmaz vural.jpg";

import imgDichento from "../src/assets/Produksiyon/PortfolyoKapaklari/Kurumsal Tanıtım Filmleri/dichento.jpg";
import imgFahriGunes from "../src/assets/Produksiyon/PortfolyoKapaklari/Kurumsal Tanıtım Filmleri/fahri güneş.jpg";
import imgHyatt from "../src/assets/Produksiyon/PortfolyoKapaklari/Kurumsal Tanıtım Filmleri/hyatt.jpg";
import imgSafaManav from "../src/assets/Produksiyon/PortfolyoKapaklari/Kurumsal Tanıtım Filmleri/safa manav.jpg";

export default function App() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  // Görsellerini kendi yollarına göre import et

  const items = [
    {
      image: imgDichento,
      yearInfo: "2024 • Tanıtım Filmi",
      title: "Dichento",
    },
    {
      image: imgFahriGunes,
      yearInfo: "2023 • Kurumsal Video",
      title: "Fahri Güneş",
    },
    {
      image: imgHyatt,
      yearInfo: "2024 • Otel Tanıtımı",
      title: "Hyatt Regency",
    },
    {
      image: imgSafaManav,
      yearInfo: "2023 • Marka Filmi",
      title: "Safa Manav",
    },
  ];

  const items2 = [
    {
      image: imgDerya,
      yearInfo: "2024 • Influencer",
      title: "Derya Uluğ ile İş Birliği",
    },
    {
      image: imgGururAydogan,
      yearInfo: "2023 • Sosyal Medya",
      title: "Gurur Aydoğan Marka Yüzü",
    },
    {
      image: imgMuslera,
      yearInfo: "2024 • Reklam Filmi",
      title: "Muslera Kampanyası",
    },
    {
      image: imgYilmazVural,
      yearInfo: "2023 • Lansman",
      title: "Yılmaz Vural Söyleşisi",
    },
  ];

  const items3 = [
    { image: imgAkbank, yearInfo: "2022 • Proje", title: "Akbank X" },
    { image: imgHalkbank, yearInfo: "2023 • Etkinlik", title: "Halkbank" },
    { image: imgNow, yearInfo: "2023 • Event", title: "NOW Show" },
    { image: imgPwc, yearInfo: "2024 • Teknoloji", title: "PWC Future" },
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
        headerTitle="Kurumsal Tanıtım Filmleri"
      />
      <Divider className="my-10" />
      <SocialMediaCarousel
        items={items2}
        initialIndex={0}
        loop={true}
        headerTitle="Influencer Çalışmaları"
      />
      <Divider className="my-10" />
      <SocialMediaCarousel
        items={items3}
        initialIndex={0}
        loop={true}
        headerTitle="Etkinlik Çekimleri"
      />
    </>
  );
}
