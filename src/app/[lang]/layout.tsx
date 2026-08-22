import "../globals.css";
import Navbar from "@/components/layout/navbar/Navbar";
import {poppins} from "@/app/constant";
import type {Metadata} from "next";
import MatrixBg from "@/components/matrixBg/MatrixBg";
import {locales, SITE_URL, type Locale} from "@/i18n/config";
import {getDictionary} from "@/i18n/getDictionary";
import {DictionaryProvider} from "@/i18n/DictionaryProvider";

export const generateStaticParams = () => locales.map((lang) => ({lang}));
export const dynamicParams = false;

export const generateMetadata = async (
    {params}: { params: Promise<{ lang: Locale }> }
): Promise<Metadata> => {
    const {lang} = await params;
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

const RootLayout = async (
    {children, params}: Readonly<{
        children: React.ReactNode;
        params: Promise<{ lang: Locale }>;
    }>
) => {
    const {lang} = await params;
    const dict = await getDictionary(lang);

    return (
        <html
            lang={lang}
            className={`dark ubuntu ${poppins.variable} h-full antialiased`}
        >
        <body className="min-h-full flex flex-col">
        <DictionaryProvider dict={dict} lang={lang}>
            <MatrixBg/>
            <Navbar/>
            <main className="flex-1">{children}</main>
        </DictionaryProvider>
        </body>
        </html>
    );
};

export default RootLayout;
