"use client"

import Intro from "@/components/hero/intro";
import HeroImage from "@/components/hero/image";

const Hero = () => {
    return (
        <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <Intro/>
                <HeroImage/>
            </div>
        </div>
    );
};

export default Hero;
