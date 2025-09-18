import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * SocialMediaCarousel Component
 *
 * Modern, responsive carousel component with 3D perspective effects
 *
 * @param {Array} items - Array of carousel items with structure: { image: string, yearInfo: string, title: string }
 * @param {number} initialIndex - Starting slide index (default: 0)
 * @param {boolean} loop - Enable infinite loop (default: true)
 * @param {function} onChange - Callback function when slide changes
 * @param {string} headerTitle - Main title text (default: "Kurumsal\nTanıtım Filmleri")
 *
 * @example
 * const items = [
 *   { image: "https://example.com/image1.jpg", yearInfo: "2024, Teknoloji", title: "Proje Adı 1" },
 *   { image: "https://example.com/image2.jpg", yearInfo: "2024, Tasarım", title: "Proje Adı 2" }
 * ];
 *
 * <SocialMediaCarousel
 *   items={items}
 *   initialIndex={0}
 *   loop={true}
 *   onChange={(index) => console.log('Active slide:', index)}
 *   headerTitle="Kurumsal Tanıtım Filmleri"
 * />
 */
const SocialMediaCarousel = ({
  items = [],
  initialIndex = 0,
  loop = true,
  onChange,
  headerTitle = "Kurumsal Tanıtım Filmleri",
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const carouselRef = useRef(null);
  const trackRef = useRef(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, items.length, loop]);

  const goToNext = useCallback(() => {
    if (loop) {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    } else if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }, [currentIndex, items.length, loop]);

  const goToPrevious = useCallback(() => {
    if (loop) {
      setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    } else if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }, [currentIndex, items.length, loop]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Notify parent of index change
  useEffect(() => {
    if (onChange) {
      onChange(currentIndex);
    }
  }, [currentIndex, onChange]);

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging) return;

      const offset = e.clientX - dragStart;
      setDragOffset(offset);
    },
    [isDragging, dragStart]
  );

  const handleMouseUp = useCallback(() => {
    if (!isDragging) return;

    const threshold = 100;
    if (dragOffset > threshold) {
      goToPrevious();
    } else if (dragOffset < -threshold) {
      goToNext();
    }

    setIsDragging(false);
    setDragOffset(0);
  }, [isDragging, dragOffset, goToNext, goToPrevious]);

  // Touch handlers
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setDragStart(e.touches[0].clientX);
    setDragOffset(0);
  };

  const handleTouchMove = useCallback(
    (e) => {
      if (!isDragging) return;

      const offset = e.touches[0].clientX - dragStart;
      setDragOffset(offset);
    },
    [isDragging, dragStart]
  );

  const handleTouchEnd = useCallback(() => {
    if (!isDragging) return;

    const threshold = 100;
    if (dragOffset > threshold) {
      goToPrevious();
    } else if (dragOffset < -threshold) {
      goToNext();
    }

    setIsDragging(false);
    setDragOffset(0);
  }, [isDragging, dragOffset, goToNext, goToPrevious]);

  // Add global mouse event listeners
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

    let scale = 1;
    let opacity = 1;
    let zIndex = 10;
    let rotateY = 0;
    let blur = 0;

    if (distance === 0) {
      // Active card
      scale = 1;
      opacity = 1;
      zIndex = 20;
      rotateY = 0;
    } else if (distance === 1) {
      // Adjacent cards
      scale = 0.85;
      opacity = 0.7;
      zIndex = 15;
      rotateY = direction > 0 ? 8 : -8;
    } else if (distance === 2) {
      // Second level cards
      scale = 0.7;
      opacity = 0.5;
      zIndex = 10;
      rotateY = direction > 0 ? 15 : -15;
    } else {
      // Far cards
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

  if (!items || items.length === 0) {
    return (
      <div className="w-full min-h-screen bg-black flex items-center justify-center">
        <p className="text-white text-xl">Veri bulunamadı</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-black overflow-hidden relative">
      {/* Header - Sol üst köşede */}

      <div className="absolute mt-20 z-10 section-container showcase-grid ozi-showcase flex justify-center align-middle self-center-safe">
        <div className="text-white text-[32px] md:text-[42px] font-bold  leading-tight whitespace-pre-line">
          Kurumsal <br></br>Tanıtım Filmleri
        </div>
      </div>

      {/* Carousel Container - Ekranın ortasında */}
      <div
        ref={carouselRef}
        className="relative w-full h-screen flex items-center justify-center"
        style={{ perspective: "1200px" }}
      >
        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          disabled={!loop && currentIndex === 0}
          aria-label="Önceki slayt"
          className="absolute left-8 z-30 p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-white/30"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={goToNext}
          disabled={!loop && currentIndex === items.length - 1}
          aria-label="Sonraki slayt"
          className="absolute right-8 z-30 p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-white/30"
        >
          <ChevronRight size={20} />
        </button>

        {/* Cards Track */}
        <div
          ref={trackRef}
          className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="absolute"
              style={getCardStyle(index)}
              onClick={() => goToSlide(index)}
            >
              <div className="w-72 h-96 md:w-80 md:h-[420px] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl cursor-pointer hover:shadow-3xl transition-shadow duration-300 relative">
                {/* Image */}
                <div className="w-full h-full overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 p-6 text-left">
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

        {/* Dots Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/30 ${
                index === currentIndex
                  ? "bg-white scale-125"
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Slayt ${index + 1}'e git`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialMediaCarousel;
