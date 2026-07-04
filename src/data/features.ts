import {
  Mic,
  MessageSquare,
  Wifi,
  Zap,
  FolderOpen,
  ScanFace,
  Brain,
  LayoutGrid,
  Layers,
  Globe,
  AudioLines,
  Cpu,
} from "lucide-react";

export interface Feature {
  icon: typeof Mic;
  title: string;
  description: string;
  gradient: string;
}

export const features: Feature[] = [
  {
    icon: Mic,
    title: "Voice Assistant",
    description:
      "Multilingual speech recognition in 99+ languages with studio-quality voice synthesis. Speak naturally — JIVA responds instantly.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: MessageSquare,
    title: "AI Chat",
    description:
      "Chat, Study, and Dev modes with deep contextual understanding. Get expert-level responses tailored to your workflow.",
    gradient: "from-purple-500 to-pink-400",
  },
  {
    icon: Wifi,
    title: "Offline AI Engine",
    description:
      "Powered by local GGUF models via GPT4All. Full AI capabilities without internet — your data never leaves your machine.",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    icon: Zap,
    title: "Smart Automation",
    description:
      "Launch apps, control volume, manage brightness, take screenshots, and automate your entire Windows workflow with voice or text.",
    gradient: "from-amber-500 to-orange-400",
  },
  {
    icon: FolderOpen,
    title: "File Control",
    description:
      "System-level file management with intelligent search, quick access, and organized screenshot capture to dedicated folders.",
    gradient: "from-rose-500 to-red-400",
  },
  {
    icon: ScanFace,
    title: "Face Authentication",
    description:
      "Advanced facial recognition for secure, personalized access. Your AI assistant knows who you are the moment you sit down.",
    gradient: "from-violet-500 to-purple-400",
  },
  {
    icon: Brain,
    title: "JIVA Memory System",
    description:
      "Contextual memory that remembers your name, preferences, and facts you share. Every interaction gets more personalized.",
    gradient: "from-sky-500 to-blue-400",
  },
  {
    icon: LayoutGrid,
    title: "Productivity Tools",
    description:
      "Shadow Mode tracks your focus and delivers sharp callouts when you're distracted. Stay productive with AI accountability.",
    gradient: "from-indigo-500 to-blue-400",
  },
  {
    icon: Layers,
    title: "Multi-Model AI",
    description:
      "Switch between multiple GGUF models on the fly. Choose the right model for the right task — from fast chat to deep reasoning.",
    gradient: "from-fuchsia-500 to-pink-400",
  },
  {
    icon: Globe,
    title: "Cross Platform Vision",
    description:
      "Desktop-first with a vision for mobile. Native Windows integration today, with Android and cross-platform support planned.",
    gradient: "from-cyan-500 to-blue-400",
  },
  {
    icon: AudioLines,
    title: "Custom Wake Word",
    description:
      "Personalized activation with custom wake words. Say 'Hey JIVA' and your AI companion springs to life instantly.",
    gradient: "from-lime-500 to-green-400",
  },
  {
    icon: Cpu,
    title: "Real-time Processing",
    description:
      "Local GPU acceleration for blazing-fast inference. No cloud latency — responses generated right on your hardware.",
    gradient: "from-orange-500 to-yellow-400",
  },
];
