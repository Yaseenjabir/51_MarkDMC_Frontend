"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "../../../types/NavLink";
import { useRouter } from "next/navigation";

export default function MobileHeader({ navLinks }: { navLinks: NavLink[] }) {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  return (
    <header className="px-5 md:hidden py-3 w-full flex items-center justify-between border-b border-b-[#e0e0e0]">
      <RxHamburgerMenu
        className="text-2xl hover:rotate-45 transition-all ease-in-out duration-500 cursor-pointer"
        onClick={() => setIsActive(true)}
      />
      <div className="w-[60px] cursor-pointer" onClick={() => router.push("/")}>
        <Image
          className="w-full"
          src={"/logo.png"}
          width={100}
          height={100}
          alt="logo"
          layout="responsive"
        />
      </div>
      <div className="flex items-center gap-10">
        <button className="text-[12px] border border-transparent p-2 rounded-lg bg-sage-green text-white hover:bg-deep-green cursor-pointer font-semibold transition-all ease-in-out duration-300">
          Get a quote
        </button>
      </div>
      {/* Slide Menu */}
      <div
        className={`fixed transit 
          ease-in-out duration-300 md:hidden top-0 left-0 w-[80%] h-screen z-[1000] bg-soft-white rounded-tr-2xl rounded-br-2xl shadow-2xl flex items-center justify-between px-3 py-5 flex-col ${
            isActive ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <h1 className="w-full font-bold text-3xl text-mustard tracking-widest italic">
          Menu
        </h1>
        <ul className="w-full flex flex-col gap-3">
          {navLinks.map((item) => (
            <li
              onClick={() => setIsActive(false)}
              key={item.id}
              className={`cursor-pointer border-b-[2px] border-b-transparent hover:border-b-sage-green transition-all ease-in-out duration-300 rounded-br-xl`}
            >
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <button className="text-[12px] w-full border border-transparent p-2 rounded-lg bg-sage-green text-white hover:bg-deep-green cursor-pointer font-semibold transition-all ease-in-out duration-300">
          Get a quote
        </button>
        <RxCross2
          onClick={() => setIsActive(false)}
          className="absolute top-5 right-5 text-xl text-deep-green hover:scale-125 ease-in-out duration-300 cursor-pointer"
        />
      </div>
    </header>
  );
}
