import {AboutMeLineType} from "@/components/aboutMe/type";
import type {ReactNode} from "react";

const AboutMeRenderLine = (line: AboutMeLineType, isLast: boolean): ReactNode => {
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
                    {isLast && (
                        <span
                            className="ml-0.5 inline-block h-[1.05em] w-px align-[-2px] bg-primary animate-[blink_1.1s_step-end_infinite]"/>
                    )}
                </span>
            );
        case "text":
            return <span className="text-foreground/80">{line.text}</span>;
        case "blank":
            return <span>{"\u00A0"}</span>;
    }
};

export default AboutMeRenderLine;
