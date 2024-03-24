import Banner from "@/components/sections/home/banner/Banner";
import Image from "next/image";
import bannerImg from "../assets/banner_img.png";
import About from "@/components/sections/home/about/About";
import { inter, sofia_sans } from "./fonts";
import WhyMe from "@/components/sections/home/whyMe/WhyMe";
import Services from "@/components/sections/home/services/Services";
import ScheduleAppointment from "@/components/sections/home/scheduleAppointment/ScheduleAppointment";
import Testimonial from "@/components/sections/home/testimonial/Testimonial";
import ArticlesAndResource from "@/components/sections/home/articlesAndResources/ArticlesAndResource";

export default function Home() {
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
    <>
      <Banner />
      <About />
      <WhyMe />
      <Services />
      <ScheduleAppointment />
      <Testimonial />
      <ArticlesAndResource />
    </>
  );
}
