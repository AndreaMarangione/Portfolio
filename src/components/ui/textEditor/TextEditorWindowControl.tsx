import type {ReactNode} from "react";

const TextEditorWindowControl = ({children, close = false}: { children: ReactNode; close?: boolean }) => (
    <span
        aria-hidden="true"
        className={`flex h-6.5 w-6.5 cursor-default items-center justify-center rounded-full 
        bg-white/5 text-foreground/70 transition-colors hover:bg-white/10 ${
            close ? "hover:bg-primary hover:text-white" : ""
        }`}
    >
        {children}
    </span>
);

export default TextEditorWindowControl;
