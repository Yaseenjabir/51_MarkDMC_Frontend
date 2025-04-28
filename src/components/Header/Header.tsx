import React from "react";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

export default function Header() {
  const navLinks = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "About", link: "/about" },
    { id: 3, title: "Services", link: "/services" },
    // { id: 4, title: "Blog", link: "/blog" },
    { id: 5, title: "Contact", link: "/contact" },
    { id: 6, title: "Portal", link: "/portal" },
  ];

  return (
    <>
      <DesktopHeader navLinks={navLinks} />
      <MobileHeader navLinks={navLinks} />
    </>
  );
}
