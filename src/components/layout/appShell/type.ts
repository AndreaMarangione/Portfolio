import type {ReactNode} from "react";
import type {DictionaryValue} from "@/i18n/type";

export type AppShellProps = DictionaryValue & {
    children: ReactNode;
};
