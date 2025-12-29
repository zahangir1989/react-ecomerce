import { StickerIcon } from "lucide-react";
import React from "react";
import image from "/monitor-card.png";

const AnotherSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-1">
        {/* Left Contaniner */}
        <div className="w-full  md:w-1/2">
          <img src={image} alt="" />
        </div>
        {/* Right side */}
        <div className="w-full md:w-1/2">
        <span className="text-xl font-medium ">I Am Zahangir Alam</span>
          <div className="flex items-center gap-2 bg-blue-300 w-fit px-4 py-2 rounded-full hover:bg-orange-300 transition-colors cursor-pointer group">
          </div>

          <h1 className="text-4xl pt-8 lg:text-6xl font-bold leading-tight">
            <span className="text-blue-400 text-8xl">Lorem</span> ipsum{" "}
            <span className="">dolor sit amet Sunt, ab.</span>
          </h1>
          <p className="text-gray-600 text-2xl mt-8 max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            optio sed vitae consectetur tempora provident molestiae rerum!
            Reprehenderit, magni laudantium.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 mt-10 rounded-xl hover:bg-blue-700 cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-100 active:scale-95">
            More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AnotherSection;
