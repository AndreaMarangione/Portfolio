export type Lang = "en" | "it";

type NavItem = {
    label: string;
    href: string;
};

export type NavLinkProps = {
    item: NavItem;
    activeId: string;
    onNavClick: (e: React.MouseEvent, href: string) => void;
    className?: string;
};

export type MenuToggleProps = {
    open: boolean;
    onClick: () => void;
};

export type MobileMenuProps = {
    open: boolean;
    activeId: string;
    onNavClick: (e: React.MouseEvent, href: string) => void;
    onClose: () => void;
};
