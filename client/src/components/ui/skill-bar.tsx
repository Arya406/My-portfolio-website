import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";

interface SkillBarProps {
  name: string;
  percentage: number;
  delay?: number;
}

export function SkillBar({ name, percentage, delay = 0 }: SkillBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
      controls.start({
        width: `${percentage}%`,
        transition: { duration: 1, delay }
      });
    }
  }, [isInView, percentage, controls, delay]);
  
  return (
    <div className="skill-item" ref={ref}>
      <div className="flex justify-between mb-2">
        <span className="font-medium">{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
          initial={{ width: "0%" }}
          animate={controls}
        />
      </div>
    </div>
  );
}
