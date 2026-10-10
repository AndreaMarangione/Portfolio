"use client";

import {useState} from "react";
import {Project} from "@/components/projects/type";
import PlantCard from "@/components/projects/partials/PlantCard";
import {PROJECTS_VISIBLE} from "@/components/projects/constant";
import {useDictionary} from "@/i18n/DictionaryProvider";
import WebCard from "@/components/projects/partials/WebCard";

const ProjectGroup = ({projects}: { projects: Project[] }) => {
    const [expanded, setExpanded] = useState(false);
    const {dict} = useDictionary();
    const hiddenCount: number = projects.length - PROJECTS_VISIBLE;
    const hasMore: boolean = hiddenCount > 0;
    const moreLabel: string = dict.projects.showMore.replace("{count}", String(hiddenCount));

    return (
        <div>
            <div className="grid grid-cols-1 gap-4.5 sm:grid-cols-[repeat(auto-fit,minmax(330px,1fr))]">
                {projects.map((p, i) => (
                    <div key={p.name} className={expanded || i < PROJECTS_VISIBLE ? "contents" : "hidden"}>
                        {p.kind === "plant" ? <PlantCard p={p}/> : <WebCard p={p}/>}
                    </div>
                ))}
            </div>

            {hasMore && (
                <div className="mt-4.5 flex justify-center">
                    <button
                        type="button"
                        onClick={() => setExpanded(!expanded)}
                        aria-expanded={expanded}
                        className="flex cursor-pointer items-center gap-2.5 rounded-full border border-border bg-[#171717] px-5.5 py-2.5 font-mono text-xs tracking-[0.06em] text-foreground/85 transition-colors hover:border-primary/50 hover:text-[#f0b49c]"
                    >
                        {expanded ? dict.projects.showLess : moreLabel}
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProjectGroup;
