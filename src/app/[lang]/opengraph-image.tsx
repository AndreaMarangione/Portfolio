import {ImageResponse} from "next/og";
import {readFile} from "node:fs/promises";
import {join} from "node:path";
import {defaultLocale, hasLocale, locales, SITE_URL} from "@/i18n/config";
import {getDictionary} from "@/i18n/getDictionary";
import OgImage from "@/components/ogImage/ogImage";

export const generateStaticParams = () => locales.map((lang) => ({lang}));

export const alt = "Andrea Marangione";
export const size = {width: 1200, height: 630};
export const contentType = "image/png";

const loadFont = (file: string) => readFile(join(process.cwd(), "src/app/fonts/poppins", file));

const OpengraphImage = async ({params}: { params: Promise<{ lang: string }> }) => {
    const {lang} = await params;
    const dict = await getDictionary(hasLocale(lang) ? lang : defaultLocale);

    return new ImageResponse(
        <OgImage name={dict.hero.name} role={dict.meta.role} domain={new URL(SITE_URL).host}/>,
        {
            ...size,
            fonts: [
                {name: "Poppins", data: await loadFont("Poppins-Regular.ttf"), weight: 400, style: "normal"},
                {name: "Poppins", data: await loadFont("Poppins-Bold.ttf"), weight: 700, style: "normal"},
            ],
        },
    );
};

export default OpengraphImage;
