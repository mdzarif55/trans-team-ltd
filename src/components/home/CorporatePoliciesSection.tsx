import Link from "next/link";
import SectionHeading from "@/components/shared/SectionHeading";
import { corporatePolicies } from "@/data/policies";
import { ShieldCheck, HeartHandshake, Award, BookOpen, Scale, ArrowRight } from "lucide-react";

export default function CorporatePoliciesSection() {
  const iconMap: Record<string, React.ReactNode> = {
    "health-environment-safety": <ShieldCheck className="w-5 h-5 text-brand-orange" />,
    "quality-management": <Award className="w-5 h-5 text-brand-orange" />,
    "corporate-social-responsibility": <HeartHandshake className="w-5 h-5 text-brand-orange" />,
    "approach-to-training": <BookOpen className="w-5 h-5 text-brand-orange" />,
    "code-of-business-conduct": <Scale className="w-5 h-5 text-brand-orange" />
  };

  return (
    <section className="py-20 md:py-28 bg-slate-light" id="policies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Governance & Ethics"
          title="Official Corporate Policies &amp; Compliance"
          subtitle="TTL maintains rigorous standards in occupational health, environmental stewardship, ISO quality certification, and transparent corporate ethics."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {corporatePolicies.map((policy) => (
            <div
              key={policy.id}
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-subtle hover:shadow-cardHover border border-slate-100 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="p-3 rounded-xl bg-brand-orange/10 w-fit mb-4 border border-brand-orange/20">
                  {iconMap[policy.id]}
                </div>
                <h3 className="text-base sm:text-lg font-bold font-heading text-navy-900 mb-2 leading-snug">
                  {policy.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {policy.summary}
                </p>

                {/* Key Points */}
                <div className="space-y-1.5 mb-6">
                  {policy.keyPoints.slice(0, 3).map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0 mt-1.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  href="/policies"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 hover:text-brand-orange transition-colors"
                >
                  <span>Read Complete Policy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
