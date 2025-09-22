import React, { useState } from "react";
import { motion } from "framer-motion";

// Resim importları
import alperImage from "../assets/Produksiyon/Müşteri Yorumları/alper burak uslu.jpg";
import elvanImage from "../assets/Produksiyon/Müşteri Yorumları/elvan bayraktar.jpg";
import kemalImage from "../assets/Produksiyon/Müşteri Yorumları/kemal başar.jpg";
import merveImage from "../assets/Produksiyon/Müşteri Yorumları/merve yıldırım.jpg";
import utkuImage from "../assets/Produksiyon/Müşteri Yorumları/utku erdem özer.jpg";

// Yorum verileri
const testimonialsData = [
  {
    id: 1,
    name: "Merve Yıldırım",
    title: "MerveYildirimGym Kurucusu", // GÜNCELLENDİ
    quote:
      "Türkiye’nin ilk online stretching platformu olan markam için ürettikleri video içerikleri ve topluluk yönetimi harikaydı. Dijital Odak sayesinde, Türkiye'nin dört bir yanından insanlara ulaşıp sağlıklı yaşamı sevdirdik.", // GÜNCELLENDİ
    image: merveImage,
  },
  {
    id: 2,
    name: "Op. Dr. Alper Burak Uslu", // GÜNCELLENDİ
    title: "Plastik, Rekonstrüktif ve Estetik Cerrahi", // GÜNCELLENDİ
    quote:
      "Yeni kliniğimin marka kimliğini ve web sitesini sıfırdan yarattılar. Modern ve hasta odaklı yaklaşımları, dijitaldeki yüzümüzü tam olarak istediğimiz gibi şekillendirdi. Sonuçtan çok memnunum.", // GÜNCELLENDİ
    image: alperImage,
  },
  {
    id: 3,
    name: "Kemal Başar",
    title: "Tiyatro Yönetmeni", // GÜNCELLENDİ (Detaylandırıldı)
    quote:
      "Sahnede yarattığımız dünyayı dijitalde bu kadar etkili yansıtabileceklerini düşünmemiştim. Oyunumuz için çektikleri tanıtım filmi, seyirciyle aramızda güçlü bir bağ kurmamızı sağladı. Sanata ve sanatçıya saygıları için minnettarım.",
    image: kemalImage,
  },
  {
    id: 4,
    name: "Op. Dr. Elvan Bayraktar", // GÜNCELLENDİ
    title: "Plastik, Rekonstrüktif ve Estetik Cerrahi", // GÜNCELLENDİ
    quote:
      "Kliniğimizin tanıtım filmi ve sosyal medya yönetimi için Dijital Odak ile çalıştık. Sağlık sektörünün hassasiyetini bilerek, son derece estetik ve profesyonel bir iş çıkardılar. Gönül rahatlığıyla tavsiye ediyorum.",
    image: elvanImage,
  },
  {
    id: 5,
    name: "Op. Dr. Utku Erdem Özer", // GÜNCELLENDİ
    title: "Ortopedi ve Travmatoloji Uzmanı", // GÜNCELLENDİ
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

  const getCardStyle = (index) => {
    const offset = index - activeIndex;
    const scale = 1 - Math.abs(offset) * 0.15;
    const opacity = 1 - Math.abs(offset) * 0.3;
    const zIndex = 10 - Math.abs(offset);
    const translateX = offset * 40;

    return {
      transform: `translateX(${translateX}%) scale(${scale})`,
      opacity,
      zIndex,
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

      {/* DEĞİŞİKLİK BURADA: Radial gradient, linear gradient ile değiştirildi. */}
      {/* Bu gradient, 40% yüksekliğe kadar şeffaf kalır ve sonra alta doğru siyaha döner. */}
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

          <div className="relative h-80 flex items-center justify-center">
            {testimonialsData.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="absolute w-56 h-72 md:w-64 md:h-80 cursor-pointer"
                style={{ ...getCardStyle(index) }}
                animate={getCardStyle(index)}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                onClick={() => setActiveIndex(index)}
              >
                <div className="relative w-full h-full rounded-2xl shadow-2xl overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="font-semibold text-lg">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-300">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center max-w-3xl mx-auto">
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
