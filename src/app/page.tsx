import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
    return (
        <div className="pt-16">
            <section id="home" className="min-h-screen py-10 scroll-mt-16">
                <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12">
                    <Hero/>
                </div>
            </section>

            <section id="about" className="min-h-screen pt-10 scroll-mt-16">
                <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12">
                    <About/>
                </div>
            </section>

            <section id="skills" className="min-h-screen pt-10 scroll-mt-16">
                <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12">
                    <Skills/>
                </div>
            </section>

            <section id="projects" className="min-h-screen pt-10 scroll-mt-16">
                <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12">
                    <Projects/>
                </div>
            </section>

            <section id="contact" className="min-h-screen pt-10 scroll-mt-16">
                <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12">
                    <Contact/>
                </div>
            </section>
        </div>
    );
}
