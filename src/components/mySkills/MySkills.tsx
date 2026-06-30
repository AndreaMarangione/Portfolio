"use client";

import {useEffect, useState, Fragment} from "react";
import HmiScrew from "@/components/mySkills/partials/HmiScrew";
import HmiLed from "@/components/mySkills/partials/HmiLed";
import {automationModules, hmiFunctionKeys, webData, webSkills} from "@/components/mySkills/constant";
import TerminalWinCtrl from "@/components/mySkills/partials/TerminalWinCtrl";
import TerminalPrompt from "@/components/mySkills/partials/TerminalPrompt";

const MySkills = () => {
    const [clock, setClock] = useState({time: "", date: ""});

    useEffect(() => {
        const pad = (n: number) => String(n).padStart(2, "0");
        const update = () => {
            const d = new Date();
            setClock({
                time: `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`,
                date: `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`,
            });
        };
        update();
        const id = setInterval(update, 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <div className="flex animate-fade-up flex-col items-center gap-9 md:gap-10">
            <div
                className="relative w-full max-w-[1120px] rounded-[18px] border border-[#262626] bg-[#0d0d0d] p-4 pb-3.5"
                style={{boxShadow: "0 32px 70px -30px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.05)"}}
            >
                <HmiScrew className="left-[7px] top-[7px]"/>
                <HmiScrew className="right-[7px] top-[7px]"/>
                <HmiScrew className="bottom-[30px] left-[7px]"/>
                <HmiScrew className="bottom-[30px] right-[7px]"/>

                <div
                    className="overflow-hidden rounded-[9px] border border-[#2f2f2f] bg-background"
                    style={{boxShadow: "inset 0 0 0 1px rgba(233,84,32,0.06), inset 0 1px 0 rgba(255,255,255,0.04)"}}
                >
                    <div
                        className="flex h-[50px] items-center justify-between gap-3 border-b border-[#333] bg-[#202020] px-4">
                        <div className="flex min-w-0 items-center gap-[11px]">
                            <span
                                className="rounded-[5px] border border-primary px-2 py-[3px] font-mono text-[11px] font-bold tracking-[0.16em] text-primary">
                                HMI
                            </span>
                            <span
                                className="whitespace-nowrap text-[15px] font-bold uppercase tracking-[0.07em] text-primary">
                                Automation
                            </span>
                            <span
                                className="hidden whitespace-nowrap font-mono text-xs text-muted-foreground sm:inline">
                                / skills overview
                            </span>
                            <span className="hidden font-mono text-[11px] text-white/40 sm:inline">SCR_01</span>
                        </div>
                        <div
                            className="flex items-center gap-[15px] whitespace-nowrap font-mono text-[11.5px] text-muted-foreground">
                            <span className="hidden items-center gap-1.5 md:flex">
                                <HmiLed/><span className="text-[#46c46e]">PLC ONLINE</span>
                            </span>
                            <span className="hidden md:inline">USER <span
                                className="text-foreground/85">A.MARANGIONE</span></span>
                            <span>
                                <span className="text-foreground/85">{clock.time}</span>{" "}
                                <span className="hidden sm:inline">{clock.date}</span>
                            </span>
                            <span
                                className="rounded-[5px] border border-[#2c4a33] bg-[#16271a] px-2.5 py-[3px] tracking-[0.14em] text-[#46c46e]">
                                RUN
                            </span>
                        </div>
                    </div>

                    <div
                        className="flex h-8 items-center justify-between border-b border-[#2b2b2b] bg-[#1c1c1c] px-4 font-mono text-[11.5px]">
                        <span className="flex items-center gap-2">
                            <HmiLed pulse/>
                            <span><span className="text-foreground/80">RUNNING</span> <span
                                className="text-muted-foreground">— no active alarms</span></span>
                        </span>
                        <span className="hidden text-white/40 sm:inline">MODE AUTO · SCAN 8 ms</span>
                    </div>

                    <div
                        className="px-[18px] py-4"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
                            backgroundSize: "30px 30px",
                        }}
                    >
                        <p className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.12em] text-white/40">
                            Modules — 3 groups · 10 signals
                        </p>
                        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
                            {automationModules.map((mod) => (
                                <div key={mod.title} className="rounded-[9px] border border-border bg-card p-[13px]">
                                    <div
                                        className="mb-[11px] flex items-center justify-between border-b border-[#333] pb-[9px]">
                                        <span
                                            className="font-mono text-[11.5px] uppercase tracking-[0.1em] text-white/70">
                                            {mod.title}
                                        </span>
                                        <span
                                            className="flex items-center gap-1.5 font-mono text-[10.5px] tracking-[0.08em] text-muted-foreground">
                                            <HmiLed/>OK
                                        </span>
                                    </div>
                                    {mod.rows.map((row) => (
                                        <div
                                            key={row.name}
                                            className={`flex items-center gap-2.5 py-[5px] font-mono text-[13px] ${
                                                row.core ? "text-foreground/95" : "text-foreground/75"
                                            }`}
                                        >
                                            <HmiLed color={row.core ? "o" : "g"}/>
                                            {row.name}
                                            {row.core && (
                                                <span
                                                    className="ml-auto text-[9.5px] tracking-[0.1em] text-primary/90">CORE</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 border-t border-[#2e2e2e] bg-[#151515] p-3 sm:grid-cols-6">
                        {hmiFunctionKeys.map((fn) => (
                            <div
                                key={fn.n}
                                className={`rounded-md border p-2 text-center ${
                                    fn.active ? "border-primary bg-[#251c17]" : "border-border bg-card"
                                }`}
                            >
                                <span
                                    className={`block font-mono text-[10px] tracking-[0.12em] ${fn.active ? "text-primary" : "text-white/40"}`}>
                                    {fn.n}
                                </span>
                                <span
                                    className={`mt-[3px] block font-mono text-[11px] ${fn.active ? "text-[#f0d3c6]" : "text-white/70"}`}>
                                    {fn.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div
                    className="flex items-center justify-between px-2 pb-0.5 pt-[11px] font-mono text-[10.5px] tracking-[0.08em] text-white/40">
                    <span className="flex items-center gap-[7px]"><HmiLed/>PWR</span>
                    <span>HMI PANEL · SK-2400</span>
                </div>
            </div>

            <div
                className="w-full max-w-[880px] overflow-hidden rounded-xl border border-border bg-background"
                style={{boxShadow: "0 28px 60px -28px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.04)"}}
            >
                <div
                    className="flex h-[46px] items-center justify-between gap-2 border-b border-black/30 bg-card px-2.5">
                    <span className="w-[90px]"/>
                    <span className="flex-1 text-center font-mono text-[13px] text-foreground/80">andrea@portfolio: ~/web</span>
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

                <div className="bg-[#300a24] px-[18px] py-4 font-mono text-[13.5px] leading-[1.75]">
                    <div className="whitespace-pre-wrap break-words text-foreground/85">
                        <TerminalPrompt/><span className="text-foreground/95">cat package.json</span>
                    </div>
                    <div className="whitespace-pre-wrap break-words text-[#6f6f6f]">{"{"}</div>
                    {webData.map((m) => (
                        <div key={m.key} className="whitespace-pre-wrap break-words">
                            {"  "}
                            <span className="text-primary">{`"${m.key}"`}</span>
                            <span className="text-[#6f6f6f]">{": "}</span>
                            <span className="text-[#a5cf7e]">{`"${m.value}"`}</span>
                            <span className="text-[#6f6f6f]">,</span>
                        </div>
                    ))}
                    {webSkills.map((g, gi) => (
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
                            <span className="text-[#6f6f6f]">{gi < webSkills.length - 1 ? "]," : "]"}</span>
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
        </div>
    );
};

export default MySkills;
