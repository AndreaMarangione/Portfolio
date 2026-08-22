import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/Projects";
import ContactsSection from "@/components/sections/Contact";

export default function Home() {
    return (
        <div className="pt-16">
            <section id="home" className="min-h-screen mt-10 scroll-mt-16">
                <Hero/>
            </section>

            <section id="about" className="min-h-screen mt-10 pt-3 scroll-mt-16">
                <About/>
            </section>

            <section id="skills"
                     className="min-h-screen mt-10 pt-3 scroll-mt-16 min-[1025px]:flex
                     min-[1025px]:min-h-[calc(100vh_-_4rem)] min-[1025px]:flex-col"
            >
                <SkillsSection/>
            </section>

            <section id="projects" className="min-h-screen mt-10 pt-3 scroll-mt-16">
                <ProjectsSection/>
            </section>

            <section id="contact"
                     className="min-h-[calc(100vh_-_4rem)] mt-10 pt-3 scroll-mt-16 min-[820px]:flex min-[820px]:flex-col"
            >
                <ContactsSection/>
            </section>
        </div>
    );
}
