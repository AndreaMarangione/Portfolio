import ProjectProcess from "@/components/myProjects/partials/ProjectProcess";
import {PlantProject} from "@/components/myProjects/type";

const PlantCard = ({p}: { p: PlantProject }) => {
    const current = p.status === "CURRENT";
    return (
        <div
            className={`flex flex-col rounded-xl border bg-[#202020] p-5 shadow-[0_20px_44px_-28px_rgba(0,0,0,0.7)] ${
                current ? "border-primary/50" : "border-border"
            }`}
        >
            <div className="flex items-start justify-between gap-3">
                <span className="text-[20px] font-bold text-foreground">{p.name}</span>
                <span
                    className={`flex flex-none items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-1 font-mono text-[10px] tracking-[0.1em] ${
                        current ? "border-primary/50 text-[#f0b49c]" : "border-border text-muted-foreground"
                    }`}
                >
                    <span
                        className={`h-[7px] w-[7px] rounded-full ${
                            current
                                ? "bg-primary shadow-[0_0_5px_rgba(233,84,32,0.6)]"
                                : "bg-[#2fbf5f] shadow-[0_0_5px_rgba(47,191,95,0.6)]"
                        }`}
                    />
                    {p.status}
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
};

export default PlantCard;
