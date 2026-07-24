const HmiScrew = ({className}: { className: string }) => (
    <span
        className={`absolute h-[6px] w-[6px] rounded-full bg-[#1b1b1b] ${className}`}
        style={{boxShadow: "inset 0 1px 1px rgba(0,0,0,0.7), 0 0 0 1px #060606"}}
    />
);

export default HmiScrew;
