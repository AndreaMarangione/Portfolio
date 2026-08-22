import type {Locale} from "@/i18n/config";
import type {Dictionary} from "@/i18n/dictionaries/en";

const dictionaries = {
    en: () => import("@/i18n/dictionaries/en").then((m) => m.default),
    it: () => import("@/i18n/dictionaries/it").then((m) => m.default),
}

export const getDictionary = async (locale: Locale): Promise<Dictionary> =>
    dictionaries[locale]()
