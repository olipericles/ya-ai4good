import SlideContainer from "../SlideContainer";
import AnimatedNumber from "../AnimatedNumber";

interface SlideProblemDimensionProps {
  isActive: boolean;
}

const SlideProblemDimension = ({ isActive }: SlideProblemDimensionProps) => {
  const stats = [
    { value: 64, suffix: "%", label: "vivem em situação de pobreza", delay: "delay-100" },
    { value: 39, suffix: "%", label: "menos renda que homens casados com filhos", delay: "delay-300" },
    { value: 72, suffix: "%", label: "enfrentam essa jornada sozinhas", delay: "delay-500" },
  ];

  return (
    <SlideContainer isActive={isActive}>
      <div className="space-y-12">
        {/* Title */}
        <h2 className={`text-3xl md:text-5xl font-bold text-center ${isActive ? 'animate-fade-up' : 'opacity-0'}`}>
          A Falta de <span className="text-gradient">Estrutura</span>, Não de Esforço
        </h2>

        {/* Stats grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-card border border-border/50 rounded-2xl p-8 text-center hover:border-primary/50 transition-all duration-300 ${isActive ? `animate-scale-in ${stat.delay}` : 'opacity-0'}`}
            >
              <div className="text-5xl md:text-6xl font-black text-primary mb-4">
                <AnimatedNumber 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  isActive={isActive} 
                  duration={1500 + index * 200}
                />
              </div>
              <p className="text-foreground/70 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Highlight */}
        <div className={`relative ${isActive ? 'animate-fade-up delay-700' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-secondary/20 via-primary/20 to-secondary/20 rounded-2xl p-6 md:p-8 border border-primary/20">
            <p className="text-center text-xl md:text-2xl">
              <span className="text-primary font-bold">90%</span> do aumento na última década: 
              <span className="text-secondary font-semibold"> mulheres negras e pardas</span>
            </p>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
    </SlideContainer>
  );
};

export default SlideProblemDimension;
