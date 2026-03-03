import { type SlideMode } from "./SlideContainerV2";
import { MessageCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SlideDemoV3Props {
    isActive: boolean;
    mode?: SlideMode;
    slideNumber?: number;
    step?: number;
}

export const SLIDE_DEMO_V3_STEPS = 1;

const SlideDemoV3 = ({ isActive, step = 0 }: SlideDemoV3Props) => {
    if (!isActive) return null;

    const whatsappNumber = "557199046199";
    const initialMessage = encodeURIComponent("Oii, quero experimentar!");
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${initialMessage}`;
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(whatsappLink)}`;

    return (
        <div className="w-full h-full flex flex-col justify-center items-start px-[10vw] max-w-[1600px] mx-auto relative">
            <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">

                {/* Left Column: QR and Concrete Path */}
                <div className={`md:col-span-5 flex flex-col justify-center transition-opacity duration-300 ${step >= 1 ? "opacity-100" : "opacity-0"
                    }`}>
                    <div className="bg-white p-8 w-fit relative border-r-8 border-b-8 border-primary">
                        <img
                            src={qrCodeUrl}
                            alt="WhatsApp QR Code"
                            className="w-56 h-56 md:w-80 md:h-80 skeleton bg-gray-200"
                        />
                        <div className="absolute -top-4 -right-4 p-4 bg-black text-white flex items-center justify-center border-l-4 border-b-4 border-primary">
                            <MessageCircle className="w-8 h-8 text-[#25D366]" aria-hidden="true" />
                        </div>
                    </div>
                </div>

                {/* Right Column: The Action */}
                <div className="md:col-span-7 flex flex-col justify-center">
                    <h2 className="text-xl font-mono text-primary mb-4 uppercase tracking-widest flex items-center gap-4">
                        <span className="w-8 h-px bg-primary inline-block"></span>
                        Demonstração Real
                    </h2>

                    <h3 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter uppercase mb-8">
                        Inicie sua<br />conversa.
                    </h3>

                    <p className="text-xl md:text-2xl text-white/50 font-medium leading-relaxed max-w-lg mb-10">
                        Nossa IA está pronta para comprovar que sabe cuidar de quem cuida.
                    </p>

                    <Button
                        size="lg"
                        className="w-fit h-16 px-10 text-xl font-black rounded-none bg-primary hover:bg-white text-black transition-colors duration-200"
                        asChild
                    >
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                            Falar com a Yá
                            <ExternalLink className="w-5 h-5 ml-4" aria-hidden="true" />
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SlideDemoV3;
