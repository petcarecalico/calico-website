import Image from "next/image";
import { useEffect } from "react";

export default function Hero() {
    useEffect(() => {
        const eyes = document.querySelectorAll(".eye");
        const handleMouseMove = (e) => {
            eyes.forEach((eye) => {
                const rect = eye.getBoundingClientRect();
                const x = rect.left + rect.width / 2;
                const y = rect.top + rect.height / 2;
                const rad = Math.atan2(e.clientY - y, e.clientX - x);
                const rot = rad * (180 / Math.PI);
                eye.style.transform = `rotate(${rot}deg)`;
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);


    return (
        <section className="flex flex-col items-center text-center px-4 md:px-10 lg:px-20  pt-12 pb-10 max-w-[1440px] mx-auto" id="hero">
            {/* Badge */}
            <div className="flex px-[30px] py-[10px] justify-center items-center gap-[10px] 
                rounded-[18px] bg-[rgba(139,92,246,0.30)] mb-6 animate-fade-down">
                <span className="text-black font-poppins text-[16px] leading-8 font-medium">
                    Smart Pet Care, Simplified
                </span>
            </div>




            {/* Heading */}
            <h1 className="max-w-[868px] text-black font-poppins text-[24px]  font-medium leading-[75%] mb-4 mt-6 animate-fade-up [animation-delay:0.3s]">
                Find Trusted Pet Care & Veterinary Services Near You
            </h1>

            {/* Subtext */}
            <p className="max-w-[868px] text-[#898989] font-poppins text-[18px] font-normal leading-[155%]">
                Calico connects pet parents with verified veterinary clinics, pet
                hospitals, and grooming services. Book vet appointments, schedule
                grooming, get reminders for vaccinations, and track your pet’s health —{" "}
                <span className="text-[#76A013] font-bold capitalize">
                    All In One Platform.
                </span>
            </p>

            {/* Cat + Phone Illustration */}
            <div className="relative mt-5 flex justify-center items-center">
                <Image
                    src="/images/black-cat.svg"
                    alt="Black Cat"
                    width={660}
                    height={220}
                    className="relative"
                />
            </div>
        </section>
    );
}
