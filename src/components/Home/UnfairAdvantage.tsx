import Image from "next/image";
import React from "react";

export default function UnfairAdvantage() {
  return (
    <section className="w-full bg-[#f8f8f8]">
      <div className="grid grid-cols-1 place-items-center place-content-center my-10 px-5 lg:px-0 py-10 gap-10 md:grid-cols-3 max-w-[1100px] mx-auto">
        <div className="w-full rounded-xl p-6 bg-white shadow-xl flex flex-col items-start justify-center gap-5">
          <div className="w-[30px]">
            <Image
              src="https://www.interodigital.com/wp-content/uploads/2023/10/Full-Funnel-Solution_Multi-Color-1.png"
              width={100}
              height={100}
              layout="responsive"
              alt="image"
              className="w-full"
            />
          </div>
          <h1 className="font-bold text-2xl max-w-[300px] text-mustard-dark">
            Own All of the Channels You Need
          </h1>
          <p className="text-sm">
            We’ve assembled the best-of-breed teams into a single relationship
            so you can avoid managing a network of agencies and internal hires.
          </p>
        </div>
        <div className="w-full rounded-xl p-6 bg-white shadow-xl flex flex-col items-start justify-center gap-5">
          <div className="w-[30px]">
            <Image
              src="https://www.interodigital.com/wp-content/uploads/2023/10/Layer_2.png"
              width={100}
              height={100}
              layout="responsive"
              alt="image"
              className="w-full"
            />
          </div>
          <h1 className="font-bold text-2xl max-w-[300px] text-mustard-dark">
            Gain an Unfair Advantage
          </h1>
          <p className="text-sm">
            Beyond top talent and certifications, We built proprietary, AI
            technology to help your business lead its category at all times.
          </p>
        </div>
        <div className="w-full rounded-xl p-6 bg-white shadow-xl flex flex-col items-start justify-center gap-5">
          <div className="w-[30px]">
            <Image
              src="https://www.interodigital.com/wp-content/uploads/2023/10/Layer_2-1.png"
              width={100}
              height={100}
              layout="responsive"
              alt="image"
              className="w-full"
            />
          </div>
          <h1 className="font-bold text-2xl max-w-[300px] text-mustard-dark">
            A Partner You Can Count On
          </h1>
          <p className="text-sm">
            “Agency” by definition, our team of All-Stars work as part of your
            team, invested in your success and the sacredness of your brand.
          </p>
        </div>
      </div>
    </section>
  );
}
