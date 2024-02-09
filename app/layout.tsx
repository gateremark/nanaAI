import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "researchat",
    description: "Empower your studies with AI and arXiv.",
    openGraph: {
        images: [
            {
                url: "https://res.cloudinary.com/dvuazircp/image/upload/v1707449101/researchat_p3y3sl.webp",
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
      <html lang="en">
          <body className={inter.className}>
              <Providers>{children}</Providers>
          </body>
      </html>
  );
}
