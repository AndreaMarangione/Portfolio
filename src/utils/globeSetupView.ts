import {GlobeSetupViewProps} from "@/components/about/world/partials/globeMap/type";
import {
    VIEW_ALTITUDE,
    VIEW_LAT,
    VIEW_LNG,
    VIEW_TRANSITION_MS,
} from "@/components/about/world/partials/globeMap/constant";

const globeSetupView = ({globe}: GlobeSetupViewProps) => {
    globe.pointOfView(
        {lat: VIEW_LAT, lng: VIEW_LNG, altitude: VIEW_ALTITUDE},
        VIEW_TRANSITION_MS
    );
};

export default globeSetupView;
