import dynamic from "next/dynamic";

export const VIEW_TRANSITION_MS = 0;
export const AUTOROTATE_SPEED = 3;
export const RING_MAX_RADIUS = 4;
export const RING_PROPAGATION_SPEED = 1.6;

export const Globe3D = dynamic(
    () => import("react-globe.gl"),
    {
        ssr: false,
    }
);

export type GlobeCity = {
    lat: number;
    lng: number;
    labelLat: number;
    labelLng: number;
    name: string;
    ringPeriod: number;
};

export const cities: GlobeCity[] = [
    {
        lat: 43.7696,
        lng: 11.2558,
        labelLat: 48.8,
        labelLng: 13.5,
        name: "Florence",
        ringPeriod: 2600,
    },
    {
        lat: 30.6290,
        lng: 119.5530,
        labelLat: 30.6290,
        labelLng: 119.5530,
        name: "Tongxiang",
        ringPeriod: 3130,
    },
    {
        lat: 37.6484,
        lng: 28.8826,
        labelLat: 37.6484,
        labelLng: 28.8826,
        name: "Balikesir",
        ringPeriod: 2270,
    },
    {
        lat: 24.0745,
        lng: 115.2965,
        labelLat: 24.0745,
        labelLng: 115.2965,
        name: "Fuzhou",
        ringPeriod: 3490,
    },
    {
        lat: 29.7604,
        lng: -95.3698,
        labelLat: 29.7604,
        labelLng: -95.3698,
        name: "Houston",
        ringPeriod: 2830,
    },
    {
        lat: 53.0728,
        lng: 9.9819,
        labelLat: 58.0728,
        labelLng: 9.9819,
        name: "Neumunster",
        ringPeriod: 3910,
    },
    {
        lat: 31.3085,
        lng: -86.4822,
        labelLat: 36.8085,
        labelLng: -85.4822,
        name: "Andalusia",
        ringPeriod: 2410,
    },
    {
        lat: 41.6488,
        lng: -0.8891,
        labelLat: 41.6488,
        labelLng: -0.8891,
        name: "Zaragozza",
        ringPeriod: 3670,
    },
    {
        lat: 34.3118,
        lng: 118.1850,
        labelLat: 39.3118,
        labelLng: 118.1850,
        name: "Rudong",
        ringPeriod: 2950,
    },
    {
        lat: 40.7654,
        lng: 29.9408,
        labelLat: 45.7654,
        labelLng: 30.9408,
        name: "Izmit",
        ringPeriod: 3310,
    },
];
