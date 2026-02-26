import SlideContainerV2, { type SlideMode } from "./SlideContainerV2";
import yaLogo from "@/assets/ya_logo_branco.svg";
import yaQrcode from "@/assets/ya-qrcode.png";

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
                <img src={yaLogo} alt="Yá" className="w-20 h-20" />

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                    Experimente a Yá agora
                </h2>

                <div className="bg-white rounded-2xl p-4 shadow-lg">
                    <img
                        src={yaQrcode}
                        alt="QR Code para experimentar a Yá"
                        className="w-48 h-48 sm:w-56 sm:h-56 object-contain"
                    />
                </div>




                <div className="text-sm text-muted-foreground pt-4 border-t border-border">
                    <p>Adriele Ornellas · Péricles Oliveira · Luã Mota</p>
                </div>
            </div>
        </SlideContainerV2>
    );
};

export default SlideQRCode;
