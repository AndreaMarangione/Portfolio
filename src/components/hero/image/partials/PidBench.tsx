import {EQUIPMENT, FADE, FLOW_PATH, INSTRUMENTS, READINGS} from "@/components/hero/constant"

const PidBench = () => (
    <svg
        viewBox="0 0 680 280"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full hidden md:block"
        style={{maskImage: FADE, WebkitMaskImage: FADE}}
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
    >
        {/* ── linee di processo e apparecchiature ─────────────────── */}
        <g
            stroke="var(--primary)"
            strokeOpacity="0.44"
            strokeWidth="0.9"
            strokeLinejoin="round"
            fill="none"
        >
            {/* connettore di linea in ingresso */}
            <path d="M0 146 H66 L72 152 L66 158 H0 Z"/>
            <path d="M72 152 H100"/>

            {/* V-100 separatore con PSV-100 */}
            <rect x="100" y="126" width="22" height="52" rx="6"/>
            <path d="M111 178 V184"/>
            <path d="M111 126 V118"/>
            <path d="M105 113 L111 118 L105 123 Z M117 113 L111 118 L117 123 Z"/>
            <path d="M111 113 V106 L108 103 L114 100 L108 97 L114 94 L111 92"/>
            <path d="M122 152 H160"/>

            {/* E-101 preriscaldatore */}
            <rect x="160" y="140" width="34" height="24"/>
            <path d="M164 152 L169 146 L174 158 L179 146 L184 158 L189 152"/>
            <path d="M194 152 H235"/>

            {/* valvola di ritegno */}
            <path d="M235 148 V156"/>
            <path d="M249 148 V156"/>
            <path d="M235 148 L249 156"/>
            <path d="M249 156 L244.9 154.9 L246 153.1 Z" fill="var(--primary)" stroke="none"/>
            <path d="M249 152 H343"/>

            {/* XY-101 — valvola di blocco a solenoide */}
            <path d="M343 152 H354"/>
            <path d="M356 147 L362 152 L356 157 Z M368 147 L362 152 L368 157 Z"/>
            <path d="M362 152 V142"/>
            <rect x="358" y="134" width="8" height="8"/>

            {/* PCV-101 — riduzione di pressione */}
            <path d="M368 152 H398"/>
            <path d="M398 147 L406 152 L398 157 Z M414 147 L406 152 L414 157 Z"/>
            <path d="M406 152 V140 M398 140 H414 M398 140 A8 8 0 0 1 414 140"/>

            {/* FT-101 — Coriolis in linea, con flange */}
            <path d="M414 152 H571"/>
            <path d="M571 149 V155"/>
            <path d="M589 149 V155"/>
            <path d="M589 152 H630 V104"/>

            {/* area 2xx — GT-200 / area 3xx — generatore */}
            <circle cx="574" cy="98" r="8"/>
            <path d="M582 98 H592"/>
            <path d="M592 82 L622 90 L622 106 L592 114 Z"/>
            <circle cx="630" cy="98" r="6"/>
            <path d="M622 98 H624 M636 98 H638"/>
            <path d="M638 90 L668 82 L668 114 L638 106 Z"/>
        </g>

        {/* ── connessioni strumento → processo: continue, sottili ─── */}
        <g stroke="var(--primary)" strokeOpacity="0.4" strokeWidth="0.7" fill="none">
            <path d="M210 139 V152"/>
            <path d="M280 139 V152"/>
            <path d="M444 152 V139"/>
            <path d="M586 65 V98"/>
            <path d="M619 65 V89"/>
            <path d="M652 65 V86"/>
        </g>

        {/* ── frecce di direzione ──────────────────────────────────── */}
        <g fill="var(--primary)" fillOpacity="0.5">
            <path d="M300 149 L306 152 L300 155 Z"/>
            <path d="M627 134 L630 128 L633 134 Z"/>
        </g>

        {/* ── bolle strumentali ────────────────────────────────────── */}
        <g stroke="var(--primary)" strokeOpacity="0.42" strokeWidth="0.8" fill="none">
            {INSTRUMENTS.map(({tag, num, x, y, panel}) => (
                <g key={`${tag}-${num}`}>
                    <circle cx={x} cy={y} r="9"/>
                    {panel && <path d={`M${x - 9} ${y} H${x + 9}`}/>}
                </g>
            ))}
        </g>
        <g fill="var(--primary)" fillOpacity="0.62" fontSize="5.5" textAnchor="middle">
            {INSTRUMENTS.map(({tag, num, x, y}) => (
                <g key={`${tag}-${num}-label`}>
                    <text x={x} y={y - 1}>{tag}</text>
                    <text x={x} y={y + 5}>{num}</text>
                </g>
            ))}
            <text x="574" y="100.5" fontSize="7">G</text>
            <text x="362" y="140" fontSize="5">S</text>
        </g>

        {/* ── segnali tra strumenti: tratteggiati ──────────────────── */}
        <g
            stroke="var(--primary)"
            strokeOpacity="0.38"
            strokeWidth="0.7"
            strokeDasharray="2.5 2"
            fill="none"
        >
            <path d="M415 104 H426 V130 H435"/>
            <path d="M406 113 V132"/>
        </g>

        {/* ── sigle apparecchiature ────────────────────────────────── */}
        <g fill="var(--primary)" fillOpacity="0.58" fontSize="6">
            {EQUIPMENT.map(({x, y, text, anchor}) => (
                <text key={`${x}-${y}`} x={x} y={y} textAnchor={anchor ?? "start"}>
                    {text}
                </text>
            ))}
        </g>

        {/* ── letture di processo ──────────────────────────────────── */}
        <g fill="#F2A57E" fillOpacity="0.85" fontSize="5.5" textAnchor="middle">
            {READINGS.map(({x, y, text}) => (
                <text key={`${x}-${y}`} x={x} y={y}>{text}</text>
            ))}
        </g>

        {/* ── flusso animato ───────────────────────────────────────── */}
        <path
            d={FLOW_PATH}
            fill="none"
            stroke="#FF9A63"
            strokeOpacity="0.75"
            strokeWidth="1"
            strokeDasharray="3 5"
            className="animate-pid-flow motion-reduce:animate-none"
        />
    </svg>
)

export default PidBench
