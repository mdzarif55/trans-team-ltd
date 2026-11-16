export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  heroImage: string;
  features: string[];
  capabilities: string[];
  industriesServed: string[];
  operationalScope: string;
  relatedServiceIds: string[];
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: 'power' | 'infrastructure' | 'freight' | 'heavy-lift' | 'industrial';
  status: 'ongoing' | 'accomplished';
  client?: string;
  location: string;
  timeline?: string;
  scope: string;
  description: string;
  details: string[];
  image: string;
  gallery?: string[];
  highlights?: string[];
  isFeatured?: boolean;
}

export interface CaseStudyItem {
  id: string;
  slug: string;
  title: string;
  client: string;
  location: string;
  category: string;
  overview: string;
  challenge: string;
  solution: string;
  execution: string[];
  results: string[];
  image: string;
  stats?: { label: string; value: string }[];
}

export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  department: 'Leadership' | 'Management' | 'Operations' | 'Regional';
  phone?: string;
  email?: string;
  image: string;
  quote?: string;
  bio?: string;
}

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string[];
  image: string;
  source?: string;
  sourceUrl?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Heavy Transport' | 'Port & Marine' | 'Air Freight' | 'Warehousing' | 'Operations';
  image: string;
  caption: string;
}

export interface SisterConcern {
  id: string;
  name: string;
  sector: string;
  role: string;
  description: string;
  website?: string;
  isParent?: boolean;
  services: string[];
}

export interface CorporatePolicy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  fullText: string[];
  keyPoints: string[];
  image?: string;
}
