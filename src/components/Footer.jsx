import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/calico-logo.svg";
import cat from "../../public/icons/catIcon.svg";
import instagram from "../../public/icons/instagramIcon.svg";
import linked from "../../public/icons/linkedinIcon.svg";
import youtube from "../../public/icons/youtube.svg";
import facebook from "../../public/icons/facebook.svg";
import x from "../../public/icons/twitter.svg";

export default function Footer() {
    return (
        <footer className="w-full bg-[#FFF5E5] px-6 lg:px-0 py-16 flex justify-center">
            <div className="w-full max-w-[1160px] flex flex-col gap-[46px]">
                {/* Top Row */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
                    {/* Left side - Logo */}
                    <div className="flex flex-col gap-4">
                        <Image
                            src={logo}
                            alt="Calico Logo"
                            width={110}
                            height={32.079}
                            className="h-auto w-[120px]"
                        />
                    </div>

                    {/* Right side tagline */}
                    <p className="text-[#000000] text-[16px] md:text-[20px] font-medium font-poppins leading-[36px]">
                        Smart Pet Care, Simplified.
                    </p>
                </div>

                {/* Divider */}
                <div className="w-full border-t border-[#0000001A]" />

                {/* Middle Section */}
                <div className="flex flex-col lg:flex-row justify-between gap-12">
                    {/* Download Links */}
                    <div className="flex flex-col gap-3 font-poppins">
                        <h3 className="font-medium text-[#000000] text-[14px]">Download Links</h3>
                        <Link href="#" className=" transition text-[14px] font-normal text-[#000000B2]">
                            Calico (iOS)
                        </Link>
                        <Link href="#" className=" transition text-[14px] font-normal text-[#000000B2]">
                            Calico (Android)
                        </Link>
                        <Link href="#" className=" transition text-[14px] font-normal text-[#000000B2]">
                            Calico Business (iOS)
                        </Link>
                        <Link href="#" className=" transition text-[14px] font-normal text-[#000000B2]">
                            Calico Business (Android)
                        </Link>
                    </div>

                    {/* Company Links */}
                    <div className="flex flex-col gap-3 font-poppins">
                        <h3 className="font-medium text-[#000000] text-[14px]">Company</h3>
                        <Link href="#" className=" transition text-[14px] font-normal  text-[#000000B2]">Home</Link>
                        <Link href="#" className=" transition text-[14px] font-normal  text-[#000000B2]">About</Link>
                        <Link href="#" className=" transition text-[14px] font-normal  text-[#000000B2]">Features</Link>
                        <Link href="#" className=" transition text-[14px] font-normal  text-[#000000B2]">Contact us</Link>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-8 font-poppins">
                        <div>
                            <h3 className="font-medium text-[#000000] text-[14px]">Contact</h3>
                            <p className=" transition text-[14px] font-normal  text-[#000000B2]">2nd Stage, Indiranagar, Bengaluru, <br /> Karnataka 560008</p>
                        </div>
                        <div>
                            <p className=" transition text-[14px] font-normal  text-[#000000B2] mb-2">info@calicopetcare.com</p>
                            <p className=" transition text-[14px] font-normal  text-[#000000B2]">9363298065</p>
                        </div>
                    </div>

                    {/* Extra Info with Icon */}
                    <div className="flex  flex-col justify-between items-end gap-3 max-w-[250px]">
                        <div className="flex gap-4">
                            <Link href="#" aria-label="Instagram">
                                <Image src={instagram} alt="Instagram" width={24} height={24} />
                            </Link>
                            <Link href="#" aria-label="Facebook">
                                <Image src={facebook} alt="Facebook" width={24} height={24} />
                            </Link>
                            <Link href="#" aria-label="YouTube">
                                <Image src={youtube} alt="YouTube" width={24} height={24} />
                            </Link>
                            <Link href="#" aria-label="X">
                                <Image src={x} alt="X" width={24} height={24} />
                            </Link>
                            <Link href="#" aria-label="LinkedIn">
                                <Image src={linked} alt="LinkedIn" width={24} height={24} />
                            </Link>
                        </div>
                        <div className="flex gap-1 ">
                            <Image
                                src={cat}
                                alt="Cat Icon"
                                width={28}
                                height={28}
                            />
                            <div className="text-[14px] text-[#000] font-Poppins text-end font-normal leading-[22px] border-l border-[#00000033] ml-1">
                                The{" "}
                                <span
                                    className="text-[#9747FF]"
                                >
                                    all-in-one app
                                </span>{" "}
                                for pet owners and veterinary professionals.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full border-t border-[#E2E0DA]" />

                {/* Bottom Row */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-sm text-[#1C1B1F]/70 font-poppins">
                    <p>All rights reserved. © 2025 Calico.</p>

                    <div className="flex items-center gap-6">
                        {/* Socials */}
                        {/* Privacy / Terms */}
                        <div className="flex gap-2">
                            <Link href="#">Privacy Policy</Link>
                            <span>|</span>
                            <Link href="#">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
