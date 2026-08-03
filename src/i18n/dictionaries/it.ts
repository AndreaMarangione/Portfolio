import type {Dictionary} from "@/i18n/dictionaries/en";
import type {TextEditorLineType} from "@/components/ui/textEditor/type";

const it: Dictionary = {
    meta: {
        title: "Andrea Marangione — Programmatore Software di Automazione Industriale",
        description:
            "Programmatore software di automazione industriale. Programmazione PLC, progettazione impianti e commissioning in tutto il mondo, oltre allo sviluppo web full-stack.",
    },

    nav: {
        home: "Home",
        about: "Chi sono",
        skills: "Competenze",
        projects: "Progetti",
        contact: "Contatti",
    },

    hero: {
        name: "Andrea Marangione",
        titleLine1: "Automatizza qualsiasi cosa",
        titleLine2: "trova la soluzione giusta",
        description:
            "Progetto e sviluppo software per l'automazione industriale, dall'idea iniziale fino al commissioning completo dell'impianto. Realizzo soluzioni affidabili per impianti di ogni dimensione, con attenzione a prestazioni, efficienza e risultati concreti.",
        statExperience: "Esperienza",
        statProjects: "Progetti",
        statCustomers: "Clienti",
    },

    about: {
        mapLabel: "Mappa dei luoghi in cui ho lavorato",
        lines: [
            {kind: "heading", text: "Andrea Marangione"},
            {kind: "blank"},
            {
                kind: "text",
                text: "Sono un programmatore di automazione industriale. Ho iniziato a 19 anni in Irico Gualchierani Handling S.r.l., progettando e avviando linee di automazione in siti come Tongxiang, Rudong, Balikesir, Zaragoza ecc...",
            },
            {kind: "blank"},
            {
                kind: "text",
                text: "In quegli anni la mia responsabilità copriva l'intero impianto — dalla produzione alla pallettizzazione, con ogni step intermedio: controllo qualità, pesatura, movimentazione — seguendo il commissioning in loco fino a rendere ogni linea completamente autonoma e operativa 24 ore su 24.",
            },
            {kind: "blank"},
            {
                kind: "text",
                text: "Oggi lavoro in Elettromar S.p.A., dove mi occupo di ricerca e sviluppo per nuove applicazioni di automazione, sia lato PLC sia lato architetture server e client, applicate tanto all'industria quanto alla nautica di lusso. Sono inoltre coinvolto a Houston per la realizzazione di banchi prova destinati al collaudo delle turbine prototipo di Baker Hughes.",
            },
            {kind: "blank"},
            {
                kind: "quote",
                text: "Automazione pensata per essere affidabile, efficiente e pronta per il mondo reale.",
            },
        ] as TextEditorLineType[],
    },

    projects: {
        viewOnGithub: "Vedi su GitHub",
        showMore: "+ altri {count} progetti",
        showLess: "− mostra meno",
        labels: {
            "Production process": "Processo produttivo",
            "Scope": "Ambito",
            "Stack": "Stack",
        },
        descriptions: {
            "Baker Hughes": "Commissioning e controllo turbine",
            "Emplhub CRM": "Applicativo gestionale per dipendenti e attività verso i clienti.",
            "TeamsChatExporter":
                "Esporta le chat di Teams selezionate in file HTML puliti e autonomi, pronti da archiviare e condividere.",
            "PLC ↔ Arduino display":
                "Collega un PLC Siemens ad Arduino via Ethernet per pilotare diversi display a 7 segmenti.",
            "My portfolio": "Il sito che stai guardando — un portfolio a tema Ubuntu.",
        },
    },

    contact: {
        lines: [
            {kind: "heading", text: "Parliamone"},
            {kind: "blank"},
            {kind: "quote", text: "Automatizza qualsiasi cosa, trova la soluzione giusta."},
            {kind: "blank"},
            {kind: "text", text: "Qualsiasi processo può essere automatizzato. La parte"},
            {kind: "text", text: "difficile non è mai la macchina — è trovare la"},
            {kind: "text", text: "soluzione adatta all'impianto, al prodotto e alle persone."},
            {kind: "blank"},
            {kind: "text", text: "Un banco prova, una linea completa o il software che"},
            {kind: "text", text: "li tiene insieme: in Elettromar saremo felici di"},
            {kind: "text", text: "realizzarlo con te."},
            {kind: "blank"},
            {kind: "link", text: "elettromar.com", href: "https://www.elettromar.com"},
            {kind: "blank"},
            {kind: "text", text: "Non esitare a contattarmi — facciamo insieme uno"},
            {kind: "text", text: "studio di fattibilità."},
        ] as TextEditorLineType[],

        reachMe: {
            title: "Contattami",
            available: "Disponibile per nuovi progetti",
            email: "Email",
            location: "Sede",
        },
    },

    languageSwitch: {
        label: "Cambia lingua",
    },
};

export default it;
