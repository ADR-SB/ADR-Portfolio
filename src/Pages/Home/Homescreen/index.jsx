import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import MyEducation from "../Education";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <AboutMe />
      <MyEducation/>
      <MyPortfolio />
      <ContactMe />
      <Footer />
    </>
  );
}
