type PlanePosition = {
    x: number;
    y: number;
    angle: number;
};

type AnimateRouteParams = {
    timestamp: number;
    start: number | null;
    duration: number;
    length: number;
    path: SVGPathElement;
    currentRoutePath: string;
    routesLength: number;
    setVisibleLength: React.Dispatch<React.SetStateAction<number>>;
    setPlanePosition: React.Dispatch<React.SetStateAction<PlanePosition>>;
    setCompletedRoutes: React.Dispatch<React.SetStateAction<{ path: string; id: number; }[]>>;
    setRouteIndex: React.Dispatch<React.SetStateAction<number>>;
    requestNextFrame: () => void;
};

export const animateRoute =
    ({
         timestamp,
         start,
         duration,
         length,
         path,
         currentRoutePath,
         routesLength,
         setVisibleLength,
         setPlanePosition,
         setCompletedRoutes,
         setRouteIndex,
         requestNextFrame,
     }: AnimateRouteParams): number => {
        if (!start) {
            start = timestamp;
        }

        const rawProgress: number = Math.min((timestamp - start) / duration, 1);
        const progress: number = 1 - Math.pow(1 - rawProgress, 1.7);
        const currentVisibleLength: number = length * progress;

        setVisibleLength(currentVisibleLength);

        const currentPoint = path.getPointAtLength(currentVisibleLength);

        setPlanePosition((prev) => {
            let angle: number = prev.angle;

            if (progress < 1) {
                const nextPoint = path.getPointAtLength(currentVisibleLength + 0.01);
                angle = Math.atan2(nextPoint.y - currentPoint.y, nextPoint.x - currentPoint.x) * (180 / Math.PI);
            }

            return {
                x: currentPoint.x,
                y: currentPoint.y,
                angle,
            };
        });

        if (progress < 1) {
            requestNextFrame();
        } else {
            setCompletedRoutes((prev) => [
                ...prev,
                {
                    path: currentRoutePath,
                    id: Date.now(),
                },
            ].slice(-6));

            setTimeout(() => {
                setRouteIndex((prev) =>
                    (prev + 1) % routesLength
                );
            }, 0);
        }
        return start;
    };
