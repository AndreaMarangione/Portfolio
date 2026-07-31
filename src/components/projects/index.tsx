import {myProjects} from "@/components/projects/constant";
import {PlantProject, WebProject} from "@/components/projects/type";
import ProjectGroup from "@/components/projects/partials/ProjectGroup";

const plantProjects = myProjects.filter((p): p is PlantProject => p.kind === "plant");
const webProjects = myProjects.filter((p): p is WebProject => p.kind === "web");

const projects = () => {
    return (
        <div className="flex animate-fade-up flex-col gap-8 pt-4">
            <ProjectGroup projects={plantProjects}/>
            <ProjectGroup projects={webProjects}/>
        </div>
    );
};

export default projects;
