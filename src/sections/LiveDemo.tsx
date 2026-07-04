import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mic, Terminal, Sparkles } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";

/* ================================================
   Demo conversations
   ================================================ */
interface Message {
  role: "user" | "assistant";
  content: string;
  typing?: boolean;
}

const demoConversations: Record<string, Message[]> = {
  "What can you do?": [
    { role: "user", content: "What can you do?" },
    {
      role: "assistant",
      content:
        "I can help you with a lot! Here's a quick overview:\n\n• 🎤 Voice commands in 99+ languages\n• 💻 Open any app on your PC\n• 🔊 Control volume & brightness\n• 📸 Take screenshots instantly\n• 🎵 Play music from Spotify or YouTube\n• 📱 Send WhatsApp messages\n• 🧠 Study, Chat, and Dev modes\n• 🔒 Lock your PC or schedule shutdowns\n\nJust ask me anything!",
    },
  ],
  "Open Notepad": [
    { role: "user", content: "Open Notepad" },
    {
      role: "assistant",
      content:
        "✅ Launching Notepad for you now...\n\n```\n> Searching for Notepad.exe\n> Found: C:\\Windows\\System32\\notepad.exe\n> Process started (PID: 14832)\n```\n\nNotepad is now open! Need anything else?",
    },
  ],
  "Play some music": [
    { role: "user", content: "Play some chill lo-fi music" },
    {
      role: "assistant",
      content:
        '🎵 Starting your music...\n\nSearching "chill lo-fi" on YouTube Music...\nFound: "Lofi Hip Hop Radio - Beats to Relax/Study To"\n\n▶️ Now playing! I\'ve also adjusted your volume to 60% for the perfect ambience.\n\nSay "next track" or "stop music" anytime.',
    },
  ],
  "Take a screenshot": [
    { role: "user", content: "Take a screenshot" },
    {
      role: "assistant",
      content:
        "📸 Screenshot captured!\n\n```\n> Capturing screen...\n> Saved to: JIVA_Screenshots/screenshot_2026-05-27_10-45-32.png\n> File size: 2.4 MB\n```\n\nScreenshot saved to your JIVA_Screenshots folder. Want me to open it?",
    },
  ],
};

const promptSuggestions = Object.keys(demoConversations);

/* ================================================
   Voice Waveform
   ================================================ */
function LiveWaveform({ active }: { active: boolean }) {
  return (
    <div className="flex items-end justify-center gap-[3px] h-10">
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="w-[2px] rounded-full bg-gradient-to-t from-purple-500 to-blue-400"
          animate={
            active
              ? { height: [4, 8 + Math.random() * 24, 4] }
              : { height: 4 }
          }
          transition={{
            duration: 0.4 + Math.random() * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.03,
          }}
        />
      ))}
    </div>
  );
}

/* ================================================
   Typing Indicator
   ================================================ */
function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="h-2 w-2 rounded-full bg-purple-400"
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.15,
          }}
        />
      ))}
    </div>
  );
}

/* ================================================
   LiveDemo Section
   ================================================ */
export default function LiveDemo() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [voiceActive, setVoiceActive] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handlePrompt = (prompt: string) => {
    const convo = demoConversations[prompt];
    if (!convo) return;

    // Add user message
    setMessages((prev) => [...prev, convo[0]]);
    setIsTyping(true);

    // Simulate typing delay then add assistant response
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, convo[1]]);
    }, 1500 + Math.random() * 1000);
  };

  const toggleVoice = () => {
    setVoiceActive((prev) => !prev);
    if (!voiceActive) {
      setTimeout(() => setVoiceActive(false), 3000);
    }
  };

  return (
    <section id="demo" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 animated-grid-dense opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/[0.03] blur-[100px]" />

      <div className="container-custom relative">
        <SectionHeading
          badge="⚡ Live Demo"
          title="Experience JIVA in Action"
          subtitle="Try an interactive simulation of JIVAONE's AI capabilities. Click a prompt below to see how JIVA responds."
        />

        <div className="mx-auto max-w-3xl">
          {/* Chat container */}
          <div className="glass-strong rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/5">
            {/* Terminal-style header */}
            <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3 bg-black/30">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center gap-2 ml-3">
                <Terminal className="h-3.5 w-3.5 text-slate-500" />
                <span className="text-xs text-slate-500 font-mono">jivaone://interactive-demo</span>
              </div>
              <div className="ml-auto flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-green-400">Online</span>
              </div>
            </div>

            {/* Chat area */}
            <div className="h-[400px] overflow-y-auto p-6 space-y-4 scrollbar-thin">
              {/* Welcome message */}
              {messages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center h-full text-center"
                >
                  <Sparkles className="h-10 w-10 text-purple-400 mb-4" />
                  <p className="text-lg font-medium text-white mb-2">
                    JIVAONE Interactive Demo
                  </p>
                  <p className="text-sm text-slate-400 max-w-sm">
                    Click one of the prompts below to see how JIVA processes and responds to your
                    commands in real-time.
                  </p>
                </motion.div>
              )}

              {/* Messages */}
              <AnimatePresence mode="popLayout">
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex items-start gap-3 ${
                      msg.role === "user" ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${
                        msg.role === "user"
                          ? "bg-gradient-to-br from-blue-500 to-cyan-400"
                          : "bg-gradient-to-br from-purple-500 to-pink-400"
                      }`}
                    >
                      {msg.role === "user" ? (
                        <span className="text-xs font-bold text-white">S</span>
                      ) : (
                        <Sparkles className="h-4 w-4 text-white" />
                      )}
                    </div>
                    <div
                      className={`max-w-md rounded-2xl px-4 py-3 ${
                        msg.role === "user"
                          ? "bg-blue-500/15 border border-blue-500/20"
                          : "glass-card border-purple-500/10"
                      }`}
                    >
                      <p className="text-sm text-slate-200 whitespace-pre-line font-mono leading-relaxed">
                        {msg.content}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-start gap-3"
                >
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-400 flex items-center justify-center">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                  <div className="glass-card border-purple-500/10">
                    <TypingIndicator />
                  </div>
                </motion.div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Voice waveform */}
            <div className="border-t border-white/5 px-6 py-3 bg-black/20">
              <LiveWaveform active={voiceActive} />
            </div>

            {/* Input area */}
            <div className="border-t border-white/5 p-4 flex items-center gap-3 bg-black/30">
              <div className="flex-1 flex items-center gap-2 rounded-xl bg-white/5 border border-white/5 px-4 py-3">
                <Terminal className="h-4 w-4 text-slate-500" />
                <span className="text-sm text-slate-500">Ask JIVA anything...</span>
              </div>
              <button
                onClick={toggleVoice}
                className={`h-10 w-10 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
                  voiceActive
                    ? "bg-purple-500 text-white shadow-lg shadow-purple-500/30"
                    : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Mic className="h-4 w-4" />
              </button>
              <button className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition-all cursor-pointer">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Prompt suggestions */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {promptSuggestions.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handlePrompt(prompt)}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300 transition-all duration-300 hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-200 cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
