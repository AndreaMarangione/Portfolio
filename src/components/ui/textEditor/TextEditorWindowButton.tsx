import type {ReactNode} from "react";

const TextEditorWindowButton = ({children, className = ""}: { children: ReactNode; className?: string }) => (
    <span
        aria-hidden="true"
        className={`flex h-7.5 cursor-default select-none items-center gap-1.5 rounded-md 
        bg-white/5 px-2.5 text-[13px] text-foreground/85 transition-colors hover:bg-white/10 ${className}`}
    >
        {children}
    </span>
);

export default TextEditorWindowButton;
