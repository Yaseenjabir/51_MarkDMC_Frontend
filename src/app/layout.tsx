import { Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Search from "@/components/Shared/Search";
import { ContextProvider } from "@/context/context";
// import Search from "@/components/Shared/Search";

const montserrat = Montserrat({
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} ${geistMono.variable} antialiased`}
      >
        <ContextProvider>
          <Header />
          {children}
          <Search />
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}
