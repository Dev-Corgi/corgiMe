import { createContext, useContext } from "react";

// Lenis 컨텍스트 생성
const LenisContext = createContext(null);

// Lenis 컨텍스트 훅 생성
export function useLenis() {
  return useContext(LenisContext);
}

export default LenisContext;