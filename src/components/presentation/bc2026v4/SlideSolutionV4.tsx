import { type SlideMode } from "../types";
import yaLogo from "@/assets/logos/ya_logo_branco.svg";
import interacaoAudio from "@/assets/images/interacao-carol-audio.jpeg";
import interacaoSaldo from "@/assets/images/interacao-carol-saldo.jpeg";
import dashCarol from "@/assets/images/dash-carol.jpeg";

interface SlideSolutionV4Props {
    isActive: boolean;
    mode?: SlideMode;
    slideNumber?: number;
    step?: number;
}

export const SLIDE_SOLUTION_V4_STEPS = 3;

const SlideSolutionV4 = ({ isActive, step = 0 }: SlideSolutionV4Props) => {
    if (!isActive) return null;

    return (
        <div className="w-full h-full flex flex-col justify-center items-start px-[10vw] max-w-[1600px] mx-auto relative z-10">
            <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">

                {/* Left Column: The Architecture */}
                <div className="md:col-span-6 flex flex-col justify-center">
                    <h2 className="text-xl font-mono text-primary mb-8 uppercase tracking-widest flex items-center gap-4">
                        <span className="w-8 h-px bg-primary inline-block"></span>
                        A Solução
                    </h2>

                    <div className="space-y-6">
                        <h3 className="text-5xl md:text-7xl font-black leading-none tracking-tighter uppercase py-2 drop-shadow-md">
                            Sem app.<br />
                            Sem fricção.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary px-0 mt-2 inline-block">Só WhatsApp.</span>
                        </h3>
                    </div>

                    <div className="mt-16 space-y-4 text-white/60">
                        <p className="text-sm md:text-base font-mono tracking-wide">
                            <span className="text-primary font-bold">97%</span> das pessoas de baixa renda acessam internet pelo celular.
                        </p>
                        <p className="text-sm md:text-base font-mono tracking-wide">
                            <span className="text-primary font-bold">91%</span> usam WhatsApp todo dia.
                        </p>
                    </div>
                </div>

                {/* Right Column: The WhatsApp Chat */}
                <div className="md:col-span-6 flex items-center justify-end p-8">
                    <div className="relative w-full max-w-[340px] mx-auto perspective-1000">
                        <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full -z-10" />

                        {/* Phone Frame */}
                        <div className={`rounded-[2.5rem] shadow-[0_0_40px_rgba(0,0,0,0.5)] border-[6px] border-[#2A2A2A] relative bg-black flex flex-col aspect-[9/19.5] overflow-hidden transition-all duration-1000 transform ${step === 0 ? "translate-y-8 opacity-0" : "translate-y-0 opacity-100"}`}>

                            {/* Images stacking with opacity transitions */}
                            <img
                                src={interacaoAudio}
                                alt="Interação por Áudio"
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out z-10 ${step === 1 ? "opacity-100" : "opacity-0"}`}
                            />
                            <img
                                src={interacaoSaldo}
                                alt="Interação verificando Saldo"
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out z-20 ${step === 2 ? "opacity-100" : "opacity-0"}`}
                            />
                            <img
                                src={dashCarol}
                                alt="Dashboard mostrando a Visão 360"
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out z-30 ${step >= 3 ? "opacity-100" : "opacity-0"}`}
                            />

                            {/* Default placeholder just in case */}
                            <div className="absolute inset-0 flex items-center justify-center -z-10 bg-[#0B141A]">
                                <img src={yaLogo} alt="Yá" className="w-16 opacity-30" />
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SlideSolutionV4;
