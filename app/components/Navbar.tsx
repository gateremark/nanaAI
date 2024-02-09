"use client";

import Link from "next/link";
import Logo from "../assets/logo";
import ThemeIcon from "../assets/themeIcon";

type Props = {};

export default function Navbar(props: Props) {
    return (
        <div className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
            <Link href="/" className="flex space-x-2">
                <Logo />
            </Link>

            <div className="flex space-x-6">
                <Link
                    href="/research"
                    className="border-r border-gray-300 pr-4 space-x-2 hover:text-blue-400 transition hidden sm:flex"
                >
                    <p className="font-medium text-base">Get Started</p>
                </Link>
                <ThemeIcon />
            </div>
        </div>
    );
}
