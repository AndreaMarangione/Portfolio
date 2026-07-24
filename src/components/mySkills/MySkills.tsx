"use client";

import WebChips from "@/components/mySkills/partials/chips/WebChips";
import AutomationChips from "@/components/mySkills/partials/chips/AutomationChips";
import Hmi from "@/components/mySkills/partials/hmi/Hmi";
import Terminal from "@/components/mySkills/partials/terminal/Terminal";

const MySkills = () => {
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

export default MySkills;
