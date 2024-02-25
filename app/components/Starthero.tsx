import { SiGithub } from "react-icons/si";
import Lines from "@/app/assets/Lines";
import Link from "next/link";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

type Props = {};

export default function Starthero(props: Props) {
    const { resolvedTheme } = useTheme();
    return (
        <div className="flex flex-col h-screen items-center justify-center gap-5">
            {/* <span className="relative group inline-block w-fit mx-auto overflow-hidden rounded-full p-[1px] cursor-default">
                <span className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#71717a_0%,#27272a_50%,#71717a_100%)] animate-spin duration-700 rounded-full group-hover:animate-none" />
                <div className="flex gap-1 h-full group w-full items-center justify-center rounded-full bg-zinc-900 px-3 py-1 text-xs text-zinc-200 backdrop-blur-3xl hover:backdrop-blur-2xl hover:shadow-lg transition-all duration-200 ease-in-out">
                    <p>Powered by:</p>
                </div>
            </span> */}
            <div className="flex justify-center">
                <a
                    className=" shadow-inner-lg rounded-full flex items-center gap-[3px] sm:gap-2 py-2 sm:py-3 px-8 dark:border-[#3087df] dark:border  hover:scale-105 active:scale-95 transition-transform duration-75"
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
                            : "bg-gradient-to-r from-slate-500 via-slate-100 to-slate-500"
                    } pb-3 sm:pb-[30px]`}
                >
                    with Voice
                </span>
                <span className="relative whitespace-nowrap text-[#3087df]">
                    <Lines />
                    <span className="relative"> and AI</span>
                </span>
            </h1>
            <p className="mx-auto mt-12 max-w-xl text-lg text-slate-700 leading-7 text-center dark:text-slate-600 px-2 sm:px-0">
                Do you find it hard to navigate through complex{" "}
                <span className=" underline">research papers</span> and{" "}
                <span className=" underline">blogs</span>? With the added power
                of <span className="font-semibold">Voice</span>, let our{" "}
                <span className="font-semibold">AI</span> empower your studies
                by transforming your interaction with these papers and blogs.
            </p>
            <Link href="/getstarted">
                <button className=" bg-gradient-to-br from-[#1f1f1f] to-[#1f1f1f90] dark:from-[#eeeeee] dark:to-slate-500 text-[#ffffff] dark:text-slate-800 rounded-full sm:px-14 px-12 py-3 sm:py-4 text-center text-xl sm:text-[30px] font-medium leading-[37px] tracking-[-0.3px] hover:scale-105 active:scale-95 transition-transform duration-75">
                    Get Started
                </button>
            </Link>
        </div>
    );
}
