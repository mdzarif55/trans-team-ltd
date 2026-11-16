import Image from "next/image";
import { companyInfo } from "@/data/company";
import SectionHeading from "@/components/shared/SectionHeading";
import { ShieldCheck } from "lucide-react";

export default function AccreditationsSection() {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-orange mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Global Credentials</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-navy-900 mb-2">
            International Accreditations &amp; Affiliations
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Trans Team Ltd. adheres strictly to internationally validated quality systems, freight conventions, and aviation transport standards.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {companyInfo.accreditations.map((item) => (
            <div
              key={item.name}
              className="p-5 rounded-2xl bg-slate-light border border-slate-100 flex flex-col items-center text-center hover:shadow-subtle hover:border-slate-200 transition-all"
            >
              <div className="relative w-24 h-16 bg-white rounded-xl p-2.5 flex items-center justify-center shadow-sm mb-4 border border-slate-100">
                <Image
                  src={item.logo}
                  alt={item.fullName}
                  fill
                  className="object-contain p-2"
                  sizes="120px"
                />
              </div>

              <div className="font-bold text-sm text-navy-900 mb-1">
                {item.name}
              </div>

              <p className="text-[11px] text-slate-500 leading-snug">
                {item.fullName}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
