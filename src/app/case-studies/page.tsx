import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/layout/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { caseStudiesData } from "@/data/caseStudies";
import { MapPin, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Case Studies | Trans Team Ltd.",
  description: "Read in-depth technical case studies documenting complex heavy-lift power plant logistics and multimodal river transport in Bangladesh.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        badge="Engineering Case Studies"
        title="Technical Case Reports &amp; Solutions"
        subtitle="In-depth analysis of complex logistics engineering, river jetty construction, and heavy-lift multimodal operations delivered across Bangladesh."
        breadcrumbItems={[
          { label: "Projects", href: "/projects" },
          { label: "Case Studies" }
        ]}
        backgroundImage="/images/hero/case.jpg"
      />

      <section className="py-20 bg-slate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Technical Analysis"
            title="Complex Operational Challenges, Engineered Solutions"
            subtitle="Explore how TTL engineers, port teams, and transport planners overcome demanding logistical environments."
          />

          <div className="space-y-12">
            {caseStudiesData.map((study) => (
              <div
                key={study.slug}
                className="bg-white rounded-3xl overflow-hidden shadow-subtle hover:shadow-card border border-slate-100 transition-all p-6 sm:p-8 lg:p-10"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Visual */}
                  <div className="lg:col-span-5">
                    <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden bg-navy-950 shadow-md">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 450px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="inline-block px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wider bg-brand-orange text-white mb-1 shadow-sm">
                          {study.category}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-slate-200">
                          <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                          <span className="truncate">{study.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="lg:col-span-7">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Client: {study.client}
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-navy-900 mb-3 leading-snug">
                      {study.title}
                    </h2>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 line-clamp-3">
                      {study.overview}
                    </p>

                    {/* Stats strip */}
                    {study.stats && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-slate-light border border-slate-100">
                        {study.stats.slice(0, 3).map((st, idx) => (
                          <div key={idx}>
                            <div className="text-base sm:text-lg font-extrabold font-heading text-navy-900">
                              {st.value}
                            </div>
                            <div className="text-[11px] text-slate-500 font-medium">
                              {st.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-navy-900 hover:bg-navy-950 text-white font-bold text-sm shadow-md transition-all active:scale-95"
                    >
                      <span>Read Detailed Technical Case Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
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
