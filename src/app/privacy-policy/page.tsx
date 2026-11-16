import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import { ShieldCheck, Lock, Eye, FileText, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Trans Team Ltd.",
  description: "Official Privacy Policy of Trans Team Ltd. (TTL) regarding client data confidentiality, shipment information, and trade security.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        badge="Legal & Confidentiality"
        title="Corporate Privacy Policy"
        subtitle="How Trans Team Ltd. protects corporate client data, shipment manifests, customs documentation, and electronic communications."
        breadcrumbItems={[{ label: "Privacy Policy" }]}
        backgroundImage="/images/hero/about-us2111.jpg"
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none text-slate-700 space-y-8 text-sm sm:text-base leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold font-heading text-navy-900 mb-3">
                1. Commitment to Client Confidentiality
              </h2>
              <p>
                Trans Team Ltd. (TTL) and the RMK Group are committed to maintaining the confidentiality, integrity, and security of all personal, commercial, and operational information provided by our clients, partners, and vendors. We recognize that international freight forwarding and customs clearance involve highly sensitive commercial trade secrets, shipment manifests, and pricing information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-navy-900 mb-3">
                2. Information We Collect
              </h2>
              <p>
                In the course of providing freight forwarding, customs clearance, project cargo engineering, and related services, we collect:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-slate-600">
                <li>Corporate business details (company registration, tax ID, VAT credentials, trade licenses).</li>
                <li>Consignment documentation (bills of lading, air waybills, commercial invoices, packing lists).</li>
                <li>Contact personnel details (names, business emails, phone numbers, job designations).</li>
                <li>Electronic data interchange (EDI) filings required by customs authorities (ASYCUDA World).</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-navy-900 mb-3">
                3. Use of Information
              </h2>
              <p>
                Collected data is used strictly for legitimate logistics execution, including:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-slate-600">
                <li>Booking ocean vessels, air cargo space, and river barge transportation.</li>
                <li>Filing mandatory customs declarations with the National Board of Revenue (NBR) in Bangladesh.</li>
                <li>Coordinating with port authorities, civil aviation authorities, and security agencies.</li>
                <li>Providing real-time tracking, shipment updates, and invoice accounting.</li>
              </ul>
              <p className="mt-2">
                TTL does not sell, rent, or trade client commercial data to third-party marketing brokers under any circumstances.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-navy-900 mb-3">
                4. Data Security &amp; Access Controls
              </h2>
              <p>
                We implement physical, administrative, and technical safeguards conforming to ISO 9001:2008 management procedures. Access to shipment records is strictly limited to authorized TTL operations personnel with a verified operational need.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-navy-900 mb-3">
                5. Compliance with Code of Business Conduct
              </h2>
              <p>
                Our privacy practices operate in full harmony with our Code of Business Conduct, prohibiting insider trading, unauthorized disclosure of pricing, or misuse of partner information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-navy-900 mb-3">
                6. Contacting the Compliance Officer
              </h2>
              <p>
                If you have inquiries or wish to request data verification regarding our privacy practices, please contact our compliance desk:
              </p>
              <div className="p-4 rounded-xl bg-slate-light border border-slate-200 text-xs sm:text-sm text-slate-700 mt-2">
                <div className="font-bold text-navy-900">Trans Team Ltd. — Corporate Compliance Desk</div>
                <div>House #04 (3rd Floor), Road #07, Sector #01, Uttara, Dhaka-1230, Bangladesh</div>
                <div>Email: <a href="mailto:info@ttlrmk.com" className="text-brand-orange font-semibold">info@ttlrmk.com</a></div>
                <div>Phone: +88 02 7912990</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
