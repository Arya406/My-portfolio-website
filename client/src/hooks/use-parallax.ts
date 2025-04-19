import { useState, useCallback, CSSProperties } from "react";

interface ParallaxResult {
  handleParallaxMove: (e: React.MouseEvent) => void;
  style: CSSProperties;
}

export function useParallax(factor = 0.1): ParallaxResult {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  
  const handleParallaxMove = useCallback((e: React.MouseEvent) => {
    const xCenter = window.innerWidth / 2;
    const yCenter = window.innerHeight / 2;
    
    const xOffset = (xCenter - e.clientX) * factor;
    const yOffset = (yCenter - e.clientY) * factor;
    
    setOffset({ x: xOffset, y: yOffset });
  }, [factor]);
  
  return {
    handleParallaxMove,
    style: {
      transform: `translate(${offset.x}px, ${offset.y}px)`,
    },
  };
}
