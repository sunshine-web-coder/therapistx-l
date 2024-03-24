import React from "react";
import testyImg from "../../../../assets/testimonial.PNG";
import Image from "next/image";
import { inter } from "@/app/fonts";
import TheSlider from "./TheSlider";

export default function Testimonial() {
  return (
    <section className="my-[74px] bg-slate-200 py-16">
      <div className="inner_section flex flex-col items-center justify-between gap-[129px] border lg:flex-row">
        <div className="flex w-full md:w-[535px] flex-col gap-6">
          <div className={`flex h-[19px] items-center justify-start gap-6 text-base font-normal text-blue-800 ${inter.className}`}>
            <span>04</span>
            <div className="h-[0px] w-10 border border-blue-800"></div>
            <span>TESTIMONIALS</span>
          </div>
          <div className="relative">
            <TheSlider />
          </div>
          <div className="h-[0px] w-full border border-zinc-400" />
        </div>
        <div className="relative sm:h-[590px] w-full md:w-[646px] items-center rounded-[32px]">
          <Image
            width="auto"
            height="auto"
            src={testyImg}
            className="relative sm:absolute h-[339px] sm:h-[590px] w-[646px] rounded-tl-[20px] rounded-tr-[20px] sm:rounded-[32px]"
            alt="testimonial_img"
          />
          <div className="relative z-10 flex h-full w-full flex-col items-center justify-end bg-transparent sm:p-6 sm:pb-16">
            <div className="relative mx-auto z-10 flex min-h-[269px] sm:min-h-[211px] w-full sm:max-w-[454px] flex-col items-start justify-between gap-2 rounded-bl-[20px] rounded-br-[20px] sm:rounded-[30px] bg-white px-6 py-8">
              <h3 className={`text-[32px] font-semibold leading-10 text-zinc-800 ${inter.className}`}>
                “Clara listened carefully”
              </h3>
              <p className={`max-w-[406px] text-base font-normal text-zinc-800 ${inter.className}`}>
                listened carefully, creating a safe space for open expression
                and fostering a trusting therapeutic relationship.
              </p>
              <div className={`flex items-start justify-start gap-4 text-base font-medium text-zinc-800 ${inter.className}`}>
                <span>Kyle Jacobs</span>
                <span>New york, NY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
