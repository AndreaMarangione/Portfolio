import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
    return (
        <main className="pt-16">
            <section id="home" className="min-h-screen py-20">
                <div className="w-full md:max-w-6xl md:mx-auto md:px-6">
                    <Hero/>
                </div>
            </section>

            <section id="about" className="min-h-screen py-12 md:py-20">
                <div className="w-full md:max-w-6xl md:mx-auto md:px-6">
                    <About/>
                </div>
            </section>

            <section id="skills" className="min-h-screen py-12 md:py-20">
                <div className="w-full md:max-w-6xl md:mx-auto md:px-6">
                    <Skills/>
                </div>
            </section>

            <section id="projects" className="min-h-screen py-12 md:py-20">
                <div className="w-full md:max-w-6xl md:mx-auto md:px-6">
                    <Projects/>
                </div>
            </section>

            <section id="contact" className="min-h-screen py-12 md:py-20">
                <div className="w-full md:max-w-6xl md:mx-auto md:px-6">
                    <Contact/>
                </div>
            </section>
        </main>
    );
}
