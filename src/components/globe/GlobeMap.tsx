"use client";

import {useEffect, useRef} from "react";
import dynamic from "next/dynamic";
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

        let animationFrame: number;

        const animate = () => {

            if (globeRef.current) {

                globeRef.current
                    .scene()
                    .rotation.y += 0.0015;
            }

            animationFrame =
                requestAnimationFrame(animate);
        };

        animate();

        return () =>
            cancelAnimationFrame(animationFrame);

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
