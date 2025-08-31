// components/DoubleDiscount.tsx
import Image from "next/image";
import wave from "../../public/gif/wave.gif";
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
            <div className="relative z-10 flex flex-col lg:flex-row  items-center  justify-between max-w-[920px] mx-auto py-[112px]">

                {/* Cat + Circle + Floating SVG */}
                <div className="relative flex  ">
                    {/* Purple circle behind cat */}

                    {/* Decorative SVG */}
                    <Image
                        alt="property"
                        src={property}
                        height={228}
                        width={251}
                        className="absolute -left-35 z-10 -top-25"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="flex"
                    >
                        <Image
                            src={cat}
                            alt="cat"
                            width={256}
                            height={266}
                            className="mix-blend-multiply"
                            style={{ filter: "grayscale(1) brightness(0.5) sepia(1) hue-rotate(250deg)" }}
                        />
                        <Image
                            src={elipse}
                            alt="purple"
                            width={256}
                            height={54}
                            className="relative top-27 -left-62 z-10"
                        />
                    </motion.div>
                    {/* Cat Image */}

                </div>

                {/* Text Section */}
                <div className="flex flex-col gap-2 max-w-[520px]  text-center lg:text-left relative">

                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 200 }}

                    >
                        <Image src={discount} width={84} height={84} alt="discount" className="absolute left-45 -top-14" />
                    </motion.div>


                    <h2 className="font-prata text-[48px] leading-[46px] text-[#20403C]">
                        Double<br /> Discount {" "}
                        <span className="bg-gradient-to-r from-[#AE0386] to-[#8B5CF6] bg-clip-text text-transparent text-[20px] leading-[46px] block lg:inline">
                            More Care, More Savings
                        </span>

                    </h2>

                    <p className="text-[16px] font-medium leading-[36px] text-black/70 capitalize">
                        Enjoy the first-ever pet care app offering assured discounts on every
                        booking. From vet visits to toys, treats, food, litter, and grooming
                        essentials – save more while giving your pet the best.
                    </p>
                </div>
            </div>
        </section>
    );
}
