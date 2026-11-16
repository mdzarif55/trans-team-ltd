import SectionHeading from "@/components/shared/SectionHeading";
import { companyInfo } from "@/data/company";
import { Eye, Compass, Target, ShieldCheck, Users, Zap } from "lucide-react";

export default function VisionMission() {
  const valueIcons: Record<string, React.ReactNode> = {
    Target: <Target className="w-5 h-5 text-brand-orange" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-brand-orange" />,
    Users: <Users className="w-5 h-5 text-brand-orange" />,
    Zap: <Zap className="w-5 h-5 text-brand-orange" />
  };

  return (
    <section className="py-20 md:py-28 bg-navy-950 text-white relative overflow-hidden" id="vision-mission">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Guiding Principles"
          title="Our Vision, Mission &amp; Core Values"
          subtitle="The foundational philosophy that shapes every logistics operation, client partnership, and corporate initiative across the TTL family."
          isDark
        />

        {/* 2-Column Vision & Mission Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Vision Card */}
          <div className="relative rounded-2xl bg-white/5 border border-white/10 p-8 sm:p-10 backdrop-blur-sm overflow-hidden group hover:border-brand-orange/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 rounded-full blur-2xl group-hover:bg-brand-orange/20 transition-all pointer-events-none" />
            <div className="flex items-center gap-3.5 mb-5">
              <div className="p-3 rounded-xl bg-brand-orange/20 text-brand-orange border border-brand-orange/30">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                Our Corporate Vision
              </h3>
            </div>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {companyInfo.vision}
            </p>
          </div>

          {/* Mission Card */}
          <div className="relative rounded-2xl bg-white/5 border border-white/10 p-8 sm:p-10 backdrop-blur-sm overflow-hidden group hover:border-brand-orange/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-navy-600/20 rounded-full blur-2xl group-hover:bg-navy-600/30 transition-all pointer-events-none" />
            <div className="flex items-center gap-3.5 mb-5">
              <div className="p-3 rounded-xl bg-white/10 text-brand-orange border border-white/20">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                Our Operational Mission
              </h3>
            </div>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {companyInfo.mission}
            </p>
          </div>
        </div>

        {/* Core Values 4-Card Grid */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-lg sm:text-xl font-bold font-heading text-white tracking-wide">
              Our 4 Pillars of Conduct &amp; Value
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyInfo.coreValues.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex flex-col"
              >
                <div className="p-2.5 rounded-lg bg-white/10 w-fit mb-4 border border-white/10">
                  {valueIcons[val.icon]}
                </div>
                <h4 className="text-base font-bold text-white mb-2 font-heading">
                  {val.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed flex-1">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
