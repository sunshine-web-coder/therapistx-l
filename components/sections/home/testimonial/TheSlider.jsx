"use client";

import { inter, sofia_sans } from "@/app/fonts";
import Link from "next/link";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute rotate-180 bottom-[-95px] left-0 z-10"
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.1834 18.0981C23.3351 17.9395 23.4541 17.7526 23.5334 17.5481C23.7001 17.1423 23.7001 16.6872 23.5334 16.2814C23.4541 16.0768 23.3351 15.8899 23.1834 15.7314L18.1834 10.7314C17.8695 10.4175 17.4439 10.2412 17 10.2412C16.5562 10.2412 16.1306 10.4175 15.8167 10.7314C15.5029 11.0452 15.3266 11.4709 15.3266 11.9147C15.3266 12.3586 15.5029 12.7842 15.8167 13.0981L17.9834 15.2481H12C11.558 15.2481 11.1341 15.4236 10.8215 15.7362C10.509 16.0488 10.3334 16.4727 10.3334 16.9147C10.3334 17.3567 10.509 17.7807 10.8215 18.0932C11.1341 18.4058 11.558 18.5814 12 18.5814H17.9834L15.8167 20.7314C15.6605 20.8863 15.5365 21.0707 15.4519 21.2738C15.3673 21.4769 15.3237 21.6947 15.3237 21.9147C15.3237 22.1347 15.3673 22.3526 15.4519 22.5557C15.5365 22.7588 15.6605 22.9431 15.8167 23.0981C15.9717 23.2543 16.156 23.3783 16.3591 23.4629C16.5622 23.5475 16.78 23.5911 17 23.5911C17.2201 23.5911 17.4379 23.5475 17.641 23.4629C17.8441 23.3783 18.0284 23.2543 18.1834 23.0981L23.1834 18.0981ZM33.6667 16.9147C33.6667 13.6184 32.6892 10.396 30.8579 7.65522C29.0265 4.9144 26.4235 2.77819 23.3781 1.51673C20.3327 0.255268 16.9816 -0.0747873 13.7485 0.5683C10.5155 1.21139 7.54581 2.79873 5.21494 5.12961C2.88406 7.46048 1.29671 10.4302 0.653627 13.6632C0.0105398 16.8962 0.340595 20.2473 1.60206 23.2928C2.86352 26.3382 4.99972 28.9412 7.74054 30.7725C10.4814 32.6039 13.7037 33.5814 17 33.5814C21.4203 33.5814 25.6596 31.8254 28.7852 28.6998C31.9108 25.5742 33.6667 21.335 33.6667 16.9147ZM3.66671 16.9147C3.66671 14.2776 4.4487 11.6998 5.91379 9.50712C7.37887 7.31446 9.46125 5.6055 11.8976 4.59633C14.334 3.58716 17.0148 3.32311 19.6013 3.83758C22.1877 4.35205 24.5634 5.62193 26.4281 7.48663C28.2928 9.35133 29.5627 11.7271 30.0772 14.3135C30.5917 16.8999 30.3276 19.5808 29.3184 22.0172C28.3093 24.4535 26.6003 26.5359 24.4076 28.001C22.215 29.4661 19.6371 30.2481 17 30.2481C13.4638 30.2481 10.0724 28.8433 7.57196 26.3428C5.07147 23.8423 3.66671 20.4509 3.66671 16.9147Z"
          fill="#333333"
        />
      </svg>
    </button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute bottom-[-95px] right-0 z-10"
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.1834 18.0981C23.3351 17.9395 23.4541 17.7526 23.5334 17.5481C23.7001 17.1423 23.7001 16.6872 23.5334 16.2814C23.4541 16.0768 23.3351 15.8899 23.1834 15.7314L18.1834 10.7314C17.8695 10.4175 17.4439 10.2412 17 10.2412C16.5562 10.2412 16.1306 10.4175 15.8167 10.7314C15.5029 11.0452 15.3266 11.4709 15.3266 11.9147C15.3266 12.3586 15.5029 12.7842 15.8167 13.0981L17.9834 15.2481H12C11.558 15.2481 11.1341 15.4236 10.8215 15.7362C10.509 16.0488 10.3334 16.4727 10.3334 16.9147C10.3334 17.3567 10.509 17.7807 10.8215 18.0932C11.1341 18.4058 11.558 18.5814 12 18.5814H17.9834L15.8167 20.7314C15.6605 20.8863 15.5365 21.0707 15.4519 21.2738C15.3673 21.4769 15.3237 21.6947 15.3237 21.9147C15.3237 22.1347 15.3673 22.3526 15.4519 22.5557C15.5365 22.7588 15.6605 22.9431 15.8167 23.0981C15.9717 23.2543 16.156 23.3783 16.3591 23.4629C16.5622 23.5475 16.78 23.5911 17 23.5911C17.2201 23.5911 17.4379 23.5475 17.641 23.4629C17.8441 23.3783 18.0284 23.2543 18.1834 23.0981L23.1834 18.0981ZM33.6667 16.9147C33.6667 13.6184 32.6892 10.396 30.8579 7.65522C29.0265 4.9144 26.4235 2.77819 23.3781 1.51673C20.3327 0.255268 16.9816 -0.0747873 13.7485 0.5683C10.5155 1.21139 7.54581 2.79873 5.21494 5.12961C2.88406 7.46048 1.29671 10.4302 0.653627 13.6632C0.0105398 16.8962 0.340595 20.2473 1.60206 23.2928C2.86352 26.3382 4.99972 28.9412 7.74054 30.7725C10.4814 32.6039 13.7037 33.5814 17 33.5814C21.4203 33.5814 25.6596 31.8254 28.7852 28.6998C31.9108 25.5742 33.6667 21.335 33.6667 16.9147ZM3.66671 16.9147C3.66671 14.2776 4.4487 11.6998 5.91379 9.50712C7.37887 7.31446 9.46125 5.6055 11.8976 4.59633C14.334 3.58716 17.0148 3.32311 19.6013 3.83758C22.1877 4.35205 24.5634 5.62193 26.4281 7.48663C28.2928 9.35133 29.5627 11.7271 30.0772 14.3135C30.5917 16.8999 30.3276 19.5808 29.3184 22.0172C28.3093 24.4535 26.6003 26.5359 24.4076 28.001C22.215 29.4661 19.6371 30.2481 17 30.2481C13.4638 30.2481 10.0724 28.8433 7.57196 26.3428C5.07147 23.8423 3.66671 20.4509 3.66671 16.9147Z"
          fill="#333333"
        />
      </svg>
    </button>
  );
}

