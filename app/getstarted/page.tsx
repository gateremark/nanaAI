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
import FileUpload from "@/app/components/FileUpload";

type Props = {};

export default function WelcomePage(props: Props) {
    const { user } = useUser();
    const [userName, setUserName] = useState<string | null>(null);
    useEffect(() => {
        setUserName(user?.firstName ?? null);
    }, [user?.firstName]);

    const [type, setType] = useState("pdf");

    const onChange = (e: any) => {
        // console.log(e.target.value);
        setType(e.target.value);
    };
    return (
        <div className="flex max-w-[1200px] mx-auto flex-col items-center py-2 min-h-screen">
            <Navbar>
                {" "}
                <Link href="/" className="flex space-x-2">
                    <Logo />
                </Link>
                <div className="flex space-x-6 justify-center items-center absolute right-1 bottom-1 sm:relative">
                    <p className="font-medium text-base border-r border-gray-300 pr-4 space-x-2 hidden sm:flex gap-2">
                        Welcome{" "}
                        <span className=" font-semibold"> {userName} </span>
                    </p>

                    <ThemeIcon />

                    <span className=" w-8 h-auto flex items-center justify-center">
                        <UserButton afterSignOutUrl="/" />
                    </span>
                </div>{" "}
            </Navbar>
            <div className=" flex flex-col my-4 gap-3">
                <span className=" text-center px-4 sm:px-0">
                    Do you want to Chat with a{" "}
                    <span className=" text-lg font-semibold">PDF</span> or a{" "}
                    <span className="text-lg font-semibold">Web Page</span>{" "}
                    (Blogs, Articles, etc.)?
                </span>

                <span className=" flex justify-evenly w-full">
                    <Button
                        type="button"
                        id="type"
                        value="pdf"
                        onClick={onChange}
                        className={`
                    ${
                        type === "pdf" &&
                        "bg-blue-500 text-white hover:bg-blue-600"
                    }
                    `}
                    >
                        {" "}
                        PDF{" "}
                    </Button>
                    <Button
                        type="button"
                        id="type"
                        value="web"
                        onClick={onChange}
                        className={`
                    ${
                        type === "web" &&
                        "bg-blue-500 text-white hover:bg-blue-600"
                    }
                    `}
                    >
                        {" "}
                        Web
                    </Button>
                </span>
                {type === "pdf" && <FileUpload />}

                {/* <FileUpload /> */}
            </div>
            <Footer className="fixed bottom-0 max-w-6xl text-center h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3" />
        </div>
    );
}
