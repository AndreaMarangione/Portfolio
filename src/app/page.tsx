import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import SectionDivider from "@/components/sectionDivider/SectionDivider";

export default function Home() {
    return (
        <div className="pt-16">
            <section id="home" className="min-h-screen mt-10 scroll-mt-16">
                <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12">
                    <Hero/>
                </div>
            </section>

            <section id="about" className="min-h-screen mt-10 pt-3 scroll-mt-16">
                <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12">
                    <SectionDivider dir="about"/>
                    <About/>
                </div>
            </section>

            <section id="skills"
                     className="min-h-screen mt-10 pt-3 scroll-mt-16 min-[1025px]:flex min-[1025px]:min-h-[calc(100vh_-_4rem)] min-[1025px]:flex-col"
            >
                <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12">
                    <SectionDivider dir="skills"/>
                </div>
                <div
                    className="mx-auto w-full max-w-[1600px] px-6 lg:px-12 min-[1025px]:flex min-[1025px]:min-h-0 min-[1025px]:flex-1 min-[1025px]:flex-col">
                    <Skills/>
                </div>
            </section>

            <section id="projects" className="min-h-screen mt-10 pt-3 scroll-mt-16">
                <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12">
                    <SectionDivider dir="projects"/>
                    <Projects/>
                </div>
            </section>

            <section id="contact" className="min-h-[calc(100vh_-_4rem)] mt-10 pt-3 scroll-mt-16">
                <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12">
                    <SectionDivider dir="contact"/>
                    <Contact/>
                </div>
            </section>
        </div>
    );
}
