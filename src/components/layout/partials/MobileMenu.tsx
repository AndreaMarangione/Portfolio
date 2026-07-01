"use client";

import Link from "next/link";
import {navItems} from "@/components/layout/constant";
import {MobileMenuProps} from "@/components/layout/type";

const MobileMenu = ({open, activeId, onNavClick, onClose}: MobileMenuProps) => {
    if (!open) return null;

    return (
        <div className="md:hidden">
            <div
                onClick={onClose}
                aria-hidden
                className="fixed inset-x-0 bottom-0 top-16 z-40 bg-black/40 animate-in fade-in-0 duration-200"
            />

            <div
                className="fixed inset-x-0 top-16 z-50 border-b border-border bg-background pb-3 pt-2 animate-in fade-in-0 slide-in-from-top-2 duration-200 ease-out">
                {navItems.map((item) => {
                    const id: string = item.href.replace("#", "");
                    const isActive: boolean = activeId === id;

                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            onClick={(e) => onNavClick(e, item.href)}
                            aria-current={isActive ? "page" : undefined}
                            className={`flex items-center border-l-[3px] px-6 py-3 font-mono transition-colors ${
                                isActive
                                    ? "border-primary bg-primary/[0.06] text-primary"
                                    : "border-transparent text-muted-foreground hover:bg-white/[0.03] hover:text-foreground"
                            }`}
                        >
                            <span className={`mr-2 text-sm ${isActive ? "text-primary" : "text-white/40"}`}>~/</span>
                            <span className="text-[15px]">{id}</span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default MobileMenu;
