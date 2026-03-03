import { type SlideMode } from "../bc2026v2/SlideContainerV2";
import { Building, Users, Landmark, Handshake } from "lucide-react";

interface SlidePathV4Props {
    isActive: boolean;
    mode?: SlideMode;
    slideNumber?: number;
    step?: number;
}

export const SLIDE_PATH_V4_STEPS = 4;

const SlidePathV4 = ({ isActive, step = 0 }: SlidePathV4Props) => {
    if (!isActive) return null;

    const paths = [
        { icon: Building, label: "CRAS", desc: "Centros de Referência de Assistência Social" },
        { icon: Users, label: "ONGs", desc: "Comunidades locais e associações de bairro" },
        { icon: Landmark, label: "Governo", desc: "Políticas públicas e programas de transferência" },
    ];

    return (
        <div className="w-full h-full flex flex-col justify-center items-start px-[10vw] max-w-[1600px] mx-auto relative z-10">

            <div className="w-full mb-12">
                <h2 className="text-xl font-mono text-primary mb-4 uppercase tracking-widest flex items-center gap-4">
                    <span className="w-8 h-px bg-primary inline-block"></span>
                    Distribuição
                </h2>
                <h3 className="text-5xl md:text-7xl font-black leading-none tracking-tighter uppercase py-2 drop-shadow-md">
                    Como chegar a<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary px-0 mt-2 inline-block">mil mães</span>?
                </h3>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 mt-8">
                {paths.map((path, i) => (
                    <div
                        key={i}
                        className={`flex flex-col p-8 bg-card/40 backdrop-blur-sm border border-white/10 rounded-3xl transition-all duration-500 hover:border-primary/50 hover:bg-card/60 ${step >= i + 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                    >
                        <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                            <path.icon className="w-8 h-8 text-primary" aria-hidden="true" />
                        </div>
                        <h4 className="text-2xl font-bold mb-2 uppercase tracking-tight">{path.label}</h4>
                        <p className="text-base text-white/60">{path.desc}</p>
                    </div>
                ))}
            </div>

            {/* Closing thought */}
            <div className={`mt-12 w-full transition-all duration-700 delay-300 ${step >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}>
                <div className="bg-gradient-to-r from-primary/20 to-primary/5 p-8 rounded-3xl border border-primary/30 backdrop-blur-md flex items-start sm:items-center gap-6">
                    <div className="p-3 bg-primary/20 rounded-full shrink-0">
                        <Handshake className="w-10 h-10 text-primary" aria-hidden="true" />
                    </div>
                    <p className="text-xl md:text-3xl font-bold">
                        A gente só precisa do caminho até elas. <br className="hidden md:block" />
                        <span className="text-primary text-2xl md:text-3xl mt-1 block">E se alguém puder ajudar, vamos adorar conversar.</span>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default SlidePathV4;
