import {PidBenchProps} from "@/components/hero/type"
import {MOBILE_FLOW_PATH} from "@/components/hero/constant";

const PidBenchMobile = ({readings}: PidBenchProps) => (
    <svg
        viewBox="0 0 328 280"
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-full -translate-x-1/2
                   w-[calc(var(--fig-h)*328/228)] md:hidden"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
    >
        {/* ── linee di processo e apparecchiature ─────────────────── */}
        <g
            stroke="var(--primary)"
            strokeOpacity="0.44"
            strokeWidth="1.1"
            strokeLinejoin="round"
            fill="none"
        >
            {/* fuel gas entrance — connettore ruotato, punta in basso */}
            <path d="M50 6 H62 V48 L56 54 L50 48 Z"/>
            <path d="M56 54 V60"/>

            {/* XY-104 — solenoide, attuatore a sinistra */}
            <path d="M51 60 L56 70 L61 60 Z M51 80 L56 70 L61 80 Z"/>
            <path d="M56 70 H46"/>
            <rect x="38" y="66" width="8" height="8"/>
            <path d="M56 80 V96"/>

            {/* PCV-105 — membrana rivolta a destra */}
            <path d="M51 96 L56 106 L61 96 Z M51 116 L56 106 L61 116 Z"/>
            <path d="M56 106 H68"/>
            <path d="M68 98 V114 M68 98 A8 8 0 0 1 68 114"/>
            <path d="M56 116 V160"/>

            {/* curva 90° e FT-106 — Coriolis in linea, con flange */}
            <path d="M56 160 H86"/>
            <path d="M86 157 V163"/>
            <path d="M106 157 V163"/>
            <path d="M106 160 H286"/>
            <path d="M286 160 V126"/>

            {/* turbina a gas con generatore — scala desktop */}
            <circle cx="230" cy="118" r="8"/>
            <path d="M238 118 H248"/>
            <path d="M248 102 L278 110 L278 126 L248 134 Z"/>
            <circle cx="286" cy="118" r="6"/>
            <path d="M278 118 H280 M292 118 H294"/>
            <path d="M294 110 L324 102 L324 134 L294 126 Z"/>
        </g>

        {/* ── connessioni strumento → processo ─────────────────────── */}
        <g stroke="var(--primary)" strokeOpacity="0.4" strokeWidth="0.9" fill="none">
            <path d="M56 138 H32"/>
            <path d="M240 82 V118"/>
            <path d="M264 82 V106"/>
            <path d="M309 82 V106"/>
        </g>

        {/* ── freccia di direzione verso il combustore ─────────────── */}
        <g fill="var(--primary)" fillOpacity="0.5">
            <path d="M283 138 L286 132 L289 138 Z"/>
        </g>

        {/* ── bolle strumentali ────────────────────────────────────── */}
        <g stroke="var(--primary)" strokeOpacity="0.42" strokeWidth="1" fill="none">
            <circle cx="22" cy="138" r="10"/>
            <circle cx="92" cy="138" r="10"/>
            <path d="M82 138 H102"/>
            <circle cx="96" cy="160" r="10"/>
            <circle cx="240" cy="72" r="10"/>
            <circle cx="264" cy="72" r="10"/>
            <circle cx="309" cy="72" r="10"/>
        </g>
        <g fill="var(--primary)" fillOpacity="0.62" fontSize="7.5" textAnchor="middle">
            <text x="22" y="137">PT</text>
            <text x="22" y="144">105</text>
            <text x="92" y="137">PIC</text>
            <text x="92" y="144">105</text>
            <text x="96" y="159">FT</text>
            <text x="96" y="166">106</text>
            <text x="240" y="71">ST</text>
            <text x="240" y="78">201</text>
            <text x="264" y="71">VT</text>
            <text x="264" y="78">202</text>
            <text x="309" y="71">TE</text>
            <text x="309" y="78">203</text>
            <text x="230" y="121" fontSize="8">G</text>
            <text x="42" y="72.5" fontSize="6">S</text>
        </g>

        {/* ── segnali tra strumenti ────────────────────────────────── */}
        <g
            stroke="var(--primary)"
            strokeOpacity="0.38"
            strokeWidth="0.9"
            strokeDasharray="3 2.5"
            fill="none"
        >
            <path d="M32 138 H82"/>
            <path d="M92 128 V106 H76"/>
        </g>

        {/* ── sigle apparecchiature ────────────────────────────────── */}
        <g fill="var(--primary)" fillOpacity="0.58" fontSize="7.5">
            <text x="68" y="28">FUEL GAS</text>
            <text x="34" y="72.5" textAnchor="end">XY-104</text>
            <text x="46" y="94" textAnchor="end">PCV-105</text>
        </g>

        {/* ── letture di processo ──────────────────────────────────── */}
        <g fill="#F2A57E" fillOpacity="0.85" fontSize="8.5">
            <text x="46" y="111" textAnchor="end">{readings.valveOpening}</text>
            <text x="6" y="157">{readings.downstreamPressure}</text>
            <text x="96" y="183" textAnchor="middle">{readings.fuelFlow}</text>
            <text x="240" y="50" textAnchor="middle">{readings.speed}</text>
            <text x="264" y="34" textAnchor="middle">{readings.vibration}</text>
            <text x="309" y="50" textAnchor="middle">{readings.exhaustTemp}</text>
        </g>

        {/* ── flusso animato ───────────────────────────────────────── */}
        <path
            d={MOBILE_FLOW_PATH}
            fill="none"
            stroke="#FF9A63"
            strokeOpacity="0.75"
            strokeWidth="1.2"
            strokeDasharray="4 4"
            className="animate-pid-flow motion-reduce:animate-none"
        />
    </svg>
)

export default PidBenchMobile
