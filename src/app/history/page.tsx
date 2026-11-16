import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/layout/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { companyInfo } from "@/data/company";
import { Clock, Award, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Our History & Milestones | 18 Years of Excellence",
  description: "Explore the 18-year journey of Trans Team Ltd. (TTL) and the RMK Group in building Bangladesh's premier freight forwarding and heavy lift infrastructure logistics company.",
};

const historyMilestones = [
  {
    period: "2006 – Inception & Founding",
    title: "Founding of Trans Team Ltd.",
    description: "Trans Team Ltd. was established in Dhaka, Bangladesh, beginning operations with customs clearance brokerage, port documentation, and scheduled freight transport between Chittagong Port and the capital.",
    achievements: [
      "Secured National Board of Revenue (NBR) customs brokerage licenses",
      "Established Chittagong port operational liaison office at Agrabad",
      "Formed initial partnerships with leading readymade garment (RMG) exporters"
    ]
  },
  {
    period: "2010 – Global Affiliations",
    title: "BAFFA, FIATA & IATA Accreditations",
    description: "To support burgeoning international export demand, TTL achieved full membership in BAFFA and global recognition under FIATA and IATA, enabling direct issuance of international bills of lading and air waybills.",
    achievements: [
      "BAFFA apex freight forwarders association accreditation",
      "FIATA international freight forwarding compliance",
      "IATA certified air cargo acceptance desk established at Dhaka Airport"
    ]
  },
  {
    period: "2014 – RMK Group Integration",
    title: "Consolidation Under the RMK Group Banner",
    description: "TTL integrated into the RMK Group corporate umbrella, aligning operations alongside sister concerns in ocean freight (RMK World Freight), corporate travel (RMK Tours & Travels), trade indentation (JK Associates), and transport equipment (Moriom Enterprise).",
    achievements: [
      "Synergized 8 sister companies under unified corporate governance",
      "Expansion into turnkey import-export indentation and supply chain finance",
      "Dedicated corporate headquarters established in Uttara, Dhaka"
    ]
  },
  {
    period: "2016 – Quality & Infrastructure",
    title: "ISO 9001:2008 Certification & PCN Network",
    description: "Achieved ISO 9001:2008 Quality Management certification, formalizing standard operating procedures across all departments, and gained exclusive representation in Bangladesh for the global Project Cargo Network (PCN).",
    achievements: [
      "Formal ISO 9001:2008 Quality Management System certification",
      "Exclusive Bangladesh member of the worldwide Project Cargo Network",
      "Introduction of 14 continuous employee training modules"
    ]
  },
  {
    period: "2018 – 2022 — Heavy Lift Engineering",
    title: "Khulna 150MW Power Plant & Over-Dimensional Cargo",
    description: "Executed landmark national infrastructure deliveries, notably the Khulna 150MW Peaking Power Plant in Goalpara, constructing a 600-ton capacity temporary river jetty, and safely moving 343-ton turbines without disrupting the regional petroleum supply.",
    achievements: [
      "Delivered over 20,000 m³ heavy equipment for NWPGCL/PDB Turnkey EPC project",
      "KUET University structural load validation on temporary river jetty",
      "Zero injury and zero structural road damage throughout multi-modal transit",
      "Commended for receiving and transporting heavy stator and boiler deaerator units"
    ]
  },
  {
    period: "Present – Continuous Innovation",
    title: "18+ Years of Trusted Partnership",
    description: "Today, Trans Team Ltd. continues to expand its multi-modal freight services, investing in continuous capacity development, digital logistics integration, and nationwide multimodal river and highway infrastructure.",
    achievements: [
      "Comprehensive multi-modal coverage across air, ocean, river, and road",
      "Active partner to major industrial EPCs and international logistics networks",
      "Upholding rigorous Health, Environment and Safety (HES) standards"
    ]
  }
];

export default function HistoryPage() {
  return (
    <>
      <PageHeader
        badge="Our Journey"
        title="Our History &amp; Important Milestones"
        subtitle="Tracing 18 years of progressive logistics development, engineering innovation, and corporate partnerships in Bangladesh."
        breadcrumbItems={[
          { label: "About Us", href: "/about" },
          { label: "Our History" }
        ]}
        backgroundImage="/images/hero/hero-port.jpg"
      />

      {/* Narrative Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-orange/15 text-brand-orange border border-brand-orange/30 mb-4">
            <Clock className="w-3.5 h-3.5" />
            <span>18 Years of Dedication</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-navy-900 tracking-tight mb-5">
            A Legacy Built on Accountability, Engineering &amp; Client Trust
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            From our founding as a specialized freight and customs clearance agency to becoming an accredited multi-modal project cargo leader in Bangladesh, TTL has adhered to a single principle: exceed customer expectations through safety, reliability, and technical precision.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-slate-light border-t border-slate-200/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative border-l-2 border-brand-orange/30 ml-4 md:ml-32 space-y-12">
            {historyMilestones.map((milestone, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12 group">
                {/* Timeline Marker */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-brand-orange border-4 border-white shadow-sm group-hover:scale-125 transition-transform" />

                {/* Period Badge */}
                <div className="md:absolute md:-left-32 md:top-1 text-xs font-bold text-brand-orange uppercase tracking-wider mb-1 md:mb-0 md:text-right md:w-24">
                  {milestone.period.split("–")[0]}
                </div>

                {/* Content Box */}
                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-subtle border border-slate-100 group-hover:shadow-card transition-all">
                  <div className="text-xs font-semibold text-slate-400 mb-1">
                    {milestone.period}
                  </div>
                  <h3 className="text-xl font-bold font-heading text-navy-900 mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {milestone.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2 pt-3 border-t border-slate-100">
                    {milestone.achievements.map((item, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Step CTA */}
      <section className="py-16 bg-navy-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold font-heading mb-3">
            Discover the People Behind Our 18-Year Legacy
          </h3>
          <p className="text-sm text-slate-300 mb-6">
            Meet the executive board, operations managers, and port specialists delivering world-class service every day.
          </p>
          <Link
            href="/team"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-sm shadow-md transition-all active:scale-95"
          >
            <span>Meet Our Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
