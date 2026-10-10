import LadderLabels from "@/components/notFound/partials/LadderLabels";
import {LADDER_OFF, LADDER_ON} from "@/components/notFound/constant";
import {LadderContactProps} from "@/components/notFound/type";

const LadderContact = ({tag, address, closed, normallyClosed = false}: LadderContactProps) => {
    const color: string = closed ? LADDER_ON : LADDER_OFF;

    return (
        <LadderLabels tag={tag} address={address}>
            <svg width="28" height="22" viewBox="0 0 28 22" aria-hidden="true" fill="none" strokeWidth="2">
                <path d="M0 11 H9" stroke={LADDER_ON}/>
                <path d="M9 2 V20 M19 2 V20 M19 11 H28" stroke={color}/>
                {normallyClosed && <path d="M11 18 L17 4" stroke={color}/>}
            </svg>
        </LadderLabels>
    );
};

export default LadderContact;
