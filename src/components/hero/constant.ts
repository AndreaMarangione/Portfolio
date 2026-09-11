import {PidBenchEquipment, PidBenchInstrument, PidBenchReading} from "@/components/hero/type";

export const FLOOR_A =
    "M-59.5 185 L-556.3 280 M-28.4 185 L-503.6 280 M2.8 185 L-450.9 280 " +
    "M33.9 185 L-398.2 280 M65.0 185 L-345.5 280 M96.1 185 L-292.8 280 " +
    "M127.2 185 L-240.1 280 M158.3 185 L-187.5 280 M189.5 185 L-134.8 280 " +
    "M220.6 185 L-82.1 280 M251.7 185 L-29.4 280 M282.8 185 L23.3 280 " +
    "M313.9 185 L76.0 280 M345.0 185 L128.7 280 M376.1 185 L181.4 280 " +
    "M407.3 185 L234.1 280 M438.4 185 L286.8 280 M469.5 185 L339.5 280 " +
    "M500.6 185 L392.2 280 M531.7 185 L444.9 280 M562.8 185 L497.6 280 " +
    "M594.0 185 L550.3 280 M625.1 185 L602.9 280 M656.2 185 L655.6 280 " +
    "M687.3 185 L708.3 280 M718.4 185 L761.0 280"

export const FLOOR_B =
    "M-27.3 185 L-181.5 280 M14.3 185 L-110.9 280 M56.0 185 L-40.3 280 " +
    "M97.7 185 L30.3 280 M139.4 185 L100.8 280 M181.1 185 L171.4 280 " +
    "M222.8 185 L242.0 280 M264.4 185 L312.6 280 M306.1 185 L383.2 280 " +
    "M347.8 185 L453.8 280 M389.5 185 L524.4 280 M431.2 185 L595.0 280 " +
    "M472.9 185 L665.5 280 M514.5 185 L736.1 280 M556.2 185 L806.7 280 " +
    "M597.9 185 L877.3 280 M639.6 185 L947.9 280 M681.3 185 L1018.5 280"

export const INSTRUMENTS: PidBenchInstrument[] = [
    {tag: "TT", num: "103", x: 210, y: 117},
    {tag: "PSL", num: "104", x: 280, y: 130},
    {tag: "PT", num: "101", x: 378, y: 130},
    {tag: "PIC", num: "101", x: 406, y: 104, panel: true},
    {tag: "FT", num: "102", x: 430, y: 130},
    {tag: "FIC", num: "102", x: 444, y: 104, panel: true},
    {tag: "ST", num: "201", x: 586, y: 124},
    {tag: "VT", num: "203", x: 616, y: 124},
    {tag: "TE", num: "202", x: 642, y: 48},
]

export const READINGS: PidBenchReading[] = [
    {x: 78, y: 162, text: "31.5 bar"},
    {x: 210, y: 104, text: "42 °C"},
    {x: 378, y: 117, text: "24.8 bar"},
    {x: 430, y: 117, text: "1 240 kg/h"},
    {x: 406, y: 176, text: "62 %"},
    {x: 574, y: 176, text: "48 %"},
    {x: 616, y: 142, text: "3.1 mm/s"},
    {x: 642, y: 66, text: "512 °C"},
    {x: 574, y: 78, text: "11.2 MW"},
]

export const EQUIPMENT: PidBenchEquipment[] = [
    {x: 56, y: 145, text: "FROM PIPELINE"},
    {x: 126, y: 134, text: "V-100 KO DRUM"},
    {x: 160, y: 176, text: "E-101 HEATER"},
    {x: 102, y: 92, text: "PSV-100"},
    {x: 398, y: 167, text: "PCV-101"},
    {x: 558, y: 167, text: "FCV-102"},
    {x: 632, y: 126, text: "GT-200"},
    {x: 556, y: 86, text: "G-300"},
]

export const FLOW_PATH =
    "M56 152 H100 M122 152 H160 M194 152 H234 M246 152 H356 M368 152 H398 " +
    "M414 152 H426 M432 152 H566 M582 152 H630 V104"

export const FADE = "linear-gradient(to right, rgba(0,0,0,0.26) 0%, rgba(0,0,0,0.26) 34%, black 52%)"
