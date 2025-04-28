import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laptops for Sale | Mark DMC Portal",
  description:
    "Browse a wide selection of laptops for sale at Mark DMC’s portal. Find top brands, gaming laptops, ultrabooks, and budget-friendly options with great deals.",
  keywords:
    "laptops for sale, Mark DMC portal, gaming laptops, ultrabooks, budget laptops, laptop deals, buy laptops online, top laptop brands",
};
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
