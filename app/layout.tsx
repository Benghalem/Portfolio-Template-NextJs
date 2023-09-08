"use client";
import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// component
import Nav from "./components/Nav";
import Header from "./components/Header";
import TopLeftImg from "./components/TopLeftImg";
import Transition from "./components/Transition";

// next router navigation with usePathname
import {usePathname} from "next/navigation";
//framer motivation
import {AnimatePresence, motion} from "framer-motion";

export default function RootLayout({children}: {children: React.ReactNode}) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="h-full">
        <div
          className={`page bg-site text-white bg-cover bg-no-repeat ${inter} font-inter relative`}
        >
          <Transition />
          <TopLeftImg />
          <Nav />
          <Header />
          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
