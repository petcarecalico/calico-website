"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import android from "../../public/icons/android_download.svg";
import apple from "../../public/icons/apple_download.svg";
import appleGif from "../../public/images/appleGif.svg";
import LogoDownload from "../../public/images/logoDownloadsec.svg";
import platform from "../../public/images/platforms.svg";

export default function DownloadModal({ isOpen, variant = "desktop" }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={
            variant === "desktop"
              ? "absolute left-0 right-0 top-full bg-white shadow-lg border-t border-gray-200 z-40"
              : "relative w-full bg-white"
          }
        >
          <div
            className={
              variant === "desktop"
                ? "max-w-[1440px] mx-auto px-[140px] py-[60px] flex gap-[80px]"
                : "w-full flex flex-col gap-10   items-center justify-center "
            }
          >
            {/* LEFT SIDE */}
            <div
              className={
                variant === "desktop"
                  ? "flex w-[688px] flex-col gap-10"
                  : "flex flex-col gap-10 justify-center items-center"
              }
            >
              {/* Pet Parents */}
              <div>
                <div className="flex flex-col gap-6 items-center lg:items-start">
                  <div className="flex flex-row h-4 justify-center lg:justify-start">
                    <span className="text-black font-poppins text-[16px]  font-semibold">
                      Calico for&nbsp;
                    </span>
                    <span className="text-[#76A013] font-poppins text-[16px] font-semibold">
                      Pet Parents
                    </span>
                  </div>
                  <p className="text-[#000000B2] font-poppins text-[14px] leading-[22px] lg:max-w-[374px] text-center lg:text-start max-w-[100%] md:max-w-[60%] ">
                    Easily book appointments, track health records, get care
                    reminders, and shop pet essentials—all in one app.
                  </p>
                </div>
                {/* Buttons */}
                <div className="flex gap-4 mt-7 flex-col w-full  items-center lg:items-start lg:flex-row">
                  <button className="flex px-[10px] py-[8px] gap-2 rounded-[12px] border border-black/5 bg-[#F6DF8F4D] font-poppins text-[16px] font-medium  justify-center w-[276px]">
                    <Image src={apple} alt="Image" height={26} width={26} /> Download Calico APP
                  </button>
                  <button className="flex px-[10px] py-[8px] gap-2 rounded-[12px] border border-black/5 bg-[#F6DF8F4D] font-poppins text-[16px] font-medium justify-center w-[276px]">
                    <Image src={android} alt="Image" height={26} width={26} /> Download Calico APP
                  </button>
                </div>
              </div>

              {/* Businesses */}
              <div>
                <div className="flex flex-col gap-6 items-center lg:items-start">
                  <div className="flex flex-row h-4 justify-center lg:justify-start">
                    <span className="text-black font-poppins text-[16px] font-semibold">
                      Calico for&nbsp;
                    </span>
                    <span className="text-[#9747FF] font-poppins text-[16px] font-semibold">
                      Businesses
                    </span>
                  </div>
                  <p className="text-[#000000B2] font-poppins text-[14px] leading-[22px] lg:max-w-[374px] text-center lg:text-start max-w-[100%] md:max-w-[60%] ">
                    Manage appointments, grow your practice, and connect with pet
                    parents — all in one platform.
                  </p>
                </div>
                {/* Buttons */}
                <div className="flex gap-4 mt-7 flex-col w-full  items-center lg:items-start lg:flex-row">
                  <button className="flex px-[10px] py-[8px] gap-2 rounded-[12px] border border-black/5 bg-[#B1E6FF4D] font-poppins text-[16px] font-medium  justify-center w-[276px]">
                    <Image src={apple} alt="Image" height={26} width={26} /> Download Calico
                    Business
                  </button>
                  <button className="flex px-[10px] py-[8px] gap-2 rounded-[12px] border border-black/5 bg-[#B1E6FF4D] font-poppins text-[16px] font-medium  justify-center w-[276px]">
                    <Image src={android} alt="Image" height={26} width={26} /> Download Calico
                    Business
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div
              className={
                variant === "desktop"
                  ? "flex flex-col"
                  : "flex flex-col items-center w-full mt-[50px] md:mt-[54px]"
              }
            >
              <div
                className={
                  variant === "desktop"
                    ? "w-[466px] h-[404px] relative"
                    : "   w-[100%] md:w-[75%] h-[274px] md:h-[240px] relative overflow-hidden"
                }
              >
                <video
                  src="/videos/download-video.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className={
                    variant === "desktop"
                      ? "h-full w-full rounded-[42px] object-cover"
                      : "h-full w-full rounded-[24px] object-cover"
                  }
                />
                <div className="flex flex-col justify-between pl-5 gap-2 top-0 py-6 h-full absolute max-w-[220px]">
                  <Image src={LogoDownload} width={66} height={22} alt="Logo" />
                  <span className="text-[#0D302C] font-poppins text-[16px] md:text-[20px] flex flex-col gap-4 font-medium leading-[22px] md:leading-[24px] capitalize">
                    Smarter Pet Care Launching Soon!
                    <Image
                      src={platform}
                      alt="Image"
                      className="h-[28px] md:h-[34px] w-[140px] md:w-[166px]"
                    />
                  </span>
                </div>
                <Image
                  src={appleGif}
                  alt="Image"
                  className={
                    variant === "desktop"
                      ? "top-0 absolute right-0 rounded-tr-[42px] rounded-br-[42px]"
                      : "top-0 absolute right-0 rounded-tr-[24px] rounded-br-[24px] h-[274px] md:h-[240px]"
                  }
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

