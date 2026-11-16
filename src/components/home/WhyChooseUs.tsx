import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/shared/SectionHeading";
import {
  ShieldCheck,
  Award,
  GraduationCap,
  Scale,
  Users2,
  HardHat,
  ArrowRight
} from "lucide-react";

export default function WhyChooseUs() {
  const strengths = [
    {
      title: "18+ Years of Proven Industry Mastery",
      description: "Delivering progressive logistics consultation and operational execution across Bangladesh since 2006, establishing long-term trust with multinational EPCs and corporate clients.",
      icon: <Award className="w-5 h-5 text-brand-orange" />
    },
    {
      title: "HES Zero-Tolerance Safety Protocol",
      description: "Maintaining strict zero-tolerance for hazardous practices with mandatory monthly emergency drills: spill containment, HAZMAT protocols, fire prevention, and PPE compliance.",
      icon: <ShieldCheck className="w-5 h-5 text-brand-orange" />
    },
    {
      title: "ISO 9001:2008 Quality Management",
      description: "Certified Quality Management System guaranteeing structured standard operating procedures, transparent accounting, and formal client feedback reviews.",
      icon: <Scale className="w-5 h-5 text-brand-orange" />
    },
    {
      title: "14 Continuous Training Programs",
      description: "Investing continuously in workforce capability across Dangerous Goods Regulations (DGR), ETABS/SAFE computer structural design, defensive driving, and customs tariffs.",
      icon: <GraduationCap className="w-5 h-5 text-brand-orange" />
    },
    {
      title: "Academic & Engineering Validation",
      description: "Proven record collaborating with Khulna University of Engineering and Technology (KUET) to load-test custom temporary jetties before executing 343-ton turbine movements.",
      icon: <HardHat className="w-5 h-5 text-brand-orange" />
    },
    {
      title: "RMK Group Multi-Sector Synergy",
      description: "Seamless coordination with 8 group sister concerns spanning global ocean freight, international travel, trade indentation, and heavy equipment leasing.",
      icon: <Users2 className="w-5 h-5 text-brand-orange" />
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Narrative & Strengths */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-orange/15 text-brand-orange border border-brand-orange/30 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              <span>Operational Excellence</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-navy-900 tracking-tight leading-tight mb-6">
              Why Corporate Leaders &amp; Global EPCs Partner with Trans Team Ltd.
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
              In an industry where delays and safety failures carry immense financial risk, TTL sets the standard for reliability. We do not compromise on safety, engineering precision, or regulatory compliance.
            </p>

            {/* Strengths Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {strengths.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-light border border-slate-100 hover:border-slate-200 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="p-2 rounded-lg bg-white shadow-sm border border-slate-100">
                      {item.icon}
                    </div>
                    <h3 className="text-sm font-bold text-navy-900 leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4">
              <Link
                href="/policies"
                className="inline-flex items-center gap-2 text-sm font-bold text-navy-900 hover:text-brand-orange transition-colors"
              >
                <span>Review Our Corporate HES &amp; Quality Policies</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card border border-slate-100 h-[480px]">
              <Image
                src="/images/why-choose-us/quality-iso.jpg"
                alt="TTL Quality Management"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/30 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="inline-block px-2.5 py-1 rounded bg-brand-orange text-white text-xs font-bold uppercase tracking-wider mb-2">
                  ISO 9001:2008
                </div>
                <h4 className="text-lg font-bold font-heading mb-1 text-white">
                  Disciplined Quality &amp; Zero Incident Record
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Every project adheres to structured inspection checklists, risk assessments, and dedicated supervisory oversight.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
