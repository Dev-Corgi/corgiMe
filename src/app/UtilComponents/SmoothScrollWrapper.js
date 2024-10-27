// components/SmoothScrollWrapper.js
"use client";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import LenisContext from "../../../context/LenisContext";

export default function SmoothScrollWrapper({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Lenis 인스턴스 생성
    lenisRef.current = new Lenis({
      lerp: 0.05,
      smooth: true,
    });

    // 스크롤 이벤트 루프
    function raf(time) {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisRef.current.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={lenisRef.current}>
      <div>{children}</div>
    </LenisContext.Provider>
  );
}
