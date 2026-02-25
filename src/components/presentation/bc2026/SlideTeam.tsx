import SlideContainer from "./SlideContainer";
import adrieleImg from "@/assets/adriele.png";
import periclesImg from "@/assets/pericles.png";
import luaImg from "@/assets/lua.png";

interface SlideTeamProps {
    isActive: boolean;
    transition?: "fade-zoom" | "slide-left" | "slide-right" | "slide-up" | "zoom-rotate" | "blur-scale";
}

const SlideTeam = ({ isActive, transition = "blur-scale" }: SlideTeamProps) => {
    const team = [
        { image: adrieleImg, name: "Adriele Ornellas", role: "UX Research", role2: "& Apresentação" },
        { image: periclesImg, name: "Péricles Oliveira", role: "Arquitetura", role2: "Técnica" },
        { image: luaImg, name: "Luã Mota", role: "Dados", role2: "& Software" },
    ];

    return (
        <SlideContainer isActive={isActive} transition={transition}>
            <div className="text-center space-y-10">
                {/* Header */}
                <div className="space-y-2">
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground">
                        O Time
                    </h2>
                    <p className="text-xl md:text-2xl text-muted-foreground">
                        Da periferia de Salvador pro Brasil
                    </p>
                </div>

                {/* Team members */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-10">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-4 p-6 rounded-3xl bg-card/50 border border-border/50 backdrop-blur-sm min-w-[180px] md:min-w-[220px]"
                        >
                            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-primary shadow-lg">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="text-center">
                                <p className="text-lg md:text-xl font-semibold text-foreground">{member.name}</p>
                                <p className="text-sm md:text-base text-muted-foreground">{member.role}</p>
                                <p className="text-sm md:text-base text-muted-foreground">{member.role2}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Quote */}
                <div className="mt-12 max-w-2xl mx-auto">
                    <p className="text-lg md:text-xl text-muted-foreground italic">
                        "A gente não estudou esse problema num paper - <span className="text-primary font-semibold">a gente viveu do lado dele.</span>"
                    </p>
                </div>
            </div>
        </SlideContainer>
    );
};

export default SlideTeam;
