import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";
import { servicesData } from "@/data/services";
import {
  Plane,
  Ship,
  FileCheck2,
  ShieldAlert,
  Truck,
  Globe2,
  HardHat,
  Send,
  ArrowRight
} from "lucide-react";

export default function ServicesGrid() {
  const iconMap: Record<string, React.ReactNode> = {
    Plane: <Plane className="w-5 h-5" />,
    Ship: <Ship className="w-5 h-5" />,
    FileCheck2: <FileCheck2 className="w-5 h-5" />,
    ShieldAlert: <ShieldAlert className="w-5 h-5" />,
    Truck: <Truck className="w-5 h-5" />,
    Globe2: <Globe2 className="w-5 h-5" />,
    HardHat: <HardHat className="w-5 h-5" />,
    Send: <Send className="w-5 h-5" />
  };

  return (
    <section className="py-20 md:py-28 bg-slate-light" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Comprehensive Capabilities"
          title="Engineered Logistics & Freight Solutions"
          subtitle="From time-sensitive air cargo and ocean container forwarding to 343-ton heavy lift power plant transit, TTL provides turnkey end-to-end supply chain mastery."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.slug}
              className="group bg-white rounded-2xl overflow-hidden shadow-subtle hover:shadow-cardHover border border-slate-100 transition-all duration-300 flex flex-col hover:-translate-y-1.5"
            >
              {/* Card Thumbnail */}
              <div className="relative h-44 w-full overflow-hidden bg-navy-950">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />

                {/* Floating Icon Badge */}
                <div className="absolute bottom-3 left-4 p-2.5 rounded-xl bg-brand-orange text-white shadow-md group-hover:scale-110 transition-transform">
                  {iconMap[service.iconName]}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-heading text-navy-900 group-hover:text-brand-orange transition-colors mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-4 line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 group-hover:text-brand-orange transition-colors"
                  >
                    <span>Explore Service Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Overview CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-navy-900 hover:bg-navy-950 text-white font-bold text-sm shadow-md transition-all active:scale-95"
          >
            <span>View All Operational Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
