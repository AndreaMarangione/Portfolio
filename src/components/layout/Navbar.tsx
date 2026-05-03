"use client";

import {useState} from "react";
import Link from "next/link";
import {Button} from "@/components/ui/button";

const navItems = [
    {label: "Home", href: "#home"},
    {label: "About", href: "#about"},
    {label: "Skills", href: "#skills"},
    {label: "Projects", href: "#projects"},
    {label: "Contact", href: "#contact"},
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleScroll = (e: React.MouseEvent, href: string) => {
        const currentHash: string = window.location.hash;

        if (currentHash === href) {
            e.preventDefault();

            const id = href.replace("#", "");
            const element = document.getElementById(id);

            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                });
            }
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur border-b border-border">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

                <div className="text-primary font-semibold text-lg">
                    AM
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            onClick={(e) => {
                                handleScroll(e, item.href)
                            }}
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <Button size="sm">
                        Get in touch
                    </Button>

                    <button
                        className="md:hidden text-foreground"
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
                                handleScroll(e, item.href);
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
