import React from "react";
import { Instagram } from "lucide-react";
import GlassSurface from "./GlassSurface";

// WhatsApp (resmi yeşil)
const WhatsAppIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 32 32" className={className} fill="#25D366">
    <path d="M19.11 17.49c-.28-.14-1.65-.81-1.9-.9-.26-.1-.45-.14-.65.14-.19.28-.75.9-.92 1.09-.17.19-.34.21-.62.07-.28-.14-1.16-.43-2.21-1.36-.82-.73-1.38-1.63-1.54-1.9-.16-.28-.02-.43.12-.57.12-.12.28-.31.42-.47.14-.16.19-.26.28-.45.09-.19.05-.35-.02-.5-.07-.14-.65-1.56-.89-2.13-.24-.57-.48-.48-.65-.48-.17 0-.35-.02-.54-.02-.19 0-.5.07-.76.35-.26.28-1 1-1 2.43s1.02 2.82 1.17 3.02c.14.19 2 3.06 4.85 4.29.68.29 1.21.46 1.62.59.68.22 1.32.19 1.82.12.55-.08 1.65-.68 1.89-1.33.23-.65.23-1.21.16-1.33-.07-.12-.26-.19-.54-.33z" />
    <path d="M26.88 5.12A14 14 0 0 0 5.1 26.88L3 29a.9.9 0 0 0 .9 1.53l3.1-1.23A14 14 0 1 0 26.88 5.12zM16 27.1a11.1 11.1 0 1 1 0-22.2 11.1 11.1 0 0 1 0 22.2z" />
  </svg>
);

export default function FloatingSocial({
  instagramUrl = "https://instagram.com/dijitalodak",
  whatsappUrl = "https://wa.me/905377245929?text=Merhabalar%2C%20cekim.dijitalodak.com%20sitenizden%20ula%C5%9F%C4%B1yorum.%20%C5%9Eu%20konuda%20bilgi%20almak%20istiyorum%3A",
}) {
  return (
    <>
      {/* ===== Desktop ===== */}
      <div className="hidden md:block z-[99]">
        {/* Instagram - left bottom (no border) */}
        <div className="fixed bottom-8 left-8 z-[99]">
          <GlassSurface
            width={72}
            height={72}
            borderRadius={999}
            backgroundOpacity={0.1}
            brightness={0}
            opacity={0.1}
            blur={14}
            displace={6}
            distortionScale={-160}
            className="shadow-xl shadow-black/30"
          >
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-16 w-16 items-center justify-center rounded-full 
                         bg-inherit !text-white transition-transform duration-300 
                         hover:scale-110 hover:-translate-y-1"
            >
              <Instagram className="w-7 h-7" style={{ color: "#E4405F" }} />
            </a>
          </GlassSurface>
        </div>

        {/* WhatsApp - right bottom (no border) */}
        <div className="fixed bottom-8 right-8 z-[99]">
          <GlassSurface
            width={72}
            height={72}
            borderRadius={999}
            backgroundOpacity={0.1}
            brightness={60}
            opacity={0.92}
            blur={14}
            displace={6}
            distortionScale={-150}
            className="shadow-lg shadow-green-500/30"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="flex h-16 w-16 items-center justify-center rounded-full 
                         bg-inherit !text-white transition-transform duration-300 
                         hover:scale-110 hover:-translate-y-1"
            >
              <WhatsAppIcon className="w-7 h-7" />
            </a>
          </GlassSurface>
        </div>
      </div>

      {/* ===== Mobile: darker glass bar ===== */}
      <div
        className="md:hidden fixed inset-x-4 bottom-4 z-[99]"
        style={{ paddingBottom: "calc(env(safe-area-inset-bottom))" }}
      >
        <GlassSurface
          width="100%"
          height={72}
          borderRadius={18}
          /* camı belirgin koyulaştır */
          backgroundOpacity={0.22}
          brightness={45}
          opacity={0.95}
          blur={14}
          displace={6}
          distortionScale={-140}
          className="px-2"
        >
          <div className="flex w-full items-center justify-between gap-2">
            {/* Instagram (bg inherit, white text) */}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl 
                         bg-inherit border border-neutral-700 py-3 
                         !text-white transition-all duration-300 hover:bg-white/5"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" style={{ color: "#E4405F" }} />
              <span className="font-medium text-sm !text-white">Instagram</span>
            </a>

            {/* WhatsApp (bg inherit, green border) */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2  rounded-xl 
                         bg-inherit border border-green-500 py-3 
                         !text-white transition-all duration-300 hover:bg-green-500/10"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span className="font-medium text-sm !text-white">WhatsApp</span>
            </a>
          </div>
        </GlassSurface>
      </div>
    </>
  );
}
