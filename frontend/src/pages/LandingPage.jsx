import ClientList from "../components/ClientList";
import ContactForm from "../components/contactForm";
import Navbar from "../components/Navbar";
import Newsletter from "../components/NewsLetter";
import ProjectList from "../components/ProjectList";
import HeroSection from "../components/HeroSection";
import WhyChooseUs from "../components/WhyChooseUs";
import AboutUs from "../components/AboutUs";
import OurProjects from "../components/OurProjects";
import HappyClients from "../components/HappyClients";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WhyChooseUs/>
      <AboutUs/>
      <OurProjects/>
      <HappyClients/>
      <Footer/>
    </div>
  );
};

export default LandingPage;
