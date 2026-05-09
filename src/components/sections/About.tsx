import WorldMap from "@/components/worldMap/WorldMap";
import GlobeMap from "@/components/globe/GlobeMap";

const About = () => {
    return (
        <>
            <div className="block md:hidden">
                <GlobeMap/>
            </div>

            <div className="hidden md:block">
                <WorldMap/>
            </div>
        </>
    )
}

export default About
