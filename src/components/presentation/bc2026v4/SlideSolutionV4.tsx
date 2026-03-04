import { type SlideMode } from "../bc2026v2/SlideContainerV2";
import yaLogo from "@/assets/logos/ya_logo_branco.svg";
import { Mic } from "lucide-react";

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
                    <div className="relative w-full max-w-[340px] mx-auto">
                        <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full -z-10" />

                        <div className="rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/10 relative z-10 bg-[#0B141A] flex flex-col h-[550px] overflow-hidden">
                            {/* WhatsApp Header */}
                            <div className="bg-[#202C33] p-4 flex items-center gap-3 shadow-md z-20">
                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center p-2.5">
                                    <img src={yaLogo} alt="Yá" className="w-full h-full object-contain filter invert opacity-90" />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="text-white font-medium text-sm leading-tight">Yá</h4>
                                    <span className="text-white/60 text-xs">online</span>
                                </div>
                            </div>

                            {/* WhatsApp Body - Chat */}
                            <div className="flex-1 p-4 overflow-hidden flex flex-col gap-4 bg-[#0B141A] relative z-10">
                                {/* Subtle chat background pattern */}
                                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-transparent pointer-events-none" />

                                {/* Audio message from user */}
                                <div className={`self-end max-w-[85%] bg-[#005C4B] rounded-xl rounded-tr-none p-2 shadow-sm transition-all duration-700 ease-out ${step >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                                    <div className="flex items-center gap-3 px-2">
                                        <div className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center shrink-0">
                                            <Mic className="w-5 h-5 text-primary" />
                                        </div>
                                        {/* Fake audio wave */}
                                        <div className="flex items-center gap-1 h-6">
                                            <div className="w-1 bg-white/40 h-2 rounded-full"></div>
                                            <div className="w-1 bg-white/40 h-4 rounded-full"></div>
                                            <div className="w-1 bg-white/60 h-6 rounded-full"></div>
                                            <div className="w-1 bg-white/80 h-3 rounded-full"></div>
                                            <div className="w-1 bg-white/60 h-5 rounded-full"></div>
                                            <div className="w-1 bg-white/40 h-2 rounded-full"></div>
                                            <div className="w-1 bg-white/40 h-4 rounded-full"></div>
                                            <div className="w-1 bg-white/40 h-2 rounded-full"></div>
                                        </div>
                                        <div className="text-xs text-white/50 ml-2">0:04</div>
                                    </div>
                                    <span className="text-[10px] text-white/60 float-right mt-1.5 mr-1">10:41</span>
                                    <div className="clear-both"></div>
                                </div>

                                {/* Picture message from user (blurry receipt placeholder) */}
                                <div className={`self-end max-w-[85%] bg-[#005C4B] rounded-xl rounded-tr-none p-1 shadow-sm transition-all duration-700 ease-out ${step >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                                    <div className="w-56 h-64 bg-gradient-to-br from-white/20 to-white/5 rounded-lg flex items-center justify-center overflow-hidden relative shadow-inner border border-white/5">
                                        {/* Simulating a crumpled receipt visually with CSS */}
                                        <div className="absolute inset-2 bg-[#f4f4f4] rounded-sm transform rotate-1 opacity-90 backdrop-blur-sm shadow-md" style={{ clipPath: 'polygon(0% 2%, 100% 0%, 98% 98%, 95% 100%, 90% 98%, 85% 100%, 80% 98%, 75% 100%, 70% 98%, 65% 100%, 60% 98%, 55% 100%, 50% 98%, 45% 100%, 40% 98%, 35% 100%, 30% 98%, 25% 100%, 20% 98%, 15% 100%, 10% 98%, 5% 100%, 2% 98%)' }}>
                                            <div className="p-3 text-[10px] font-mono text-black/70 mix-blend-multiply blur-[0.4px] leading-tight">
                                                <div className="text-center font-bold mb-2 text-xs">SUPERMERCADO<br />DO BAIRRO</div>
                                                <div className="w-full border-b border-black/30 border-dashed mb-2"></div>
                                                <div className="flex justify-between"><span>CUPOM FISCAL</span></div>
                                                <div className="w-full border-b border-black/30 border-dashed my-2"></div>
                                                <div className="flex justify-between"><span>OLEO DE SOJA 1L</span><span>8,50</span></div>
                                                <div className="flex justify-between"><span>PASTEL CARNE</span><span>6,00</span></div>
                                                <div className="flex justify-between"><span>FRANGO CONG.</span><span>15,30</span></div>
                                                <div className="flex justify-between mb-4"><span>ARROZ 5KG</span><span>20,20</span></div>
                                                <div className="w-full border-b border-black/30 border-dashed my-2"></div>
                                                <div className="flex justify-between font-bold text-xs"><span>TOTAL</span><span>R$ 50,00</span></div>
                                            </div>
                                            {/* Crease effects */}
                                            <div className="absolute top-0 bottom-0 left-1/3 w-px bg-black/10 shadow-[0_0_2px_rgba(0,0,0,0.1)] -rotate-3"></div>
                                            <div className="absolute left-0 right-0 top-1/2 h-px bg-black/10 shadow-[0_0_3px_rgba(0,0,0,0.1)] rotate-2"></div>
                                            {/* Lighting overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-black/30 pointer-events-none mix-blend-overlay"></div>
                                        </div>
                                    </div>
                                    <span className="text-[10px] text-white/60 float-right mt-1 mr-2">10:41</span>
                                    <div className="clear-both"></div>
                                </div>

                                {/* Response from Yá */}
                                <div className={`self-start max-w-[85%] min-w-[200px] bg-[#202C33] rounded-xl rounded-tl-none p-3 shadow-sm transition-all duration-700 ease-out ${step >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                                    <p className="text-[13px] text-white/90 leading-relaxed font-sans">
                                        Pronto, flor! 🌻 Anotei os R$ 50 na categoria <span className="font-bold">Mercado</span>.<br /><br />
                                        Oxe, o óleo de soja já tá pela hora da morte de caro, viu? Mas fica tranquila, tá tudo certinho aqui!
                                    </p>
                                    <span className="text-[10px] text-white/50 float-right mt-1">10:42</span>
                                    <div className="clear-both"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SlideSolutionV4;
