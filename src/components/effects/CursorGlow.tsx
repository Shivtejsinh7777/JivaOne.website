import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      // Smooth lerp
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${currentX - 200}px, ${currentY - 200}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
      style={{
        width: 400,
        height: 400,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(139,92,246,0.08) 0%, rgba(59,130,246,0.04) 40%, transparent 70%)",
        willChange: "transform",
      }}
    />
  );
}
