"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import close from "../../public/icons/close-nav.svg";
import pop from "../../public/images/pop.svg";
import copy from "../../public/icons/copy.svg";
import Mascot from "../../public/icons/Mascot.png";
import closeMbl from "../../public/icons/close-mbl.png";



const DownloadNav = ({ onClose }) => {
    const [step, setStep] = useState("form"); // "form" | "success"
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(false);
    const GOOGLE_SHEET_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL;
    const validateForm = () => {
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            setError("Please enter a valid email address");
            return false;
        }
        if (!phone || !/^\d{10}$/.test(phone)) {
            setError("Please enter a valid 10-digit phone number");
            return false;
        }
        setError("");
        return true;
    };

    const handleSubmit = async () => {
        if (validateForm()) {
            setLoading(true);
            const start = Date.now();
            try {
                const formData = new URLSearchParams();
                formData.append("email", email);
                formData.append("phone", phone);

                const response = await fetch(GOOGLE_SHEET_URL, {
                    method: "POST",
                    body: formData,
                });
                const elapsed = Date.now() - start;
                const minDelay = 1000; // 1 second
                if (elapsed < minDelay) {
                    await new Promise(res => setTimeout(res, minDelay - elapsed));
                }
                if (response.ok) {
                    setLoading(false);
                    setTimeout(() => setStep("success"), 100); // show loader for a moment before success
                } else {
                    setError("Submission failed. Try again.");
                    setLoading(false);
                }
            } catch (err) {
                setError("Submission failed. Try again.");
                setLoading(false);
            }
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText("calicopetcare.com/");
        setCopied(true);
        setTimeout(() => setCopied(false), 1500); // reset after 1.5s
    };


    return (
        <div className="md:w-[624px] md:h-[661px] lg:w-[1160px] lg:h-[576px] w-[300px] h-[661px] rounded-[0px] md:rounded-[112px] bg-[#EEEDE2] flex flex-col lg:flex-row items-center justify-between shadow-[0_0_0px_0_#6366F1] mx-auto md:mx-auto">
            {/* Left Side */}
            <div className="w-[80%] lg:w-[60%] max-w-[550px] flex flex-col pl-[0px] lg:pl-[84px] py-[38px] md:py-[0px] pt-[38px] pb-[38px] md:pt-[38px] md:pb-[38px] lg:pb-[0px] lg:py-[0px] justify-between  items-center">
                <div className="relative">
                    <video
                        src="/videos/coming-soon.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="lg:h-[230px] lg:w-[320px] md:h-[180px] md:w-[260px] w-[181px] h-[130px] mb-[14px] lg:mb-[54px]"
                    />
                    <div className="flex justify-center items-center h-[36px] w-[36px] rounded-[16px] bg-[#0000001F] md:hidden absolute top-1 -right-12" onClick={onClose}>
                        <Image src={closeMbl} height={8} width={8} alt="close" />
                    </div>
                </div>
                <p className="text-black font-poppins lg:max-w-[600px] w-[280px] lg:w-full max-w-[300px] md:w-[400px] md:max-w-[430px] lg:text-[16px] text-[14px] lg:text-left text-center font-normal lg:leading-[26px] leading-[23px]">
                    Launching Soon! Calico handling the care, while you enjoy pampering
                    your pets. <span className="text-[#AE0386]">-Team Calico</span>
                </p>
            </div>

            {/* Right Side */}
            <div className="lg:w-[50%] w-full h-full bg-[#20403C] md:rounded-[112px] rounded-[0px] flex flex-col pt-[48px] pb-[48px] md:pt-[28px] md:pb-[48px] lg:pt-[52px] lg:pb-[96px] md:px-[99px] px-[20px] lg:px-[62px]">
                {/* Close Button */}
                <div className="justify-end w-full hidden md:flex  mb-5 lg:mb-0">
                    <div
                        className="py-[6px] px-[14px] rounded-[32px] bg-[#1c3835] flex items-center gap-[6px] cursor-pointer"
                        onClick={onClose}
                    >
                        <p className="text-white font-poppins text-[14px] font-normal">
                            Close
                        </p>
                        <Image src={close} alt="Close" width={14} height={14} />
                    </div>
                </div>

                {/* Content with Animation */}
                <div className="flex flex-col flex-1 justify-center items-start">
                    <AnimatePresence mode="wait">
                        {step === "form" ? (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.4 }}
                                className="flex flex-col lg:gap-[20px] gap-[18px] w-full"
                            >
                                <div className="flex flex-col lg:gap-[10px] md:gap:[8px] gap-[6px]">
                                    <h2 className="text-white lg:text-start text-center font-poppins text-[16px] md:text-[22px] font-semibold lg:leading-[36px] min-w-[250px] leading-[24px]">
                                        Be the first to{" "}
                                        <span className="text-[#FFD54F]">experience Calico!</span>
                                    </h2>
                                    <p className="text-[#D9D9D9] lg:text-start text-center font-poppins text-[14px] lg:text-[16px] leading-[23px] max-w-[full] md:max-w-[430px] lg:max-w-[420px]">
                                        Get early access to our launch, features & exclusive pet
                                        perks.
                                    </p>
                                </div>

                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 lg:py-3 py-[9px] rounded-md bg-[#16312E] text-white placeholder-[#A3A3A3] md:text-[16px] text-[14px] outline-none"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="w-full px-4 lg:py-3 py-[9px] rounded-md bg-[#16312E] text-white placeholder-[#A3A3A3] md:text-[16px] text-[14px] outline-none"
                                />

                                {error && <p className="text-[#DC143C] text-sm">{error}</p>}

                                {loading ? (
                                    <div className="flex items-center justify-center gap-2 mt-3 w-[264px] mx-auto lg:mx-0">
                                        <span className="inline-block w-5 h-5 border-2 border-t-2 border-gray-300 border-t-[#76A013] rounded-full animate-spin"></span>
                                        <span className="text-white font-poppins text-[16px]">Submitting...</span>
                                    </div>
                                ) : (
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center justify-center gap-5 lg:mt-2 mt-3 px-5 py-3 text-nowrap rounded-[12px] bg-black shadow-[4px_4px_0px_0px_#76A013] text-white font-poppins font-[500] lg:text-[18px] text-[14px] transition w-[264px] mx-auto block lg:mx-0"
                                        onClick={handleSubmit}
                                    >
                                        <Image src={Mascot} alt="Mascot" width={24} height={24} />
                                        join the Calico Waitlist
                                    </motion.button>
                                )}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="flex flex-col items-center justify-center w-full text-center relative"
                            >
                                {/* 🎉 Pop Image with animation */}
                                <motion.div
                                    initial={{ scale: 0, rotate: -30 }}
                                    animate={{ scale: [0, 1.2, 1], rotate: [-30, 10, 0] }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="relative"
                                >
                                    <Image src={pop} alt="Success" className="w-[116px] h-[100%] lg:w-[200px] lg:h-[160px]" />
                                </motion.div>

                                <h2 className="text-white font-poppins text-[16px] lg:text-[24px] mt-[12px] mb-[10px] font-semibold">
                                    You’re on the <span className="text-[#FFD54F]">waitlist</span>
                                </h2>
                                <p className="text-[#D9D9D9] font-poppins text-[14px] lg:text-[16px] leading-[23px] max-w-[410px] mb-[38px]">
                                    You have successfully secured your spot. Excited?  <br className="hidden lg:inline" /> Feel
                                    free to refer your friends!
                                </p>

                                <div className="w-full flex items-center rounded-[12px] bg-[#16312E] px-4 py-3 relative">
                                    <input
                                        type="text"
                                        readOnly
                                        value="calicopetcare.com/"
                                        className="flex-1 bg-transparent font-poppins text-[14px] lg:text-[16px] font-normal text-white outline-none"
                                    />

                                    {/* Copy button */}
                                    <motion.div
                                        whileHover={{ rotate: 15, scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={handleCopy}
                                        className="cursor-pointer relative"
                                    >
                                        <Image src={copy} alt="Copy" width={22} height={22} />
                                    </motion.div>

                                    {/* Copied text indicator */}
                                    <AnimatePresence>
                                        {copied && (
                                            <motion.span
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ duration: 0.3 }}
                                                className="absolute right-0 -top-8 text-[#FFD54F] text-[12px] lg:text-sm font-poppins"
                                            >
                                                Copied!
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </div>

                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default DownloadNav;
