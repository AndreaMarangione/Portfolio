"use client";

import {useEffect, useRef} from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import * as THREE from "three";
import type {GlobeMethods} from "react-globe.gl";

const Globe3D = dynamic(
    () => import("react-globe.gl"),
    {
        ssr: false,
    }
);

const GlobeMap = () => {
    const globeRef = useRef<GlobeMethods | undefined>(undefined);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!globeRef.current) return;

            const scene = globeRef.current.scene();

            const globeMesh = scene.children.find(
                (child): child is THREE.Group => child instanceof THREE.Group
            );

            if (!globeMesh) return;

            clearInterval(interval);

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

        return () =>
            clearInterval(interval);
    }, []);

    return (
        <div className="w-full flex justify-center pointer-events-none">
            <Globe3D
                ref={globeRef}
                width={320}
                height={320}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
                backgroundColor="rgba(0,0,0,0)"
            />
        </div>
    );
};

export default GlobeMap;
