export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Arjun Mehta",
    role: "Full-Stack Developer",
    avatar: "AM",
    quote:
      "JIVAONE replaced three different tools in my workflow. The offline AI is incredibly fast, and Dev Mode gives me production-quality code suggestions without sending my proprietary code to the cloud.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Computer Science Student",
    avatar: "PS",
    quote:
      "Study Mode is a game-changer. I ask JIVA complex questions about data structures and it responds like a patient professor. The voice assistant helps me study hands-free while taking notes.",
    rating: 5,
  },
  {
    name: "Marcus Chen",
    role: "Content Creator & YouTuber",
    avatar: "MC",
    quote:
      "The Shadow Mode is hilariously effective — it actually called me out for spending 40 minutes on Reddit. The productivity tracking alone made this worth installing. Plus, the voice control is silky smooth.",
    rating: 5,
  },
  {
    name: "Sofia Rodriguez",
    role: "AI Research Enthusiast",
    avatar: "SR",
    quote:
      "Finally, an AI assistant that respects privacy. Running local GGUF models means my research data stays on my machine. The multi-model switching is exactly what I needed for comparing outputs.",
    rating: 5,
  },
];
