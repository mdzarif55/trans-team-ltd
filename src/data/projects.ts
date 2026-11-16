import { ProjectItem } from "@/types";

export const projectsData: ProjectItem[] = [
  {
    id: "khulna-150mw-peaking-power-plant",
    slug: "khulna-150mw-peaking-power-plant",
    title: "Khulna 150MW Peaking Power Plant Logistics",
    category: "power",
    status: "accomplished",
    client: "North-West Power Generation Company Limited (NWPGCL) / Isolux Ingenieria SA & Initec Energia SA JV",
    location: "Goalpara, Khulna, Bangladesh",
    timeline: "Completed On Schedule",
    scope: "Over 20,000 m³ heavy equipment, 343-ton gas turbine, 233-ton generator, temporary 600T jetty construction, and hydraulic foundation positioning.",
    description: "A monumental multi-modal project cargo operation delivering over 20,000 cubic meters of heavy power generation equipment to Goalpara, Khulna. Facing narrow congested corridors and an active petroleum depot route, TTL engineered an upriver barge transit along the Bhairab river, constructed a custom 600-ton temporary jetty, and executed precision hydraulic jacking onto foundation pedestals within a strict 36-hour weekend window without injury or road damage.",
    details: [
      "Engineered river barge navigation from Mongla to Harboria and up the Bhairab river",
      "Designed and constructed a 600-ton capacity temporary heavy-duty river jetty",
      "Structural load testing conducted in collaboration with Khulna University of Engineering and Technology (KUET)",
      "Strict 36-hour weekend transport window coordinated with Padma Oil Company depot operations",
      "Hydraulic jacking and skidding across a 2-meter grade elevation onto plant foundation pedestals",
      "Zero incident, zero structural damage, completed safely within project schedule"
    ],
    image: "/images/projects/power-plant-heavy.jpg",
    gallery: [
      "/images/projects/power-plant-heavy.jpg",
      "/images/projects/power-generation.jpg",
      "/images/projects/barge-shipping.jpg"
    ],
    highlights: ["20,000 m³ Total Cargo", "343T Gas Turbine", "233T Generator", "600T Jetty Built", "Zero Injury Record"],
    isFeatured: true
  },
  {
    id: "over-dimensional-cargo-power-station",
    slug: "over-dimensional-cargo-power-station",
    title: "Over-Dimensional Power Station Heavy Cargo",
    category: "heavy-lift",
    status: "accomplished",
    client: "Project Cargo Network (PCN) International Partner",
    location: "Chittagong Port to Inland Power Job Site",
    timeline: "Accomplished",
    scope: "Multi-modal receipt and inland road/river transit of critical power station assemblies including steam drum, deaerator, and stator.",
    description: "As the accredited PCN member in Bangladesh, TTL was contracted to receive over-dimensional and super-heavy cargo assemblies at the seaport. Our operations team orchestrated customized barge lighterage, route cable-lifting, and heavy modular trailer haulage to deliver the heavy drum, deaerator, and stator assembly directly to the site foundation.",
    details: [
      "Seaport vessel discharge coordination with heavy-lift ship cranes",
      "Barge lighterage through coastal and river waterways",
      "Route engineering assessing bridges, culverts, and overhead utility lines",
      "Multi-axle hydraulic platform trailers ensuring balanced weight distribution"
    ],
    image: "/images/projects/over-dimensional.jpg",
    gallery: [
      "/images/projects/over-dimensional.jpg",
      "/images/projects/power-plant-heavy.jpg",
      "/images/projects/barge-shipping.jpg"
    ],
    highlights: ["Stator Assembly", "Steam Drum", "Deaerator Unit", "Multi-modal River & Road"],
    isFeatured: true
  },
  {
    id: "international-tournament-logistics",
    slug: "international-tournament-logistics",
    title: "International Sporting Tournament Freight & Logistics",
    category: "freight",
    status: "accomplished",
    client: "International Sports Federation / CUNIEX Express Logistics",
    location: "Dhaka & International Venues",
    timeline: "Accomplished",
    scope: "Comprehensive freight, customs clearance, and round-the-clock equipment dispatch for 20 international participating teams.",
    description: "Trans Team Ltd. orchestrated complete freight handling, rapid customs clearance, and logistical operations for 20 international teams participating in a premier sports tournament. Fulfilling strict international guidelines, our team provided air charter dispatch, secure bonded handling, and immediate stadium venue deliveries.",
    details: [
      "Simultaneous air cargo clearance for 20 national squads",
      "Expedited airport tarmac release and dedicated customs protocols",
      "Climate-controlled and secure storage of sensitive technical sports equipment",
      "Flawless on-time delivery across multiple match venues"
    ],
    image: "/images/projects/sports-tournament.jpg",
    gallery: [
      "/images/projects/sports-tournament.jpg",
      "/images/services/air-freight.jpg"
    ],
    highlights: ["20 National Teams", "Time-Critical Air Freight", "Zero Delay Dispatch"],
    isFeatured: true
  },
  {
    id: "power-generation-inland-equipment-transit",
    slug: "power-generation-inland-equipment-transit",
    title: "Thermal & Peaking Power Generation Fleet Logistics",
    category: "power",
    status: "ongoing",
    client: "Energy Sector EPC Partners",
    location: "Chittagong Port – Meghnaghat – Khulna Corridors",
    timeline: "Currently Active",
    scope: "Ongoing receipt, customs brokerage, and specialized transport of replacement turbines, transformers, and high-pressure steam piping.",
    description: "Active logistical contract supporting ongoing power generation facilities in Bangladesh. TTL manages recurring consignments of heavy electrical transformers, sub-station switchgear, and turbine spare components, providing port customs clearance, secured trailer transport, and river barging.",
    details: [
      "Continuous customs clearance at Chittagong Seaport and Dhaka Airport",
      "GPS-monitored convoy transport for high-voltage transformers",
      "Coordination with Bangladesh Power Development Board (BPDB) engineering teams",
      "Regular environmental and safety compliance audits under HES policy"
    ],
    image: "/images/projects/power-generation.jpg",
    gallery: [
      "/images/projects/power-generation.jpg",
      "/images/projects/power-plant-heavy.jpg"
    ],
    highlights: ["Active Ongoing Contract", "Transformers & Switchgear", "Nationwide Energy Network"],
    isFeatured: true
  },
  {
    id: "industrial-infrastructure-multimodal-logistics",
    slug: "industrial-infrastructure-multimodal-logistics",
    title: "Industrial Manufacturing & Mill Infrastructure Transport",
    category: "infrastructure",
    status: "ongoing",
    client: "Major Manufacturing Groups",
    location: "Dhaka, Gazipur, Narayanganj & Chittagong",
    timeline: "Ongoing",
    scope: "End-to-end ocean forwarding, port customs clearance, and heavy machinery transport for industrial textile, cement, and steel manufacturing plants.",
    description: "Providing seamless supply chain operations for major manufacturing installations. TTL provides container drayage, flat-rack oversized machinery transport, and on-site positioning for industrial rolling mills, fabrication units, and textile production lines.",
    details: [
      "FCL and flat-rack container customs clearance at Chittagong Port",
      "Scheduled factory delivery avoiding urban traffic curfews",
      "Handling of oversized industrial presses, boilers, and weaving machinery",
      "Experienced on-site rigging and crane positioning teams"
    ],
    image: "/images/projects/industrial-infra.jpg",
    gallery: [
      "/images/projects/industrial-infra.jpg",
      "/images/services/transportation.jpg"
    ],
    highlights: ["Heavy Industrial Machinery", "Container Drayage", "Plant Foundation Placement"],
    isFeatured: false
  },
  {
    id: "coastal-riverine-barge-operations",
    slug: "coastal-riverine-barge-operations",
    title: "Coastal Riverine Barge Transshipment",
    category: "infrastructure",
    status: "accomplished",
    client: "Port & Marine Industrial Clients",
    location: "Mongla – Bhairab River – Inland Depots",
    timeline: "Accomplished",
    scope: "Heavy bulk and project machinery transport via chartered shallow-draft barges through Bangladesh's southern delta waterways.",
    description: "Leveraging Bangladesh's natural waterway network, TTL engineered dedicated barge transshipment corridors bypassing highway bridge load restrictions. Our marine logistics division arranged shallow-draft flat-deck barges with Ro-Ro ramps for super-heavy cargo.",
    details: [
      "Hydrographic sounding and tidal window analysis",
      "Tugboat and flat-top deck barge fleet coordination",
      "Roll-on/roll-off embarkation and discharge engineering",
      "Complete riverine navigational safety protocols"
    ],
    image: "/images/projects/barge-shipping.jpg",
    gallery: [
      "/images/projects/barge-shipping.jpg",
      "/images/services/sea-freight.jpg"
    ],
    highlights: ["Riverine Delta Navigation", "Ro-Ro Barge Ramps", "Zero Road Congestion"],
    isFeatured: false
  }
];
