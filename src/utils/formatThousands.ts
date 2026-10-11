import {Locale} from "@/i18n/type";

const THOUSANDS_SEPARATOR: Record<Locale, string> = {
    en: ",",
    it: ".",
};

const formatThousands = (value: number, lang: Locale): string =>
    String(value).replace(/\B(?=(\d{3})+(?!\d))/g, THOUSANDS_SEPARATOR[lang]);

export default formatThousands;
