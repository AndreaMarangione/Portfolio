import Intro from "@/components/hero/intro";
import HeroImage from "@/components/hero/image";
import {CAREER_START_YEAR} from "@/components/hero/constant";

const Hero = () => {
    const experienceYears: number = new Date().getFullYear() - CAREER_START_YEAR;

    return (
        <div className="mx-auto w-full max-w-400 px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <Intro experienceYears={experienceYears}/>
                <HeroImage/>
            </div>
        </div>
    );
};

export default Hero;
