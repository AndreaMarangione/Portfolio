import {GlobeSetupViewProps} from "@/components/about/world/partials/globeMap/type";
import {VIEW_TRANSITION_MS} from "@/components/about/world/partials/globeMap/constant";

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
            VIEW_TRANSITION_MS
        );
    };

export default globeSetupView;
