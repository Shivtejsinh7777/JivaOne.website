import { motion } from "framer-motion";
import { useInView } from "../../hooks/useInView";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  badge,
  className = "",
  align = "center",
}: SectionHeadingProps) {
  const { ref, isInView } = useInView(0.2);

  return (
    <div
      ref={ref}
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"} ${className}`}
    >
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-300"
        >
          {badge}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-4 text-lg text-slate-400 ${align === "center" ? "mx-auto max-w-2xl" : ""}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
