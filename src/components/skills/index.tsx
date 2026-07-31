"use client";

import WebChips from "@/components/skills/partials/chips/WebChips";
import AutomationChips from "@/components/skills/partials/chips/AutomationChips";
import Hmi from "@/components/skills/partials/hmi/Hmi";
import Terminal from "@/components/skills/partials/terminal/Terminal";

const skills = () => {
    return (
        <div className="flex w-full animate-fade-up flex-col items-center max-[1024px]:gap-y-8
            md:max-[1024px]:gap-y-10 min-[1025px]:flex-1 min-[1025px]:flex-row min-[1025px]:flex-wrap
            min-[1025px]:items-stretch min-[1025px]:content-evenly min-[1025px]:gap-x-6"
        >
            <AutomationChips/>
            <Hmi/>
            <WebChips/>
            <Terminal/>
        </div>
    );
};

export default skills;
