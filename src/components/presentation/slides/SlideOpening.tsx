import SlideContainer from "../SlideContainer";
import AnimatedNumber from "../AnimatedNumber";
import HoverInfo from "@/components/ui/HoverInfo";
import yaLogo from "@/assets/logos/ya_logo_branco.svg";

type TransitionType = "fade-zoom" | "slide-left" | "slide-right" | "slide-up" | "zoom-rotate" | "blur-scale";

interface SlideOpeningProps {
  isActive: boolean;
  transition?: TransitionType;
}

const SlideOpening = ({ isActive, transition }: SlideOpeningProps) => {
  return (
    <SlideContainer isActive={isActive} transition={transition}>
      <div className="text-center space-y-4 sm:space-y-8">
        {/* Logo */}
        <div className={`flex justify-center mb-4 sm:mb-8 ${isActive ? 'animate-fade-up' : 'opacity-0'}`}>
          <img
            src={yaLogo}
            alt="Yá Logo"
            className="h-12 sm:h-16 md:h-20 object-contain"
          />
        </div>

        {/* Main number */}
        <div className={`${isActive ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-black text-gradient tracking-tight">
            <AnimatedNumber value={11} isActive={isActive} /> milhões
          </h1>
          <p className="text-sm text-foreground/50 mt-2">
            <HoverInfo tooltip={
              <span>
                <strong>Fonte:</strong> FGV/IBRE — PNAD Contínua 2022<br />
                <a href="https://blogdoibre.fgv.br/posts/maes-solo-no-mercado-de-trabalho" target="_blank" rel="noopener" className="text-primary underline">Ver artigo completo →</a>
              </span>
            }>
              Fonte: FGV/IBRE 2022
            </HoverInfo>
          </p>
        </div>

        {/* Subtitle */}
        <p className={`text-base sm:text-xl md:text-3xl text-foreground/80 max-w-3xl mx-auto leading-relaxed ${isActive ? 'animate-fade-up delay-400' : 'opacity-0'}`}>
          de lares chefiados por{" "}
          <HoverInfo
            tooltip="Mulheres que são referência única do domicílio com filhos menores de 18 anos"
            className="text-primary font-semibold"
          >
            mães solo
          </HoverInfo>{" "}
          no Brasil.
          <br />
          <span className="text-muted-foreground text-sm sm:text-lg md:text-xl">
            Mais do que a população inteira de{" "}
            <HoverInfo tooltip="10,4 milhões de habitantes (Eurostat 2023)">
              Portugal
            </HoverInfo>.
          </span>
        </p>
      </div>

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
    </SlideContainer>
  );
};

export default SlideOpening;
