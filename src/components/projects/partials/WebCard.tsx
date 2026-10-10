"use client";

import GithubIcon from "@/components/ui/icons/GithubIcon";
import ProjectProcess from "@/components/projects/partials/ProjectProcess";
import {WebProject} from "@/components/projects/type";
import {useDictionary} from "@/i18n/DictionaryProvider";

const WebCard = ({p}: { p: WebProject }) => {
    const {dict} = useDictionary();
    const description: string = dict.projects.descriptions[p.name] ?? p.description;
    const stackLabel: string = dict.projects.labels[p.stackLabel] ?? p.stackLabel;

    return (
        <div
            className="relative flex flex-col rounded-xl border border-border bg-background p-5 shadow-[0_20px_44px_-28px_rgba(0,0,0,0.7)]
            transition-[transform,border-color] duration-300 hover:z-10 hover:scale-[1.02] hover:border-primary/50
            motion-reduce:hover:scale-100">
            <div className="flex items-start justify-between gap-3">
                <h3 className="text-[20px] font-bold text-foreground/85">{p.name}</h3>
                <span
                    className="flex-none whitespace-nowrap rounded-full border border-primary/50 px-2.5
                    py-1 font-mono text-[10px] tracking-widest text-primary"
                >
                    {p.type}
                </span>
            </div>

            <p className="my-3 text-[13.5px] leading-relaxed text-foreground/75">{description}</p>

            <ProjectProcess label={stackLabel} steps={p.stack} arrows={false}/>

            {p.githubUrl && (
                <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex w-full items-center justify-center gap-2.5 rounded-lg border border-primary/50
                    bg-primary/8 p-2.5 text-[13.5px] font-medium text-[#f0b49c] transition-colors
                    hover:border-primary/70 hover:bg-primary/15 hover:text-white"
                >
                    <GithubIcon/>
                    {dict.projects.viewOnGithub}
                </a>
            )}
        </div>
    );
};

export default WebCard;
