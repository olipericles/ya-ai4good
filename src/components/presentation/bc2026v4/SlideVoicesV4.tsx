import { type SlideMode } from "../types";
import { Quote } from "lucide-react";

interface SlideVoicesV4Props {
    isActive: boolean;
    mode?: SlideMode;
    slideNumber?: number;
    step?: number;
}

export const SLIDE_VOICES_V4_STEPS = 2;

const SlideVoicesV4 = ({ isActive, step = 0 }: SlideVoicesV4Props) => {
    if (!isActive) return null;

    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center text-center px-[10vw] max-w-[1600px] mx-auto z-10">
            {/* Background V2 Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none -z-10" />

            <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center min-h-[400px]">
                <Quote className="w-24 h-24 md:w-48 md:h-48 text-primary/10 absolute top-0 left-0 md:-top-16 md:-left-16 -z-10" />

                {/* Title (Visible on Step 0) */}
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out ${step === 0 ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                    }`}>
                    <h3 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tighter drop-shadow-md">
                        E o que essas mães nos disseram<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">mudou tudo.</span>
                    </h3>
                </div>

                {/* Citation 1 (Visible on Step 1) */}
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out ${step === 1 ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                    }`}>
                    <blockquote className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tighter drop-shadow-md">
                        "Eu achava que o problema era o salário.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Era o delivery.</span>"
                    </blockquote>
                </div>

                {/* Citation 2 (Visible on Step 2) */}
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out ${step >= 2 ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                    }`}>
                    <blockquote className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tighter drop-shadow-md">
                        "Pela primeira vez em 3 anos,<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">sobrou R$50</span> no fim do mês."
                    </blockquote>
                </div>
            </div>
        </div>
    );
};

export default SlideVoicesV4;
