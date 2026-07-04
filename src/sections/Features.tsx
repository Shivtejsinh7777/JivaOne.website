import { motion } from "framer-motion";
import { features } from "../data/features";
import { useInView } from "../hooks/useInView";
import SectionHeading from "../components/ui/SectionHeading";

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const { ref, isInView } = useInView(0.1);
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
      className="group relative"
    >
      <div className="tilt-card glass-card h-full p-6 transition-all duration-500 hover:bg-white/[0.06] hover:border-white/15">
        {/* Hover glow */}
        <div
          className={`absolute inset-0 rounded-[inherit] bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`}
        />

        {/* Neon border effect */}
        <div
          className={`absolute -inset-[1px] rounded-[inherit] bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500`}
        />

        <div className="relative z-10">
          {/* Icon */}
          <div
            className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg`}
          >
            <Icon className="h-6 w-6 text-white" />
          </div>

          {/* Title */}
          <h3 className="mb-2 text-lg font-semibold text-white group-hover:text-white transition-colors">
            {feature.title}
          </h3>

          {/* Description */}
          <p className="text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section id="features" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-purple-500/[0.03] blur-[120px]" />

      <div className="container-custom relative">
        <SectionHeading
          badge="✦ Features"
          title="Everything You Need, Built In"
          subtitle="A comprehensive AI toolkit that integrates with your entire desktop workflow — from voice control to system automation."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
