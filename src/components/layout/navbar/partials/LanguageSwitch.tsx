"use client";

import Link from "next/link";
import {locales} from "@/i18n/config";
import {useDictionary} from "@/i18n/DictionaryProvider";

const LanguageSwitch = () => {
    const {lang, dict} = useDictionary();

    return (
        <nav
            aria-label={dict.languageSwitch.label}
            className="flex h-9 items-center gap-0.5 rounded-md border border-border bg-muted/40 p-[3px]"
        >
            {locales.map((l) => (
                <Link
                    key={l}
                    href={`/${l}`}
                    hrefLang={l}
                    aria-current={lang === l ? "true" : undefined}
                    className={`flex h-full cursor-pointer items-center rounded-[5px] px-3 font-mono text-xs uppercase tracking-wide transition-colors ${
                        lang === l
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                    {l}
                </Link>
            ))}
        </nav>
    );
};

export default LanguageSwitch;
