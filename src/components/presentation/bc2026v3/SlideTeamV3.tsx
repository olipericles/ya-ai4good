import { type SlideMode } from "../bc2026v2/SlideContainerV2";
import { Linkedin } from "lucide-react";
import adrielePhoto from "@/assets/team/equipe-adriele.png";
import periclesPhoto from "@/assets/team/equipe-pericles.png";
import luaPhoto from "@/assets/team/equipe-lua.png";

interface SlideTeamV3Props {
    isActive: boolean;
    mode?: SlideMode;
    slideNumber?: number;
    step?: number;
}

export const SLIDE_TEAM_V3_STEPS = 1;

const SlideTeamV3 = ({ isActive, step = 0 }: SlideTeamV3Props) => {
    if (!isActive) return null;

    const team = [
        {
            name: "Péricles Oliveira",
            role: "Estratégia e Produto",
            linkedin: "https://www.linkedin.com/in/olipericles/",
            photo: periclesPhoto,
        },
        {
            name: "Adriele Ornellas",
            role: "Pessoas e Comunidades",
            linkedin: "https://www.linkedin.com/in/adrieleornellas/",
            photo: adrielePhoto,
        },
        {
            name: "Luã Mota",
            role: "Software e Dados",
            linkedin: "https://www.linkedin.com/in/luaamota/",
            photo: luaPhoto,
        },
    ];

    return (
        <div className="w-full h-full flex flex-col justify-center items-start px-[10vw] max-w-[1600px] mx-auto relative">
            <div className="w-full mb-16 flex flex-col items-center text-center">
                <h2 className="text-xl font-mono text-primary mb-4 uppercase tracking-widest flex items-center justify-center gap-4">
                    <span className="w-8 h-px bg-primary inline-block"></span>
                    Os Fundadores
                    <span className="w-8 h-px bg-primary inline-block"></span>
                </h2>
                <h3 className="text-4xl md:text-6xl font-black leading-none tracking-tighter uppercase py-2">
                    Da periferia de Salvador<br /> <span className="bg-primary text-black px-3 mt-2 inline-block">para o mundo</span>
                </h3>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/20">
                {team.map((member, index) => (
                    <div
                        key={index}
                        className={`flex flex-col p-8 border-r border-white/20 last:border-r-0 bg-[#0a0a0a] hover:bg-[#111] transition-all duration-300 ${step >= 1 ? "opacity-100" : "opacity-0"
                            }`}
                        // Add a slight delay staggering based on index without using classNames with variable interpolation that tailwind won't compile
                        style={step >= 1 ? { transitionDelay: `${index * 150}ms` } : {}}
                    >
                        <div className="w-full aspect-square bg-[#1A1A1A] mb-8 relative border-4 border-[#222] transition-all duration-500">
                            <img
                                src={member.photo}
                                alt={member.name}
                                className="w-full h-full object-cover"
                            />
                            <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute bottom-0 right-0 bg-primary text-black p-3 hover:bg-white transition-colors"
                                aria-label={`LinkedIn de ${member.name}`}
                            >
                                <Linkedin className="w-6 h-6" aria-hidden="true" />
                            </a>
                        </div>

                        <h4 className="text-2xl font-bold uppercase mb-2">{member.name}</h4>
                        <p className="text-sm font-mono text-white/60 tracking-wider uppercase">{member.role}</p>
                    </div>
                ))}
            </div>

            <div className={`mt-12 w-full text-center transition-opacity duration-300 delay-500 ${step >= 1 ? "opacity-100" : "opacity-0"
                }`}>
                <p className="text-xl font-mono text-white/40">
                    "A gente não estudou esse problema num paper — a gente viveu do lado dele."
                </p>
            </div>

        </div>
    );
};

export default SlideTeamV3;
