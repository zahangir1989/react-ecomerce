import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero";
import PurposeSection from "../components/PurposeSection";
import BecomePartner from "../components/BecomePartner";
import AnotherSection from "../AnotherSection/AnotherSection";
import AnotherSections2 from "../AnotherSections2/AnotherSections2";
import PricingSection from "../components/PricingSection";
import ServiceSection from "../components/ServiceSection";
import NewsletterSection from "../components/NewsletterSection";
import Footer from "../components/Footer/Footer";
import CompanyLogo from "../components/CompanyLogo";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CompanyLogo />
      <PurposeSection />
      <BecomePartner />
      <AnotherSection />
      <AnotherSections2 />
      <PricingSection />
      <ServiceSection />
      <NewsletterSection />
      <Footer />
    </>
  );
}

export default Home;
