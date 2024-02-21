"use client";

import Footer from "@/app/components/Footer";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Logo from "@/app/assets/logo";
import { ThemeIcon } from "@/app/assets/themeIcon";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

type Props = {};

export default function WelcomePage(props: Props) {
    const { user } = useUser();
    const [userName, setUserName] = useState<string | null>(null);
    useEffect(() => {
        setUserName(user?.firstName ?? null);
    }, [user?.firstName]);
    return (
        <div className="flex max-w-[1200px] mx-auto flex-col items-center py-2 min-h-screen">
            <Navbar>
                {" "}
                <Link href="/" className="flex space-x-2">
                    <Logo />
                </Link>
                <div className="flex space-x-6 justify-center items-center">
                    <p className="font-medium text-base border-r border-gray-300 pr-4 space-x-2">
                        Welcome{" "}
                        <span className=" font-semibold"> {userName} </span>
                    </p>
                   
                        <ThemeIcon />
                    

                    <span className=" w-8 h-auto flex items-center justify-center">
                        <UserButton afterSignOutUrl="/" />
                    </span>
                </div>{" "}
            </Navbar>
            Get Started Page
            <Button> Hello there</Button>
            <Footer />
        </div>
    );
}
