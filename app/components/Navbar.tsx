"use client";

type Props = {
    children: React.ReactNode;
};

export default function Navbar({ children }: Props) {
    return (
        <nav className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2 relative">
            {children}
        </nav>
    );
}
