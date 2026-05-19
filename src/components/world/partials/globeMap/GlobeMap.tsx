"use client";

import {useEffect, useRef} from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import type {GlobeMethods} from "react-globe.gl";
import {animatedArcs, cities, staticArcs} from "@/components/world/partials/globeMap/constant";

const Globe3D = dynamic(
    () => import("react-globe.gl"),
    {
        ssr: false,
    }
);

const GlobeMap = () => {
    const staticGlobeRef =
        useRef<GlobeMethods | undefined>(
            undefined
        );

    const animatedGlobeRef =
        useRef<GlobeMethods | undefined>(
            undefined
        );

    useEffect(() => {
        const interval = setInterval(() => {
            if (!staticGlobeRef.current || !animatedGlobeRef.current) {
                return;
            }

            const staticScene =
                staticGlobeRef.current.scene();

            const animatedScene =
                animatedGlobeRef.current.scene();

            const staticGlobeMesh =
                staticScene.children.find(
                    (child) =>
                        child.type === "Group"
                );

            const animatedGlobeMesh =
                animatedScene.children.find(
                    (child) =>
                        child.type === "Group"
                );

            if (!staticGlobeMesh || !animatedGlobeMesh) {
                return;
            }

            clearInterval(interval);

            const pointOfView = {
                lat: 30,
                lng: 12,
                altitude: 1.7,
            };

            staticGlobeRef.current.pointOfView(pointOfView, 0);
            animatedGlobeRef.current.pointOfView(pointOfView, 0);
            staticGlobeMesh.rotation.z = 0;
            animatedGlobeMesh.rotation.z = 0;

            gsap.to(
                staticGlobeMesh.rotation,
                {
                    y: "+=" + Math.PI * 2,
                    duration: 20,
                    repeat: -1,
                    ease: "none",
                    onUpdate: () => {
                        animatedGlobeMesh.rotation.y = staticGlobeMesh.rotation.y;
                    },
                }
            );
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="relative w-[320px] h-[320px] pointer-events-none">
            <div className="absolute inset-0 flex justify-center">
                <Globe3D
                    ref={staticGlobeRef}
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
                />
            </div>
            <div className="absolute inset-0 flex justify-center">
                <Globe3D
                    ref={animatedGlobeRef}
                    width={320}
                    height={320}
                    backgroundColor="rgba(0,0,0,0)"
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
                    showGlobe={false}
                    showAtmosphere={false}
                    arcsData={animatedArcs}
                    arcColor={() => "#E95420"}
                    arcStroke={1.1}
                    arcAltitude="altitude"
                    arcDashLength={0.025}
                    arcDashGap={1}
                    arcDashInitialGap={() =>
                        Math.random() * 3
                    }
                    arcDashAnimateTime={() =>
                        1800
                    }
                />
            </div>
        </div>
    );
};

export default GlobeMap;
