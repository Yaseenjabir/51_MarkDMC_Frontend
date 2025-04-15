"use client";
import Image from "next/image";
import React from "react";
import { NavLink } from "../../../types/NavLink";
import { useRouter } from "next/navigation";
import { IoSearch } from "react-icons/io5";

export default function DesktopHeader({ navLinks }: { navLinks: NavLink[] }) {
  const router = useRouter();

  return (
    <section className="w-full hidden md:block border-b border-b-[#c7c7c7] shadow-lg">
      <header className="w-full py-5 px-5 flex items-center justify-between max-w-[1000px] mx-auto">
        <div
          className="cursor-pointer w-[100px]"
          onClick={() => router.push("/")}
        >
          <Image
            alt="logo"
            width={150}
            height={150}
            layout="responsive"
            src={"/logo.png"}
            className="w-full"
          />
        </div>
        <ul className="flex items-center justify-center gap-6">
          {navLinks.map((item) => (
            <li
              className="text-[12px] lg:text-base cursor-pointer"
              key={item.id}
            >
              {item.title}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-center gap-5">
          <button className="text-[12px] border border-[#9c9c9c] p-2 rounded-lg bg-sage-green text-white hover:bg-deep-green cursor-pointer font-semibold transition-all ease-in-out duration-300">
            Get a quote
          </button>
          <IoSearch className="text-xl cursor-pointer" />
        </div>
      </header>
    </section>
  );
}
