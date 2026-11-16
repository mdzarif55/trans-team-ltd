"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/layout/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { projectsData } from "@/data/projects";
import { MapPin, ArrowRight, Building, CheckCircle2 } from "lucide-react";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | "ongoing" | "accomplished">("all");

  const filteredProjects = activeFilter === "all"
    ? projectsData
    : projectsData.filter((p) => p.status === activeFilter);

  return (
    <>
      <PageHeader
        badge="Project Portfolio"
        title="Our Logistics &amp; Heavy-Lift Projects"
        subtitle="Turnkey multimodal logistics solutions for thermal power plants, national grid substations, industrial factories, and international tournaments."
        breadcrumbItems={[{ label: "Projects" }]}
        backgroundImage="/images/hero/hero-port.jpg"
      />

      <section className="py-20 bg-slate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Infrastructure Track Record"
            title="Industrial Cargo Operations Across Bangladesh"
            subtitle="Filter by project execution status to review our accomplished engineering milestones and active ongoing supply chain contracts."
          />

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {[
              { id: "all", label: `All Projects (${projectsData.length})` },
              { id: "ongoing", label: `Ongoing Projects (${projectsData.filter(p => p.status === "ongoing").length})` },
              { id: "accomplished", label: `Accomplished Projects (${projectsData.filter(p => p.status === "accomplished").length})` }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeFilter === tab.id
                    ? "bg-navy-900 text-white shadow-md"
                    : "bg-white text-slate-600 hover:text-navy-900 hover:bg-slate-50 border border-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.slug}
                className="group bg-white rounded-2xl overflow-hidden shadow-subtle hover:shadow-cardHover border border-slate-100 transition-all duration-300 flex flex-col hover:-translate-y-1.5"
              >
                {/* Thumbnail */}
                <div className="relative h-56 w-full overflow-hidden bg-navy-950">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />

                  {/* Status Tag */}
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wider ${
                      project.status === "accomplished"
                        ? "bg-emerald-600/95 text-white"
                        : "bg-brand-orange/95 text-white"
                    }`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      {project.status === "accomplished" ? "Accomplished" : "Ongoing"}
                    </span>
                  </div>

                  {/* Location Tag */}
                  <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs text-slate-200">
                    <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                    <span className="truncate">{project.location}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {project.client && (
                      <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide mb-1.5 line-clamp-1">
                        Client: {project.client}
                      </div>
                    )}

                    <h3 className="text-lg font-bold font-heading text-navy-900 group-hover:text-brand-orange transition-colors mb-2.5 leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    {project.highlights && (
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.highlights.slice(0, 3).map((hl, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200"
                          >
                            {hl}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 group-hover:text-brand-orange transition-colors"
                    >
                      <span>View Project Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
