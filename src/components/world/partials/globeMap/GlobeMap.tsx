"use client";

import {useEffect, useRef} from "react";

import dynamic from "next/dynamic";
import gsap from "gsap";

import type {GlobeMethods} from "react-globe.gl";

import {
    arcs,
    cities,
} from "@/components/world/partials/globeMap/constant";

const Globe3D = dynamic(
    () => import("react-globe.gl"),
    {
        ssr: false,
    }
);

const GlobeMap = () => {

    const globeRef =
        useRef<GlobeMethods | undefined>(undefined);

    useEffect(() => {

        const interval = setInterval(() => {

            if (!globeRef.current) return;

            const scene =
                globeRef.current.scene();

            const globeMesh =
                scene.children.find(
                    (child) => child.type === "Group"
                );

            if (!globeMesh) return;

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

        }, 100);

        return () => {
            clearInterval(interval);
        };

    }, []);

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

                arcsData={arcs}
                arcColor={() => "rgba(233,84,32,0.45)"}
                arcStroke={0.6}
                arcAltitude="altitude"
                arcDashLength={0.30}
                arcDashGap={1}
                arcDashInitialGap="dashInitialGap"
                arcDashAnimateTime={2500}
            />

        </div>
    );
};

export default GlobeMap;