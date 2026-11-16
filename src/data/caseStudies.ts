import { CaseStudyItem } from "@/types";

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: "khulna-150mw-peaking-power-plant",
    slug: "khulna-150mw-peaking-power-plant",
    title: "Building the Khulna 150MW Peaking Power Plant",
    client: "North-West Power Generation Company Limited (NWPGCL) / Isolux Ingenieria SA & Initec Energia SA JV",
    location: "Goalpara, Khulna, Bangladesh",
    category: "Power Plant Heavy Lift & Multi-Modal Engineering",
    overview: "Twenty-thousand cubic meters of cargo had to be delivered and installed in a crowded neighborhood of Goalpara, Khulna. The project site was accessible only via a narrow one-way road, which was littered with buildings and shops, enmeshed with overhead wires and cables, and continually congested with trucks and lorries. All in all, building the Khulna 150MW Peaking Power Plant was no small feat, and yet, hardly an unfamiliar one for Trans Team Ltd. (TTL).",
    challenge: "This plant is a project by the North-West Power Generation Company Limited (NWPGCL), a subsidiary of the Bangladesh Power Development Board (BPDB). Two companies from Spain, Isolux Ingenieria SA and Initec Energia SA, JV, were contracted for design, construction, and equipment on a Turnkey/EPC understanding. These two companies chose TTL for cargo clearance, inland transportation, and delivering the equipment to the plant foundation.\n\nThe project site surrounding area was not just continually busy with local commerce — the access road TTL had to use was the exact same corridor for Padma Oil Company's primary petroleum depot. This is a critical national location, as all petroleum products supplied to Southwest and North Bengal originate from this very depot. It was imperative that bringing massive cargo and building this power plant did not disturb or disrupt the movement of petroleum.",
    solution: "With these operational constraints in mind, it made the most sense to skip conventional road discharge and transport everything upriver, from Mongla to Harboria. All the heavy gear traveled by specialized river barge up the Bhairab river, direct to an embankment location 800 meters from the project site.\n\nPursuing this innovative riverine option meant that TTL civil engineers had to design and construct a temporary heavy-duty jetty along the river embankment. This jetty was engineered with a maximum capacity of 600 tons, accommodating the heaviest components: a 343-ton gas turbine and a 233-ton electric generator. Engineering faculty and students from Khulna University of Engineering and Technology (KUET) were brought in to conduct rigorous structural load tests on the jetty's capacity before the cargo arrived.",
    execution: [
      "River Barging: Barged 20,000 m³ of power plant components up the Bhairab river from Mongla to Harboria.",
      "600T Temporary Jetty: Civil engineered a 600-ton capacity temporary river jetty along the embankment 800 meters from site.",
      "KUET University Load Testing: Conducted empirical capacity testing with engineering experts before offloading.",
      "36-Hour Weekend Window: Moved all heavy cargo across the access road within a strict 36-hour weekend window during petroleum tanker recess.",
      "Road Surface Protection: Engineered multi-axle modular trailers with distributed ground pressure to prevent any damage to municipal road surfaces.",
      "Pedestal Elevation: Utilized specialized hydraulic jacking systems to raise the 343T gas turbine and 233T generator 2 meters up to foundation pedestals."
    ],
    results: [
      "Building the jetty, transferring cargo to the site, and installing onto foundations required the synchronized cooperation of Padma Oil Company, government officials, and the local community.",
      "TTL successfully negotiated and managed all three stakeholder fronts with zero community friction.",
      "Successfully completed the entire 20,000 m³ delivery without causing any structural damage to roads or neighborhood utilities.",
      "Despite extreme physical constraints and narrow time limits, the Khulna Power Plant was delivered on schedule, within budget, and with an impeccable zero-injury safety record."
    ],
    image: "/images/projects/power-plant-heavy.jpg",
    stats: [
      { label: "Total Cargo Volume", value: "20,000 m³" },
      { label: "Gas Turbine Unit Weight", value: "343 Tons" },
      { label: "Generator Unit Weight", value: "233 Tons" },
      { label: "Temporary Jetty Capacity", value: "600 Tons" },
      { label: "Critical Execution Window", value: "36 Hours" },
      { label: "Safety Record", value: "Zero Injury" }
    ]
  },
  {
    id: "over-dimensional-power-station-assemblies",
    slug: "over-dimensional-power-station-assemblies",
    title: "Over-Dimensional Heavy Cargo Transit for National Power Station",
    client: "International EPC Contractor / Project Cargo Network (PCN)",
    location: "Chittagong Port to Inland Power Station, Bangladesh",
    category: "Over-Dimensional Cargo (ODC) & Inland River Transportation",
    overview: "PCN members in Bangladesh, Trans Team Ltd. (TTL) were contracted to receive over-dimensional and heavy cargo consisting of a boiler drum, deaerator, and stator assembly, and arrange complex inland transportation by road and river to complete delivery to the power station job site.",
    challenge: "The stator assembly and steam drum represented over-dimensional units with high center-of-gravity and dimensions exceeding standard highway overhead bridge clearances. Direct long-distance road transport would require dismantling numerous highway toll structures and crossing aging bridges with questionable load capacity.",
    solution: "TTL engineered an integrated multi-modal solution: ocean vessel direct discharge into heavy-lift river barges at Chittagong anchorage, coastal and inland waterway barging to the nearest river discharge point, followed by short-haul multi-axle hydraulic platform trailers equipped with height-adjustable suspension.",
    execution: [
      "Discharge from ocean carrier using floating cranes and ship tackle under direct TTL port supervision.",
      "Secured sea fastening and draft clearance calculations for river transit.",
      "Comprehensive route sweep along the final 22-kilometer road corridor, temporarily elevating low-hanging cables.",
      "Deployment of hydraulic modular trailers with electronic steering to negotiate sharp turns and narrow bridge approaches."
    ],
    results: [
      "Delivered all over-dimensional units directly to the foundation contractor on schedule.",
      "Zero road or bridge damage, zero utility downtime along the transit route.",
      "Commended by Project Cargo Network (PCN) global headquarters as a model heavy-lift execution in South Asia."
    ],
    image: "/images/projects/over-dimensional.jpg",
    stats: [
      { label: "Equipment Handled", value: "Drum, Stator, Deaerator" },
      { label: "Transit Mode", value: "Multi-Modal (River & Road)" },
      { label: "Network", value: "PCN Certified" },
      { label: "Corridor Safety", value: "100% Incident-Free" }
    ]
  }
];
