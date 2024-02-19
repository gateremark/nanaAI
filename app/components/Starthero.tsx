import { SiGithub } from "react-icons/si";
import Lines from "@/app/assets/Lines";
import Link from "next/link";
import { useTheme } from "next-themes";

type Props = {};

export default function Starthero(props: Props) {
    const { resolvedTheme } = useTheme();
    return (
        <div className="flex flex-col h-screen items-center justify-center gap-5">
            <div className="flex justify-center">
                <a
                    className=" shadow-inner-lg rounded-full flex items-center gap-[3px] sm:gap-2 py-0.5 sm:py-3 px-6 dark:border-[#3087df] dark:border  hover:scale-105 active:scale-95 transition-transform duration-75"
                    href="https://github.com/gateremark"
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
                Empower your studies <br />
                <span
                    className={`text-center text-3xl sm:text-[60px] font-normal leading-[72px] tracking-[-0.6px] sm:tracking-[-1.2px] bg-clip-text text-transparent ${
                        resolvedTheme === "light"
                            ? "bg-gradient-to-r from-[#101023] via-[#10102360] to-[#10102395]"
                            : "bg-gradient-to-r from-[#808080] via-[#80808060] to-[#80808095]"
                    } pb-3 sm:pb-[30px]`}
                >
                    with Voice
                </span>
                <span className="relative whitespace-nowrap text-[#3087df]">
                    <Lines />
                    <span className="relative"> and AI</span>
                </span>
            </h1>
            <p className="mx-auto mt-12 max-w-xl text-lg text-slate-700 leading-7 text-center dark:text-slate-600">
                Do you find it hard to navigate through complex{" "}
                <span className=" underline">research papers</span> and{" "}
                <span className=" underline">blogs</span>? With the added power
                of <span className="font-semibold">Voice</span>, let our{" "}
                <span className="font-semibold">AI</span> empower your studies
                by transforming your interaction with these papers and blogs.
            </p>
            <Link href="/getstarted">
                <button className=" bg-gradient-to-r from-[#1f1f1f] from-[20%] to-[#1f1f1f90] dark:from-[#2e2e2e] dark:to-[#1f1f1f90] text-[#ffffff] rounded-full sm:px-14 px-12 py-[2.5px] sm:py-4 text-center text-xl sm:text-[30px] font-medium leading-[37px] tracking-[-0.3px] hover:scale-105 active:scale-95 transition-transform duration-75">
                    Get Started
                </button>
            </Link>
        </div>
    );
}
