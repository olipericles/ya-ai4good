import SlideContainer, { type SlideMode } from "./SlideContainer";
import { MessageCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

type TransitionType = "fade-zoom" | "slide-left" | "slide-right" | "slide-up" | "zoom-rotate" | "blur-scale";

interface SlideDemoProps {
    isActive: boolean;
    transition?: TransitionType;
    mode?: SlideMode;
    slideNumber?: number;
}

const SlideDemo = ({ isActive, transition = "slide-up", mode, slideNumber = 10 }: SlideDemoProps) => {
    const whatsappNumber = "557199046199";
    const initialMessage = encodeURIComponent("Oii, quero experimentar!");
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${initialMessage}`;
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(whatsappLink)}`;

    return (
        <SlideContainer isActive={isActive} transition={transition} mode={mode} slideNumber={slideNumber}>
            <div className="flex flex-col items-center justify-center h-full gap-8 md:gap-12">
                {/* Title */}
                <div className={`text-center space-y-4 ${isActive ? 'animate-fade-up' : 'opacity-0'}`}>
                    <h2 className="text-3xl md:text-5xl font-black">
                        Experimente a <span className="text-primary">Yá</span> agora!
                    </h2>
                    <p className="text-base md:text-xl text-foreground/60">
                        Escaneie o QR Code ou clique no botão para começar
                    </p>
                </div>

                {/* QR Code and Action */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-32 w-full max-w-6xl">
                    {/* QR Code Container */}
                    <div className={`relative group ${isActive ? 'animate-scale-in delay-200' : 'opacity-0'}`}>
                        <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-[3rem] group-hover:bg-primary/30 transition-all duration-500" />
                        <div className="relative bg-card border border-border p-6 rounded-[2.5rem] shadow-2xl overflow-hidden">
                            <img
                                src={qrCodeUrl}
                                alt="WhatsApp QR Code"
                                className="w-56 h-56 md:w-80 md:h-80 rounded-2xl shadow-inner bg-white p-4"
                            />
                            <div className="absolute top-0 right-0 p-3">
                                <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg">
                                    <MessageCircle className="w-5 h-5 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Column */}
                    <div className={`flex flex-col items-center md:items-start gap-6 md:gap-8 max-w-sm ${isActive ? 'animate-fade-up delay-400' : 'opacity-0'}`}>
                        <div className="space-y-6 text-center md:text-left">
                            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-base font-bold">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
                                </span>
                                Demo em Tempo Real
                            </div>
                            <h3 className="text-2xl md:text-5xl font-black">Inicie sua conversa</h3>
                            <p className="text-base md:text-xl text-foreground/70 leading-relaxed max-w-md">
                                Nossa IA está pronta para te ouvir, entender suas necessidades e mostrar como cuidamos de quem cuida.
                            </p>
                        </div>

                        <Button
                            size="lg"
                            className="w-full sm:w-auto h-20 px-12 text-2xl font-black rounded-3xl gap-4 shadow-2xl bg-[#25D366] hover:bg-[#128C7E] text-white border-none transition-all hover:scale-105 active:scale-95"
                            asChild
                        >
                            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                                Falar com a Yá
                                <ExternalLink className="w-6 h-6" />
                            </a>
                        </Button>

                        <p className="text-sm text-foreground/40 text-center md:text-left">
                            * Abre em uma nova aba com o WhatsApp Web ou App
                        </p>
                    </div>
                </div>
            </div>

            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
                <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-[120px] animate-pulse delay-700" />
            </div>
        </SlideContainer>
    );
};

export default SlideDemo;
