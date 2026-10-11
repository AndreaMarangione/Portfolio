import localFont from "next/font/local";
import {Viewport} from "next";

export const poppins = localFont({
    src: [
        {path: "./fonts/poppins/Poppins-Regular.woff2", weight: "400", style: "normal"},
        {path: "./fonts/poppins/Poppins-Medium.woff2", weight: "500", style: "normal"},
        {path: "./fonts/poppins/Poppins-SemiBold.woff2", weight: "600", style: "normal"},
        {path: "./fonts/poppins/Poppins-Bold.woff2", weight: "700", style: "normal"},
    ],
    variable: "--font-poppins",
    display: "swap",
});

export const VIEWPORT: Viewport = {
    themeColor: "#1E1E1E",
    colorScheme: "dark",
};
