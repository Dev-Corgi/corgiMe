"use client"
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScrollWrapper({ children }) {
  useEffect(() => {
    // Lenis 인스턴스 생성
    const lenis = new Lenis({
      lerp: 0.05, // 부드러움 정도 설정
      smooth: true, // 기본 부드러운 스크롤 활성화
    });

    // 스크롤 이벤트 루프
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      // 컴포넌트가 언마운트될 때 스크롤 이벤트 제거
      lenis.destroy();
    };
  }, []);

  return <div>{children}</div>;
}
