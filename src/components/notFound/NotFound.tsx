"use client";

import {useState} from "react";
import Link from "next/link";
import {useDictionary} from "@/i18n/DictionaryProvider";
import HmiLed from "@/components/skills/partials/hmi/HmiLed";
import LadderNetwork from "@/components/notFound/partials/LadderNetwork";
import LadderWire from "@/components/notFound/partials/LadderWire";
import LadderContact from "@/components/notFound/partials/LadderContact";
import LadderCoil from "@/components/notFound/partials/LadderCoil";
import LadderLabels from "@/components/notFound/partials/LadderLabels";
import {NotFoundProps} from "@/components/notFound/type";

const NotFound = ({pathname}: NotFoundProps) => {
    const {dict, lang} = useDictionary();
    const [armed, setArmed] = useState(false);
    const t = dict.notFound;
    const arm = () => setArmed(true);
    const disarm = () => setArmed(false);

    return (
        <div className="pt-16">
            <section
                className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-400 flex-col justify-center px-6 py-10 lg:px-12">
                <div className="mx-auto w-full max-w-220 animate-fade-up">
                    <div className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                        <h1 className="text-7xl font-bold leading-none text-primary sm:text-8xl">404</h1>
                        <div>
                            <p className="text-lg font-semibold sm:text-xl">{t.title}</p>
                            <p className="mt-1 font-mono text-xs text-muted-foreground sm:text-sm">
                                PAGE_FOUND = FALSE → ERR_404 = TRUE
                            </p>
                        </div>
                        <span
                            className="flex items-center gap-1.5 rounded-[5px] border border-[#2c4a33]
                            bg-[#16271a] px-2.5 py-1 font-mono text-[11px] tracking-[0.08em] text-[#46c46e] sm:ml-auto"
                        >
                            <HmiLed pulse/>ONLINE · Main [OB1]
                        </span>
                    </div>

                    <div className="space-y-6 rounded-xl border border-border bg-card/40 p-4 sm:p-6">
                        <LadderNetwork label={t.network} index={1} title={t.lookup} comment={pathname}>
                            <LadderWire on className="w-6 sm:w-16"/>
                            <LadderContact tag="PAGE_FOUND" address="%M0.0" closed={false}/>
                            <LadderWire on={false} className="flex-1"/>
                            <LadderCoil tag="RENDER_PAGE" address="%Q0.0" on={false}/>
                            <LadderWire on={false} className="w-6 sm:w-10"/>
                        </LadderNetwork>

                        <LadderNetwork label={t.network} index={2} title={t.fault}>
                            <LadderWire on className="w-6 sm:w-16"/>
                            <LadderContact tag="PAGE_FOUND" address="%M0.0" closed normallyClosed/>
                            <LadderWire on className="flex-1"/>
                            <LadderCoil tag="ERR_404" address="%Q0.4" on highlight/>
                            <LadderWire on className="w-6 sm:w-10"/>
                        </LadderNetwork>

                        <LadderNetwork label={t.network} index={3} title={t.recovery}>
                            <LadderWire on className="w-6 sm:w-16"/>
                            <LadderLabels tag="USER_CLICK" address="%I0.0">
                                <Link
                                    href={`/${lang}`}
                                    onMouseEnter={arm}
                                    onMouseLeave={disarm}
                                    onFocus={arm}
                                    onBlur={disarm}
                                    className="rounded-md border border-primary bg-[#251c17] px-3 py-1.5 font-mono
                                    text-xs text-[#f0d3c6] transition-colors hover:bg-primary hover:text-white"
                                >
                                    {t.goHome}
                                </Link>
                            </LadderLabels>
                            <LadderWire on={armed} className="flex-1"/>
                            <LadderCoil tag="GOTO_HOME" address="%Q1.0" on={armed} set/>
                            <LadderWire on={armed} className="w-6 sm:w-10"/>
                        </LadderNetwork>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NotFound;
