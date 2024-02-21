import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "nanaAI",
    description: "Empower your studies with your voice and AI.",
    openGraph: {
        images: [
            {
                url: "https://res.cloudinary.com/dvuazircp/image/upload/v1708341812/new_portfolio/nana_ewxcnl.png",
            },
        ],
    },
    icons: {
        icon: "/icon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <ClerkProvider>
            <html lang="en">
                <body className={inter.className}>
                    <Providers>
                        {children} <Analytics />
                    </Providers>
                </body>
            </html>
        </ClerkProvider>
    );
}
