import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Mark DMC | Get Started with Digital Marketing",
  description:
    "Ready to drive results with Mark DMC? Contact our team today to discuss your digital marketing needs and start achieving measurable growth.",
  keywords:
    "contact Mark DMC, digital marketing contact, SEO services, paid media, content marketing, web development, get started, strategic marketing",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
