import ProjectProcess from "@/components/myProjects/partials/ProjectProcess";
import {PlantProject} from "@/components/myProjects/type";

const PlantCard = ({p}: { p: PlantProject }) => (
    <div
        className="flex flex-col rounded-xl border border-border bg-[#202020] p-5 shadow-[0_20px_44px_-28px_rgba(0,0,0,0.7)]">
        <div className="flex items-start justify-between gap-3">
            <span className="text-[20px] font-bold text-foreground">{p.name}</span>
            <span
                className="flex-none whitespace-nowrap rounded-full border border-border px-2.5 py-1 font-mono text-[10px] tracking-[0.1em] text-white/70">
                {p.type}
            </span>
        </div>

        <div className="mb-3.5 mt-0.5 font-mono text-[12.5px] text-muted-foreground">
            <span className="text-primary">◆</span> {p.site}
        </div>
        <div className="mb-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-white/40">{p.product}</div>

        {p.capacity ? (
            <div className="mb-5 flex items-baseline gap-2">
                <span className="text-[34px] font-bold leading-none text-primary">{p.capacity.value}</span>
                <span className="font-mono text-xs text-muted-foreground">{p.capacity.unit}</span>
            </div>
        ) : (
            <div className="mb-5 text-[17px] font-semibold text-foreground">{p.description}</div>
        )}

        <ProjectProcess label={p.flowLabel} steps={p.flow}/>
    </div>
);

export default PlantCard;
