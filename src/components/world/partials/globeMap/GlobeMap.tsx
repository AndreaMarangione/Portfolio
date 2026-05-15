"use client";

import {useEffect, useMemo, useRef} from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import type {GlobeMethods} from "react-globe.gl";
import {arcs, cities,} from "@/components/world/partials/globeMap/constant";

const Globe3D = dynamic(
    () => import("react-globe.gl"),
    {
        ssr: false,
    }
);

const GlobeMap = () => {
    const globeRef = useRef<GlobeMethods | undefined>(undefined);
    const points = useMemo(
        () => ({
            lat: 43.7696,
            lng: 11.2558,
        }),
        []
    );

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

            gsap.to(
                points,
                {
                    lat: 31.3085,
                    lng: -86.4822,
                    duration: 4,
                    repeat: -1,
                    ease: "none",
                    yoyo: false,
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

                htmlElementsData={[points]}
                htmlLat="lat"
                htmlLng="lng"
                htmlElement={() => {

                    const element =
                        document.createElement("div");

                    element.style.width = "8px";

                    element.style.height = "8px";

                    element.style.borderRadius = "999px";

                    element.style.background = "#E95420";

                    element.style.boxShadow =
                        "0 0 12px #E95420";

                    return element;
                }}
            />
        </div>
    );
};

export default GlobeMap;