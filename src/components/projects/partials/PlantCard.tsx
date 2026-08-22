"use client";

import ProjectProcess from "@/components/projects/partials/ProjectProcess";
import {PlantProject} from "@/components/projects/type";
import {useDictionary} from "@/i18n/DictionaryProvider";

const PlantCard = ({p}: { p: PlantProject }) => {
    const {dict} = useDictionary();
    const description: string = dict.projects.descriptions[p.name] ?? p.description ?? "";
    const flowLabel: string = dict.projects.labels[p.flowLabel] ?? p.flowLabel;
    const product: string = dict.projects.products[p.product] ?? p.product;
    const flow: string[] = p.flow.map((step) => dict.projects.steps[step] ?? step);

    const unit: string = p.capacity
        ? dict.projects.units[p.capacity.unit] ?? p.capacity.unit
        : "";

    return (
        <div
            className="relative flex flex-col rounded-xl border border-border bg-[#202020] p-5 shadow-[0_20px_44px_-28px_rgba(0,0,0,0.7)]
            transition-[transform,border-color] duration-300 hover:z-10 hover:scale-[1.02] hover:border-primary/50
            motion-reduce:hover:scale-100">
            <div className="flex items-start justify-between gap-3">
                <span className="text-[20px] font-bold text-foreground">{p.name}</span>
                <span
                    className="flex-none whitespace-nowrap rounded-full border border-primary/50 px-2.5 py-1 font-mono text-[10px] tracking-[0.1em] text-primary">
                    {p.type}
                </span>
            </div>

            <div className="mb-3.5 mt-0.5 font-mono text-[12.5px] text-muted-foreground">
                <span className="text-primary">◆</span> {p.site}
            </div>
            <div className="mb-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-white/40">{product}</div>

            {p.capacity ? (
                <div className="mb-5 flex items-baseline gap-2">
                    <span className="text-[34px] font-bold leading-none text-primary">{p.capacity.value}</span>
                    <span className="font-mono text-xs text-muted-foreground">{unit}</span>
                </div>
            ) : (
                <div className="mb-5 text-[17px] font-semibold text-foreground">{description}</div>
            )}

            <ProjectProcess label={flowLabel} steps={flow}/>
        </div>
    );
};

export default PlantCard;
