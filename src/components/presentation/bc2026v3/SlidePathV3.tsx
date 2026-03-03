import { type SlideMode } from "../bc2026v2/SlideContainerV2";
import { Building, Users, Landmark, Handshake } from "lucide-react";

interface SlidePathV3Props {
    isActive: boolean;
    mode?: SlideMode;
    slideNumber?: number;
    step?: number;
}

export const SLIDE_PATH_V3_STEPS = 4;

const SlidePathV3 = ({ isActive, step = 0 }: SlidePathV3Props) => {
    if (!isActive) return null;

    const paths = [
        { icon: Building, label: "CRAS", desc: "Centros de Referência de Assistência Social" },
        { icon: Users, label: "ONGs", desc: "Comunidades locais e associações de bairro" },
        { icon: Landmark, label: "Governo", desc: "Políticas públicas e programas de transferência" },
    ];

    return (
        <div className="w-full h-full flex flex-col justify-center items-start px-[10vw] max-w-[1600px] mx-auto relative">

            <div className="w-full mb-12">
                <h2 className="text-xl font-mono text-primary mb-4 uppercase tracking-widest flex items-center gap-4">
                    <span className="w-8 h-px bg-primary inline-block"></span>
                    Distribuição
                </h2>
                <h3 className="text-5xl md:text-7xl font-black leading-none tracking-tighter uppercase py-2 selection:bg-primary selection:text-black">
                    Como chegar a<br />
                    <span className="text-black bg-primary px-3 mt-2 inline-block">mil mães</span>?
                </h3>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-b border-white/20">
                {paths.map((path, i) => (
                    <div
                        key={i}
                        className={`flex flex-col p-8 border-r border-white/20 last:border-r-0 transition-opacity duration-300 ${step >= i + 1 ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <path.icon className="w-10 h-10 text-primary mb-6" aria-hidden="true" />
                        <h4 className="text-3xl font-bold mb-2 uppercase tracking-tight">{path.label}</h4>
                        <p className="text-lg text-white/60">{path.desc}</p>
                    </div>
                ))}
            </div>

            {/* Closing thought */}
            <div className={`mt-12 w-full transition-opacity duration-300 ${step >= 4 ? "opacity-100" : "opacity-0"
                }`}>
                <div className="bg-[#1A1A1A] p-8 flex items-start sm:items-center gap-6 border-l-8 border-primary">
                    <Handshake className="w-10 h-10 text-primary flex-shrink-0" aria-hidden="true" />
                    <p className="text-xl md:text-3xl font-bold">
                        A gente só precisa do caminho até elas. <span className="text-primary">E se alguém aqui puder ajudar, a gente vai adorar conversar.</span>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default SlidePathV3;
