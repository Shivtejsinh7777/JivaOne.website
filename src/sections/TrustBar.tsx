import { motion } from "framer-motion";
import {
  ShieldCheck,
  ScanSearch,
  Zap,
  Wifi,
  Lock,
  Monitor,
  Cpu,
  HardDrive,
} from "lucide-react";
import { useInView } from "../hooks/useInView";

const trustItems = [
  { icon: ShieldCheck, label: "Secure Download", color: "text-green-400" },
  { icon: ScanSearch, label: "Virus Scanned", color: "text-blue-400" },
  { icon: Zap, label: "Fast Installation", color: "text-yellow-400" },
  { icon: Wifi, label: "Offline + Online AI", color: "text-cyan-400" },
  { icon: Lock, label: "Privacy Focused", color: "text-purple-400" },
  { icon: Monitor, label: "Windows Compatible", color: "text-blue-300" },
  { icon: Cpu, label: "AI Powered", color: "text-pink-400" },
  { icon: HardDrive, label: "Local Processing", color: "text-emerald-400" },
];

export default function TrustBar() {
  const { ref, isInView } = useInView(0.2);

  return (
    <section ref={ref} className="relative py-16 border-y border-white/5">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/[0.02] via-purple-500/[0.03] to-blue-500/[0.02]" />

      <div className="container-custom relative">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-center text-xs font-medium uppercase tracking-[0.2em] text-slate-500 mb-8"
        >
          Trusted & Secure
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.02] px-4 py-2 backdrop-blur-sm transition-all duration-300 hover:border-white/10 hover:bg-white/[0.05]"
            >
              <item.icon className={`h-4 w-4 ${item.color}`} />
              <span className="text-sm font-medium text-slate-300 whitespace-nowrap">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
