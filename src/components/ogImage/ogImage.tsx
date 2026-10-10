import {AM_MONOGRAM_PATH, OG_CHIPS, OG_COLORS as C} from "@/components/ogImage/constant";
import {OgImageProps} from "@/components/ogImage/type";

const OgImage = ({name, role, domain}: OgImageProps) => (
    <div style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: "100%",
        position: "relative",
        background: C.background,
        fontFamily: "Poppins"
    }}>
        <svg width="1200" height="630" viewBox="0 0 1200 630" style={{position: "absolute", left: 0, top: 0}}>
            <defs>
                <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M30 0 H0 V30" fill="none" stroke="#fff" strokeOpacity="0.03"/>
                </pattern>
                <radialGradient id="glow" cx="210" cy="315" r="420" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor={C.primary} stopOpacity="0.22"/>
                    <stop offset="1" stopColor={C.primary} stopOpacity="0"/>
                </radialGradient>
            </defs>
            <rect width="1200" height="630" fill="url(#grid)"/>
            <rect width="1200" height="630" fill="url(#glow)"/>
        </svg>

        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 290,
            height: 290,
            marginLeft: 80,
            borderRadius: 64,
            border: `2px solid ${C.border}`,
            background: C.card,
            boxShadow: "0 30px 60px rgba(0,0,0,0.5)"
        }}>
            <svg width="236" height="236" viewBox="2 2 28 28">
                <path fill={C.primary} d={AM_MONOGRAM_PATH}/>
            </svg>
        </div>

        <div style={{display: "flex", flexDirection: "column", width: 700, marginLeft: 64}}>
            <div style={{display: "flex", fontSize: 20, lineHeight: 1.5}}>
                <span style={{color: C.promptUser}}>andrea@portfolio</span>
                <span style={{color: "rgba(255,255,255,0.45)"}}>:</span>
                <span style={{color: C.promptPath}}>~</span>
                <span style={{marginRight: 8, color: "rgba(255,255,255,0.45)"}}>$</span>
                <span style={{color: "rgba(245,245,245,0.85)"}}>cd ~/automation</span>
            </div>
            <div style={{
                marginTop: 8,
                fontSize: 66,
                fontWeight: 700,
                lineHeight: 1.15,
                color: C.foreground
            }}>{name}</div>
            <div style={{marginTop: 8, fontSize: 28, color: C.muted}}>{role}</div>
            <div style={{display: "flex", marginTop: 30}}>
                {OG_CHIPS.map((chip) => (
                    <div key={chip} style={{
                        display: "flex",
                        alignItems: "center",
                        marginRight: 12,
                        padding: "9px 18px",
                        borderRadius: 999,
                        border: `1px solid ${C.border}`,
                        background: C.card,
                        fontSize: 19,
                        color: "rgba(245,245,245,0.9)"
                    }}>
                        <span style={{width: 8, height: 8, marginRight: 10, borderRadius: 4, background: C.primary}}/>
                        {chip}
                    </div>
                ))}
            </div>
        </div>

        <div style={{
            display: "flex",
            position: "absolute",
            right: 56,
            bottom: 40,
            fontSize: 20,
            color: C.muted
        }}>{domain}</div>
    </div>
);

export default OgImage;
