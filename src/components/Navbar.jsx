import { Heart, Menu, Search, ShoppingCart, UserRound, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("#home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#testimonials", label: "Blog" },
    { href: "#contract", label: "Contract" },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
      <div className="container w-full flex justify-between items-center mx-auto sm:px-6 lg:px-8 md:h-20 h-16 ">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 cursor-pointer">
              <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
              <div className="w-4 h-4 bg-red-500 rounded-full -ml-2 hover:opacity-75 transition-opacity"></div>
            </div>
            <h1 className="tex t-[20px] font-bold">Bandage</h1>
          </div>
          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((navLink, index) => (
              <Link
                to={navLink.href}
                key={index}
                onClick={() => setActiveLink(navLink.href)}
                className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${
                  activeLink === navLink.href
                    ? "text-blue-600 after:w-full"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {navLink.label}
              </Link>
            ))}
          </div>
        </div>
        {/* Mobile Button  start*/}

        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </button>

        {/* Mobile Button  end*/}
        <div className="hidden md:flex  items-center gap-5">
          <div className="flex items-center gap-2">
            <UserRound className="w-5 h-5 text-blue-600" />
            <h5 className="text-[15px] font-semibold text-blue-600">
              Login/Register
            </h5>
          </div>
          <div className="flex items-center gap-5">
            <Search className="w-5 h-5 text-blue-600" />
            <ShoppingCart className="w-5 h-5 text-blue-600" />
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="container mx-auto px-4 space-y-4 ">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                onClick={() => {
                  setActiveLink(link.href);
                  setIsMenuOpen(false);
                }}
                className={`block text-sm font-medium py-2 px-4 hover:bg-slate-100 ${
                  activeLink === link.href
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button className="w-full bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 font-medium">
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
