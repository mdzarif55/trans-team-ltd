import Image from "next/image";
import Link from "next/link";
import { companyInfo } from "@/data/company";
import { CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

export default function CompanyIntro() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Authentic Image */}
              <div className="relative h-[380px] sm:h-[460px] rounded-2xl overflow-hidden shadow-card border border-slate-100">
                <Image
                  src="/images/hero/about-banner.jpg"
                  alt="Trans Team Ltd. Operations"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
              </div>

              {/* Floating Stat Card: ISO Certified */}
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-card border border-slate-100 hidden sm:flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-navy-900">ISO 9001:2008</div>
                  <div className="text-[10px] text-slate-500">Quality Certified</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-orange/15 text-brand-orange border border-brand-orange/30 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              <span>Welcome to Trans Team Ltd.</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-navy-900 tracking-tight leading-tight mb-6">
              Simplifying Global Logistics &amp; Delivering High-Precision Solutions
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-5">
              Trans Team Ltd. (TTL) presents a progressive logistics management and consultation service to corporations in Bangladesh. Since our inception over 18 years ago, TTL has worked in strong and effective partnerships with our clientele, bringing forward an end-to-end package of multi-modal freight solutions.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
              From air and ocean freight forwarding to licensed customs brokerage, specialized civil construction, export, import, and indentation, right down to express courier and corporate travel services — TTL commands every technical resource to guarantee the operational success of our client companies.
            </p>

            {/* Capability Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {[
                "Licensed Customs Brokerage in Dhaka & Chittagong",
                "Project Cargo Network (PCN) Certified Engineering",
                "Dedicated Seaport & Airport Operational Desks",
                "ISO 9001:2008 Quality Management System",
                "Zero-Tolerance Health & Safety (HES) Record",
                "RMK Group Sister Concern Synergy"
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-700">{point}</span>
                </div>
              ))}
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-navy-900 hover:bg-navy-950 text-white font-bold text-sm shadow-md transition-all active:scale-95"
              >
                <span>Read Full Company Profile</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/team"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg border border-slate-200 hover:border-slate-300 text-navy-900 font-semibold text-sm transition-colors"
              >
                <span>Meet Leadership &amp; Staff</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
