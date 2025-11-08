import Footer from "@/src/components/footer/footer";
import HeroSection from "@/src/components/heroSection/heroSection";
import HomePageCareerCTA from "@/src/components/homePageCareerCTA/homePageCareerCTA";
import HomePageFoundersNote from "@/src/components/homePageFoundersNote/homePageFoundersNote";
import HomePageHappyUsers from "@/src/components/homePageHappyUsers/homePageHappyUsers";
import HomePageMilestones from "@/src/components/homePageMilestones/homePageMilestones";
import HomePageOfferLetters from "@/src/components/homePageOfferLetters/homePageOfferLetters";
import HomePageResultStats from "@/src/components/homePageResultStats/homePageResultStats";
import HomePageSteps from "@/src/components/homePageSteps/homePageSteps";
import HomePageVideo from "@/src/components/homePageVideo/homePageVideo";
import HomePageWhyChooseFF from "@/src/components/homePageWhyChooseFF/homePageWhyChooseFF";
import Navbar from "@/src/components/navbar/navbar";

const FlashFireHome = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HomePageVideo />
      <HomePageResultStats />
      <HomePageMilestones />
      <HomePageSteps />
      <HomePageOfferLetters />
      <HomePageWhyChooseFF />
      <HomePageHappyUsers />
      <HomePageCareerCTA />
      <HomePageFoundersNote />
      <Footer />
    </>
  );
};

export default FlashFireHome;
