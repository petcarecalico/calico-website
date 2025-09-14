"use client";
import Image from "next/image";
import backpack from "../../public/images/sectionImg1.png";
import graph from "../../public/images/sectionImg2.png";
import records from "../../public/images/sectionImg3.png";
import billing from "../../public/images/sectionImg4.png";
import chat from "../../public/images/sectionImg5.png";

const features = [
    {
        id: 1,
        title: "Real-time Appointment & Queue Tracking",
        desc: "Keep patient flow smooth and reduce waiting times.",
        img: backpack,
    },
    {
        id: 2,
        title: "Performance & Revenue Insights",
        desc: "Access detailed reports to make data-driven business decisions.",
        img: graph,
    },
    {
        id: 3,
        title: "Digital Patient Health Records",
        desc: "Secure, organised, and available anywhere.",
        img: records,
    },
    {
        id: 4,
        title: "In-App Billing & Payment Tracking",
        desc: "Fast, easy, and accurate payment processing.",
        img: billing,
    },
    {
        id: 5,
        title: "Staff Schedule & Attendance Management",
        desc: "Optimise operations without the paperwork.",
        img: chat,
    },
];

export default function AppShowcase() {
    return (
        <section className="w-full flex justify-center ">
            <div className="w-full  py-[30px] lg:py-20 lg:max-[1540px]:max-w-full lg:min-[1540px]:max-w-[1160px] sm:max-w-[390px] md:max-w-[624px] md:max-[900px]:max-w-full md:min-[1540px]:max-w-[624px]">
                {/* Scrollable container */}
                <div className="flex gap-6 overflow-x-auto pb-6 no-scrollbar snap-x snap-mandatory py-1 lg:max-[1540px]:px-[180px] lg:min-[1540px]:px-[6px] max-[390px]:px-[180px] min-[390px]:px-[20px]  md:max-[900px]:px-[80px]  ">
                    {features.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col items-center justify-between flex-shrink-0 snap-center
                         w-[262px] lg:w-[262px] px-[46px] pt-[30px] gap-[24px] rounded-[42px]
                         border border-[#DFDEFF] bg-[rgba(223,222,255,0.10)]
                         shadow-sm hover:scale-[1.02] transition-transform duration-300 md:min-w-[354px] min-w-[262px] "
                        >
                            {/* Image */}


                            <div className="flex flex-col justify-center items-center gap-[12px]">
                                {/* Title */}
                                <h3 className="text-[#20403C] text-center font-poppins lg:text-[16px] text-[14px] font-medium leading-[24px] max-w-[220px] min-h-[48px] capitalize">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="w-[262px] text-center text-[#4c4c4d] font-poppins text-[14px] font-normal leading-[24px]">
                                    {item.desc}
                                </p>
                            </div>

                            <div className="md:h-[136px] h-[90px] w-full flex justify-center items-center">
                                <Image src={item.img} alt={item.title} className="md:h-[136px] h-[90px] w-auto object-contain" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
