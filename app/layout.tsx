import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Mouse from "@/components/main/mouse";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ashiqur Rahman",
  description: "This is my personal portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  ///////////////////////////////////mouse

  ////////////////////////////////////

  return (
    <html lang="en">
      <body
        className={
          "${inter.className} bg-[#030018] overflow-y-scroll overflow-x-hidden"
        }
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
