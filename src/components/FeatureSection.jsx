"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Image1 from "../../public/images/feature-card-1.svg";
import Image2 from "../../public/images/feature-card-2.svg";
import Image3 from "../../public/images/feature-card-3.svg";
import Image4 from "../../public/images/feature-card-4.svg";
import swipe from "../../public/gif/swipe.gif"

export default function FeaturesSection() {
  const features = [
    {
      img: Image1,
      title: "Book & Manage Appointments",
      desc: "Hassle-free scheduling for your pets.",
    },
    {
      img: Image2,
      title: "First-Ever Mobile Admin Panel",
      desc: "Vets, Hospitals & clinics can manage everything from their phone.",
    },
    {
      img: Image3,
      title: "Pet Health Records Anywhere",
      desc: "Access medical history in seconds.",
    },
    {
      img: Image4,
      title: "Seamless Communication",
      desc: "Chat with your vet instantly.",
    },
  ];

  return (
    <section className="w-full bg-[#E8E6FF] flex justify-center  relative">
      <div className="lg:py-[70px] py-[38px] md:py-[40px] pl-[20px] pr-[0px] md:pl-[60px] md:pr-[0px] lg:pl-[140px] lg:pr-[140px] flex flex-col justify-center lg:max-w-[1440px] md:max-w-[624px] max-w-full">
        {/* Heading */}
        <div className="lg:mb-12 md:mb-[32px] mb-[30px] text-center md:text-left ">
          <h2 className="lg:text-[28px] md:text-[16px] text-[14px] font-poppins font-medium lg:leading-[44px] leading-[22px] md:max-w-[800px] max-w-[265px] mx-auto lg:mx-0">
            <span className="text-[#AE0386]">Your all-in-one </span>
            <span className="text-[#20403C]">
              pet health companion – <br className="hidden md:block" /> for owners,
              vets, and clinics.
            </span>
          </h2>
        </div>

        {/* Feature Cards */}
        <div
          className="
    flex gap-6 overflow-x-auto no-scrollbar
    lg:grid lg:grid-cols-4
    lg:max-w-[1440px] md:max-w-[624px] max-w-full
    mx-auto
    lg:px-4 lg:py-4
    px-4 py-1

    overflow-visible
          "
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03, y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="
    flex-shrink-0 w-[176px] md:w-[220px] lg:w-auto
    flex flex-col items-center bg-white rounded-[52px] shadow-sm 
    hover:shadow-xl transition-shadow
    origin-bottom
  "
            >

              {/* Image */}
              <div className="w-full aspect-[4/3] relative">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover rounded-t-[52px]"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col items-start lg:gap-4 gap-[6px] lg:px-8 lg:pt-6 lg:pb-10 px-[14px] pt-[22px] pb-[30px]">
                <h3 className="text-black font-poppins lg:text-[16px] text-[13px] font-medium lg:leading-[24px] leading-[20px] max-w-[150px]">
                  {item.title}
                </h3>
                <p className="lg:text-[16px] text-[12px] font-poppins font-normal lg:leading-[24px] leading-[20px] text-[#000000B2]">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Mobile Only GIF */}
      </div>
      <div className="flex justify-center mt-6 md:hidden absolute -bottom-6">
        <div
          className="
      w-[50px] h-[50px] flex-shrink-0 aspect-square rounded-[14px] 
      shadow-md overflow-hidden
    "
        >
          <Image
            src={swipe}
            alt="Swipe indicator"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
