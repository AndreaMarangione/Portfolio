"use client";

import {useEffect, useRef} from "react";
import {cities, Globe3D, staticArcs,} from "@/components/world/partials/globeMap/constant";
import {PacketAnimation} from "@/components/world/partials/globeMap/type";
import type {GlobeMethods} from "react-globe.gl";
import globeFindArcCurves from "@/utils/globeFindArcCurves";
import globeSetupPacketAnimation from "@/utils/globeSetupPacketAnimation";
import globeSetupRotationAnimation from "@/utils/globeSetupRotationAnimation";
import globeSetupView from "@/utils/globeSetupView";

const GlobeMap = () => {
    const globeRef = useRef<GlobeMethods | undefined>(undefined);
    const packetAnimationsRef = useRef<PacketAnimation[]>([]);
    const stopPacketsRef = useRef<(() => void) | null>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!globeRef.current) return;

            const scene = globeRef.current.scene();
            const globeMesh =
                scene.children.find((child) => child.type === "Group");

            if (!globeMesh) return;

            clearInterval(interval);

            globeSetupView({
                globe: globeRef.current,
            });

            globeSetupRotationAnimation({
                globe: globeRef.current,
            });

            const curveMap =
                globeFindArcCurves({
                    globeMesh,
                    globe: globeRef.current,
                });

            stopPacketsRef.current =
                globeSetupPacketAnimation({
                    globeMesh,
                    curveMap,
                    packetAnimationsRef,
                });
        }, 100);

        return () => {
            clearInterval(interval);

            stopPacketsRef.current?.();
            stopPacketsRef.current = null;

            packetAnimationsRef.current.forEach(
                ({mesh}) => {
                    mesh.removeFromParent();
                }
            );
            packetAnimationsRef.current = [];
        };
    }, []);

    return (
        <div className="w-full flex justify-center pointer-events-none">
            <Globe3D
                ref={globeRef}
                width={320}
                height={320}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
                // globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
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
                arcsData={staticArcs}
                arcColor={() => "rgba(233,84,32,0.45)"}
                arcStroke={0.6}
                arcAltitude="altitude"
            />
        </div>
    );
};

export default GlobeMap;
