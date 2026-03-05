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

    const isScalePhase = step >= 4;

    return (
        <div className="w-full h-full flex flex-col justify-center items-center px-[10vw] max-w-[1600px] mx-auto relative z-10 transition-all duration-700">

            {/* Phase 1: Distribution Paths */}
            <div className={`w-full absolute flex flex-col transition-all duration-1000 ease-in-out ${isScalePhase ? "opacity-0 -translate-y-16 scale-95 pointer-events-none" : "opacity-100 translate-y-0 scale-100"} origin-center`}>
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
                            className={`flex flex-col p-8 bg-card/40 backdrop-blur-sm border border-white/10 rounded-3xl transition-all duration-500 hover:border-primary/50 hover:bg-card/60 ${step >= i + 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                        >
                            <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                                <path.icon className="w-8 h-8 text-primary" aria-hidden="true" />
                            </div>
                            <h4 className="text-2xl font-bold mb-2 uppercase tracking-tight">{path.label}</h4>
                            <p className="text-base text-white/60">{path.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Phase 2: Closing thought (Scaling Amplified) */}
            <div className={`w-full absolute flex items-center justify-center transition-all duration-1000 delay-300 ease-out ${isScalePhase ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-90 translate-y-16 pointer-events-none"}`}>
                <div className="relative w-full max-w-5xl flex flex-col items-center justify-center text-center">

                    {/* Background Scale Animation Effect */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
                        <div className="w-[100px] h-[100px] rounded-full border border-primary opacity-30 animate-ping" style={{ animationDuration: '3s' }} />
                        <div className="absolute w-[300px] h-[300px] rounded-full border border-primary/50 opacity-20 animate-ping" style={{ animationDuration: '3s', animationDelay: '0.8s' }} />
                        <div className="absolute w-[600px] h-[600px] rounded-full border border-primary/30 opacity-10 animate-ping" style={{ animationDuration: '3s', animationDelay: '1.6s' }} />
                        <div className="absolute w-[900px] h-[900px] rounded-full border border-primary/10 opacity-5 animate-ping" style={{ animationDuration: '3s', animationDelay: '2.4s' }} />
                    </div>

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="p-6 bg-primary/10 rounded-full mb-10 border border-primary/30 backdrop-blur-md shadow-[0_0_30px_rgba(229,91,60,0.5)]">
                            <Share2 className="w-12 h-12 text-primary" aria-hidden="true" />
                        </div>
                        <p className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter uppercase leading-none drop-shadow-xl">
                            Imagina quando <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">essa tecnologia escala.</span>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SlidePathV4;
