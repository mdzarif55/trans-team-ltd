import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/layout/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { newsArticles } from "@/data/news";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "News & Events | Trans Team Ltd.",
  description: "Official announcements, heavy cargo operations updates, and industry recognitions from Trans Team Ltd. (TTL) in Bangladesh.",
};

export default function NewsPage() {
  const featuredArticle = newsArticles[0];
  const regularArticles = newsArticles.slice(1);

  return (
    <>
      <PageHeader
        badge="Newsroom"
        title="News, Events &amp; Operational Updates"
        subtitle="Official news releases, heavy cargo transit milestones, and company events from Trans Team Ltd."
        breadcrumbItems={[{ label: "News & Events" }]}
        backgroundImage="/images/hero/news.jpg"
      />

      <section className="py-20 bg-slate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Article Banner */}
          {featuredArticle && (
            <div className="mb-16 bg-white rounded-3xl overflow-hidden shadow-card border border-slate-100 group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div className="lg:col-span-6 relative h-72 sm:h-96 lg:h-full min-h-[300px] bg-navy-950 overflow-hidden">
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent lg:hidden" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-orange text-white shadow-md">
                      Featured Release
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-brand-orange" />
                        <span>{formatDate(featuredArticle.date)}</span>
                      </div>
                      <span>•</span>
                      <span className="font-semibold text-slate-700">{featuredArticle.category}</span>
                    </div>

                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-heading text-navy-900 group-hover:text-brand-orange transition-colors mb-4 leading-snug">
                      {featuredArticle.title}
                    </h2>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {featuredArticle.excerpt}
                    </p>
                  </div>

                  <div>
                    <Link
                      href={`/news/${featuredArticle.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-navy-900 hover:bg-navy-950 text-white font-bold text-sm shadow-md transition-all active:scale-95"
                    >
                      <span>Read Complete Story</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Regular Articles Grid */}
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-bold font-heading text-navy-900">
                Recent Announcements
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article) => (
                <article
                  key={article.slug}
                  className="group bg-white rounded-2xl overflow-hidden shadow-subtle hover:shadow-cardHover border border-slate-100 transition-all duration-300 flex flex-col hover:-translate-y-1"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-navy-950">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded text-xs font-semibold bg-white/90 text-navy-900 backdrop-blur-sm shadow-sm">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2.5">
                        <Calendar className="w-3.5 h-3.5 text-brand-orange" />
                        <span>{formatDate(article.date)}</span>
                      </div>

                      <h3 className="text-base font-bold font-heading text-navy-900 group-hover:text-brand-orange transition-colors mb-2.5 leading-snug">
                        {article.title}
                      </h3>

                      <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100">
                      <Link
                        href={`/news/${article.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 group-hover:text-brand-orange transition-colors"
                      >
                        <span>Read Full Release</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
