"use client";
import Image from "next/image";
import LogoDownload from "../../public/images/logoDownloadsec.svg";
import platform from "../../public/images/platforms.svg";
import appIconPhoneWeb from "../../public/images/calico-petcare-app-icon-phone-web.webp";
import appIconPhoneTablet from "../../public/images/calico-petcare-app-icon-phone-tablet.webp";
import appIconPhoneMobile from "../../public/images/calico-petcare-app-icon-phone-mobile.webp";

/**
 * PromoVideoCard - Reusable promotional video card component
 * @param {string} variant - "desktop" | "mobile" | "homeMenu"
 */
export default function PromoVideoCard({ variant = "desktop" }) {
  const isDesktop = variant === "desktop";
  const isMobileOrHomeMenu = variant === "mobile" || variant === "homeMenu";

  return (
    <div
      className={
        isDesktop
          ? "w-[466px] h-[404px] relative overflow-hidden rounded-[42px]"
          : "w-[100%] md:w-[75%] h-[274px] md:h-[240px] relative overflow-hidden rounded-[24px]"
      }
    >
      <video
        src="/videos/download-video.webm"
        autoPlay
        muted
        loop
        playsInline
        className={
          isDesktop
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

      {/* Desktop image */}
      {isDesktop && (
        <Image
          src={appIconPhoneWeb}
          alt="Calico App"
          className="bottom-0 absolute right-0 rounded-br-[42px] object-contain h-full w-auto"
        />
      )}

      {/* Mobile & Home Menu - Tablet image (visible on md screens) */}
      {isMobileOrHomeMenu && (
        <>
          <Image
            src={appIconPhoneTablet}
            alt="Calico App"
            className="hidden md:block bottom-0 absolute right-0 rounded-br-[24px] object-contain h-full w-auto"
          />
          {/* Mobile image (visible on small screens) */}
          <Image
            src={appIconPhoneMobile}
            alt="Calico App"
            className="block md:hidden bottom-0 absolute right-0 rounded-br-[24px] object-contain h-full w-auto"
          />
        </>
      )}
    </div>
  );
}
