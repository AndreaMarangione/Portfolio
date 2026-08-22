export type WorldCity = {
    name: string;
    x: number;
    y: number;
    labelX: number;
    labelY: number;
};

export const PULSE_MIN_RADIUS = 5;
export const PULSE_MAX_RADIUS = 34;
export const PULSE_DURATION_S = 2.6;
export const PULSE_STAGGER_S = 0.26;

export const cities: WorldCity[] = [
    {name: "Tongxiang", x: 1640, y: 320, labelX: 1655, labelY: 340},
    {name: "Rudong", x: 1620, y: 290, labelX: 1630, labelY: 285},
    {name: "Fuzhou", x: 1610, y: 350, labelX: 1610, labelY: 385},
    {name: "Balikesir", x: 1140, y: 260, labelX: 1150, labelY: 285},
    {name: "Izmit", x: 1155, y: 235, labelX: 1160, labelY: 225},
    {name: "Zaragoza", x: 970, y: 235, labelX: 860, labelY: 265},
    {name: "Florence", x: 1050, y: 230, labelX: 1020, labelY: 215},
    {name: "Neumünster", x: 1040, y: 160, labelX: 1040, labelY: 145},
    {name: "Houston", x: 470, y: 300, labelX: 375, labelY: 330},
    {name: "Andalusia", x: 515, y: 290, labelX: 510, labelY: 275},
];
