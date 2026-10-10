"use client";

import {useState} from "react";
import HmiLed from "@/components/skills/partials/hmi/HmiLed";
import LadderNetwork from "@/components/notFound/partials/LadderNetwork";
import LadderWire from "@/components/notFound/partials/LadderWire";
import LadderContact from "@/components/notFound/partials/LadderContact";
import LadderCoil from "@/components/notFound/partials/LadderCoil";
import LadderLabels from "@/components/notFound/partials/LadderLabels";
import {FaultProps} from "@/components/fault/type";

const BUTTON_CLASS = "cursor-pointer rounded-md border border-primary bg-[#251c17] px-3 py-1.5 font-mono text-xs text-[#f0d3c6] transition-colors hover:bg-primary hover:text-white";

const Fault = ({t, lang, onRetry}: FaultProps) => {
    const [retryArmed, setRetryArmed] = useState(false);
    const [homeArmed, setHomeArmed] = useState(false);

    return (
        <div className="pt-16">
            <section
                className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-400 flex-col justify-center px-6 py-10 lg:px-12">
                <div className="mx-auto w-full max-w-220 animate-fade-up">
                    <div className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                        <h1 className="text-7xl font-bold leading-none text-primary sm:text-8xl">FAULT</h1>
                        <div>
                            <p className="text-lg font-semibold sm:text-xl">{t.title}</p>
                            <p className="mt-1 font-mono text-xs text-muted-foreground sm:text-sm">
                                RUNTIME_OK = FALSE → CPU_STOP = TRUE
                            </p>
                        </div>
                        <span
                            className="flex items-center gap-1.5 rounded-[5px] border border-[#5a2626]
                            bg-[#2a1515] px-2.5 py-1 font-mono text-[11px] tracking-[0.08em] text-[#f26d6d] sm:ml-auto"
                        >
                            <HmiLed color="r" pulse/>STOP · SF · OB121
                        </span>
                    </div>

                    <div className="space-y-6 rounded-xl border border-border bg-card/40 p-4 sm:p-6">
                        <LadderNetwork label={t.network} index={1} title={t.runtime}>
                            <LadderWire on className="w-6 sm:w-16"/>
                            <LadderContact tag="RUNTIME_OK" address="%M0.1" closed={false}/>
                            <LadderWire on={false} className="flex-1"/>
                            <LadderCoil tag="RENDER_PAGE" address="%Q0.0" on={false}/>
                            <LadderWire on={false} className="w-6 sm:w-10"/>
                        </LadderNetwork>

                        <LadderNetwork label={t.network} index={2} title={t.fault}>
                            <LadderWire on className="w-6 sm:w-16"/>
                            <LadderContact tag="RUNTIME_OK" address="%M0.1" closed normallyClosed/>
                            <LadderWire on className="flex-1"/>
                            <LadderCoil tag="FAULT" address="%Q0.5" on set highlight/>
                            <LadderWire on className="w-6 sm:w-10"/>
                        </LadderNetwork>

                        <LadderNetwork label={t.network} index={3} title={t.reset}>
                            <LadderWire on className="w-6 sm:w-16"/>
                            <LadderLabels tag="USER_RETRY" address="%I0.1">
                                <button
                                    type="button"
                                    onClick={onRetry}
                                    onMouseEnter={() => setRetryArmed(true)}
                                    onMouseLeave={() => setRetryArmed(false)}
                                    onFocus={() => setRetryArmed(true)}
                                    onBlur={() => setRetryArmed(false)}
                                    className={BUTTON_CLASS}
                                >
                                    {t.retry}
                                </button>
                            </LadderLabels>
                            <LadderWire on={retryArmed} className="flex-1"/>
                            <LadderCoil tag="FAULT" address="%Q0.5" on={retryArmed} reset/>
                            <LadderWire on={retryArmed} className="w-6 sm:w-10"/>
                        </LadderNetwork>

                        <LadderNetwork label={t.network} index={4} title={t.recovery}>
                            <LadderWire on className="w-6 sm:w-16"/>
                            <LadderLabels tag="USER_CLICK" address="%I0.0">
                                <a
                                    href={`/${lang}`}
                                    onMouseEnter={() => setHomeArmed(true)}
                                    onMouseLeave={() => setHomeArmed(false)}
                                    onFocus={() => setHomeArmed(true)}
                                    onBlur={() => setHomeArmed(false)}
                                    className={BUTTON_CLASS}
                                >
                                    {t.goHome}
                                </a>
                            </LadderLabels>
                            <LadderWire on={homeArmed} className="flex-1"/>
                            <LadderCoil tag="GOTO_HOME" address="%Q1.0" on={homeArmed} set/>
                            <LadderWire on={homeArmed} className="w-6 sm:w-10"/>
                        </LadderNetwork>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Fault;
