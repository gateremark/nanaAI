"use client";

import Footer from "@/app/components/Footer";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Logo from "@/app/assets/logo";
import ThemeIcon from "@/app/assets/themeIcon";

type Props = {};

export default function WelcomePage(props: Props) {
    return (
        <div className="flex max-w-[1200px] mx-auto flex-col items-center py-2 min-h-screen">
            <Navbar>
                {" "}
                <Link href="/" className="flex space-x-2">
                    <Logo />
                </Link>
                <div className="flex space-x-6">
                    <p className="font-medium text-base border-r border-gray-300 pr-4 space-x-2">
                        Welcome
                    </p>
                    <ThemeIcon />
                </div>{" "}
            </Navbar>
            Get Started Page
            <Footer />
        </div>
    );
}
