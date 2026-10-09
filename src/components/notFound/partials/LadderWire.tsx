import {LadderWireProps} from "@/components/notFound/type";

const LadderWire = ({on, className = ""}: LadderWireProps) => (
    <span
        aria-hidden="true"
        className={`h-0 border-t-2 transition-colors duration-200 ${
            on ? "border-solid border-[#46c46e]" : "border-dashed border-[#5fa8e0]"
        } ${className}`}
    />
);

export default LadderWire;
