import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/layout/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { corporatePolicies } from "@/data/policies";
import {
  ShieldCheck,
  Award,
  HeartHandshake,
  BookOpen,
  Scale,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "Corporate Policies & Compliance | Trans Team Ltd.",
  description: "Review Trans Team Ltd. (TTL) official policies: Health, Safety & Environment (HES), ISO 9001:2008 Quality Management, CSR, and Code of Business Conduct.",
};

export default function PoliciesPage() {
  const iconMap: Record<string, React.ReactNode> = {
    "health-environment-safety": <ShieldCheck className="w-6 h-6 text-brand-orange" />,
    "quality-management": <Award className="w-6 h-6 text-brand-orange" />,
    "corporate-social-responsibility": <HeartHandshake className="w-6 h-6 text-brand-orange" />,
    "approach-to-training": <BookOpen className="w-6 h-6 text-brand-orange" />,
    "code-of-business-conduct": <Scale className="w-6 h-6 text-brand-orange" />
  };

  return (
    <>
      <PageHeader
        badge="Corporate Governance"
        title="Official Policies, Safety &amp; Ethics"
        subtitle="Upholding zero tolerance for hazardous practices, ISO 9001:2008 quality standards, continuous training, and global anti-bribery governance."
        breadcrumbItems={[
          { label: "About Us", href: "/about" },
          { label: "Policies" }
        ]}
        backgroundImage="/images/why-choose-us/a6fa2d2d2a9c9cc43eaaa0cbb9db2376.png"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Institutional Trust"
            title="Our Commitment to Safety, Quality &amp; Transparency"
            subtitle="Explore our 5 verified corporate policy frameworks guiding operational decisions across every project site and subsidiary company."
          />

          <div className="space-y-16">
            {corporatePolicies.map((policy, idx) => (
              <div
                key={policy.id}
                id={policy.slug}
                className="bg-slate-light rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-subtle"
              >
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-200">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-200">
                      {iconMap[policy.id]}
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                        Corporate Standard #{idx + 1}
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-navy-900">
                        {policy.title}
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                  {/* Left Narrative */}
                  <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                    <div className="font-semibold text-navy-900 text-base mb-2">
                      {policy.subtitle}
                    </div>
                    {policy.fullText.map((p, pIdx) => (
                      <p key={pIdx} className="leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>

                  {/* Right Key Points Panel */}
                  <div className="lg:col-span-4">
                    <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                      <h3 className="text-sm font-bold font-heading text-navy-900 uppercase tracking-wider">
                        Core Principles &amp; Measures
                      </h3>
                      <div className="space-y-2.5">
                        {policy.keyPoints.map((pt, kIdx) => (
                          <div key={kIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
