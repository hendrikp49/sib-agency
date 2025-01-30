import AboutSection from "../layouts/AboutSection";
import AwwardsSection from "../layouts/AwwardsSection";
import Header from "../layouts/Header";
import HeroSection from "../layouts/HeroSection";
import WorkSection from "../layouts/WorkSection";

const HomePage = () => {
  return (
    <div className="text-[#030712] font-inter-tight">
      <Header />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <AwwardsSection />
    </div>
  );
};

export default HomePage;
