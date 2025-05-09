import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeroSection() {
  return (
    <section className="border border-[#d6d6d6] rounded-xl m-2">
      <div className="w-full p-5 flex flex-col gap-10 max-w-[600px] mx-auto md:flex-row md:max-w-full lg:max-w-[1100px]">
        {/* Child 1  */}
        <div className="w-full flex flex-col gap-5">
          <h1 className="text-lg text-dark-blue font-semibold">
            Integrated Marketing Team
          </h1>
          <h2 className="text-5xl font-extrabold leading-14 text-deep-green">
            Digital Marketing Amplified...
          </h2>
          <p className="text-dark-blue w-[80%]">
            For a great product or service that deserves to be center stage,
            turn up the volume on your digital marketing. Let us help you win
            and reach more customers.
          </p>
          <button className="py-3 px-5 rounded-lg shadow text-sm uppercase font-semibold w-min text-nowrap bg-deep-green text-white cursor-pointer border border-transparent hover:bg-transparent hover:text-deep-green hover:border-deep-green transition-all ease-in-out duration-300">
            <Link href={"/contact"}>Get a proposal</Link>
          </button>
        </div>
        {/* Child 2  */}
        <div className="w-full bg-dark-blue rounded-2xl flex flex-col items-center justify-center">
          <Image
            src={"/assets/heroBG.png"}
            width={700}
            height={700}
            layout="responsive"
            alt="hero-bg"
          />
        </div>
      </div>
    </section>
  );
}
