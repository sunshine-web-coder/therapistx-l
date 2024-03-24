"use client";

import { headland_one, inter } from "@/app/fonts";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const menuLink = [
    {
      label: "Home",
      slug: "/",
    },
    {
      label: "About",
      slug: "/",
    },
    {
      label: "Blog",
      slug: "/",
    },
    {
      label: "Cart (2)",
      slug: "/",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <header className="fixed z-50 bg-[#F7F7F7] py-6 md:relative">
      <div
        className={`pointer-events-none fixed inset-0 left-0 right-0 top-0 z-40 h-screen w-full bg-black/50 md:hidden ${isOpen ? "opacity-1" : "opacity-0"}`}
      />
      <div className="mx-auto flex w-full max-w-[1312px] items-center justify-between gap-5 self-center max-md:max-w-full max-md:flex-wrap">
        <span className="my-auto flex items-stretch gap-2">
          <svg
            width="35"
            height="33"
            viewBox="0 0 35 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group 1">
              <path
                id="Rectangle 2"
                d="M0 12.5C0 5.87258 5.37258 0.5 12 0.5C18.6274 0.5 24 5.87258 24 12.5C24 19.1274 18.6274 24.5 12 24.5H0V12.5Z"
                fill="#2F4DB8"
              />
              <path
                id="Rectangle 1"
                d="M11 20.5C11 13.8726 16.3726 8.5 23 8.5C29.6274 8.5 35 13.8726 35 20.5V32.5H23C16.3726 32.5 11 27.1274 11 20.5Z"
                fill="#358681"
              />
            </g>
          </svg>
          <div
            className={`my-auto grow self-center whitespace-nowrap text-xl text-black ${headland_one.className}`}
          >
            Therapist X
          </div>
        </span>
        <div className="flex items-center justify-between gap-5 self-stretch max-md:max-w-full max-md:flex-wrap">
          <nav
            className={`fixed left-[-100%] right-0 top-[0px] z-50 flex h-screen w-full flex-col items-start justify-start gap-0 self-stretch bg-white md:bg-transparent pt-8 md:pt-0 sm:w-[450px] md:relative md:left-0 md:top-0 md:h-full md:w-full md:flex-row md:items-center md:justify-between md:gap-5 ${
              isOpen ? "left-[0%]" : ""
            }`}
          >
            <div className="mb-5 flex w-full items-center justify-between pl-4 pr-5 sm:pl-[50px] md:hidden">
              <span className="my-auto flex items-stretch gap-2">
                <svg
                  width="35"
                  height="33"
                  viewBox="0 0 35 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Group 1">
                    <path
                      id="Rectangle 2"
                      d="M0 12.5C0 5.87258 5.37258 0.5 12 0.5C18.6274 0.5 24 5.87258 24 12.5C24 19.1274 18.6274 24.5 12 24.5H0V12.5Z"
                      fill="#2F4DB8"
                    />
                    <path
                      id="Rectangle 1"
                      d="M11 20.5C11 13.8726 16.3726 8.5 23 8.5C29.6274 8.5 35 13.8726 35 20.5V32.5H23C16.3726 32.5 11 27.1274 11 20.5Z"
                      fill="#358681"
                    />
                  </g>
                </svg>
                <div
                  className={`my-auto grow self-center whitespace-nowrap text-xl text-black ${headland_one.className}`}
                >
                  Therapist X
                </div>
              </span>
              <svg
                onClick={handleClose}
                className={`cursor-pointer ${isOpen ? "block" : "hidden"}`}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.4099 12L19.7099 5.71C19.8982 5.5217 20.004 5.2663 20.004 5C20.004 4.7337 19.8982 4.47831 19.7099 4.29C19.5216 4.1017 19.2662 3.99591 18.9999 3.99591C18.7336 3.99591 18.4782 4.1017 18.2899 4.29L11.9999 10.59L5.70994 4.29C5.52164 4.1017 5.26624 3.99591 4.99994 3.99591C4.73364 3.99591 4.47824 4.1017 4.28994 4.29C4.10164 4.47831 3.99585 4.7337 3.99585 5C3.99585 5.2663 4.10164 5.5217 4.28994 5.71L10.5899 12L4.28994 18.29C4.19621 18.383 4.12182 18.4936 4.07105 18.6154C4.02028 18.7373 3.99414 18.868 3.99414 19C3.99414 19.132 4.02028 19.2627 4.07105 19.3846C4.12182 19.5064 4.19621 19.617 4.28994 19.71C4.3829 19.8037 4.4935 19.8781 4.61536 19.9289C4.73722 19.9797 4.86793 20.0058 4.99994 20.0058C5.13195 20.0058 5.26266 19.9797 5.38452 19.9289C5.50638 19.8781 5.61698 19.8037 5.70994 19.71L11.9999 13.41L18.2899 19.71C18.3829 19.8037 18.4935 19.8781 18.6154 19.9289C18.7372 19.9797 18.8679 20.0058 18.9999 20.0058C19.132 20.0058 19.2627 19.9797 19.3845 19.9289C19.5064 19.8781 19.617 19.8037 19.7099 19.71C19.8037 19.617 19.8781 19.5064 19.9288 19.3846C19.9796 19.2627 20.0057 19.132 20.0057 19C20.0057 18.868 19.9796 18.7373 19.9288 18.6154C19.8781 18.4936 19.8037 18.383 19.7099 18.29L13.4099 12Z"
                  fill="black"
                />
              </svg>
            </div>
            {menuLink.map((link) => (
              <Link
                key={link.label}
                className={`w-full p-2 px-4 text-base font-normal text-zinc-800 sm:px-[50px] md:max-w-max md:p-2 md:px-0 ${inter.className}`}
                href={link.slug}
                onClick={handleClose}
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-4 w-full px-4 sm:px-[50px] md:mt-0 md:hidden md:px-0 lg:block">
              <Link
                href=""
                onClick={handleClose}
                className={`flex h-[67px] w-full items-center justify-center whitespace-nowrap rounded-[63px] border bg-teal-600 px-8 py-4 text-base font-bold text-white md:h-[51px] ${inter.className}`}
              >
                <span>Book an appointment</span>
              </Link>
            </div>
          </nav>
          <Link
            className={`text-base font-normal text-zinc-800 md:hidden ${inter.className}`}
            href=""
          >
            Cart (2)
          </Link>

          <svg
            onClick={handleOpen}
            className="block cursor-pointer md:hidden"
            width="20"
            height="12"
            viewBox="0 0 20 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 2H19C19.2652 2 19.5196 1.89464 19.7071 1.70711C19.8946 1.51957 20 1.26522 20 1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2ZM19 10H1C0.734784 10 0.48043 10.1054 0.292893 10.2929C0.105357 10.4804 0 10.7348 0 11C0 11.2652 0.105357 11.5196 0.292893 11.7071C0.48043 11.8946 0.734784 12 1 12H19C19.2652 12 19.5196 11.8946 19.7071 11.7071C19.8946 11.5196 20 11.2652 20 11C20 10.7348 19.8946 10.4804 19.7071 10.2929C19.5196 10.1054 19.2652 10 19 10ZM19 5H1C0.734784 5 0.48043 5.10536 0.292893 5.29289C0.105357 5.48043 0 5.73478 0 6C0 6.26522 0.105357 6.51957 0.292893 6.70711C0.48043 6.89464 0.734784 7 1 7H19C19.2652 7 19.5196 6.89464 19.7071 6.70711C19.8946 6.51957 20 6.26522 20 6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5Z"
              fill="#333333"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}
