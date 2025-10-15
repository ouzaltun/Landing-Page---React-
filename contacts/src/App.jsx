import "./App.css";
import HeroSlider from "./components/HeroSlider";
import ServicesGrid from "./components/ServicesGrid";
import PortfolioSection from "./components/PortfolioSection";
import SplitText from "./components/SplitText";
import Divider from "./components/Divider";
import SocialMediaCarousel from "./components/SocialMediaCarousel";
import ProductionProcess from "./components/ProductionProcess";
import Testimonials from "./components/Testimonials";
import FloatingSocial from "./components/FloatingSocial";
// Influencer İçerikleri — Imports
import imgMusleraBioxcin from "../src/assets/Produksiyon/PortfolyoKapaklari/Influencer İçerikleri/bioxcin muslera.jpg";
import imgGururKonyali from "../src/assets/Produksiyon/PortfolyoKapaklari/Influencer İçerikleri/gururaydogan.jpg";
import imgBaranTrendlife from "../src/assets/Produksiyon/PortfolyoKapaklari/Influencer İçerikleri/Baran.jpg";
import imgMustafaReacher from "../src/assets/Produksiyon/PortfolyoKapaklari/Influencer İçerikleri/Mustafa Sandal x Reacher.jpg";
import imgAliRizaOptimum from "../src/assets/Produksiyon/PortfolyoKapaklari/Influencer İçerikleri/Ali Rıza Bilal x Optimum Nutrition.jpg";
import imgAleynaGloria from "../src/assets/Produksiyon/PortfolyoKapaklari/Influencer İçerikleri/aleyna.jpg";
import imgDeryaSaka1 from "../src/assets/Produksiyon/PortfolyoKapaklari/Influencer İçerikleri/deryacebecioglu.jpg";
import imgDeryaSaka2 from "../src/assets/Produksiyon/PortfolyoKapaklari/Influencer İçerikleri/deryacebecioglu2.jpg";
import imgGururPierre from "../src/assets/Produksiyon/PortfolyoKapaklari/Influencer İçerikleri/gurur x pierre cardin.jpg";
import imgEmreKonyali from "../src/assets/Produksiyon/PortfolyoKapaklari/Influencer İçerikleri/Emre Keskin x Konyalı Saat.jpg";
import imgBuseInStreet from "../src/assets/Produksiyon/PortfolyoKapaklari/Influencer İçerikleri/Buse Kara x In Street.jpg";
import imgSimge7Days from "../src/assets/Produksiyon/PortfolyoKapaklari/Influencer İçerikleri/simge.jpg";
import imgMerveSaka from "../src/assets/Produksiyon/PortfolyoKapaklari/Influencer İçerikleri/Merve Yıldırım x Saka.jpg";
import imgMerveOptimum from "../src/assets/Produksiyon/PortfolyoKapaklari/Influencer İçerikleri/Merve Yıldırım x Optimum Nutrition.jpg";
import imgYilmazMisli from "../src/assets/Produksiyon/PortfolyoKapaklari/Influencer İçerikleri/yılmaz vural x misli.jpg";
import imgOzkanMisli from "../src/assets/Produksiyon/PortfolyoKapaklari/Influencer İçerikleri/ozkanozturk.jpg";
import imgMujdatMisli from "../src/assets/Produksiyon/PortfolyoKapaklari/Influencer İçerikleri/mujdat.jpg";
import imgGokhanMisli from "../src/assets/Produksiyon/PortfolyoKapaklari/Influencer İçerikleri/gokhanabdik.jpg";

