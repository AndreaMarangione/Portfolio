import {CubicBezierCurve3, Mesh, TubeGeometry, Vector3,} from "three";
import {staticArcs} from "@/components/world/partials/globeMap/constant";
import {FindArcCurvesProps} from "@/components/world/partials/globeMap/type";

const globeFindArcCurves =
    ({
         globeMesh,
         globe,
     }: FindArcCurvesProps) => {
        const curveMap = new Map<number, CubicBezierCurve3>();

        globeMesh.traverse((child) => {
            if (child.type !== "Mesh") return;

            const mesh = child as Mesh;

            if (mesh.geometry.type !== "TubeGeometry") return;

            const geometry = mesh.geometry as TubeGeometry;
            const path = geometry.parameters.path;

            if (path.type !== "CubicBezierCurve3") return;

            const curve = path as CubicBezierCurve3;

            for (const arc of staticArcs) {
                if (curveMap.has(arc.id)) continue

                const startCoordinates =
                    globe.getCoords(
                        arc.startLat,
                        arc.startLng,
                        0,
                    );

                if (!startCoordinates) continue

                const distance: number =
                    curve.v0.distanceTo(
                        new Vector3(
                            startCoordinates.x,
                            startCoordinates.y,
                            startCoordinates.z,
                        )
                    );

                if (distance < 1) {
                    curveMap.set(
                        arc.id,
                        curve
                    );
                }
            }
        });

        return curveMap;
    };

export default globeFindArcCurves;
