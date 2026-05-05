const Hero = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-5 md:space-y-6">
                <p className="text-sm text-muted-foreground">
                    Andrea Marangione
                </p>
                <h1 className="text-5xl md:text-6xl font-bold text-primary leading-[1.05] max-w-[650px]">
                    <span className="block whitespace-nowrap">Automate anything,</span>
                    <span className="block">find the right solution</span>
                </h1>
                <p className="text-muted-foreground max-w-md leading-relaxed">
                    I design and develop industrial automation software,
                    from initial concept to full system commissioning.
                    I build reliable solutions for both small and large-scale plants,
                    focused on performance, efficiency, and real-world impact.
                </p>
                <div className="flex items-center gap-8 mt-6 p-6 rounded-xl bg-muted border border-border w-fit">
                    <div>
                        <p className="text-primary font-semibold text-lg">10+</p>
                        <p className="text-sm text-muted-foreground">Experience</p>
                    </div>
                    <div className="w-px h-10 bg-border"/>
                    <div>
                        <p className="text-primary font-semibold text-lg">20+</p>
                        <p className="text-sm text-muted-foreground">Projects</p>
                    </div>
                    <div className="w-px h-10 bg-border"/>
                    <div>
                        <p className="text-primary font-semibold text-lg">80+</p>
                        <p className="text-sm text-muted-foreground">Customers</p>
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
