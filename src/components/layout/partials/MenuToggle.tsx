"use client";

import {MenuToggleProps} from "@/components/layout/type";

const MenuToggle = ({open, onClick}: MenuToggleProps) => {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={`flex h-9 w-9 items-center justify-center rounded-md border border-border bg-muted/40 text-foreground transition-colors md:hidden ${
                open
                    ? "hover:border-primary hover:bg-primary hover:text-white"
                    : "hover:border-[#4a4a4a] hover:text-primary"
            }`}
        >
            <span className="relative block h-3.5 w-[18px]">
                <span
                    className={`absolute left-0 h-0.5 w-full rounded-full bg-current transition-all duration-300 ease-[cubic-bezier(.6,.1,.3,1)] ${
                        open ? "top-1.5 rotate-45" : "top-0"
                    }`}
                />
                <span
                    className={`absolute left-0 top-1.5 h-0.5 w-full rounded-full bg-current transition-opacity duration-200 ${
                        open ? "opacity-0" : "opacity-100"
                    }`}
                />
                <span
                    className={`absolute left-0 h-0.5 w-full rounded-full bg-current transition-all duration-300 ease-[cubic-bezier(.6,.1,.3,1)] ${
                        open ? "top-1.5 -rotate-45" : "top-3"
                    }`}
                />
            </span>
        </button>
    );
};

export default MenuToggle;
