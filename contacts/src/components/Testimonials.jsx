import React, { useState } from "react";
import { motion } from "framer-motion";

// Resim importları
import alperImage from "../assets/Produksiyon/Müşteri Yorumları/alper burak uslu.jpg";
import elvanImage from "../assets/Produksiyon/Müşteri Yorumları/elvan bayraktar.jpg";
import kemalImage from "../assets/Produksiyon/Müşteri Yorumları/kemalbasar.jpg";
import merveImage from "../assets/Produksiyon/Müşteri Yorumları/merve yıldırım.jpg";
import utkuImage from "../assets/Produksiyon/Müşteri Yorumları/utkuerdemozer.jpg";

// Yorum verileri
const testimonialsData = [
  {
    id: 1,
    name: "Merve Yıldırım",
    title: "MerveYildirimGym Kurucusu",
    quote:
      "Türkiye'nin ilk online stretching platformu olan markam için ürettikleri video içerikleri ve topluluk yönetimi harikaydı. Dijital Odak sayesinde, Türkiye'nin dört bir yanından insanlara ulaşıp sağlıklı yaşamı sevdirdik.",
    image: merveImage,
  },
  {
    id: 2,
    name: "Op. Dr. Alper Burak Uslu",
    title: "Plastik, Rekonstrüktif ve Estetik Cerrahi",
    quote:
      "Yeni kliniğimin marka kimliğini ve web sitesini sıfırdan yarattılar. Modern ve hasta odaklı yaklaşımları, dijitaldeki yüzümüzü tam olarak istediğimiz gibi şekillendirdi. Sonuçtan çok memnunum.",
    image: alperImage,
  },
  {
    id: 3,
    name: "Kemal Başar",
    title: "Tiyatro Yönetmeni",
    quote:
      "Sahnede yarattığımız dünyayı dijitalde bu kadar etkili yansıtabileceklerini düşünmemiştim. Oyunumuz için çektikleri tanıtım filmi, seyirciyle aramızda güçlü bir bağ kurmamızı sağladı. Sanata ve sanatçıya saygıları için minnettarım.",
    image: kemalImage,
  },
  {
    id: 4,
    name: "Op. Dr. Elvan Bayraktar",
    title: "Plastik, Rekonstrüktif ve Estetik Cerrahi",
    quote:
      "Kliniğimizin tanıtım filmi ve sosyal medya yönetimi için Dijital Odak ile çalıştık. Sağlık sektörünün hassasiyetini bilerek, son derece estetik ve profesyonel bir iş çıkardılar. Gönül rahatlığıyla tavsiye ediyorum.",
    image: elvanImage,
  },
  {
    id: 5,
    name: "Op. Dr. Utku Erdem Özer",
    title: "Ortopedi ve Travmatoloji Uzmanı",
    quote:
      "Hastalarımı bilgilendirmek amacıyla hazırladığımız video serisi projesinde Dijital Odak ile çalıştık. Tıbbi konuları, herkesin anlayabileceği sade ve profesyonel bir dille aktarmamızı sağladılar. Harika bir iş çıkardılar.",
    image: utkuImage,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(
    Math.floor(testimonialsData.length / 2)
  );

  const activeTestimonial = testimonialsData[activeIndex];

  // Kartların çapraz açılması için stil ayarları
  const getCardStyle = (index) => {
    const offset = index - activeIndex;
    const absOffset = Math.abs(offset);

    // Aktif kart büyük, diğerleri küçülür
    const scale = offset === 0 ? 1 : 1 - absOffset * 0.12;

    // Şeffaflık - uzaklaştıkça daha şeffaf
    const opacity = 1 - absOffset * 0.25;

    // Z-index - aktif kart en önde
    const zIndex = 10 - absOffset;

    // Yatay hareket
    const translateX = offset * 60;

    // Çapraz açılım için rotasyon (üst kısım açılır, alt kısım daralır)
    const rotateZ = offset * 8; // Z ekseni rotasyonu - ters yön
    const rotateY = offset * -20; // Y ekseni rotasyonu (3D efekt)

    return {
      transform: `translateX(${translateX}%) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`,
      opacity,
      zIndex,
      transformOrigin: "center bottom", // Alt kısım sabit kalır, üst açılır
    };
  };

  return (
    <div className="relative text-white w-full py-20 md:py-28 overflow-hidden">
      <div
        key={activeTestimonial.id}
        className="absolute inset-0 z-0 transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${activeTestimonial.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 backdrop-blur-xl"></div>
      </div>

      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(24,24,27,0) -100%, #000 90%)",
        }}
      ></div>

      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <img
              src="https://dijitalodak.com/core/webp-express/webp-images/uploads/2024/11/dijital-odak-logo.png.webp"
              alt="Dijital Odak Logo"
              className="h-12 mx-auto"
            />
            <h2 className="text-3xl md:text-4xl font-semibold mt-4">
              Müşteri Yorumları
            </h2>
          </div>

          {/* 3D perspektif container */}
          <div
            className="relative h-80 flex items-center justify-center"
            style={{ perspective: "1500px" }}
          >
            {testimonialsData.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="absolute w-56 h-72 md:w-64 md:h-80 cursor-pointer"
                style={{ ...getCardStyle(index) }}
                animate={getCardStyle(index)}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                onClick={() => setActiveIndex(index)}
              >
                {/* Beyaz border ile kart */}
                <div className="relative w-full h-full rounded-3xl shadow-2xl overflow-hidden border-4 border-white">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 w-full">
                    <h3 className="font-semibold text-lg text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-200">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center max-w-3xl mx-auto">
            {/* Turuncu alıntı ikonu */}
            <svg
              className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4"
              viewBox="0 0 448 512"
              fill="#FF5E2E"
            >
              <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V216z" />
            </svg>
            <p className="text-lg md:text-xl italic text-gray-300 leading-relaxed">
              "{activeTestimonial.quote}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
