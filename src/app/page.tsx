import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
    return (
        <main className="pt-16">
            <section id="home" className="min-h-screen py-10 md:py-12">
                <div className="px-6 w-full md:max-w-6xl md:mx-auto">
                    <Hero/>
                </div>
            </section>

            <section id="about" className="min-h-screen py-12 md:py-20">
                <div className="px-6 w-full md:max-w-6xl md:mx-auto">
                    <About/>
                </div>
            </section>

            <section id="skills" className="min-h-screen py-12 md:py-20">
                <div className="px-6 w-full md:max-w-6xl md:mx-auto">
                    <Skills/>
                </div>
            </section>

            <section id="projects" className="min-h-screen py-12 md:py-20">
                <div className="px-6 w-full md:max-w-6xl md:mx-auto">
                    <Projects/>
                </div>
            </section>

            <section id="contact" className="min-h-screen py-12 md:py-20">
                <div className="px-6 w-full md:max-w-6xl md:mx-auto">
                    <Contact/>
                </div>
            </section>
        </main>
    );
}
