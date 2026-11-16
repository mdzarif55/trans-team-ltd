import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import { projectsData } from "@/data/projects";
import {
  MapPin,
  Building,
  Calendar,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  ExternalLink
} from "lucide-react";

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) {
    return { title: "Project Not Found" };
  }
  return {
    title: `${project.title} | Projects Portfolio`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projectsData.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <>
      <PageHeader
        badge={project.status === "accomplished" ? "Accomplished Milestone" : "Active Engagement"}
        title={project.title}
        subtitle={project.scope}
        breadcrumbItems={[
          { label: "Projects", href: "/projects" },
          { label: project.title }
        ]}
        backgroundImage={project.image}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content (8 cols) */}
            <div className="lg:col-span-8">
              {/* Primary Image */}
              <div className="relative h-80 sm:h-[420px] rounded-2xl overflow-hidden shadow-card mb-8 bg-navy-950">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 800px"
                />
              </div>

              {/* Scope & Description */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold font-heading text-navy-900 mb-4">
                  Project Scope &amp; Logistical Challenge
                </h2>
                <p className="text-base text-slate-600 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Execution Details Checklist */}
              <div className="mb-10 p-6 sm:p-8 bg-slate-light rounded-2xl border border-slate-100">
                <h3 className="text-xl font-bold font-heading text-navy-900 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-brand-orange rounded-full" />
                  Engineering &amp; Transport Execution
                </h3>
                <div className="space-y-3">
                  {project.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Photo Gallery if available */}
              {project.gallery && project.gallery.length > 1 && (
                <div className="mb-10">
                  <h3 className="text-xl font-bold font-heading text-navy-900 mb-4">
                    Project Visual Gallery
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {project.gallery.map((img, idx) => (
                      <div key={idx} className="relative h-44 rounded-xl overflow-hidden shadow-sm bg-navy-950">
                        <Image
                          src={img}
                          alt={`${project.title} photo ${idx + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 50vw, 250px"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Project Meta Card */}
              <div className="p-6 bg-slate-light rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
                <h4 className="text-base font-bold font-heading text-navy-900 pb-2 border-b border-slate-200">
                  Project Overview
                </h4>

                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Status</div>
                  <div className="text-sm font-bold text-navy-900 capitalize mt-0.5 flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${project.status === "accomplished" ? "bg-emerald-500" : "bg-brand-orange"}`} />
                    {project.status === "accomplished" ? "Accomplished Milestone" : "Active Engagement"}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Location</div>
                  <div className="text-sm font-medium text-slate-800 mt-0.5 flex items-start gap-1.5">
                    <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                    <span>{project.location}</span>
                  </div>
                </div>

                {project.client && (
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Client / Partner</div>
                    <div className="text-sm font-medium text-slate-800 mt-0.5 flex items-start gap-1.5">
                      <Building className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                      <span>{project.client}</span>
                    </div>
                  </div>
                )}

                {project.timeline && (
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Timeline</div>
                    <div className="text-sm font-medium text-slate-800 mt-0.5 flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-brand-orange shrink-0" />
                      <span>{project.timeline}</span>
                    </div>
                  </div>
                )}

                {project.highlights && (
                  <div className="pt-2">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Key Highlights</div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.highlights.map((hl, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded bg-white text-xs font-medium text-slate-700 border border-slate-200">
                          {hl}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Case Study Reference if Khulna */}
              {project.slug === "khulna-150mw-peaking-power-plant" && (
                <div className="p-6 bg-navy-950 text-white rounded-2xl border border-white/10 shadow-card">
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-orange mb-1">
                    Featured Case Study
                  </div>
                  <h4 className="text-lg font-bold font-heading text-white mb-2">
                    Read Complete Engineering Breakdown
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Explore the 600-ton jetty load testing, Bhairab river navigation, and the 36-hour weekend window execution.
                  </p>
                  <Link
                    href="/case-studies/khulna-150mw-peaking-power-plant"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange hover:text-white transition-colors"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}

              {/* Related Projects */}
              {relatedProjects.length > 0 && (
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <h4 className="text-sm font-bold font-heading text-navy-900 mb-3 pb-2 border-b border-slate-100">
                    Other Projects
                  </h4>
                  <div className="space-y-3">
                    {relatedProjects.map((rel) => (
                      <Link
                        key={rel.slug}
                        href={`/projects/${rel.slug}`}
                        className="block p-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
                      >
                        <div className="text-xs font-bold text-navy-900 group-hover:text-brand-orange transition-colors">
                          {rel.title}
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5">{rel.location}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
