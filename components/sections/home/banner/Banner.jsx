import { inter, sofia_sans } from "@/app/fonts";
import Image from "next/image";
import bannerImg from "../../../../assets/banner_img.png";
import Link from "next/link";

export default function Banner() {
  const data = [
    {
      number: "30",
      numberSpan: "+",
      desc: "Certificates in physiology",
    },
    {
      number: "10",
      numberSpan: "+",
      desc: "Years of experience",
    },
    {
      number: "100",
      numberSpan: "%",
      desc: "Client satisfaction",
    },
    {
      number: "700",
      numberSpan: "+",
      desc: "Patient helped",
      chgStyle: true,
    },
  ];
  return (
    <div className="relative pt-[150px] md:pt-[100px]">
      <div className="absolute bottom-0 h-[400px] w-full bg-slate-200 lg:h-[450px]" />
      <div className="inner_section relative px-4 sm:px-[38px]">
        <div className="relative flex min-h-[561px] flex-col gap-[60px]">
          <div className="flex flex-col justify-between gap-4 lg:flex-row md:gap-5">
            <div className="w-full lg:max-w-[600px]">
              <h1
                className={`text-left text-[40px] font-semibold leading-[50px] text-zinc-800 md:text-[58px] md:leading-[80px] lg:text-[88px] lg:leading-[100px] ${sofia_sans.className}`}
              >
                Professional guidance for mental health
                <span className="text-[#2F4DB8]">.</span>
              </h1>
            </div>
            <div className="flex w-full flex-col justify-end gap-4 lg:max-w-[567px] md:gap-6">
              <p
                className={`w-full text-left text-xl font-medium text-zinc-800 lg:max-w-[575px] ${inter.className}`}
              >
                Discover expert guidance for mental health, navigating the path
                to wellness with insightful and professional insights.
              </p>
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <Link
                  href=""
                  className={`flex h-[67px] w-full items-center justify-center rounded-[63px] bg-teal-600 px-12 py-8 text-base font-bold text-white md:h-[83px] ${inter.className}`}
                >
                  <span>Book an appointment</span>
                </Link>
                <Link
                  href=""
                  className={`flex h-[67px] w-full items-center justify-center rounded-[63px] border border-teal-600 bg-[#F7F7F7] px-12 py-8 text-base font-bold text-zinc-800 md:h-[83px] ${inter.className}`}
                >
                  <span>Browse all specialties</span>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <Image
              width="auto"
              height="auto"
              src={bannerImg}
              className="relative w-full rounded-[32px] border"
              alt="img_banner"
            />
            <div className="border-b border-zinc-400 py-[40px] md:py-[60px]">
              <div className="grid grid-cols-2 justify-between gap-4 md:flex">
                {data.map((list) => (
                  <div
                    key={list.number}
                    className="w-full text-center md:max-w-max md:text-left"
                  >
                    <p
                      className={`text-[56px] font-medium text-zinc-800 ${sofia_sans.className}`}
                    >
                      {list.number}
                      <span className="font-normal text-blue-800">
                        {list.numberSpan}
                      </span>
                    </p>
                    <p
                      className={`text-base font-normal text-zinc-800 ${inter.className}`}
                    >
                      {list.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
