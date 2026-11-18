import HeroSlider from "@/components/home/HeroSlider";
import CompanyIntro from "@/components/home/CompanyIntro";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import VisionMission from "@/components/home/VisionMission";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import CorporatePoliciesSection from "@/components/home/CorporatePoliciesSection";
import ConcernsSection from "@/components/home/ConcernsSection";
import AccreditationsSection from "@/components/home/AccreditationsSection";
import ContactCTA from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      {/* Section 1: Hero */}
      <HeroSlider />

      {/* Section 2: Company Introduction */}
      <CompanyIntro />

      {/* Section 3: Our Services Grid */}
      <ServicesGrid />

      {/* Section 4: Why Choose Us */}
      <WhyChooseUs />

      {/* Section 5: Vision, Mission & Values */}
      {/* <VisionMission /> */}

      {/* Section 6: Featured Projects */}
      <FeaturedProjects />

      {/* Section 7: Corporate Policies */}
      {/* <CorporatePoliciesSection /> */}

      {/* Section 8: Our Concerns */}
      <ConcernsSection />

      {/* Section 10: Accreditations */}
      <AccreditationsSection />

      {/* Section 11: Contact CTA */}
      {/* <ContactCTA /> */}
    </>
  );
}
