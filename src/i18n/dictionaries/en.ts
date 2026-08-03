import type {TextEditorLineType} from "@/components/ui/textEditor/type";

const en = {
    meta: {
        title: "Andrea Marangione — Industrial Automation Software Developer",
        description:
            "Industrial automation software developer. PLC programming, plant design and on-site commissioning worldwide, plus full-stack web development.",
    },

    nav: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
    },

    hero: {
        name: "Andrea Marangione",
        titleLine1: "Automate anything",
        titleLine2: "find the right solution",
        description:
            "I design and develop industrial automation software, from initial concept to full system commissioning. I build reliable solutions for both small and large-scale plants, focused on performance, efficiency, and real-world impact.",
        statExperience: "Experience",
        statProjects: "Projects",
        statCustomers: "Customers",
    },

    about: {
        mapLabel: "Map of the places where I have worked",
        lines: [
            {kind: "heading", text: "Andrea Marangione"},
            {kind: "blank"},
            {
                kind: "text",
                text: "I'm an industrial automation programmer. I started at 19 at Irico Gualchierani Handling S.r.l., designing and commissioning automation lines at sites including Tongxiang, Rudong, Balikesir, Zaragoza etc...",
            },
            {kind: "blank"},
            {
                kind: "text",
                text: "Back then my responsibility covered the entire plant — from production to palletizing, with every step in between: quality control, weighing, material handling — following commissioning on-site until each line ran fully autonomous, 24/7.",
            },
            {kind: "blank"},
            {
                kind: "text",
                text: "Today I work at Elettromar S.p.A., where I handle R&D for new automation applications, both on the PLC side and on server/client architectures, applied to industrial plants as well as luxury yachts. I'm also involved in Houston, building test benches for the qualification of Baker Hughes' prototype turbines.",
            },
            {kind: "blank"},
            {
                kind: "quote",
                text: "Automation built to be reliable, efficient, and ready for the real world.",
            },
        ] as TextEditorLineType[],
    },

    projects: {
        viewOnGithub: "View on GitHub",
        showMore: "+ {count} more projects",
        showLess: "− show less",
        labels: {
            "Production process": "Production process",
            "Scope": "Scope",
            "Stack": "Stack",
        } as Record<string, string>,
        descriptions: {
            "Baker Hughes": "Commissioning & turbine control",
            "Emplhub CRM": "Business management app for employees and customer activities.",
            "TeamsChatExporter":
                "Exports the Teams chats you choose into clean, self-contained HTML files for archiving and sharing.",
            "PLC ↔ Arduino display":
                "Bridges a Siemens PLC to Arduino over Ethernet to drive several 7-segment displays.",
            "My portfolio": "The site you're looking at — an Ubuntu-themed portfolio.",
        } as Record<string, string>,
    },

    contact: {
        lines: [
            {kind: "heading", text: "Let's talk"},
            {kind: "blank"},
            {kind: "quote", text: "Automate anything, find the right solution."},
            {kind: "blank"},
            {kind: "text", text: "Any process can be automated. The hard part is"},
            {kind: "text", text: "never the machine — it's finding the solution"},
            {kind: "text", text: "that fits the plant, the product and the people."},
            {kind: "blank"},
            {kind: "text", text: "A test bench, a full line, or the software that"},
            {kind: "text", text: "ties it together: at Elettromar we'd be glad to"},
            {kind: "text", text: "build it with you."},
            {kind: "blank"},
            {kind: "link", text: "elettromar.com", href: "https://www.elettromar.com"},
            {kind: "blank"},
            {kind: "text", text: "Don't hesitate to get in touch — let's run a"},
            {kind: "text", text: "feasibility study together."},
        ] as TextEditorLineType[],

        reachMe: {
            title: "Reach me",
            available: "Available for new projects",
            email: "Email",
            location: "Location",
        },
    },

    languageSwitch: {
        label: "Change language",
    },
};

export type Dictionary = typeof en;

export default en;
