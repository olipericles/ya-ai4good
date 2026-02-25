import SlideContainer, { type SlideMode } from "./SlideContainer";
import { Linkedin } from "lucide-react";
import adrielePhoto from "@/assets/adriele.png";
import periclesPhoto from "@/assets/pericles.png";
import luaPhoto from "@/assets/lua.png";

interface SlideTeamProps {
    isActive: boolean;
    transition?: "fade-zoom" | "slide-left" | "slide-right" | "slide-up" | "zoom-rotate" | "blur-scale";
    mode?: SlideMode;
}

const SlideTeam = ({ isActive, transition = "blur-scale", mode }: SlideTeamProps) => {
    const team = [
        {
            name: "Péricles Oliveira",
            role: "Estrategista de IA e Negócios",
            linkedin: "https://www.linkedin.com/in/olipericles/",
            photo: periclesPhoto,
            delay: "delay-100",
            gradient: "from-secondary to-secondary/60",
        },
        {
            name: "Adriele Ornellas",
            role: "Especialista em Pessoas e Comunidades",
            linkedin: "https://www.linkedin.com/in/adrieleornellas/",
            photo: adrielePhoto,
            delay: "delay-300",
            gradient: "from-primary to-primary/60",
        },
        {
            name: "Luã Mota",
            role: "Arquiteto de Software",
            linkedin: "https://www.linkedin.com/in/luaamota/",
            photo: luaPhoto,
            delay: "delay-500",
            gradient: "from-accent to-accent/60",
        },
    ];

    return (
        <SlideContainer isActive={isActive} transition={transition} mode={mode}>
            <div className="space-y-6 sm:space-y-12">
                {/* Title */}
                <div className={`text-center space-y-2 ${isActive ? 'animate-fade-up' : 'opacity-0'}`}>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold">
                        Da <span className="text-gradient">periferia de Salvador</span> para o mundo
                    </h2>
                    <p className="text-base sm:text-xl md:text-2xl text-foreground/60">
                        Quem constrói a Yá conhece a realidade de perto
                    </p>
                </div>

                {/* Team cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className={`group relative ${isActive ? `animate-scale-in ${member.delay}` : 'opacity-0'}`}
                        >
                            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl px-3 sm:px-5 md:px-6 py-5 sm:py-6 md:py-8 flex flex-col items-center group hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
                                {/* Gradient top bar */}
                                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${member.gradient}`} />

                                {/* Avatar with photo */}
                                <div className="w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full mx-auto mb-4 sm:mb-6 overflow-hidden ring-4 ring-offset-2 ring-offset-background ring-primary/20">
                                    <img
                                        src={member.photo}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Name and role */}
                                <h3 className="text-lg sm:text-2xl font-bold group-hover:text-primary transition-colors">{member.name}</h3>
                                <p className="text-sm sm:text-lg text-foreground/60 mb-3 sm:mb-4">{member.role}</p>

                                {/* LinkedIn button */}
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2]/20 transition-colors"
                                >
                                    <Linkedin className="w-6 h-6" />
                                    <span className="text-base sm:text-xl font-bold">LinkedIn</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Quote */}
                <p className={`text-center max-w-4xl mx-auto text-xl sm:text-2xl md:text-3xl text-foreground/70 italic font-medium ${isActive ? 'animate-fade-up delay-700' : 'opacity-0'}`}>
                    "A gente não estudou esse problema num paper — a gente viveu do lado dele."
                </p>
            </div>
        </SlideContainer>
    );
};

export default SlideTeam;
