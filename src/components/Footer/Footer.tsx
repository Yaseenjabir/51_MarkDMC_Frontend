import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="w-full px-5 bg-[#0F0C2C] text-white">
      <div className="w-full py-20 grid grid-cols-1 place-content-center justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-[1100px] mx-auto">
        {/* Logo Section  */}
        <div className="w-full flex flex-col gap-5">
          <div className="w-[100px]">
            <Image
              src={"/logo.png"}
              alt="logo"
              width={100}
              height={100}
              layout="responsive"
              className="w-full"
            />
          </div>
          <p>
            Mark DMC is a globally acclaimed digital marketing agency that helps
            businesses fulfill their potential by leveraging integrated digital
            marketing solutions executed by top industry talent.
          </p>
          <div className="flex items-center gap-2 text-xl">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
        {/* Where to?  */}
        <div className="w-full">
          <h1 className="font-bold text-lg lg:text-center">Where to?</h1>
          <ul className="flex flex-col gap-3 mt-5 lg:items-center">
            <li className="hover:underline text-[15px] w-min text-nowrap">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="hover:underline text-[15px] w-min text-nowrap">
              <Link href={"/"}>Services</Link>
            </li>
            <li className="hover:underline text-[15px] w-min text-nowrap">
              <Link href={"/"}>About</Link>
            </li>
            <li className="hover:underline text-[15px] w-min text-nowrap">
              <Link href={"/"}>Contact</Link>
            </li>
            <li className="hover:underline text-[15px] w-min text-nowrap">
              <Link href={"/"}>Blog</Link>
            </li>
          </ul>
        </div>
        {/* Get in Touch */}
        <div className="w-full flex flex-col gap-3">
          <h1 className="font-bold text-lg">Get In Touch</h1>
          <p className="max-w-[200px]">
            Ready to talk? We’d love to hear from you. Email us or fill out the
            contact form.
          </p>
          <p className="underline">markdmc@info.com</p>
        </div>
      </div>
    </section>
  );
}
