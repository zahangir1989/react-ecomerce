import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import CompanyLogo from "./components/CompanyLogo";
import "./App.css"
import PurposeSection from "./components/PurposeSection";
import BecomePartner from "./components/BecomePartner";
import AnotherSection from "./AnotherSection/AnotherSection";
import AnotherSections2 from "./AnotherSections2/AnotherSections2";
import PricingSection from "./components/PricingSection";
import ServiceSection from "./components/ServiceSection";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <CompanyLogo/>
      <PurposeSection/>
      <BecomePartner/>
      <AnotherSection/>
      <AnotherSections2/>
      <PricingSection/>
      <ServiceSection/>
      <Footer/>
    </>
  );
}
