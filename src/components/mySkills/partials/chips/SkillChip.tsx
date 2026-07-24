import {SkillChipProps} from "@/components/mySkills/type";

const SkillChip = ({label, icon}: SkillChipProps) => (
    <li className="flex items-center gap-2 whitespace-nowrap rounded-full border border-[#2f2f2f] bg-[#1c1c1c] px-4 py-2 transition-colors hover:border-primary/50">
        {icon}
        <span className="font-mono text-[13px] tracking-tight text-foreground/85">{label}</span>
    </li>
);

export default SkillChip;
