import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import StarBorder from "./StarBorder";
import YouTube from "react-youtube";

const SocialMediaCarousel = ({
  items = [],
  initialIndex = 0,
  loop = true,
  autoplay = false,
  autoplayInterval = 4000,
  onChange,
  headerTitle = "Kurumsal Tanıtım Filmleri",
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [activeVideo, setActiveVideo] = useState(null);

  const carouselRef = useRef(null);
  const trackRef = useRef(null);
  const autoplayRef = useRef(null);

  const createIdFromString = (text) => {
    const turkishMap = {
      ç: "c",
      Ç: "C",
      ğ: "g",
      Ğ: "G",
      ı: "i",
      İ: "I",
      ö: "o",
      Ö: "O",
      ş: "s",
      Ş: "S",
      ü: "u",
      Ü: "U",
    };
    let str = text.toString();
    for (let key in turkishMap) {
      str = str.replace(new RegExp(key, "g"), turkishMap[key]);
    }
    return str
      .toLowerCase()
      .replace(/\n/g, " ")
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "");
  };
  const headerId = createIdFromString(headerTitle);

  const goToNext = useCallback(() => {
    if (loop) setCurrentIndex((prev) => (prev + 1) % items.length);
    else if (currentIndex < items.length - 1) setCurrentIndex(currentIndex + 1);
  }, [currentIndex, items.length, loop]);

  const goToPrevious = useCallback(() => {
    if (loop)
      setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    else if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  }, [currentIndex, items.length, loop]);

  const startAutoplay = useCallback(() => {
    if (!autoplay || isDragging) return;
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => goToNext(), autoplayInterval);
  }, [autoplay, autoplayInterval, goToNext, isDragging]);

  const stopAutoplay = () =>
    autoplayRef.current && clearInterval(autoplayRef.current);
  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrevious();
        stopAutoplay();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goToNext();
        stopAutoplay();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToPrevious, goToNext]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    stopAutoplay();
  };

  const handleMouseDown = (e) => {
    stopAutoplay();
    setIsDragging(true);
    setDragStart(e.clientX);
    setDragOffset(0);
  };
  const handleMouseMove = useCallback(
    (e) => {
      if (isDragging) setDragOffset(e.clientX - dragStart);
    },
    [isDragging, dragStart]
  );
  const handleMouseUp = useCallback(() => {
    if (!isDragging) return;
    const threshold = 100;
    if (dragOffset > threshold) goToPrevious();
    else if (dragOffset < -threshold) goToNext();
    setIsDragging(false);
    setDragOffset(0);
    startAutoplay();
  }, [isDragging, dragOffset, goToNext, goToPrevious, startAutoplay]);

  const handleTouchStart = (e) => {
    stopAutoplay();
    setIsDragging(true);
    setDragStart(e.touches[0].clientX);
    setDragOffset(0);
  };
  const handleTouchMove = useCallback(
    (e) => {
      if (isDragging) setDragOffset(e.touches[0].clientX - dragStart);
    },
    [isDragging, dragStart]
  );
  const handleTouchEnd = useCallback(() => {
    if (!isDragging) return;
    const threshold = 100;
    if (dragOffset > threshold) goToPrevious();
    else if (dragOffset < -threshold) goToNext();
    setIsDragging(false);
    setDragOffset(0);
    startAutoplay();
  }, [isDragging, dragOffset, goToNext, goToPrevious, startAutoplay]);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const getCardStyle = (index) => {
    const distance = Math.abs(index - currentIndex);
    const direction = index - currentIndex;
    let scale = 1,
      opacity = 1,
      zIndex = 10,
      rotateY = 0,
      blur = 0;
    if (distance === 0) {
      scale = 1;
      opacity = 1;
      zIndex = 20;
    } else if (distance === 1) {
      scale = 0.85;
      opacity = 0.7;
      zIndex = 15;
      rotateY = direction > 0 ? 8 : -8;
    } else if (distance === 2) {
      scale = 0.7;
      opacity = 0.5;
      zIndex = 10;
      rotateY = direction > 0 ? 15 : -15;
    } else {
      scale = 0.6;
      opacity = 0.3;
      zIndex = 5;
      rotateY = direction > 0 ? 20 : -20;
      blur = 1;
    }

    const baseTranslateX = (index - currentIndex) * 220;
    const dragTranslateX = isDragging ? dragOffset : 0;
    return {
      transform: `translateX(${
        baseTranslateX + dragTranslateX
      }px) scale(${scale}) rotateY(${rotateY}deg)`,
      opacity,
      zIndex,
      filter: blur > 0 ? `blur(${blur}px)` : "none",
      transition: isDragging
        ? "none"
        : "transform 350ms ease, opacity 350ms ease, filter 350ms ease",
      willChange: "transform",
    };
  };

  const openVideo = (url) => setActiveVideo(url);
  const closeVideo = () => setActiveVideo(null);

  if (!items || items.length === 0) {
    return (
      <div className="w-full min-h-screen bg-black flex items-center justify-center">
        <p className="text-white text-xl">Veri bulunamadı</p>
      </div>
    );
  }

  return (
    <div
      className="w-full min-h-screen bg-black overflow-hidden relative"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      <div className="absolute mt-20 z-40 w-full px-4">
        <div className="section-container flex items-center justify-center md:justify-between gap-4">
          <div
            id={headerId}
            className="text-white text-center md:text-left text-[28px] md:text-[42px] font-bold leading-tight whitespace-pre-line"
          >
            {headerTitle}
          </div>
          <div className="shrink-0">
            <StarBorder
              as="a"
              href="https://wa.me/905377245929?text=Merhabalar%2C%20cekim.dijitalodak.com%20sitenizden%20ula%C5%9F%C4%B1yorum.%20%C5%9Eu%20konuda%20bilgi%20almak%20istiyorum%3A"
              color="#FF5E2E"
              speed="5s"
              thickness={2}
              aria-label="İletişime geçin"
            >
              İletişime Geç
            </StarBorder>
          </div>
        </div>
      </div>

      <div
        ref={carouselRef}
        className="relative w-full h-screen flex items-center justify-center"
        style={{ perspective: "1200px" }}
      >
        <button
          onClick={() => {
            goToPrevious();
            stopAutoplay();
          }}
          disabled={!loop && currentIndex === 0}
          aria-label="Önceki slayt"
          className="absolute left-8 z-30 p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => {
            goToNext();
            stopAutoplay();
          }}
          disabled={!loop && currentIndex === items.length - 1}
          aria-label="Sonraki slayt"
          className="absolute right-8 z-30 p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronRight size={20} />
        </button>

        <div
          ref={trackRef}
          className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {items.map((item, index) => (
            <div key={index} className="absolute" style={getCardStyle(index)}>
              <div className="w-72 h-96 md:w-80 md:h-[420px] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 relative">
                <div className="w-full h-full overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    draggable={false}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  <div
                    className="absolute inset-0 z-10"
                    onClick={() => goToSlide(index)}
                  />
                  {item.videoUrl && (
                    <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                      {/* === YENİ PLAY BUTONU TASARIMI BAŞLANGIÇ === */}
                      <button
                        type="button"
                        className="pointer-events-auto group flex items-center justify-center w-20 h-20 rounded-full !bg-[#1a1a1a75] backdrop-blur-sm border border-white/40 hover:border-white/60 transition-all duration-200 !rounded-[100%] !px-[1.2em] !py-[0.6em] !text-[1em] !font-[500] !font-[inherit] !cursor-pointer !transition-[border-color] !duration-[250ms] !border !border-[#ffffff69]"
                        aria-label={`${item.title} videoyu oynat`}
                        onClick={(e) => {
                          e.stopPropagation();
                          openVideo(item.videoUrl);
                        }}
                        onMouseDown={(e) => e.stopPropagation()}
                      >
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 24 24"
                          fill="white"
                          className="opacity-80 group-hover:opacity-100 transition-opacity duration-300 translate-x-0.5"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                      {/* === YENİ PLAY BUTONU TASARIMI BİTİŞ === */}
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 p-6 text-left z-30">
                    <p className="text-gray-300 text-sm mb-1 font-medium">
                      {item.yearInfo}
                    </p>
                    <h3 className="text-white font-bold text-xl leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white scale-125"
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Slayt ${index + 1}'e git`}
            />
          ))}
        </div>
      </div>

      {/* Video Popup */}
      {activeVideo && (
        <div className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden">
            <button
              onClick={closeVideo}
              className="absolute z-10 top-[20px] right-3 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white"
            >
              <X size={24} />
            </button>
            {/* === ESKİ IFRAME YERİNE YENİ YOUTUBE COMPONENTİ === */}
            <YouTube
              videoId={new URL(activeVideo).searchParams.get("v")} // URL'den video ID'sini alır
              opts={{
                height: "100%",
                width: "100%",
                playerVars: {
                  autoplay: 1, // Otomatik oynatmayı burada belirtiyoruz
                },
              }}
              className="w-full h-full"
              iframeClassName="w-full h-full"
            />
            {/* ================================================= */}
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialMediaCarousel;
