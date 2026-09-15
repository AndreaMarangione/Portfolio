import {PidBenchProps} from "@/components/hero/type"
import {MOBILE_FLOW_PATH} from "@/components/hero/constant";

const PidBenchMobile = ({readings}: PidBenchProps) => (
    <svg
        viewBox="0 0 240 280"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full md:hidden"
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
            <path d="M26 6 H38 V48 L32 54 L26 48 Z"/>
            <path d="M32 54 V60"/>

            {/* XY-104 — solenoide, corpo verticale */}
            <path d="M27 60 L32 70 L37 60 Z M27 80 L32 70 L37 80 Z"/>
            <path d="M32 70 H42"/>
            <rect x="42" y="66" width="8" height="8"/>
            <path d="M32 80 V96"/>

            {/* PCV-105 — attuatore a membrana rivolto a destra */}
            <path d="M27 96 L32 106 L37 96 Z M27 116 L32 106 L37 116 Z"/>
            <path d="M32 106 H44"/>
            <path d="M44 98 V114 M44 98 A8 8 0 0 1 44 114"/>
            <path d="M32 116 V162"/>

            {/* curva 90° e FT-106 — Coriolis in linea, con flange */}
            <path d="M32 162 H49"/>
            <path d="M49 159 V165"/>
            <path d="M67 159 V165"/>
            <path d="M67 162 H214"/>
            <path d="M214 162 V125"/>

            {/* turbina a gas con generatore */}
            <circle cx="177.3" cy="119" r="5.3"/>
            <path d="M182.6 119 H189.2"/>
            <path d="M189.2 108.4 L209 113.7 L209 124.3 L189.2 129.6 Z"/>
            <circle cx="214.2" cy="119" r="4"/>
            <path d="M209 119 H210.3 M218 119 H219.1"/>
            <path d="M219.1 113.7 L239.3 108.4 L239.3 129.6 L219.1 124.3 Z"/>
        </g>

        {/* ── connessioni strumento → processo ─────────────────────── */}
        <g stroke="var(--primary)" strokeOpacity="0.4" strokeWidth="0.9" fill="none">
            <path d="M32 130 H49"/>
            <path d="M183 91 V119"/>
            <path d="M203 91 V112"/>
            <path d="M227 91 V112"/>
        </g>

        {/* ── freccia di direzione verso il combustore ─────────────── */}
        <g fill="var(--primary)" fillOpacity="0.5">
            <path d="M211.5 137 L214 132 L216.5 137 Z"/>
        </g>

        {/* ── bolle strumentali ────────────────────────────────────── */}
        <g stroke="var(--primary)" strokeOpacity="0.42" strokeWidth="1" fill="none">
            <circle cx="58" cy="82" r="9"/>
            <path d="M49 82 H67"/>
            <circle cx="58" cy="130" r="9"/>
            <circle cx="58" cy="162" r="9"/>
            <circle cx="183" cy="82" r="9"/>
            <circle cx="203" cy="82" r="9"/>
            <circle cx="227" cy="82" r="9"/>
        </g>
        <g fill="var(--primary)" fillOpacity="0.62" fontSize="7" textAnchor="middle">
            <text x="58" y="81">PIC</text>
            <text x="58" y="88">105</text>
            <text x="58" y="129">PT</text>
            <text x="58" y="136">105</text>
            <text x="58" y="161">FT</text>
            <text x="58" y="168">106</text>
            <text x="183" y="81">ST</text>
            <text x="183" y="88">201</text>
            <text x="203" y="81">VT</text>
            <text x="203" y="88">202</text>
            <text x="227" y="81">TE</text>
            <text x="227" y="88">203</text>
            <text x="177.3" y="121.5" fontSize="6">G</text>
            <text x="46" y="72.5" fontSize="6">S</text>
        </g>

        {/* ── segnali tra strumenti ────────────────────────────────── */}
        <g
            stroke="var(--primary)"
            strokeOpacity="0.38"
            strokeWidth="0.9"
            strokeDasharray="3 2.5"
            fill="none"
        >
            <path d="M58 121 V91"/>
            <path d="M49 82 H44 V98"/>
        </g>

        {/* ── sigle apparecchiature ────────────────────────────────── */}
        <g fill="var(--primary)" fillOpacity="0.58" fontSize="7">
            <text x="44" y="30">FUEL GAS</text>
            <text x="2" y="58">XY-104</text>
            <text x="2" y="130">PCV-105</text>
        </g>

        {/* ── letture di processo ──────────────────────────────────── */}
        <g fill="#F2A57E" fillOpacity="0.85" fontSize="8">
            <text x="16" y="142" textAnchor="middle">{readings.valveOpening}</text>
            <text x="68" y="148" textAnchor="end">{readings.downstreamPressure}</text>
            <text x="28" y="182" textAnchor="middle">{readings.fuelFlow}</text>
            <text x="183" y="44" textAnchor="middle" fontSize="7">{readings.speed}</text>
            <text x="203" y="60" textAnchor="middle" fontSize="7">{readings.vibration}</text>
            <text x="225" y="44" textAnchor="middle" fontSize="7">{readings.exhaustTemp}</text>
        </g>

        {/* ── flusso animato ───────────────────────────────────────── */}
        <path
            d={MOBILE_FLOW_PATH}
            fill="none"
            stroke="#FF9A63"
            strokeOpacity="0.75"
            strokeWidth="1.2"
            strokeDasharray="4 6"
            className="animate-pid-flow motion-reduce:animate-none"
        />
    </svg>
)

export default PidBenchMobile
