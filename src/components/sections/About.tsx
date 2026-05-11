"use client";

import {useEffect, useState} from "react";
import WorldMap from "@/components/worldMap/WorldMap";
import GlobeMap from "@/components/globe/GlobeMap";
import useIsMobile from "@/hooks/useIsMobile";
import usePageLoad from "@/hooks/usePageLoad";

const About = () => {

    const isMobile =
        useIsMobile();

    const {isLoaded} =
        usePageLoad();

    const [showGlobe, setShowGlobe] =
        useState(false);

    useEffect(() => {

        if (!isMobile) return;

        if (!isLoaded) return;

        const timeout = setTimeout(() => {

            setShowGlobe(true);

        }, 4000);

        return () =>
            clearTimeout(timeout);

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

    return <WorldMap/>;
};

export default About;
