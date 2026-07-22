import {routes} from "@/components/world/partials/worldMap/constant";

const worldPacketRandom = routes.map(() => ({
    duration: 3 + Math.random(),
    delay: -(Math.random() * 8),
    reverse: Math.random() > 0.5
}));

export default worldPacketRandom
