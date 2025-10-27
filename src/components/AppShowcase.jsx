"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import backpack from "../../public/images/sectionImg1.webp";
import graph from "../../public/images/sectionImg2.webp";
import records from "../../public/images/sectionImg3.webp";
import billing from "../../public/images/sectionImg4.webp";
import chat from "../../public/images/sectionImg5.webp";

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
    const [isDesktop, setIsDesktop] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const checkSize = () => setIsDesktop(window.innerWidth >= 1024);
        checkSize();
        window.addEventListener("resize", checkSize);
        return () => window.removeEventListener("resize", checkSize);
    }, []);

    // Convert vertical wheel events into horizontal scroll on desktop
    useEffect(() => {

        const container = scrollRef.current;

        let isPointerOver = false;

        const onPointerEnter = () => (isPointerOver = true);
        const onPointerLeave = () => (isPointerOver = false);

        // Wheel handler: when user scrolls vertically, translate to horizontal.
        // If container can't scroll further in that direction, allow the event to bubble so page can continue scrolling.
        const onWheel = (e) => {
            // Only intercept vertical scroll (deltaY)
            if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;

            const maxScrollLeft = container.scrollWidth - container.clientWidth;
            const atLeft = container.scrollLeft <= 0;
            const atRight = container.scrollLeft >= maxScrollLeft - 1; // small tolerance

            // Determine desired horizontal scroll amount
            const scrollAmount = e.deltaY; // direct mapping; browser deltaY already gives a good feel

            // If scrolling up (deltaY < 0) and we're at left edge, allow page to scroll up
            if (e.deltaY < 0 && atLeft) return;

            // If scrolling down (deltaY > 0) and we're at right edge, allow page to scroll down
            if (e.deltaY > 0 && atRight) return;

            // Prevent page from scrolling and perform horizontal scroll
            e.preventDefault();
            container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        };

        // For better UX on trackpad/pointer devices, only intercept wheel when pointer is over the container
        container.addEventListener("pointerenter", onPointerEnter);
        container.addEventListener("pointerleave", onPointerLeave);
        container.addEventListener("wheel", onWheel, { passive: false });

        return () => {
            container.removeEventListener("pointerenter", onPointerEnter);
            container.removeEventListener("pointerleave", onPointerLeave);
            container.removeEventListener("wheel", onWheel);
        };
    }, [isDesktop]);


    return (
        <section className="w-full flex justify-center">
            <div className="w-full py-20 lg:py-20 lg:max-[1540px]:max-w-full lg:min-[1540px]:max-w-[1160px] sm:max-w-[390px] md:max-w-[624px] md:max-[900px]:max-w-full md:min-[1540px]:max-w-[624px] overflow-hidden">
                <div
                    ref={scrollRef}
                    className={`  flex gap-6 snap-x snap-mandatory py-3 
          lg:max-[1540px]:px-[180px] lg:min-[1540px]:px-[6px] 
          max-[390px]:px-[180px] min-[390px]:px-[20px] md:max-[900px]:px-[80px]
          overflow-x-auto no-scrollbar`}
                    // prevent vertical scroll snapping inside the container
                    style={{ WebkitOverflowScrolling: "touch" }}
                >
                    {/* Duplicate for seamless loop but start from first */}
                    {[...features].map((item, index) => (
                        <div
                            key={`${item.id}-${index}`}
                            className="flex flex-col items-center justify-between flex-shrink-0 snap-center
              w-[262px] lg:w-[262px] px-[46px] pt-[30px] gap-[24px] rounded-[42px]
              border border-[#DFDEFF] bg-[rgba(223,222,255,0.10)]
              shadow-sm hover:scale-[1.03] transition-transform duration-300 md:min-w-[354px] min-w-[262px]"
                        >
                            <div className="flex flex-col justify-center items-center gap-[12px]">
                                <h3 className="text-[#20403C] text-center font-poppins lg:text-[16px] text-[14px] font-medium leading-[24px] max-w-[220px] min-h-[48px] capitalize">
                                    {item.title}
                                </h3>
                                <p className="w-[262px] text-center text-[#4c4c4d] font-poppins text-[14px] font-normal leading-[24px]">
                                    {item.desc}
                                </p>
                            </div>
                            <div className="md:h-[136px] h-[90px] w-full flex justify-center items-center">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    className="md:h-[136px] h-[90px] w-auto object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
