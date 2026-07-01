"use client";

import {useState} from "react";
import Link from "next/link";
import {NAVBAR_HEIGHT, navItems} from "@/components/layout/constant";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleNavClick = (e: React.MouseEvent, href: string) => {
        e.preventDefault();
        setOpen(false);

        const id = href.replace("#", "");
        const element = document.getElementById(id);

        if (!element) return;

        const top =
            element.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;

        window.scrollTo({top, behavior: "smooth"});
        window.history.pushState(null, "", href);
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur border-b border-border">
            <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12 h-16 flex items-center justify-between">
                <div className="text-primary font-semibold text-lg">
                    AM
                </div>
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            onClick={(e) => {
                                handleNavClick(e, item.href)
                            }}
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center gap-3">
                    <button
                        className="md:hidden text-foreground text-2xl leading-none"
                        onClick={() => setOpen(!open)}
                    >
                        ☰
                    </button>
                </div>
            </div>
            {open && (
                <div className="md:hidden px-6 pb-4 space-y-4 bg-background border-t border-border">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            onClick={(e) => {
                                handleNavClick(e, item.href);
                                setOpen(false);
                            }}
                            className="block text-muted-foreground hover:text-primary"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}

export default Navbar;