import imgDichento from "../src/assets/Produksiyon/PortfolyoKapaklari/Kurumsal Tanıtım Filmleri/dichento.jpg";
import imgFahriGunes from "../src/assets/Produksiyon/PortfolyoKapaklari/Kurumsal Tanıtım Filmleri/fahrigunes.jpg";
import imgHyatt from "../src/assets/Produksiyon/PortfolyoKapaklari/Kurumsal Tanıtım Filmleri/hyatt.jpg";
import imgSafaManav from "../src/assets/Produksiyon/PortfolyoKapaklari/Kurumsal Tanıtım Filmleri/safa manav.jpg";
import imgProcsin from "../src/assets/Produksiyon/PortfolyoKapaklari/Kurumsal Tanıtım Filmleri/Procsin Tanıtım Filmi.jpg";
import imgMakss from "../src/assets/Produksiyon/PortfolyoKapaklari/Kurumsal Tanıtım Filmleri/makss handle.jpg";
import imgSaasali from "../src/assets/Produksiyon/PortfolyoKapaklari/Kurumsal Tanıtım Filmleri/sasaalı.jpg";

// Sosyal Medya İçerikleri — Imports
import imgGiray1 from "../src/assets/Produksiyon/PortfolyoKapaklari/Sosyal Medya İçerikleri/giraygenc.jpg";
import imgGiray2 from "../src/assets/Produksiyon/PortfolyoKapaklari/Sosyal Medya İçerikleri/giraygenc2.jpg";

import imgElvan1 from "../src/assets/Produksiyon/PortfolyoKapaklari/Sosyal Medya İçerikleri/elvan bayraktar.jpg";
import imgElvan2 from "../src/assets/Produksiyon/PortfolyoKapaklari/Sosyal Medya İçerikleri/elvan bayraktar 2.jpg";
import imgElvan3 from "../src/assets/Produksiyon/PortfolyoKapaklari/Sosyal Medya İçerikleri/elvan bayraktar 3.jpg";
import imgElvan4 from "../src/assets/Produksiyon/PortfolyoKapaklari/Sosyal Medya İçerikleri/elvan bayraktar 4.jpg";

import imgAlper1 from "../src/assets/Produksiyon/PortfolyoKapaklari/Sosyal Medya İçerikleri/alper burak uslu 1.jpg";
import imgAlper2 from "../src/assets/Produksiyon/PortfolyoKapaklari/Sosyal Medya İçerikleri/alper burak uslu 2.jpg";
import imgAlper3 from "../src/assets/Produksiyon/PortfolyoKapaklari/Sosyal Medya İçerikleri/alper burak uslu 3.jpg";

import imgUtku from "../src/assets/Produksiyon/PortfolyoKapaklari/Sosyal Medya İçerikleri/utkuerdemozer.jpg";

import imgBade1 from "../src/assets/Produksiyon/PortfolyoKapaklari/Sosyal Medya İçerikleri/bade natural 1.jpg";
import imgBade2 from "../src/assets/Produksiyon/PortfolyoKapaklari/Sosyal Medya İçerikleri/bade natural 2.jpg";
import imgBade4 from "../src/assets/Produksiyon/PortfolyoKapaklari/Sosyal Medya İçerikleri/bade natural 4.jpg";
import imgBade from "../src/assets/Produksiyon/PortfolyoKapaklari/Sosyal Medya İçerikleri/bade.jpg";

import imgTiyatro1 from "../src/assets/Produksiyon/PortfolyoKapaklari/Sosyal Medya İçerikleri/kemalbasar.jpg";
import imgTiyatro2 from "../src/assets/Produksiyon/PortfolyoKapaklari/Sosyal Medya İçerikleri/tiyatro 2.jpg";

import imgVillages from "../src/assets/Produksiyon/PortfolyoKapaklari/Sosyal Medya İçerikleri/Villages _ Gayrimenkul _ Tanıtım Filmi.jpg";
import imgVillages2 from "../src/assets/Produksiyon/PortfolyoKapaklari/Sosyal Medya İçerikleri/villages 2.jpg";

import imgNove from "../src/assets/Produksiyon/PortfolyoKapaklari/Sosyal Medya İçerikleri/nove care.jpg";

