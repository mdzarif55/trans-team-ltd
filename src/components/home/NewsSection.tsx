import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";
import { newsArticles } from "@/data/news";
import { Calendar, ArrowRight } from "lucide-react";
import { formatDate } from "@/lib/utils";

export default function NewsSection() {
  const articles = newsArticles.slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-white" id="news">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Company Announcements"
          title="Latest News, Achievements &amp; Operations"
          subtitle="Stay updated with our ongoing infrastructure operations, project accomplishments, and network announcements."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((item) => (
            <article
              key={item.slug}
              className="group bg-white rounded-2xl overflow-hidden shadow-subtle hover:shadow-cardHover border border-slate-100 transition-all duration-300 flex flex-col hover:-translate-y-1.5"
            >
              <div className="relative h-48 w-full overflow-hidden bg-navy-950">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded text-xs font-semibold bg-white/90 text-navy-900 backdrop-blur-sm shadow-sm">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2.5">
                    <Calendar className="w-3.5 h-3.5 text-brand-orange" />
                    <span>{formatDate(item.date)}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold font-heading text-navy-900 group-hover:text-brand-orange transition-colors mb-2.5 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <Link
                    href={`/news/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 group-hover:text-brand-orange transition-colors"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-navy-900 hover:bg-navy-950 text-white font-bold text-sm shadow-md transition-all active:scale-95"
          >
            <span>View All News &amp; Events</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
