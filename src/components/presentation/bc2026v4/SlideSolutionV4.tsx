import { type SlideMode } from "../bc2026v2/SlideContainerV2";
import yaWhatsappMockup from "@/assets/images/ya-whatsapp-mockup.jpg";

interface SlideSolutionV4Props {
    isActive: boolean;
    mode?: SlideMode;
    slideNumber?: number;
    step?: number;
}

export const SLIDE_SOLUTION_V4_STEPS = 1;

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
                </div>

                {/* Right Column: The Concrete Product in V4 Style */}
                <div className={`md:col-span-6 flex items-center justify-end p-8 transition-all duration-700 ease-out ${step >= 1 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                    }`}>
                    <div className="relative max-w-[280px] sm:max-w-[320px] mx-auto">
                        <div className="absolute inset-0 bg-primary/20 blur-[50px] rounded-full -z-10" />

                        <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-primary/30 relative z-10 hover:border-primary/60 transition-colors duration-500">
                            <img
                                src={yaWhatsappMockup}
                                alt="Interface da Yá no WhatsApp"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SlideSolutionV4;
