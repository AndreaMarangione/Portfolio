"use client";

import {useEffect, useMemo, useRef, useState} from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import type {GlobeMethods} from "react-globe.gl";

import {
    cities,
    staticArcs,
} from "@/components/world/partials/globeMap/constant";

import {
    Mesh,
    MeshBasicMaterial,
    SphereGeometry,
} from "three";

const Globe3D = dynamic(
    () => import("react-globe.gl"),
    {
        ssr: false,
    }
);

const getArcPosition = (
    startLat: number,
    startLng: number,
    endLat: number,
    endLng: number,
    altitude: number,
    t: number,
) => {

    const lat =
        startLat +
        (endLat - startLat) * t;

    const lng =
        startLng +
        (endLng - startLng) * t;

    const arcAltitude =
        Math.sin(Math.PI * t) * altitude;

    return {
        lat,
        lng,
        altitude: arcAltitude,
    };
};

const GlobeMap = () => {

    const globeRef =
        useRef<GlobeMethods | undefined>(
            undefined
        );

    const packet = useMemo(
        () => ({
            lat: 43.7696,
            lng: 11.2558,
            altitude: 0,
            progress: 0,
        }),
        []
    );

    const [
        packetData,
        setPacketData,
    ] = useState([packet]);

    useEffect(() => {

        const interval = setInterval(() => {

            if (!globeRef.current) {
                return;
            }

            const scene =
                globeRef.current.scene();

            const globeMesh =
                scene.children.find(
                    (child) =>
                        child.type === "Group"
                );

            if (!globeMesh) {
                return;
            }

            clearInterval(interval);

            globeRef.current.pointOfView(
                {
                    lat: 30,
                    lng: 12,
                    altitude: 1.7,
                },
                0
            );

            globeMesh.rotation.z = 0;

            gsap.to(
                globeMesh.rotation,
                {
                    y: "+=" + Math.PI * 2,

                    duration: 20,

                    repeat: -1,

                    ease: "none",
                }
            );

            const arc =
                staticArcs[1];

            let lastUpdate = 0;

            gsap.to(
                packet,
                {
                    progress: 1,

                    duration: 4,

                    repeat: -1,

                    ease: "none",

                    onUpdate: () => {

                        const position =
                            getArcPosition(
                                arc.startLat,
                                arc.startLng,
                                arc.endLat,
                                arc.endLng,
                                arc.altitude,
                                packet.progress,
                            );

                        packet.lat =
                            position.lat;

                        packet.lng =
                            position.lng;

                        packet.altitude =
                            position.altitude;

                        const now =
                            Date.now();

                        if (
                            now - lastUpdate <
                            16
                        ) {
                            return;
                        }

                        lastUpdate = now;

                        setPacketData([
                            {
                                ...packet,
                            },
                        ]);
                    },
                }
            );
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, [packet]);

    return (
        <div className="w-full flex justify-center pointer-events-none">

            <Globe3D
                ref={globeRef}

                width={320}

                height={320}

                globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"

                backgroundColor="rgba(0,0,0,0)"

                atmosphereColor="#E95420"

                atmosphereAltitude={0.12}

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

                arcColor={() =>
                    "rgba(233,84,32,0.45)"
                }

                arcStroke={0.6}

                arcAltitude="altitude"

                objectsData={packetData}

                objectLat="lat"

                objectLng="lng"

                objectAltitude="altitude"

                objectThreeObject={() => {

                    return new Mesh(
                        new SphereGeometry(2),

                        new MeshBasicMaterial({
                            color: "#E95420",
                        })
                    );
                }}
            />
        </div>
    );
};

export default GlobeMap;
