import { useRef, useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "framer-motion";

export function useAnimateOnScroll(threshold = 0.2) {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, amount: threshold });
  
  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);
  
  return { ref, controls };
}
