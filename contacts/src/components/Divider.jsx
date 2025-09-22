// Divider.jsx
import React from "react";

const Divider = ({ className }) => {
  // Temel Sınıflar (Mobile-First):
  // w-[85%]: Mobil için varsayılan genişlik %85.
  // mx-auto: Her zaman ortalar.
  // h-px bg-white: 1px yükseklik, beyaz renk.

  // Breakpoint Sınıfları (Masaüstü için):
  // lg:w-[1200px]: "lg" (genellikle 1024px) ve üzeri ekranlarda genişliği 1200px olarak ayarlar.

  const defaultClasses = `
    w-[90%] 
    lg:w-[1200px] 
    mx-auto 
    h-px 
    bg-white
  `;

  // Dışarıdan gelen dikey boşluk (my-*) gibi sınıfları birleştiriyoruz.
  const combinedClasses = `${defaultClasses} ${className || "my-16"}`;

  return <div className={combinedClasses}></div>;
};

export default Divider;
