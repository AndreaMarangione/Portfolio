import Projects from "@/components/projects";
import SectionDivider from "@/components/layout/sectionDivider/SectionDivider";

const ProjectsSection = () => {
    return (
        <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12">
            <SectionDivider dir="projects"/>
            <Projects/>
        </div>
    )
}

export default ProjectsSection
