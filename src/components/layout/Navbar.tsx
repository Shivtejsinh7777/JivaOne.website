import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Sparkles } from "lucide-react";
import { scrollToSection } from "../../lib/utils";
import GlowButton from "../ui/GlowButton";

const navLinks = [
  { label: "Features", id: "features" },
  { label: "Demo", id: "demo" },
  { label: "Download", id: "download" },
  { label: "Why JIVA", id: "why-jivaone" },
  { label: "FAQ", id: "faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (id: string) => {
    scrollToSection(id);
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass-strong shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-shadow">
              <Sparkles className="h-5 w-5 text-white" />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              JIVA<span className="gradient-text">ONE</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="relative rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white cursor-pointer group"
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-3/4 rounded-full" />
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <GlowButton
              size="sm"
              onClick={() => handleNav("download")}
              icon={<Download className="h-4 w-4" />}
            >
              Download
            </GlowButton>
          </div>

          {/* Mobile Burger */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white hover:bg-white/10 transition-colors md:hidden cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 glass-strong pt-20 md:hidden"
          >
            <div className="flex flex-col gap-2 p-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNav(link.id)}
                  className="rounded-xl px-4 py-3 text-left text-lg font-medium text-slate-200 hover:bg-white/5 hover:text-white transition-colors cursor-pointer"
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="mt-4 pt-4 border-t border-white/10">
                <GlowButton
                  size="lg"
                  className="w-full"
                  onClick={() => handleNav("download")}
                  icon={<Download className="h-5 w-5" />}
                >
                  Download for Windows
                </GlowButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
