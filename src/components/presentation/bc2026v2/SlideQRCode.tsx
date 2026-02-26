import SlideContainerV2, { type SlideMode } from "./SlideContainerV2";
import yaLogo from "@/assets/ya_logo_branco.svg";
import yaQrcode from "@/assets/ya-qrcode.png";
import { Heart } from "lucide-react";

interface SlideQRCodeProps {
    isActive: boolean;
    mode?: SlideMode;
    slideNumber?: number;
    step?: number;
}

export const SLIDE_QRCODE_STEPS = 0;

const SlideQRCode = ({ isActive, mode, slideNumber }: SlideQRCodeProps) => {
    return (
        <SlideContainerV2 isActive={isActive} mode={mode} slideNumber={slideNumber}>
            <div className="flex flex-col items-center justify-center text-center space-y-8 max-w-2xl mx-auto">
                {/* Logo with glow */}
                <div className="relative">
                    <img src={yaLogo} alt="Yá" className="w-20 h-20" />
                    <div className="absolute inset-0 bg-primary/30 blur-[60px] -z-10 rounded-full" />
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                    Experimente a <span className="text-gradient">Yá</span> agora
                </h2>

                <div className="bg-foreground rounded-2xl p-4 shadow-lg glow-coral">
                    <img
                        src={yaQrcode}
                        alt="QR Code para experimentar a Yá"
                        className="w-48 h-48 sm:w-56 sm:h-56 object-contain"
                    />
                </div>

                {/* Tagline */}
                <div className="inline-flex items-center gap-3 text-primary">
                    <Heart className="w-5 h-5 animate-pulse" fill="currentColor" />
                    <span className="text-base sm:text-lg font-medium">Uma IA que cuida de quem cuida de todo mundo</span>
                    <Heart className="w-5 h-5 animate-pulse" fill="currentColor" />
                </div>

                <div className="text-sm text-muted-foreground pt-4 border-t border-border">
                    <p>Adriele Ornellas · Péricles Oliveira · Luã Mota</p>
                </div>
            </div>

            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-10 left-10 w-2 h-2 bg-primary rounded-full animate-pulse" />
                <div className="absolute top-20 right-20 w-3 h-3 bg-secondary rounded-full animate-pulse delay-200" />
                <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-accent rounded-full animate-pulse delay-400" />
            </div>
        </SlideContainerV2>
    );
};

export default SlideQRCode;
