import { cn } from "../../lib/utils";

interface GlowButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
  icon?: React.ReactNode;
}

export default function GlowButton({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  href,
  icon,
}: GlowButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 cursor-pointer overflow-hidden group";

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.4),0_0_60px_rgba(139,92,246,0.2)] active:scale-[0.97]",
    secondary:
      "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] active:scale-[0.97]",
    outline:
      "bg-transparent text-blue-400 border border-blue-500/30 hover:bg-blue-500/10 hover:border-blue-400/60 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] active:scale-[0.97]",
    ghost:
      "bg-transparent text-slate-300 hover:text-white hover:bg-white/5 active:scale-[0.97]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const content = (
    <>
      {/* Shimmer effect on hover */}
      {variant === "primary" && (
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-700" />
      )}
      {icon && <span className="relative z-10">{icon}</span>}
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
