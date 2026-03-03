import { type SlideMode } from "../bc2026v2/SlideContainerV2";
import yaWhatsappMockup from "@/assets/images/ya-whatsapp-mockup.jpg";

interface SlideSolutionV3Props {
    isActive: boolean;
    mode?: SlideMode;
    slideNumber?: number;
    step?: number;
}

export const SLIDE_SOLUTION_V3_STEPS = 1;

const SlideSolutionV3 = ({ isActive, step = 0 }: SlideSolutionV3Props) => {
    if (!isActive) return null;

    return (
        <div className="w-full h-full flex flex-col justify-center items-start px-[10vw] max-w-[1600px] mx-auto relative">
            <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">

                {/* Left Column: The Architecture */}
                <div className="md:col-span-6 flex flex-col justify-center">
                    <h2 className="text-xl font-mono text-primary mb-8 uppercase tracking-widest flex items-center gap-4">
                        <span className="w-8 h-px bg-primary inline-block"></span>
                        A Solução
                    </h2>

                    <div className="space-y-6">
                        <h3 className="text-5xl md:text-7xl font-black leading-none tracking-tighter uppercase py-2">
                            Sem app.<br />
                            Sem fricção.<br />
                            <span className="text-black bg-primary px-3 mt-2 inline-block">Só WhatsApp.</span>
                        </h3>
                    </div>
                </div>

                {/* Right Column: The Concrete Product */}
                <div className={`md:col-span-6 flex items-center justify-end p-8 border-l-8 border-white/20 transition-opacity duration-300 ${step >= 1 ? "opacity-100" : "opacity-0"
                    }`}>
                    <div className="relative">
                        <div className="absolute top-4 -left-4 w-full h-full bg-primary -z-10" />
                        <img
                            src={yaWhatsappMockup}
                            alt="Interface da Yá no WhatsApp"
                            className="max-w-[280px] sm:max-w-[320px] object-cover border-4 border-[#1A1A1A]"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SlideSolutionV3;
