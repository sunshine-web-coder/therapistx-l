import Image from "next/image";
import aboutImg from "../../../../assets/about_img.png";
import { inter, sofia_sans } from "@/app/fonts";

export default function About() {
  return (
    // <div className="inner_section flex flex-col-reverse lg:flex-row items-center justify-between gap-10 md:gap-16">
    //   <div className="max-w-[646px]">
    //     <Image
    //       src={aboutImg}
    //       width="646"
    //       height="712"
    //       alt="banner_img"
    //       className="relative z-20 w-full rounded-[32px]"
    //     />
    //   </div>

    //   <div className="flex max-w-[535px] items-end justify-end">
    //     <div className="min-h-[200px] md:min-h-[336px] w-full">
    //       <div
    //         className={`flex h-[19px] w-full items-start justify-start gap-6 text-base font-normal text-blue-800 ${inter.className}`}
    //       >
    //         <div className="flex items-center justify-start gap-6">
    //           <div>01</div>
    //           <div className="h-[0px] w-10 border border-blue-800"></div>
    //         </div>
    //         <div>ABOUT</div>
    //       </div>
    //       <div
    //         className={`mt-[24px] w-full text-[32px] md:text-[56px] font-medium leading-[50px] md:leading-[70px] text-zinc-800 ${sofia_sans.className}`}
    //       >
    //         I’m Clara, a dedicated therapist with 10+ years of experience
    //       </div>
    //       <p
    //         className={`"max-w-[496px] mt-4 text-base font-normal text-zinc-800 ${inter.className}`}
    //       >
    //         Passionate about fostering mental well-being, I bring a wealth of
    //         expertise to help individuals navigate their unique paths towards
    //         healing and personal growth. Together, let&apos;s embark on a
    //         journey to nurture your mental health and unlock your full
    //         potential.
    //       </p>
    //     </div>
    //   </div>
    // </div>
    // <div className="py-[64px] lg:py-[140px] border border-red-500 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 md:gap-16">
    //   <div className="max-w-[646px]">
    //     <Image
    //       src={aboutImg}
    //       width="646"
    //       height="712"
    //       alt="banner_img"
    //       className="h-[378.04px] sm:h-[712px] w-full rounded-[32px]"
    //     />
    //   </div>

    //   <div className="flex max-w-[535px] items-end justify-end">
    //     <div className="min-h-[200px] md:min-h-[336px] w-full">
    //       <div
    //         className={`flex h-[19px] w-full items-start justify-start gap-6 text-base font-normal text-blue-800 ${inter.className}`}
    //       >
    //         <div className="flex items-center justify-start gap-6">
    //           <div>01</div>
    //           <div className="h-[0px] w-10 border border-blue-800"></div>
    //         </div>
    //         <div>ABOUT</div>
    //       </div>
    //       <div
    //         className={`mt-[24px] w-full text-[32px] md:text-[56px] font-medium leading-[50px] md:leading-[70px] text-zinc-800 ${sofia_sans.className}`}
    //       >
    //         I’m Clara, a dedicated therapist with 10+ years of experience
    //       </div>
    //       <p
    //         className={`"max-w-[496px] mt-4 text-base font-normal text-zinc-800 ${inter.className}`}
    //       >
    //         Passionate about fostering mental well-being, I bring a wealth of
    //         expertise to help individuals navigate their unique paths towards
    //         healing and personal growth. Together, let&apos;s embark on a
    //         journey to nurture your mental health and unlock your full
    //         potential.
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
}
