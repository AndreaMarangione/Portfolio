"use client";

import dynamic from "next/dynamic";

const Globe3D = dynamic(
    () => import("react-globe.gl"),
    {
        ssr: false,
    }
);

const GlobeMap = () => {
    return (
        <div className="w-full flex justify-center">
            <Globe3D
                width={320}
                height={320}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
                backgroundColor="rgba(0,0,0,0)"
            />
        </div>
    );
};

export default GlobeMap;
