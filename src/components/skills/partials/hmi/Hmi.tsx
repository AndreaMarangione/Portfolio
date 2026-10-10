import HmiScrew from "@/components/skills/partials/hmi/HmiScrew";
import HmiLed from "@/components/skills/partials/hmi/HmiLed";
import {hmiFunctionKeys} from "@/components/skills/constant";
import {useEffect, useState} from "react";
import {useDictionary} from "@/i18n/DictionaryProvider";

const Hmi = () => {
    const [clock, setClock] = useState({time: "", date: ""});
    const {dict} = useDictionary();

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
        <div
            className="relative w-full min-w-0 max-w-280 rounded-[18px] border border-[#262626] bg-[#0d0d0d]
                p-4 pb-3.5 min-[1025px]:max-w-none min-[1025px]:flex-[1.55] min-[1025px]:order-2"
            style={{boxShadow: "0 32px 70px -30px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.05)"}}
        >
            <HmiScrew className="left-1.75 top-1.75"/>
            <HmiScrew className="right-1.75 top-1.75"/>
            <HmiScrew className="bottom-7.5 left-1.75"/>
            <HmiScrew className="bottom-7.5 right-1.75"/>

            <div
                className="overflow-hidden rounded-[9px] border border-[#2f2f2f] bg-background"
                style={{boxShadow: "inset 0 0 0 1px rgba(233,84,32,0.06), inset 0 1px 0 rgba(255,255,255,0.04)"}}
            >
                <div
                    className="flex h-12.5 items-center justify-between gap-3 border-b border-[#333] bg-background px-4">
                    <div className="flex min-w-0 items-center gap-2.75">
                        <span
                            className="rounded-[5px] border border-primary px-2 py-0.75 font-mono text-[11px] font-bold tracking-[0.16em] text-primary">
                                HMI
                        </span>
                        <span
                            className="hidden whitespace-nowrap text-[15px] font-bold uppercase tracking-[0.07em] text-primary min-[425px]:inline">
                                 Automation
                        </span>
                        <span
                            className="hidden whitespace-nowrap font-mono text-xs text-muted-foreground lg:max-[1025px]:inline min-[1380px]:inline">
                                / skills overview
                        </span>
                    </div>
                    <div
                        className="flex items-center gap-3.75 whitespace-nowrap font-mono text-[11.5px] text-muted-foreground">
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
                            className="rounded-[5px] border border-[#2c4a33] bg-[#16271a] px-2.5 py-0.75 tracking-[0.14em] text-[#46c46e]">
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
                    <span className="hidden text-dim sm:inline">MODE AUTO · SCAN 8 ms</span>
                </div>

                <div
                    className="px-4.5 py-4"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
                        backgroundSize: "30px 30px",
                    }}
                >
                    <p className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.12em] text-dim">
                        Modules — 3 groups
                    </p>
                    <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
                        {dict.skills.modules.map((mod) => (
                            <div key={mod.title}
                                 className="rounded-[9px] border border-border bg-card p-3.25">
                                <div
                                    className="mb-2.75 flex items-center justify-between border-b border-[#333] pb-2.25">
                                        <span
                                            className="font-mono text-[11.5px] uppercase tracking-widest text-white/70">
                                            {mod.title}
                                        </span>
                                    <span
                                        className="flex items-center gap-1.5 font-mono text-[10.5px] tracking-[0.08em] text-muted-foreground">
                                            <HmiLed/>OK
                                        </span>
                                </div>
                                {mod.rows.map((row) => (
                                    <div key={row.name}
                                         className="flex items-center gap-2.5 py-1.25 font-mono text-[13px] text-foreground/75">
                                        <HmiLed color="o"/>
                                        {row.name}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                <div
                    className="grid grid-cols-3 gap-2 border-t border-[#2e2e2e] bg-[#151515] p-3 sm:grid-cols-6">
                    {hmiFunctionKeys.map((fn) => (
                        <div
                            key={fn.n}
                            className={`rounded-md border p-2 text-center ${
                                fn.active ? "border-primary bg-[#251c17]" : "border-border bg-card"
                            }`}
                        >
                                <span
                                    className={`block font-mono text-[10px] tracking-[0.12em] ${fn.active ? "text-primary" : "text-dim"}`}>
                                    {fn.n}
                                </span>
                            <span
                                className={`mt-0.75 block font-mono text-[8px] min-[375px]:text-[11px] ${fn.active ? "text-[#f0d3c6]" : "text-white/70"}`}>
                                    {fn.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div
                className="flex items-center justify-between px-2 pb-0.5 pt-2.75 font-mono text-[10.5px] tracking-[0.08em] text-dim">
                <span className="flex items-center gap-1.75"><HmiLed/>PWR</span>
                <span>HMI PANEL</span>
            </div>
        </div>
    )
}

export default Hmi;
