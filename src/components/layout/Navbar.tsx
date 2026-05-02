"use client";

import Link from "next/link";
import {Button} from "@/components/ui/button";

const navItems = [
    {label: "Home", href: "#home"},
    {label: "About", href: "#about"},
    {label: "Projects", href: "#projects"},
    {label: "Contact", href: "#contact"},
];

export default function Navbar() {
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
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
                <Button size="sm">
                    Get in touch
                </Button>
            </div>
        </header>
    );
}
