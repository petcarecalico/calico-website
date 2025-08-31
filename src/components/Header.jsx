"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../public/images/calico-logo.svg";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "features", label: "Features" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     let current = "hero";
  //     navItems.forEach(({ id }) => {
  //       const section = document.getElementById(id);
  //       if (
  //         section &&
  //         section.offsetTop - 120 <= scrollY &&
  //         section.offsetTop + section.offsetHeight > scrollY
  //       ) {
  //         current = id;
  //       }
  //     });
  //     setActiveSection(current);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

const handleNavClick = (e, id) => {
  e.preventDefault();
  const section = document.getElementById(id);
  const offset = 120; // navbar height
  const top = section.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({ top, behavior: "smooth" });
  setActiveSection(id); // 👈 make sure active nav updates
};



  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white">
      <div className="container mx-auto grid grid-cols-3 items-center px-[140px] py-[30px]">
        {/* Left: Logo */}
        <div className="flex items-center">
          <a href="#hero">
            <Image src={logo} alt="Calico Logo" width={124} height={38} />
          </a>
        </div>

        {/* Center: Nav Items */}
        <div className="flex justify-center gap-10">
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`flex flex-col justify-center h-[26px] text-center font-poppins text-[16px] font-medium leading-[45.8px] transition-colors
                ${activeSection === id
                  ? "text-[#00000080]" // Active color (green highlight)
                  : "text-black hover:text-[#00000080]"
                }`}
              onClick={(e) => handleNavClick(e, id)}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Right: Download Button */}
        <div className="flex justify-end">
          <button className="flex items-center justify-center gap-[12px] px-[12px] py-[8px] 
                     rounded-[12px] bg-[#76A013] shadow-[4px_4px_0px_0px_#000] 
                     text-white font-poppins text-[16px] font-medium 
                     hover:brightness-110 transition cursor-pointer">
            Download Calico APP
            <img src="/icons/dropdown-icon.svg" alt="down" />
          </button>
        </div>
      </div>
    </nav>
  );
}
