export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "Is JIVAONE free to use?",
    answer:
      "Yes! JIVAONE is completely free to download and use. All core features including offline AI, voice assistant, and system automation are available at no cost. We believe powerful AI should be accessible to everyone.",
  },
  {
    question: "Does JIVAONE work offline?",
    answer:
      "Absolutely. JIVAONE is built with an offline-first architecture powered by local GGUF models through GPT4All. Your AI assistant works without any internet connection. When online, it can also perform web searches and access additional cloud capabilities.",
  },
  {
    question: "Is my data private and secure?",
    answer:
      "100%. JIVAONE processes everything locally on your machine. Your conversations, files, and personal data never leave your computer. There are no analytics, no telemetry, and no cloud processing of your private information.",
  },
  {
    question: "What AI models are supported?",
    answer:
      "JIVAONE supports any GGUF-format model compatible with GPT4All. This includes popular models like Llama, Mistral, Phi, and many others. You can download and switch between multiple models based on your needs — from fast chat models to powerful reasoning engines.",
  },
  {
    question: "What are the Windows system requirements?",
    answer:
      "JIVAONE runs on Windows 10 or later (64-bit). Minimum 8GB RAM recommended, 16GB for optimal performance with larger models. An NVIDIA GPU with CUDA support is optional but significantly speeds up inference. Approximately 500MB of disk space for the application, plus additional space for AI models.",
  },
  {
    question: "Does JIVAONE support GPU acceleration?",
    answer:
      "Yes. JIVAONE automatically detects and utilizes NVIDIA GPUs with CUDA support for faster AI inference. If no compatible GPU is found, it seamlessly falls back to CPU processing — so it works on any Windows machine.",
  },
  {
    question: "Will there be an Android or Mac version?",
    answer:
      "Cross-platform support is on our roadmap. JIVAONE is currently optimized for Windows desktop with native integration. Android and macOS versions are planned for future releases. Follow our GitHub for updates on cross-platform development.",
  },
  {
    question: "How do I update JIVAONE?",
    answer:
      "Simply download the latest installer from this website and run it. The installer will automatically update your existing installation while preserving your settings, models, and conversation history.",
  },
];
