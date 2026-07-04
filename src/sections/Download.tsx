import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  Monitor,
  Shield,
  CheckCircle2,
  Copy,
  ChevronDown,
  ChevronRight,
  FileDown,
  HardDrive,
  Cpu,
  MemoryStick,
  Zap,
  Clock,
  Check,
} from "lucide-react";
import { downloadConfig } from "../data/download";
import { useInView } from "../hooks/useInView";
import SectionHeading from "../components/ui/SectionHeading";
import GlowButton from "../components/ui/GlowButton";
import GradientOrb from "../components/effects/GradientOrb";

/* ================================================
   Download Progress Animation
   ================================================ */
function DownloadProgress() {
  const [started, setStarted] = useState(false);
  const [progress, setProgress] = useState(0);

  const startDownload = () => {
    if (started) return;
    setStarted(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 3 + 1;
      });
    }, 100);
  };

  return (
    <div className="mt-6">
      {!started ? (
        <GlowButton
          size="lg"
          className="w-full text-lg"
          onClick={startDownload}
          icon={<Download className="h-6 w-6" />}
        >
          Download JIVAONE Setup.exe
        </GlowButton>
      ) : (
        <div className="glass-card p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <FileDown className="h-5 w-5 text-blue-400" />
              <span className="text-sm font-medium text-white">
                {progress >= 100 ? "Download Complete!" : "Downloading..."}
              </span>
            </div>
            <span className="text-sm font-mono text-slate-400">
              {Math.min(Math.round(progress), 100)}%
            </span>
          </div>
          <div className="h-2 rounded-full bg-white/5 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
              style={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-slate-500">{downloadConfig.fileName}</span>
            <span className="text-xs text-slate-500">{downloadConfig.fileSize}</span>
          </div>
          {progress >= 100 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 flex items-center gap-2 text-green-400"
            >
              <CheckCircle2 className="h-4 w-4" />
              <span className="text-sm font-medium">
                Verified & Ready to Install
              </span>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
}

/* ================================================
   Checksum Copy
   ================================================ */
function ChecksumDisplay() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(downloadConfig.sha256);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2 rounded-lg bg-black/30 border border-white/5 px-3 py-2">
      <span className="text-xs font-mono text-slate-500 truncate">
        SHA-256: {downloadConfig.sha256.substring(0, 32)}...
      </span>
      <button
        onClick={handleCopy}
        className="ml-auto shrink-0 rounded-md p-1.5 text-slate-400 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
        title="Copy checksum"
      >
        {copied ? (
          <Check className="h-3.5 w-3.5 text-green-400" />
        ) : (
          <Copy className="h-3.5 w-3.5" />
        )}
      </button>
    </div>
  );
}

/* ================================================
   Download Section
   ================================================ */
export default function DownloadSection() {
  const [changelogOpen, setChangelogOpen] = useState(false);
  const [stepsOpen, setStepsOpen] = useState(false);
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="download" className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <GradientOrb color="blue" size={600} className="top-0 -right-40" />
      <GradientOrb color="purple" size={500} className="bottom-0 -left-40" delay={3} />
      <div className="absolute inset-0 animated-grid opacity-20" />

      <div className="container-custom relative" ref={ref}>
        <SectionHeading
          badge="⬇ Download"
          title="Get JIVAONE"
          subtitle="Download the latest version and start your AI-powered desktop experience in minutes."
        />

        <div className="mx-auto max-w-4xl">
          {/* Main download card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-2xl p-8 shadow-2xl shadow-purple-500/5 border border-white/10"
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600">
                    <Monitor className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">JIVAONE for Windows</h3>
                    <p className="text-sm text-slate-400">Desktop AI Companion</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 rounded-full bg-green-500/10 border border-green-500/20 px-3 py-1">
                  <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-medium text-green-300">Latest</span>
                </div>
                <div className="rounded-full bg-white/5 border border-white/10 px-3 py-1">
                  <span className="text-xs font-mono text-slate-400">
                    v{downloadConfig.version}
                  </span>
                </div>
              </div>
            </div>

            {/* File info grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {[
                { icon: FileDown, label: "File Size", value: downloadConfig.fileSize },
                { icon: Clock, label: "Released", value: downloadConfig.releaseDate },
                { icon: Shield, label: "Security", value: "Verified" },
                { icon: Zap, label: "Install Time", value: "~2 min" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl bg-white/[0.03] border border-white/5 p-3 text-center"
                >
                  <item.icon className="h-4 w-4 text-slate-500 mx-auto mb-1" />
                  <p className="text-xs text-slate-500 mb-0.5">{item.label}</p>
                  <p className="text-sm font-medium text-white">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Checksum */}
            <div className="mb-6">
              <ChecksumDisplay />
            </div>

            {/* Download button + progress */}
            <DownloadProgress />

            {/* Security badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {["Digitally Signed", "No Adware", "Virus Free", "Safe Installer"].map(
                (badge) => (
                  <div
                    key={badge}
                    className="flex items-center gap-1.5 text-xs text-slate-400"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-green-500/70" />
                    {badge}
                  </div>
                )
              )}
            </div>
          </motion.div>

          {/* Expandable sections */}
          <div className="mt-6 space-y-3">
            {/* System Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="glass-card overflow-hidden"
            >
              <button
                onClick={() => setStepsOpen(!stepsOpen)}
                className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <HardDrive className="h-5 w-5 text-blue-400" />
                  <span className="font-medium text-white">
                    System Requirements & Installation
                  </span>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-slate-400 transition-transform ${stepsOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {stepsOpen && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-white/5 pt-4">
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Requirements */}
                        <div>
                          <h4 className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                            <Cpu className="h-4 w-4 text-purple-400" />
                            System Requirements
                          </h4>
                          <div className="space-y-2">
                            {downloadConfig.systemRequirements.map((req) => (
                              <div key={req.label} className="flex items-start gap-2">
                                <MemoryStick className="h-3.5 w-3.5 text-slate-500 mt-0.5 shrink-0" />
                                <div>
                                  <span className="text-xs text-slate-500">{req.label}: </span>
                                  <span className="text-xs text-slate-300">{req.value}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Installation Steps */}
                        <div>
                          <h4 className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                            <ChevronRight className="h-4 w-4 text-blue-400" />
                            Installation Steps
                          </h4>
                          <div className="space-y-2">
                            {downloadConfig.installationSteps.map((step, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-xs font-bold text-blue-400">
                                  {i + 1}
                                </span>
                                <span className="text-xs text-slate-400 leading-relaxed">{step}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Changelog */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="glass-card overflow-hidden"
            >
              <button
                onClick={() => setChangelogOpen(!changelogOpen)}
                className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-purple-400" />
                  <span className="font-medium text-white">Changelog & Release Notes</span>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-slate-400 transition-transform ${changelogOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {changelogOpen && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-white/5 pt-4">
                      {downloadConfig.changelog.map((release) => (
                        <div key={release.version}>
                          <div className="flex items-center gap-2 mb-3">
                            <span className="rounded-full bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 text-xs font-mono text-purple-300">
                              v{release.version}
                            </span>
                            <span className="text-xs text-slate-500">{release.date}</span>
                          </div>
                          <ul className="space-y-1.5">
                            {release.changes.map((change, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                                <CheckCircle2 className="h-3.5 w-3.5 text-green-500/60 mt-0.5 shrink-0" />
                                {change}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
