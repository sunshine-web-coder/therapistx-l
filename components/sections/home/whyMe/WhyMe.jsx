import React from "react";
import whyMeImg from "../../../../assets/why_me.png";
import Image from "next/image";
import { inter, sofia_sans } from "@/app/fonts";
import Link from "next/link";

export default function WhyMe() {
  return (
    <div className="relative">
      <div className="absolute h-[500px] w-full bg-slate-200 px-14 sm:h-[520px] md:h-[700px] lg:h-full lg:bg-[#f7f7f7]" />
      <div className="">
        <div className="inner_section relative top-0 flex flex-col items-center justify-between gap-10 lg:top-[-60px] lg:flex-row">
          <div className="flex w-full flex-col gap-4 sm:w-[535px]">
            <div className="flex flex-col gap-6">
              <div
                className={`flex h-[19px] items-center justify-start gap-6 text-base font-normal text-blue-800 ${inter.className}`}
              >
                <span>02</span>
                <div className="h-[0px] w-10 border border-blue-800"></div>
                <span>WHY ME</span>
              </div>
              <h3
                className={`text-[32px] font-medium leading-[60px] text-zinc-800 md:text-[48px] lg:text-[52px] ${sofia_sans.className}`}
              >
                Affordable & private therapy
              </h3>
            </div>
            <p
              className={`w-full text-base font-normal text-zinc-800 md:w-[496px] ${inter.className}`}
            >
              Your mental health is our priority. With affordable and private
              therapy, we aim to empower you on your path to resilience,
              self-discovery, and lasting positive change.
            </p>

            <Link
              href=""
              className={`flex h-[67px] max-w-[295px] items-center justify-center rounded-[63px] bg-teal-600 px-12 py-8 text-base font-bold text-white md:h-[83px] ${inter.className}`}
            >
              <span>Book an appointment</span>
            </Link>
          </div>
          <div className="w-full sm:w-[646px]">
            <Image
              width="auto"
              height="auto"
              src={whyMeImg}
              className="relative w-full rounded-[32px] border"
              alt="why_img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
