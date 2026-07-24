import {Project} from "@/components/myProjects/type";

export const projects: Project[] = [
    {
        kind: "plant",
        name: "Baker Hughes",
        type: "OIL & GAS",
        description: "Commissioning & turbine control",
        site: "Houston · Texas, USA",
        product: "Gas turbine test bench · R&D",
        flowLabel: "Scope",
        flow: ["Commissioning", "Turbine test", "Control & monitoring"],
    },
    {
        kind: "plant",
        name: "Shanli",
        type: "AUTOMATION",
        site: "Fuzhou · China",
        product: "POY & FDY coils",
        capacity: {value: "65,000", unit: "coils / day"},
        flowLabel: "Production process",
        flow: ["Winders", "Conveying", "Quality control", "Weighing", "Warehouse", "Palletizer"],
    },
    {
        kind: "plant",
        name: "Jiatong",
        type: "AUTOMATION",
        site: "Rudong · China",
        product: "POY & FDY coils",
        capacity: {value: "90,000", unit: "coils / day"},
        flowLabel: "Production process",
        flow: ["Winders", "Quality control", "Printing label", "Weighing", "Warehouse", "Palletizer"],
    },
    {
        kind: "plant",
        name: "Shaw",
        type: "AUTOMATION",
        site: "Andalusia · Alabama, USA",
        product: "BCF coils",
        capacity: {value: "14,000", unit: "coils / day"},
        flowLabel: "Production process",
        flow: ["Winders", "AGV", "Warehouse"],
    },
    {
        kind: "plant",
        name: "Sisecam",
        type: "AUTOMATION",
        site: "Balıkesir · Turkey",
        product: "Fiberglass coils",
        capacity: {value: "8,000", unit: "coils / day"},
        flowLabel: "Production process",
        flow: ["Winders", "Conveying", "Pre-pallet process"],
    },
    {
        kind: "plant",
        name: "Brilen",
        type: "AUTOMATION",
        site: "Zaragoza · Spain",
        product: "HTY coils",
        capacity: {value: "3,000", unit: "coils / day"},
        flowLabel: "Production process",
        flow: ["Winders", "Trolleys"],
    },
    {
        kind: "web",
        name: "Emplhub CRM",
        type: "FULL-STACK",
        description:
            "Business management app for employees and customer activities.",
        stackLabel: "Stack",
        stack: ["Node.js", "Express", "PostgreSQL", "AWS", "React", "Bootstrap", "Redux"]
    },
    {
        kind: "web",
        name: "TeamsChatExporter",
        type: "TOOL",
        description:
            "Exports the Teams chats you choose into clean, self-contained HTML files for archiving and sharing.",
        stackLabel: "Stack",
        stack: ["Python"]
    },
    {
        kind: "web",
        name: "PLC ↔ Arduino display",
        type: "EMBEDDED",
        description:
            "Bridges a Siemens PLC to Arduino over Ethernet to drive several 7-segment displays.",
        stackLabel: "Stack",
        stack: ["Structured text", "C++"]
    },
    {
        kind: "web",
        name: "My portfolio",
        type: "PORTFOLIO",
        description:
            "The site you’re looking at — an Ubuntu-themed portfolio.",
        stackLabel: "Stack",
        stack: ["Next.js", "TypeScript", "Tailwind", "Shadcn"]
    },
];
