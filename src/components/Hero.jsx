import Image from "next/image";


export default function Hero() {



    return (
        <section className="flex flex-col items-center text-center px-4 md:px-10 lg:px-20 pt-[20px] md:pt-[18px] lg:pt-12 pb-10 max-w-[1440px] mx-auto" id="hero">
            {/* Badge */}
            <div className="flex px-[30px] py-[10px] justify-center items-center gap-[10px] 
                rounded-[18px] bg-[rgba(139,92,246,0.30)] mb-6 animate-fade-down">
                <span className="text-black font-poppins lg:text-[16px] text-[12px] sm:text-[14px] leading-[32px] lg:leading-8 font-medium">
                    Smart Pet Care, Simplified
                </span>
            </div>




            {/* Heading */}
            <h1 className="lg:max-w-[868px] max-w-[280px] md:max-w-[554px] text-black font-poppins lg:text-[24px] text-[16px] md:text-[18px]  font-medium lg:leading-[75%] leading-[22px] mb-4 mt-6 animate-fade-up [animation-delay:0.3s]">
                Find Trusted Pet Care & Veterinary Services Near You
            </h1>

            {/* Subtext */}
            <p className="lg:max-w-[868px] max-w-[365px] md:max-w-[554px]  text-[#898989] font-poppins lg:text-[18px] text-[14px] md:text-[16px] font-normal text-center leading-[155%]">
                Calico connects pet parents with verified veterinary clinics, pet
                hospitals, and grooming services. Book vet appointments, schedule
                grooming, get reminders for vaccinations, and track your pet’s health —{" "}
                <span className="text-[#76A013] font-bold capitalize">
                    All In One Platform.
                </span>
            </p>

            {/* Cat + Phone Illustration */}
            <div className="relative lg:mt-5 mt-[30px] md:mt-[24px] flex justify-center items-center">
                <Image
                    src="/images/black-cat.svg"
                    alt="Black Cat"
                    width={660}
                    height={220}
                    className="relative"
                />
            </div>
        </section>
    );
}
