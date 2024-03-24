import { inter, sofia_sans } from "@/app/fonts";
import Link from "next/link";
import React from "react";

export default function BookSection() {
  return (
    <div className="flex min-h-[426px] w-full flex-col items-center justify-center gap-2 rounded-[30px] border border-neutral-100 bg-neutral-100 px-[24px] md:px-2 py-[32px] md:py-20">
      <div className="flex flex-col items-center justify-start gap-6">
        <div className="flex flex-col items-center justify-start gap-4">
          <div
            className={`text-[32px] md:text-[56px] font-medium text-zinc-800 ${sofia_sans.className}`}
          >
            Book your first session today!
          </div>
          <div
            className={`w-full lg:w-[603px] text-center text-base font-normal text-zinc-800 ${inter.className}`}
          >
            Embark on your path to healing and personal growth by booking your
            first session today! Our compassionate and dedicated team is ready
            to support you on your journey to a happier and healthier life. Take
            the first step towards positive change – schedule your session now.
          </div>
        </div>
        <div className="flex w-full flex-col md:flex-row items-center justify-center gap-4">
          <div className="w-[295px]">
            <Link href="" className={`linkStyleButton2 ${inter.className}`}>
              Book an appointment
            </Link>
          </div>
          <div className="w-[295px]">
            <Link href="" className={`linkStyleButtonTrans ${inter.className}`}>
              Browse all specialties
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
