"use client";

import {useEffect, useRef} from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import {cities, staticArcs,} from "@/components/world/partials/globeMap/constant";
import {CubicBezierCurve3, Mesh, MeshBasicMaterial, SphereGeometry, TubeGeometry, Vector3,} from "three";
import {PacketAnimation} from "@/components/world/partials/globeMap/type";
import type {GlobeMethods} from "react-globe.gl";

const Globe3D = dynamic(
    () => import("react-globe.gl"),
    {
        ssr: false,
    }
);

const GlobeMap = () => {
    const globeRef = useRef<GlobeMethods | undefined>(undefined);
    const packetAnimationsRef = useRef<PacketAnimation[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!globeRef.current) {
                return;
            }

            const scene = globeRef.current.scene();
            const globeMesh =
                scene.children.find((child) => child.type === "Group");

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

            const curveMap = new Map<number, CubicBezierCurve3>();

            globeMesh.traverse((child) => {
                if (child.type !== "Mesh") {
                    return;
                }

                const mesh = child as Mesh;

                if (mesh.geometry?.type !== "TubeGeometry") {
                    return;
                }

                const geometry = mesh.geometry as TubeGeometry;
                const path = geometry.parameters.path;

                if (path.type !== "CubicBezierCurve3") {
                    return;
                }

                const curve = path as CubicBezierCurve3;

                if (path?.type !== "CubicBezierCurve3") {
                    return;
                }

                for (const arc of staticArcs) {
                    if (curveMap.has(arc.id)) {
                        continue;
                    }

                    const startCoordinates =
                        globeRef.current?.getCoords(
                            arc.startLat,
                            arc.startLng,
                            0,
                        );

                    if (!startCoordinates) {
                        continue;
                    }

                    const distance =
                        curve.v0.distanceTo(
                            new Vector3(
                                startCoordinates.x,
                                startCoordinates.y,
                                startCoordinates.z,
                            )
                        );

                    if (distance < 1) {
                        curveMap.set(
                            arc.id,
                            curve
                        );
                    }
                }
            });

            for (const arc of staticArcs) {
                const curve = curveMap.get(arc.id);

                if (!curve) {
                    continue;
                }

                const mesh =
                    new Mesh(
                        new SphereGeometry(1.2),
                        new MeshBasicMaterial({color: "#E95420"})
                    );

                globeMesh.add(mesh);
                packetAnimationsRef.current.push({mesh, curve});

                const animation = {progress: 0};
                const reverse = Math.random() > 0.5;

                gsap.to(
                    animation,
                    {
                        progress: 1,
                        duration: 3 + Math.random() * 2,
                        delay: Math.random(),
                        repeatDelay: Math.random() * 2,
                        repeat: -1,
                        ease: "none",

                        onRepeat: () => {
                            animation.progress = 0;
                        },

                        onUpdate: () => {
                            const point =
                                curve.getPoint(
                                    reverse
                                        ? 1 - animation.progress
                                        : animation.progress
                                );
                            mesh.position.copy(point);
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
