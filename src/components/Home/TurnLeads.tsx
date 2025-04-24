import React from "react";
import { IoMdImages } from "react-icons/io";
import { TbStarsFilled } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { FaCode } from "react-icons/fa";
import { IoAnalyticsSharp, IoLogoDesignernews } from "react-icons/io5";

export default function TurnLeads() {
  const data = [
    {
      h1: "Digital Advertising",
      p: "Drive Traffic and Increase Brand Awareness",
      logo: <IoMdImages />,
      color: "bg-purple-300 text-purple-700",
    },
    {
      h1: "Customer Follow-ups",
      p: "Track Your Reputation",
      logo: <TbStarsFilled />,
      color: "bg-yellow-200 text-yellow-600",
    },
    {
      h1: "SEO with Scorpion Ranking",
      p: "Boost Visibility Online",
      logo: <FiSearch />,
      color: "bg-orange-200 text-orange-700",
    },
    {
      h1: "Web Development",
      p: "Enhance Your Online Presence",
      logo: <FaCode />,
      color: "bg-blue-300 text-blue-700",
    },
    {
      h1: "Analytics",
      p: "Actionable Business Intelligence at Your Fingertips",
      logo: <IoAnalyticsSharp />,
      color: "bg-cyan-300 text-cyan-700",
    },
    {
      h1: "Scorpion Connect with AI Chat",
      p: "Convert Website Visitors into Customers",
      logo: <IoLogoDesignernews />,
      color: "bg-purple-300 text-purple-700",
    },
  ];

  return (
    <section className="w-full mt-20 px-5">
      <div className="w-full flex flex-col items-center justify-center bg-pale-green rounded-xl max-w-[1100px] mx-auto py-10 px-5">
        <div className="text-center max-w-[500px] mx-auto flex flex-col items-center justify-center gap-3">
          <hr className="border-[2px] border-mustard-dark w-[10%]" />
          <h1 className="font-bold text-3xl">Turn Your Leads Into Customers</h1>
          <p className="leading-7 font-light">
            Scorpion offers a full suite of customizable marketing services,
            backed by technology and a team dedicated to helping you run your
            best business.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 place-content-center place-items-center md:grid-cols-2 lg:grid-cols-3">
          {/* Single item  */}
          {data.map((item, i) => {
            return (
              <div
                key={i}
                className="w-full py-10 px-5 flex flex-col items-center justify-center gap-3 hover:bg-white transition-all ease-in-out duration-300 cursor-pointer rounded-2xl text-center"
              >
                <div className={`text-5xl p-3 rounded-lg ${item.color}`}>
                  {item.logo}
                </div>
                <h1 className="text-2xl font-bold text-dark-blue h-[65px]">
                  {item.h1}
                </h1>
                <p className="font-medium h-[47px]">{item.p}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
