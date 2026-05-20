import gsap from "gsap";
import type {Object3D} from "three";

type GlobeSetupRotationAnimationProps = {
    globeMesh: Object3D;
};

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
