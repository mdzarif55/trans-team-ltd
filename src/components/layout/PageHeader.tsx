import Breadcrumb, { BreadcrumbItem } from "./Breadcrumb";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  breadcrumbItems: BreadcrumbItem[];
  backgroundImage?: string;
}

export default function PageHeader({
  title,
  subtitle,
  badge,
  breadcrumbItems,
  backgroundImage = "/images/slider/011e6a1d3205900c9b22aa5fbacaf465.jpg"
}: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-navy-950 overflow-hidden text-white">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity scale-105 transition-transform duration-1000"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/80" />

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-4">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {badge && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-orange/20 text-brand-orange border border-brand-orange/30 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              {badge}
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight text-white mb-4">
            {title}
          </h1>

          {subtitle && (
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
