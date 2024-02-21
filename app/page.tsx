"use client";

import Navbar from "./components/Navbar";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "./components/Footer";
import Logo from "@/app/assets/logo";
import { ThemeIcon } from "@/app/assets/themeIcon";
import Starthero from "./components/Starthero";
import { useUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
    const { user } = useUser();
    const [mounted, setMounted] = useState(false);
    const { theme } = useTheme();
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
    return (
        <main className="flex max-w-6xl mx-auto flex-col items-center py-2 min-h-screen">
            <Navbar>
                <Link href="/" className="flex space-x-2">
                    <Logo />
                </Link>

                <div className="flex space-x-6 justify-center items-center">
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
            <Footer />
        </main>
    );
}
