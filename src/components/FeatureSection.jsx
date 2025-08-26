"use client";
import Image from "next/image";
import Image1 from "../../public/images/feature-card-1.svg";
import Image2 from "../../public/images/feature-card-2.svg";
import Image3 from "../../public/images/feature-card-3.svg";
import Image4 from "../../public/images/feature-card-4.svg"


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
    <section className="w-full bg-[#E8E6FF] flex justify-center">
      {/* Heading */}
      <div className=" py-[70px] px-6 md:px-10 lg:px-[140px] mx-auto flex flex-col justify-center max-w-[1440px]" >
        <div className="mb-12 text-center lg:text-left ">
          <h2 className="text-[28px] md:text-[32px] font-poppins font-medium leading-[44px] max-w-[800px] mx-auto lg:mx-0">
            <span className="text-[#AE0386]">Your all-in-one </span>
            <span className="text-[#20403C]">
              pet health companion – <br className="hidden md:block" /> for owners, vets, and clinics.
            </span>
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1440px] mx-auto">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-[52px] shadow-sm transition-transform hover:scale-[1.02]"
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
              <div className="flex flex-col items-start gap-4 px-8 pt-6 pb-10">
                <h3 className="text-black font-poppins text-[16px] font-medium leading-[24px] max-w-[150px]">
                  {item.title}
                </h3>
                <p className="text-[16px] font-poppins font-normal leading-[24px] text-black/70">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}
