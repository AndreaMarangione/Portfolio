import type {ReactNode} from "react";

const AboutMeWindowButton = (
    {children, className = "", label}: { children: ReactNode; className?: string; label?: string }
) => (
    <button
        type="button"
        aria-label={label}
        className={`flex h-[30px] items-center gap-1.5 rounded-md bg-white/5 px-2.5 text-[13px] text-foreground/85 transition-colors hover:bg-white/10 ${className}`}
    >
        {children}
    </button>
);

export default AboutMeWindowButton;
