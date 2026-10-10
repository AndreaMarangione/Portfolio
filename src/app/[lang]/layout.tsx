import "../globals.css";
import type {Metadata} from "next";
import {redirect} from "next/navigation";
import AppShell from "@/components/layout/appShell/AppShell";
import {defaultLocale, hasLocale, locales, SITE_URL} from "@/i18n/config";
import {getDictionary} from "@/i18n/getDictionary";
import {VIEWPORT} from "@/app/constant";
import PersonJsonLd from "@/components/layout/personJsonLd/PersonJsonLd";

export const viewport = VIEWPORT;

export const generateStaticParams = () => locales.map((lang) => ({lang}));

export const generateMetadata = async (
    {params}: { params: Promise<{ lang: string }> }
): Promise<Metadata> => {
    const {lang} = await params;

    if (!hasLocale(lang)) redirect(`/${defaultLocale}`);

    const dict = await getDictionary(lang);

    return {
        metadataBase: new URL(SITE_URL),
        title: dict.meta.title,
        description: dict.meta.description,
        alternates: {
            canonical: `/${lang}`,
            languages: {
                en: "/en",
                it: "/it",
                "x-default": "/en",
            },
        },
        openGraph: {
            title: dict.meta.title,
            description: dict.meta.description,
            url: `/${lang}`,
            siteName: "Andrea Marangione",
            locale: lang === "it" ? "it_IT" : "en_US",
            type: "website",
        },
    };
};

const RootLayout = async ({children, params}: LayoutProps<"/[lang]">) => {
    const {lang} = await params;

    if (!hasLocale(lang)) redirect(`/${defaultLocale}`);

    const dict = await getDictionary(lang);

    return (
        <AppShell dict={dict} lang={lang}>
            <PersonJsonLd lang={lang}/>
            {children}
        </AppShell>
    );
};

export default RootLayout;
