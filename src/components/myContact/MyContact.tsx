import GithubIcon from "@/components/ui/GithubIcon";
import {EMAIL, GITHUB_LABEL, GITHUB_URL, LINKEDIN_LABEL, LINKEDIN_URL, LOCATION} from "@/components/myContact/constant";
import MailIcon from "@/components/ui/MainIcon";
import LinkedInIcon from "@/components/ui/LinkedInIcon";
import PinIcon from "@/components/ui/PinIcon";

const MyContact = () => {
    return (
        <div className="flex animate-fade-up flex-col gap-[18px] min-[820px]:flex-row min-[820px]:items-stretch">
            <div
                className="flex flex-col overflow-hidden rounded-xl border border-border bg-[#1e1e1e] shadow-[0_24px_54px_-30px_rgba(0,0,0,0.8)] min-[820px]:flex-[1.35]">
                <div
                    className="flex h-[46px] items-center justify-between gap-2 border-b border-black/40 bg-[#2b2b2b] px-2.5">
                    <div className="flex items-center gap-2">
                        <button type="button" aria-label="Open"
                                className="flex h-7 w-[30px] items-center justify-center rounded-[7px] bg-[#3a3a3a] text-[#dcdcdc] transition-colors hover:bg-[#484848]">
                            <svg width="16" height="16" viewBox="0 0 16 16">
                                <path d="M2 4.5h4l1.2 1.5H14v6H2z" fill="none" stroke="currentColor" strokeWidth="1.2"
                                      strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <button type="button" aria-label="Save"
                                className="flex h-7 w-[30px] items-center justify-center rounded-[7px] bg-[#3a3a3a] text-[#dcdcdc] transition-colors hover:bg-[#484848]">
                            <svg width="16" height="16" viewBox="0 0 16 16">
                                <path d="M3 2.5h8l2 2v9H3z" fill="none" stroke="currentColor" strokeWidth="1.2"
                                      strokeLinejoin="round"/>
                                <rect x="5" y="9" width="6" height="3.5" fill="currentColor" opacity="0.7"/>
                            </svg>
                        </button>
                    </div>

                    <span className="flex-1 text-center font-mono text-[13px] text-[#cfcfcf]">
                        <span className="text-primary">●</span> contact.md
                    </span>

                    <div className="flex items-center gap-2">
                        <button type="button" aria-label="Minimize"
                                className="flex h-6 w-6 items-center justify-center rounded-full bg-[#3a3a3a] text-[#cfcfcf] transition-colors hover:bg-[#484848]">
                            <svg width="10" height="10" viewBox="0 0 12 12">
                                <line x1="2.5" y1="6" x2="9.5" y2="6" stroke="currentColor" strokeWidth="1.4"
                                      strokeLinecap="round"/>
                            </svg>
                        </button>
                        <button type="button" aria-label="Maximize"
                                className="flex h-6 w-6 items-center justify-center rounded-full bg-[#3a3a3a] text-[#cfcfcf] transition-colors hover:bg-[#484848]">
                            <svg width="10" height="10" viewBox="0 0 12 12">
                                <rect x="2.5" y="2.5" width="7" height="7" rx="1" fill="none" stroke="currentColor"
                                      strokeWidth="1.3"/>
                            </svg>
                        </button>
                        <button type="button" aria-label="Close"
                                className="flex h-6 w-6 items-center justify-center rounded-full bg-[#3a3a3a] text-[#cfcfcf] transition-colors hover:bg-primary hover:text-white">
                            <svg width="10" height="10" viewBox="0 0 12 12">
                                <path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.4"
                                      strokeLinecap="round"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="flex flex-1 py-3.5 font-mono text-[13.5px] leading-[1.95]">
                    <div className="select-none pl-4 pr-3 text-right text-[#4d4d4d]">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                            <div key={n}>{n}</div>
                        ))}
                    </div>
                    <div className="pl-1.5 pr-[18px]">
                        <div className="font-bold text-primary"><span className="text-primary/60">#</span> Let’s talk
                        </div>
                        <div>&nbsp;</div>
                        <div className="text-foreground/85">I’m open to new automation and</div>
                        <div className="text-foreground/85">software projects — from the plant</div>
                        <div className="text-foreground/85">floor to full-stack.</div>
                        <div>&nbsp;</div>
                        <div className="text-foreground/85">Pick a channel and say hi.</div>
                        <div className="text-foreground/85">
                            I read everything.
                            <span
                                className="ml-0.5 inline-block h-[1.05em] w-px align-[-2px] bg-primary animate-[blink_1.1s_step-end_infinite]"/>
                        </div>
                    </div>
                </div>

                <div
                    className="flex h-[30px] items-center gap-4 border-t border-[#333] bg-[#191919] px-3.5 font-mono text-[11px] text-muted-foreground">
                    <span>Markdown</span>
                    <span>Ln 8, Col 19</span>
                    <span>UTF-8</span>
                </div>
            </div>

            <div
                className="flex flex-col rounded-xl border border-border bg-[#222222] p-[22px] shadow-[0_24px_54px_-30px_rgba(0,0,0,0.8)] min-[820px]:flex-1">
                <div className="mb-3.5 font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">Reach me</div>
                <div className="mb-5 flex items-center gap-2.5 text-[13.5px] text-foreground/85">
                    <span className="h-[9px] w-[9px] rounded-full bg-[#2fbf5f] shadow-[0_0_6px_rgba(47,191,95,0.6)]"/>
                    Available for new projects
                </div>

                <div className="flex flex-col gap-2">
                    <a href={`mailto:${EMAIL}`}
                       className="group flex items-center gap-3.5 rounded-[9px] border border-[#333] p-3 no-underline transition-colors hover:border-[#4a4a4a] hover:bg-white/[0.04]">
                        <span
                            className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-lg border border-border bg-[#171717] text-[#c9c9c9] transition-colors group-hover:text-primary">
                            <MailIcon/>
                        </span>
                        <span className="min-w-0">
                            <span
                                className="block font-mono text-[10px] uppercase tracking-[0.1em] text-white/40">Email</span>
                            <span className="block truncate text-[13.5px] text-white">{EMAIL}</span>
                        </span>
                    </a>

                    <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer"
                       className="group flex items-center gap-3.5 rounded-[9px] border border-[#333] p-3 no-underline transition-colors hover:border-[#4a4a4a] hover:bg-white/[0.04]">
                        <span
                            className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-lg border border-border bg-[#171717] text-[#c9c9c9] transition-colors group-hover:text-primary">
                            <LinkedInIcon/>
                        </span>
                        <span className="min-w-0">
                            <span
                                className="block font-mono text-[10px] uppercase tracking-[0.1em] text-white/40">LinkedIn</span>
                            <span className="block truncate text-[13.5px] text-white">{LINKEDIN_LABEL}</span>
                        </span>
                    </a>

                    <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer"
                       className="group flex items-center gap-3.5 rounded-[9px] border border-[#333] p-3 no-underline transition-colors hover:border-[#4a4a4a] hover:bg-white/[0.04]">
                        <span
                            className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-lg border border-border bg-[#171717] text-[#c9c9c9] transition-colors group-hover:text-primary">
                            <GithubIcon/>
                        </span>
                        <span className="min-w-0">
                            <span
                                className="block font-mono text-[10px] uppercase tracking-[0.1em] text-white/40">GitHub</span>
                            <span className="block truncate text-[13.5px] text-white">{GITHUB_LABEL}</span>
                        </span>
                    </a>

                    <div className="flex items-center gap-3.5 rounded-[9px] border border-[#333] p-3">
                        <span
                            className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-lg border border-border bg-[#171717] text-[#c9c9c9]">
                            <PinIcon/>
                        </span>
                        <span className="min-w-0">
                            <span
                                className="block font-mono text-[10px] uppercase tracking-[0.1em] text-white/40">Location</span>
                            <span className="block truncate text-[13.5px] text-white">{LOCATION}</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyContact;
