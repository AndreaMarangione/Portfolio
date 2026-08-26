"use client"

import Image from "next/image";
import usePageLoad from "@/hooks/usePageLoad";
import {useDictionary} from "@/i18n/DictionaryProvider";

const CAREER_START_YEAR = 2016

const Hero = () => {
    const {isLoaded} = usePageLoad()
    const {dict} = useDictionary()
    const experienceYears: number = new Date().getFullYear() - CAREER_START_YEAR;

    return (
        <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="space-y-5 md:space-y-6">
                    <div className="overflow-hidden">
                        <p className={`text-sm text-muted-foreground whitespace-nowrap w-fit overflow-hidden 
                    ${isLoaded ? "animate-typing" : ""}`}
                        >
                            {dict.hero.name}
                        </p>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-[1.18] max-w-[650px]">
                    <span className="block overflow-hidden">
                        <span className={`block ${isLoaded ? "animate-fade-up" : ""}`}>
                            {dict.hero.titleLine1}
                        </span>
                    </span>
                        <span className="block overflow-hidden">
                        <span className={`block ${isLoaded ? "animate-fade-up animate-fade-up-delay-motto" : ""}`}>
                            {dict.hero.titleLine2}
                        </span>
                    </span>
                    </h1>
                    <p className={`text-muted-foreground max-w-md leading-relaxed 
                ${isLoaded ? "animate-fade-up animate-fade-up-delay-description" : ""}`}
                    >
                        {dict.hero.description}
                    </p>
                    <div
                        className={`mt-6 grid grid-cols-3 w-full max-w-md rounded-xl bg-muted border border-border overflow-hidden 
                    ${isLoaded ? "animate-fade-up animate-fade-up-delay-stats" : ""}`}
                    >
                        <div className="py-5 text-center">
                            <p className="text-primary font-semibold text-xl">
                                {experienceYears}
                            </p>
                            <p className="text-xs sm:text-sm text-muted-foreground">
                                {dict.hero.statExperience}
                            </p>
                        </div>
                        <div className="py-5 text-center border-l border-border">
                            <p className="text-primary font-semibold text-xl">
                                40+
                            </p>
                            <p className="text-xs sm:text-sm text-muted-foreground">
                                {dict.hero.statProjects}
                            </p>
                        </div>
                        <div className="py-5 text-center border-l border-border">
                            <p className="text-primary font-semibold text-xl">
                                20+
                            </p>
                            <p className="text-xs sm:text-sm text-muted-foreground">
                                {dict.hero.statCustomers}
                            </p>
                        </div>
                    </div>
                </div>

                {/* colonna ritratto */}
                <div
                    className={`flex justify-center 
                    ${isLoaded ? "animate-fade-up animate-fade-up-delay-portrait" : ""}`}
                >
                    {/* altezza definita sul wrapper: serve perché l'alone usa h-[%] */}
                    <div className="relative h-[300px] sm:h-[360px] md:h-[420px] lg:h-[520px] xl:h-[580px]">
                        {/* alone arancione — sta DIETRO alla figura, non la contiene */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute left-1/2 top-[8%] aspect-square h-[60%]
                            -translate-x-1/2 rounded-full"
                            style={{
                                background:
                                    "radial-gradient(closest-side, rgba(233,84,32,0.22), rgba(233,84,32,0.06) 60%, transparent 100%)",
                            }}
                        />
                        <Image
                            src="/andrea-hero.webp"
                            alt={dict.hero.imageAlt}
                            width={719}
                            height={1600}
                            priority
                            quality={90}
                            sizes="(min-width: 768px) 270px, 170px"
                            className="relative h-full w-auto select-none"
                            style={{filter: "drop-shadow(0 22px 38px rgba(0,0,0,0.55))"}}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
