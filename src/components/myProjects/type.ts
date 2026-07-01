export type PlantProject = {
    kind: "plant";
    name: string;
    site: string;
    product: string;
    capacity?: { value: string; unit: string };
    highlight?: string;
    flowLabel: string;
    flow: string[];
    status: "COMMISSIONED" | "CURRENT";
};

export type WebProject = {
    kind: "web";
    name: string;
    type: string;
    description: string;
    stack: string[];
    flowLabel: string;
    flow: string[];
};

export type Project = PlantProject | WebProject;
