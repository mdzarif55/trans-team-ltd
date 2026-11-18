# Trans Team Ltd. (TTL) — Official Corporate Website

[![Live Deployment](https://img.shields.io/badge/Live%20Demo-trans--team--ltd.vercel.app-F28C28?style=for-the-badge&logo=vercel)](https://trans-team-ltd.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-14.2-000000?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

A modern, high-performance international corporate logistics and freight-forwarding website engineered for **Trans Team Ltd. (TTL)**, an esteemed sister concern of the **RMK Group** in Bangladesh.

---

## 🌐 Live Website

- **Production URL:** [https://trans-team-ltd.vercel.app](https://trans-team-ltd.vercel.app)
- **Original Reference:** [https://ttlrmk.com](https://ttlrmk.com)

---

## 🏢 About Trans Team Ltd. (TTL)

Established in **2005**, Trans Team Ltd. (TTL) brings over **18 years** of specialized logistics management, international freight forwarding, and project cargo engineering to corporate enterprises in Bangladesh and worldwide.

- **Corporate Lineage:** Sister concern of the **RMK Group** (comprising 8 interconnected corporate concerns).
- **Core Hubs:** Dual operations anchored at **Dhaka Corporate Head Office (Uttara)** and **Chittagong Port Regional Office (Agrabad C/A)**.
- **Accreditations & Certifications:**
  - **BAFFA** (Bangladesh Apparel & Freight Forwarders Association)
  - **FIATA** (International Federation of Freight Forwarders Associations)
  - **IATA** (International Air Transport Association)
  - **PCN** (Project Cargo Network — Heavy-Lift Representation in Bangladesh)
  - **ISO 9001:2008** Certified Quality Management System

---

## ✨ Key Features & Highlights

### 1. Cinematic Hero Section
- **Dynamic Background Video:** Features real-world logistics video (`public/videos/hero-background.mp4`) with smooth autoplay, looping, and permanent muting for optimal mobile/desktop playback.
- **Cinematic Readability Overlays:** Multi-layered gradient overlays guarantee high-contrast legibility for headings and action buttons.
- **Clear Value Proposition:** Clear headline, supporting copy, and direct CTAs (*"Explore Our Services"* & *"Contact Our Team"*).
- **Floating Trust Bar:** Bottom highlight strip displaying TTL's 18+ years of industry leadership, ISO 9001:2008 & FIATA certifications, and PCN Heavy-Lift membership.

### 2. Dual-State Intelligent Navigation (`Navbar`)
- **Hero-Aware Contrast:** Displays semi-translucent dark navy backdrop with crisp white typography and a white-text official logo when positioned over the video hero.
- **Scrolled Transition (>25px):** Transitions smoothly into a clean white backdrop (`bg-white/95`) with deep navy text, shadow, and deep navy official branding.
- **High-DPI Official Branding:** Rendered from the official company emblem with 7-striped chevron and stencil lettering at 1040×192px (`logo-main.png` and `logo-main-white.png`).
- **Interactive Multi-Level Dropdowns:** Working dropdowns with hover bridges for **About Us**, **Services**, and **Projects**.
- **Top Information Bar:** Dhaka and Chittagong phone links, office email, working hours (Sat–Thu, 9 AM–6 PM), and certification badges.
- **Mobile Responsive Drawer:** Slide-over navigation drawer with accordion submenus and direct contact actions.

### 3. Full Multi-Page App Router Architecture
Every required section is implemented as a dedicated, fully responsive route:

| Route | Page Name | Description |
|---|---|---|
| `/` | **Home** | Video hero, corporate overview, core services grid, why choose us, vision/mission, featured projects, policies, sister concerns, and contact CTA. |
| `/about` | **About Us** | Complete corporate profile, mission, vision, values, and RMK Group background. |
| `/history` | **Our History** | Interactive chronological timeline spanning 2005 to present day. |
| `/team` | **Management Team** | Board of directors, chairman, managing director, and department staff profiles. |
| `/services` | **All Services** | Grid of 8 core logistics capabilities with direct deep-dive links. |
| `/services/[slug]` | **Service Detail** | Dedicated sub-pages for Air Freight, Ocean Freight, Customs Brokerage, Project Cargo, Inland Transportation, Import & Export, Courier Express, and Construction. |
| `/projects` | **Project Portfolio** | Searchable project hub filtering ongoing, accomplished, and mega EPC power projects. |
| `/projects/ongoing` | **Ongoing Projects** | Dedicated listing of active logistics contracts and infrastructure works. |
| `/projects/accomplished` | **Accomplished Projects** | Portfolio of successfully commissioned logistics operations. |
| `/projects/[slug]` | **Project Case File** | Deep-dive technical sheets detailing tonnage, route, client, and scope of work. |
| `/case-studies` | **Case Studies** | In-depth engineering studies, including the **Khulna 150MW Power Plant** logistics (343T turbine, 233T generator, 600T temporary river jetty). |
| `/gallery` | **Operations Gallery** | High-resolution photography of ground handling, barging, lifting, and aircraft cargo. |
| `/concerns` | **Our Concerns** | Directory of the 8 sister concerns operating under the RMK Group umbrella. |
| `/policies` | **Corporate Policies** | Health, Safety & Environment (HSE), Quality Management, CSR, and Business Ethics. |
| `/contact` | **Contact & RFQ** | Multi-field freight quotation form with validation, office addresses, and direct phone lines. |
| `/privacy-policy` | **Privacy Policy** | Corporate compliance and privacy standards. |

### 4. High-Resolution Visual Assets
- Replaced outdated legacy thumbnails with curated **1600px–2000px high-resolution logistics photography**.
- Responsive Next.js `<Image />` optimization with automatic WebP/AVIF generation, blur placeholders, and exact srcset breakpoints.

### 5. Technical SEO & Accessibility
- **Semantic HTML5:** Native landmark tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<h1>`–`<h3>`).
- **OpenGraph & Twitter Cards:** Rich social preview tags pointing to high-resolution branding.
- **Dynamic XML Sitemap:** Automatically generated at `/sitemap.xml` indexing all 42 static and dynamic routes.
- **Robots Configuration:** Programmed `/robots.txt` allowing indexing across all search engines.
- **JSON-LD Structured Data:** Schema.org `LogisticsService` schema declaring corporate entity, parent group, addresses, and accreditations.

---

## 🛠️ Technology Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router, React Server Components)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Forms & Validation:** React Hook Form + Zod
- **Typography:** Manrope / Plus Jakarta Sans (Headings) + Inter (Body)
- **Deployment & Hosting:** [Vercel](https://vercel.com/)

---

## 📁 Project Architecture

```
trans-team-ltd/
├── public/
│   ├── images/
│   │   ├── accreditations/       # BAFFA, FIATA, IATA, ISO badges
│   │   ├── hero/                 # High-res hero banners
│   │   ├── services/             # Air, Ocean, Customs, Project cargo imagery
│   │   ├── projects/             # Heavy-lift and power plant photography
│   │   ├── gallery/              # Ground operations photo library
│   │   └── why-choose-us/        # Policy and quality photos
│   ├── logos/
│   │   ├── logo-main.png         # High-res navy brand logo (for light bg)
│   │   ├── logo-main-white.png   # High-res white brand logo (for dark bg)
│   │   ├── logo-main.jpg         # Original master raster logo
│   │   └── favicon.png           # Browser favicon
│   └── videos/
│       └── hero-background.mp4   # Looping cinematic hero video
│
├── src/
│   ├── app/                      # Next.js 14 App Router routes
│   │   ├── layout.tsx            # Global layout with Navbar & Footer
│   │   ├── page.tsx              # Homepage
│   │   ├── about/page.tsx        # About Us
│   │   ├── history/page.tsx      # Company History
│   │   ├── team/page.tsx         # Management & Staff
│   │   ├── services/             # Service catalog & [slug] dynamic pages
│   │   ├── projects/             # Projects, ongoing, accomplished & [slug]
│   │   ├── case-studies/         # Case studies & technical write-ups
│   │   ├── gallery/page.tsx      # Image Gallery
│   │   ├── concerns/page.tsx     # RMK Group sister concerns
│   │   ├── contact/page.tsx      # Interactive RFQ & Contact page
│   │   ├── policies/page.tsx     # Corporate Policies
│   │   ├── privacy-policy/page.tsx
│   │   ├── sitemap.ts            # Dynamic XML sitemap generator
│   │   └── robots.ts             # Robots.txt configuration
│   │
│   ├── components/
│   │   ├── layout/               # Navbar, Footer, MobileMenu, PageHeader
│   │   ├── home/                 # HeroSlider, CompanyIntro, ServicesGrid, etc.
│   │   └── shared/               # SectionHeading, Breadcrumb, buttons
│   │
│   └── data/                     # Verified corporate data from ttlrmk.com
│       ├── company.ts            # Authentic contacts, stats, and leadership
│       ├── navigation.ts         # Global navigation tree and dropdowns
│       ├── services.ts           # Service specifications and capabilities
│       ├── projects.ts           # Project catalog and specifications
│       ├── caseStudies.ts        # In-depth Khulna Power Plant case studies
│       ├── team.ts               # Management board and staff details
│       ├── concerns.ts           # RMK Group 8 sister concerns
│       └── policies.ts           # HSE, Quality, CSR, and Business Conduct
│
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 How to Run Locally

### Prerequisites
Make sure you have **Node.js 18.17+** or **Node.js 20+** installed on your system.

```bash
node -v   # Should output v18.17.0 or higher
npm -v    # Should output 9.x or 10.x
```

### 1. Clone the Repository
```bash
git clone https://github.com/mdzarif55/trans-team-ltd.git
cd trans-team-ltd
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```

Open your browser and navigate to:
```
http://localhost:3000
```
The application will auto-reload with Hot Module Replacement (HMR) as you edit files in `src/`.

### 4. Build for Production
To create an optimized production build:
```bash
npm run build
```
This will pre-render all 42 static and dynamic routes.

### 5. Start the Production Server
```bash
npm run start
```
The optimized production application will be live at `http://localhost:3000`.

---

## 📞 Corporate Contact Information

* **Dhaka Corporate Head Office:**  
  House # 04 (3rd Floor), Road # 07, Sector # 01, Uttara, Dhaka-1230, Bangladesh  
  **Phone:** [+88 02 7912990](tel:+88027912990), [+88 02 7912959](tel:+88027912959)  
  **Email:** [info@ttlrmk.com](mailto:info@ttlrmk.com) | [amin@rmkfreight.com](mailto:amin@rmkfreight.com)

* **Chittagong Regional & Port Office:**  
  South Land Center (3rd Floor), 5 Agrabad C/A, Chittagong-4100, Bangladesh  
  **Phone:** [+88 031-2513481](tel:+880312513481), [+88 01835-876096](tel:+8801835876096)  
  **Email:** [ctg@rmkfreight.com](mailto:ctg@rmkfreight.com)

* **Operating Hours:**  
  Saturday – Thursday: 9:00 AM – 6:00 PM (BST)

---

## 📄 License & Credits
© 2005 – Present **Trans Team Ltd. (TTL)** & **RMK Group**. All rights reserved. Built with Next.js and Tailwind CSS.
