"use client";

import {useEffect, useRef, useState} from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import type {GlobeMethods} from "react-globe.gl";
import {cities} from "@/components/world/partials/globeMap/constant";
import {Arc} from "@/components/world/partials/globeMap/type";

const Globe3D = dynamic(
    () => import("react-globe.gl"),
    {
        ssr: false,
    }
);

const GlobeMap = () => {

    const [arcs, setArcs] =
        useState<Array<Arc>>([]);

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

        const arcsInterval = setInterval(() => {

            const randomCity1 =
                cities[
                    Math.floor(
                        Math.random() * cities.length
                    )
                    ];

            let randomCity2 =
                cities[
                    Math.floor(
                        Math.random() * cities.length
                    )
                    ];

            while (randomCity1 === randomCity2) {
                randomCity2 =
                    cities[
                        Math.floor(
                            Math.random() * cities.length
                        )
                        ];

            }

            const newArc: Arc = {
                id: Date.now(),

                startLat: randomCity1.lat,
                startLng: randomCity1.lng,

                endLat: randomCity2.lat,
                endLng: randomCity2.lng,

            };

            setArcs([newArc]);
        }, 6000);

        return () => {
            clearInterval(interval);
            clearInterval(arcsInterval);
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

                arcColor={() => "#E95420"}

                arcAltitudeAutoScale={0.2}

                arcStroke={0.55}

                arcDashLength={0.35}
                arcDashGap={0.8}

                arcDashAnimateTime={3000}
            />

        </div>
    );
};

export default GlobeMap;
