import GithubIcon from "@/components/ui/GithubIcon";
import ProjectProcess from "@/components/myProjects/partials/ProjectProcess";
import {WebProject} from "@/components/myProjects/type";

const WebCard = ({p}: { p: WebProject }) => (
    <div
        className="flex flex-col rounded-xl border border-border bg-[#202020] p-5 shadow-[0_20px_44px_-28px_rgba(0,0,0,0.7)]">
        <div className="flex items-start justify-between gap-3">
            <span className="text-[20px] font-bold text-foreground">{p.name}</span>
            <span
                className="flex-none whitespace-nowrap rounded-full border border-border px-2.5 py-1 font-mono text-[10px] tracking-[0.1em] text-white/70">
                {p.type}
            </span>
        </div>

        <p className="my-3 text-[13.5px] leading-relaxed text-foreground/75">{p.description}</p>

        <div className="mb-[18px] flex flex-wrap gap-[7px]">
            {p.stack.map((s) => (
                <span key={s}
                      className="rounded-[5px] border border-border bg-[#171717] px-2 py-1 font-mono text-[11px] text-foreground/80">
                    {s}
                </span>
            ))}
        </div>

        <ProjectProcess label={p.stackLabel} steps={p.flow}/>

        <button
            type="button"
            className="mt-4 flex w-full items-center justify-center gap-2.5 rounded-lg border border-border bg-[#171717] p-2.5 text-[13.5px] font-medium text-foreground/90 transition-colors hover:border-[#4a4a4a] hover:bg-[#242424]"
        >
            <GithubIcon/>
            View on GitHub
        </button>
    </div>
);

export default WebCard;
