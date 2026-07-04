import { lazy, Suspense } from "react";
import Navbar from "./components/layout/Navbar";
import CursorGlow from "./components/effects/CursorGlow";
import ParticleField from "./components/effects/ParticleField";
import Hero from "./sections/Hero";

// Lazy load below-the-fold sections for performance
const TrustBar = lazy(() => import("./sections/TrustBar"));
const Features = lazy(() => import("./sections/Features"));
const LiveDemo = lazy(() => import("./sections/LiveDemo"));
const DownloadSection = lazy(() => import("./sections/Download"));
const Screenshots = lazy(() => import("./sections/Screenshots"));
const WhyJivaOne = lazy(() => import("./sections/WhyJivaOne"));
const Testimonials = lazy(() => import("./sections/Testimonials"));
const FAQ = lazy(() => import("./sections/FAQ"));
const Footer = lazy(() => import("./sections/Footer"));

function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="h-8 w-8 rounded-full border-2 border-purple-500/30 border-t-purple-500 animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-[var(--color-bg-primary)]">
      {/* Global Effects */}
      <CursorGlow />
      <ParticleField />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <TrustBar />
          <Features />
          <LiveDemo />
          <DownloadSection />
          <Screenshots />
          <WhyJivaOne />
          <Testimonials />
          <FAQ />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}
