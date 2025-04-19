import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

export function CustomCursor() {
  const isMobile = useIsMobile();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  
  useEffect(() => {
    if (isMobile) return;
    
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const element = document.elementFromPoint(e.clientX, e.clientY);
      const isPointerElement = element?.closest('a, button, [role="button"], input, textarea, select, [tabindex]');
      
      setIsPointer(!!isPointerElement);
    };
    
    window.addEventListener("mousemove", updateMousePosition);
    
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [isMobile]);
  
  if (isMobile) return null;
  
  return (
    <>
      <motion.div
        className="cursor-dot fixed w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999]"
        style={{
          left: position.x,
          top: position.y,
        }}
        animate={{
          scale: isPointer ? 2 : 1,
          backgroundColor: isPointer ? "rgb(109, 40, 217)" : "rgb(0, 112, 243)",
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="cursor-outline fixed w-10 h-10 rounded-full pointer-events-none z-[9998] border-2 border-primary/50"
        style={{
          left: position.x,
          top: position.y,
        }}
        animate={{
          scale: isPointer ? 1.5 : 1,
          borderColor: isPointer ? "rgba(109, 40, 217, 0.5)" : "rgba(0, 112, 243, 0.5)",
        }}
        transition={{ duration: 0.2, delay: 0.01 }}
      />
    </>
  );
}
