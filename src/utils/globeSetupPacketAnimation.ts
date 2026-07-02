import {CubicBezierCurve3, Mesh, MeshBasicMaterial, Object3D, SphereGeometry,} from "three";
import {staticArcs} from "@/components/world/partials/globeMap/constant";
import type {PacketAnimation} from "@/components/world/partials/globeMap/type";
import {RefObject} from "react";

type SetupPacketAnimationsProps = {
    globeMesh: Object3D;
    curveMap: Map<number, CubicBezierCurve3>;
    packetAnimationsRef: RefObject<PacketAnimation[]>;
};

type Packet = {
    mesh: Mesh;
    curve: CubicBezierCurve3;
    delay: number;
    duration: number;
    repeatDelay: number;
    reverse: boolean;
};

const globeSetupPacketAnimation =
    ({
         globeMesh,
         curveMap,
         packetAnimationsRef,
     }: SetupPacketAnimationsProps): (() => void) => {

        const packets: Packet[] = [];

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

            packets.push({
                mesh,
                curve,
                delay: Math.random(),
                duration: 3 + Math.random() * 2,
                repeatDelay: Math.random() * 2,
                reverse: Math.random() > 0.5,
            });
        }

        const startTime = performance.now();
        let rafId = 0;

        const tick = () => {
            const elapsed = (performance.now() - startTime) / 1000;

            for (const packet of packets) {
                const local = elapsed - packet.delay;

                if (local < 0) {
                    packet.mesh.visible = false;
                    continue;
                }

                packet.mesh.visible = true;

                const cycle = packet.duration + packet.repeatDelay;
                const phase = local % cycle;
                const progress =
                    phase < packet.duration
                        ? phase / packet.duration
                        : 1;

                const point =
                    packet.curve.getPoint(
                        packet.reverse
                            ? 1 - progress
                            : progress
                    );

                packet.mesh.position.copy(point);
            }

            rafId = requestAnimationFrame(tick);
        };

        rafId = requestAnimationFrame(tick);

        return () => cancelAnimationFrame(rafId);
    };

export default globeSetupPacketAnimation;
