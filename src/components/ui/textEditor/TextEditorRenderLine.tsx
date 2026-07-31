import type {ReactNode} from "react";
import {Caret} from "@/components/ui/Caret";
import {TextEditorLineType} from "@/components/ui/textEditor/type";

const TextEditorRenderLine = (line: TextEditorLineType, isLast: boolean): ReactNode => {
    switch (line.kind) {
        case "heading":
            return (
                <span className="text-foreground/80">
                    <span className="text-primary/55"># </span>
                    <span className="text-primary font-bold">{line.text}</span>
                </span>
            );
        case "bold":
            return (
                <span className="text-foreground/80">
                    <span className="text-white/35">**</span>
                    <span className="text-foreground font-bold">{line.text}</span>
                    <span className="text-white/35">**</span>
                </span>
            );
        case "quote":
            return (
                <span className="block border-l-2 border-primary/55 pl-3 italic text-muted-foreground">
                    <span className="not-italic text-white/35">&gt; </span>
                    {line.text}
                    {isLast && <Caret/>}
                </span>
            );
        case "link":
            return (
                <span className="text-foreground/80">
                    <a
                        href={line.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary underline decoration-primary/40 underline-offset-2 transition-colors hover:decoration-primary"
                    >
                        {line.text}
                    </a>
                    {isLast && <Caret/>}
                </span>
            );
        case "text":
            return (
                <span className="text-foreground/80">
                    {line.text}
                    {isLast && <Caret/>}
                </span>
            );
        case "blank":
            return <span>{"\u00A0"}</span>;
    }
};

export default TextEditorRenderLine;
