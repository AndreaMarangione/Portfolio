"use client";

import {createContext, useContext, type ReactNode} from "react";
import {DictionaryValue} from "@/i18n/type";

const DictionaryContext = createContext<DictionaryValue | null>(null);

export const DictionaryProvider = (
    {dict, lang, children}: DictionaryValue & { children: ReactNode }
) => (
    <DictionaryContext.Provider value={{dict, lang}}>
        {children}
    </DictionaryContext.Provider>
)

export const useDictionary = (): DictionaryValue => {
    const context = useContext(DictionaryContext);

    if (!context) {
        throw new Error("useDictionary has to be inside DictionaryProvider.tsx");
    }

    return context;
}
