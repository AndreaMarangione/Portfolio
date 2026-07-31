"use client";

import {useEffect, useRef} from "react";

const CELL_W = 14;
const CELL_H = 20;
const FONT = "12px 'Ubuntu Mono', ui-monospace, monospace";
const DIGIT_COLOR = "#1E1E1E";
const GLOW_SIZE = 150;

const BitBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);
    const posRef = useRef({x: 0, y: 0});
    const frameRef = useRef(0);
    const queuedRef = useRef(false);

    useEffect(() => {
        if (!window.matchMedia("(pointer: fine)").matches) return;

        const canvas = canvasRef.current;
        const glow = glowRef.current;

        if (!canvas || !glow) return;

        const ctx = canvas.getContext("2d");

        if (!ctx) return;

        const draw = () => {
            const dpr: number = window.devicePixelRatio || 1;
            const w: number = window.innerWidth;
            const h: number = window.innerHeight;

            canvas.width = Math.floor(w * dpr);
            canvas.height = Math.floor(h * dpr);
            canvas.style.width = `${w}px`;
            canvas.style.height = `${h}px`;

            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.clearRect(0, 0, w, h);
            ctx.font = FONT;
            ctx.fillStyle = DIGIT_COLOR;
            ctx.textBaseline = "top";

            for (let y = 0; y < h; y += CELL_H) {
                for (let x = 0; x < w; x += CELL_W) {
                    ctx.fillText(Math.random() < 0.5 ? "0" : "1", x, y);
                }
            }
        };

        const applyPosition = () => {
            queuedRef.current = false;

            const {x, y} = posRef.current;

            glow.style.transform =
                `translate3d(${x - GLOW_SIZE / 2}px, ${y - GLOW_SIZE / 2}px, 0)`;
            glow.style.opacity = "1";
        };

        const schedule = () => {
            if (queuedRef.current) return;

            queuedRef.current = true;
            frameRef.current = requestAnimationFrame(applyPosition);
        };

        const onMouseMove = (e: MouseEvent) => {
            posRef.current = {x: e.clientX, y: e.clientY};
            schedule();
        };

        const onMouseLeave = () => {
            glow.style.opacity = "0";
        };

        let resizeQueued = false;

        const onResize = () => {
            if (resizeQueued) return;

            resizeQueued = true;
            requestAnimationFrame(() => {
                resizeQueued = false;
                draw();
            });
        };

        draw();

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("resize", onResize);
        document.documentElement.addEventListener("mouseleave", onMouseLeave);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("resize", onResize);
            document.documentElement.removeEventListener("mouseleave", onMouseLeave);
            cancelAnimationFrame(frameRef.current);
        };
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
            <div
                ref={glowRef}
                className="absolute left-0 top-0 opacity-0 transition-opacity duration-500"
                style={{
                    width: GLOW_SIZE,
                    height: GLOW_SIZE,
                    background:
                        "radial-gradient(circle closest-side, rgba(233,84,32,0.9) 0%, rgba(233,84,32,0.75) 45%, rgba(233,84,32,0) 100%)",
                }}
            />
            <canvas ref={canvasRef} className="absolute inset-0"/>
        </div>
    );
};

export default BitBackground;
