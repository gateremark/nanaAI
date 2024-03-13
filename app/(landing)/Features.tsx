import { useTheme } from "next-themes";
import LinesB from "@/app/assets/LinesB";
import LinesW from "@/app/assets/LinesW";
import { SiOpenai } from "react-icons/si";
import { FaUserFriends } from "react-icons/fa";
import { IoChatbubblesSharp } from "react-icons/io5";

type Props = {};

const Features = (props: Props) => {
    const { resolvedTheme } = useTheme();
    return (
        <div className="pt-10 md:pt-20 px-4 md:px-0">
            <h3
                className={`text-center text-4xl sm:text-[60px] font-normal leading-[72px] tracking-[-0.6px] sm:tracking-[-1.2px] pb-3 sm:pb-[30px]`}
            >
                <span className=" whitespace-nowrap relative ">
                    {/* {resolvedTheme === "light" ? <LinesB /> : <LinesW />} */}
                    <span
                        className={` z-50 text-transparent bg-clip-text  ${
                            resolvedTheme === "light"
                                ? "bg-gradient-to-r from-[#161616] via-[#666666] to-[#161616]"
                                : "bg-gradient-to-r from-slate-500 via-slate-100 to-slate-500"
                        } font-semibold`}
                    >
                        Features:
                    </span>
                </span>
            </h3>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 py-5">
                <div className="p-2 flex flex-col items-center justify-center gap-2 bg-slate-200 dark:bg-slate-700 rounded-xl">
                    <SiOpenai className=" text-7xl" />
                    <h3 className="text-center text-primary text-3xl sm:text-5xl leading-[34.5px] tracking-[-1.2px]">
                        AI-Powered Conversation
                    </h3>
                    {/* <p className="text-primary text-center text-[17px] sm:text-2xl leading-[20px] sm:leading-[34.5px] tracking-[-0.34px] sm:tracking-[-0.6px] pb-5 sm:pb-0 max-w-sm">
                        Get the best out of your conversation with our
                        AI-powered tool.
                    </p> */}
                </div>

                <div className="p-2 flex flex-col items-center justify-center gap-2 bg-slate-200 dark:bg-slate-700 rounded-xl">
                    <FaUserFriends className=" text-7xl" />
                    <h3 className="text-center text-primary text-3xl sm:text-5xl leading-[34.5px] tracking-[-1.2px]">
                        User-friendly Interface
                    </h3>
                    {/* <p className="text-primary text-center text-[17px] sm:text-2xl leading-[20px] sm:leading-[34.5px] tracking-[-0.34px] sm:tracking-[-0.6px] pb-5 sm:pb-0 max-w-sm">
                        Our tool is designed to be user-friendly and easy to
                        use.
                    </p> */}
                </div>
                <div className="p-2 flex flex-col items-center justify-center gap-2 bg-slate-200 dark:bg-slate-700 rounded-xl">
                    <IoChatbubblesSharp className=" text-7xl" />
                    <h3 className="text-center text-primary text-3xl sm:text-5xl leading-[34.5px] tracking-[-1.2px]">
                        Real-time and interactive conversation.
                    </h3>
                    {/* <p className="text-primary text-center text-[17px] sm:text-2xl leading-[20px] sm:leading-[34.5px] tracking-[-0.34px] sm:tracking-[-0.6px] pb-5 sm:pb-0 max-w-sm">
                        Our tool is designed to be user-friendly and easy to
                        use.
                    </p> */}
                </div>
            </div>
        </div>
    );
};

export default Features;
