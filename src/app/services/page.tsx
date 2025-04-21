import TurnLeads from "@/components/Home/TurnLeads";
import Image from "next/image";
import React from "react";
import { CgArrowLongDown } from "react-icons/cg";
import { MdOutlineCellTower } from "react-icons/md";
import { TfiMoney, TfiShareAlt } from "react-icons/tfi";

import { IoMagnetOutline } from "react-icons/io5";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Link from "next/link";

export default function Page() {
  const data = [
    {
      h1: "Attract",
      p: "Attract new audiences and boost brand awareness.",
      logo: <IoMagnetOutline />,
    },
    {
      h1: "Engage",
      p: "Draw prospects in with tailored messaging and ads.",
      logo: <MdOutlineCellTower />,
    },
    {
      h1: "Validate",
      p: "Showcase your reputation and social proof.",
      logo: <IoIosCheckmarkCircleOutline />,
    },
    {
      h1: "Convert",
      p: "Close deals and generate revenue and growth.",
      logo: <TfiShareAlt />,
    },
    {
      h1: "Upsell",
      p: "Create advocacy and lifetime value.",
      logo: <TfiMoney />,
    },
  ];

  return (
    <section className="w-full pb-10">
      <div className="w-full py-10 md:px-10 bg-soft-white myBackground">
        <div className="w-full max-w-[1100px] mx-auto flex flex-col gap-10 md:flex-row">
          <div className="w-full text-center flex flex-col gap-3 items-center justify-center md:text-start">
            <h1 className="font-bold text-4xl px-10 md:px-0 md:text-5xl">
              We Focus On Your Story
            </h1>
            <h2 className="font-semibold text-sm w-full">Why your story</h2>
            <p className="font-medium text-sm">
              Because our goal, as accountants, is to provide you with a list of
              services that are very reliable as you go across your business
              journey...
            </p>
            <CgArrowLongDown className="hidden md:block self-start text-4xl text-blue-500 -translate-x-3" />
          </div>
          <div className="w-[70%] mx-auto md:w-full">
            <Image
              src={"/assets/services.png"}
              width={400}
              height={600}
              alt="services"
              layout="responsive"
              className="w-full"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col py-10 max-w-[1100px] mx-auto px-5 gap-10">
        <div className="w-full flex flex-col text-center gap-5 max-w-[500px] mx-auto">
          <h1 className="font-bold text-3xl md:text-4xl">
            Where your customer is, there you are.
          </h1>
          <p>
            We specialize in a synergistic approach, offering a range of
            full-service digital marketing solutions and integrated agency
            services that span your entire customer journey.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 place-content-center place-items-center gap-10 lg:gap-5 md:grid-cols-3 lg:grid-cols-5">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full p-5 flex flex-col items-center justify-center text-center shadow-lg rounded-xl hover:scale-105 transition-all ease-in-out duration-300"
              >
                <div className="relative">
                  <div className="text-4xl rounded-full p-4 bg-orange-400 shadow-orange-300 shadow-xl text-white">
                    {item.logo}
                  </div>
                  <span className="p-1 rounded-full bg-deep-green text-white absolute -bottom-2 -right-2 font-bold w-8 h-8 flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>
                <h1 className="font-semibold text-2xl mt-8 md:text-xl">
                  {item.h1}
                </h1>
                <p className="md:text-sm h-[80px]">{item.p}</p>
              </div>
            );
          })}
        </div>
      </div>
      <TurnLeads />
      <div className="w-full flex flex-col items-center justify-center text-center gap-8 mt-10 h-[400px]">
        <h1 className="text-4xl font-bold md:text-5xl text-mustard-dark">
          Ready to Level Up?
        </h1>
        <p className="text-gray-600">
          Let’s team up to accelerate your growth with integrated digital
          marketing services.
        </p>
        <button className="border border-orange-400 text-orange-400 font-semibold text-sm px-4 py-2 rounded-full w-min text-nowrap self-center hover:bg-orange-400 hover:text-white hover:border-orange-400 cursor-pointer transition-all ease-in-out duration-300">
          <Link href={"/contact"}>Request Assessment</Link>
        </button>
      </div>
    </section>
  );
}
