import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import SectionDivider from "@/components/sectionDivider/SectionDivider";

export default function Home() {
    return (
        <div className="pt-16">
            <section id="home" className="min-h-screen pt-12 scroll-mt-16">
                <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12">
                    <Hero/>
                </div>
            </section>

            <section id="about" className="min-h-screen pt-1 scroll-mt-16">
                <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12">
                    <SectionDivider dir="about"/>
                    <About/>
                </div>
            </section>

            <section id="skills"
                     className="min-h-screen pt-1 scroll-mt-16 min-[1025px]:relative min-[1025px]:flex min-[1025px]:min-h-[calc(100vh_-_4rem)] min-[1025px]:flex-col min-[1025px]:justify-center"
            >
                <div
                    className="mx-auto w-full max-w-[1600px] px-6 lg:px-12 min-[1025px]:absolute min-[1025px]:left-1/2 min-[1025px]:top-0 min-[1025px]:-translate-x-1/2 min-[1025px]:pt-1">
                    <SectionDivider dir="skills"/>
                </div>
                <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12">
                    <Skills/>
                </div>
            </section>

            <section id="projects" className="min-h-screen pt-1 scroll-mt-16">
                <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12">
                    <SectionDivider dir="projects"/>
                    <Projects/>
                </div>
            </section>

            <section id="contact" className="min-h-screen pt-1 scroll-mt-16">
                <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12">
                    <SectionDivider dir="contact"/>
                    <Contact/>
                </div>
            </section>
        </div>
    );
}
