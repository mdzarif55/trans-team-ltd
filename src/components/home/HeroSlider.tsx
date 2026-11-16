import Link from "next/link";
import { ArrowRight, Shield, Award, Clock } from "lucide-react";

export default function HeroSlider() {
  return (
    <section
      className="relative w-full h-[640px] sm:h-[700px] lg:h-[780px] bg-navy-950 overflow-hidden select-none"
      aria-label="Trans Team Ltd. Hero Showcase"
    >
      {/* Background Video Player - Permanently Muted, Autoplay, Looping */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero/hero-ship.jpg"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>

        {/* Cinematic Gradient Overlays for optimal readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/50" />

        {/* Subtle decorative grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Hero Content Area */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pt-20 sm:pt-24">
        <div className="max-w-2xl sm:max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide bg-brand-orange/20 text-brand-orange border border-brand-orange/30 mb-5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            <span>18+ Years of Industry Leadership</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.12] mb-5 drop-shadow-md">
            Moving Your Business Forward
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-normal mb-8 max-w-2xl drop-shadow">
            Reliable logistics solutions, professional freight forwarding, and seamless global connectivity across Bangladesh and worldwide.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-sm sm:text-base shadow-lg transition-all duration-200 hover:shadow-brand-orange/25 active:scale-95"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base backdrop-blur-md border border-white/20 transition-all duration-200 active:scale-95"
            >
              <span>Contact Our Team</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Bottom Trust Strip */}
      <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-20 max-w-5xl w-full px-4 items-center justify-between text-xs text-slate-300 bg-navy-950/80 backdrop-blur-md py-3 px-6 rounded-xl border border-white/10 shadow-xl">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-brand-orange" />
          <span>18+ Years Logistics Leadership in Bangladesh</span>
        </div>
        <div className="h-4 w-px bg-white/20" />
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-brand-orange" />
          <span>ISO 9001:2008 &amp; FIATA Certified Operations</span>
        </div>
        <div className="h-4 w-px bg-white/20" />
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-brand-orange" />
          <span>Project Cargo Network (PCN) Heavy Lift Member</span>
        </div>
      </div>
    </section>
  );
}
