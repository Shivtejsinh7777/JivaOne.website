import { Sparkles, ExternalLink, Globe, Heart, Download } from "lucide-react";
import { scrollToSection } from "../lib/utils";
import GlowButton from "../components/ui/GlowButton";

const footerLinks = {
  Product: [
    { label: "Features", action: () => scrollToSection("features") },
    { label: "Demo", action: () => scrollToSection("demo") },
    { label: "Download", action: () => scrollToSection("download") },
    { label: "Screenshots", action: () => scrollToSection("screenshots") },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "GitHub", href: "https://github.com" },
    { label: "Changelog", action: () => scrollToSection("download") },
    { label: "FAQ", action: () => scrollToSection("faq") },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy.html" },
    { label: "Terms & Conditions", href: "/terms.html" },
    { label: "Refund Policy", href: "/refunds.html" },
    { label: "Contact Us", href: "/contact.html" },
  ],
};

const socialLinks = [
  { icon: ExternalLink, href: "https://github.com", label: "GitHub" },
  { icon: Globe, href: "https://x.com", label: "X (Twitter)" },
  { icon: Globe, href: "https://linkedin.com", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      {/* Gradient top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="container-custom py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                JIVA<span className="gradient-text">ONE</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-xs mb-6 leading-relaxed">
              Your next-generation AI operating companion. Offline-first, privacy-focused, and
              built for power users who demand more from their desktop.
            </p>
            <GlowButton
              size="sm"
              onClick={() => scrollToSection("download")}
              icon={<Download className="h-4 w-4" />}
            >
              Download for Windows
            </GlowButton>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-slate-400 transition-all hover:bg-white/10 hover:text-white"
                  title={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {"href" in link ? (
                      <a
                        href={link.href}
                        className="text-sm text-slate-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <button
                        onClick={link.action}
                        className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer"
                      >
                        {link.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} SMD_Ai. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-xs text-slate-500">
            Made with <Heart className="h-3 w-3 text-red-400 fill-red-400" /> by{" "}
            <span className="text-slate-300 font-medium">Shivtej Mane Deshmukh</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
