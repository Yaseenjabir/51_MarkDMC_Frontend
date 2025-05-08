import React from "react";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";
import Script from "next/script";

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
      <Script
        id="tawk-to"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
         

var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/681c7a924c5e10190a22d1d4/1iqnjtju3';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();

          `,
        }}
      />
      <DesktopHeader navLinks={navLinks} />
      <MobileHeader navLinks={navLinks} />
    </>
  );
}
