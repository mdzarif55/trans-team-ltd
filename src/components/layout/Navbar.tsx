"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { mainNavigation } from "@/data/navigation";
import { companyInfo } from "@/data/company";
import MobileMenu from "./MobileMenu";
import {
  Phone,
  Mail,
  Clock,
  ChevronDown,
  Menu,
  ShieldCheck,
  ArrowRight
} from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = pathname === "/";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        {/* Top Info Bar */}
        <div
          className={`hidden md:block text-xs transition-all duration-300 ${
            scrolled
              ? "h-0 py-0 opacity-0 overflow-hidden"
              : "bg-navy-950/90 backdrop-blur-sm text-slate-300 border-b border-white/10 py-2"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Left: Contact Info */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-brand-orange" />
                <span>Dhaka:</span>
                <a
                  href={`tel:${companyInfo.contacts.dhakaOffice.phones[0]}`}
                  className="hover:text-white transition-colors font-medium"
                >
                  {companyInfo.contacts.dhakaOffice.phones[0]}
                </a>
                <span className="text-slate-600">|</span>
                <span>Ctg:</span>
                <a
                  href={`tel:${companyInfo.contacts.chittagongOffice.phone}`}
                  className="hover:text-white transition-colors font-medium"
                >
                  {companyInfo.contacts.chittagongOffice.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-brand-orange" />
                <a
                  href={`mailto:${companyInfo.contacts.dhakaOffice.email}`}
                  className="hover:text-white transition-colors"
                >
                  {companyInfo.contacts.dhakaOffice.email}
                </a>
              </div>
            </div>

            {/* Right: Hours & Certifications */}
            <div className="flex items-center space-x-5">
              <div className="flex items-center space-x-1.5 text-slate-300">
                <Clock className="w-3.5 h-3.5 text-brand-orange" />
                <span>Sat – Thu: 9:00 AM – 6:00 PM</span>
              </div>
              <div className="flex items-center space-x-1 text-slate-300 bg-white/5 px-2.5 py-0.5 rounded border border-white/10">
                <ShieldCheck className="w-3 h-3 text-brand-orange" />
                <span>ISO 9001:2008 &amp; FIATA Certified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav
          className={`transition-all duration-300 ${
            scrolled
              ? "bg-white/95 backdrop-blur-md shadow-card border-b border-slate-100 text-slate-800 py-2.5 sm:py-3"
              : isHomePage
              ? "bg-navy-950/75 backdrop-blur-md border-b border-white/10 text-white py-3 sm:py-3.5"
              : "bg-navy-950/95 backdrop-blur-md border-b border-white/10 text-white py-3 sm:py-3.5"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Logo: logo-main as requested */}
            <Link href="/" className="flex items-center gap-2 group shrink-0">
              <div className="relative h-9 sm:h-10 md:h-11 w-48 sm:w-56 md:w-64 transition-transform group-hover:scale-[1.01]">
                <Image
                  src={scrolled ? "/logos/logo-main.png" : "/logos/logo-main-white.png"}
                  alt="Trans Team Ltd."
                  fill
                  priority
                  className="object-contain object-left"
                  sizes="(max-width: 768px) 200px, 260px"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1">
              {mainNavigation.map((item) => {
                const hasChildren = item.children && item.children.length > 0;
                const isActive =
                  pathname === item.href ||
                  (item.children && item.children.some((c) => pathname === c.href));

                if (hasChildren) {
                  return (
                    <div
                      key={item.title}
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(item.title)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button
                        className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-semibold transition-all duration-200 ${
                          isActive
                            ? "text-brand-orange"
                            : scrolled
                            ? "text-navy-900 hover:text-brand-orange hover:bg-slate-50"
                            : "text-slate-100 hover:text-white hover:bg-white/10"
                        }`}
                        aria-expanded={activeDropdown === item.title}
                      >
                        <span>{item.title}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            activeDropdown === item.title ? "rotate-180 text-brand-orange" : ""
                          }`}
                        />
                      </button>

                      {/* Dropdown Menu with hover bridge */}
                      {activeDropdown === item.title && (
                        <div className="absolute top-full left-0 w-72 pt-1.5 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                          <div className="bg-white rounded-xl shadow-2xl border border-slate-100 p-2 text-slate-800">
                            {item.children!.map((subItem) => {
                              const isSubActive = pathname === subItem.href;
                              return (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  onClick={() => setActiveDropdown(null)}
                                  className={`block p-2.5 rounded-lg transition-colors ${
                                    isSubActive
                                      ? "bg-slate-100 text-brand-orange font-bold"
                                      : "hover:bg-slate-50 text-slate-700 hover:text-navy-900"
                                  }`}
                                >
                                  <div className="font-semibold text-sm leading-tight text-navy-900">
                                    {subItem.title}
                                  </div>
                                  {subItem.description && (
                                    <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                                      {subItem.description}
                                    </p>
                                  )}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "text-brand-orange font-bold"
                        : scrolled
                        ? "text-navy-900 hover:text-brand-orange hover:bg-slate-50"
                        : "text-slate-100 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>

            {/* Right Action: CTA & Mobile Hamburger */}
            <div className="flex items-center space-x-3">
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-orange hover:bg-brand-orange-hover text-white text-xs md:text-sm font-bold shadow-md transition-all duration-200 hover:shadow-lg active:scale-95"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  scrolled
                    ? "text-navy-900 hover:bg-slate-100"
                    : "text-white hover:bg-white/10"
                }`}
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
