import type {Dictionary} from "@/i18n/dictionaries/en";
import {locales} from "@/i18n/config";

export type Locale = (typeof locales)[number];

export type DictionaryValue = {
    dict: Dictionary;
    lang: Locale;
}
