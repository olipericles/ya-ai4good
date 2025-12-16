import SlideContainer from "../SlideContainer";
import { Linkedin } from "lucide-react";
import adrielePhoto from "@/assets/adriele.png";
import periclesPhoto from "@/assets/pericles.png";
import luaPhoto from "@/assets/lua.png";

type TransitionType = "fade-zoom" | "slide-left" | "slide-right" | "slide-up" | "zoom-rotate" | "blur-scale";

interface SlideTeamProps {
  isActive: boolean;
  transition?: TransitionType;
}

const SlideTeam = ({ isActive, transition }: SlideTeamProps) => {
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
    <SlideContainer isActive={isActive} transition={transition}>
      <div className="space-y-6 sm:space-y-12">
        {/* Title */}
        <div className={`text-center space-y-2 ${isActive ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
            Da <span className="text-gradient">periferia de Salvador</span> para o mundo
          </h2>
          <p className="text-foreground/60 text-sm sm:text-lg md:text-xl">
            Conhecemos essa realidade porque viemos dela.
          </p>
        </div>

        {/* Team cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className={`group relative ${isActive ? `animate-scale-in ${member.delay}` : 'opacity-0'}`}
            >
              <div className="bg-card border border-border rounded-2xl p-4 sm:p-6 md:p-8 text-center hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
                {/* Gradient top bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${member.gradient}`} />

                {/* Avatar with photo */}
                <div className={`w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full mx-auto mb-4 sm:mb-6 overflow-hidden ring-4 ring-offset-2 ring-offset-background ring-primary/20`}>
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name and role */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-foreground/60 text-sm md:text-base mb-4">{member.role}</p>

                {/* LinkedIn button */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2]/20 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Quote - hidden on mobile */}
        <blockquote className={`hidden sm:block text-center max-w-3xl mx-auto ${isActive ? 'animate-fade-up delay-700' : 'opacity-0'}`}>
          <p className="text-lg md:text-xl text-foreground/80 italic">
            "A gente não estudou esse problema num paper — a gente viveu do lado dele.
            Estamos construindo a ferramenta que a gente queria que existisse pra elas."
          </p>
        </blockquote>
      </div>
    </SlideContainer >
  );
};

export default SlideTeam;
