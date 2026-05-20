import type {Mesh as ThreeMesh} from "three";
import {CubicBezierCurve3} from "three";

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
