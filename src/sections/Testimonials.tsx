import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "../data/testimonials";
import SectionHeading from "../components/ui/SectionHeading";
import { useInView } from "../hooks/useInView";

export default function Testimonials() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-500/[0.03] blur-[100px]" />

      <div className="container-custom relative" ref={ref}>
        <SectionHeading
          badge="❤️ Testimonials"
          title="Loved by Users"
          subtitle="Hear from developers, students, and creators who use JIVAONE every day."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group glass-card p-6 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/15"
            >
              {/* Quote icon */}
              <Quote className="h-8 w-8 text-purple-500/20 mb-4" />

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm leading-relaxed text-slate-300 mb-6">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-sm font-bold text-white">{t.avatar}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
