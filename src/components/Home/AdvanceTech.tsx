import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AdvanceTech() {
  return (
    <section className="w-full relative bg-[url('/assets/yaseen-shapeee.png')] bg-top bg-cover">
      <div className="w-full">
        <div className="w-full py-20 px-5 text-white flex items-center justify-center relative text-center md:text-start flex-col gap-20 mx-auto md:flex-row-reverse max-w-[900px] mt-20">
          <div className="w-[70%]">
            <Image
              src={"/assets/interobot-circles.webp"}
              alt="interobot-circles"
              height={600}
              width={600}
              layout="responsive"
              className="w-full"
            ></Image>
          </div>
          <div className="w-full flex flex-col gap-5 items-center justify-center md:max-w-[400px] md:items-start">
            <h2 className="font-bold text-4xl">
              Advanced Tech, In Your Corner
            </h2>
            <p className="text-[12px]">
              InteroBOT® emulates search engine crawlers, enabling our digital
              marketing team to view your site just as search engines would.
              It’s our secret weapon for testing opportunities and more
              accurately forecasting search results.
            </p>
            <button className="uppercase py-2 px-4 rounded-xl text-[12px] font-semibold bg-mustard text-white">
              <Link href={"/services"}>See More</Link>
            </button>
          </div>
        </div>
      </div>

      <Image
        src={"/assets/bg-end.png"}
        width={1500}
        height={200}
        layout="responsive"
        alt="bg-end"
        className="w-full absolute -bottom-[1px] md:-bottom-[2px]"
      />
    </section>
  );
}
