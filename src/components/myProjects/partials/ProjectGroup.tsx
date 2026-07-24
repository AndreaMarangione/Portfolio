"use client";

import {useState} from "react";
import {Project} from "@/components/myProjects/type";
import PlantCard from "@/components/myProjects/partials/PlantCard";
import WebCard from "@/components/myProjects/partials/WebCard";
import {PROJECTS_VISIBLE} from "@/components/myProjects/constant";

const ProjectGroup = ({projects}: { projects: Project[] }) => {
    const [expanded, setExpanded] = useState(false);
    const hiddenCount: number = projects.length - PROJECTS_VISIBLE;
    const hasMore: boolean = hiddenCount > 0;
    const shown: Project[] = expanded ? projects : projects.slice(0, PROJECTS_VISIBLE);

    return (
        <div>
            <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-[repeat(auto-fit,minmax(330px,1fr))]">
                {shown.map((p) =>
                    p.kind === "plant"
                        ? <PlantCard key={p.name} p={p}/>
                        : <WebCard key={p.name} p={p}/>
                )}
            </div>

            {hasMore && (
                <div className="mt-[18px] flex justify-center">
                    <button
                        type="button"
                        onClick={() => setExpanded(!expanded)}
                        aria-expanded={expanded}
                        className="flex cursor-pointer items-center gap-2.5 rounded-full border border-border bg-[#171717] px-[22px] py-2.5 font-mono text-xs tracking-[0.06em] text-foreground/85 transition-colors hover:border-primary/50 hover:text-[#f0b49c]"
                    >
                        {expanded ? "− show less" : `+ ${hiddenCount} more projects`}
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProjectGroup;
