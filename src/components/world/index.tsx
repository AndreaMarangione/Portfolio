"use client";

import {useEffect, useRef, useState} from "react";
import useIsMobile from "@/hooks/useIsMobile";
import usePageLoad from "@/hooks/usePageLoad";
import GlobeMap from "@/components/world/partials/globeMap/GlobeMap";
import WorldMap from "@/components/world/partials/worldMap/WorldMap";

const World = () => {
    const isMobile: boolean = useIsMobile();
    const {isLoaded} = usePageLoad();
    const [showGlobe, setShowGlobe] = useState(false);
    const holderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = holderRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0]?.isIntersecting) {
                    setShowGlobe(true);
                    observer.disconnect();
                }
            },
            {rootMargin: "200px 0px"}
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div ref={holderRef} className="flex h-80 w-full items-center justify-center md:hidden">
                {showGlobe && (
                    <div className="animate-in fade-in duration-700">
                        <GlobeMap/>
                    </div>
                )}
            </div>

            <div className="hidden md:block">
                <div className="mx-auto aspect-[2000/857] w-full max-w-5xl">
                    {!isMobile && isLoaded && (
                        <div className="animate-in fade-in duration-700">
                            <WorldMap/>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default World;