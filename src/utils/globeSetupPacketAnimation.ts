import gsap from "gsap";
import {Mesh, MeshBasicMaterial, SphereGeometry,} from "three";
import {staticArcs} from "@/components/world/partials/globeMap/constant";
import type {SetupPacketAnimationsProps} from "@/components/world/partials/globeMap/type";

const globeSetupPacketAnimation =
    ({
         globeMesh,
         curveMap,
         packetAnimationsRef,
     }: SetupPacketAnimationsProps) => {
        for (const arc of staticArcs) {
            const curve = curveMap.get(arc.id);

            if (!curve) continue;

            const mesh =
                new Mesh(
                    new SphereGeometry(1.2),
                    new MeshBasicMaterial({color: "#E95420"})
                );

            globeMesh.add(mesh);
            packetAnimationsRef.current.push({mesh, curve});

            const animation = {progress: 0};
            const reverse: boolean = Math.random() > 0.5;

            gsap.to(
                animation,
                {
                    progress: 1,
                    duration: 3 + Math.random() * 2,
                    delay: Math.random(),
                    repeatDelay: Math.random() * 2,
                    repeat: -1,
                    ease: "none",

                    onRepeat: () => {
                        animation.progress = 0
                    },
                    onUpdate: () => {
                        const point =
                            curve.getPoint(
                                reverse
                                    ? 1 - animation.progress
                                    : animation.progress
                            );
                        mesh.position.copy(point);
                    },
                }
            );
        }
    };

export default globeSetupPacketAnimation;
