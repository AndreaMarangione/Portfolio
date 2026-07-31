import {ReactNode} from "react";

export type SkillRow = { name: string };

export type SkillModule = { title: string; rows: SkillRow[] };

export type SkillChipProps = {
    label: string;
    icon: ReactNode;
};
