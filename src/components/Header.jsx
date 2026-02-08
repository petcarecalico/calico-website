"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/images/calico-logo.svg";
import DownloadModal from "./DownloadModal";
import menu from "../../public/icons/menu.svg";
import close from "../../public/icons/close.svg";
import PromoVideoCard from "./PromoVideoCard";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "features", label: "Features" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("hero");
  const [activeTab, setActiveTab] = useState("download");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    const offset = 120;
    const top = section.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
    setActiveSection(id);
    setIsMenuOpen(false); // close mobile menu on click
  };

  useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0); // true if scrolled
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        if (isModalOpen) setIsModalOpen(false);
        if (isMenuOpen) setIsMenuOpen(false);
      }
    };
    if (isModalOpen || isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [isModalOpen, isMenuOpen]);

  return (
    <section ref={navRef} className="relative z-50 w-full">
      {/* NAVBAR */}
      <nav   className={`fixed top-0 left-0 w-full bg-white z-50 transition-shadow duration-300 ${
    isScrolled ? "shadow-md" : ""
  }`}>
        <div
          className="
    w-full flex items-center justify-between 
    px-[20px] pt-[26px] pb-[20px]             /* mobile */
    md:container md:mx-auto md:px-[42px] md:py-[30px] /* tablet */
    lg:grid lg:grid-cols-3 lg:px-[140px] lg:py-[30px]  /* desktop */
  "
        >
          {/* Left: Logo */}
          <div className="flex items-center">
            <a href="#hero">
              <Image
                src={logo}
                alt="Calico Logo"
                width={124}
                height={38}
                className="w-[74px] h-[23px] lg:w-[124px] lg:h-[38px]"
              />

            </a>
          </div>

          {/* Center: Nav Items (hidden on tab & mobile) */}
          <div className="hidden lg:flex justify-center gap-10">
            {navItems.map(({ id, label }) => (
              label === "Download" ? (
                <button
                  key={id}
                  className={`font-poppins text-[16px] font-medium transition-colors ${activeSection === id
                    ? "text-[#00000080]"
                    : "text-black hover:text-[#00000080]"
                    }`}
                  onClick={e => {
                    e.preventDefault();
                    setIsModalOpen(true);
                  }}
                  style={{ background: "none", border: "none", padding: 0, margin: 0, cursor: "pointer" }}
                >
                  {label}
                </button>
              ) : (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`font-poppins text-[16px] font-medium transition-colors ${activeSection === id
                    ? "text-[#00000080]"
                    : "text-black hover:text-[#00000080]"
                    }`}
                  onClick={(e) => handleNavClick(e, id)}
                >
                  {label}
                </a>
              )
            ))}
          </div>

          {/* Right: Download Button (desktop) */}
          <div className="hidden lg:flex justify-end">
            <button
              onClick={() => setIsModalOpen((prev) => !prev)}
              className="flex items-center gap-[12px] px-[12px] py-[8px] rounded-[12px] 
                         bg-[#76A013] shadow-[4px_4px_0px_0px_#000] text-white font-poppins text-[16px] font-medium 
                         hover:brightness-110 transition"
            >
              Download Calico APP
              <motion.img
                src="/icons/dropdown-icon.svg"
                alt="down"
                animate={{ rotate: isModalOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>

          {/* Right: Hamburger (tablet + mobile) */}
          <div className="flex justify-end lg:hidden">
            <button onClick={() => setIsMenuOpen((prev) => !prev)} className="relative w-8 h-8">
              <AnimatePresence mode="wait" initial={false}>
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src={close}
                      alt="close"
                      width={26}
                      height={26}
                      className="w-[26px] h-[26px]"
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src={menu}
                      alt="menu"
                      width={26}
                      height={26}
                      className="w-[26px] h-[26px]"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

        </div>

        {/* DROPDOWN PANEL (desktop) */}
        <DownloadModal isOpen={isModalOpen} />

        {/* MOBILE MENU (animated) */}
        {/* MOBILE MENU (animated) */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 top-[78px] md:top-[90px] w-full h-[calc(100vh-78px)] md:h-[calc(100vh-90px)] bg-white flex flex-col items-center pt-6 pb-10 overflow-y-auto"
            >
              {/* Top Tabs */}
              <div
                className="flex w-full justify-center px-3 mb-[62px] md:mb-[50px]"
              >
                <div
                  className="flex items-center py-[4px] px-[4px] rounded-[15px] 
               border border-black/10 bg-[#EAFBF980] w-[100%] md:w-[75%]"
                >
                  <button
                    onClick={() => setActiveTab("download")}
                    className={`flex-1 px-[14px] py-[10px] rounded-[12px] font-poppins font-medium text-[16px] transition text-nowrap 
        ${activeTab === "download"
                        ? "bg-[#0D302C] text-white"
                        : "bg-transparent text-black"
                      }`}
                  >
                    Download Links
                  </button>
                  <button
                    onClick={() => setActiveTab("home")}
                    className={`flex-1 px-[18px] py-[10px] rounded-[12px] font-poppins font-medium text-[16px] transition text-nowrap
        ${activeTab === "home"
                        ? "bg-[#0D302C] text-white"
                        : "bg-transparent text-black"
                      }`}
                  >
                    Home Menu
                  </button>
                </div>
              </div>


              {/* Content area (tabs switch) */}
              <div className="w-full flex flex-col items-center px-6">
                {activeTab === "download" ? (
                  // Download section (reuse your component)
                  <div className="w-full">
                    <DownloadModal
                      isOpen={true}
                      variant="mobile"
                      onOpenDownloadNav={() => {
                        setIsModalOpen(false);
                      }}
                    />
                    {/* Or create <DownloadSection /> if you want a simplified mobile-only layout */}
                  </div>
                ) : (
                  // Home menu
                  <>
                    <div className="w-full flex flex-col items-center gap-6 mb-[62px]">
                      {navItems.map(({ id, label }) => (
                        <a
                          key={id}
                          href={`#${id}`}
                          className={`font-poppins text-lg flex justify-center items-center font-medium max-w-[276px] w-[100%] rounded-lg leading-[45.8px] ${activeSection === id
                            ? "text-[#FFFFFF] bg-[#9747ff]"
                            : "text-black hover:text-[#00000080]"
                            }`}
                          onClick={(e) => handleNavClick(e, id)}
                        >
                          {label}
                        </a>
                      ))}
                    </div>
                    <PromoVideoCard variant="homeMenu" />
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>''
    </section>
  );
}