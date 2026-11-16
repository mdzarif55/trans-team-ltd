import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import { caseStudiesData } from "@/data/caseStudies";
import {
  MapPin,
  Building,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  ShieldCheck,
  ArrowRight,
  TrendingUp
} from "lucide-react";

interface CaseStudyDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return caseStudiesData.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyDetailPageProps): Promise<Metadata> {
  const study = caseStudiesData.find((s) => s.slug === params.slug);
  if (!study) {
    return { title: "Case Study Not Found" };
  }
  return {
    title: `${study.title} | Case Studies`,
    description: study.overview,
  };
}

export default function CaseStudyDetailPage({ params }: CaseStudyDetailPageProps) {
  const study = caseStudiesData.find((s) => s.slug === params.slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <PageHeader
        badge="Technical Case Study"
        title={study.title}
        subtitle={study.category}
        breadcrumbItems={[
          { label: "Projects", href: "/projects" },
          { label: "Case Studies", href: "/case-studies" },
          { label: study.title }
        ]}
        backgroundImage={study.image}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Narrative (8 cols) */}
            <div className="lg:col-span-8">
              {/* Image Frame */}
              <div className="relative h-80 sm:h-[420px] rounded-2xl overflow-hidden shadow-card mb-8 bg-navy-950">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 800px"
                />
              </div>

              {/* Statistics Showcase */}
              {study.stats && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10 p-6 rounded-2xl bg-navy-950 text-white shadow-card">
                  {study.stats.map((st, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                      <div className="text-xl sm:text-2xl font-extrabold font-heading text-brand-orange">
                        {st.value}
                      </div>
                      <div className="text-xs text-slate-300 font-medium mt-1">
                        {st.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Section 1: Overview */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold font-heading text-navy-900 mb-4">
                  Project Background
                </h2>
                <p className="text-base text-slate-600 leading-relaxed">
                  {study.overview}
                </p>
              </div>

              {/* Section 2: The Challenge */}
              <div className="mb-10 p-6 sm:p-8 bg-amber-50/60 rounded-2xl border border-amber-200/80">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-amber-100 text-amber-800">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-amber-950">
                    The Logistical &amp; Environmental Challenge
                  </h3>
                </div>
                <div className="text-sm sm:text-base text-amber-900/90 leading-relaxed whitespace-pre-line space-y-4">
                  {study.challenge}
                </div>
              </div>

              {/* Section 3: Engineered Solution */}
              <div className="mb-10 p-6 sm:p-8 bg-emerald-50/60 rounded-2xl border border-emerald-200/80">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-emerald-100 text-emerald-800">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-emerald-950">
                    The TTL Engineered Solution
                  </h3>
                </div>
                <div className="text-sm sm:text-base text-emerald-900/90 leading-relaxed whitespace-pre-line space-y-4">
                  {study.solution}
                </div>
              </div>

              {/* Section 4: Execution Checklist */}
              <div className="mb-10">
                <h3 className="text-xl font-bold font-heading text-navy-900 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-brand-orange rounded-full" />
                  Step-by-Step Execution
                </h3>
                <div className="space-y-3">
                  {study.execution.map((step, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-light border border-slate-200/80 flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-navy-900 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <div className="text-sm text-slate-700 leading-relaxed font-medium">
                        {step}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 5: Results & Client Outcomes */}
              <div className="mb-10 p-6 sm:p-8 bg-navy-950 text-white rounded-2xl border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-brand-orange/20 text-brand-orange border border-brand-orange/30">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-white">
                    Results &amp; Project Milestones
                  </h3>
                </div>
                <div className="space-y-3">
                  {study.results.map((res, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Meta Card */}
              <div className="p-6 bg-slate-light rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
                <h4 className="text-base font-bold font-heading text-navy-900 pb-2 border-b border-slate-200">
                  Case Study Information
                </h4>

                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Client</div>
                  <div className="text-sm font-semibold text-navy-900 mt-0.5">
                    {study.client}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Location</div>
                  <div className="text-sm font-medium text-slate-800 mt-0.5 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-brand-orange shrink-0" />
                    <span>{study.location}</span>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Category</div>
                  <div className="text-sm font-medium text-slate-800 mt-0.5">
                    {study.category}
                  </div>
                </div>
              </div>

              {/* Consultation Card */}
              <div className="p-6 bg-navy-950 text-white rounded-2xl border border-white/10 shadow-card">
                <h4 className="text-lg font-bold font-heading text-white mb-2">
                  Need Heavy-Lift Engineering?
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Consult with our project cargo division for route assessments, river barging feasibility, and foundation positioning.
                </p>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-xs shadow-md transition-colors"
                >
                  <span>Connect with Engineering Desk</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Other Case Studies */}
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="text-sm font-bold font-heading text-navy-900 mb-3 pb-2 border-b border-slate-100">
                  Other Case Studies
                </h4>
                <div className="space-y-3">
                  {caseStudiesData
                    .filter((s) => s.slug !== study.slug)
                    .map((other) => (
                      <Link
                        key={other.slug}
                        href={`/case-studies/${other.slug}`}
                        className="block p-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
                      >
                        <div className="text-xs font-bold text-navy-900 group-hover:text-brand-orange transition-colors">
                          {other.title}
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                          {other.client}
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
