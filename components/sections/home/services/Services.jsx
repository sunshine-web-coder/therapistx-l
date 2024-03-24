import { inter, sofia_sans } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import { data } from "./data";

export default function Services() {
  return (
    <section className="my-[100px]">
      <div className="inner_section">
        <div className="mx-auto flex max-w-[657px] flex-col items-center justify-start gap-6">
          <div
            className={`flex h-[19px] w-[162px] items-center justify-start gap-6 text-base font-normal text-blue-800 ${inter.className}`}
          >
            <span>03</span>
            <div className="h-[0px] w-10 border border-blue-800"></div>
            <span>SERVICES</span>
          </div>
          <div
            className={`text-center text-[32px] font-medium leading-[50px] text-zinc-800 md:text-[48px] md:leading-[70px] lg:text-[56px] ${sofia_sans}`}
          >
            Experienced in different types of therapy
          </div>
        </div>
        <div className="mt-10">
          <div className="flex min-h-[682px] flex-col items-center gap-[64px] sm:gap-[19px] lg:flex-row lg:items-start">
            {data.map((tData) => (
              <div key={tData.title} className="h-full w-full sm:w-[424px]">
                <div className="h-[396.39px] sm:h-[490px]">
                  <Image
                    width="424"
                    height="490"
                    src={tData.img}
                    className="h-full w-full"
                    alt="img"
                  />
                </div>
                <div
                  className={`mt-6 text-2xl font-semibold text-zinc-800 md:text-[32px] ${inter.className}`}
                >
                  {tData.title}
                </div>
                <div
                  className={`mt-4 line-clamp-3 max-w-[406px] text-base font-normal text-zinc-800 ${inter.className}`}
                >
                  {tData.desc}
                </div>
                <Link
                  href={tData.slug}
                  className={`mt-6 flex h-10 max-w-[114px] items-center justify-center gap-2 py-2 text-base font-normal text-teal-600 ${inter.className}`}
                >
                  <span>Read more</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="u:arrow-up-right">
                      <path
                        id="Vector"
                        d="M17.92 6.62C17.8185 6.37565 17.6243 6.18147 17.38 6.08C17.2598 6.02876 17.1307 6.00158 17 6H7C6.73478 6 6.48043 6.10536 6.29289 6.29289C6.10536 6.48043 6 6.73478 6 7C6 7.26522 6.10536 7.51957 6.29289 7.70711C6.48043 7.89464 6.73478 8 7 8H14.59L6.29 16.29C6.19627 16.383 6.12188 16.4936 6.07111 16.6154C6.02034 16.7373 5.9942 16.868 5.9942 17C5.9942 17.132 6.02034 17.2627 6.07111 17.3846C6.12188 17.5064 6.19627 17.617 6.29 17.71C6.38296 17.8037 6.49356 17.8781 6.61542 17.9289C6.73728 17.9797 6.86799 18.0058 7 18.0058C7.13201 18.0058 7.26272 17.9797 7.38458 17.9289C7.50644 17.8781 7.61704 17.8037 7.71 17.71L16 9.41V17C16 17.2652 16.1054 17.5196 16.2929 17.7071C16.4804 17.8946 16.7348 18 17 18C17.2652 18 17.5196 17.8946 17.7071 17.7071C17.8946 17.5196 18 17.2652 18 17V7C17.9984 6.86932 17.9712 6.74022 17.92 6.62Z"
                        fill="#358681"
                      />
                    </g>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-10 flex items-center justify-center">
            <Link href="" className={`flex h-[67px] sm:h-[83px] w-[293px] items-center justify-center gap-2 rounded-[63px] border border-teal-600 px-16 py-8 text-base font-medium text-zinc-800 ${inter.className}`}>
              <span>Browse all specialties</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
