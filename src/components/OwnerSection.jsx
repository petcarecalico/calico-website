import Image from "next/image";
import adminSc from "../../public/images/adminSc.png";
import signature from "../../public/icons/signature.svg";
import apple from "../../public/icons/apple.svg";
import android from "../../public/icons/android.svg";
import ellipse from "../../public/icons/ellipse.svg";
import star from "../../public/icons/star.svg";

export default function OwnerSection() {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div className="w-full bg-[#F6DF8F4D] rounded-t-[462px] flex flex-col items-center px-20  pt-35 pb-0">
        {/* Top Content */}
        <div className="flex flex-col  items-center justify-between gap-12 max-w-[1160px]">
          {/* Text Content */}
          <div className="flex flex-col items-start gap-6 w-full">
            <div className="flex flex-col items-center gap-6 w-full text-center">
              <div className="flex flex-col items-center w-full max-w-[626px]">
                <p className="text-[#000000] font-poppins text-[24px] font-medium leading-[24px] mb-5">
                  For Vets, clinics & Hospitals
                </p>

                <h2 className="text-[#20403C] text-[48px]  font-poppins font-medium leading-[64px] text-center">
                  First-Ever Mobile App with <br /> Built-In Admin Panel
                </h2>

                {/* Signature */}
                <div className="self-end  relative ">
                  <Image src={signature} alt="signature" width={262} height={68} className="relative -top-4" />
                </div>
              </div>
            </div>

            {/* Paragraph */}
          </div>

          <div className="flex">
            <div className="max-w-[560px]">
              <p className="text-[#000000] font-poppins text-[18px] font-normal leading-[34px] mb-6 mt-8 ">
                Calico is the first-ever mobile platform that allows vets, clinics,
                and hospitals to manage all operations directly from their phone –
                no need for outdated, expensive desktop software. From appointments
                to billing, Calico keeps everything in one place.
              </p>

              {/* Buttons */}
              <div className="flex flex-col gap-4 max-w-[336px]">
                <button className="flex items-center gap-3 px-3 py-2 rounded-[12px] bg-[#A16207] shadow-[4px_4px_0px_0px_#000] text-white font-poppins font-[500] text-[20px] transition-transform duration-200 hover:scale-105">
                  Download Calico Bussiness  <Image src={apple} alt="Apple Store" width={20} height={20} />
                </button>

                <button className="flex items-center gap-3 px-3 py-2 rounded-[12px] bg-[#A16207] shadow-[4px_4px_0px_0px_#000] text-white font-poppins font-[500] text-[20px] transition-transform duration-200 hover:scale-105">
                  Download Calico Bussiness 
                  <Image src={android} alt="Google Play" width={20} height={20} />
                </button>
              </div>
            </div>

            {/* Phone Image */}
            <div>
              <div className="relative flex justify-center lg:justify-end">
                <Image
                  src={adminSc}
                  alt="App Preview"
                  className="w-[324px]  h-auto relative -mb-[120px] lg:-mb-[180px] -top-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* White Stats Section */}
      <div className="w-full max-w-[1440px] bg-white flex flex-col lg:flex-row justify-center items-center gap-16 px-6 lg:px-20 py-20">
        <div className="flex  gap-[98px] max-w-[770px]">
          {/* Stat 1 */}
          <div className="flex flex-col gap-3 relative">
            <span className="text-[#20403C] text-[32px] font-poppins font-semibold leading-[34px]">
              60%
            </span>
            <p className="text-black/70 font-poppins text-[14px] leading-[20px] max-w-[318px]">
              Improved patient retention through automated reminders, follow-ups
              & health records.
            </p>
            <Image
              src={ellipse}
              alt="Ellipse Graphic"
              className="absolute left-[-50px] top-[-40px] w-[234px] h-[198px]"
            />
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col gap-3">
            <span className="text-[#20403C] text-[32px] font-poppins font-semibold leading-[34px]">
              70%
            </span>
            <p className="text-black/70 font-poppins text-[14px] leading-[20px] max-w-[318px]">
              Revenue growth potential with optimized schedules, reduced no-shows
              & better staff management.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col gap-3">
            <span className="text-[#20403C] text-[32px] font-poppins font-semibold leading-[34px]">
              45%
            </span>
            <p className="text-black/70 font-poppins text-[14px] leading-[20px] max-w-[318px]">
              Time saved in patient management with real-time queue &
              appointment tracking.
            </p>
          </div>
        </div>

        {/* Star + Callout */}
        <div className="flex flex-col items-center gap-6 relative">
          <Image src={star} alt="Star" width={80} height={80} className="absolute -top-10 -left-12" />
          <p className="text-[#AE0386] font-poppins text-[16px] font-semibold text-center max-w-[240px]">
            Run your entire practice & Business from your pocket.
          </p>
        </div>
      </div>
    </section>
  );
}
