import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WorkWeHaveDone from "./components/WorkWeHaveDone";
import InteriorWork from "./components/InteriorWork";
import CommercialSection from "./components/CommercialSection";
import WhyChooseUs from "./components/WhyChooseUs";
import About from "./components/About";
import Reviews from "./components/Reviews";
import SocialFollow from "./components/SocialFollow";
import ServiceArea from "./components/ServiceArea";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StickyMobileCTA from "./components/StickyMobileCTA";
import ServicePage from "./pages/ServicePage";

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WorkWeHaveDone />
        <InteriorWork />
        <CommercialSection />
        <WhyChooseUs />
        <About />
        <Reviews />
        <SocialFollow />
        <ServiceArea />
        <Contact />
      </main>
      <Footer />
      <StickyMobileCTA />
      <div className="h-20 md:hidden" aria-hidden="true" />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/:slug" element={<ServicePage />} />
      </Routes>
    </BrowserRouter>
  );
}
