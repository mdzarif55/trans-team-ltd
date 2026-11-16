import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";
import { projectsData } from "@/data/projects";
import { MapPin, ArrowRight, CheckCircle2 } from "lucide-react";

export default function FeaturedProjects() {
  const featured = projectsData.slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-white" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Proven Portfolio"
          title="Featured Projects &amp; Heavy-Lift Milestones"
          subtitle="Explore verified engineering and multimodal logistics projects executed safely under demanding spatial, physical, and schedule constraints."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featured.map((project) => (
            <div
              key={project.slug}
              className="group bg-white rounded-2xl overflow-hidden shadow-subtle hover:shadow-cardHover border border-slate-100 transition-all duration-300 flex flex-col hover:-translate-y-1.5"
            >
              {/* Image Frame */}
              <div className="relative h-56 w-full overflow-hidden bg-navy-950">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent" />

                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider ${
                    project.status === "accomplished"
                      ? "bg-emerald-600/90 text-white"
                      : "bg-brand-orange/90 text-white"
                  }`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    {project.status === "accomplished" ? "Accomplished" : "Ongoing"}
                  </span>
                </div>

                {/* Location */}
                <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs text-slate-200">
                  <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                  <span className="truncate">{project.location}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold font-heading text-navy-900 group-hover:text-brand-orange transition-colors mb-2.5 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlights Tags */}
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
                    className="inline-flex items-center gap-2 text-xs font-bold text-navy-900 group-hover:text-brand-orange transition-colors"
                  >
                    <span>View Project Case Specs</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-navy-900 hover:bg-navy-950 text-white font-bold text-sm shadow-md transition-all active:scale-95"
          >
            <span>Browse Full Projects Portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-200 hover:border-slate-300 text-navy-900 font-semibold text-sm transition-colors"
          >
            <span>Read In-Depth Case Studies</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
