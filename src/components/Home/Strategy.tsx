import React, { ReactNode } from "react";
import { ImUsers } from "react-icons/im";
import { FaCalendarAlt } from "react-icons/fa";
import { GiFlyingFlag } from "react-icons/gi";

import Link from "next/link";
import Image from "next/image";
import GlobalHeading from "../Shared/GlobalHeading";

interface Item {
  logo: ReactNode;
  h1: string;
  p: string;
  learnMore: string;
  img: string;
}

export default function Strategy() {
  const data: Item[] = [
    {
      logo: <ImUsers />,
      h1: "Get more customers",
      p: "Get your business in front of your ideal prospects and turn them into customers through successful SEO strategies, trust-building content marketing, lead management that actually generates high-quality leads, and a website that converts.",
      learnMore: "/services",
      img: "/assets/strategy/get-more-customers.jpg",
    },
    {
      logo: <FaCalendarAlt />,
      h1: "Keep your schedule full",
      p: "Equip your business to communicate quickly and efficiently with your customers however they prefer—email, chat, text, online scheduling, and more—all in one easy-to-use platform.",
      learnMore: "/services",
      img: "/assets/strategy/keep-schedule-full.jpg",
    },
    {
      logo: <GiFlyingFlag />,
      h1: "Improve your reputation",
      p: "With 84% of customers trusting online reviews as much as in-person ones, improving your reputation online is more important than ever. Get more reviews, respond to them faster, and monitor your reputation on Google, Facebook, and more—all in one place.",
      learnMore: "/contact",
      img: "/assets/strategy/Improve-Your-Reputation.png",
    },
  ];

  return (
    <section className="w-full">
      <div className="w-full max-w-[1100px] px-5 py-10 mx-auto">
        <GlobalHeading />
        {/* Items wrapper  */}
        <div className="w-full flex items-center  gap-10 flex-col justify-center mt-10 md:mt-20 md:gap-20">
          {/* single item  */}
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className={`w-full flex items-center justify-center flex-col  md:gap-5 lg:gap-10 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <div className="w-full flex flex-col items-center justify-center py-10 gap-3 md:items-start md:w-[40%]">
                  <div className="bg-blue-500 text-[#b4d7f8] text-3xl p-2 rounded-xl">
                    {item.logo} {/* No need for `<item.logo />` */}
                  </div>
                  <h1 className="font-bold text-xl lg:text-2xl">{item.h1}</h1>
                  <p className="text-sm text-center md:text-start">{item.p}</p>
                  <Link href={"/"} className="text-mustard-dark underline">
                    Learn More
                  </Link>
                </div>
                <div className="w-full md:w-[60%]">
                  <Image
                    src={item.img}
                    alt="get-more-customers.jpg"
                    height={600}
                    width={600}
                    layout="responsive"
                    className="w-full"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
