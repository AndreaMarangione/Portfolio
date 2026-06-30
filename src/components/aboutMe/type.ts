export type AboutMeLineType =
    | { kind: "heading"; text: string }
    | { kind: "bold"; text: string }
    | { kind: "quote"; text: string }
    | { kind: "text"; text: string }
    | { kind: "blank" };
