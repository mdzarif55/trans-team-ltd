import { ServiceItem } from "@/types";

export const servicesData: ServiceItem[] = [
  {
    id: "air-freight",
    slug: "air-freight",
    title: "Air Freight Forwarding",
    shortDescription: "Rapid, secure global air cargo logistics connecting Bangladesh with premier international trade lanes under strict IATA compliance.",
    fullDescription: "Trans Team Ltd. provides end-to-end air freight forwarding services engineered for time-critical, high-value, and sensitive shipments. From single-kilo emergency courier items to multi-ton aircraft charters, our dedicated airport operations team at Hazrat Shahjalal International Airport (Dhaka) manages customs documentation, ramp handling, warehouse staging, and onward delivery with utmost speed and transparency.",
    iconName: "Plane",
    heroImage: "/images/services/air-freight.jpg",
    features: [
      "Direct & consolidated international air cargo services",
      "IATA certified handling standards and dangerous goods compliance",
      "Hazardous material (HAZMAT) and temperature-controlled cargo handling",
      "Full and part charter flight arrangements for heavy or oversized air cargo",
      "Comprehensive airport ground handling & expedited air customs clearance",
      "Real-time shipment milestone notifications and air waybill (AWB) tracking"
    ],
    capabilities: [
      "IATA Certified Acceptance & Loading Protocols",
      "On-site Airport Operations Management at Dhaka (DAC)",
      "High-Value Garments & Readymade Apparels (RMG) Air Logistics",
      "Pharmaceutical and perishable cold-chain logistics"
    ],
    industriesServed: ["Apparel & Textiles", "Pharmaceuticals", "Aviation & Electronics", "Emergency Industrial Spares"],
    operationalScope: "Global departures from Dhaka (DAC) and Chittagong (CGP) to North America, Europe, Middle East, and Asia-Pacific hubs.",
    relatedServiceIds: ["customs-clearance", "courier-express", "sea-freight"]
  },
  {
    id: "sea-freight",
    slug: "sea-freight",
    title: "Ocean / Sea Freight Forwarding",
    shortDescription: "Complete Full Container Load (FCL) and Less-than-Container Load (LCL) maritime freight solutions through Chittagong and Mongla ports.",
    fullDescription: "As an active member of FIATA and BAFFA, Trans Team Ltd. provides comprehensive ocean freight services connecting Bangladesh's key sea gateways (Chittagong Port and Mongla Port) to major ports worldwide. We manage carrier bookings, container positioning, intermodal drayage, customs documentation, and bill of lading issuance to ensure seamless maritime supply chains.",
    iconName: "Ship",
    heroImage: "/images/services/sea-freight.jpg",
    features: [
      "Full Container Load (FCL) & Less-than-Container Load (LCL) consolidation",
      "Special equipment provisioning: Open Top, Flat Rack, and Reefer containers",
      "Strong direct carrier contracts ensuring competitive ocean freight rates",
      "Comprehensive port handling at Chittagong Port and Mongla Port",
      "Cross-trade shipments managing cargo originating outside Bangladesh",
      "End-to-end marine cargo insurance consultation and cargo survey assistance"
    ],
    capabilities: [
      "On-site Port Representation at Agrabad, Chittagong",
      "LCL Consolidation & De-consolidation Warehousing",
      "Over-dimensional cargo handling on flat-rack equipment",
      "Dedicated Sea-Export and Sea-Import operational desks"
    ],
    industriesServed: ["Readymade Garments (RMG)", "Heavy Industrial Machinery", "Consumer Goods", "Raw Materials & Chemicals"],
    operationalScope: "Regular scheduled container sailings to Europe, USA, East Asia, Mediterranean, and Middle East ports.",
    relatedServiceIds: ["air-freight", "customs-clearance", "project-cargo"]
  },
  {
    id: "customs-clearance",
    slug: "customs-clearance",
    title: "Customs Clearance & Brokerage",
    shortDescription: "Licensed, compliant customs brokerage navigating NBR tariffs, HS classifications, and regulatory clearance at all major Bangladesh gateways.",
    fullDescription: "Navigating Bangladesh's import and export customs regulations requires seasoned technical knowledge and institutional trust. Trans Team Ltd. provides professional customs clearance and customs brokerage services across Dhaka Airport, Chittagong Seaport, Mongla Seaport, and Inland Container Depots (ICDs). Our licensed customs brokers ensure accurate Harmonized System (HS) code classification, duty calculations, regulatory compliance, and rapid dispatch of consignments.",
    iconName: "FileCheck2",
    heroImage: "/images/services/customs-clearance.jpg",
    features: [
      "Complete import & export customs clearance documentation",
      "Licensed customs brokerage at Dhaka Airport (DAC) and Chittagong Port (CTG)",
      "Accurate HS Code determination and tariff assessment",
      "Assistance with duty exemption and concession facilities for project cargo",
      "Handling of bonded warehouse licenses and duty-free import clearance",
      "Specialized clearance for heavy power plant machinery and chemicals"
    ],
    capabilities: [
      "Direct ASYCUDA World electronic data interchange (EDI) filing",
      "Port Health, Radiation, Chemical & BSTI certification clearance",
      "Temporary import bond processing for EPC contractor equipment",
      "Specialized dispute resolution and appeal documentation support"
    ],
    industriesServed: ["Power & Energy EPCs", "Manufacturing Units", "Commercial Importers", "Export Oriented Industries"],
    operationalScope: "Hazrat Shahjalal Int'l Airport (Dhaka), Chittagong Port, Mongla Port, Kamalapur ICD, and Benapole Land Port.",
    relatedServiceIds: ["air-freight", "sea-freight", "import-export"]
  },
  {
    id: "project-cargo",
    slug: "project-cargo",
    title: "Project Cargo & Heavy Lift Logistics",
    shortDescription: "Engineered multi-modal transport solutions for over-dimensional (ODC) and heavy machinery for power plants and national infrastructure.",
    fullDescription: "TTL is recognized through our Project Cargo Network (PCN) membership as a leader in heavy-lift and over-dimensional cargo (ODC) logistics in Bangladesh. From moving 343-ton gas turbines and 233-ton generators to delivering mammoth deaerator and stator assemblies, TTL provides turnkey route surveys, civil engineering modifications, hydraulic jacking onto foundations, and synchronized multi-modal road and river barge transport.",
    iconName: "ShieldAlert",
    heroImage: "/images/services/project-cargo.jpg",
    features: [
      "Route feasibility surveys and bridge structural load assessments",
      "Multi-axle hydraulic modular trailer transport for super-heavy cargo",
      "Shallow-draft river barge chartering for inland waterway transport",
      "Temporary jetty design, civil construction, and roll-on/roll-off (Ro-Ro) operations",
      "Hydraulic jacking, skidding, and precise positioning onto plant foundations",
      "Strict compliance with Health, Environment and Safety (HES) zero-incident protocols"
    ],
    capabilities: [
      "Proven execution of 600-ton capacity temporary river jetties",
      "Certified university engineering load testing before transport",
      "Coordination with government authorities, traffic police, and power grid operators",
      "Turnkey handling of EPC equipment from mother vessel to site foundation"
    ],
    industriesServed: ["Thermal & Peaking Power Plants", "Renewable Energy Projects", "Bridges & Civil Infrastructure", "Heavy Manufacturing Mills"],
    operationalScope: "Nationwide riverine and highway corridors across Khulna, Mongla, Chittagong, Dhaka, and inland job sites.",
    relatedServiceIds: ["specialized-construction", "transportation", "customs-clearance"]
  },
  {
    id: "transportation",
    slug: "transportation",
    title: "Inland Road & River Transportation",
    shortDescription: "Synchronized road freight, specialized multi-axle trailers, and inland river barges connecting seaports directly to job sites.",
    fullDescription: "Transportation across Bangladesh requires mastery over both highway corridors and the extensive riverine network. Trans Team Ltd. provides integrated inland transport solutions combining heavy transport trailers, flatbeds, low-bed carriers, and river barges. Whether delivering standard shipping containers to factory gates or barging oversized components up the Bhairab river, we deliver safely and strictly on schedule.",
    iconName: "Truck",
    heroImage: "/images/services/transportation.jpg",
    features: [
      "Extensive fleet of prime movers, flatbeds, and low-bed trailers",
      "River barge transportation through national waterways from Mongla and Chittagong",
      "Trained drivers holding defensive driving certifications",
      "24/7 convoy monitoring and GPS tracking of high-value cargo",
      "Overnight transit scheduling to bypass highway congestion",
      "Synchronized transfer between marine barges and highway road transports"
    ],
    capabilities: [
      "Special permits and police escort for oversized vehicular movements",
      "Overhead electric cable and telephone line management along routes",
      "Roll-on / Roll-off barge ramps for continuous wheeled transport",
      "Zero-damage road preservation techniques during super-heavy transport"
    ],
    industriesServed: ["Industrial Manufacturers", "National Energy Authorities", "Oil & Gas Distribution", "Construction Contractors"],
    operationalScope: "All major districts of Bangladesh including Greater Dhaka, Chittagong, Khulna, Sylhet, and Northern districts.",
    relatedServiceIds: ["project-cargo", "specialized-construction", "sea-freight"]
  },
  {
    id: "import-export",
    slug: "import-export",
    title: "Export, Import & Indentation",
    shortDescription: "Facilitating international trade, commercial procurement representation, and regulatory compliance for global transactions.",
    fullDescription: "Trans Team Ltd., alongside sister concerns such as Exim Global Ltd. and JK Associates under the RMK Group banner, provides comprehensive import, export, and indentation services. We assist industrial manufacturers and commercial enterprises in sourcing essential raw materials, capital machinery, and specialized industrial equipment, while streamlining trade documentation, letters of credit (LC), and commercial compliance.",
    iconName: "Globe2",
    heroImage: "/images/services/import-export.jpg",
    features: [
      "Commercial indentation and supplier representation in Bangladesh",
      "Global procurement assistance for capital machinery and spare parts",
      "Letter of Credit (L/C) review and trade finance documentation support",
      "Complete export documentation for textiles, leather, and manufactured goods",
      "Strict adherence to international anti-bribery and fair trade guidelines",
      "Market intelligence and supplier verification across Asia, Europe, and Americas"
    ],
    capabilities: [
      "Cross-border contracts and trade representation",
      "Tax, VAT, and customs duty optimization guidance",
      "Quality pre-shipment inspection coordination",
      "Bonded and non-bonded import consignment handling"
    ],
    industriesServed: ["Textile Machinery", "Construction Materials", "Chemicals & Minerals", "Industrial Hardware"],
    operationalScope: "Connecting Bangladesh with key manufacturing hubs in China, India, Europe, Southeast Asia, and North America.",
    relatedServiceIds: ["customs-clearance", "sea-freight", "air-freight"]
  },
  {
    id: "specialized-construction",
    slug: "specialized-construction",
    title: "Specialized Civil Logistics & Site Engineering",
    shortDescription: "Civil engineering works supporting heavy logistics, including temporary river jetties, road reinforcements, and equipment foundations.",
    fullDescription: "Heavy-lift logistics often demands civil engineering interventions before equipment can reach its destination. Trans Team Ltd. provides specialized civil construction capabilities tailored for logistics execution. Our engineering team designs and builds high-capacity temporary river jetties along riverbanks, reinforces bridges and culverts, levels approach roads, and utilizes heavy hydraulic jacking systems to raise and position massive machinery onto plant foundations.",
    iconName: "HardHat",
    heroImage: "/images/services/specialized-construction.jpg",
    features: [
      "Engineering design & construction of temporary river jetties (up to 600T capacity)",
      "Structural load testing in collaboration with university engineering faculties",
      "Road widening, ramp construction, and culvert shoring along transport corridors",
      "Hydraulic jacking, skidding, and pedestal alignment onto equipment foundations",
      "Site leveling and civil soil stabilization at congested industrial plants",
      "Complete site rehabilitation and environmental restoration post-delivery"
    ],
    capabilities: [
      "In-house civil and mechanical engineering team",
      "ETABS and SAFE computer-aided structural design modeling",
      "Heavy hydraulic jacks capable of elevating 300+ ton components",
      "Proven project track record at Khulna 150MW Power Plant and related facilities"
    ],
    industriesServed: ["Power Plant EPC Contractors", "Substation Developers", "Heavy Industrial Plants", "Port Facilities"],
    operationalScope: "Riverbank embankments and plant sites across the river network and industrial economic zones of Bangladesh.",
    relatedServiceIds: ["project-cargo", "transportation"]
  },
  {
    id: "courier-express",
    slug: "courier-express",
    title: "Courier & Express Logistics",
    shortDescription: "Expedited door-to-door courier services for critical business documents, commercial samples, and priority parcels.",
    fullDescription: "Trans Team Ltd. provides reliable, fast-turnaround courier and express logistics services. Tailored for commercial exporters, engineering consultancies, and corporate clients, our express team guarantees timely collection, immediate air dispatch, and door-to-door delivery of crucial commercial documentation, shipping sample batches, and mission-critical spare parts.",
    iconName: "Send",
    heroImage: "/images/services/courier-express.jpg",
    features: [
      "Expedited door-to-door collection and delivery",
      "Urgent export sample dispatch for garment and manufacturing sectors",
      "Original shipping documents (Bill of Lading, LC papers) secure courier",
      "Online shipment tracking with proof of delivery (POD)",
      "Priority customs clearance for small package imports",
      "Dedicated corporate account management"
    ],
    capabilities: [
      "Daily airport collection and dispatch routes",
      "Secure tamper-evident document packaging",
      "Hand-carry on-board courier (OBC) options for high-priority documents"
    ],
    industriesServed: ["Garments & Apparel Buying Houses", "Banking & Financial Services", "Engineering EPCs", "Corporate Groups"],
    operationalScope: "Nationwide collection across Dhaka and Chittagong with express international delivery worldwide.",
    relatedServiceIds: ["air-freight", "customs-clearance"]
  }
];
