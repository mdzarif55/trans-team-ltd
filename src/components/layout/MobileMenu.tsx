"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { mainNavigation } from "@/data/navigation";
import { companyInfo } from "@/data/company";
import { X, ChevronDown, Phone, Mail, MapPin, ArrowRight } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleDropdown = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Slide-over panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-navy-950 text-white shadow-2xl flex flex-col z-10 border-l border-white/10">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <Link href="/" onClick={onClose} className="flex items-center">
            <div className="relative h-9 w-44">
              <Image
                src="/logos/logo-main-white.png"
                alt="Trans Team Ltd."
                fill
                className="object-contain object-left"
              />
            </div>
          </Link>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Navigation */}
        <div className="flex-1 overflow-y-auto px-5 py-6 space-y-2">
          {mainNavigation.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const isDropdownOpen = openDropdown === item.title;

            return (
              <div key={item.title} className="border-b border-white/5 pb-2">
                {hasChildren ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.title)}
                      className="w-full flex items-center justify-between py-2.5 text-base font-semibold text-slate-200 hover:text-brand-orange transition-colors"
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isDropdownOpen ? "rotate-180 text-brand-orange" : "text-slate-400"
                        }`}
                      />
                    </button>
                    {isDropdownOpen && (
                      <div className="pl-4 py-2 space-y-2 bg-white/5 rounded-lg my-1">
                        {item.children!.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            onClick={onClose}
                            className="block py-2 text-sm text-slate-300 hover:text-brand-orange transition-colors"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block py-2.5 text-base font-semibold text-slate-200 hover:text-brand-orange transition-colors"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            );
          })}

          {/* Quick Action Button */}
          <div className="pt-4 pb-2">
            <Link
              href="/contact"
              onClick={onClose}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold text-sm shadow-md transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Contact Details */}
          <div className="pt-6 border-t border-white/10 space-y-3 text-xs text-slate-300">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
              <span>{companyInfo.contacts.dhakaOffice.address}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-brand-orange shrink-0" />
              <a href={`tel:${companyInfo.contacts.dhakaOffice.phones[0]}`} className="hover:text-white">
                {companyInfo.contacts.dhakaOffice.phone}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-brand-orange shrink-0" />
              <a href={`mailto:${companyInfo.contacts.dhakaOffice.email}`} className="hover:text-white">
                {companyInfo.contacts.dhakaOffice.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