export default function TheSlider() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="mx-auto w-full sm:w-[535px]">
      <Slider {...settings}>
        <div className="w-full border">
          <h3
            className={`max-w-[500px] text-[32px] font-medium text-zinc-800 md:text-[48px] md:leading-[60px] lg:text-[56px] ${sofia_sans.className}`}
          >
            Read the experience of my past clients
          </h3>
          <p
            className={`mb-6 mt-4 max-w-full text-base font-normal text-zinc-800 md:max-w-[440px] ${inter.className}`}
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
        <div className="h-[300px] w-full border">
          <h3
            className={`max-w-[500px] text-[32px] font-medium text-zinc-800 md:text-[48px] md:leading-[60px] lg:text-[56px] ${sofia_sans.className}`}
          >
            Read the experience of my past clients
          </h3>
          <p
            className={`mb-6 mt-4 max-w-full text-base font-normal text-zinc-800 md:max-w-[440px] ${inter.className}`}
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
        <div className="h-[300px] w-full border">
          <h3
            className={`max-w-[500px] text-[32px] font-medium text-zinc-800 md:text-[48px] md:leading-[60px] lg:text-[56px] ${sofia_sans.className}`}
          >
            Read the experience of my past clients
          </h3>
          <p
            className={`mb-6 mt-4 max-w-full text-base font-normal text-zinc-800 md:max-w-[440px] ${inter.className}`}
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
        <div className="h-[300px] w-full border">
          <h3
            className={`max-w-[500px] text-[32px] font-medium text-zinc-800 md:text-[48px] md:leading-[60px] lg:text-[56px] ${sofia_sans.className}`}
          >
            Read the experience of my past clients
          </h3>
          <p
            className={`mb-6 mt-4 max-w-full text-base font-normal text-zinc-800 md:max-w-[440px] ${inter.className}`}
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
      </Slider>
    </div>
  );
}
