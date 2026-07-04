import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Play, ExternalLink, BookOpen, Terminal, Mic, Sparkles } from "lucide-react";
import GlowButton from "../components/ui/GlowButton";
import GradientOrb from "../components/effects/GradientOrb";
import { scrollToSection } from "../lib/utils";

/* ================================================
   Typing animation text
   ================================================ */
const typingLines = [
  "Hey JIVA, open Visual Studio Code",
  "Sure! Launching VS Code for you now...",
  "JIVA, summarize this research paper",
  "Analyzing document... Here's a concise summary:",
  "Play some focus music on Spotify",
  "Starting your focus playlist now 🎵",
];

function TypingText() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const currentLine = typingLines[lineIndex];
    if (charIndex < currentLine.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + currentLine[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 30 + Math.random() * 30);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setLineIndex((prev) => (prev + 1) % typingLines.length);
        setCharIndex(0);
        setDisplayText("");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [charIndex, lineIndex]);

  const isUser = lineIndex % 2 === 0;

  return (
    <div className="flex items-start gap-2">
      <span className={`mt-0.5 text-xs font-bold ${isUser ? "text-blue-400" : "text-purple-400"}`}>
        {isUser ? "YOU" : "JIVA"}
      </span>
      <span className="text-sm text-slate-300">
        {displayText}
        <span className="animate-typing-cursor ml-0.5 inline-block h-4 w-0.5 bg-blue-400" />
      </span>
    </div>
  );
}

/* ================================================
   Voice Waveform
   ================================================ */
function VoiceWaveform() {
  return (
    <div className="flex items-center gap-0.5 h-8">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="w-1 rounded-full bg-gradient-to-t from-blue-500 to-purple-400"
          animate={{
            height: [8, 16 + Math.random() * 16, 8],
          }}
          transition={{
            duration: 0.6 + Math.random() * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.05,
          }}
        />
      ))}
    </div>
  );
}

/* ================================================
   Floating AI Card
   ================================================ */
function FloatingCard({
  icon: Icon,
  label,
  delay,
  className,
}: {
  icon: typeof Terminal;
  label: string;
  delay: number;
  className: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 + delay, duration: 0.6 }}
      className={`absolute glass-card px-3 py-2 flex items-center gap-2 ${className}`}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3 + delay, repeat: Infinity, ease: "easeInOut" }}
      >
        <Icon className="h-4 w-4 text-blue-400" />
      </motion.div>
      <span className="text-xs font-medium text-slate-300 whitespace-nowrap">{label}</span>
    </motion.div>
  );
}

