import WorldMap from "@/components/worldMap/WorldMap";
import MobileRoutes from "@/components/mobileRoutes/MobileRoutes";

const About = () => {
    return (
        <>
            <div className="block md:hidden">
                <MobileRoutes/>
            </div>

            <div className="hidden md:block">
                <WorldMap/>
            </div>
        </>
    )
}

export default About
