"use client";
import Image from "next/image";
import React from "react";
import { NavLink } from "../../../types/NavLink";
import { useRouter } from "next/navigation";
import { IoSearch } from "react-icons/io5";
import Link from "next/link";
import { useTransitionContext } from "@/context/context";

export default function DesktopHeader({ navLinks }: { navLinks: NavLink[] }) {
  const router = useRouter();
  const { toggleTransition } = useTransitionContext();
  const [activeIndex, setActiveIndex] = React.useState<null | number>(null);

  return (
    <section className="w-full hidden md:block border-b border-b-[#c7c7c7] shadow-lg">
      <header className="w-full py-5 px-5 flex items-center justify-between max-w-[1100px] mx-auto">
        <div
          className="cursor-pointer w-[70px]"
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
              onMouseEnter={() => setActiveIndex(item.id)}
              onMouseLeave={() => setActiveIndex(null)}
              className={`text-[12px] lg:text-base cursor-pointer transition-all ease-in-out duration-300 ${
                activeIndex === item.id && "scale-110"
              }`}
              key={item.id}
            >
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-center gap-5">
          <button
            onClick={() => router.push("/contact")}
            className="text-[12px] p-2 rounded-lg border border-transparent bg-sage-green text-white hover:bg-transparent hover:border-sage-green hover:text-deep-green cursor-pointer font-semibold transition-all ease-in-out duration-300"
          >
            Get a quote
          </button>
          <IoSearch
            onClick={toggleTransition}
            className="text-xl cursor-pointer"
          />
        </div>
      </header>
    </section>
  );
}
