"use client";

import {useEffect, useRef} from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";

import type {GlobeMethods} from "react-globe.gl";

import {
    cities,
    staticArcs,
} from "@/components/world/partials/globeMap/constant";

import {
    CubicBezierCurve3,
    Mesh,
    MeshBasicMaterial,
    SphereGeometry,
    Vector3,
} from "three";

import type {Mesh as ThreeMesh} from "three";

const Globe3D = dynamic(
    () => import("react-globe.gl"),
    {
        ssr: false,
    }
);

type PacketAnimation = {
    mesh: ThreeMesh;
    curve: CubicBezierCurve3;
};

const GlobeMap = () => {

    const globeRef =
        useRef<GlobeMethods | undefined>(
            undefined
        );

    const packetAnimationsRef =
        useRef<PacketAnimation[]>(
            []
        );

    useEffect(() => {

        const interval = setInterval(() => {

            if (!globeRef.current) {
                return;
            }

            const scene =
                globeRef.current.scene();

            const globeMesh =
                scene.children.find(
                    (child: any) =>
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

            const curveMap =
                new Map<
                    number,
                    CubicBezierCurve3
                >();

            globeMesh.traverse((child: any) => {

                if (
                    child.geometry?.type !==
                    "TubeGeometry"
                ) {
                    return;
                }

                const path =
                    child.geometry.parameters.path;

                if (
                    path?.type !==
                    "CubicBezierCurve3"
                ) {
                    return;
                }

                for (const arc of staticArcs) {

                    if (
                        curveMap.has(
                            arc.id
                        )
                    ) {
                        continue;
                    }

                    const startCoords =
                        globeRef.current?.getCoords(
                            arc.startLat,
                            arc.startLng,
                            0,
                        );

                    if (!startCoords) {
                        continue;
                    }

                    const distance =
                        path.v0.distanceTo(
                            new Vector3(
                                startCoords.x,
                                startCoords.y,
                                startCoords.z,
                            )
                        );

                    if (
                        distance < 1
                    ) {

                        curveMap.set(
                            arc.id,
                            path
                        );
                    }
                }
            });

            for (const arc of staticArcs) {

                const curve =
                    curveMap.get(
                        arc.id
                    );

                if (!curve) {
                    continue;
                }

                const mesh =
                    new Mesh(
                        new SphereGeometry(1.2),

                        new MeshBasicMaterial({
                            color: "#E95420",
                        })
                    );

                globeMesh.add(mesh);

                packetAnimationsRef.current.push({
                    mesh,
                    curve,
                });

                const animation = {
                    progress: 0,
                };

                gsap.to(
                    animation,
                    {
                        progress: 1,

                        duration:
                            3 +
                            Math.random() * 2,

                        delay:
                            Math.random(),

                        repeatDelay:
                            Math.random() * 2,

                        repeat: -1,

                        ease: "none",

                        onRepeat: () => {
                            animation.progress = 0;
                        },

                        onUpdate: () => {

                            const point =
                                curve.getPoint(
                                    animation.progress
                                );

                            mesh.position.copy(
                                point
                            );
                        },
                    }
                );
            }
        }, 100);

        return () => {
            clearInterval(interval);

            packetAnimationsRef.current.forEach(
                ({mesh}) => {
                    mesh.removeFromParent();
                }
            );

            packetAnimationsRef.current =
                [];
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

                arcsData={staticArcs}

                arcColor={() =>
                    "rgba(233,84,32,0.45)"
                }

                arcStroke={0.6}

                arcAltitude="altitude"
            />
        </div>
    );
};

export default GlobeMap;
