import type {GlobeMethods} from "react-globe.gl";
import {VIEW_LAT} from "@/components/about/world/partials/globeMap/constant";

type GlobeSetupInteractionProps = {
    globe: GlobeMethods;
};

const globeSetupInteraction = ({globe}: GlobeSetupInteractionProps) => {
    const controls = globe.controls();
    const polarAngle: number = (90 - VIEW_LAT) * Math.PI / 180;

    controls.minPolarAngle = polarAngle;
    controls.maxPolarAngle = polarAngle;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
};

export default globeSetupInteraction;
