import Skills from "@/components/skills";
import SectionDivider from "@/components/layout/sectionDivider/SectionDivider";

const SkillsSection = () => {
    return (
        <>
            <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12">
                <SectionDivider dir="skills"/>
            </div>
            <div
                className="mx-auto w-full max-w-[1600px] px-6 lg:px-12 min-[1025px]:flex min-[1025px]:min-h-0 min-[1025px]:flex-1 min-[1025px]:flex-col">
                <Skills/>
            </div>
        </>
    )
}

export default SkillsSection
