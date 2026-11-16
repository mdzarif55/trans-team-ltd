"use client";

import { useState } from "react";
import Image from "next/image";
import PageHeader from "@/components/layout/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { teamMembers } from "@/data/team";
import { Phone, Mail, Quote, Building2 } from "lucide-react";

export default function TeamPage() {
  const [activeDepartment, setActiveDepartment] = useState<string>("All");

  const departments = ["All", "Leadership", "Management", "Operations", "Regional"];

  const filteredMembers = activeDepartment === "All"
    ? teamMembers
    : teamMembers.filter((m) => m.department === activeDepartment);

  return (
    <>
      <PageHeader
        badge="Our People"
        title="Leadership &amp; Professional Staff"
        subtitle="Meet the seasoned executive leadership, division managers, seaport coordinators, and freight specialists driving TTL's operational success."
        breadcrumbItems={[
          { label: "About Us", href: "/about" },
          { label: "Our Team" }
        ]}
        backgroundImage="/images/hero/hero-plane.jpg"
      />

      {/* Leadership Quotes Showcase */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Managing Director Statement */}
            <div className="bg-navy-950 text-white p-8 rounded-2xl relative overflow-hidden border border-white/10 flex flex-col justify-between">
              <Quote className="absolute top-6 right-6 w-16 h-16 text-white/5 pointer-events-none" />
              <div>
                <div className="inline-block px-3 py-1 rounded bg-brand-orange text-white text-xs font-bold uppercase tracking-wider mb-4">
                  Managing Director Statement
                </div>
                <blockquote className="text-sm sm:text-base text-slate-200 italic leading-relaxed mb-6">
                  &ldquo;At TTL, we focus on involvement and accountability. We make every effort every day. It is important that our customers feel that we appreciate them and look after their goods when we transport them around the world.&rdquo;
                </blockquote>
              </div>
              <div className="flex items-center gap-3.5 pt-4 border-t border-white/10">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-orange">
                  <Image
                    src="/images/staff/299371586_1037323510277634.jpg"
                    alt="Md. Kamruzzaman Ibne Amin"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-white text-sm">Md. Kamruzzaman Ibne Amin</div>
                  <div className="text-xs text-brand-orange">Managing Director</div>
                </div>
              </div>
            </div>

            {/* Director Statement */}
            <div className="bg-slate-light text-navy-900 p-8 rounded-2xl relative overflow-hidden border border-slate-200/80 flex flex-col justify-between">
              <Quote className="absolute top-6 right-6 w-16 h-16 text-navy-900/5 pointer-events-none" />
              <div>
                <div className="inline-block px-3 py-1 rounded bg-navy-900 text-white text-xs font-bold uppercase tracking-wider mb-4">
                  Director Statement
                </div>
                <blockquote className="text-sm sm:text-base text-slate-700 italic leading-relaxed mb-6">
                  &ldquo;TTL is an experienced partner for companies seeking security and flexibility in their logistics and transport solutions. To and from Bangladesh — and as cross-trade throughout the world.&rdquo;
                </blockquote>
              </div>
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-200">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-navy-900">
                  <Image
                    src="/images/staff/f5d37063446ecd7b0ec9e8cb874.jpg"
                    alt="Maliha Imam"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-navy-900 text-sm">Maliha Imam</div>
                  <div className="text-xs text-slate-500 font-semibold">Director</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Directory with Interactive Filter */}
      <section className="py-20 bg-slate-light" id="directory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Staff Directory"
            title="Complete Corporate &amp; Operations Team"
            subtitle="Find staff information across leadership, division managers, airport operations, and port executives."
          />

          {/* Department Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveDepartment(dept)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeDepartment === dept
                    ? "bg-navy-900 text-white shadow-md"
                    : "bg-white text-slate-600 hover:text-navy-900 hover:bg-slate-50 border border-slate-200/80"
                }`}
              >
                {dept} {dept === "All" ? `(${teamMembers.length})` : ""}
              </button>
            ))}
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl overflow-hidden shadow-subtle hover:shadow-cardHover border border-slate-100 transition-all duration-300 flex flex-col group hover:-translate-y-1"
              >
                {/* Photo Frame */}
                <div className="relative h-60 w-full overflow-hidden bg-navy-950">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />

                  {/* Department Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-navy-950/80 text-white backdrop-blur-sm border border-white/10">
                      {member.department}
                    </span>
                  </div>
                </div>

                {/* Info Card */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold font-heading text-navy-900 leading-snug group-hover:text-brand-orange transition-colors">
                      {member.name}
                    </h3>
                    <div className="text-xs font-semibold text-brand-orange mt-0.5 mb-2.5">
                      {member.designation}
                    </div>

                    {member.bio && (
                      <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-3">
                        {member.bio}
                      </p>
                    )}
                  </div>

                  {/* Contact Badges */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-100 text-xs text-slate-600">
                    {member.phone && (
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                        <a href={`tel:${member.phone}`} className="hover:text-navy-900 truncate">
                          {member.phone}
                        </a>
                      </div>
                    )}
                    {member.email && (
                      <div className="flex items-center gap-2">
                        <Mail className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                        <a href={`mailto:${member.email}`} className="hover:text-navy-900 truncate">
                          {member.email}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
