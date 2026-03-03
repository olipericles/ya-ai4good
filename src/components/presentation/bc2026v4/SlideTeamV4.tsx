import { type SlideMode } from "../bc2026v2/SlideContainer";
import { Linkedin } from "lucide-react";
import equipeAdriele from "@/assets/team/equipe-adriele.png";
import equipePericles from "@/assets/team/equipe-pericles.png";
import equipeLua from "@/assets/team/equipe-lua.png";

interface SlideTeamV4Props {
    isActive: boolean;
    mode?: SlideMode;
    slideNumber?: number;
    step?: number;
}

export const SLIDE_TEAM_V4_STEPS = 1;

const SlideTeamV4 = ({ isActive, step = 0 }: SlideTeamV4Props) => {
    if (!isActive) return null;

    const team = [
        {
            name: "Adriele Ornellas",
            role: "Pessoas e Comunidades",
            photo: equipeAdriele,
            linkedin: "https://www.linkedin.com/in/adrieleornellas/",
        },
        {
            name: "Luã Mota",
            role: "Software e Dados",
            photo: equipeLua,
            linkedin: "https://www.linkedin.com/in/lua-mota/",
        },
        {
            name: "Péricles Oliveira",
            role: "Estratégia e Produto",
            photo: equipePericles,
            linkedin: "https://www.linkedin.com/in/olipericles/",
        },
    ];

    return (
        <div className="w-full h-full flex flex-col justify-center items-start px-[10vw] max-w-[1600px] mx-auto relative z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none -z-10" />

            <div className="w-full mb-12 flex flex-col items-center text-center">
                <h2 className="text-xl font-mono text-primary mb-4 uppercase tracking-widest flex items-center justify-center gap-4">
                    <span className="w-8 h-px bg-primary inline-block"></span>
                    Os Fundadores
                    <span className="w-8 h-px bg-primary inline-block"></span>
                </h2>
                <h3 className="text-4xl md:text-6xl font-black leading-none tracking-tighter uppercase py-2">
                    Da periferia de Salvador<br />
                    <span className="bg-primary text-black px-3 mt-2 inline-block">para o mundo</span>
                </h3>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10">
                {team.map((member, index) => (
                    <a
                        key={member.name}
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex flex-col items-center p-8 bg-card/40 backdrop-blur-sm border border-white/10 rounded-3xl hover:border-primary/50 hover:bg-card/60 transition-all duration-500 ${step >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                        style={step >= 1 ? { transitionDelay: `${index * 150}ms` } : {}}
                    >
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/20 mb-6 group-hover:border-primary/60 group-hover:scale-105 transition-all duration-500 shadow-xl">
                            <img
                                src={member.photo}
                                alt={member.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h4 className="text-2xl font-bold uppercase mb-2 group-hover:text-primary transition-colors">{member.name}</h4>
                        <p className="text-sm font-mono text-white/60 tracking-wider uppercase mb-4">{member.role}</p>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 group-hover:bg-[#0A66C2]/20 group-hover:text-[#0A66C2] group-hover:border-[#0A66C2]/50 transition-colors">
                            <Linkedin className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase tracking-widest">Conectar</span>
                        </div>
                    </a>
                ))}
            </div>

            <div className={`mt-12 w-full text-center transition-all duration-700 delay-500 ${step >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}>
                <div className="inline-flex max-w-3xl mx-auto bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 backdrop-blur-md rounded-2xl p-6">
                    <p className="text-xl font-mono text-white/80 leading-relaxed italic">
                        "A gente não estudou esse problema num paper. <span className="text-primary font-bold not-italic">A gente viveu do lado dele.</span>"
                    </p>
                </div>
            </div>

        </div>
    );
};

export default SlideTeamV4;
