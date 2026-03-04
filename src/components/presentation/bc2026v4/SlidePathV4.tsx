import { type SlideMode } from "../bc2026v2/SlideContainerV2";
import { Building, Users, Landmark, Share2 } from "lucide-react";

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

            {/* Closing thought: Scaling Amplified */}
            <div className={`mt-12 w-full transition-all duration-1000 ease-out absolute bottom-12 left-0 right-0 px-[10vw] max-w-[1600px] mx-auto ${step >= 4 ? "opacity-100 scale-100" : "opacity-0 scale-[0.9] pointer-events-none"
                }`}>
                <div className="relative bg-gradient-to-r from-primary/20 to-[#0A1015] p-10 rounded-3xl border top-full border-primary/30 backdrop-blur-2xl flex flex-col items-center justify-center text-center overflow-hidden shadow-[0_0_50px_rgba(229,91,60,0.15)] ring-1 ring-white/10">

                    {/* Background Scale Animation Effect */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-[100px] h-[100px] rounded-full border border-primary opacity-30 animate-ping" style={{ animationDuration: '3s' }} />
                        <div className="absolute w-[300px] h-[300px] rounded-full border border-primary/50 opacity-20 animate-ping" style={{ animationDuration: '3s', animationDelay: '0.8s' }} />
                        <div className="absolute w-[600px] h-[600px] rounded-full border border-primary/30 opacity-10 animate-ping" style={{ animationDuration: '3s', animationDelay: '1.6s' }} />
                    </div>

                    <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
                        <div className="p-4 bg-primary/20 rounded-full mb-6 ring-2 ring-primary/30 ring-offset-2 ring-offset-[#0A1015]">
                            <Share2 className="w-8 h-8 text-primary" aria-hidden="true" />
                        </div>
                        <p className="text-3xl md:text-5xl font-black mb-4">
                            Imagina o que acontece quando essa <br className="hidden md:block" /><span className="text-primary tracking-tight">tecnologia escala.</span>
                        </p>
                        <p className="text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed">
                            As interfaces frias e burocráticas vão ter que aprender a falar a língua das pessoas. Se você acredita que tecnologia de verdade é a que cuida de quem mais precisa, <strong className="text-white font-semibold">a gente vai adorar essa conversa.</strong>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SlidePathV4;
