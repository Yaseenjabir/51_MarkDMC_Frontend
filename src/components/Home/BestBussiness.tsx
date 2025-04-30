import Link from "next/link";
import React from "react";

export default function BestBussiness() {
  return (
    <section className="w-full px-5 my-10 mt-20">
      <div className="py-10 px-5 border bg-soft-white rounded-lg border-gray-400 text-center gap-5 flex flex-col items-center justify-center max-w-[1100px] mx-auto">
        <h1 className="font-bold text-3xl">Your Best Business Starts Here</h1>
        <p>Let’s Get in Touch and Achieve Your Goals</p>
        <button className="bg-deep-green text-white py-2 px-4 rounded-lg font-semibold cursor-pointer hover:bg-transparent hover:text-deep-green border border-transparent hover:border-deep-green transition-all ease-in-out duration-300">
          <Link href={"/contact"}>Schedule a free consultation</Link>
        </button>
      </div>
    </section>
  );
}
