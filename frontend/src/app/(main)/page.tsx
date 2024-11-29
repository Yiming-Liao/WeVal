import BackgroundDecoration from "@/components/common/BackgroundDecoration";
import ContactUsSection from "@/components/main/HomePage/ContactUsSection";
import HeroSection from "@/components/main/HomePage/HeroSection";
import MainFeatureSection from "@/components/main/HomePage/MainFeatureSection/MainFeatureSection";
import NewsSection from "@/components/main/HomePage/NewsSection";
import OurAdvantagesSection from "@/components/main/HomePage/OurAdvantagesSection";
import QASection from "@/components/main/HomePage/QASection";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col">
        <HeroSection />
        <OurAdvantagesSection />
        <MainFeatureSection />
        <NewsSection />
        <QASection />
        <ContactUsSection />
      </div>

      {/* Layout background */}
      <BackgroundDecoration />
    </>
  );
};

export default HomePage;
