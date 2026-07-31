export type PlantProject = {
    kind: "plant";
    name: string;
    type: string;
    description?: string;
    site: string;
    product: string;
    capacity?: { value: string; unit: string };
    flowLabel: string;
    flow: string[]
};

export type WebProject = {
    kind: "web";
    name: string;
    type: string;
    description: string;
    stackLabel: string;
    stack: string[];
};

export type Project = PlantProject | WebProject;

export type ProjectProcessProps = {
    label: string;
    steps: string[];
    arrows?: boolean;
};
