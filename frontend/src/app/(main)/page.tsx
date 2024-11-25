import HeroSection from "@/components/main/HomePage/HeroSection";
import MainFeatureSection from "@/components/main/HomePage/MainFeatureSection/MainFeatureSection";
import OurAdvantagesSection from "@/components/main/HomePage/OurAdvantagesSection";

const HomePage = () => {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <OurAdvantagesSection />
      <MainFeatureSection />
      <div className="size-96 border-8 m-64"></div>
    </main>
  );
};

export default HomePage;
