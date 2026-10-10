import {SITE_URL} from "@/i18n/config";
import {GITHUB_URL, LINKEDIN_URL} from "@/components/contacts/constant";
import {PersonJsonLdProps} from "@/components/layout/personJsonLd/type";

const PersonJsonLd = ({lang}: PersonJsonLdProps) => {
    const person = {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Andrea Marangione",
        url: `${SITE_URL}/${lang}`,
        jobTitle: "Industrial Automation Software Developer",
        worksFor: {"@type": "Organization", name: "Elettromar S.p.A."},
        address: {"@type": "PostalAddress", addressCountry: "IT"},
        sameAs: [LINKEDIN_URL, GITHUB_URL],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(person).replace(/</g, "\\u003c")}}
        />
    );
};

export default PersonJsonLd;
