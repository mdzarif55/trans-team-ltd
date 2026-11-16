import Link from "next/link";
import { ArrowLeft, Home, Search, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-slate-light px-4 py-24 sm:py-32">
      <div className="max-w-xl w-full text-center bg-white p-8 sm:p-12 rounded-3xl shadow-card border border-slate-200/80">
        <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-orange/15 text-brand-orange border border-brand-orange/30 mb-4">
          Error 404
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-navy-900 tracking-tight mb-3">
          Page Not Found
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
          The logistics page or resource you requested could not be located. It may have been moved or updated during our system redesign.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-navy-900 hover:bg-navy-950 text-white font-bold text-sm shadow-md transition-all active:scale-95"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-200 hover:border-slate-300 text-navy-900 font-semibold text-sm transition-colors"
          >
            <span>Explore Services</span>
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold text-sm transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Contact Support</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
