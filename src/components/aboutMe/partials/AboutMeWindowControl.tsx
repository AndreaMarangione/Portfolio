import type {ReactNode} from "react";

const AboutMeWindowControl = (
    {children, label, close = false}: { children: ReactNode; label: string; close?: boolean }
) => (
    <button
        type="button"
        aria-label={label}
        className={`flex h-[26px] w-[26px] items-center justify-center rounded-full bg-white/5 text-foreground/70 transition-colors hover:bg-white/10 ${
            close ? "hover:bg-primary hover:text-white" : ""
        }`}
    >
        {children}
    </button>
);

export default AboutMeWindowControl;
