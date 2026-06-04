"use client";
import Image from "next/image";
import android from "../../../public/icons/android_download.svg";
import apple from "../../../public/icons/apple_download.svg";
import { useDownloadPopup } from "../../context/DownloadPopupContext";
import PromoVideoCard from "../../components/PromoVideoCard";

export default function DownloadPage() {
  const { openPopup } = useDownloadPopup();

  const handleOpenDownloadNav = () => {
    openPopup();
  };

  return (
    // h-screen on desktop; overflow-y-auto so mobile can scroll if content is taller
    <div className="h-screen bg-white overflow-y-auto flex items-start lg:items-center justify-center">
      {/* Mirrors DownloadModal: desktop = px-[140px] py-[60px] flex-row | mobile = flex-col */}
      <div
        className="
          w-full max-w-[1440px] mx-auto
          px-5 py-10
          md:px-[42px]
          lg:px-[140px] lg:py-[60px]
          flex flex-col items-center justify-center gap-10
          lg:flex-row lg:items-start lg:gap-[80px]
        "
      >
        {/* LEFT SIDE — matches DownloadModal mobile: items-center | desktop: items-start */}
        <div className="flex flex-col gap-10 justify-center items-center lg:items-start w-full lg:w-[688px]">

          {/* Pet Parents */}
          <div>
            <div className="flex flex-col gap-6 items-center lg:items-start">
              <div className="flex flex-row h-4 justify-center lg:justify-start">
                <span className="text-black font-poppins text-[16px] font-semibold">
                  Calico for&nbsp;
                </span>
                <span className="text-[#76A013] font-poppins text-[16px] font-semibold">
                  Pet Parents
                </span>
              </div>
              <p className="text-[#000000B2] font-poppins text-[14px] leading-[22px] lg:max-w-[374px] text-center lg:text-start max-w-[100%] md:max-w-[60%]">
                Easily book appointments, track health records, get care
                reminders, and shop pet essentials—all in one app.
              </p>
            </div>
            {/* Buttons */}
            <div className="flex gap-4 mt-7 flex-col w-full items-center lg:items-start lg:flex-row">
              <button
                className="flex px-[10px] py-[8px] gap-2 rounded-[12px] border border-black/5 bg-[#F6DF8F4D] font-poppins text-[16px] font-medium justify-center w-[276px]"
                onClick={handleOpenDownloadNav}
              >
                <Image src={apple} alt="Apple" height={26} width={26} /> Download Calico APP
              </button>
              <button
                className="flex px-[10px] py-[8px] gap-2 rounded-[12px] border border-black/5 bg-[#F6DF8F4D] font-poppins text-[16px] font-medium justify-center w-[276px]"
                onClick={handleOpenDownloadNav}
              >
                <Image src={android} alt="Android" height={26} width={26} /> Download Calico APP
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
              <p className="text-[#000000B2] font-poppins text-[14px] leading-[22px] lg:max-w-[374px] text-center lg:text-start max-w-[100%] md:max-w-[60%]">
                Manage appointments, grow your practice, and connect with pet
                parents — all in one platform.
              </p>
            </div>
            {/* Buttons */}
            <div className="flex gap-4 mt-7 flex-col w-full items-center lg:items-start lg:flex-row">
              <button
                className="flex px-[10px] py-[8px] gap-2 rounded-[12px] border border-black/5 bg-[#B1E6FF4D] font-poppins text-[16px] font-medium justify-center w-[276px]"
                onClick={handleOpenDownloadNav}
              >
                <Image src={apple} alt="Apple" height={26} width={26} /> Download Calico Business
              </button>
              <button
                className="flex px-[10px] py-[8px] gap-2 rounded-[12px] border border-black/5 bg-[#B1E6FF4D] font-poppins text-[16px] font-medium justify-center w-[276px]"
                onClick={handleOpenDownloadNav}
              >
                <Image src={android} alt="Android" height={26} width={26} /> Download Calico Business
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — order-first on mobile (top), lg:order-last (right side on desktop) */}
        <div className="order-first lg:order-last flex flex-col items-center w-full lg:w-auto pt-8 lg:pt-0">
          {/* desktop variant on lg screens, mobile variant on smaller screens */}
          <div className="hidden lg:block">
            <PromoVideoCard variant="desktop" />
          </div>
          <div className="block lg:hidden w-full">
            <PromoVideoCard variant="mobile" />
          </div>
        </div>
      </div>
    </div>
  );
}
