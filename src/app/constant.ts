import localFont from "next/font/local";
import {Viewport} from "next";

export const poppins = localFont({
    src: [
        {path: "./fonts/poppins/Poppins-Regular.ttf", weight: "400", style: "normal"},
        {path: "./fonts/poppins/Poppins-Medium.ttf", weight: "500", style: "normal"},
        {path: "./fonts/poppins/Poppins-SemiBold.ttf", weight: "600", style: "normal"},
        {path: "./fonts/poppins/Poppins-Bold.ttf", weight: "700", style: "normal"},
    ],
    variable: "--font-poppins",
    display: "swap",
});

export const VIEWPORT: Viewport = {
    themeColor: "#1E1E1E",
    colorScheme: "dark",
};
