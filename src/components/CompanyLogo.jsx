import React from "react";

import amazon from "/amazon.png";
import img1 from "/img1.png";
import meundies from "/meundies.png";
import sitepoint from "/sitepoint.png";
import slack from "/slack.png";

const CompanyLogo = () => {
  const logos = [amazon, img1, meundies, sitepoint, slack,amazon, img1, meundies, sitepoint, slack];
  return (
    <section className="w-full container mx-auto py-20 overflow-hidden flex flex-col items-start sm:items-center sm:flex-row">
      <div className="w-[300px] text-2xl font-bold shrink-0 px-8 text-gray-800 border-blue-600 bg-blue-200 rounded-l-md py-2 z-10 sm:text-base sm:text-left mb-8 sm:mb-0">
        our partner at <br /> Hubspot & segment
      </div>
      {/* right */}
      <div className="flex animate-marquee whitespace-nowrap">
        {logos.map((logo, index) => (
          <img className="mx-12 w-36 h-8 object-contain transition-all grayscale hover:grayscale-0 opacity-70 hover:opacity-100" src={logo} alt="" key={index} />
        ))}
        
      </div>
    </section>
  );
};

export default CompanyLogo;
