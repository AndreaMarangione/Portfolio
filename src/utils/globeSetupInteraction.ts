import type {GlobeMethods} from "react-globe.gl";

type GlobeSetupInteractionProps = {
    globe: GlobeMethods;
};

const globeSetupInteraction =
    ({
         globe,
     }: GlobeSetupInteractionProps) => {

        const controls = globe.controls();
        const polarAngle: number = controls.getPolarAngle();

        controls.minPolarAngle = polarAngle;
        controls.maxPolarAngle = polarAngle;
        controls.enableZoom = false;
        controls.enablePan = false;
        controls.enableDamping = true;
        controls.dampingFactor = 0.08;
    };

export default globeSetupInteraction;
