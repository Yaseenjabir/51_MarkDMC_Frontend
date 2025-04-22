"use client";
import React from "react";
import { Input } from "../ui/input";
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useTransitionContext } from "@/context/context";

export default function Search() {
  const { active, toggleTransition } = useTransitionContext();

  return (
    <section
      className={`w-full h-screen bg-blue-400 flex flex-col items-center justify-center fixed transition-all ease-in-out duration-300 top-0 left-0 z-50 px-20 ${
        active ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <form className="w-full max-w-[400px] mx-auto flex items-center justify-center gap-3">
        <Input
          type="text"
          className="placeholder:text-white"
          placeholder="Search here..."
        />
        <IoSearch className="text-white text-2xl cursor-pointer" />
      </form>
      <hr
        id="transitionForHR"
        className={`border-t-[1px] border-white w-full mt-5 max-w-[400px] mx-auto ${
          active ? "animate-hr" : ""
        }`}
      />
      <RxCross2
        onClick={toggleTransition}
        className="absolute top-5 right-5 text-white text-2xl cursor-pointer hover:scale-125 transition-all ease-in-out duration-300"
      />
    </section>
  );
}
