import React from "react";
import whyMeImg from "../../../../assets/why_me.png";
import Image from "next/image";
import { inter, sofia_sans } from "@/app/fonts";
import Link from "next/link";

export default function WhyMe() {
  return (
    <div className="inner_section flex flex-col items-center justify-between gap-10 lg:flex-row lg:gap-16">
      <div className="flex max-w-[535px] items-end justify-end">
        <div className="min-h-[200px] md:min-h-[336px] w-full">
          <div
            className={`flex h-[19px] w-full items-start justify-start gap-6 text-base font-normal text-blue-800 ${inter.className}`}
          >
            <div className="flex items-center justify-start gap-6">
              <div>02</div>
              <div className="h-[0px] w-10 border border-blue-800"></div>
            </div>
            <div>WHY ME</div>
          </div>
          <div
            className={`mt-[24px] max-w-[535px] text-[40px] md:text-[56px] font-medium leading-[50px] md:leading-[70px] text-zinc-800 ${sofia_sans.className}`}
          >
            Affordable & private therapy
          </div>
          <p
            className={`mt-4 max-w-[496px] text-base font-normal text-zinc-800 ${inter.className}`}
          >
            Your mental health is our priority. With affordable and private
            therapy, we aim to empower you on your path to resilience,
            self-discovery, and lasting positive change.
          </p>
          <div className="mt-[24px] max-w-[295px]">
            <Link href="" className={`linkStyleButton2 ${inter.className}`}>
              Book an appointment
            </Link>
          </div>
        </div>
      </div>
      <div className="relative z-20 max-w-[646px]">
        <Image
          src={whyMeImg}
          width="646"
          height="712"
          alt="banner_img"
          className="rounded-[32px] w-full"
        />
      </div>
    </div>
  );
}
