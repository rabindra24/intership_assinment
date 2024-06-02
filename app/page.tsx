import AdvantageSection from "@/components/AdvantageSection";
import CtaSection from "@/components/CtaSection";
import Customization from "@/components/Customization";
import Faqsection from "@/components/Faqsection";
import FeatureSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import LandingSection from "@/components/LandingSection";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import { data } from "@/constant";
import ContainerWrapper from "@/utils/ContainerWrapper";

export default function Home() {
  return (
    <ContainerWrapper>
      <Navbar />
      <LandingSection data={data.hero} />
      <FeatureSection />
      <AdvantageSection />
      <Customization />
      <Testimonials />
      <Faqsection />
      <CtaSection/>
      <Footer/>
    </ContainerWrapper>
  );
}
