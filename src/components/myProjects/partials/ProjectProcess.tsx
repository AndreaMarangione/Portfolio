import {Fragment} from "react";
import {ProjectProcessProps} from "@/components/myProjects/type";

const ProjectProcess = ({label, steps, arrows = true}: ProjectProcessProps) => (
    <div className="mt-auto border-t border-[#333] pt-4">
        <div className="mb-2.5 font-mono text-[9.5px] uppercase tracking-[0.14em] text-white/40">{label}</div>
        <div className="flex flex-wrap items-center gap-[7px] font-mono text-[11.5px]">
            {steps.map((step, i) => (
                <Fragment key={i}>
                    <span className="rounded-[5px] border border-border bg-[#171717] px-2 py-1 text-foreground/80">
                        {step}
                    </span>
                    {arrows && i < steps.length - 1 && <span className="text-white/40">→</span>}
                </Fragment>
            ))}
        </div>
    </div>
);

export default ProjectProcess;
