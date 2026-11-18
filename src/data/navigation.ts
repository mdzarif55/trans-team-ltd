export interface NavItem {
  title: string;
  href: string;
  description?: string;
  children?: {
    title: string;
    href: string;
    description?: string;
  }[];
}

export const mainNavigation: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about",
    children: [
      {
        title: "Company Profile",
        href: "/about",
        description: "Overview of TTL, our history, credentials, and capabilities."
      },
      {
        title: "Our History",
        href: "/history",
        description: "18-year legacy of engineering and transportation excellence."
      },
      {
        title: "Our Team",
        href: "/team",
        description: "Experienced executive board, operations managers, and freight specialists."
      },
      {
        title: "Vision & Mission",
        href: "/about#vision-mission",
        description: "Our strategic outlook and core values driving customer success."
      },
      {
        title: "Corporate Policies",
        href: "/policies",
        description: "Health & Safety (HES), ISO 9001, CSR, and Business Ethics."
      }
    ]
  },
  {
    title: "Services",
    href: "/services",
    children: [
      {
        title: "Air Freight Forwarding",
        href: "/services/air-freight",
        description: "Time-critical international air shipping and chartering."
      },
      {
        title: "Ocean / Sea Freight",
        href: "/services/sea-freight",
        description: "FCL and LCL container logistics across major international routes."
      },
      {
        title: "Customs Clearance & Brokerage",
        href: "/services/customs-clearance",
        description: "Fast-track customs handling in Dhaka Airport and Chittagong Seaport."
      },
      {
        title: "Project Cargo & Heavy Lift",
        href: "/services/project-cargo",
        description: "Turnkey multi-modal transport for power plants and heavy equipment."
      },
      {
        title: "Inland Road & River Transport",
        href: "/services/transportation",
        description: "Barge navigation, multi-axle trailers, and nationwide haulage."
      },
      {
        title: "Export, Import & Indentation",
        href: "/services/import-export",
        description: "Comprehensive trade compliance and procurement indentation."
      },
      {
        title: "Specialized Civil Logistics",
        href: "/services/specialized-construction",
        description: "Temporary jetty engineering, site ramps, and pedestal positioning."
      },
      {
        title: "Courier & Express Services",
        href: "/services/courier-express",
        description: "Door-to-door expedited document and package logistics."
      }
    ]
  },
  {
    title: "Projects",
    href: "/projects",
    children: [
      {
        title: "All Projects",
        href: "/projects",
        description: "Comprehensive portfolio of industrial logistics operations."
      },
      {
        title: "Ongoing Projects",
        href: "/projects/ongoing",
        description: "Currently active multi-modal freight and infrastructure tasks."
      },
      {
        title: "Accomplished Projects",
        href: "/projects/accomplished",
        description: "Successfully executed national-scale heavy-lift deliveries."
      },
      {
        title: "Case Studies",
        href: "/case-studies",
        description: "Detailed technical case reports like the Khulna 150MW Power Plant."
      }
    ]
  },
  {
    title: "Gallery",
    href: "/gallery"
  },
  {
    title: "Our Concerns",
    href: "/concerns"
  },
  {
    title: "Contact",
    href: "/contact"
  }
];

export const footerQuickLinks = [
  { title: "Company Profile", href: "/about" },
  { title: "Our History", href: "/history" },
  { title: "Leadership Team", href: "/team" },
  { title: "Project Case Studies", href: "/case-studies" },
  { title: "Photo Gallery", href: "/gallery" },
  { title: "Corporate Policies", href: "/policies" },
  { title: "Sister Concerns", href: "/concerns" },
  { title: "Privacy Policy", href: "/privacy-policy" }
];
