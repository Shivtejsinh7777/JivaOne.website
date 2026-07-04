import { motion } from "framer-motion";

interface GradientOrbProps {
  color?: "blue" | "purple" | "cyan";
  size?: number;
  className?: string;
  delay?: number;
}

const colorMap = {
  blue: "rgba(59, 130, 246, 0.15)",
  purple: "rgba(139, 92, 246, 0.15)",
  cyan: "rgba(6, 182, 212, 0.12)",
};

export default function GradientOrb({
  color = "purple",
  size = 600,
  className = "",
  delay = 0,
}: GradientOrbProps) {
  return (
    <motion.div
      className={`pointer-events-none absolute rounded-full blur-[120px] ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${colorMap[color]} 0%, transparent 70%)`,
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.4, 0.7, 0.4],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}
