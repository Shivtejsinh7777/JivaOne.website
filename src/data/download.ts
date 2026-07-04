export const downloadConfig = {
  version: "1.0.0",
  releaseDate: "2026-05-27",
  fileName: "JIVAONE-Setup.exe",
  fileSize: "124.8 MB",
  fileSizeBytes: 130_862_285,
  downloadUrl: "/downloads/JIVAONE-Setup.exe",
  sha256: "a3f8b2c1d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1",

  systemRequirements: [
    { label: "Operating System", value: "Windows 10 / 11 (64-bit)" },
    { label: "Processor", value: "Intel i5 / AMD Ryzen 5 or higher" },
    { label: "Memory", value: "8 GB RAM minimum, 16 GB recommended" },
    { label: "Storage", value: "1 GB + space for AI models" },
    { label: "GPU (Optional)", value: "NVIDIA with CUDA support" },
    { label: "Runtime", value: "Python 3.10+ (bundled)" },
  ],

  installationSteps: [
    "Download JIVAONE-Setup.exe from the link above",
    "Run the installer — click Yes on the Windows security prompt",
    "Choose your installation directory (default: C:\\Program Files\\JIVAONE)",
    "Wait for installation to complete (~2 minutes)",
    "Launch JIVAONE from your desktop shortcut",
    "Download your preferred AI model from the built-in model manager",
  ],

  changelog: [
    {
      version: "1.0.0",
      date: "2026-05-27",
      changes: [
        "Initial public release",
        "Offline AI engine with GPT4All integration",
        "Multilingual voice assistant (99+ languages)",
        "Studio-quality TTS with Kokoro v0.9 and IndicTTS",
        "Smart system automation (apps, volume, brightness, media)",
        "Face authentication system",
        "Shadow Mode productivity tracking",
        "Chat, Study, and Dev interaction modes",
        "WhatsApp automation",
        "Music playback integration",
        "DuckDuckGo web search fallback",
        "Modern glassmorphism dark UI",
      ],
    },
  ],
};
