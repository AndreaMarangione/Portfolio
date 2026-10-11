import type {ReactNode} from "react";

const TextEditorWindowControl = ({children, close = false}: { children: ReactNode; close?: boolean }) => (
    <span
        aria-hidden="true"
        className={`flex h-6.5 w-6.5 cursor-default items-center justify-center rounded-full 
        bg-white/5 text-foreground/85 transition-colors ${
            close ? "hover:bg-primary hover:text-primary-foreground" : "hover:bg-white/10"
        }`}
    >
        {children}
    </span>
);

export default TextEditorWindowControl;
