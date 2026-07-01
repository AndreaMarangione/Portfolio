"use client";

import Link from "next/link";
import {NavLinkProps} from "@/components/layout/type";

const NavLink = ({item, activeId, onNavClick, className = ""}: NavLinkProps) => {
    const isActive: boolean = activeId === item.href.replace("#", "");

    return (
        <Link
            href={item.href}
            onClick={(e) => onNavClick(e, item.href)}
            aria-current={isActive ? "page" : undefined}
            className={`transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
            } ${className}`}
        >
            {item.label}
        </Link>
    );
};

export default NavLink;
