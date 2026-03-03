import { type SlideMode } from "./SlideContainerV2";
import { Building2, Users, FileText, Globe } from "lucide-react";

interface SlideVisionV3Props {
    isActive: boolean;
    mode?: SlideMode;
    slideNumber?: number;
    step?: number;
}

export const SLIDE_VISION_V3_STEPS = 2;

const SlideVisionV3 = ({ isActive, step = 0 }: SlideVisionV3Props) => {
    if (!isActive) return null;

    const pillars = [
        { icon: Building2, label: "Integração B2G", desc: "CRAS & Prefeituras" },
        { icon: Users, label: "Rede B2B", desc: "ONGs & Associações" },
        { icon: FileText, label: "Impacto Público", desc: "Leis & Subsídios" },
        { icon: Globe, label: "Expansão Nacional", desc: "Rollout massivo" },
    ];

    return (
        <div className="w-full h-full flex flex-col justify-center items-start px-[10vw] max-w-[1600px] mx-auto relative">
            <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">

                {/* Left Column: The Big Number */}
                <div className="md:col-span-5 flex flex-col justify-center">
                    <h2 className="text-xl font-mono text-primary mb-8 uppercase tracking-widest flex items-center gap-4">
                        <span className="w-8 h-px bg-primary inline-block"></span>
                        Visão 6 Meses
                    </h2>
                    <h3 className="text-[8rem] md:text-[12rem] font-black leading-[0.8] tracking-tighter tabular-nums selection:bg-primary selection:text-black">
                        1K
                    </h3>
                    <p className="text-4xl font-bold uppercase tracking-tight text-white/50 mt-4">
                        Mães Alcançadas
                    </p>
                </div>

                {/* Right Column: Execution Pillars */}
                <div className="md:col-span-7 flex flex-col justify-center gap-0 border-l-4 border-primary pl-8 md:pl-16">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {pillars.map((pillar, index) => (
                            <div
                                key={index}
                                className={`flex flex-col gap-4 border border-white/10 p-6 bg-[#111] transition-opacity duration-300 ${step >= 1 ? "opacity-100" : "opacity-0"
                                    }`}
                            >
                                <pillar.icon className="w-8 h-8 text-primary" aria-hidden="true" />
                                <div>
                                    <h4 className="text-xl font-bold uppercase">{pillar.label}</h4>
                                    <p className="text-sm font-mono text-white/40 mt-1">{pillar.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={`mt-8 bg-primary text-black p-8 transition-opacity duration-300 ${step >= 2 ? "opacity-100" : "opacity-0"
                        }`}>
                        <p className="text-2xl font-black uppercase leading-tight">
                            "A mãe já tá no WhatsApp.<br />
                            Só faltava a Yá."
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SlideVisionV3;
