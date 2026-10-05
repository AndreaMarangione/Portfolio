import type {GlobeMethods} from "react-globe.gl";

export type GlobeSetupRotationAnimationProps = {
    globe: GlobeMethods;
};

export type GlobeSetupViewProps = {
    globe: GlobeMethods;
};

export type GlobeCity = {
    lat: number;
    lng: number;
    labelLat: number;
    labelLng: number;
    name: string;
    ringPeriod: number;
};
