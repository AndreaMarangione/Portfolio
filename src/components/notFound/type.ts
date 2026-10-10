import type {ReactNode} from "react";

export type LadderWireProps = {
    on: boolean;
    className?: string;
};

export type LadderLabelsProps = {
    tag: string;
    address: string;
    highlight?: boolean;
    children: ReactNode;
};

export type LadderContactProps = {
    tag: string;
    address: string;
    closed: boolean;
    normallyClosed?: boolean;
};

export type LadderCoilProps = {
    tag: string;
    address: string;
    on: boolean;
    set?: boolean;
    reset?: boolean;
    highlight?: boolean;
};

export type LadderNetworkProps = {
    label: string;
    index: number;
    title: string;
    comment?: string;
    children: ReactNode;
};
