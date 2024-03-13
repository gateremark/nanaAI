import { useTheme } from "next-themes";
import LinesB from "@/app/assets/LinesB";
import LinesW from "@/app/assets/LinesW";
import { FaUserGraduate } from "react-icons/fa6";
import { RiMicroscopeFill } from "react-icons/ri";
import { BsFillBriefcaseFill } from "react-icons/bs";

type Props = {};

const ToolForAll = (props: Props) => {
    const { resolvedTheme } = useTheme();
    return (
        <div className="pt-10 md:pt-20 px-4 md:px-0">
            <h3
                className={`text-center text-4xl sm:text-[60px] font-normal leading-[72px] tracking-[-0.6px] sm:tracking-[-1.2px] pb-3 sm:pb-[30px]`}
            >
                <span className=" whitespace-nowrap relative ">
                    {resolvedTheme === "light" ? <LinesB /> : <LinesW />}
                    <span
                        className={` z-50 text-transparent bg-clip-text  ${
                            resolvedTheme === "light"
                                ? "bg-gradient-to-r from-[#161616] via-[#666666] to-[#161616]"
                                : "bg-gradient-to-r from-slate-500 via-slate-100 to-slate-500"
                        } font-semibold`}
                    >
                        A Tool for All:
                    </span>
                </span>
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 py-10">
                <div className="px-2 flex flex-col items-center justify-center gap-2">
                    <FaUserGraduate className=" text-7xl" />
                    <h3 className="text-center text-primary text-3xl sm:text-5xl leading-[34.5px] tracking-[-1.2px]">
                        Students
                    </h3>
                    <p className="text-primary text-center text-[17px] sm:text-2xl leading-[20px] sm:leading-[34.5px] tracking-[-0.34px] sm:tracking-[-0.6px] pb-5 sm:pb-0 max-w-sm">
                        Interact with your study materials, prepare notes
                        efficiently, and understand the content better.
                    </p>
                </div>

                <div className="px-2 flex flex-col items-center justify-center gap-2">
                    <BsFillBriefcaseFill className=" text-7xl" />
                    <h3 className="text-center text-primary text-3xl sm:text-5xl leading-[34.5px] tracking-[-1.2px]">
                        Professionals
                    </h3>
                    <p className="text-primary text-center text-[17px] sm:text-2xl leading-[20px] sm:leading-[34.5px] tracking-[-0.34px] sm:tracking-[-0.6px] pb-5 sm:pb-0 max-w-sm">
                        Extract key points, simplify complex terms, understand
                        financial reports, and contracts effortlessly.
                    </p>
                </div>
                <div className="px-2 flex flex-col items-center justify-center gap-2">
                    <RiMicroscopeFill className=" text-7xl" />
                    <h3 className="text-center text-primary text-3xl sm:text-5xl leading-[34.5px] tracking-[-1.2px]">
                        Researchers
                    </h3>
                    <p className="text-primary text-center text-[17px] sm:text-2xl leading-[20px] sm:leading-[34.5px] tracking-[-0.34px] sm:tracking-[-0.6px] pb-5 sm:pb-0 max-w-sm">
                        Dive into scientific papers, academic articles, and save
                        alot of time on your research.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ToolForAll;
