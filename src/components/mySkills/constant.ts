import {SkillModule} from "@/components/mySkills/type";

export const automationModules: SkillModule[] = [
    {
        title: "PLC Programming",
        rows: [
            {name: "Structured Text", core: true},
            {name: "STL — Siemens", core: true},
            {name: "Ladder"},
        ],
    },
    {
        title: "Networks & Drives",
        rows: [
            {name: "Profinet design", core: true},
            {name: "Drive config — async / brushless"},
            {name: "Axis control — encoders"},
        ],
    },
    {
        title: "Engineering & Delivery",
        rows: [
            {name: "Software design from scratch"},
            {name: "Production & process data"},
            {name: "Commissioning", core: true},
            {name: "Project management"},
        ],
    },
];

export const hmiFunctionKeys = [
    {n: "F1", label: "Overview", active: true},
    {n: "F2", label: "Trends"},
    {n: "F3", label: "Alarms"},
    {n: "F4", label: "Drives"},
    {n: "F5", label: "Network"},
    {n: "F6", label: "Diag"},
];

export const webData = [
    {key: "developer", value: "Andrea Marangione"},
    {key: "role", value: "web developer"},
];

export const webSkills = [
    {key: "languages", items: ["JavaScript", "TypeScript"]},
    {key: "frontend", items: ["React", "Redux", "Tailwind", "Bootstrap", "Axios"]},
    {key: "backend", items: ["Node.js", "Express"]},
    {key: "database", items: ["MongoDB", "PostgreSQL"]},
    {key: "architecture", items: ["Database design", "Server design", "Client design"]},
];


