import SlideContainer from "../SlideContainer";
import yaLogo from "@/assets/ya-logo.png";
import { Heart } from "lucide-react";

interface SlideClosingProps {
  isActive: boolean;
}

const SlideClosing = ({ isActive }: SlideClosingProps) => {
  return (
    <SlideContainer isActive={isActive}>
      <div className="text-center space-y-12">
        {/* Logo with glow */}
        <div className={`relative inline-block ${isActive ? 'animate-scale-in' : 'opacity-0'}`}>
          <img 
            src={yaLogo} 
            alt="Yá Logo" 
            className="h-32 md:h-48 object-contain mx-auto"
          />
          <div className="absolute inset-0 bg-primary/30 blur-[60px] -z-10 rounded-full" />
        </div>

        {/* Main message */}
        <div className={`space-y-4 ${isActive ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-5xl font-bold">
            Yá: <span className="text-gradient">mãe</span>, em yorubá.
          </h2>
          <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto">
            Uma homenagem às mulheres que sustentam esse país sem ninguém ver.
          </p>
        </div>

        {/* Heart animation */}
        <div className={`${isActive ? 'animate-fade-in delay-400' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 text-primary">
            <Heart className="w-6 h-6 animate-pulse" fill="currentColor" />
            <span className="text-lg font-medium">Uma IA que cuida de quem cuida de todo mundo</span>
            <Heart className="w-6 h-6 animate-pulse" fill="currentColor" />
          </div>
        </div>

        {/* CTA */}
        <div className={`space-y-6 ${isActive ? 'animate-fade-up delay-600' : 'opacity-0'}`}>
          <div className="inline-block bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-8 border border-primary/30">
            <p className="text-2xl md:text-3xl font-bold text-gradient mb-2">
              Obrigada!
            </p>
            <p className="text-foreground/60">
              Adriele Ornellas — Apresentadora
            </p>
          </div>
        </div>

        {/* Social links */}
        <div className={`flex justify-center gap-4 ${isActive ? 'animate-fade-up delay-700' : 'opacity-0'}`}>
          {[
            { name: "Adriele", url: "https://www.linkedin.com/in/adrieleornellas/" },
            { name: "Péricles", url: "https://www.linkedin.com/in/olipericles/" },
            { name: "Luã", url: "https://www.linkedin.com/in/luaamota/" },
          ].map((person, i) => (
            <a
              key={i}
              href={person.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-primary/50 hover:text-primary transition-colors"
            >
              {person.name}
            </a>
          ))}
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-2 h-2 bg-primary rounded-full animate-pulse" />
        <div className="absolute top-20 right-20 w-3 h-3 bg-secondary rounded-full animate-pulse delay-200" />
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-accent rounded-full animate-pulse delay-400" />
        <div className="absolute bottom-40 right-1/4 w-4 h-4 bg-primary/50 rounded-full animate-pulse delay-300" />
      </div>
    </SlideContainer>
  );
};

export default SlideClosing;
