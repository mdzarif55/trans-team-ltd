"use client";

import { useState } from "react";
import Image from "next/image";
import PageHeader from "@/components/layout/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import Lightbox from "@/components/shared/Lightbox";
import { galleryItems } from "@/data/gallery";
import { Maximize2, Camera } from "lucide-react";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ["All", "Heavy Transport", "Port & Marine", "Air Freight", "Warehousing", "Operations"];

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <PageHeader
        badge="Visual Operations"
        title="Official Photo Gallery"
        subtitle="Authentic operational photography capturing heavy-lift transport, port container maneuvers, river barge transshipment, and logistics execution."
        breadcrumbItems={[{ label: "Gallery" }]}
        backgroundImage="/images/hero/gallery.jpg"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Field Operations"
            title="Logistics &amp; Infrastructure in Action"
            subtitle="Explore real photographic documentation from our power plant deliveries, seaport container terminals, and heavy haulage operations."
          />

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-navy-900 text-white shadow-md"
                    : "bg-slate-light text-slate-600 hover:text-navy-900 hover:bg-slate-200/60 border border-slate-200"
                }`}
              >
                {cat} {cat === "All" ? `(${galleryItems.length})` : ""}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(idx)}
                className="group relative h-72 rounded-2xl overflow-hidden bg-navy-950 cursor-pointer shadow-subtle hover:shadow-cardHover transition-all duration-300 border border-slate-100 hover:-translate-y-1"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Dark Overlay with Caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Zoom Icon Button */}
                <div className="absolute top-4 right-4 p-2.5 rounded-full bg-white/20 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Caption Details */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-brand-orange text-white mb-2 shadow-sm">
                    {item.category}
                  </div>
                  <h3 className="text-base font-bold font-heading text-white mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <Lightbox
          items={filteredItems}
          currentIndex={lightboxIndex}
          isOpen={lightboxIndex !== null}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(newIndex) => setLightboxIndex(newIndex)}
        />
      )}
    </>
  );
}
