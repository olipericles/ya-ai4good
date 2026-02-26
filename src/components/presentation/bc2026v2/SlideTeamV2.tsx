import SlideContainerV2, { type SlideMode } from "./SlideContainerV2";
import equipeAdriele from "@/assets/equipe-adriele.png";
import equipePericles from "@/assets/equipe-pericles.png";
import equipeLua from "@/assets/equipe-lua.png";

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
        },
        {
            name: "Péricles Oliveira",
            role: "Estratégia e IA",
            photo: equipePericles,
            linkedin: "https://www.linkedin.com/in/olipericles/",
        },
        {
            name: "Luã Mota",
            role: "Design e Dados",
            photo: equipeLua,
            linkedin: "https://www.linkedin.com/in/lua-mota/",
        },
    ];

    return (
        <SlideContainerV2 isActive={isActive} mode={mode} slideNumber={slideNumber}>
            <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
                {/* TODO: substituir por foto real do time no Rio Vermelho */}
                <p className="text-sm text-muted-foreground uppercase tracking-widest">
                    Da periferia de Salvador para o mundo
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
                    {team.map((member) => (
                        <a
                            key={member.name}
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-3 p-6 bg-card/50 border border-border rounded-2xl backdrop-blur-sm hover:border-primary/50 transition-all group"
                        >
                            <img
                                src={member.photo}
                                alt={member.name}
                                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-2 border-primary/30 group-hover:border-primary transition-colors"
                            />
                            <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                            <p className="text-sm text-muted-foreground">{member.role}</p>
                        </a>
                    ))}
                </div>

                <div className="bg-primary/10 border border-primary/30 rounded-2xl p-6 max-w-2xl">
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
