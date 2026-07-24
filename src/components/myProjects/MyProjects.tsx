import {projects} from "@/components/myProjects/constant";
import {PlantProject, WebProject} from "@/components/myProjects/type";
import ProjectGroup from "@/components/myProjects/partials/ProjectGroup";

const plantProjects = projects.filter((p): p is PlantProject => p.kind === "plant");
const webProjects = projects.filter((p): p is WebProject => p.kind === "web");

const MyProjects = () => {
    return (
        <div className="flex animate-fade-up flex-col gap-8">
            <ProjectGroup projects={plantProjects}/>
            <ProjectGroup projects={webProjects}/>
        </div>
    );
};

export default MyProjects;
