import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/layout/PageHeader";
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
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export const metadata: Metadata = {
  title: "Logistics & Freight Services | Trans Team Ltd.",
  description: "Comprehensive freight forwarding services: Air Freight, Ocean Freight, Customs Brokerage, Project Cargo & Heavy Lift, Inland Transport, and Specialized Construction in Bangladesh.",
};

export default function ServicesPage() {
  const iconMap: Record<string, React.ReactNode> = {
    Plane: <Plane className="w-6 h-6" />,
    Ship: <Ship className="w-6 h-6" />,
    FileCheck2: <FileCheck2 className="w-6 h-6" />,
    ShieldAlert: <ShieldAlert className="w-6 h-6" />,
    Truck: <Truck className="w-6 h-6" />,
    Globe2: <Globe2 className="w-6 h-6" />,
    HardHat: <HardHat className="w-6 h-6" />,
    Send: <Send className="w-6 h-6" />
  };

  return (
    <>
      <PageHeader
        badge="Our Services"
        title="Comprehensive Logistics &amp; Freight Forwarding"
        subtitle="End-to-end multi-modal transportation, specialized heavy-lift engineering, and licensed customs brokerage connecting Bangladesh with the world."
        breadcrumbItems={[{ label: "Services" }]}
        backgroundImage="/images/hero/hero-ship.jpg"
      />

      <section className="py-20 bg-slate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Tailor-Made Solutions"
            title="Integrated Freight &amp; Supply Chain Capabilities"
            subtitle="Explore our 8 specialized service categories designed to satisfy the rigorous demands of industrial EPCs, manufacturers, and global trading houses."
          />

          <div className="space-y-12">
            {servicesData.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.slug}
                  id={service.slug}
                  className="bg-white rounded-3xl overflow-hidden shadow-subtle hover:shadow-card border border-slate-100 transition-all p-6 sm:p-8 lg:p-10"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`}>
                    {/* Visual Preview */}
                    <div className={`lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden bg-navy-950 shadow-md">
                        <Image
                          src={service.heroImage}
                          alt={service.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 450px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 p-3 rounded-xl bg-brand-orange text-white shadow-lg">
                          {iconMap[service.iconName]}
                        </div>
                      </div>
                    </div>

                    {/* Content Description */}
                    <div className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <div className="inline-block px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-700 mb-3">
                        Operational Division #{index + 1}
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-navy-900 mb-3">
                        {service.title}
                      </h2>

                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                        {service.fullDescription}
                      </p>

                      {/* Key Features Bullets */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                        {service.features.slice(0, 4).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-4 pt-2">
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-navy-900 hover:bg-navy-950 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
                        >
                          <span>Full Specifications &amp; Scope</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>

                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-200 hover:border-slate-300 text-navy-900 font-semibold text-xs sm:text-sm transition-colors"
                        >
                          <span>Request Quotation</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
