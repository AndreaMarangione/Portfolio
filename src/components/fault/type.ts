import type {Dictionary} from "@/i18n/dictionaries/en";
import {Locale} from "@/i18n/type";

export type FaultProps = {
    t: Dictionary["fault"];
    lang: Locale;
    onRetry: () => void;
};
