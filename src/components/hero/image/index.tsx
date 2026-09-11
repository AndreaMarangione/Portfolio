"use client"

import Image from "next/image"
import usePageLoad from "@/hooks/usePageLoad"
import {useDictionary} from "@/i18n/DictionaryProvider"
import {FLOOR_A, FLOOR_B} from "@/components/hero/constant"
import PidBench from "@/components/hero/image/partials/PidBench"

const HeroImage = () => {
    const {isLoaded} = usePageLoad()
    const {dict} = useDictionary()

    return (
        <div
            className={`relative z-0 w-full
            [--fig-h:260px] sm:[--fig-h:300px] md:[--fig-h:360px]
            lg:[--fig-h:440px] xl:[--fig-h:500px]
            h-[calc(var(--fig-h)*280/228)]
            ${isLoaded ? "animate-fade-up animate-fade-up-delay-portrait" : ""}`}
        >
            <div
                className="pointer-events-none absolute bottom-0
                left-[calc(50%_-_var(--fig-h)*505/228)]
                h-[calc(var(--fig-h)*280/228)] w-[calc(var(--fig-h)*680/228)]"
            >
                <svg
                    viewBox="0 0 680 280"
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full"
                >
                    <defs>
                        <linearGradient id="hero-floor" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#1C1C1C"/>
                            <stop offset="100%" stopColor="#121212"/>
                        </linearGradient>
                        <linearGradient id="hero-tile-fade" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#fff" stopOpacity="0.3"/>
                            <stop offset="70%" stopColor="#fff" stopOpacity="1"/>
                        </linearGradient>
                        <mask
                            id="hero-tile-mask"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="185"
                            width="680"
                            height="95"
                        >
                            <rect x="0" y="185" width="680" height="95" fill="url(#hero-tile-fade)"/>
                        </mask>
                    </defs>

                    <rect x="0" y="185" width="680" height="95" fill="url(#hero-floor)"/>

                    <g
                        fill="none"
                        stroke="var(--primary)"
                        strokeWidth="0.7"
                        mask="url(#hero-tile-mask)"
                    >
                        <path d={FLOOR_A} strokeOpacity="0.13"/>
                        <path d={FLOOR_B} strokeOpacity="0.11"/>
                    </g>

                    <path
                        d="M0 185 H680"
                        stroke="var(--primary)"
                        strokeOpacity="0.3"
                        strokeWidth="1"
                    />
                </svg>

                <PidBench/>
            </div>

            <Image
                src="/andrea-hero.webp"
                alt={dict.hero.imageAlt}
                width={719}
                height={1600}
                priority
                unoptimized
                className="absolute left-1/2 -translate-x-1/2
                bottom-[calc(var(--fig-h)*44/228)]
                h-[var(--fig-h)] w-auto select-none"
            />
        </div>
    )
}

export default HeroImage
