"use client";

import {useState} from "react";
import {NAVBAR_HEIGHT, navItems} from "@/components/layout/constant";
import LanguageSwitch from "@/components/layout/partials/LanguageSwitch";
import NavLink from "@/components/layout/partials/NavLink";
import MenuToggle from "@/components/layout/partials/MenuToggle";
import MobileMenu from "@/components/layout/partials/MobileMenu";
import useActiveSection from "@/hooks/useActiveSections";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const ids: Array<string> = navItems.map((item) => item.href.replace("#", ""));
    const activeId: string = useActiveSection(ids, NAVBAR_HEIGHT + 1);

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
        <>
            <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur border-b border-border">
                <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12 h-16 flex items-center justify-between">
                    <div className="text-primary font-bold text-2xl">
                        AM
                    </div>
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.label}
                                item={item}
                                activeId={activeId}
                                onNavClick={handleNavClick}
                            />
                        ))}
                    </nav>
                    <div className="flex items-center gap-3">
                        <LanguageSwitch/>
                        <MenuToggle open={open} onClick={() => setOpen(!open)}/>
                    </div>
                </div>
            </header>

            <MobileMenu
                open={open}
                activeId={activeId}
                onNavClick={handleNavClick}
                onClose={() => setOpen(false)}
            />
        </>
    );
}

export default Navbar;
