import {Arc} from "@/components/world/partials/globeMap/type";

export const cities = [
    {
        lat: 43.7696,
        lng: 11.2558,
        labelLat: 48.8,
        labelLng: 13.5,
        name: "Florence",
    },
    {
        lat: 30.6290,
        lng: 119.5530,
        labelLat: 30.6290,
        labelLng: 119.5530,
        name: "Tongxiang",
    },
    {
        lat: 37.6484,
        lng: 28.8826,
        labelLat: 37.6484,
        labelLng: 28.8826,
        name: "Balikesir",
    },
    {
        lat: 24.0745,
        lng: 115.2965,
        labelLat: 24.0745,
        labelLng: 115.2965,
        name: "Fuzhou",
    },
    {
        lat: 29.7604,
        lng: -95.3698,
        labelLat: 29.7604,
        labelLng: -95.3698,
        name: "Houston",
    },
    {
        lat: 53.0728,
        lng: 9.9819,
        labelLat: 58.0728,
        labelLng: 9.9819,
        name: "Neumunster",
    },
    {
        lat: 31.3085,
        lng: -86.4822,
        labelLat: 36.8085,
        labelLng: -85.4822,
        name: "Andalusia",
    },
    {
        lat: 41.6488,
        lng: -0.8891,
        labelLat: 41.6488,
        labelLng: -0.8891,
        name: "Zaragozza",
    },
    {
        lat: 34.3118,
        lng: 118.1850,
        labelLat: 39.3118,
        labelLng: 118.1850,
        name: "Rudong",
    },
    {
        lat: 40.7654,
        lng: 29.9408,
        labelLat: 45.7654,
        labelLng: 30.9408,
        name: "Izmit",
    },
];

export const staticArcs: Array<Arc> = [
    // tongxiang -> houston
    {
        id: 1,
        startLat: 30.6290,
        startLng: 119.5530,
        endLat: 29.7604,
        endLng: -95.3698,
        altitude: 0.22,
    },
    // florence -> andalusia
    {
        id: 2,
        startLat: 43.7696,
        startLng: 11.2558,
        endLat: 31.3085,
        endLng: -86.4822,
        altitude: 0.10,
    },
    // rudong -> neumunster
    {
        id: 3,
        startLat: 34.3118,
        startLng: 118.1850,
        endLat: 53.0728,
        endLng: 9.9819,
        altitude: 0.10,
    },
    // fuzho -> izmit
    {
        id: 4,
        startLat: 24.0745,
        startLng: 115.2965,
        endLat: 40.7654,
        endLng: 29.9408,
        altitude: 0.10,
    },
    // balikesir -> zaragozza
    {
        id: 5,
        startLat: 37.6484,
        startLng: 28.8826,
        endLat: 41.6488,
        endLng: -0.8891,
        altitude: 0.02,
    },
];

export const animatedArcs: Array<Arc> =
    staticArcs.map((arc, index) => ({
        ...arc,
        id: index + 100,
    }));
