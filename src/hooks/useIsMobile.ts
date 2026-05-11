"use client";

import {useEffect, useState} from "react";

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 767px)");

        const update = () => {
            setIsMobile(mediaQuery.matches);
        };

        update();
        mediaQuery.addEventListener("change", update);

        return () => {
            mediaQuery.removeEventListener("change", update);
        };
    }, []);

    return isMobile;
};

export default useIsMobile;
