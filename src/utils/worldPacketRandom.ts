import {routes} from "@/components/world/partials/worldMap/constant";

const worldPacketRandom = routes.map(() => ({
    duration: 4 + Math.random() * 4,
    delay: -(Math.random() * 8),
}));

export default worldPacketRandom
