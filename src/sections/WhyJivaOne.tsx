import { motion } from "framer-motion";
import {
  Layers,
  WifiOff,
  Shield,
  Zap,
  Cpu,
  Brain,
  Monitor,
} from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import { useInView } from "../hooks/useInView";

const reasons = [
  {
    icon: Layers,
    title: "Hybrid AI Architecture",
    description:
      "Seamlessly switches between local GGUF models and cloud APIs. Get the best of both worlds — privacy when you need it, power when you want it.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: WifiOff,
    title: "True Offline Intelligence",
    description:
      "Unlike cloud-dependent assistants, JIVAONE runs powerful AI models directly on your hardware. No internet? No problem. Your AI never sleeps.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Privacy by Design",
    description:
      "Zero telemetry. Zero cloud uploads. Your conversations, files, and data stay on your machine. We don't just promise privacy — we enforce it architecturally.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Zap,
    title: "Blazing Fast Response",
    description:
      "Local inference means zero network latency. GPU-accelerated processing delivers responses in milliseconds, not seconds. Feel the difference.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Cpu,
    title: "Futuristic Architecture",
    description:
      "Built with GPT4All, Faster-Whisper, Kokoro TTS, and deep Windows integration. Not a wrapper — a genuine desktop-native AI operating companion.",
    gradient: "from-rose-500 to-red-500",
  },
  {
    icon: Brain,
    title: "Personalized AI Memory",
    description:
      "JIVA remembers your name, preferences, and context across sessions. The more you use it, the more it adapts to your unique workflow and style.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Monitor,
    title: "Native Desktop Integration",
    description:
      "Deep Windows integration — launch apps, control hardware, manage files, automate tasks. JIVA isn't just a chatbot, it's your desktop co-pilot.",
    gradient: "from-sky-500 to-blue-500",
  },
];

export default function WhyJivaOne() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="why-jivaone" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full bg-blue-500/[0.02] blur-[100px]" />

      <div className="container-custom relative" ref={ref}>
        <SectionHeading
          badge="💎 Why JIVAONE"
          title="Not Just Another AI Tool"
          subtitle="JIVAONE is fundamentally different. Here's why developers, students, and creators are making the switch."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className={`group glass-card p-6 transition-all duration-500 hover:bg-white/[0.06] hover:border-white/15 ${
                  i === reasons.length - 1 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Hover glow */}
                <div
                  className={`absolute inset-0 rounded-[inherit] bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <div
                    className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${reason.gradient} shadow-lg`}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>

                  <h3 className="mb-2 text-lg font-semibold text-white">
                    {reason.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
