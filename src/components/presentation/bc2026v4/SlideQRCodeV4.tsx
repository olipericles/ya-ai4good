import { type SlideMode } from "../types";
import yaLogo from "@/assets/logos/ya_logo_branco.svg";
import yaQrcode from "@/assets/logos/ya-qrcode.png";

interface SlideQRCodeV4Props {
    isActive: boolean;
    mode?: SlideMode;
    slideNumber?: number;
    step?: number;
}

export const SLIDE_QRCODE_V4_STEPS = 0;

const SlideQRCodeV4 = ({ isActive }: SlideQRCodeV4Props) => {
    if (!isActive) return null;

    return (
        <div className="w-full h-full flex flex-col items-center justify-center text-center px-[10vw] max-w-[1600px] mx-auto relative z-10 animate-in fade-in duration-1000">
            {/* Background V2 Glowing Particles */}
            <div className="absolute top-10 left-10 w-2 h-2 bg-primary rounded-full animate-pulse" />
            <div className="absolute top-20 right-20 w-3 h-3 bg-secondary rounded-full animate-pulse blur-[1px] delay-200" />
            <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-accent rounded-full animate-pulse blur-[1px] delay-400" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] min-w-[600px] min-h-[400px] max-w-[1200px] bg-primary/10 blur-[150px] rounded-full pointer-events-none -z-20" />

            <div className="relative flex flex-col items-center justify-center space-y-10 z-20 w-full max-w-4xl mx-auto px-4">

                <div className="relative drop-shadow-[0_0_20px_rgba(229,91,60,0.3)] mb-4">
                    <img src={yaLogo} alt="Yá" className="w-24 h-24 md:w-32 md:h-32 object-contain" />
                </div>

                <div className="space-y-4">
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter drop-shadow-md">
                        Experimente a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Yá</span> agora
                    </h2>
                    <p className="text-lg md:text-2xl font-mono text-white/50 uppercase tracking-widest max-w-2xl mx-auto">
                        <span className="text-primary font-bold">11 milhões</span> de mães.<br />
                        <span className="text-[#a04e8d] font-bold">22 milhões</span> de crianças.
                    </p>
                </div>

                <div className="relative group">
                    <div className="absolute inset-0 bg-primary/30 blur-[40px] rounded-[3rem] -z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="bg-white rounded-[2.5rem] p-6 shadow-2xl border-4 border-white/5 transition-transform duration-500 group-hover:scale-105">
                        <img
                            src={yaQrcode}
                            alt="QR Code para experimentar a Yá"
                            className="w-48 h-48 sm:w-64 sm:h-64 object-contain"
                        />
                    </div>
                </div>

                <div className="mt-8 space-y-6">
                    <p className="text-xl md:text-2xl text-primary font-bold max-w-2xl mx-auto flex items-center justify-center gap-3">
                        <span>🧡</span> Uma IA que cuida de quem cuida de todo mundo <span>🧡</span>
                    </p>

                    <div className="pt-8 border-t border-white/10 w-full max-w-xl mx-auto">
                        <p className="text-sm font-mono text-white/40 uppercase tracking-widest">
                            Adriele Ornellas · Luã Mota · Péricles Oliveira
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SlideQRCodeV4;
