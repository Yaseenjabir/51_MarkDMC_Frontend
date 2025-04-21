import Image from "next/image";
import React from "react";
import { IoMdCheckmark } from "react-icons/io";

export default function page() {
  return (
    <>
      <section className="w-full px-5">
        {/* Effective Digital Marketing */}
        <div className="w-full relative py-7 bg-[url('/assets/about-bg.png')] bg-center md:bg-left bg-no-repeat flex flex-col gap-3 md:gap-5 md:text-center max-w-[900px] mx-auto">
          <h1 className="text-xl md:text-2xl">
            Smart, Strategic, and Seriously
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#303030]">
            Effective Digital Marketing
          </h1>
          <p>
            At Intero Digital, strategy is at the heart of everything we do. We
            team up with our clients to craft and execute a digital marketing
            plan that’s not just smart but actually gets results. No fluff, no
            guesswork — just real, measurable growth for your business.
          </p>
          <button className="border border-mustard hover:bg-mustard hover:text-white cursor-pointer transition-all ease-in-out duration-300 w-min text-nowrap py-2 px-4 rounded-full font-semibold text-mustard-dark text-sm md:self-center">
            See the Results for Yourself
          </button>
        </div>
        {/* Your Ultimate Solution */}
        <div className="w-full py-10 flex flex-col items-center justify-center gap-10 md:flex-row max-w-[1100px] mx-auto">
          <div className="w-full">
            <Image
              src={"/assets/about/about-01.webp"}
              height={600}
              width={1000}
              layout="responsive"
              alt="about-01"
            ></Image>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-2">
            <div className="w-full flex items-center gap-4 text-sm">
              <h1 className="uppercase text-orange-500">About our agency</h1>
              <hr className="w-[50px] border-[1px] border-sage-green" />
            </div>
            <h1 className="font-bold text-2xl w-full">
              Your Ultimate Solution
            </h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              laudantium quod atque tempore obcaecati dicta minima quis suscipit
              expedita recusandae aliquid, facilis distinctio error cupiditate,
              temporibus commodi adipisci nihil iure!
            </p>
            <div className="w-full grid grid-cols-3 place-content-center place-items-center mt-5">
              <div className="flex gap-2 flex-col items-center border-r p-2 px-4">
                <span className="font-semibold text-4xl text-orange-400">
                  27K
                </span>
                <span className="text-sm">Active Clients</span>
              </div>
              <div className="flex gap-2 flex-col items-center border-r p-2 px-4">
                <span className="font-semibold text-4xl text-orange-400">
                  985+
                </span>
                <span className="text-sm">Projects Done</span>
              </div>
              <div className="flex gap-2 flex-col items-center border-r p-2 px-4">
                <span className="font-semibold text-4xl text-orange-400">
                  78+
                </span>
                <span className="text-sm">Members</span>
              </div>
              <button className="border border-orange-400 py-2 px-4 rounded-full text-sm mt-4 cursor-pointer text-orange-500 font-semibold hover:bg-orange-400 hover:text-white transition-all ease-in-out duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
        {/* The Impact Our Clients Want */}
        <div className="w-full py-10 flex flex-col gap-10 bg-[url('/assets/about/abstract-boxes-background-modern-technology-free-vector.jpg')] bg-center bg-cover relative md:flex-row max-w-[1100px] mx-auto">
          <div className="w-full h-full absolute top-0 left-0 bg-[#ffffffea]"></div>
          <div className="w-full flex flex-col gap-3 relative z-10">
            <h1 className="font-bold text-4xl text-gray-800">
              The Impact Our Clients Want
            </h1>
            <p className="font-semibold">
              We help clients attract, engage, and convert audiences, fostering
              relationships and driving growth through digital marketing and web
              development.
            </p>
            <div className="w-full flex flex-col gap-5">
              <div className="w-full flex items-center gap-3">
                <div className="p-2 border border-black"></div>
                <span>Attract your target audience</span>
              </div>
              <div className="w-full flex items-center gap-3">
                <div className="p-2 border border-black"></div>
                <span>Engage prospects</span>
              </div>
              <div className="w-full flex items-center gap-3">
                <div className="p-2 border border-black"></div>
                <span>Showcase your thought leadership</span>
              </div>
              <div className="w-full flex items-center gap-3">
                <div className="p-2 border border-black"></div>
                <span>Convert leads, close deals, and generate revenue</span>
              </div>
              <div className="w-full flex items-center gap-3">
                <div className="p-2 border border-black"></div>
                <span>
                  Reengage & upsell to create advocacy & lifetime value
                </span>
              </div>
            </div>
          </div>
          <div className="h-[1px] w-full bg-[#8f8f8f] z-10 md:w-[1px] md:h-auto hidden md:block"></div>
          <div className="w-full flex flex-col gap-3 relative z-10">
            <h1 className="font-bold text-4xl text-gray-800">
              How we achieve results
            </h1>
            <p className="font-semibold">
              We tailor our approach to achieve clients’ goals and craft a game
              plan using our full arsenal of digital marketing tools and 15+
              digital marketing services.
            </p>
            <div className="w-full flex flex-col gap-5">
              <div className="w-full flex items-center gap-3">
                <div className="p-[2px] border border-black">
                  <IoMdCheckmark className="text-gray-700" />
                </div>
                <span>SEO and GRO™</span>
              </div>
              <div className="w-full flex items-center gap-3">
                <div className="p-[2px] border border-black">
                  <IoMdCheckmark className="text-gray-700" />
                </div>
                <span>Paid media and social media</span>
              </div>
              <div className="w-full flex items-center gap-3">
                <div className="p-[2px] border border-black">
                  <IoMdCheckmark className="text-gray-700" />
                </div>
                <span>Amazon services</span>
              </div>
              <div className="w-full flex items-center gap-3">
                <div className="p-[2px] border border-black">
                  <IoMdCheckmark className="text-gray-700" />
                </div>
                <span>Content marketing and digital PR</span>
              </div>
              <div className="w-full flex items-center gap-3">
                <div className="p-[2px] border border-black">
                  <IoMdCheckmark className="text-gray-700" />
                </div>
                <span>Web design and development</span>
              </div>
              <div className="w-full flex items-center gap-3">
                <div className="p-[2px] border border-black">
                  <IoMdCheckmark className="text-gray-700" />
                </div>
                <span>Video marketing</span>
              </div>
              <div className="w-full flex items-center gap-3">
                <div className="p-[2px] border border-black">
                  <IoMdCheckmark className="text-gray-700" />
                </div>
                <span>And More!</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full bg-orange-500 text-white px-5 py-10 text-center flex flex-col gap-5">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
          Let’s Get You <span className="text-black">Real Results</span>
        </h1>
        <p className="w-full max-w-[600px] mx-auto">
          Ready to drive more revenue from your digital marketing? Let’s make it
          happen. Contact us today, and let’s get to work.
        </p>
        <button className="border border-white text-white font-semibold text-sm px-4 py-2 rounded-full w-min text-nowrap self-center hover:bg-white hover:text-orange-500 hover:border-orange-500 cursor-pointer transition-all ease-in-out duration-300">
          Talk to our team
        </button>
      </div>
    </>
  );
}
