import Link from "next/link";
import { SiX } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";

type Props = {};

export default function Footer(props: Props) {
    return (
        <div className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3">
            <span>
                by{" "}
                <a
                    href="https://gatere.me"
                    target="_blank"
                    className="font-bold transition hover:text-black/50 dark:hover:text-white/50"
                    aria-label="gateremark on X"
                    rel="noopener noreferrer"
                >
                    gateremark
                </a>{" "}
            </span>
            <div className="flex space-x-4 pb-4 sm:pb-0">
                <Link
                    href="https://twitter.com/gatere_mark"
                    target="_blank"
                    className=""
                    aria-label="gateremark on X"
                    rel="noopener noreferrer"
                >
                    <SiX className="text-lg hover:scale-110 transition duration-150" />
                </Link>
                <Link
                    href="https://www.linkedin.com/in/gateremark/"
                    target="_blank"
                    className=""
                    aria-label="gateremark on GitHub"
                    rel="noopener noreferrer"
                >
                    <FaLinkedinIn className="text-xl hover:scale-110 transition duration-150" />
                </Link>
            </div>
        </div>
    );
}
