"use client";

import "./globals.css";
import {useEffect, useState} from "react";
import {usePathname} from "next/navigation";
import Fault from "@/components/fault/Fault";
import {poppins} from "@/app/constant";
import {getDictionary} from "@/i18n/getDictionary";
import type {Dictionary} from "@/i18n/dictionaries/en";

const GlobalError = ({reset}: { error: Error & { digest?: string }; reset: () => void }) => {
    const lang = (usePathname() ?? "").startsWith("/it") ? "it" : "en";
    const [t, setT] = useState<Dictionary["fault"] | null>(null);

    useEffect(() => {
        getDictionary(lang).then((dict) => setT(dict.fault));
    }, [lang]);

    return (
        <html lang={lang} className={`ubuntu ${poppins.variable} h-full antialiased`}>
        <body className="min-h-full flex flex-col">
        {t && (
            <>
                <title>{`FAULT - ${t.title}`}</title>
                <main className="flex-1">
                    <Fault t={t} lang={lang} onRetry={reset}/>
                </main>
            </>
        )}
        </body>
        </html>
    );
};

export default GlobalError;
