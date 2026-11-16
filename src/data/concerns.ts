import { SisterConcern } from "@/types";

export const sisterConcerns: SisterConcern[] = [
  {
    id: "rmk-group",
    name: "RMK Group",
    sector: "Parent Holding Conglomerate",
    role: "Parent Group",
    description: "The overarching corporate holding group established over 10 years ago in Bangladesh, presiding over 8 wholly owned subsidiary companies spanning logistics, international trade, travel, engineering, and equipment management.",
    website: "https://ttlrmk.com",
    isParent: true,
    services: ["Group Governance", "Strategic Investment", "Corporate Management", "Cross-Industry Consultation"]
  },
  {
    id: "trans-team-ltd",
    name: "Trans Team Ltd. (TTL)",
    sector: "Logistics & Freight Forwarding",
    role: "Flagship Logistics Subsidiary",
    description: "The premier logistics arm delivering multi-modal air and sea freight forwarding, licensed customs brokerage, heavy-lift project cargo, specialized civil logistics, and inland transport across Bangladesh and worldwide.",
    website: "https://ttlrmk.com",
    services: ["Air & Sea Freight", "Project Cargo & Heavy Lift", "Customs Clearance & Brokerage", "Specialized Civil Logistics", "River Barging"]
  },
  {
    id: "rmk-world-freight",
    name: "RMK World Freight Ltd.",
    sector: "International Freight Forwarding",
    role: "Subsidiary Company",
    description: "Specializing in global consolidation, international sea freight container shipping (FCL/LCL), global air cargo charters, and cross-trade forwarding connecting Bangladesh with worldwide trade lanes.",
    services: ["FCL / LCL Ocean Forwarding", "Global Air Consolidation", "Cross-Trade Logistics", "Marine Cargo Insurance"]
  },
  {
    id: "rmk-tours-travels",
    name: "RMK Tours & Travels Ltd.",
    sector: "Corporate Travel & Aviation Services",
    role: "Subsidiary Company",
    description: "Providing professional corporate travel management, international airline ticketing, business visa processing, hotel accommodations, and executive mobility solutions for domestic and multinational corporate personnel.",
    services: ["Corporate Air Ticketing", "Business Visa Assistance", "Executive Travel Itineraries", "Hotel & Transit Bookings"]
  },
  {
    id: "jk-associates",
    name: "JK Associates",
    sector: "Engineering & Indentation",
    role: "Associated Concern",
    description: "Engaged in specialized commercial indentation, industrial supply chain representation, civil construction consultation, and public-private sector project procurement.",
    services: ["Commercial Indentation", "Industrial Equipment Procurement", "Civil Consultation", "Project Representation"]
  },
  {
    id: "exim-global-ltd",
    name: "Exim Global Ltd.",
    sector: "Export, Import & International Trade",
    role: "Subsidiary Company",
    description: "Managing international commodity trading, raw material sourcing, export documentation for domestic manufacturing mills, and regulatory trade compliance across South Asia, East Asia, and Europe.",
    services: ["Global Commodity Sourcing", "Import & Export Compliance", "Trade Financing & L/C Review", "Supply Chain Distribution"]
  },
  {
    id: "moriom-enterprise",
    name: "Moriom Enterprise",
    sector: "Transport & Cargo Handling Equipment",
    role: "Subsidiary Company",
    description: "Operating an extensive fleet of prime movers, flatbeds, low-bed heavy trailers, and cargo handling machinery, providing direct haulage and equipment leasing for industrial and port operations.",
    services: ["Heavy Equipment Rental", "Inland Prime Mover Haulage", "Port Cargo Drayage", "Warehouse Fleet Support"]
  }
];
