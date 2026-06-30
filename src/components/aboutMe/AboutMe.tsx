import AboutMeWindowButton from "@/components/aboutMe/partials/AboutMeWindowButton";
import AboutMeWindowControl from "@/components/aboutMe/partials/AboutMeWindowControl";
import AboutMeRenderLine from "@/components/aboutMe/partials/AboutMeRenderLine";
import {aboutMeLines} from "@/components/aboutMe/constant";

const AboutMe = () => {
    return (
        <div className="mx-auto mt-10 w-full max-w-3xl animate-fade-up md:mt-14">
            <div className="overflow-hidden rounded-xl border border-border bg-background shadow-2xl">
                <div className="flex h-[46px] items-center gap-2 border-b border-black/30 bg-card px-2.5">
                    <div className="hidden items-center gap-2 sm:flex">
                        <AboutMeWindowButton>
                            Open
                            <svg width="11" height="11" viewBox="0 0 12 12">
                                <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.3"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </AboutMeWindowButton>
                        <AboutMeWindowButton className="!w-8 !px-0 justify-center" label="New document">
                            <svg width="15" height="15" viewBox="0 0 16 16">
                                <rect x="3.5" y="2.5" width="9" height="11" rx="1.5" fill="none" stroke="currentColor"
                                      strokeWidth="1.2"/>
                                <path d="M8 6v4M6 8h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                            </svg>
                        </AboutMeWindowButton>
                    </div>

                    <div className="min-w-0 flex-1 truncate text-center text-sm font-medium text-foreground">
                        <span className="mr-[7px] align-[2px] text-[10px] text-primary">●</span>
                        about-me.md
                    </div>

                    <div className="flex items-center gap-2">
                        <AboutMeWindowButton className="hidden sm:flex">Save</AboutMeWindowButton>
                        <AboutMeWindowButton className="!w-8 !px-0 justify-center" label="Menu">
                            <svg width="15" height="15" viewBox="0 0 16 16">
                                <path d="M2.5 4.5h11M2.5 8h11M2.5 11.5h11" stroke="currentColor" strokeWidth="1.3"
                                      strokeLinecap="round"/>
                            </svg>
                        </AboutMeWindowButton>
                        <AboutMeWindowControl label="Minimize">
                            <svg width="11" height="11" viewBox="0 0 12 12">
                                <line x1="2.5" y1="6" x2="9.5" y2="6" stroke="currentColor" strokeWidth="1.4"
                                      strokeLinecap="round"/>
                            </svg>
                        </AboutMeWindowControl>
                        <AboutMeWindowControl label="Maximize">
                            <svg width="11" height="11" viewBox="0 0 12 12">
                                <rect x="2.5" y="2.5" width="7" height="7" rx="1" fill="none" stroke="currentColor"
                                      strokeWidth="1.3"/>
                            </svg>
                        </AboutMeWindowControl>
                        <AboutMeWindowControl label="Close" close>
                            <svg width="11" height="11" viewBox="0 0 12 12">
                                <path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.4"
                                      strokeLinecap="round"/>
                            </svg>
                        </AboutMeWindowControl>
                    </div>
                </div>

                <div className="bg-background py-3.5 font-mono text-sm leading-[1.7]">
                    {aboutMeLines.map((line, index) => (
                        <div key={index} className="flex">
                            <span
                                className="w-[34px] flex-none select-none pr-4 text-right text-white/30"
                            >
                                {index + 1}
                            </span>
                            <span className="min-w-0 flex-1 break-words pr-6">
                                {AboutMeRenderLine(line, index === aboutMeLines.length - 1)}
                            </span>
                        </div>
                    ))}
                </div>

                <div
                    className="flex h-[30px] items-center justify-end gap-[18px] border-t border-black/30 bg-card px-4 text-xs text-muted-foreground"
                >
                    <span className="hidden sm:inline">Markdown</span>
                    <span className="hidden sm:inline">Tab Width: 4</span>
                    <span>Ln 11, Col 1</span>
                    <span>INS</span>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
