import "./globals.css";
import type {Metadata} from "next";
import {headers} from "next/headers";
import AppShell from "@/components/layout/appShell/AppShell";
import NotFound from "@/components/notFound/NotFound";
import {defaultLocale, hasLocale, PATHNAME_HEADER} from "@/i18n/config";
import {getDictionary} from "@/i18n/getDictionary";
import {Locale} from "@/i18n/type";

const resolveRequest = async (): Promise<{ lang: Locale; pathname: string }> => {
    const pathname: string = (await headers()).get(PATHNAME_HEADER) ?? "";
    const segment: string = pathname.split("/")[1] ?? "";

    return {lang: hasLocale(segment) ? segment : defaultLocale, pathname};
};

export const generateMetadata = async (): Promise<Metadata> => {
    const {lang} = await resolveRequest();
    const dict = await getDictionary(lang);

    return {title: `404 - ${dict.notFound.title}`};
};

const GlobalNotFound = async () => {
    const {lang} = await resolveRequest();
    const dict = await getDictionary(lang);

    return (
        <AppShell dict={dict} lang={lang}>
            <NotFound/>
        </AppShell>
    );
};

export default GlobalNotFound;
