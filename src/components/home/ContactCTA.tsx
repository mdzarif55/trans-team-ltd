import Link from "next/link";
import { companyInfo } from "@/data/company";
import { Phone, Mail, ArrowRight, MapPin } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative py-20 md:py-24 bg-navy-950 text-white overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity"
        style={{ backgroundImage: "url(/images/slider/18d327300e7c2077d12bbbae46eadc59.jpg)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/85" />

      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-orange/20 text-brand-orange border border-brand-orange/30 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
            <span>Dedicated Consultation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight mb-5">
            Let&apos;s Move Your Business Forward
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            Connect with our seasoned logistics engineers and customs brokers in Dhaka and Chittagong to plan, optimize, and execute your freight and heavy transport requirements.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-lg bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-sm sm:text-base shadow-lg transition-all active:scale-95"
            >
              <span>Get in Touch with Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`tel:${companyInfo.contacts.dhakaOffice.phones[0]}`}
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base border border-white/20 backdrop-blur-sm transition-all"
            >
              <Phone className="w-4 h-4 text-brand-orange" />
              <span>Call Head Office: {companyInfo.contacts.dhakaOffice.phones[0]}</span>
            </a>
          </div>

          {/* Quick Hub Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto text-left text-xs text-slate-300 bg-white/5 p-4 rounded-xl border border-white/10">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Dhaka Airport Hub:</span>
                <span>House #04, Road #07, Sector #01, Uttara, Dhaka-1230</span>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Chittagong Seaport Hub:</span>
                <span>South Land Center (3rd Floor), 5 Agrabad C/A, Chittagong</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
