"use client";

type Props = {
    children: React.ReactNode;
};

export default function Navbar({ children }: Props) {
    return (
        <nav className="flex justify-between items-center w-full sm:mt-5 border-b-2 sm:px-4 px-2 relative">
            {children}
        </nav>
    );
}
