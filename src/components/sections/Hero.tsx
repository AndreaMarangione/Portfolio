"use client"

import usePageLoad from "@/hooks/usePageLoad";

const Hero = () => {
    const {isLoaded} = usePageLoad()

    return (
        <div className="px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-5 md:space-y-6">
                <div className="overflow-hidden">
                    <p className={`text-sm text-muted-foreground whitespace-nowrap w-fit overflow-hidden 
                    ${isLoaded ? "animate-typing" : ""}`}
                    >
                        Andrea Marangione
                    </p>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary leading-[1.18] max-w-[650px]">
                    <span className="block overflow-hidden">
                        <span className={`block ${isLoaded ? "animate-fade-up" : ""}`}>
                            Automate anything
                        </span>
                    </span>
                    <span className="block overflow-hidden">
                        <span className={`block ${isLoaded ? "animate-fade-up animate-fade-up-delay-motto" : ""}`}>
                            find the right solution
                        </span>
                    </span>
                </h1>
                <p className={`text-muted-foreground max-w-md leading-relaxed 
                ${isLoaded ? "animate-fade-up animate-fade-up-delay-description" : ""}`}
                >
                    I design and develop industrial automation software,
                    from initial concept to full system commissioning.
                    I build reliable solutions for both small and large-scale plants,
                    focused on performance, efficiency, and real-world impact.
                </p>
                <div
                    className={`mt-6 grid grid-cols-3 w-full max-w-md rounded-xl bg-muted border border-border overflow-hidden 
                    ${isLoaded ? "animate-fade-up animate-fade-up-delay-stats" : ""}`}
                >
                    <div className="py-5 text-center">
                        <p className="text-primary font-semibold text-xl">
                            10+
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                            Experience
                        </p>
                    </div>
                    <div className="py-5 text-center border-l border-border">
                        <p className="text-primary font-semibold text-xl">
                            20+
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                            Projects
                        </p>
                    </div>
                    <div className="py-5 text-center border-l border-border">
                        <p className="text-primary font-semibold text-xl">
                            80+
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                            Customers
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground">IMG</span>
                </div>
            </div>
        </div>
    );
};

export default Hero;
