"use client";

import useIsMobile from "@/hooks/useIsMobile";
import usePageLoad from "@/hooks/usePageLoad";
import {useEffect, useState} from "react";
import GlobeMap from "@/components/world/partials/globeMap/GlobeMap";
import WorldMap from "@/components/world/partials/worldMap/WorldMap";

const World = () => {
    const isMobile: boolean = useIsMobile();
    const {isLoaded} = usePageLoad();
    const [showGlobe, setShowGlobe] = useState(false);

    useEffect(() => {
        if (!isMobile || !isLoaded) return;

        const timeout = setTimeout(() => {
            setShowGlobe(true);
        }, 4000);

        return () => clearTimeout(timeout);
    }, [isMobile, isLoaded]);

    if (isMobile) {
        return (
            <>
                {showGlobe && (
                    <GlobeMap/>
                )}
            </>
        );
    }

    return (
        <>
            {isLoaded && (
                <WorldMap/>
            )}
        </>
    )
}

export default World
