// app/components/ContactSection.tsx

import Image from "next/image";
import Dog from "../../public/gif/dogGif.gif";
import image from "../../public/images/imageDog.png";


export default function ContactSection() {
  return (
    <section className="w-full flex justify-center px-4 md:px-6 lg:px-0 py-16" id="contact">
      <div className="w-full max-w-[1160px] ">
        {/* Heading */}


        {/* Content Wrapper */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[54px] justify-between">
          {/* Left side with text + dog image + socials */}
          <div className="flex flex-col  ">

            <h2 className="text-[#20403C] text-[32px] md:text-[48px] mb-4 font-medium leading-[46px] font-poppins text-center md:text-left">
              Contact us
            </h2>

            {/* Subtext */}
            <p className="max-w-[438px] text-[18px] md:text-[20px] font-normal leading-[32px] text-black/70 font-poppins">
              Get in touch with us for any enquires <br /> and questions
            </p>
            {/* Dog Illustration */}

              <Image
                src={Dog}
                alt="Dog Illustration"
                width={312}
                height={236}
                className="object-contain"
              />

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-8">
              {["LinkedIn", "Instagram", "Facebook"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="w-[80px] text-black text-[16px] font-medium leading-[32px] font-poppins hover:text-[#20403C] transition"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Right side - Contact details + image */}
          <div className="flex flex-col gap-9 lg:gap-10">
            {/* Info rows */}
            <div className="flex flex-wrap justify-between gap-6">
              {/* General inquiries */}
              <div className="flex flex-col gap-2">
                <h3 className="text-[#000000B2] text-[14px] font-normal  font-poppins">
                  General inquiries
                </h3>
                <p className="text-[#000000] text-[16px] font-medium  font-poppins">info@calicopetcare.com</p>
                <p className="text-[#000000] text-[16px] font-medium  font-poppins">9363298065</p>
              </div>

              {/* Collaborations */}
              <div className="flex flex-col gap-2">
                <h3 className="text-[#000000B2] text-[14px] font-normal  font-poppins">
                  Collaborations
                </h3>
                <p className="text-[#000000] text-[16px] font-medium  font-poppins">
                  Teams@calicopetcare.com
                </p>
                <p className="text-[#000000] text-[16px] font-medium  font-poppins">70123 94800</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex flex-col gap-2 max-w-[246px]">
              <h3 className="text-[#000000B2] text-[14px] font-normal  font-poppins">
                Address
              </h3>
              <p className="text-[#000000] text-[16px] font-medium  font-poppins">
                2nd Stage, Indiranagar, Bengaluru, Karnataka 560008
              </p>
            </div>

            {/* Right-side image */}
            <div className="w-full">
              <Image
                src={image}
                alt="Dog with woman"
                width={526}
                height={270}
                className="rounded-2xl w-full max-w-[526px] h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
