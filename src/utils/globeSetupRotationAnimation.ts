import gsap from "gsap";
import {GlobeSetupRotationAnimationProps} from "@/components/world/partials/globeMap/type";

const globeSetupRotationAnimation =
    ({
         globeMesh,
     }: GlobeSetupRotationAnimationProps) => {

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
    };

export default globeSetupRotationAnimation;
