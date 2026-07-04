import { cn } from "../../lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  onClick?: () => void;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
  glow = false,
  onClick,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-card relative overflow-hidden",
        hover &&
          "transition-all duration-300 hover:bg-white/[0.06] hover:border-white/15 hover:scale-[1.02]",
        glow &&
          "hover:shadow-[0_0_30px_rgba(139,92,246,0.15),0_0_60px_rgba(59,130,246,0.08)]",
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
