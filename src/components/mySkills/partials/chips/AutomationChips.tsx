import {automationSkills} from "@/components/mySkills/constant";
import SkillChip from "@/components/mySkills/partials/chips/SkillChip";

const AutomationChips = () => {
    return (
        <div
            className="group relative w-full overflow-hidden min-[1025px]:order-1 min-[1025px]:basis-full"
            style={{
                maskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
                WebkitMaskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
            }}
        >
            <div
                className="flex w-max animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
                <ul className="flex shrink-0 items-center gap-3 pr-3">
                    {automationSkills.map((s) => <SkillChip key={s} label={s}/>)}
                </ul>
                <ul className="flex shrink-0 items-center gap-3 pr-3" aria-hidden="true">
                    {automationSkills.map((s) => <SkillChip key={`${s}-dup`} label={s}/>)}
                </ul>
            </div>
        </div>
    )
}

export default AutomationChips;
