const HmiLed = ({color = "g", pulse = false}: { color?: "g" | "o"; pulse?: boolean }) => (
    <span
        className={`inline-block h-[9px] w-[9px] flex-none rounded-full ${
            color === "o"
                ? "bg-primary shadow-[0_0_5px_rgba(233,84,32,0.65)]"
                : "bg-[#2fbf5f] shadow-[0_0_5px_rgba(47,191,95,0.65)]"
        } ${pulse ? "animate-pulse" : ""}`}
    />
);

export default HmiLed;
