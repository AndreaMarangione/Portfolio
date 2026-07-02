import {Mesh as ThreeMesh, Object3D} from "three";
import {CubicBezierCurve3} from "three";
import {RefObject} from "react";
import type {GlobeMethods} from "react-globe.gl";

export type Arc = {
    id: number;
    startLat: number;
    startLng: number;
    endLat: number;
    endLng: number;
    altitude: number;
}

export type PacketAnimation = {
    mesh: ThreeMesh;
    curve: CubicBezierCurve3;
};

export type SetupPacketAnimationsProps = {
    globeMesh: Object3D;
    curveMap: Map<number, CubicBezierCurve3>;
    packetAnimationsRef: RefObject<PacketAnimation[]>;
};

export type FindArcCurvesProps = {
    globeMesh: Object3D;
    globe: GlobeMethods;
};

export type GlobeSetupRotationAnimationProps = {
    globeMesh: Object3D;
};

export type GlobeSetupViewProps = {
    globe: GlobeMethods;
};
