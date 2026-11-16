import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/layout/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { projectsData } from "@/data/projects";
import { MapPin, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Accomplished Projects | Proven Engineering Milestones",
  description: "Browse completed heavy-lift power plant, temporary jetty, and multimodal infrastructure projects successfully executed by Trans Team Ltd. (TTL).",
};

export default function AccomplishedProjectsPage() {
  const accomplishedProjects = projectsData.filter((p) => p.status === "accomplished");

  return (
    <>
      <PageHeader
        badge="Proven Track Record"
        title="Accomplished Projects &amp; Heavy-Lift Milestones"
        subtitle="Review our successfully delivered national energy infrastructure projects, over-dimensional power assemblies, and sporting freight contracts."
        breadcrumbItems={[
          { label: "Projects", href: "/projects" },
          { label: "Accomplished Projects" }
        ]}
        backgroundImage="/images/hero/hero-ship.jpg"
      />

      <section className="py-20 bg-slate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Delivered On Schedule"
            title="Completed Engineering &amp; Logistics Milestones"
            subtitle="Demonstrating flawless execution across difficult logistical terrains, congested access corridors, and demanding weight classifications."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accomplishedProjects.map((project) => (
              <div
                key={project.slug}
                className="group bg-white rounded-2xl overflow-hidden shadow-subtle hover:shadow-cardHover border border-slate-100 transition-all duration-300 flex flex-col"
              >
                <div className="relative h-56 w-full overflow-hidden bg-navy-950">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wider bg-emerald-600 text-white">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Accomplished
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs text-slate-200">
                    <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                    <span>{project.location}</span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold font-heading text-navy-900 group-hover:text-brand-orange transition-colors mb-2.5">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 group-hover:text-brand-orange transition-colors"
                    >
                      <span>Read Project Case Report</span>
                      <ArrowRight className="w-3.5 h-3.5" />
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