/* ================================================
   Hero Section
   ================================================ */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Gradient Orbs */}
      <GradientOrb color="purple" size={800} className="-top-40 -left-40" />
      <GradientOrb color="blue" size={600} className="-bottom-20 -right-20" delay={2} />
      <GradientOrb color="cyan" size={400} className="top-1/3 right-1/4" delay={4} />

      {/* Grid overlay */}
      <div className="absolute inset-0 animated-grid opacity-40" />

      {/* Content */}
      <div className="container-custom relative z-10 flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-300"
        >
          <Sparkles className="h-4 w-4" />
          <span>Next Generation AI Desktop Companion</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-4 text-6xl font-black tracking-tight sm:text-7xl md:text-8xl lg:text-9xl"
        >
          <span className="gradient-text-hero">JIVAONE</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mb-3 text-xl font-medium text-slate-200 sm:text-2xl md:text-3xl"
        >
          Your AI Operating Companion
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-10 max-w-2xl text-base text-slate-400 sm:text-lg"
        >
          The offline-first AI assistant that controls your desktop, understands your voice in 99+
          languages, and adapts to your workflow — all while keeping your data completely private.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mb-16 flex flex-wrap items-center justify-center gap-3"
        >
          <GlowButton
            size="lg"
            onClick={() => scrollToSection("download")}
            icon={<Download className="h-5 w-5" />}
          >
            Download for Windows
          </GlowButton>
          <GlowButton variant="secondary" size="lg" icon={<Play className="h-5 w-5" />}>
            Watch Demo
          </GlowButton>
          <GlowButton
            variant="outline"
            size="md"
            href="https://github.com"
            icon={<ExternalLink className="h-4 w-4" />}
          >
            GitHub
          </GlowButton>
          <GlowButton variant="ghost" size="md" icon={<BookOpen className="h-4 w-4" />}>
            Documentation
          </GlowButton>
        </motion.div>

        {/* Desktop Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="relative w-full max-w-4xl"
        >
          {/* Window chrome */}
          <div className="glass-strong rounded-2xl shadow-2xl shadow-purple-500/10 overflow-hidden">
            {/* Title bar */}
            <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <div className="ml-4 flex-1 rounded-md bg-white/5 px-3 py-1 text-center text-xs text-slate-500">
                JIVAONE — AI Desktop Companion
              </div>
            </div>

            {/* App content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {/* Sidebar */}
              <div className="border-r border-white/5 p-4 hidden md:block">
                <div className="mb-4">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                    Modes
                  </div>
                  {["Chat Mode", "Study Mode", "Dev Mode"].map((mode, i) => (
                    <div
                      key={mode}
                      className={`rounded-lg px-3 py-2 text-sm mb-1 transition-colors ${
                        i === 0
                          ? "bg-blue-500/15 text-blue-300 border border-blue-500/20"
                          : "text-slate-400 hover:text-slate-300"
                      }`}
                    >
                      {mode}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                    Quick Actions
                  </div>
                  {["🎤 Voice Input", "📸 Screenshot", "🔒 Lock PC"].map((action) => (
                    <div
                      key={action}
                      className="rounded-lg px-3 py-2 text-sm text-slate-400 mb-1"
                    >
                      {action}
                    </div>
                  ))}
                </div>
              </div>

              {/* Main chat area */}
              <div className="col-span-1 md:col-span-2 p-6 min-h-[300px] flex flex-col justify-between">
                {/* Chat messages */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="h-7 w-7 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-white">S</span>
                    </div>
                    <div className="glass-card px-4 py-2.5 max-w-sm">
                      <p className="text-sm text-slate-300">
                        Hey JIVA, what's the weather forecast and can you open my project files?
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-7 w-7 rounded-full bg-gradient-to-br from-purple-500 to-pink-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Sparkles className="h-3.5 w-3.5 text-white" />
                    </div>
                    <div className="glass-card px-4 py-2.5 max-w-md border-purple-500/10">
                      <TypingText />
                    </div>
                  </div>
                </div>

                {/* Voice Waveform */}
                <div className="mb-4 flex items-center justify-center gap-3">
                  <div className="flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/5 px-4 py-2">
                    <Mic className="h-4 w-4 text-purple-400" />
                    <VoiceWaveform />
                    <span className="text-xs text-purple-300">Listening...</span>
                  </div>
                </div>

                {/* Input bar */}
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <Terminal className="h-4 w-4 text-slate-500" />
                  <span className="text-sm text-slate-500">Ask JIVA anything...</span>
                  <div className="ml-auto flex items-center gap-2">
                    <Mic className="h-4 w-4 text-slate-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating cards around the mockup */}
          <FloatingCard
            icon={Mic}
            label="99+ Languages"
            delay={0}
            className="-left-4 top-1/4 sm:-left-16"
          />
          <FloatingCard
            icon={Sparkles}
            label="AI Powered"
            delay={0.3}
            className="-right-4 top-1/3 sm:-right-16"
          />
          <FloatingCard
            icon={Terminal}
            label="System Control"
            delay={0.6}
            className="-left-4 bottom-1/4 sm:-left-20"
          />

          {/* Bottom glow */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-gradient-to-t from-purple-500/20 via-blue-500/10 to-transparent blur-3xl" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-500">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-8 w-5 rounded-full border border-white/20 flex justify-center pt-1.5"
        >
          <div className="h-1.5 w-1 rounded-full bg-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
