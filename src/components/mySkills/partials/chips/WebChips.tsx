import {webSkills} from "@/components/mySkills/constant";
import SkillChip from "@/components/mySkills/partials/chips/SkillChip";
import WebIcon from "@/components/ui/WebIcon";

const WebChips = () => {
    return (
        <div
            className="group relative w-full overflow-hidden min-[1025px]:order-4 min-[1025px]:basis-full"
            style={{
                maskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
                WebkitMaskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
            }}
        >
            <div
                className="flex w-max animate-[marquee_40s_linear_infinite_reverse] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
                <ul className="flex shrink-0 items-center gap-3 pr-3">
                    {webSkills.map((s) => <SkillChip key={s} label={s} icon={<WebIcon/>}/>)}
                </ul>
                <ul className="flex shrink-0 items-center gap-3 pr-3" aria-hidden="true">
                    {webSkills.map((s) => <SkillChip key={`${s}-dup`} label={s} icon={<WebIcon/>}/>)}
                </ul>
            </div>
        </div>
    )
}

export default WebChips;
