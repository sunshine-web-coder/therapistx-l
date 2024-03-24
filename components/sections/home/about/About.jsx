import Image from "next/image";
import aboutImg from "../../../../assets/about_img.png";
import { inter, sofia_sans } from "@/app/fonts";

export default function About() {
  return (
    <div className="w-full border bg-slate-200 py-[50px] md:py-[57px] lg:py-[157px]">
      <div className="px-4 sm:px-14">
        <div className="inner_section flex flex-col-reverse items-center justify-between gap-10 lg:flex-row">
          <div className="w-full sm:w-[646px]">
            <Image
              width="auto"
              height="auto"
              src={aboutImg}
              className="relative w-full rounded-[32px] border"
              alt="about_img"
            />
          </div>
          <div className="flex w-full flex-col gap-4 border md:w-[535px]">
            <div className="flex flex-col gap-6">
              <div className={`flex h-[19px] w-[162px] items-center justify-start gap-6 text-base font-normal text-blue-800 ${inter.className}`}>
                <span>01</span>
                <div className="h-[0px] w-10 border border-blue-800"></div>
                <span>ABOUT</span>
              </div>
              <h3 className={`text-[32px] font-medium text-zinc-800 md:text-[48px] lg:text-[52px] ${sofia_sans.className}`}>
                I’m Clara, a dedicated therapist with 10+ years of experience
              </h3>
            </div>
            <p className={`w-full text-base font-normal text-zinc-800 md:w-[496px] ${inter.className}`}>
              Passionate about fostering mental well-being, I bring a wealth of
              expertise to help individuals navigate their unique paths towards
              healing and personal growth. Together, let&apos;s embark on a
              journey to nurture your mental health and unlock your full
              potential.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
