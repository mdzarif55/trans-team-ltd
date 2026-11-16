import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { sisterConcerns } from "@/data/concerns";
import {
  Building2,
  ExternalLink,
  CheckCircle2,
  Globe,
  Plane,
  Truck,
  Ship,
  Briefcase
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Concerns | RMK Group Subsidiaries & Associated Companies",
  description: "Explore the 8 subsidiary and associated companies under the RMK Group banner spanning freight forwarding, international trade, travel, and logistics.",
};

export default function ConcernsPage() {
  const parentConcern = sisterConcerns.find((c) => c.isParent);
  const subsidiaries = sisterConcerns.filter((c) => !c.isParent);

  return (
    <>
      <PageHeader
        badge="Corporate Group"
        title="Our Sister Concerns &amp; Subsidiaries"
        subtitle="Operating under the RMK Group umbrella, our interconnected corporate network provides comprehensive logistics, international trade, and commercial support."
        breadcrumbItems={[{ label: "Our Concerns" }]}
        backgroundImage="/images/hero/about-us2111.jpg"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Parent Group Showcase */}
          {parentConcern && (
            <div className="mb-16 bg-navy-950 text-white rounded-3xl p-8 sm:p-12 border border-white/10 shadow-card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-orange/20 text-brand-orange border border-brand-orange/30 mb-4">
                  <Building2 className="w-4 h-4" />
                  <span>Apex Holding Group</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white mb-3">
                  {parentConcern.name}
                </h2>

                <div className="text-sm font-semibold uppercase tracking-wider text-brand-orange mb-4">
                  {parentConcern.sector}
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                  {parentConcern.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {parentConcern.services.map((srv, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/10 text-white border border-white/10"
                    >
                      {srv}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Subsidiary Concerns Grid */}
          <div>
            <SectionHeading
              badge="Group Network"
              title="Verified Subsidiary &amp; Associated Concerns"
              subtitle="Every sister concern brings dedicated capabilities to support domestic enterprises, international shipping lines, and industrial projects."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subsidiaries.map((concern) => (
                <div
                  key={concern.id}
                  className="bg-white rounded-2xl p-7 shadow-subtle hover:shadow-cardHover border border-slate-200/80 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-navy-50 text-navy-900 border border-slate-100">
                        <Building2 className="w-6 h-6 text-brand-orange" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                        {concern.role}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-heading text-navy-900 mb-1 leading-snug">
                      {concern.name}
                    </h3>

                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3.5">
                      {concern.sector}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {concern.description}
                    </p>

                    {/* Capabilities list */}
                    <div className="space-y-2 mb-6">
                      {concern.services.map((srv, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                          <span>{srv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    {concern.website ? (
                      <Link
                        href={concern.website}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 hover:text-brand-orange transition-colors"
                      >
                        <span>Official Corporate Profile</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    ) : (
                      <span className="text-xs text-slate-400">
                        Member of RMK Group Corporate Network
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
