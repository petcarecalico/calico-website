// app/components/ContactSection.tsx

import Image from "next/image";
import Dog from "../../public/gif/dogGif.gif";
import image from "../../public/images/imageDog.png";


export default function ContactSection() {
  return (
    <section className="w-full flex justify-center px-4 md:px-[60px] lg:px-0 lg:py-16 py-[44px]" id="contact">
      <div className="w-full max-w-[1160px] ">
        {/* Heading */}


        {/* Content Wrapper */}
        <div className="flex flex-col lg:flex-row gap-12 md:gap-6 lg:gap-[54px] justify-between">
          {/* Left side with text + dog image + socials */}
          <div className="flex flex-col md:flex-row lg:flex-col justify-start md:justify-between md:items-center    ">

            <div>
              <h2 className="text-[#20403C] lg:text-[32px] text-[24px] mb-4 font-medium lg:leading-[46px] leading-[24px] font-poppins text-center md:text-left">
                Contact us
              </h2>

              {/* Subtext */}
              <p className="max-w-[438px] lg:text-[18px] text-[14px] font-normal text-center md:text-start lg:leading-[32px] leading-[24px] text-black/70 font-poppins">
                Get in touch with us for any enquires <br /> and questions
              </p>
            </div>
            {/* Dog Illustration */}

            <div className="hidden md:block">
              <Image
                src={Dog}
                alt="Dog Illustration"
                width={312}
                height={236}
                className="object-contain w-[312px] h-[167px] lg:w-[526px] lg:h-[270px]"
              />

              {/* Social Links */}
              <div className="flex justify-center  gap-8 ">
                {["LinkedIn", "Instagram", "Facebook"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="w-[80px] text-black lg:text-[16px] text-[12px] text-center font-medium leading-[32px] font-poppins hover:text-[#20403C] transition"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Contact details + image */}
          <div className="flex flex-col gap-9 lg:gap-10">

            {/* Right-side image */}
            <div className="w-full order-1 lg:order-2">
              <Image
                src={image}
                alt="Dog with woman"
                width={526}
                height={270}
                className="rounded-2xl w-full lg:max-w-[526px] md:h-[180px] lg:h-auto h-auto object-cover"
              />
            </div>

            {/* Info rows + Address */}
            <div className="order-2 lg:order-1 flex flex-col justify-center md:justify-between items-center md:items-start  gap-9">
              {/* Info rows */}
              <div className="flex flex-wrap justify-center md:justify-between w-full  gap-6">
                {/* General inquiries */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#000000B2] lg:text-[14px] text-[12px] font-normal text-center md:text-start font-poppins">
                    General inquiries
                  </h3>
                  <p className="text-[#000000] lg:text-[16px] text-[14px] text-center md:text-start font-medium font-poppins">
                    info@calicopetcare.com
                  </p>
                  <p className="text-[#000000] lg:text-[16px] text-[14px] text-center md:text-start  font-medium font-poppins">
                    9363298065
                  </p>
                </div>

                {/* Collaborations */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#000000B2] lg:text-[14px] text-[12px] text-center md:text-start font-normal font-poppins">
                    Collaborations
                  </h3>
                  <p className="text-[#000000] lg:text-[16px] text-[14px] text-center md:text-start font-medium font-poppins">
                    Teams@calicopetcare.com
                  </p>
                  <p className="text-[#000000] lg:text-[16px] text-[14px] text-center md:text-start font-medium font-poppins">
                    70123 94800
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex flex-col gap-2 max-w-[246px] ">
                <h3 className="text-[#000000B2] lg:text-[14px] text-[12px] font-normal font-poppins text-center md:text-start">
                  Address
                </h3>
                <p className="text-[#000000] lg:text-[16px] text-[14px] font-medium font-poppins text-center md:text-start">
                  {/* 2nd Stage, Indiranagar, Bengaluru, Karnataka 560008 */}
                  Provident Sunworth City, Bengaluru, Karnataka 560060
                </p>
              </div>
              <div className="block md:hidden">
                <Image
                  src={Dog}
                  alt="Dog Illustration"
                  width={312}
                  height={236}
                  className="object-contain w-[312px] h-[167px] lg:w-[526px] lg:h-[270px]"
                />

                {/* Social Links */}
                <div className="flex justify-center  gap-8 ">
                  {["LinkedIn", "Instagram", "Facebook"].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="w-[80px] text-black lg:text-[16px] text-[12px] font-medium text-center leading-[32px] font-poppins hover:text-[#20403C] transition"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
