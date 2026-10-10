import {LadderNetworkProps} from "@/components/notFound/type";

const LadderNetwork = ({label, index, title, comment, children}: LadderNetworkProps) => (
    <div>
        <div className="flex items-baseline gap-2 border-b border-[#333] pb-2 font-mono text-[10.5px] sm:text-xs">
            <span className="text-white/40">▼</span>
            <span className="shrink-0 text-foreground/80">{label} {index}:</span>
            <span className="shrink-0 text-muted-foreground">{title}</span>
            {comment && <span className="ml-auto min-w-0 truncate text-white/35">{"// "}{comment}</span>}
        </div>
        <div className="flex items-center border-x-2 border-[#46c46e] py-7">
            {children}
        </div>
    </div>
);

export default LadderNetwork;
