import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import { newsArticles } from "@/data/news";
import { Calendar, Tag, ExternalLink, ArrowLeft, ArrowRight, Share2 } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface NewsDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: NewsDetailPageProps): Promise<Metadata> {
  const article = newsArticles.find((a) => a.slug === params.slug);
  if (!article) {
    return { title: "Article Not Found" };
  }
  return {
    title: `${article.title} | News & Events`,
    description: article.excerpt,
  };
}

export default function NewsDetailPage({ params }: NewsDetailPageProps) {
  const article = newsArticles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = newsArticles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <PageHeader
        badge={article.category}
        title={article.title}
        subtitle={`Published on ${formatDate(article.date)}`}
        breadcrumbItems={[
          { label: "News & Events", href: "/news" },
          { label: article.title }
        ]}
        backgroundImage={article.image}
      />

      <article className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Metadata Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-200">
            <div className="flex items-center space-x-4 text-xs sm:text-sm text-slate-500">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-brand-orange" />
                <span>{formatDate(article.date)}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Tag className="w-4 h-4 text-brand-orange" />
                <span className="font-semibold text-slate-700">{article.category}</span>
              </div>
            </div>

            <Link
              href="/news"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-900 hover:text-brand-orange transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Newsroom</span>
            </Link>
          </div>

          {/* Lead Image */}
          <div className="relative h-80 sm:h-[440px] rounded-2xl overflow-hidden shadow-card mb-10 bg-navy-950">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 850px"
            />
          </div>

          {/* Body Paragraphs */}
          <div className="prose prose-slate max-w-none text-base leading-relaxed space-y-6 text-slate-700">
            {article.content.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Source Attribution */}
          {article.source && (
            <div className="mt-10 p-4 rounded-xl bg-slate-light border border-slate-200 text-xs text-slate-500 flex items-center justify-between">
              <div>
                <span className="font-semibold text-slate-700">Source:</span> {article.source}
              </div>
              {article.sourceUrl && (
                <a
                  href={article.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-brand-orange hover:underline font-semibold"
                >
                  <span>View Original Release</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          )}

          {/* Related Articles Strip */}
          <div className="mt-16 pt-12 border-t border-slate-200">
            <h3 className="text-xl font-bold font-heading text-navy-900 mb-6">
              More Recent News &amp; Operational Reports
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/news/${rel.slug}`}
                  className="group block p-4 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-subtle transition-all"
                >
                  <div className="text-[11px] text-brand-orange font-semibold mb-1">
                    {formatDate(rel.date)}
                  </div>
                  <h4 className="text-sm font-bold text-navy-900 group-hover:text-brand-orange transition-colors line-clamp-2 mb-1.5 leading-snug">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {rel.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
