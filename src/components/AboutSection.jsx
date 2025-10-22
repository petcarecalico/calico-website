"use client";
import { motion } from "framer-motion";
import image1 from "../../public/images/about-section.webp";
import MobileImg from "../../public/images/mobile.webp";
import alert from "../../public/icons/alert.svg";
import chat from "../../public/icons/chat.svg";
import doctor from "../../public/icons/doctor.svg";
import notes from "../../public/icons/notes.svg";
import Image from "next/image";
import android from "../../public/icons/android.svg";
import apple from "../../public/icons/apple.svg";
import { useDownloadPopup } from "../context/DownloadPopupContext";


const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.45,
            delayChildren: 0.22,
            ease: [0.16, 1, 0.3, 1] // even more pronounced cubic-bezier
        }
    }
};

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 1.35, ease: [0.22, 1, 0.36, 1] } }
};
const fadeLeft = {
    hidden: { opacity: 0, x: 10 },
    show: { opacity: 1, x: 0, transition: { duration: 1.35, ease: [0.22, 1, 0.36, 1] } }
};
const fadeRight = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0, transition: { duration: 1.35, ease: [0.22, 1, 0.36, 1] } }
};
const fadeScale = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 1.35, ease: [0.22, 1, 0.36, 1] } }
};

export default function AboutSection() {
    const { openPopup } = useDownloadPopup();

    return (
        <section className="w-full flex flex-col justify-center h-full" id="about">
            {/* Top Section */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="px-6 md:px-12 lg:px-35 pt-17.5 bg-white min-w-[320px]"
            >
                <div className="w-full flex justify-center">
                    <div className="flex flex-col items-center gap-[54px] md:flex-row md:justify-between md:gap-[30px]">
                        {/* Left Content */}
                        <motion.div
                            data-aos="fade-left"
                            className="flex flex-col items-center md:items-start max-w-[400px] text-center md:text-left"
                        >
                            <span className="px-4 py-1 rounded-[12px] bg-[#9747FF4D] text-black font-poppins text-[12px] lg:text-[16px] font-medium capitalize mb-7">
                                About
                            </span>
                            <h2 className="text-[#20403C] font-poppins text-[16px] md:text-[14px] lg:text-[26px] font-semibold leading-[24px] md:leading-[24px] lg:leading-[35px] w-[300px] md:w-auto mb-4">
                                Why Choose Calico For Your Pet Care Needs?
                            </h2>
                            <p className="font-poppins text-black/70 text-[14px] md:text-[12px] lg:text-[14px] leading-[24px] md:leading-[20px] lg:leading-[26px]">
                                All-In-One Pet Clinic Management App That Helps Veterinarians, Clinics, And Pet Owners Connect Seamlessly. From Booking Appointments To Managing Pet Health Records And Payments, Everything is Secure, Mobile-First, And Accessible Anytime.
                            </p>
                        </motion.div>
                        {/* Right Image */}
                        <motion.div
                            data-aos="fade-right"
                            className="w-[100%] h-[204px] md:w-[262px] md:h-[204px] lg:w-[650px] lg:h-[282px]"
                        >
                            <img
                                src={image1.src}
                                alt="Calico Pet Care"
                                className="w-full h-full rounded-[32px] lg:rounded-[42px] object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Features Section */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex justify-center bg-white py-20"
            >
                <div className="w-full max-w-[90%] mx-10 max-h-[214px] lg:max-w-[1160px] md:max-w-[672px] md:max-h-[214px] lg:max-h-[344px] lg:rounded-t-[142px] rounded-t-[62px] md:rounded-t-[62px] bg-[#CEE38C] px-[48px] md:px-12 lg:px-16 pt-[36px] lg:pt-20">
                    {/* Wrapper */}
                    <div className="flex flex-col items-center gap-12 lg:gap-[48px] lg:max-w-[988px] md:max-w-[584px]  mx-auto">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-[48px] lg:gap-[58px] lg:w-full w-[610px]">
                            {/* Mobile Image */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="w-[260px] lg:w-[316px] h-auto flex-shrink-0"
                            >
                                <Image
                                    src={MobileImg}
                                    alt="Mobile Preview"
                                    className="w-full h-auto"
                                />
                            </motion.div>

                            {/* Blocks */}
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                                className="flex flex-col lg:w-full md:w-[400px] lg:h-[652px] md:h-[500px] h-[300px] justify-start mt-0 md:-mt-5 lg:mt-0 md:justify-center gap-8"
                            >
                                {/* Block 1 */}
                                <motion.div
                                    className="self-start flex items-center w-full lg:max-w-[474px] max-w-[300px]  lg:px-5 lg:py-7 px-[20px] py-[20px] lg:rounded-[32px] rounded-[22px]  bg-[#20403C] text-white font-poppins lg:text-[16px] text-[12px] gap-6 lg:leading-[24px] leading-[20px] hover:scale-105 transition-all cursor-pointer"
                                    data-aos="fade-right"
                                >
                                    <Image src={doctor} alt="Stethoscope" width={32} height={32} />
                                    Book consultations, Emergency & <br /> grooming services.
                                </motion.div>

                                {/* Block 2 */}
                                <motion.div
                                    data-aos="fade-left"
                                    className="self-end md:-mt-12 -mt-10 z-10 flex items-center w-full lg:max-w-[474px] max-w-[270px]   lg:px-5 lg:py-7 px-[20px] py-[10px]   lg:rounded-[32px] rounded-[22px] bg-[#F6DF8F] text-black font-poppins lg:text-[16px] text-[12px] gap-6 lg:leading-[24px] leading-[20px] shadow-lg hover:scale-105 transition-all cursor-pointer"
                                >
                                    <Image src={alert} alt="Alert" width={32} height={32} />
                                    Pet care alerts: vaccinations, medications, walks, and litter cleaning.
                                </motion.div>

                                {/* Block 3 */}
                                <motion.div
                                    data-aos="fade-right"
                                    className="self-start flex items-center w-full lg:max-w-[474px] max-w-[254px]  lg:px-5 lg:py-7 px-[20px] py-[15px]  lg:rounded-[32px] rounded-[22px] bg-[#AE0386] text-white font-poppins lg:text-[16px] text-[12px] gap-6 lg:leading-[24px] leading-[20px] hover:scale-105 transition-all cursor-pointer"
                                >
                                    <Image src={notes} alt="Notes" width={32} height={32} />
                                    Store and track pet health history
                                </motion.div>

                                {/* Block 4 */}
                                <motion.div
                                    data-aos="fade-left"
                                    className="self-end md:-mt-12 -mt-10 z-10 flex items-center w-full lg:max-w-[474px] max-w-[260px]   lg:px-5 lg:py-7 px-[20px] py-[10px]   lg:rounded-[32px] rounded-[22px] bg-[#6366F1] text-white font-poppins lg:text-[16px] text-[12px] gap-6 leading-[24px] shadow-lg hover:scale-105 transition-all cursor-pointer"
                                >
                                    <Image src={chat} alt="Chat" width={32} height={32} />
                                    Chat with vets for follow-up advice.
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* For Pet Owners Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col items-center w-full max-w-[956px] mx-auto px-6 text-center lg:mt-90 mt-175 md:mt-85 mb-18"
            >
                <h2 className="text-[#20403C] font-poppins font-[600] lg:text-[28px] text-[16px] leading-[24px] mb-5">
                    For Pet Owners
                </h2>

                <p className="text-[#000000B2] font-poppins font-[400] lg:text-[20px] text-[14px] lg:leading-[34px] leading-[24px] lg:max-w-[956px] md:max-w-[544px] mb-9">
                    With Calico, pet owners get a clear, organized, and stress-free way to
                    care for their pets. From booking appointments to storing vaccination
                    records, Calico keeps you in control.
                </p>

                <div className="flex items-center gap-4 flex-wrap justify-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-3 px-3 py-2 rounded-[12px] bg-[#76A013] shadow-[4px_4px_0px_0px_#000] text-white font-poppins font-[500] lg:text-[20px] text-[14px]"
                        onClick={openPopup}
                    >
                        Download Calico APP
                        <Image src={apple} alt="Apple Store" width={20} height={20} />
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-3 px-3 py-2 rounded-[12px] bg-[#76A013] shadow-[4px_4px_0px_0px_#000] text-white font-poppins font-[500] lg:text-[20px] text-[14px]"
                        onClick={openPopup}
                    >
                        Download Calico APP
                        <Image src={android} alt="Google Play" width={20} height={20} />
                    </motion.button>
                </div>
                {/* DownloadNav modal is now handled globally */}
            </motion.div>
        </section>
    );
}
