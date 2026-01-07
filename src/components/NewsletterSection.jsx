import React from "react";

export default function NewsletterSection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-blue-600 rounded-2xl overflow-hidden">
        <div className="relative md:px-16 py-6 md:py-24">
          {/* Backgound Gradient */}
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-blue-700 hidden md:block"></div>
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Left Content */}
            <div className="text-white max-w-lg text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4">
                Subscribe Newsletter
              </h2>
              <p className="text-blue-100 text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
                officiis in obcaecati fugiat
              </p>
            </div>
            {/* Right Content */}
            <div className="w-full md:w-auto">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-0">
                <input type="email" placeholder="Enter your email Address"
                className="w-full sm:w-auto md:w-80 px-4 sm:px-6 py-3 sm:py-3 rounded-xl sm:rounded-l-xl sm:rounded-r-none  focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                />

                <button className="w-full sm:w-auto cursor-pointer bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-l-none sm:rounded-r-xl hover:bg-green-600 transition-colors flex items-center justify-center sm:justify-start gap-2">Send Now</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
