import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

type Props = {
    className?: string;
};

export default function ThemeIcon({ className }: Props) {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <>
            {theme === "dark" ? (
                <button
                    className={className}
                    onClick={() => setTheme("light")}
                    title="Light Mode"
                >
                    <FiSun className="text-2xl" />
                </button>
            ) : (
                <button
                    className={className}
                    onClick={() => setTheme("dark")}
                    title="Dark Mode"
                >
                    <FiMoon className="text-2xl " />
                </button>
            )}
        </>
    );
}
