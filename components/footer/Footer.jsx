import Link from "next/link";
import BookSection from "./BookSection";
import { footerLink } from "./data";
import Image from "next/image";
import { headland_one, inter } from "@/app/fonts";

export default function Footer() {
  return (
    <footer className="mt-[50px] bg-[#358681] p-4 py-10 sm:mt-[100px] md:p-16">
      <div className="inner_section">
        <div className="inner_section">
          <BookSection />
        </div>
        <div className="mt-10 flex flex-col justify-between gap-5 lg:flex-row">
          {footerLink.map((section, index) => (
            <div key={index} className="mb-4">
              <h2
                className={`mb-6 text-xl font-semibold leading-[29px] text-neutral-100 ${inter.className}`}
              >
                {section.title}
              </h2>
              <ul className="flex flex-col gap-4">
                {section.children.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    {item.icon && (
                      <Image
                        width="16"
                        height="16"
                        src={item.icon}
                        alt={item.text}
                        className="mr-2 inline-block h-4 w-4"
                      />
                    )}
                    <a
                      href={item.slug}
                      className={`text-base font-medium leading-normal text-neutral-100 ${inter.className}`}
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-[72px] flex min-h-[62px] w-full flex-col items-start justify-start gap-[30px]">
          <div className="h-[0px] w-full border border-neutral-100"></div>
          <div className="flex w-full flex-col items-start justify-between gap-5 md:flex-row md:items-center">
            <div className="flex items-center justify-start gap-2">
              <div className="relative h-8 w-[35px]">
                <div className="absolute left-0 top-0 h-6 w-6 rounded-br-2xl rounded-tl-2xl rounded-tr-2xl bg-blue-800" />
                <div className="absolute left-[11px] top-[8px] h-6 w-6 rounded-bl-2xl rounded-tl-2xl rounded-tr-2xl bg-teal-600" />
              </div>
              <div
                className={`text-xl font-normal text-neutral-100 ${headland_one.className}`}
              >
                Therapist X
              </div>
            </div>
            <div
              className={`flex items-start justify-start gap-2.5 text-base font-medium leading-normal text-neutral-100 ${inter.className}`}
            >
              <span>Copyright</span>
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="u:copyright">
                    <path
                      id="Vector"
                      d="M11 9H13C13.2652 9 13.5196 9.10536 13.7071 9.29289C13.8946 9.48043 14 9.73478 14 10C14 10.2652 14.1054 10.5196 14.2929 10.7071C14.4804 10.8946 14.7348 11 15 11C15.2652 11 15.5196 10.8946 15.7071 10.7071C15.8946 10.5196 16 10.2652 16 10C16 9.20435 15.6839 8.44129 15.1213 7.87868C14.5587 7.31607 13.7957 7 13 7H11C10.2044 7 9.44129 7.31607 8.87868 7.87868C8.31607 8.44129 8 9.20435 8 10V14C8 14.7956 8.31607 15.5587 8.87868 16.1213C9.44129 16.6839 10.2044 17 11 17H13C13.7957 17 14.5587 16.6839 15.1213 16.1213C15.6839 15.5587 16 14.7956 16 14C16 13.7348 15.8946 13.4804 15.7071 13.2929C15.5196 13.1054 15.2652 13 15 13C14.7348 13 14.4804 13.1054 14.2929 13.2929C14.1054 13.4804 14 13.7348 14 14C14 14.2652 13.8946 14.5196 13.7071 14.7071C13.5196 14.8946 13.2652 15 13 15H11C10.7348 15 10.4804 14.8946 10.2929 14.7071C10.1054 14.5196 10 14.2652 10 14V10C10 9.73478 10.1054 9.48043 10.2929 9.29289C10.4804 9.10536 10.7348 9 11 9ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"
                      fill="#F7F7F7"
                    />
                  </g>
                </svg>
              </span>
              <span>Therapist X</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
