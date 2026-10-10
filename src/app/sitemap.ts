import type {MetadataRoute} from "next";
import {locales, SITE_URL} from "@/i18n/config";

const languages = {
    en: `${SITE_URL}/en`,
    it: `${SITE_URL}/it`,
    "x-default": `${SITE_URL}/en`,
};

const sitemap = (): MetadataRoute.Sitemap =>
    locales.map((lang) => ({
        url: `${SITE_URL}/${lang}`,
        lastModified: new Date(),
        alternates: {languages},
    }));

export default sitemap;
