import AboutSection from "../layouts/AboutSection";
import AwwardsSection from "../layouts/AwwardsSection";
import ClientSection from "../layouts/ClientSection";
import ContactMeSection from "../layouts/ContactMeSection";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import HeroSection from "../layouts/HeroSection";
import InsightSection from "../layouts/InsightSection";
import TestimonialSection from "../layouts/TestimonialSection";
import WorkSection from "../layouts/WorkSection";

const HomePage = () => {
  return (
    <div className="text-[#030712] font-inter-tight">
      <Header />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <AwwardsSection />
      <ClientSection />
      <TestimonialSection />
      <InsightSection />
      <ContactMeSection />
      <Footer />
    </div>
  );
};

export default HomePage;
