"use client";

import Navbar from "../components/Navbar";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import Logo from "@/app/assets/logo";
import { ThemeIcon } from "@/app/assets/themeIcon";
import Starthero from "./Starthero";
import { useUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import ToolForAll from "./ToolForAll";
import Features from "./Features";

export default function Home() {
    const { user } = useUser();
    const [mounted, setMounted] = useState(false);
    const { theme } = useTheme();
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
    return (
        <main className="flex max-w-7xl mx-auto flex-col items-center sm:py-2 pb-2 min-h-screen">
            <Navbar>
                <Link href="/" className="flex space-x-2">
                    <Logo />
                </Link>

                <div className="flex space-x-6 justify-center items-center absolute right-1 bottom-1 sm:relative">
                    <Link
                        href="/getstarted"
                        className="border-r border-gray-300 pr-4 space-x-2 hover:text-blue-400 transition hidden sm:flex"
                    >
                        <p className="font-medium text-base">Get Started</p>
                    </Link>
                    <ThemeIcon />
                    {user && <UserButton afterSignOutUrl="/" />}
                </div>
            </Navbar>
            <Starthero />
            <ToolForAll />
            <Features />
            <Footer className="static bottom-0 max-w-6xl text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-40 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3" />
        </main>
    );
}
