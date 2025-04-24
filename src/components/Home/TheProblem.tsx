import Image from "next/image";
import React from "react";

export default function TheProblem() {
  return (
    <section className="w-full bg-dark-blue relative">
      <div className="w-full py-20 pb-32 flex flex-col items-center justify-center px-5 text-white mt-10 gap-10 md:gap-20 md:flex-row mx-auto max-w-[1100px]">
        <div className="w-full text-center font-bold">
          <h1 className="text-sm text-[#00adc2] uppercase">The problem</h1>
          <h1 className="text-4xl mt-3">
            Having a Great Product or Service Isn’t Enough.
          </h1>
          <p className="font-light mt-10">
            In today’s competitive digital landscape cutting through the clutter
            to reach the buyers you deserve requires an ROI-positive, strategic
            approach. We understand the challenges of digital marketing
            firsthand.
          </p>
        </div>
        <div className="w-full flex flex-col gap-10">
          <div className="w-[80%] border border-white rounded-2xl p-8 flex flex-col items-center justify-center self-start gap-5 text-start">
            <h1 className="w-full font-bold text-lg text-mustard">
              Disconnected Strategies
            </h1>
            <p className="text-sm">
              Is your marketing feeling all over the place? When your strategies
              don’t work together, your customers end up lost in a maze. We
              believe you deserve a seamless journey that makes sense. Our job
              is to unify your approach and drive results that matter.
            </p>
          </div>
          <div className="w-[80%] border border-white rounded-2xl p-8 flex flex-col items-center justify-center self-end gap-5 text-start">
            <h1 className="w-full font-bold text-lg text-mustard">
              Technology Falling Behind
            </h1>
            <p className="text-sm">
              In today’s fast-paced world, having the right certifications isn’t
              enough. You need cutting-edge tools and strategies to stay ahead.
              We’re here to bridge that gap, giving your team the tech advantage
              it needs to lead the market.
            </p>
          </div>
          <div className="w-[80%] border border-white rounded-2xl p-8 flex flex-col items-center justify-center self-start gap-5 text-start">
            <h1 className="w-full font-bold text-lg text-mustard">
              Struggling to Build Trust
            </h1>
            <p className="text-sm">
              With so many empty promises out there, earning trust is harder
              than ever. We focus on transparency and real results, so you get
              solutions that truly work and build long-term success.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full absolute -bottom-[2px]">
        <Image
          src={"/assets/bg-end.png"}
          height={200}
          width={1500}
          alt="bg-hero"
          layout="responsive"
        />
      </div>
    </section>
  );
}
