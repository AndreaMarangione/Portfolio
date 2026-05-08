const routes = [
    "Florence → Tongxiang",
    "Tongxiang → Balikesir",
    "Balikesir → Fuzhou",
    "Fuzhou → Florence",
    "Florence → Houston",
];

const MobileRoutes = () => {
    return (
        <div className="px-6 py-10">
            <div className="space-y-5">

                {routes.map((route) => (
                    <div
                        key={route}
                        className="
                            flex
                            items-center
                            gap-4
                            border
                            border-border
                            rounded-xl
                            px-4
                            py-4
                            bg-card/40
                            backdrop-blur-sm
                        "
                    >
                        <div
                            className="
                                w-2.5
                                h-2.5
                                rounded-full
                                bg-primary
                                shrink-0
                            "
                        />

                        <div
                            className="
                                flex
                                items-center
                                gap-2
                                text-sm
                                text-foreground
                                font-medium
                            "
                        >
                            <span>{route}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MobileRoutes;
