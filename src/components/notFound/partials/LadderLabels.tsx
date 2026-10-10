import {LadderLabelsProps} from "@/components/notFound/type";

const LadderLabels = ({tag, address, highlight = false, children}: LadderLabelsProps) => (
    <span className="relative flex shrink-0 items-center">
        <span
            className={`absolute bottom-full left-1/2 mb-1.5 -translate-x-1/2 whitespace-nowrap font-mono text-[9px] sm:text-[10.5px] ${
                highlight ? "font-bold text-primary" : "text-foreground/85"
            }`}
        >
            {tag}
        </span>
        {children}
        <span
            className="absolute left-1/2 top-full mt-1.5 -translate-x-1/2 whitespace-nowrap font-mono text-[9px] text-muted-foreground sm:text-[10px]">
            {address}
        </span>
    </span>
);

export default LadderLabels;
