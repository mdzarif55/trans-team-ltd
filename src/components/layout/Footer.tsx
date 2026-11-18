import Link from "next/link";
import Image from "next/image";
import { companyInfo } from "@/data/company";
import { servicesData } from "@/data/services";
import { footerQuickLinks } from "@/data/navigation";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-navy-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 4-Column Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative h-10 w-56">
                <Image
                  src="/logos/logo-main-white.png"
                  alt="Trans Team Ltd."
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Trans Team Ltd. (TTL) is a premier international freight-forwarding and multi-modal logistics enterprise in Bangladesh. An esteemed sister concern of the RMK Group, bringing over 18 years of specialized supply chain expertise.
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                <span>RMK Group Sister Concern</span>
              </div>
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-3.5 bg-brand-orange rounded-full" />
              Logistics Services
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {servicesData.slice(0, 7).map((srv) => (
                <li key={srv.slug}>
                  <Link
                    href={`/services/${srv.slug}`}
                    className="hover:text-brand-orange transition-colors flex items-center gap-1.5 group text-slate-300"
                  >
                    <ArrowRight className="w-3 h-3 text-slate-500 group-hover:text-brand-orange group-hover:translate-x-0.5 transition-all" />
                    <span>{srv.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-xs font-semibold text-brand-orange hover:underline inline-flex items-center gap-1 pt-1"
                >
                  View All Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-3.5 bg-brand-orange rounded-full" />
              Corporate Links
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-brand-orange transition-colors flex items-center gap-1.5 group text-slate-300"
                  >
                    <ArrowRight className="w-3 h-3 text-slate-500 group-hover:text-brand-orange group-hover:translate-x-0.5 transition-all" />
                    <span>{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Verified Offices */}
          <div className="space-y-5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-3.5 bg-brand-orange rounded-full" />
              Official Offices
            </h3>

            {/* Dhaka Office */}
            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="font-bold text-white text-sm">Dhaka Head Office</div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                <span>{companyInfo.contacts.dhakaOffice.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                <a href={`tel:${companyInfo.contacts.dhakaOffice.phones[0]}`} className="hover:text-white">
                  {companyInfo.contacts.dhakaOffice.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                <a href={`mailto:${companyInfo.contacts.dhakaOffice.email}`} className="hover:text-white">
                  {companyInfo.contacts.dhakaOffice.email}
                </a>
              </div>
            </div>

            {/* Chittagong Office */}
            <div className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-white/5">
              <div className="font-bold text-white text-sm">Chittagong Port Office</div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                <span>{companyInfo.contacts.chittagongOffice.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                <a href={`tel:${companyInfo.contacts.chittagongOffice.phone}`} className="hover:text-white">
                  {companyInfo.contacts.chittagongOffice.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                <a href={`mailto:${companyInfo.contacts.chittagongOffice.email}`} className="hover:text-white">
                  {companyInfo.contacts.chittagongOffice.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Privacy */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            &copy; 2006 – {currentYear} Trans Team Ltd. (TTL). All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/policies" className="hover:text-white transition-colors">
              HES &amp; CSR Policies
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
