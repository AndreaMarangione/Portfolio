import {SkillModule} from "@/components/mySkills/type";

export const automationSkills: Array<string> = [
    "TIA Portal", "Simatic Manager", "Startdrive", "Sick", "Keyence", "Balluff",
    "Encoder", "Drives", "Laser scanner", "Safety barrier", "Safety", "Siemens",
    "ToolboxST", "Proficy machine edition", "Cimplicity",
];

export const webSkills: Array<string> = [
    "CRM", "HTML5", "CSS3", "NextJs", "Prisma", "REST API", "Git", "GitHub", "bCrypt", "Axios",
    "Cookie", "Shadcn", "JsonWebToken", "excelJs", "mjml", "Linux", "Windows"
];

export const automationModules: SkillModule[] = [
    {
        title: "PLC Programming",
        rows: [
            {name: "Structured Text"},
            {name: "STL — Siemens"},
            {name: "Ladder"},
            {name: "FBD - Function block diagram"},
        ]
    },
    {
        title: "Networks & Drives",
        rows: [
            {name: "Profinet, Profisafe, EGD, Modbus"},
            {name: "Drive config — async / brushless"},
            {name: "Axis control — encoders"},
        ],
    },
    {
        title: "Engineering & Delivery",
        rows: [
            {name: "Software & hardware design"},
            {name: "Production & process data"},
            {name: "Commissioning"},
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
    {n: "F6", label: "Diagnostics"},
];

export const terminalWebData = [
    {key: "developer", value: "Andrea Marangione"},
    {key: "role", value: "software developer"},
];

export const terminalWebSkills = [
    {key: "languages", items: ["JavaScript", "TypeScript", "Visual Basic", "C++", "Python"]},
    {key: "frontend", items: ["React", "Tailwind", "Bootstrap", "Redux", "Axios"]},
    {key: "backend", items: ["Node.js", "Express"]},
    {key: "database", items: ["PostgreSQL", "MongoDB"]},
    {key: "cloud", items: ["AWS", "Cloudinary"]},
    {key: "architecture", items: ["Database design", "Server design", "Client design"]},
];
