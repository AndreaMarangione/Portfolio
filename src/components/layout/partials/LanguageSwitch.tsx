"use client";

import {useState} from "react";
import {Lang} from "@/components/layout/type";

const LanguageSwitch = () => {
    const [lang, setLang] = useState<Lang>("en");

    return (
        <div className="flex h-9 items-center gap-0.5 rounded-md border border-border bg-muted/40 p-[3px]">
            {(["en", "it"] as const).map((l) => (
                <button
                    key={l}
                    type="button"
                    onClick={() => setLang(l)}
                    aria-pressed={lang === l}
                    className={`flex h-full cursor-pointer items-center rounded-[5px] px-3 font-mono text-xs uppercase tracking-wide transition-colors ${
                        lang === l
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                    {l}
                </button>
            ))}
        </div>
    );
};

export default LanguageSwitch;
