import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqItems } from "../data/faq";
import SectionHeading from "../components/ui/SectionHeading";
import { useInView } from "../hooks/useInView";

function FAQAccordionItem({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: (typeof faqItems)[0];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const { ref, isInView } = useInView(0.1);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="glass-card overflow-hidden transition-all duration-300 hover:border-white/15"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer group"
      >
        <span className="text-base font-medium text-white pr-4 group-hover:text-blue-200 transition-colors">
          {item.question}
        </span>
        <div
          className={`shrink-0 flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-300 ${
            isOpen
              ? "bg-purple-500/20 text-purple-300 rotate-0"
              : "bg-white/5 text-slate-400 group-hover:bg-white/10"
          }`}
        >
          {isOpen ? (
            <Minus className="h-4 w-4" />
          ) : (
            <Plus className="h-4 w-4" />
          )}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 border-t border-white/5 pt-4">
              <p className="text-sm leading-relaxed text-slate-400">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-purple-500/[0.02] blur-[100px]" />

      <div className="container-custom relative">
        <SectionHeading
          badge="❓ FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about JIVAONE. Can't find the answer you're looking for? Reach out to us on GitHub."
        />

        <div className="mx-auto max-w-3xl space-y-3">
          {faqItems.map((item, i) => (
            <FAQAccordionItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
