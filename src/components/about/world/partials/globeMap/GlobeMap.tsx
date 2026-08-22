"use client";

import {useEffect, useRef, useState} from "react";
import {
    cities,
    type GlobeCity,
    Globe3D,
    RING_MAX_RADIUS,
    RING_PROPAGATION_SPEED,
    VIEW_TRANSITION_MS,
} from "@/components/about/world/partials/globeMap/constant";
import type {GlobeMethods} from "react-globe.gl";
import globeSetupRotationAnimation from "@/utils/globeSetupRotationAnimation";
import globeSetupView from "@/utils/globeSetupView";
import globeSetupInteraction from "@/utils/globeSetupInteraction";

const GlobeMap = () => {
    const globeRef = useRef<GlobeMethods | undefined>(undefined);
    const containerRef = useRef<HTMLDivElement>(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        let readyTimeout: ReturnType<typeof setTimeout>;

        const interval = setInterval(() => {
            if (!globeRef.current) return;

            const scene = globeRef.current.scene();

            const isGlobeReady: boolean =
                scene.children.some((child) => child.type === "Group");

            if (!isGlobeReady) return;

            clearInterval(interval);

            globeSetupView({
                globe: globeRef.current,
            });

            globeSetupRotationAnimation({
                globe: globeRef.current,
            });

            readyTimeout = setTimeout(() => {
                if (!globeRef.current) return;

                globeSetupInteraction({
                    globe: globeRef.current,
                });

                const canvas = containerRef.current?.querySelector("canvas");

                if (canvas) canvas.style.touchAction = "pan-y";

                setReady(true);
            }, VIEW_TRANSITION_MS);
        }, 100);

        return () => {
            clearInterval(interval);
            clearTimeout(readyTimeout);
        };
    }, []);

    return (
        <div className="flex w-full justify-center">
            <div ref={containerRef} className={ready ? undefined : "pointer-events-none"}>
                <Globe3D
                    ref={globeRef}
                    width={320}
                    height={320}
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
                    backgroundColor="rgba(0,0,0,0)"
                    atmosphereColor="#E95420"
                    atmosphereAltitude={0.09}
                    pointsData={cities}
                    pointLat="lat"
                    pointLng="lng"
                    pointColor={() => "#E95420"}
                    pointRadius={0.55}
                    pointAltitude={0}
                    labelsData={cities}
                    labelLat="labelLat"
                    labelLng="labelLng"
                    labelText="name"
                    labelSize={2.5}
                    labelDotRadius={0}
                    labelColor={() => "#E95420"}
                    ringsData={cities}
                    ringLat="lat"
                    ringLng="lng"
                    ringColor={() => (t: number) => `rgba(233,84,32,${1 - t})`}
                    ringMaxRadius={RING_MAX_RADIUS}
                    ringPropagationSpeed={RING_PROPAGATION_SPEED}
                    ringRepeatPeriod={(city: object) => (city as GlobeCity).ringPeriod}
                />
            </div>
        </div>
    );
};

export default GlobeMap;