import imgSafa1 from "../src/assets/Produksiyon/PortfolyoKapaklari/Sosyal Medya İçerikleri/safa manav.jpg";
import imgSafa2 from "../src/assets/Produksiyon/PortfolyoKapaklari/Sosyal Medya İçerikleri/safa manav 2.jpg";
import imgSafa3 from "../src/assets/Produksiyon/PortfolyoKapaklari/Sosyal Medya İçerikleri/safa manav 3.jpg";

import imgHalkbank from "../src/assets/Produksiyon/PortfolyoKapaklari/etkinlik-cekimleri/halkbank.jpg";
import imgAkbank from "../src/assets/Produksiyon/PortfolyoKapaklari/etkinlik-cekimleri/akbank.jpg";
import imgEndress from "../src/assets/Produksiyon/PortfolyoKapaklari/etkinlik-cekimleri/endress hauser.jpg";
import imgNow from "../src/assets/Produksiyon/PortfolyoKapaklari/etkinlik-cekimleri/now.jpg";
import imgPwc from "../src/assets/Produksiyon/PortfolyoKapaklari/etkinlik-cekimleri/pwc.jpg";
import imgPwc2 from "../src/assets/Produksiyon/PortfolyoKapaklari/etkinlik-cekimleri/pwc 2.jpg";

// Sosyal Medya İçerikleri — Imports
import imgPerwoll from "../src/assets/Produksiyon/PortfolyoKapaklari/Sosyal Medya İçerikleri/merveperwoll.jpg";
import imgSasaliAtasehir from "../src/assets/Produksiyon/PortfolyoKapaklari/Kurumsal Tanıtım Filmleri/sasaalı.jpg";
import imgSara from "../src/assets/Produksiyon/PortfolyoKapaklari/Sosyal Medya İçerikleri/profsaracoglu.jpg";
import imgTrendlife from "../src/assets/Produksiyon/PortfolyoKapaklari/Sosyal Medya İçerikleri/sonaytrendlife.jpg";
import imgCaddeMarka from "../src/assets/Produksiyon/PortfolyoKapaklari/Sosyal Medya İçerikleri/caddemarka.jpg";
import imgIff from "../src/assets/Produksiyon/PortfolyoKapaklari/Sosyal Medya İçerikleri/hata.jpg";
import imgGaialea from "../src/assets/Produksiyon/PortfolyoKapaklari/Sosyal Medya İçerikleri/gaialea.jpg";
import imgPicco from "../src/assets/Produksiyon/PortfolyoKapaklari/Sosyal Medya İçerikleri/piccocoffee.jpg";
import imgUruh from "../src/assets/Produksiyon/PortfolyoKapaklari/Sosyal Medya İçerikleri/uruhxgalata.jpg";

