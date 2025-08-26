"use client";
import image1 from "../../public/images/about-section.png";
import MobileImg from "../../public/images/mobile.png";
import alert from "../../public/icons/alert.svg";
import chat from "../../public/icons/chat.svg";
import doctor from "../../public/icons/doctor.svg";
import notes from "../../public/icons/notes.svg";
import Image from "next/image";
import android from "../../public/icons/android.svg";
import apple from "../../public/icons/apple.svg";

export default function AboutSection() {
    return (
        <section className=" w-full flex flex-col justify-center h-full">
            <div className="px-6 md:px-12  lg:px-35 py-17.5 bg-white ">
                <div className="w-full flex justify-center">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
                        {/* Left Content */}
                        <div className="flex flex-col items-start  max-w-[400px]">
                            {/* About pill */}
                            <span className="px-4 py-1 rounded-[12px] bg-[#9747FF4D] text-black font-poppins text-[16px] font-medium capitalize mb-7">
                                About
                            </span>

                            {/* Heading */}
                            <h2 className="text-[#20403C] font-poppins text-[26px] font-medium leading-[35px] mb-4">
                                Why Choose Calico For Your Pet Care Needs?
                            </h2>

                            {/* Paragraph */}
                            <p className="font-[#000000] font-poppins text-[14px] leading-[26px]">
                                All-In-One Pet Clinic Management App That Helps Veterinarians,
                                Clinics, And Pet Owners Connect Seamlessly. From Booking
                                Appointments To Managing Pet Health Records And Payments,
                                Everything is Secure, Mobile-First, And Accessible Anytime.
                            </p>
                        </div>

                        {/* Right Image */}
                        <div className="w-full lg:w-[650px] h-auto">
                            <div className="w-full  h-auto">
                                <img
                                    src={image1.src}
                                    alt="Calico Pet Care"
                                    className="w-full h-auto rounded-xl object-cover"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center bg-white py-20 ">
                <div className="w-full max-w-[1160px] max-h-[344px] rounded-t-[142px] bg-[#CEE38C] px-6 md:px-12 lg:px-16 pt-12 lg:pt-20 ">
                    {/* Wrapper */}
                    <div className="flex flex-col items-center gap-12 lg:gap-[48px] max-w-[988px] mx-auto">
                        {/* Mobile + Content */}
                        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-[58px] w-full">
                            {/* Mobile Image */}
                            <div className="w-[220px] sm:w-[260px] md:w-[280px] lg:w-[316px] h-auto flex-shrink-0">
                                <Image
                                    src={MobileImg}
                                    alt="Mobile Preview"
                                    className="w-full h-auto"
                                />
                            </div>

                            {/* Content Blocks */}
                            <div className="flex flex-col w-full h-[652px] justify-center gap-8">
                                <div className="w-full flex flex-col gap-6 relative">
                                    {/* Block 1 - left */}
                                    <div className="self-start flex items-center w-full max-w-[474px] px-5 py-7 rounded-[32px] bg-[#20403C] text-white font-poppins text-[16px] gap-6 leading-[24px] transition-all duration-300 hover:scale-105 cursor-pointer">
                                        <div className="w-[32px] flex-shrink-0 flex justify-center items-center">
                                            <Image src={doctor} alt="Stethoscope" width={32} height={32} />
                                        </div>
                                        Book consultations, Emergency & <br /> grooming services.
                                    </div>

                                    {/* Block 2 - right, overlapping */}
                                    <div className="self-end -mt-8 z-10 flex items-center w-full max-w-[474px] px-5 py-5 rounded-[32px] bg-[#F6DF8F] text-black font-poppins text-[16px] gap-6 leading-[24px] shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                                        <div className="w-[32px] flex-shrink-0 flex justify-center items-center">
                                            <Image src={alert} alt="Alert" width={32} height={32} />
                                        </div>
                                        Pet care alerts: vaccinations, medications, walks, and litter cleaning.
                                    </div>
                                </div>

                                <div className="w-full flex flex-col gap-6 relative">
                                    {/* Block 3 - left */}
                                    <div className="self-start flex items-center w-full max-w-[474px] px-5 py-7 rounded-[32px] bg-[#AE0386] text-white font-poppins text-[16px] gap-6 leading-[24px] transition-all duration-300 hover:scale-105 cursor-pointer">
                                        <div className="w-[32px] flex-shrink-0 flex justify-center items-center">
                                            <Image src={notes} alt="Notes" width={32} height={32} />
                                        </div>
                                        Store and track pet health history
                                    </div>

                                    {/* Block 4 - right, overlapping */}
                                    <div className="self-end -mt-8 z-10 flex items-center w-full max-w-[474px] px-5 py-5 rounded-[32px] bg-[#6366F1] text-white font-poppins text-[16px] gap-6 leading-[24px] shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                                        <div className="w-[32px] flex-shrink-0 flex justify-center items-center">
                                            <Image src={chat} alt="Chat" width={32} height={32} />
                                        </div>
                                        Chat with vets for follow-up advice.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* For Pet Owners Section */}
            <div className="flex flex-col items-center  w-full max-w-[956px] mx-auto px-6 text-center mt-90 mb-25">
                <h2 className="text-[#20403C] font-poppins font-[600] text-[28px] leading-[24px] mb-5">
                    For Pet Owners
                </h2>

                <p className="text-[#000000B2] font-poppins font-[400] text-[20px] leading-[34px] max-w-[956px] mb-9">
                    With Calico, pet owners get a clear, organized, and stress-free way to
                    care for their pets. From booking appointments to storing vaccination
                    records, Calico keeps you in control.
                </p>

                <div className="flex items-center gap-4 flex-wrap justify-center">
                    <button className="flex items-center gap-3 px-3 py-2 rounded-[12px] bg-[#76A013] shadow-[4px_4px_0px_0px_#000] text-white font-poppins font-[500] text-[20px] transition-transform duration-200 hover:scale-105">
                        Download Calico APP
                        <Image src={apple} alt="Apple Store" width={20} height={20} />
                    </button>

                    <button className="flex items-center gap-3 px-3 py-2 rounded-[12px] bg-[#76A013] shadow-[4px_4px_0px_0px_#000] text-white font-poppins font-[500] text-[20px] transition-transform duration-200 hover:scale-105">
                        Download Calico APP
                        <Image src={android} alt="Google Play" width={20} height={20} />
                    </button>
                </div>
            </div>

        </section>
    );
}
