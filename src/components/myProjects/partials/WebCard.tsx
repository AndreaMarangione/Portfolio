import GithubIcon from "@/components/ui/GithubIcon";
import ProjectProcess from "@/components/myProjects/partials/ProjectProcess";
import {WebProject} from "@/components/myProjects/type";

const WebCard = ({p}: { p: WebProject }) => (
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

        <p className="my-3 text-[13.5px] leading-relaxed text-foreground/75">{p.description}</p>

        <ProjectProcess label={p.stackLabel} steps={p.stack} arrows={false}/>

        <button
            type="button"
            className="mt-4 flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-lg border border-primary/50 bg-primary/[0.08] p-2.5 text-[13.5px] font-medium text-[#f0b49c] transition-colors hover:border-primary/70 hover:bg-primary/15 hover:text-white"
        >
            <GithubIcon/>
            View on GitHub
        </button>
    </div>
);

export default WebCard;
