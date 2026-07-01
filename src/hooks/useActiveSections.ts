import {useEffect, useState} from "react";

const useActiveSection = (ids: string[], offset: number = 0): string => {
    const [activeId, setActiveId] = useState<string>(ids[0] ?? "");
    const key: string = ids.join("|");

    useEffect(() => {
        const list: Array<string> = key ? key.split("|") : [];
        if (list.length === 0) return;

        let ticking: boolean = false;

        const compute = () => {
            let current: string = list[0];

            for (const id of list) {
                const el = document.getElementById(id);
                if (!el) continue;
                if (el.getBoundingClientRect().top <= offset) current = id;
            }

            setActiveId(current);
            ticking = false;
        };

        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(compute);
        };

        compute();
        window.addEventListener("scroll", onScroll, {passive: true});
        window.addEventListener("resize", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, [key, offset]);

    return activeId;
};

export default useActiveSection;
