import {EMAIL, GITHUB_LABEL, GITHUB_URL, LINKEDIN_LABEL, LINKEDIN_URL, LOCATION} from "@/components/contacts/constant";
import MailIcon from "@/components/ui/icons/MailIcon";
import LinkedInIcon from "@/components/ui/icons/LinkedInIcon";
import GithubIcon from "@/components/ui/icons/GithubIcon";
import PinIcon from "@/components/ui/icons/PinIcon";

const ReachMe = () => {
    return (
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
    )
}

export default ReachMe
