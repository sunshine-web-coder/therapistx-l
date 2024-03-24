import { inter, sofia_sans } from "@/app/fonts";
import Image from "next/image";
import blogImg from "../../../../assets/blog/articleImg1.png";
import Link from "next/link";
import { data } from "./data";

export default function ArticlesAndResource() {
  return (
    <section className="">
      <div className="inner_section flex flex-col gap-10">
        <div className="flex flex-col md:flex-row gap-[21px] md:gap-5">
          <div className="w-full flex flex-col items-center md:items-start gap-6">
            <div className={`flex h-[19px] items-center justify-start gap-6 text-base font-normal text-blue-800 ${inter.className}`}>
              <span>05</span>
              <div className="h-[0px] w-10 border border-blue-800"></div>
              <span>BLOG</span>
            </div>
            <h3 className={`max-w-[500px] text-[32px] text-center md:text-left font-medium md:leading-[60px] text-zinc-800 md:text-[48px] lg:text-[56px] ${sofia_sans.className}`}>
              Articles & resources
            </h3>
          </div>
          <div className="w-full">
            <p className={`text-base text-center md:text-left font-normal text-zinc-800 ${inter.className}`}>
              Dive into a wealth of knowledge with our collection of therapy articles and resources. Whether you&apos;re seeking insights on mental well-being, coping strategies, or expert advice, our curated content is designed to empower and support you on your journey to a healthier, happier life.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-5">
          {data.map((post) => (
            <div className="w-full" key={post.title}>
              <Image
                src={post.img}
                width="646"
                height="490"
                alt="banner_img"
                className="relative z-20 w-[646px] rounded-[32px]"
              />
              <h5 className={`mb-6 sm:mb-10 mt-6 max-w-[552px] text-2xl md:text-[32px] font-medium md:leading-[40px] text-zinc-800 ${inter.className}`}>
                {post.title}
              </h5>
              <hr className="border border-zinc-400" />
              <div className="mt-4 flex min-h-10 w-full flex-col sm:flex-row items-start sm:items-center justify-between gap-[10px]">
                <div className={`flex items-center justify-start gap-4 text-base font-medium text-zinc-800 ${inter.className}`}>
                  <div className="uppercase">{post.category}</div>
                  <div className="h-[0px] w-6 border border-black"></div>
                  <div>{post.date}</div>
                </div>
                <Link
                  href={post.slug}
                  className={`flex items-center justify-end gap-2 py-2 text-base font-normal text-teal-600 ${inter.className}`}
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
            </div>
          ))}
        </div>
        <div className="mx-auto max-w-[253px]">
          <Link href="" className={`w-full h-[83px] px-16 py-8 rounded-[63px] border border-teal-600 justify-center items-center flex text-zinc-800 text-base font-medium ${inter.className}`}>
            <span>Browse all posts</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
