import Link from "next/link";
import { SiX } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";

type Props = {
    className?: string;
};

export default function Footer({className}: Props) {
    return (
        <div className={className}>
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
