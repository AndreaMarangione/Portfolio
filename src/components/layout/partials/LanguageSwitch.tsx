"use client";

import {useState} from "react";
import {Lang} from "@/components/layout/type";

const LanguageSwitch = () => {
    const [language, setLanguage] = useState<Lang>("en");

    return (
        <div className="flex items-center gap-0.5 rounded-md border border-border bg-muted/40 p-0.5">
            {(["en", "it"] as const).map((l) => (
                <button
                    key={l}
                    type="button"
                    onClick={() => setLanguage(l)}
                    aria-pressed={language === l}
                    className={`rounded-[5px] px-2.5 py-1 font-mono text-xs uppercase tracking-wide transition-colors cursor-pointer ${
                        language === l
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