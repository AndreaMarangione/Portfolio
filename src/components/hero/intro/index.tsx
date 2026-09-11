import usePageLoad from "@/hooks/usePageLoad";
import {useDictionary} from "@/i18n/DictionaryProvider";

const CAREER_START_YEAR = 2016

const Intro = () => {
    const {isLoaded} = usePageLoad()
    const {dict} = useDictionary()
    const experienceYears: number = new Date().getFullYear() - CAREER_START_YEAR;

    return (
        <div className="relative z-10 space-y-5 md:space-y-6">
            <div className="overflow-hidden">
                <p className={`text-sm text-muted-foreground whitespace-nowrap w-fit overflow-hidden 
                    ${isLoaded ? "animate-typing" : ""}`}
                >
                    {dict.hero.name}
                </p>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-[1.18] max-w-[650px]">
                    <span className="block overflow-hidden">
                        <span className={`block ${isLoaded ? "animate-fade-up" : ""}`}>
                            {dict.hero.titleLine1}
                        </span>
                    </span>
                <span className="block overflow-hidden">
                        <span className={`block ${isLoaded ? "animate-fade-up animate-fade-up-delay-motto" : ""}`}>
                            {dict.hero.titleLine2}
                        </span>
                    </span>
            </h1>
            <p className={`text-muted-foreground max-w-md leading-relaxed 
                ${isLoaded ? "animate-fade-up animate-fade-up-delay-description" : ""}`}
            >
                {dict.hero.description}
            </p>
            <div
                className={`mt-6 grid grid-cols-3 w-full max-w-md rounded-xl bg-muted border border-border overflow-hidden 
                    ${isLoaded ? "animate-fade-up animate-fade-up-delay-stats" : ""}`}
            >
                <div className="py-5 text-center">
                    <p className="text-primary font-semibold text-xl">
                        {experienceYears}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                        {dict.hero.statExperience}
                    </p>
                </div>
                <div className="py-5 text-center border-l border-border">
                    <p className="text-primary font-semibold text-xl">
                        40+
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                        {dict.hero.statProjects}
                    </p>
                </div>
                <div className="py-5 text-center border-l border-border">
                    <p className="text-primary font-semibold text-xl">
                        20+
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                        {dict.hero.statCustomers}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Intro
