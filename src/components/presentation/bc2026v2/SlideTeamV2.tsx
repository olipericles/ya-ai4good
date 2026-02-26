import SlideContainerV2, { type SlideMode } from "./SlideContainerV2";
import { Linkedin } from "lucide-react";
import equipeAdriele from "@/assets/team/equipe-adriele.png";
import equipePericles from "@/assets/team/equipe-pericles.png";
import equipeLua from "@/assets/team/equipe-lua.png";

interface SlideTeamV2Props {
    isActive: boolean;
    mode?: SlideMode;
    slideNumber?: number;
    step?: number;
}

export const SLIDE_TEAM_V2_STEPS = 0;

const SlideTeamV2 = ({ isActive, mode, slideNumber }: SlideTeamV2Props) => {
    const team = [
        {
            name: "Adriele Ornellas",
            role: "Pesquisa e Comunicação",
            photo: equipeAdriele,
            linkedin: "https://www.linkedin.com/in/adrieleornellas/",
            gradient: "from-primary to-primary/60",
        },
        {
            name: "Péricles Oliveira",
            role: "Estratégia e IA",
            photo: equipePericles,
            linkedin: "https://www.linkedin.com/in/olipericles/",
            gradient: "from-secondary to-secondary/60",
        },
        {
            name: "Luã Mota",
            role: "Design e Dados",
            photo: equipeLua,
            linkedin: "https://www.linkedin.com/in/lua-mota/",
            gradient: "from-accent to-accent/60",
        },
    ];

    return (
        <SlideContainerV2 isActive={isActive} mode={mode} slideNumber={slideNumber}>
            <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
                <p className="text-sm text-foreground/60 uppercase tracking-widest">
                    Da <span className="text-gradient font-semibold">periferia de Salvador</span> para o mundo
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
                    {team.map((member) => (
                        <a
                            key={member.name}
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center gap-3 p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
                        >
                            {/* Gradient top bar */}
                            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${member.gradient}`} />

                            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden ring-4 ring-offset-2 ring-offset-background ring-primary/20 group-hover:ring-primary/50 transition-all">
                                <img
                                    src={member.photo}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{member.name}</h3>
                            <p className="text-sm text-foreground/60">{member.role}</p>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2]/20 transition-colors mt-1">
                                <Linkedin className="w-4 h-4" />
                                <span className="text-sm font-bold">LinkedIn</span>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-6 max-w-2xl">
                    <p className="text-lg sm:text-xl text-foreground font-medium italic leading-relaxed">
                        "A gente não estudou esse problema num paper. <span className="text-primary font-bold">A gente viveu do lado dele.</span>"
                    </p>
                </div>

                {/* Contacts */}
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 pt-4 text-sm sm:text-base text-muted-foreground">
                    <a href="https://instagram.com/ya.ai4good" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                        📱 @ya.ai4good
                    </a>
                    <a href="mailto:ya.ai4good@gmail.com" className="hover:text-primary transition-colors flex items-center gap-2">
                        📧 ya.ai4good@gmail.com
                    </a>
                </div>
            </div>
        </SlideContainerV2>
    );
};

export default SlideTeamV2;
