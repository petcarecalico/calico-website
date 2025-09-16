import Image from "next/image";
import adminSc from "../../public/images/adminSc.png";
import signature from "../../public/icons/signature.svg";
import apple from "../../public/icons/apple.svg";
import android from "../../public/icons/android.svg";
import ellipse from "../../public/icons/ellipse.svg";
import star from "../../public/icons/star.svg";
import footprint1 from "../../public/icons/foot-print-1.svg";
import footprint2 from "../../public/icons/foot-print-2.svg";
import { motion } from "framer-motion";

export default function OwnerSection() {
  return (
    <section className="w-full flex flex-col justify-center items-center" id="features">
      <div className="w-full bg-[#F6DF8F4D] lg:rounded-t-[462px] rounded-t-[112px] md:rounded-t-[212px] flex flex-col items-center lg:px-20 px-[20px] md:px-[60px]  lg:pt-35 md:pt-[72px] pt-[62px] pb-0">
        {/* Top Content */}
        <div className="flex flex-col  items-center w-full justify-between lg:gap-4 gap-1">
          {/* Text Content */}
          <div className="flex flex-col items-start gap-6 w-full">
            <div className="flex flex-col items-center gap-6 w-full text-center">
              <div className="flex flex-col items-center w-full md:max-w-[626px] max-w-[350px]">
                <p className="text-[#000000] font-poppins lg:text-[24px] text-[14px] font-medium leading-[24px] lg:mb-5 mb-0 ">
                  For Vets, clinics & Hospitals
                </p>

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-[#20403C] lg:text-[48px] text-[20px] md:text-[28px] font-poppins font-medium lg:leading-[64px] md:leading-[42px] leading-[30px] text-center"
                >
                  First-Ever Mobile App with <br /> Built-In Admin Panel
                </motion.h2>


                {/* Signature */}
                <div className="self-end  relative lg:w-[262px] lg:h-[68px] md:w-[108px] md:h-[28px] w-[70px] h-[18px]" >
                  <Image src={signature} alt="signature" className="relative lg:-top-4 top-2 -left-10 " />
                </div>
                <div className="relative block md:hidden mt-10">
                  <Image src={star} alt="Star" width={80} height={80} className="absolute -top-10 -left-12" />
                  <p className="text-[#AE0386] font-poppins text-[16px] font-[500]  max-w-[284px]">
                    Run your entire practice & <br />Business from your pocket.
                  </p>
                </div>
              </div>
            </div>

            {/* Paragraph */}
          </div>

          <div className="flex flex-col md:flex-row lg:gap-16 md:gap-0 gap-16 w-full max-w-[1160px] md:mt-12 mt-0">
            <div className="max-w-[560px] lg:mt-6 mt-[10px] flex flex-col items-center md:items-start">
              <p className="text-[#000000B2] font-poppins text-[14px] lg:text-[18px] text-center md:text-start font-normal lg:leading-[34px] leading-[24px]  mb-6 lg:mt-8 mt-0 ">
                Calico is the first-ever mobile platform that allows vets, clinics,
                and hospitals to manage all operations directly from their phone –
                no need for outdated, expensive desktop software. From appointments
                to billing, Calico keeps everything in one place.
              </p>

              {/* Buttons */}
              <div className="flex flex-col gap-4 lg:max-w-[336px] max-w-[260px]">
                <button className="flex items-center gap-3 text-nowrap px-3 py-2 rounded-[12px] bg-[#A16207] shadow-[4px_4px_0px_0px_#000] text-white font-poppins font-[500] lg:text-[20px] text-[14px] transition-transform duration-200 hover:scale-105">
                  Download Calico Bussiness  <Image src={apple} alt="Apple Store" width={20} height={20} />
                </button>

                <button className="flex items-center gap-3 px-3 py-2 text-nowrap rounded-[12px] bg-[#A16207] shadow-[4px_4px_0px_0px_#000] text-white font-poppins font-[500] lg:text-[20px] text-[14px] transition-transform duration-200 hover:scale-105">
                  Download Calico Bussiness
                  <Image src={android} alt="Google Play" width={20} height={20} />
                </button>
              </div>
            </div>

            {/* Phone Image */}
            <div className="w-full">
              <div className="relative flex justify-center will-change-transform motion-safe:animate-[float_6s_ease-in-out_infinite]">
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative flex justify-center"
                >
                  <Image
                    src={adminSc}
                    alt="App Preview"
                    className="lg:w-[324px] md:w-[250px] md:h-[400px] w-[324px] h-auto lg:h-[auto] relative -mb-[120px] lg:-mb-[180px] -top-5 md:top-20 "
                  />
                </motion.div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* White Stats Section */}
      <div className="w-full lg:max-w-[1160px] md:max-w-[624px] max-w-[350px] bg-white flex  lg:flex-row gap-25 justify-center lg:justify-start  py-20">
        <div className="flex flex-col md:flex-row gap-[0px] md:gap-[98px]  relative md:max-w-[770px]  mt-50 md:mt-0">
          {/* Stat 1 */}
          <div className="flex flex-col lg:gap-[98px] md:gap-[50px]  gap-8">
            <div className="relative hidden sm:block lg:hidden">
              <Image src={star} alt="Star" width={80} height={80} className="absolute -top-10 -left-12" />
              <p className="text-[#AE0386] font-poppins text-[13px] font-[500]  max-w-[284px]">
                Run your entire practice & <br />Business from your pocket.
              </p>
            </div>
            <div className="flex flex-col gap-[8px] items-center md:items-start">
              <motion.span
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 120, damping: 12 }}
                viewport={{ once: true }}
                className="text-[#20403C] lg:text-[32px] text-[20px] font-poppins font-semibold text-center md:text-start leading-[34px]"
              >
                60%
              </motion.span>

              <p className="text-black/70 font-poppins lg:text-[14px] text-[12px] text-center md:text-start leading-[20px] lg:max-w-[318px] md:max-w-[220px] max-w-[250px]  ">
                Improved patient retention through automated reminders, follow-ups
                & health records.
              </p>
            </div>
            <div className="flex flex-col gap-[8px] items-center md:items-start">
              <span className="text-[#20403C] lg:text-[32px] text-[20px]  font-poppins font-semibold leading-[34px] text-center md:text-start">
                70%
              </span>
              <p className="text-black/70 font-poppins lg:text-[14px] text-[12px] leading-[20px] lg:max-w-[318px] md:max-w-[390px] max-w-[250px] text-center md:text-start">
                Revenue growth potential with optimized schedules, reduced no-shows
                & better staff management.
              </p>
            </div>
            <div className="flex flex-col gap-[8px] md:hidden items-center md:items-start">
              <span className="text-[#20403C] lg:text-[32px] text-[20px]  font-poppins font-semibold leading-[34px] text-center md:text-start">
                45%
              </span>
              <p className="text-black/70 font-poppins lg:text-[14px] text-[12px] leading-[20px] lg:max-w-[318px] md:max-w-[390px] max-w-[250px] text-center md:text-start">
                Time saved in patient management with real-time queue &
                appointment tracking.
              </p>
            </div>

          </div>

          {/* Stat 2 */}



          {/* Stat 3 */}
          <div className="flex flex-col  justify-between">
            <div>
              <Image
                src={ellipse}
                alt="Ellipse Graphic"
                className="absolute lg:left-[280px] lg:top-[40px] md:top-[100px] md:left-[240px] lg:w-[234px] lg:h-[198px] -top-[170px] left-[15%] w-[170px] h-[128px]"
              />
            </div>
            <div className="hidden md:flex flex-col gap-3">

              <span className="text-[#20403C] lg:text-[32px] text-[20px] font-poppins font-semibold leading-[34px] text-center md:text-start">
                45%
              </span>
              <p className="text-black/70 font-poppins lg:text-[14px] text-[12px] leading-[20px] lg:max-w-[318px] md:max-w-[390px] max-w-full text-center md:text-start">
                Time saved in patient management with real-time queue &
                appointment tracking.
              </p>
            </div>
          </div>
        </div>

        {/* Star + Callout */}
        <div className="hidden lg:flex flex-col justify-between gap-6 ">
          <div>

          </div>
          <div className="relative">
            <Image src={footprint1} alt="foot-print-1" className="absolute -top-12 right-22" />
            <Image src={footprint2} alt="foot-print-1" className="absolute -top-9 right-12" />
            <Image src={star} alt="Star" width={80} height={80} className="absolute -top-10 -left-12" />
            <p className="text-[#AE0386] font-poppins text-[16px] font-[500]  max-w-[284px]">
              Run your entire practice & <br />Business from your pocket.
            </p>
          </div>
        </div>

      </div>
      <div className="h-8 bg-[#F6DF8F4D] w-full" >

      </div>
    </section>
  );
}
