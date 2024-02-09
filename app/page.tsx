"use client";

import Navbar from "./components/Navbar";
import SquigglyLines from "./assets/SquigglyLines";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { SiGithub } from "react-icons/si";
import Link from "next/link";
import Footer from "./components/Footer";

export default function Home() {
    const [mounted, setMounted] = useState(false);
    const { theme } = useTheme();
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
    return (
        <main className="flex max-w-6xl mx-auto flex-col items-center py-2 min-h-screen">
            <Navbar />
            <div className="flex flex-col h-screen items-center justify-center gap-5">
                <div className="flex justify-center">
                    <a
                        className=" shadow-inner-lg rounded-full flex items-center gap-[3px] sm:gap-2 py-0.5 sm:py-3 px-6 dark:border-[#3087df] dark:border  hover:scale-105 active:scale-95 transition-transform duration-75"
                        href="https://github.com/gateremark/researchat"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SiGithub className=" text-3xl" />
                        <span className="text-primary text-center text-[17px] sm:text-3xl font-light leading-[37px] tracking-[-0.3px]">
                            GitHub
                        </span>
                    </a>
                </div>
                <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-gray-900 sm:text-5xl md:text-7xl text-center dark:text-gray-500">
                    Empower your studies
                    <span className="relative whitespace-nowrap text-[#3087df]">
                        <SquigglyLines />
                        <span className="relative"> with AI</span>
                    </span>{" "}
                    <span
                        className={`text-center text-3xl sm:text-[60px] font-normal leading-[72px] tracking-[-0.6px] sm:tracking-[-1.2px] bg-clip-text ${
                            theme === "light" ? "bg_text" : "bg_text_dark"
                        } pb-3 sm:pb-[30px]`}
                    >
                        ...and arXiv.
                    </span>
                </h1>
                <p className="mx-auto mt-12 max-w-xl text-lg text-slate-700 leading-7 text-center dark:text-slate-600">
                    Do you find it hard to navigate through complex{" "}
                    <a
                        href="https://arxiv.org/"
                        target="_blank"
                        className=" underline"
                        rel="noopener noreferrer"
                    >
                        arXiv research papers
                    </a>
                    ? Let our <span className="font-semibold">AI</span> empower
                    your studies by transforming your interaction with these
                    papers.
                </p>
                <Link href="/research">
                    <button className="bg_linear text-[#ffffff] rounded-full sm:px-14 px-12 py-[2.5px] sm:py-4 text-center text-xl sm:text-[30px] font-medium leading-[37px] tracking-[-0.3px] hover:scale-105 active:scale-95 transition-transform duration-75">
                        Get Started
                    </button>
                </Link>
            </div>
            <Footer />
        </main>
    );
}
