import React, { useState, useEffect, useRef } from "react";

// Veri yapısı aynı kalıyor.
const processSteps = [
  {
    name: "Brief & Senaryo",
    position: { top: "15%", left: "5%" },
  },
  {
    name: "Çekim Planlama",
    position: { top: "10%", left: "35%" },
  },
  {
    name: "Prodüksiyon & Çekim",
    position: { top: "65%", left: "65%" },
  },
  {
    name: "Post-Prodüksiyon & Teslim",
    position: { top: "25%", left: "95%" },
  },
];

const ProductionProcess = () => {
  // 1. Konteyner boyutlarını saklamak için bir state ve referans (ref) oluşturuyoruz.
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);

  // 2. Konteynerin boyutu değiştiğinde state'i güncelleyen bir useEffect.
  // Bu sayede ekran boyutu değiştiğinde çizgiler yeniden hesaplanır (responsive).
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    // İlk render'da ve pencere boyutu değiştiğinde boyutu güncelle.
    window.addEventListener("resize", updateSize);
    updateSize(); // İlk yüklemede çalıştır

    // Component kaldırıldığında event listener'ı temizle.
    return () => window.removeEventListener("resize", updateSize);
  }, []); // Boş dependency array, sadece mount ve unmount'ta çalışmasını sağlar.

  // 3. Yüzde değerlerini alıp piksel'e çeviren güncellenmiş fonksiyon
  const getLineCoordinates = (width, height) => {
    if (width === 0 || height === 0) return []; // Boyutlar henüz alınmadıysa boş dizi döndür.

    const lines = [];
    for (let i = 0; i < processSteps.length - 1; i++) {
      const startNode = processSteps[i];
      const endNode = processSteps[i + 1];

      // Yüzde string'ini sayıya çevir (ör: "15%" -> 15)
      const startXPercent = parseFloat(startNode.position.left);
      const startYPercent = parseFloat(startNode.position.top);
      const endXPercent = parseFloat(endNode.position.left);
      const endYPercent = parseFloat(endNode.position.top);

      // Piksel değerlerini hesapla
      // 20px'lik dot'un merkezini bulmak için 10px ekliyoruz. (h-5 tailwind'de 20px'dir)
      const x1 = (startXPercent / 100) * width;
      const y1 = (startYPercent / 100) * height + 10;
      const x2 = (endXPercent / 100) * width;
      const y2 = (endYPercent / 100) * height + 10;

      lines.push({ x1, y1, x2, y2 });
    }
    return lines;
  };

  // 4. Hesaplanan piksel değerleriyle çizgileri oluştur.
  const lines = getLineCoordinates(containerSize.width, containerSize.height);

  return (
    <div className="py-16 md:py-24 px-4 bg-zinc-900">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 md:mb-28">
        Prodüksiyon Süreci
      </h2>

      {/* MASAÜSTÜ GÖRÜNÜM */}
      <div className="hidden md:block">
        {/* 5. Konteynere ref'i ekliyoruz. */}
        <div
          ref={containerRef}
          className="relative w-11/12 max-w-4xl h-64 mx-auto"
        >
          {/* SVG artık sayısal değerler alacak ve tüm tarayıcılarda çalışacak */}
          <svg
            className="absolute top-0 left-0 w-full h-full z-0"
            aria-hidden="true"
          >
            {lines.map((line, index) => (
              <line
                key={index}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                className="stroke-orange-500"
                strokeWidth="2"
              />
            ))}
          </svg>
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="absolute flex flex-col items-center w-36 text-center z-10"
              style={{
                top: step.position.top,
                left: step.position.left,
                transform: "translateX(-50%)",
              }}
            >
              <div className="w-5 h-5 bg-orange-500 rounded-full mb-3"></div>
              <p className="text-white font-medium text-base">{step.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* MOBİL GÖRÜNÜM (Değişiklik yok) */}
      <div className="md:hidden max-w-md mx-auto relative pl-6">
        <div
          className="absolute top-0 left-2.5 w-0.5 h-full bg-orange-500 z-0"
          aria-hidden="true"
        ></div>
        <div className="relative z-10">
          {processSteps.map((step, index) => (
            <div key={index} className="flex items-center mb-8 last:mb-0">
              <div className="flex-shrink-0 w-5 h-5 bg-orange-500 rounded-full border-4 border-zinc-900 z-10"></div>
              <div className="ml-6 flex-grow">
                <p className="text-white font-medium text-lg leading-snug">
                  {step.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductionProcess;
