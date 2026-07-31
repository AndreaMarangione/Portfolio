import "./globals.css";
import Navbar from "@/components/layout/navbar/Navbar";
import {poppins} from "@/app/constant";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Andrea Marangione",
    description: "Andrea Marangione portfolio",
};

export default function RootLayout(
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>) {
    return (
        <html
            lang="en"
            className={`dark ubuntu ${poppins.variable} h-full antialiased`}
        >
        <body className="min-h-full flex flex-col">
        <Navbar/>
        <main className="flex-1">{children}</main>
        </body>
        </html>
    );
}