export default function App() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  // Görsellerini kendi yollarına göre import et
  const items = [
    {
      image: imgHyatt,
      yearInfo: "2024 • Otel Tanıtımı",
      title: "Hyatt Regency",
      videoUrl: "https://www.youtube.com/watch?v=MctJYo1SGH0",
    },
    {
      image: imgProcsin,
      yearInfo: "2025 • Ürün Tanıtımı",
      title: "Procsin",
      videoUrl: "https://www.youtube.com/watch?v=iZkeFQwIASQ",
    },
    {
      image: imgFahriGunes,
      yearInfo: "2024 • Sporcu Tanıtımı",
      title: "Fahri Güneş",
      videoUrl: "https://www.youtube.com/watch?v=Ja-Y6VAZv44",
    },
    {
      image: imgSaasali,
      yearInfo: "2024 • Şaşaalı Ataşehir Eğlencesi",
      title: "Şaşaalı",
      videoUrl: "https://www.youtube.com/shorts/f5nGj3T26Zs",
    },

    {
      image: imgMakss,
      yearInfo: "2025 • Fuar Tanıtımı",
      title: "Makss Handle",
      videoUrl: "https://www.youtube.com/watch?v=OkGikTVuIC8",
    },
    {
      image: imgDichento,
      yearInfo: "2024 • Ürün Tanıtımı",
      title: "Dichento",
      videoUrl: "https://www.youtube.com/watch?v=jqF2LZi2uGA",
    },
  ];

  const items2 = [
    {
      image: imgMusleraBioxcin,
      yearInfo: "2024 • Marka İşbirliği",
      title: "Fernando Muslera x Bioxcin",
      videoUrl: "https://www.youtube.com/watch?v=0x4TWAog0sM",
    },
    {
      image: imgBaranTrendlife,
      yearInfo: "2024 • Marka İşbirliği",
      title: "Baran Demiroğlu x Trendlife",
      videoUrl: "https://www.youtube.com/watch?v=B9bgclXQ_UA",
    },
    {
      image: imgMustafaReacher,
      yearInfo: "2025 • Marka İşbirliği",
      title: "Mustafa Sandal x Reacher",
      videoUrl: "https://www.youtube.com/watch?v=3XgVNqiX9CA",
    },
    {
      image: imgAliRizaOptimum,
      yearInfo: "2024 • Marka İşbirliği",
      title: "Ali Rıza Bilal x Optimum Nutrition",
      videoUrl: "https://www.youtube.com/watch?v=YrM9iyyc4Uw",
    },
    {
      image: imgAleynaGloria,
      yearInfo: "2024 • Marka İşbirliği",
      title: "Aleyna Çalışkan x Gloria Jean's",
      videoUrl: "https://www.youtube.com/watch?v=UqBRTyZQhaQ",
    },
    {
      image: imgDeryaSaka1,
      yearInfo: "2025 • Marka İşbirliği",
      title: "Derya Cebecioğlu x Saka Su",
      videoUrl: "https://www.youtube.com/watch?v=rPVNnK_xuxE",
    },
    {
      image: imgGururPierre,
      yearInfo: "2025 • Marka İşbirliği",
      title: "Gurur Aydoğan x Pierre Cardin",
      videoUrl: "https://www.youtube.com/watch?v=iPP7mRCbN3c",
    },
    {
      image: imgEmreKonyali,
      yearInfo: "2024 • Marka İşbirliği",
      title: "Emre Keskin x Konyalı Saat",
      videoUrl: "https://www.youtube.com/watch?v=VSjez15pOH0",
    },
    {
      image: imgBuseInStreet,
      yearInfo: "2025 • Marka İşbirliği",
      title: "Buse Kara x In Street",
      videoUrl: "https://www.youtube.com/watch?v=EDLLAIxT1s4",
    },
    {
      image: imgSimge7Days,
      yearInfo: "2024 • Marka İşbirliği",
      title: "Simge Aköz x 7 Days",
      videoUrl: "https://www.youtube.com/watch?v=sjGYvWHWHfA",
    },
    {
      image: imgMerveOptimum,
      yearInfo: "2025 • Marka İşbirliği",
      title: "Merve Yıldırım x Optimum Nutrition",
      videoUrl: "https://www.youtube.com/watch?v=CCEap3foGyc",
    },
    {
      image: imgYilmazMisli,
      yearInfo: "2024 • Marka İşbirliği",
      title: "Yılmaz Vural x Misli",
      videoUrl: "https://www.youtube.com/watch?v=RQnebqWMInI",
    },
    {
      image: imgOzkanMisli,
      yearInfo: "2024 • Marka İşbirliği",
      title: "Özkan Öztürk x Misli",
      videoUrl: "https://www.youtube.com/watch?v=y4jPkg1K4Z0",
    },
  ];

  const items3 = [
    // Bade Natural (5)
    {
      image: imgBade1,
      yearInfo: "2024 • Ürün Çekimi",
      title: "Bade Natural",
      videoUrl: "https://www.youtube.com/shorts/Z4nj82de2y8",
    },
    {
      image: imgBade4, // 2. videonun kapağı 3'ün kapağı oldu
      yearInfo: "2024 • Ürün Çekimi",
      title: "Bade Natural",
      videoUrl: "https://www.youtube.com/shorts/hhPEl5FE9x0",
    },
    {
      image: imgBade, // 3. videonun kapağı eski 4'ün kapağı oldu
      yearInfo: "2025 • Ürün Çekimi",
      title: "Bade Natural",
      videoUrl: "https://www.youtube.com/shorts/jtjm0UopDb4",
    },
    // 4. video kaldırıldı
    {
      image: imgBade2,
      yearInfo: "2025 • Ürün Çekimi",
      title: "Bade Natural",
      videoUrl: "https://www.youtube.com/shorts/KDXv5V6h96o",
    },

    // Tiyatro Keyfi (2)
    {
      image: imgTiyatro2,
      yearInfo: "2024 • Kemal Başar",
      title: "Tiyatro Keyfi",
      videoUrl: "https://www.youtube.com/shorts/j_ULUB93fnM",
    },

    // Villages (2)

    {
      image: imgVillages2,
      yearInfo: "2025 • Gayrimenkul",
      title: "Villages",
      videoUrl: "https://www.youtube.com/shorts/5rnCsBP_y4I",
    },

    // Nove Care (1)
    {
      image: imgNove,
      yearInfo: "2024 • Ürün Çekimi",
      title: "Nove Care",
      videoUrl: "https://www.youtube.com/shorts/z478lPFEHYk",
    },

    {
      image: imgPerwoll,
      yearInfo: "2025 • Ürün Tanıtımı",
      title: "Perwoll",
      videoUrl: "https://www.youtube.com/shorts/KvYGSjSGU7M",
    },
    {
      image: imgSasaliAtasehir,
      yearInfo: "2024 • Kurumsal Tanıtım",
      title: "Şaşaalı Ataşehir",
      videoUrl: "https://www.youtube.com/shorts/f5nGj3T26Zs",
    },
    {
      image: imgSara,
      yearInfo: "2025 • Ürün Tanıtımı",
      title: "Prof. Saraçoğlu",
      videoUrl: "https://www.youtube.com/shorts/CNUAMaZpctM",
    },
    {
      image: imgTrendlife,
      yearInfo: "2025 • Tanıtım",
      title: "Trendlife",
      videoUrl: "https://www.youtube.com/shorts/6VN1-tPEHdI",
    },
    {
      image: imgCaddeMarka,
      yearInfo: "2024 • Ürün Tanıtımı",
      title: "Cadde Marka",
      videoUrl: "https://www.youtube.com/watch?v=INlDNh5dRCo",
    },
    {
      image: imgIff,
      yearInfo: "2024 • Tanıtım",
      title: "International İstanbul Furniture Fair",
      videoUrl: "https://www.youtube.com/shorts/9eWqTGKKCZo",
    },
    {
      image: imgGaialea,
      yearInfo: "2024 • Ürün Tanıtımı",
      title: "Gaialea Cosmetics",
      videoUrl: "https://www.youtube.com/shorts/Xv6Fxs4145w",
    },
    {
      image: imgPicco,
      yearInfo: "2025 • Tanıtım",
      title: "Picco Coffee",
      videoUrl: "https://www.youtube.com/watch?v=qbxdSR5FGxU",
    },
    {
      image: imgUruh,
      yearInfo: "2025 • Tanıtım",
      title: "UruhXGalata",
      videoUrl: "https://www.youtube.com/shorts/nplgM-D8-_w",
    },

    // Dr. Safa Manav (3)
  ];

  const itemsEvent = [
    {
      image: imgHalkbank,
      yearInfo: "2024 • Üreten Kadınlar Etkinliği",
      title: "Halkbank",
      videoUrl: "https://www.youtube.com/watch?v=snSAmGurghw",
    },
    {
      image: imgAkbank,
      yearInfo: "2024 • Akbank Leader’s Summit",
      title: "Akbank",
      videoUrl: "https://www.youtube.com/watch?v=LuA6PxfDv3c",
    },
    {
      image: imgEndress,
      yearInfo: "2025 • Pin Töreni",
      title: "Endress+Hauser",
      videoUrl: "https://www.youtube.com/watch?v=ZAysUKEypHc",
    },
    {
      image: imgNow,
      yearInfo: "2025 • Lansman",
      title: "NOW",
      videoUrl: "https://www.youtube.com/watch?v=FmCVEoEefXQ",
    },
    {
      image: imgPwc,
      yearInfo: "2024 • Platform Etkinliği",
      title: "PwC",
      videoUrl: "https://www.youtube.com/watch?v=lEtMAkXWoT4",
    },
    {
      image: imgHalkbank,
      yearInfo: "2025 • Üreten Kadınlar Etkinliği",
      title: "Halkbank",
      videoUrl: "https://www.youtube.com/watch?v=NIMbq56O-3Y",
    },
    {
      image: imgPwc2,
      yearInfo: "2025 • Yılbaşı Etkinliği",
      title: "PwC",
      videoUrl: "https://www.youtube.com/watch?v=qkttB8sh7hA",
    },
  ];

  const saglikturizm = [
    {
      image: imgSafaManav,
      yearInfo: "2025 • Plastik Cerrah Tanıtımı",
      title: "Dr. Safa Manav",
      videoUrl: "https://www.youtube.com/watch?v=EOB-NHk6JQ0",
    },
    {
      image: imgGiray1,
      yearInfo: "2024 • Sağlık Turizmi",
      title: "Dr. Giray Genç",
      videoUrl: "https://www.youtube.com/shorts/Bx3_l45RFMo",
    },
    {
      image: imgElvan4,
      yearInfo: "2025 • Sağlık Turizmi",
      title: "Dr. Elvan Bayraktar",
      videoUrl: "https://www.youtube.com/shorts/K4OFeD2tCXQ",
    },
    {
      image: imgUtku,
      yearInfo: "2024 • Sağlık Turizmi",
      title: "Dr. Utku Erdem Özer",
      videoUrl: "https://www.youtube.com/shorts/PWEAvhJYxP4",
    },
    {
      image: imgSafa1,
      yearInfo: "2024 • Sağlık Turizmi",
      title: "Dr. Safa Manav",
      videoUrl: "https://www.youtube.com/shorts/bSk8dwEoFzU",
    },

    {
      image: imgAlper1,
      yearInfo: "2024 • Sağlık Turizmi",
      title: "Dr. Alper Burak Uslu",
      videoUrl: "https://www.youtube.com/shorts/Y3pS9NMTlP0",
    },
  ];

  return (
    <>
      <HeroSlider />
      <ServicesGrid />

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
        items={items2}
        initialIndex={0}
        loop={true}
        headerTitle="Influencer Çalışmaları"
        autoplay={true}
        autoplayInterval={2000}
      />
      <Divider className="my-4" />

      <SocialMediaCarousel
        items={items3}
        initialIndex={0}
        loop={true}
        headerTitle="Sosyal Medya İçerikleri"
        autoplay={true}
        autoplayInterval={3000}
      />
      <Divider className="my-4" />

      <SocialMediaCarousel
        items={itemsEvent}
        initialIndex={0}
        loop={true}
        headerTitle="Etkinlik Çekimleri"
        autoplay={true}
        autoplayInterval={4000}
      />
      <Divider className="my-4" />
      <SocialMediaCarousel
        items={items}
        initialIndex={0}
        loop={true}
        headerTitle="Kurumsal Tanıtım Filmleri"
        autoplay={true}
        autoplayInterval={5000}
      />
      <Divider className="my-4" />
      <SocialMediaCarousel
        items={saglikturizm}
        initialIndex={0}
        loop={true}
        headerTitle="Sağlık Turizmi"
        autoplay={true}
        autoplayInterval={6000}
      />
      <PortfolioSection />
      <Testimonials />
      <ProductionProcess />

      <FloatingSocial
        showLabels={false} // masaüstünde sadece ikon isterseniz
        accent="#FF5E2E" // markanızın turuncusu
      />
    </>
  );
}
