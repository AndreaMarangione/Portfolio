import {SectionDividerProps} from "@/components/sectionDivider/type";

const SectionDivider = ({dir}: SectionDividerProps) => {
    return (
        <div className="mb-10 md:mb-5">
            <p className="mt-1 font-mono text-sm">
                <span className="text-[#33d17a]">andrea@portfolio</span>
                <span className="text-white/40">:</span>
                <span className="text-[#5fa8e0]">~</span>
                <span className="text-white/40">$</span>{" "}
                <span className="text-foreground/75">cd</span>{" "}
                <span className="text-primary">~/{dir}</span>
                <span
                    className="ml-1 inline-block h-[1.05em] w-2 align-[-2px] bg-primary animate-[blink_1.1s_step-end_infinite]"/>
            </p>
        </div>
    );
};

export default SectionDivider;
