import Hero from "../components/Hero";
import About from "../components/About";
import ServiceProvider from "../components/ServiceProvider";
import OurServices from "../components/OurServices";
import KeyProgrammingTech from "../components/KeyProgrammingTech";
import TechStacks from "../components/TechStacks";
import TechStacksTwo from "../components/TechStacksTwo";
import MovingBars from "../components/MovingBars";
import Cta from "../components/Cta";
import WorkingProcess from "../components/WorkingProcess";
import BenifitOfCustomSassSoftware from "../components/BenifitOfCustomSassSoftware";
import Faq from "../components/Faq";
import RequestForQuotation from "../components/RequestForQuotation";
import PopularProducts from "../components/PopularProducts";
import FooterCta from "../components/FooterCta";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <ServiceProvider />
      <OurServices />
      <KeyProgrammingTech />
      <TechStacks />
      <TechStacksTwo />
      <MovingBars />
      <Cta />
      <WorkingProcess />
      <BenifitOfCustomSassSoftware />
      <Faq />
      <RequestForQuotation />
      <PopularProducts />
      <FooterCta />
      <Footer />
    </>
  );
}
