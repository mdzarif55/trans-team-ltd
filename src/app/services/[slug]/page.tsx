import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import { servicesData } from "@/data/services";
import { companyInfo } from "@/data/company";
import {
  CheckCircle2,
  ShieldCheck,
  Building2,
  Phone,
  Mail,
  ArrowRight,
  Plane,
  Ship,
  FileCheck2,
  ShieldAlert,
  Truck,
  Globe2,
  HardHat,
  Send
} from "lucide-react";

interface ServiceDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) {
    return { title: "Service Not Found" };
  }
  return {
    title: `${service.title} | Trans Team Ltd.`,
    description: service.shortDescription,
  };
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

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

  const relatedServices = servicesData.filter((s) =>
    service.relatedServiceIds.includes(s.id)
  );

  return (
    <>
      <PageHeader
        badge="Specialized Service"
        title={service.title}
        subtitle={service.shortDescription}
        breadcrumbItems={[
          { label: "Services", href: "/services" },
          { label: service.title }
        ]}
        backgroundImage={service.heroImage}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content (8 cols) */}
            <div className="lg:col-span-8">
              {/* Hero Image */}
              <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-card mb-10 bg-navy-950">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 800px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <div className="p-3 bg-brand-orange text-white rounded-xl shadow-md">
                    {iconMap[service.iconName]}
                  </div>
                  <div className="text-white">
                    <div className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                      Trans Team Ltd. Operations
                    </div>
                    <div className="text-xl font-bold font-heading">{service.title}</div>
                  </div>
                </div>
              </div>

              {/* Service Overview */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold font-heading text-navy-900 mb-4">
                  Service Overview &amp; Operational Standards
                </h2>
                <p className="text-base text-slate-600 leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              {/* Key Features */}
              <div className="mb-10 p-6 sm:p-8 bg-slate-light rounded-2xl border border-slate-100">
                <h3 className="text-xl font-bold font-heading text-navy-900 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-brand-orange rounded-full" />
                  Key Features &amp; Service Benefits
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Capabilities */}
              <div className="mb-10">
                <h3 className="text-xl font-bold font-heading text-navy-900 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-navy-900 rounded-full" />
                  Technical Capabilities &amp; Compliance
                </h3>
                <div className="space-y-3">
                  {service.capabilities.map((cap, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3"
                    >
                      <div className="p-1.5 rounded-lg bg-navy-50 text-navy-900 mt-0.5">
                        <ShieldCheck className="w-4 h-4 text-brand-orange" />
                      </div>
                      <div className="text-sm font-semibold text-slate-800">{cap}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Operational Scope */}
              <div className="mb-10 p-6 rounded-2xl bg-navy-950 text-white">
                <h3 className="text-lg font-bold font-heading mb-2 text-white">
                  Operational Gateways &amp; Geographic Scope
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {service.operationalScope}
                </p>
              </div>

              {/* Industries Served */}
              <div>
                <h3 className="text-lg font-bold font-heading text-navy-900 mb-3">
                  Key Industries Served
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.industriesServed.map((ind, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-8">
              {/* Quick Inquiry Card */}
              <div className="bg-navy-950 text-white p-6 sm:p-8 rounded-2xl border border-white/10 shadow-card">
                <div className="text-xs font-bold uppercase tracking-wider text-brand-orange mb-2">
                  Freight Consultation
                </div>
                <h3 className="text-xl font-bold font-heading text-white mb-3">
                  Request a Custom Quotation
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  Speak with our cargo planners to receive route assessments, transit estimates, and competitive freight tariffs.
                </p>

                <div className="space-y-3 mb-6 text-xs text-slate-200">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                    <span>Dhaka: {companyInfo.contacts.dhakaOffice.phones[0]}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                    <span>Ctg: {companyInfo.contacts.chittagongOffice.phone}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                    <span>{companyInfo.contacts.dhakaOffice.email}</span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-sm shadow-md transition-colors"
                >
                  <span>Submit Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <h4 className="text-base font-bold font-heading text-navy-900 mb-4 pb-2 border-b border-slate-100">
                    Related Services
                  </h4>
                  <div className="space-y-3">
                    {relatedServices.map((rel) => (
                      <Link
                        key={rel.slug}
                        href={`/services/${rel.slug}`}
                        className="block p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200 group"
                      >
                        <div className="text-sm font-bold text-navy-900 group-hover:text-brand-orange transition-colors">
                          {rel.title}
                        </div>
                        <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                          {rel.shortDescription}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Accreditations badge in sidebar */}
              <div className="p-5 bg-slate-light rounded-2xl border border-slate-100 text-xs text-slate-600 space-y-2">
                <div className="font-bold text-navy-900 text-sm">Accredited Operations</div>
                <p>
                  Certified under ISO 9001:2008, BAFFA, FIATA, IATA, and Project Cargo Network (PCN).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
