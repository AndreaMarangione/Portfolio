const SkillChip = ({label}: { label: string }) => (
    <li className="flex items-center gap-2 whitespace-nowrap rounded-full border border-[#2f2f2f] bg-[#1c1c1c] px-4 py-2 transition-colors hover:border-primary/50">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="shrink-0">
            <path d="M12 3 3 8l9 5 9-5-9-5Z" fill="#E95420"/>
            <path d="M3 12l9 5 9-5" stroke="#E95420" strokeWidth="1.6" strokeLinejoin="round"/>
            <path d="M3 16l9 5 9-5" stroke="#E95420" strokeWidth="1.6" strokeLinejoin="round"/>
        </svg>
        <span className="font-mono text-[13px] tracking-tight text-foreground/85">{label}</span>
    </li>
);

export default SkillChip;
