import {HMI_LED_COLORS} from "@/components/skills/constant";

const HmiLed = ({color = "g", pulse = false}: { color?: keyof typeof HMI_LED_COLORS; pulse?: boolean }) => (
    <span
        className={`inline-block h-2.25 w-2.25 flex-none rounded-full ${HMI_LED_COLORS[color]} ${pulse ? "animate-pulse" : ""}`}
    />
);

export default HmiLed;
