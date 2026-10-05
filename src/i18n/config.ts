import {Locale} from "@/i18n/type";

export const locales = ["en", "it"] as const;
export const defaultLocale: Locale = "en";
export const SITE_URL = "https://andreamarangione.com";

export const hasLocale = (value: string): value is Locale =>
    (locales as readonly string[]).includes(value);
