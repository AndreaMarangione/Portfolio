import LadderLabels from "@/components/notFound/partials/LadderLabels";
import {LADDER_OFF, LADDER_ON} from "@/components/notFound/constant";
import {LadderCoilProps} from "@/components/notFound/type";

const LadderCoil = ({tag, address, on, set = false, reset = false, highlight = false}: LadderCoilProps) => {
    const color: string = on ? LADDER_ON : LADDER_OFF;
    const letter: string = set ? "S" : reset ? "R" : "";

    return (
        <LadderLabels tag={tag} address={address} highlight={highlight}>
            <svg
                width="28"
                height="22"
                viewBox="0 0 28 22"
                aria-hidden="true"
                fill="none"
                stroke={color}
                strokeWidth="2"
                className={`transition-[filter] duration-200 ${on ? "drop-shadow-[0_0_6px_rgba(70,196,110,0.6)]" : ""}`}
            >
                <path d="M0 11 H6 M22 11 H28"/>
                <path d="M9 2 Q3 11 9 20 M19 2 Q25 11 19 20"/>
                {letter && (
                    <text x="14" y="15" textAnchor="middle" fontSize="10" fill={color} stroke="none">{letter}</text>
                )}
            </svg>
        </LadderLabels>
    );
};

export default LadderCoil;
