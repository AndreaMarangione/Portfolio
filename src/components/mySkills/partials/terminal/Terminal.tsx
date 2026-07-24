import TerminalWinCtrl from "@/components/mySkills/partials/terminal/TerminalWinCtrl";
import TerminalPrompt from "@/components/mySkills/partials/terminal/TerminalPrompt";
import {terminalWebSkills, terminalWebData} from "@/components/mySkills/constant";
import {Fragment} from "react";

const Terminal = () => {
    return (
        <div
            className="flex w-full min-w-0 max-w-[880px] flex-col overflow-hidden rounded-xl border
            border-border bg-background min-[1025px]:max-w-none min-[1025px]:flex-1 min-[1025px]:order-3"
            style={{boxShadow: "0 28px 60px -28px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.04)"}}
        >
            <div
                className="flex h-[46px] shrink-0 items-center justify-between gap-2 border-b border-black/30 bg-card px-2.5">
                <span className="w-[90px]"/>
                <span
                    className="flex-1 text-center font-mono text-[13px] text-foreground/80">andrea@portfolio: ~/web</span>
                <div className="flex items-center gap-2">
                    <TerminalWinCtrl label="Minimize">
                        <svg width="11" height="11" viewBox="0 0 12 12">
                            <line x1="2.5" y1="6" x2="9.5" y2="6" stroke="currentColor" strokeWidth="1.4"
                                  strokeLinecap="round"/>
                        </svg>
                    </TerminalWinCtrl>
                    <TerminalWinCtrl label="Maximize">
                        <svg width="11" height="11" viewBox="0 0 12 12">
                            <rect x="2.5" y="2.5" width="7" height="7" rx="1" fill="none" stroke="currentColor"
                                  strokeWidth="1.3"/>
                        </svg>
                    </TerminalWinCtrl>
                    <TerminalWinCtrl label="Close" close>
                        <svg width="11" height="11" viewBox="0 0 12 12">
                            <path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.4"
                                  strokeLinecap="round"/>
                        </svg>
                    </TerminalWinCtrl>
                </div>
            </div>

            <div className="flex-1 bg-[#300a24] px-[18px] py-4 font-mono text-[13.5px] leading-[1.75]">
                <div className="whitespace-pre-wrap break-words text-foreground/85">
                    <TerminalPrompt/><span className="text-foreground/95">cat package.json</span>
                </div>
                <div className="whitespace-pre-wrap break-words text-[#6f6f6f]">{"{"}</div>
                {terminalWebData.map((m) => (
                    <div key={m.key} className="whitespace-pre-wrap break-words">
                        {"  "}
                        <span className="text-primary">{`"${m.key}"`}</span>
                        <span className="text-[#6f6f6f]">{": "}</span>
                        <span className="text-[#a5cf7e]">{`"${m.value}"`}</span>
                        <span className="text-[#6f6f6f]">,</span>
                    </div>
                ))}
                {terminalWebSkills.map((g, gi) => (
                    <div key={g.key} className="whitespace-pre-wrap break-words">
                        {"  "}
                        <span className="text-primary">{`"${g.key}"`}</span>
                        <span className="text-[#6f6f6f]">{": ["}</span>
                        {g.items.map((it, i) => (
                            <Fragment key={it}>
                                <span className="text-[#a5cf7e]">{`"${it}"`}</span>
                                {i < g.items.length - 1 && <span className="text-[#6f6f6f]">{", "}</span>}
                            </Fragment>
                        ))}
                        <span className="text-[#6f6f6f]">{gi < terminalWebSkills.length - 1 ? "]," : "]"}</span>
                    </div>
                ))}
                <div className="whitespace-pre-wrap break-words text-[#6f6f6f]">{"}"}</div>
                <div className="whitespace-pre-wrap break-words text-foreground/85">
                    <TerminalPrompt/>
                    <span
                        className="ml-0.5 inline-block h-[1.05em] w-2 align-[-2px] bg-primary animate-[blink_1.1s_step-end_infinite]"/>
                </div>
            </div>
        </div>
    )
}

export default Terminal;
