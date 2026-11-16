import Link from "next/link";
import SectionHeading from "@/components/shared/SectionHeading";
import { sisterConcerns } from "@/data/concerns";
import { Building2, ArrowRight, ExternalLink } from "lucide-react";

export default function ConcernsSection() {
  return (
    <section className="py-20 md:py-28 bg-slate-light" id="concerns">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Group Synergies"
          title="Our Sister Concerns &amp; Corporate Group"
          subtitle="Operating under the RMK Group banner, our integrated network of companies delivers end-to-end logistics, global trade, corporate travel, and equipment solutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sisterConcerns.map((concern) => (
            <div
              key={concern.id}
              className={`rounded-2xl p-6 sm:p-7 shadow-subtle hover:shadow-cardHover border transition-all flex flex-col justify-between ${
                concern.isParent
                  ? "bg-navy-950 text-white border-navy-900"
                  : "bg-white text-slate-800 border-slate-100"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl ${
                    concern.isParent
                      ? "bg-brand-orange/20 text-brand-orange border border-brand-orange/30"
                      : "bg-navy-900/10 text-navy-900"
                  }`}>
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                    concern.isParent
                      ? "bg-brand-orange text-white"
                      : "bg-slate-100 text-slate-700"
                  }`}>
                    {concern.role}
                  </span>
                </div>

                <h3 className={`text-lg font-bold font-heading mb-1.5 ${
                  concern.isParent ? "text-white" : "text-navy-900"
                }`}>
                  {concern.name}
                </h3>

                <div className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
                  concern.isParent ? "text-brand-orange" : "text-slate-400"
                }`}>
                  {concern.sector}
                </div>

                <p className={`text-xs sm:text-sm leading-relaxed mb-5 ${
                  concern.isParent ? "text-slate-300" : "text-slate-600"
                }`}>
                  {concern.description}
                </p>

                {/* Services list */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {concern.services.map((srv, idx) => (
                    <span
                      key={idx}
                      className={`px-2 py-0.5 rounded text-[11px] font-medium ${
                        concern.isParent
                          ? "bg-white/10 text-slate-200"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {srv}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`pt-4 border-t ${
                concern.isParent ? "border-white/10" : "border-slate-100"
              }`}>
                <Link
                  href="/concerns"
                  className={`inline-flex items-center gap-1.5 text-xs font-bold transition-colors ${
                    concern.isParent
                      ? "text-brand-orange hover:text-white"
                      : "text-navy-900 hover:text-brand-orange"
                  }`}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/concerns"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-navy-900 hover:bg-navy-950 text-white font-bold text-sm shadow-md transition-all active:scale-95"
          >
            <span>Explore All Subsidiary &amp; Associated Concerns</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
