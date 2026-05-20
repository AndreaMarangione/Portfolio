import type {GlobeMethods} from "react-globe.gl";

type GlobeSetupViewProps = {
    globe: GlobeMethods;
};

const globeSetupView =
    ({
         globe,
     }: GlobeSetupViewProps) => {

        globe.pointOfView(
            {
                lat: 30,
                lng: 12,
                altitude: 1.7,
            },
            0
        );
    };

export default globeSetupView;
