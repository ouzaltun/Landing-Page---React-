import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

export default function ModalPortal({ children }) {
  const elRef = useRef(null);
  if (!elRef.current) elRef.current = document.createElement("div");

  useEffect(() => {
    const el = elRef.current;
    el.setAttribute("id", "modal-root");
    el.style.position = "relative";
    document.body.appendChild(el);

    // Artık body scroll KİLİTLENMİYOR (sticky hissi için)
    return () => {
      if (el.parentNode) el.parentNode.removeChild(el);
    };
  }, []);

  return createPortal(children, elRef.current);
}
