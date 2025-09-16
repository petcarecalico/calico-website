// components/DoubleDiscount.tsx
import Image from "next/image";
import { motion } from "framer-motion";
import elipse from "../../public/images/elipsePurple.svg"
import property from "../../public/images/property.svg";
import discount from "../../public/icons/discount.svg";
import cat from "../../public/images/cat.svg";
export default function DiscountSection() {
    return (
        <section className="relative w-full bg-[#fafcf4] overflow-hidden">
            {/* Background GIF */}
            {/* <div className="absolute inset-0">
                <Image
                    src={wave}
                    alt="wave background"
                    fill
                    className="object-cover object-center bg-[#fafcf4] text-[#fafcf4]"
                    // unoptimized // allows GIF
                />
            </div> */}

            {/* Main Container */}
            <div className="relative z-10 flex flex-col md:flex-row gap-20 md:gap-0 items-center justify-between lg:max-w-[920px] md:max-w-[594px] max-w-[320px] px-4  mx-auto lg:py-[112px] py-[54px]">

                {/* Image Section */}
                <div className="relative flex order-2 md:order-1 justify-center md:justify-start">
                    {/* Purple circle behind cat */}
                    <Image
                        alt="property"
                        src={property}
                        height={228}
                        width={251}
                        className="absolute lg:-left-30 z-10 lg:-top-25 -left-15 md:-left-10  -top-10 lg:w-[250px] lg:h-[220px] w-[142px] h-[128px]"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row  items-center w-full"
                    >
                        <Image
                            src={cat}
                            alt="cat"
                            className="mix-blend-multiply h-[160px] w-[160px]  lg:ml-0 md:ml-8 ml-0 lg:h-[256px] lg:w-[256px]"
                            style={{ filter: "grayscale(1) brightness(0.5) sepia(1) hue-rotate(250deg)" }}
                        />
                        <Image
                            src={elipse}
                            alt="purple"
                            width={256}
                            height={54}
                            className="relative lg:top-27 lg:-left-62 -top-7 left-0 md:top-17 md:-left-40 z-10 h-[34px] w-[186px] lg:w-[256px] lg:h-[54px]"
                        />
                    </motion.div>
                </div>

                {/* Text Section */}
                <div className="flex flex-col gap-2 lg:max-w-[520px] max-w-[360px] text-center md:text-left relative order-1 lg:order-2">
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    >
                        <Image src={discount} width={84} height={84} alt="discount" className="absolute lg:left-45 lg:-top-10  -top-10 left-56 w-[54px] h-[54px] lg:h-[84px] lg:w-[84px]" />
                    </motion.div>

                    <h2 className="font-prata lg:text-[48px] md:text-[24px] text-[24px] lg:leading-[46px]  leading-[24px] text-[#20403C] ">
                        Double<br className="hidden lg:block" />  Discount{" "}
                        <span className="bg-gradient-to-r from-[#AE0386] to-[#8B5CF6] bg-clip-text text-transparent lg:text-[20px] text-[16px] lg:leading-[46px]  leading-[24px] block lg:inline">
                            More Care, More Savings
                        </span>
                    </h2>

                    <p className="text-[14px] font-medium lg:leading-[36px] leading-[24px] text-[#000000B2] capitalize">
                        Enjoy the first-ever pet care app offering assured discounts on every
                        booking. From vet visits to toys, treats, food, litter, and grooming
                        essentials – save more while giving your pet the best.
                    </p>
                </div>
            </div>

        </section>
    );
}
