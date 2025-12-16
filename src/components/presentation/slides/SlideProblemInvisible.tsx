import SlideContainer from "../SlideContainer";
import { CreditCard, ShoppingBag, Receipt } from "lucide-react";

type TransitionType = "fade-zoom" | "slide-left" | "slide-right" | "slide-up" | "zoom-rotate" | "blur-scale";

interface SlideProblemInvisibleProps {
  isActive: boolean;
  transition?: TransitionType;
}

const SlideProblemInvisible = ({ isActive, transition }: SlideProblemInvisibleProps) => {
  const invisibleCosts = [
    { icon: CreditCard, label: "Taxa que veio sem avisar", delay: "delay-200" },
    { icon: ShoppingBag, label: "Lanche de R$12 que virou R$200", delay: "delay-400" },
    { icon: Receipt, label: "Conta esquecida", delay: "delay-600" },
  ];

  return (
    <SlideContainer isActive={isActive} transition={transition}>
      <div className="space-y-6 sm:space-y-12 text-center">
        {/* Main question */}
        <div className={`space-y-4 ${isActive ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-black">
            Para onde foi o <span className="text-gradient">dinheiro</span>?
          </h2>
          <p className="text-lg sm:text-2xl md:text-3xl text-foreground/60">
            O maior inimigo não é a conta grande
          </p>
        </div>

        {/* Invisible costs */}
        <div className={`${isActive ? 'animate-fade-up delay-100' : 'opacity-0'}`}>
          <div className="inline-block bg-card border border-primary/30 rounded-2xl p-4 sm:p-8 md:p-10">
            <p className="text-xl sm:text-2xl md:text-4xl font-bold text-primary mb-4 sm:mb-8">
              É o gasto invisível
            </p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10">
              {invisibleCosts.map((cost, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center gap-3 ${isActive ? `animate-scale-in ${cost.delay}` : 'opacity-0'}`}
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-muted flex items-center justify-center">
                    <cost.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                  </div>
                  <span className="text-sm md:text-base text-foreground/70 max-w-32 text-center">
                    {cost.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className={`max-w-3xl mx-auto ${isActive ? 'animate-fade-up delay-700' : 'opacity-0'}`}>
          <blockquote className="border-l-4 border-primary pl-6 py-2 text-left">
            <p className="text-lg sm:text-xl md:text-2xl text-foreground/70 italic">
              "Eu já vi minha prima chorar no fim do mês sem entender como o dinheiro acabou.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-primary font-semibold mt-2">
              Não é falta de esforço. É falta de ferramenta."
            </p>
          </blockquote>
        </div>
      </div>

      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 text-6xl text-primary/5 font-bold animate-float">R$</div>
        <div className="absolute bottom-1/4 right-10 text-8xl text-primary/5 font-bold animate-float delay-300">?</div>
      </div>
    </SlideContainer>
  );
};

export default SlideProblemInvisible;
