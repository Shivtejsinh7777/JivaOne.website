import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import { useInView } from "../hooks/useInView";

/* ================================================
   Screenshot mockup data (simulated UI panels)
   ================================================ */
const screenshots = [
  {
    title: "AI Chat Interface",
    description: "Modern glassmorphism chat with Chat, Study, and Dev modes",
    content: (
      <div className="p-6 space-y-4">
        <div className="flex gap-3">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 shrink-0" />
          <div className="rounded-2xl bg-blue-500/10 border border-blue-500/20 px-4 py-3 max-w-xs">
            <p className="text-sm text-slate-300">Explain quantum computing in simple terms</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-400 shrink-0" />
          <div className="rounded-2xl glass-card px-4 py-3 max-w-sm">
            <p className="text-sm text-slate-300">
              Think of regular computers as light switches — they're either ON or OFF (1 or 0).
            </p>
            <p className="text-sm text-slate-300 mt-2">
              Quantum computers use "qubits" that can be both ON and OFF at the same time, like a
              coin spinning in the air...
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 mt-4">
          <span className="text-sm text-slate-500">Type your message...</span>
        </div>
      </div>
    ),
  },
  {
    title: "Voice Assistant",
    description: "Multilingual speech recognition with studio-quality TTS",
    content: (
      <div className="p-6 flex flex-col items-center justify-center space-y-6">
        <div className="relative">
          <div className="h-24 w-24 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
            <div className="h-20 w-20 rounded-full bg-black/40 flex items-center justify-center">
              <div className="h-8 w-8 rounded-full bg-purple-400 animate-pulse" />
            </div>
          </div>
          <div className="absolute inset-0 rounded-full border-2 border-purple-400/30 animate-ping" />
        </div>
        <p className="text-lg font-medium text-white">Listening...</p>
        <div className="flex items-end justify-center gap-1 h-12">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="w-1 rounded-full bg-gradient-to-t from-purple-500 to-blue-400"
              style={{
                height: `${12 + Math.sin(i * 0.5) * 20 + Math.random() * 10}px`,
                animationDelay: `${i * 50}ms`,
              }}
            />
          ))}
        </div>
        <p className="text-sm text-slate-400">
          "Open Chrome and play my focus playlist"
        </p>
      </div>
    ),
  },
  {
    title: "System Automation",
    description: "Control your entire desktop with voice or text commands",
    content: (
      <div className="p-6 space-y-3 font-mono text-sm">
        <div className="flex items-center gap-2 text-green-400">
          <span className="text-slate-600">$</span>
          <span>jiva open "Visual Studio Code"</span>
        </div>
        <div className="text-slate-400 pl-4">
          ✓ Found: C:\Program Files\Microsoft VS Code\Code.exe
          <br />✓ Process started (PID: 22481)
        </div>
        <div className="flex items-center gap-2 text-green-400 mt-4">
          <span className="text-slate-600">$</span>
          <span>jiva volume 60</span>
        </div>
        <div className="text-slate-400 pl-4">✓ System volume set to 60%</div>
        <div className="flex items-center gap-2 text-green-400 mt-4">
          <span className="text-slate-600">$</span>
          <span>jiva screenshot</span>
        </div>
        <div className="text-slate-400 pl-4">
          ✓ Screenshot saved to JIVA_Screenshots/
          <br />
          <span className="text-blue-400">screenshot_2026-05-27.png</span> (2.4 MB)
        </div>
        <div className="flex items-center gap-2 text-slate-500 mt-4">
          <span className="text-slate-600">$</span>
          <span className="animate-typing-cursor">_</span>
        </div>
      </div>
    ),
  },
  {
    title: "Shadow Mode",
    description: "AI productivity tracking with focus analytics",
    content: (
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold text-white">Productivity Dashboard</h4>
          <span className="text-xs text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">
            Active
          </span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Focus Time", value: "4h 32m", color: "text-green-400" },
            { label: "Distracted", value: "23m", color: "text-yellow-400" },
            { label: "Score", value: "92%", color: "text-blue-400" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl bg-white/[0.03] border border-white/5 p-3 text-center">
              <p className={`text-lg font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-xs text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl bg-yellow-500/5 border border-yellow-500/10 p-3">
          <p className="text-xs text-yellow-300">
            ⚡ Shadow Alert: You spent 15 minutes on YouTube. Back to work, boss! 💪
          </p>
        </div>
        <div className="space-y-2">
          {["VS Code — 2h 15m", "Chrome (Docs) — 1h 45m", "Terminal — 32m"].map((app) => (
            <div key={app} className="flex items-center gap-2 text-xs text-slate-400">
              <div className="h-2 w-2 rounded-full bg-blue-400" />
              {app}
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export default function Screenshots() {
  const [current, setCurrent] = useState(0);
  const { ref, isInView } = useInView(0.1);

  const prev = () => setCurrent((c) => (c === 0 ? screenshots.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c + 1) % screenshots.length);

  return (
    <section id="screenshots" className="section-padding relative overflow-hidden">
      <div className="container-custom relative" ref={ref}>
        <SectionHeading
          badge="🖥 Showcase"
          title="See JIVAONE in Action"
          subtitle="Explore the beautiful, modern interface designed for productivity and AI interaction."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          {/* Window mockup */}
          <div className="glass-strong rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/5">
            {/* Title bar */}
            <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3 bg-black/30">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <div className="ml-4 flex-1 text-center">
                <span className="text-xs text-slate-500">
                  JIVAONE — {screenshots[current].title}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="min-h-[360px] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {screenshots[current].content}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Caption */}
          <div className="mt-4 text-center">
            <p className="text-sm font-medium text-white">{screenshots[current].title}</p>
            <p className="text-xs text-slate-400">{screenshots[current].description}</p>
          </div>

          {/* Navigation */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="h-10 w-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {screenshots.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    i === current
                      ? "w-8 bg-gradient-to-r from-blue-500 to-purple-500"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="h-10 w-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
