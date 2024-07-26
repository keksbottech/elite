import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/sections/footer/Footer";
import SubHeaderAlert from "@/sections/sub header alert/SubHeaderAlert";
import LandingPageHeader from "@/sections/landing page header/LandingPageHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elite",
  description: "Ecommerce app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <SubHeaderAlert/>
      <LandingPageHeader/>
        {children}
<Footer/>
      </body>
    </html>
  );
}
