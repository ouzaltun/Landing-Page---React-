import React from "react";

// Veri yapısı aynı kalıyor. Pozisyonlar artık sadece masaüstü SVG için geçerli olacak.
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
  // Masaüstü (yatay) layout için SVG çizgilerinin koordinatlarını hesaplayan fonksiyon
  const getLineCoordinates = () => {
    const lines = [];
    for (let i = 0; i < processSteps.length - 1; i++) {
      const startNode = processSteps[i];
      const endNode = processSteps[i + 1];
      lines.push({
        x1: startNode.position.left,
        y1: `calc(${startNode.position.top} + 10px)`, // 20px'lik dot'un merkezini bul
        x2: endNode.position.left,
        y2: `calc(${endNode.position.top} + 10px)`,
      });
    }
    return lines;
  };

  const lines = getLineCoordinates();

  return (
    <div className="py-16 md:py-24 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 md:mb-28">
        Prodüksiyon Süreci
      </h2>

      {/* MASAÜSTÜ GÖRÜNÜM (md ve üzeri ekranlar için)
        - 'hidden' ile mobilde gizlenir.
        - 'md:block' ile masaüstünde görünür hale gelir.
      */}
      <div className="hidden md:block">
        <div className="relative w-11/12 max-w-4xl h-64 mx-auto">
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

      {/* MOBİL GÖRÜNÜM (md altı ekranlar için)
        - 'md:hidden' ile masaüstünde gizlenir.
        - Varsayılan olarak mobilde görünür.
      */}
      <div className="md:hidden max-w-md mx-auto relative pl-6">
        {" "}
        {/* max-w-md ile dar ekranlarda taşmayı engeller */}
        {/* Dikey çizgi */}
        <div
          className="absolute top-0 left-2.5 w-0.5 h-full bg-orange-500 z-0"
          aria-hidden="true"
        ></div>
        <div className="relative z-10">
          {processSteps.map((step, index) => (
            <div key={index} className="flex items-center mb-8 last:mb-0">
              {/* Nokta */}
              <div className="flex-shrink-0 w-5 h-5 bg-orange-500 rounded-full border-4 border-zinc-900 z-10"></div>
              {/* Etiket */}
              <div className="ml-6 flex-grow">
                {" "}
                {/* flex-grow ile etiket alanı genişler */}
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
