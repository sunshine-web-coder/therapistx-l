import Image from "next/image";
import SchedAppointImg from "../../../../assets/sched_appoint.PNG";
import { inter, sofia_sans } from "@/app/fonts";
import Link from "next/link";

export default function ScheduleAppointment() {
  return (
    <section className="">
      <div className="inner_section relative min-h-[220px] sm:min-h-[342px] md:min-h-[647px]">
        <Image
          src={SchedAppointImg}
          width="1312"
          height="647"
          className="relative md:absolute rounded-tl-[20px] rounded-tr-[20px] md:rounded-tl-[0px] md:rounded-tr-[0px] rounded-[0px] md:rounded-[30px] h-full w-full"
          alt="schedule_img"
        />
        <div className="relative left-0 md:left-[-57px] z-10 h-full pt-0 md:py-[50px]">
          <div className="flex w-full md:w-[750px] flex-col items-center justify-start rounded-bl-[20px] md:rounded-bl-[0px] rounded-br-[20px]  md:rounded-br-[30px] min-h-[553px] rounded-tr-[0px] md:rounded-tr-[30px] md:border bg-teal-600 px-6 sm:px-10 md:px-16 py-10 md:py-0 lg:w-[821px]">
            <div className="min-h-[553px] flex flex-col items-center justify-center">
              <div className="flex flex-col items-start justify-start gap-4">
                <h3 className={`text-[32px] sm:text-[48px] font-medium leading-[40px] sm:leading-[65px] text-neutral-100 md:text-[56px] md:leading-[70px] ${sofia_sans.className}`}>
                  Schedule an in-person or virtual appointment today
                </h3>
                <p className={`w-full md:w-[550px] text-xl font-normal text-neutral-100 ${inter.className}`}>
                  Book your in-person or virtual session today and take the first
                  step towards your well-being. Our flexible scheduling options
                  ensure that you can access the support you need, whether it&apos;s
                  face-to-face or from the comfort of your own space.
                </p>
              </div>
              <div className="mt-6 flex w-full flex-col md:flex-row items-start justify-start gap-4">
                <Link
                  href=""
                  className={`flex h-[67px] w-full items-center justify-center gap-2 rounded-[63px] bg-neutral-100 px-12 md:px-16 py-8 text-base font-bold text-zinc-800 md:h-[83px] md:max-w-[295px] ${inter.className}`}
                >
                  Book an appointment
                </Link>
                <Link
                  href=""
                  className={`flex h-[67px] w-full items-center justify-center gap-2 rounded-[63px] border border-neutral-100 px-12 md:px-16 py-8 text-base font-medium text-neutral-100 md:h-[83px] md:max-w-[295px] ${inter.className}`}
                >
                  Browse all specialties
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
