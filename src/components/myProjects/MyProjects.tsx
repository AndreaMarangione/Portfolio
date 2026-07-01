import {projects} from "@/components/myProjects/constant";
import PlantCard from "@/components/myProjects/partials/PlantCard";
import WebCard from "@/components/myProjects/partials/WebCard";

const MyProjects = () => {
    return (
        <div className="grid animate-fade-up grid-cols-1 gap-[18px] sm:grid-cols-[repeat(auto-fit,minmax(330px,1fr))]">
            {projects.map((p) =>
                p.kind === "plant"
                    ? <PlantCard key={p.name} p={p}/>
                    : <WebCard key={p.name} p={p}/>
            )}
        </div>
    );
};

export default MyProjects;
