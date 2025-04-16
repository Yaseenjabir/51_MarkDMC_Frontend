import React from "react";

export default function BestBussiness() {
  return (
    <section className="w-full px-5 my-10 mt-20">
      <div className="py-10 px-5 border bg-soft-white rounded-lg border-gray-400 text-center gap-5 flex flex-col items-center justify-center max-w-[1100px] mx-auto">
        <h1 className="font-bold text-3xl">Your Best Business Starts Here</h1>
        <p>Let’s Get in Touch and Achieve Your Goals</p>
        <button className="bg-mustard-dark text-white py-2 px-4 rounded-lg font-semibold cursor-pointer hover:bg-transparent hover:text-mustard-dark border border-transparent hover:border-mustard-dark transition-all ease-in-out duration-300">
          Schedule a free consultation
        </button>
      </div>
    </section>
  );
}
