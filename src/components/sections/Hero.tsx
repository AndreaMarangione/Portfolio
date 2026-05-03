import {Button} from "@/components/ui/button";

const Hero = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            <div className="space-y-6">
                <p className="text-sm text-muted-foreground">
                    Hi, I am
                </p>
                <h2 className="text-2xl font-semibold">
                    Andrea
                </h2>
                <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
                    Full Stack Developer
                </h1>
                <p className="text-muted-foreground max-w-md">
                    Sviluppo applicazioni web moderne, scalabili e performanti con tecnologie
                    moderne.
                </p>
                <div className="flex gap-4">
                    <Button size="lg">
                        Contattami
                    </Button>
                    <Button variant="outline" size="lg">
                        Scarica CV
                    </Button>
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
