import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import ContactForm from "@/components/shared/ContactForm";
import { companyInfo } from "@/data/company";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Building2,
  ExternalLink
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Dhaka & Chittagong Offices",
  description: "Get in touch with Trans Team Ltd. (TTL). Head Office in Uttara, Dhaka and Port Operations Office in Agrabad, Chittagong. Submit your freight inquiry.",
};

export default function ContactPage() {
  const { dhakaOffice, chittagongOffice } = companyInfo.contacts;

  return (
    <>
      <PageHeader
        badge="Direct Communications"
        title="Contact Our Logistics Specialists"
        subtitle="Connect with our corporate headquarters in Dhaka or our seaport operations team at Agrabad, Chittagong."
        breadcrumbItems={[{ label: "Contact Us" }]}
        backgroundImage="/images/hero/contact.jpg"
      />

      <section className="py-20 bg-slate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Office Cards & Maps (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl font-bold font-heading text-navy-900 mb-2">
                  Corporate Offices &amp; Gateways
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  Visit or contact our operational centers for freight scheduling, customs documentation, and project logistics.
                </p>
              </div>

              {/* Dhaka Head Office Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-subtle border border-slate-200/80 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-navy-50 text-navy-900">
                      <Building2 className="w-5 h-5 text-brand-orange" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-navy-900">
                        {dhakaOffice.title}
                      </h3>
                      <div className="text-[11px] text-brand-orange font-semibold">
                        Airport &amp; Central Administration
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{dhakaOffice.address}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                    <div className="space-x-2">
                      {dhakaOffice.phones.map((p, idx) => (
                        <a key={idx} href={`tel:${p}`} className="hover:text-navy-900 font-medium">
                          {p} {idx < dhakaOffice.phones.length - 1 ? "•" : ""}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                    <a href={`mailto:${dhakaOffice.email}`} className="hover:text-navy-900 font-medium">
                      {dhakaOffice.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-brand-orange shrink-0" />
                    <span>{dhakaOffice.hours}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://maps.google.com/?q=Sector+1+Uttara+Dhaka+Bangladesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 hover:text-brand-orange transition-colors"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Chittagong Regional Office Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-subtle border border-slate-200/80 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-navy-50 text-navy-900">
                      <Building2 className="w-5 h-5 text-brand-orange" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-navy-900">
                        {chittagongOffice.title}
                      </h3>
                      <div className="text-[11px] text-brand-orange font-semibold">
                        Seaport Terminal Logistics Hub
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{chittagongOffice.address}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                    <a href={`tel:${chittagongOffice.phone}`} className="hover:text-navy-900 font-medium">
                      {chittagongOffice.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                    <a href={`mailto:${chittagongOffice.email}`} className="hover:text-navy-900 font-medium">
                      {chittagongOffice.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-brand-orange shrink-0" />
                    <span>{chittagongOffice.hours}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://maps.google.com/?q=Agrabad+Chittagong+Bangladesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 hover:text-brand-orange transition-colors"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Department Direct Email Directory */}
              <div className="bg-navy-950 text-white rounded-2xl p-6 border border-white/10 shadow-card space-y-3">
                <div className="font-bold text-white text-sm pb-2 border-b border-white/10 flex items-center justify-between">
                  <span>Direct Department Inquiries</span>
                  <ShieldCheck className="w-4 h-4 text-brand-orange" />
                </div>
                <div className="grid grid-cols-2 gap-2.5 text-xs text-slate-300">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Air Export / Import:</span>
                    <a href="mailto:export@rmkfreight.com" className="hover:text-brand-orange truncate block">
                      export@rmkfreight.com
                    </a>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Sea Freight Forwarding:</span>
                    <a href="mailto:sea-export@rmkfreight.com" className="hover:text-brand-orange truncate block">
                      sea-export@rmkfreight.com
                    </a>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Chittagong Seaport:</span>
                    <a href="mailto:ctg@rmkfreight.com" className="hover:text-brand-orange truncate block">
                      ctg@rmkfreight.com
                    </a>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Managing Director:</span>
                    <a href="mailto:amin@rmkfreight.com" className="hover:text-brand-orange truncate block">
                      amin@rmkfreight.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Google Map Embed */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold font-heading text-navy-900">
              Locate Our Dhaka Head Office
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Conveniently located in Uttara Sector 1, close to Hazrat Shahjalal International Airport (DAC).
            </p>
          </div>

          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden shadow-subtle border border-slate-200 bg-slate-100 relative">
            <iframe
              title="Trans Team Ltd Dhaka Head Office Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.5134761008064!2d90.39855!3d23.87146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c46b5a32b6ad%3A0x6a2c2ef7bc8e15c2!2sUttara%20Sector%201%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
