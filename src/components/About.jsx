import React from "react";
import Navbar from "./Navbar";

function About() {
  return (
    <>
    <Navbar/>
    <section className="pt-12">
      <div className="min-h-screen bg-gray-50 px-6 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              We build modern, scalable, and user-friendly web applications
              using the latest technologies.
            </p>
          </div>

          {/* Content Section */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Who We Are
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We are a passionate team of developers focused on creating
                high-quality digital experiences. Our mission is to deliver
                clean design, fast performance, and reliable solutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Using technologies like React, Vite, and Tailwind CSS, we build
                applications that are easy to use, responsive, and scalable.
              </p>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-500 rounded-2xl blur-2xl opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="Team"
                className="relative rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="bg-white rounded-xl shadow p-6 text-center">
              <h3 className="text-3xl font-bold text-indigo-600">5+</h3>
              <p className="text-gray-500 mt-2">Years Experience</p>
            </div>

            <div className="bg-white rounded-xl shadow p-6 text-center">
              <h3 className="text-3xl font-bold text-indigo-600">100+</h3>
              <p className="text-gray-500 mt-2">Projects</p>
            </div>

            <div className="bg-white rounded-xl shadow p-6 text-center">
              <h3 className="text-3xl font-bold text-indigo-600">50+</h3>
              <p className="text-gray-500 mt-2">Clients</p>
            </div>

            <div className="bg-white rounded-xl shadow p-6 text-center">
              <h3 className="text-3xl font-bold text-indigo-600">24/7</h3>
              <p className="text-gray-500 mt-2">Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default About;
