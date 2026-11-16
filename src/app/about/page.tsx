import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { companyInfo } from "@/data/company";
import { sisterConcerns } from "@/data/concerns";
import {
  ShieldCheck,
  CheckCircle2,
  Building2,
  Target,
  Users,
  Zap,
  Eye,
  Compass,
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Corporate Profile & Heritage",
  description: "Learn about Trans Team Ltd. (TTL), an 18-year leader in international logistics, multi-modal freight, and an esteemed sister concern of RMK Group in Bangladesh.",
};

export default function AboutPage() {
  const valueIcons: Record<string, React.ReactNode> = {
    Target: <Target className="w-5 h-5 text-brand-orange" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-brand-orange" />,
    Users: <Users className="w-5 h-5 text-brand-orange" />,
    Zap: <Zap className="w-5 h-5 text-brand-orange" />
  };

  return (
    <>
      <PageHeader
        badge="About Trans Team Ltd."
        title="Corporate Profile & Strategic Outlook"
        subtitle="18+ years of delivering progressive multi-modal logistics management, project cargo engineering, and international supply chain connectivity."
        breadcrumbItems={[{ label: "About Us" }]}
        backgroundImage="/images/hero/about-banner.jpg"
      />

      {/* Main Profile Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[440px] rounded-2xl overflow-hidden shadow-card border border-slate-100">
                <Image
                  src="/images/hero/hero-port.jpg"
                  alt="Trans Team Ltd. Operations Team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-4 bg-navy-950 text-white p-5 rounded-2xl shadow-cardHover border border-white/10 max-w-[260px]">
                <div className="text-2xl font-extrabold text-brand-orange">RMK Group</div>
                <div className="text-xs text-slate-300 font-medium mt-0.5">Sister Concern Synergy</div>
                <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                  Working across 8 subsidiary companies to deliver integrated multi-modal solutions.
                </p>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-orange/15 text-brand-orange border border-brand-orange/30 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                <span>Our Corporate Background</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-navy-900 tracking-tight mb-6">
                A Reliable Partner for Companies Seeking Security &amp; Flexibility
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                RMK Group began its journey over 10 years ago and comprises 8 wholly owned subsidiary companies, with Trans Team Ltd. (TTL) standing as one of the most promising and experienced flagship concerns of the Group. Over our 18 years of active industry presence, TTL has established an enviable track record in progressive logistics management and consultation across Bangladesh.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                TTL works closely with customers to understand their specific business dynamics and engineer solutions that enhance overall performance. Our team is dedicated to quality and efficiency, anticipating and serving your logistical needs so you can focus entirely on growing your core business. Regardless of project scope or complexity, TTL has the resources and expertise to consistently deliver high-quality work with utmost professionalism.
              </p>

              {/* Verified Capabilities Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  "Air and Sea Freight Forwarding",
                  "Licensed Customs Clearance & Brokerage",
                  "Project Cargo & Heavy-Lift Engineering",
                  "Specialized Civil Construction & Temporary Jetties",
                  "Export, Import Indentation & Trade Support",
                  "Express Courier & Corporate Travel Services"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/history"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-navy-900 hover:bg-navy-950 text-white font-bold text-sm shadow-md transition-all active:scale-95"
                >
                  <span>Explore Our 18-Year History</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/team"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-200 hover:border-slate-300 text-navy-900 font-semibold text-sm transition-colors"
                >
                  <span>View Leadership Team</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-slate-light border-y border-slate-200/60" id="vision-mission">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Strategic Direction"
            title="Vision, Mission &amp; Guiding Principles"
            subtitle="Providing state-of-the-art, tailor-made one-stop premium logistics services of international standards every time."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-subtle border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-brand-orange/10 rounded-xl text-brand-orange border border-brand-orange/20">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-navy-900">
                    Our Vision
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {companyInfo.vision}
                </p>
              </div>
            </div>

            <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-subtle border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-navy-900/10 rounded-xl text-navy-900 border border-navy-900/20">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-navy-900">
                    Our Mission
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {companyInfo.mission}
                </p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyInfo.coreValues.map((val, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col">
                <div className="p-2.5 rounded-lg bg-slate-50 w-fit mb-3 border border-slate-100">
                  {valueIcons[val.icon]}
                </div>
                <h4 className="text-base font-bold text-navy-900 mb-1.5 font-heading">
                  {val.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed flex-1">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations & Quality Assurance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-navy-900 mb-2">
              Accreditations &amp; International Standards
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              TTL operations conform to global standards established by international trade associations and quality registries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {companyInfo.accreditations.map((acc) => (
              <div key={acc.name} className="p-5 rounded-xl bg-slate-light border border-slate-100 text-center flex flex-col items-center">
                <div className="relative w-20 h-14 bg-white rounded-lg p-2 flex items-center justify-center mb-3 shadow-sm border border-slate-100">
                  <Image
                    src={acc.logo}
                    alt={acc.name}
                    fill
                    className="object-contain p-1"
                    sizes="100px"
                  />
                </div>
                <h4 className="font-bold text-sm text-navy-900 mb-1">{acc.name}</h4>
                <p className="text-[11px] text-slate-500 leading-snug">{acc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
