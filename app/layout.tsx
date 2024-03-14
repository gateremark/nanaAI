import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
// import { Analytics } from "@vercel/analytics/react";
import { ClerkProvider } from "@clerk/nextjs";
import ReactQueryProviders from "./components/ReactQueryProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "nanaAI",
    description: "Empower your studies with your voice and AI.",
    openGraph: {
        images: [
            {
                url: "https://res.cloudinary.com/dvuazircp/image/upload/v1710457208/nanaogimg_o0aamm.webp",
            },
        ],
    },
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <ReactQueryProviders>
                <html lang="en">
                    <body className={inter.className}>
                        <Providers>
                            {children}
                            {/* <Analytics /> */}
                        </Providers>
                    </body>
                </html>
            </ReactQueryProviders>
        </ClerkProvider>
    );
}
