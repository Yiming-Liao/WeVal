import HeroSection from "@/components/MainLayout/HomePage/HeroSection";
import MainFeatureSection from "@/components/MainLayout/HomePage/MainFeatureSection/MainFeatureSection";
import OurAdvantagesSection from "@/components/MainLayout/HomePage/OurAdvantagesSection";

const CreateOrderPage = () => {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <OurAdvantagesSection />
      <MainFeatureSection />
      <div className="size-96 border-8 m-64"></div>
    </main>
  );
};

export default CreateOrderPage;
