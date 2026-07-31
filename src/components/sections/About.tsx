"use client";

import World from "../about/world";
import TextEditorAboutMe from "../about/textEditorAboutMe";
import SectionDivider from "@/components/layout/sectionDivider/SectionDivider";

const About = () => {
    return (
        <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12">
            <SectionDivider dir="about"/>
            <World/>
            <TextEditorAboutMe/>
        </div>
    )
};

export default About;
