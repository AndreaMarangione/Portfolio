import {GlobeSetupRotationAnimationProps} from "@/components/world/partials/globeMap/type";
import {AUTOROTATE_SPEED} from "@/components/world/partials/globeMap/constant";

const globeSetupRotationAnimation =
    ({
         globe,
     }: GlobeSetupRotationAnimationProps) => {

        const controls = globe.controls();

        controls.autoRotate = true;
        controls.autoRotateSpeed = AUTOROTATE_SPEED;
    };

export default globeSetupRotationAnimation;
