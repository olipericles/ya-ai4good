import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Clock, Volume2 } from "lucide-react";
import SlideOpening from "./bc2026/SlideOpening";
import SlideProblem from "./bc2026/SlideProblem";
import SlideSolution from "./bc2026/SlideSolution";
import SlideTest from "./bc2026/SlideTest";
import SlideVoices from "./bc2026/SlideVoices";
import SlideScale from "./bc2026/SlideScale";
import SlideVision from "./bc2026/SlideVision";
import SlideTeam from "./bc2026/SlideTeam";
import SlideClosing from "./bc2026/SlideClosing";
import SlideDemo from "./bc2026/SlideDemo";

// Roteiro completo para cada slide - 6:30 de apresentação
const SCRIPTS = [
    {
        title: "SLIDE 1 - Abertura",
        time: "45s",
        notes: "Tom pessoal, olhar para a plateia",
        script: `"Minha prima cria dois filhos sozinha. Minha vizinha, três. A mãe da minha melhor amiga criou quatro. Eu cresci cercada de mulheres que faziam milagre com pouco, e que no fim do mês não sabiam explicar pra onde o dinheiro tinha ido.

Essas mulheres são 11 milhões de brasileiras. Mais do que a população inteira de Portugal. E 90% desse crescimento na última década são mulheres negras.

Isso não é estatística pra mim, é a foto da minha família."`
    },
    {
        title: "SLIDE 2 - O Problema Invisível",
        time: "40s",
        notes: "Tom de empatia",
        script: `"O maior inimigo não é a conta grande, é o gasto invisível. A taxa que veio sem avisar. O remédio de emergência de madrugada. O lanche de 12 reais que virou 200 no mês.

Eu já vi minha prima chorar no fim do mês sem entender como o dinheiro acabou. E não é falta de esforço.

É falta de ferramenta."`
    },
    {
        title: "SLIDE 3 - A Solução",
        time: "45s",
        notes: "Tom de apresentação do produto",
        script: `"A Yá é uma assistente financeira que vive onde nossa usuária já vive: no WhatsApp.

Ela manda um áudio dizendo 'gastei 50 no mercado', manda foto do cupom, ou simplesmente digita. A IA transcreve, categoriza e organiza.

Sem app pra baixar. Sem formulário. Sem fricção.

97% das pessoas de baixa renda acessam internet pelo celular. 91% usam WhatsApp todo dia. A gente não pede pra mudarem de vida, a gente entra na vida delas."`
    },
    {
        title: "SLIDE 4 - O Teste",
        time: "40s",
        notes: "Tom de dados/resultados",
        script: `"Mas a gente não veio aqui só com ideia. A gente veio com dados.

Em fevereiro de 2026, rodamos um piloto de 2 semanas com 18 mães em Salvador.

10 fizeram cadastro. 5 se engajaram de verdade, registrando gastos consistentemente. E 2 relataram transformação real na forma como enxergam suas finanças."`
    },
    {
        title: "SLIDE 5 - As Vozes",
        time: "60s",
        notes: "⚠️ CORAÇÃO DO PITCH - Falar mais devagar. Deixar as citações respirarem.",
        script: `[pausa, tom mais lento]

"Uma delas me disse: 'Eu achava que o problema era o salário. Era o delivery.'

Ela descobriu que gastava mais de 300 reais por mês em delivery que não percebia. Redirecionou pra compras no mercado.

Outra me disse: 'Pela primeira vez em 3 anos, sobrou 50 reais no fim do mês.'

50 reais. Pode parecer pouco. Mas pra quem nunca sobrou nada, é o começo de uma reserva. É dignidade."`
    },
    {
        title: "SLIDE 6 - Escalar o Sucesso",
        time: "50s",
        notes: "🎯 Tom de CONQUISTA, não de problema. Mostrar orgulho.",
        script: `[tom de conquista]

"A gente tá muito feliz. Porque em apenas duas semanas, com custo praticamente zero, a gente mudou a vida de duas pessoas.

Duas mães que pela primeira vez conseguiram enxergar pra onde o dinheiro ia.

Agora imagina o que a gente pode fazer em seis meses. Com mil mães.

O custo por mãe é menos de 5 reais por mês. A tecnologia já existe. O produto já funciona. A gente só precisa de escala."`
    },
    {
        title: "SLIDE 7 - Visão de Futuro",
        time: "40s",
        notes: "Projetar para frente com confiança",
        script: `"Nosso próximo passo é levar a Yá pra mil mães nos próximos seis meses.

Integrar com CRAS, com ONGs, com programas de assistência social.

A gente não tá só construindo um produto, a gente tá construindo um assistente social digital.

Uma ferramenta que pode entrar em qualquer política pública que atenda mães. Porque o WhatsApp já tá lá. A mãe já tá lá. Só faltava a Yá."`
    },
    {
        title: "SLIDE 8 - Time",
        time: "40s",
        notes: "Tom de conexão pessoal",
        script: `"Somos Adriele, Péricles e Luã. Três pessoas pretas da periferia de Salvador.

A gente não estudou esse problema num paper, a gente viveu do lado dele.

Cada um de nós tem mãe solo na família, na rua, na história.

Estamos construindo a ferramenta que a gente queria que existisse pra elas."`
    },
    {
        title: "SLIDE 9 - Fechamento",
        time: "30s",
        notes: "⚠️ Metade da velocidade. Olho no público no 'Obrigada'. Não explicar mais nada depois.",
        script: `[tom mais lento]

"Yá significa mãe em yorubá.

São 11 milhões de mães. 22 milhões de crianças.

A gente não tá só ajudando elas a controlar dinheiro, a gente tá tentando quebrar um ciclo.

Pra que esses filhos cresçam vendo menos estresse. E mais perspectiva."

[pausa de 2 segundos, olha pro público]

"Obrigada."`
    },
    {
        title: "SLIDE 10 - Demo",
        time: "—",
        notes: "Slide de encerramento com QR Code",
        script: `[Slide silencioso para demonstração]

Deixar o QR Code visível para a plateia escanear se desejarem experimentar a Yá.`
    }
];

const TOTAL_SLIDES = 10;

const PresentationBC2026Training = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const goToSlide = useCallback((index: number) => {
        if (isTransitioning) return;
        if (index < 0 || index >= TOTAL_SLIDES) return;

        setIsTransitioning(true);
        setCurrentSlide(index);

        setTimeout(() => {
            setIsTransitioning(false);
        }, 500);
    }, [isTransitioning]);

    const nextSlide = useCallback(() => {
        goToSlide(currentSlide + 1);
    }, [currentSlide, goToSlide]);

    const prevSlide = useCallback(() => {
        goToSlide(currentSlide - 1);
    }, [currentSlide, goToSlide]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") {
                e.preventDefault();
                nextSlide();
            } else if (e.key === "ArrowLeft") {
                e.preventDefault();
                prevSlide();
            } else if (e.key === "Home") {
                e.preventDefault();
                goToSlide(0);
            } else if (e.key === "End") {
                e.preventDefault();
                goToSlide(TOTAL_SLIDES - 1);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [nextSlide, prevSlide, goToSlide]);

    const currentScript = SCRIPTS[currentSlide];

    return (
        <div className="relative w-full h-screen bg-background overflow-hidden flex">
            {/* Slide area - 60% */}
            <div className="relative w-[60%] h-full">
                {/* Slides */}
                <div className="absolute inset-0">
                    <SlideOpening isActive={currentSlide === 0} transition="fade-zoom" />
                    <SlideProblem isActive={currentSlide === 1} transition="slide-up" />
                    <SlideSolution isActive={currentSlide === 2} transition="blur-scale" />
                    <SlideTest isActive={currentSlide === 3} transition="zoom-rotate" />
                    <SlideVoices isActive={currentSlide === 4} transition="fade-zoom" />
                    <SlideScale isActive={currentSlide === 5} transition="slide-left" />
                    <SlideVision isActive={currentSlide === 6} transition="zoom-rotate" />
                    <SlideTeam isActive={currentSlide === 7} transition="blur-scale" />
                    <SlideClosing isActive={currentSlide === 8} transition="fade-zoom" />
                    <SlideDemo isActive={currentSlide === 9} transition="slide-up" />
                </div>

                {/* Navigation arrows */}
                <button
                    onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                    className={`absolute left-4 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full bg-card/80 border border-border backdrop-blur-sm hover:bg-primary/20 transition-all ${currentSlide === 0 ? "opacity-30 pointer-events-none" : "opacity-100"}`}
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                    onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                    className={`absolute right-4 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full bg-card/80 border border-border backdrop-blur-sm hover:bg-primary/20 transition-all ${currentSlide === TOTAL_SLIDES - 1 ? "opacity-30 pointer-events-none" : "opacity-100"}`}
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>

                {/* Slide indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1.5">
                    {Array.from({ length: TOTAL_SLIDES }).map((_, index) => (
                        <button
                            key={index}
                            onClick={(e) => { e.stopPropagation(); goToSlide(index); }}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${index === currentSlide ? "w-6 bg-primary" : "bg-foreground/20 hover:bg-foreground/40"}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Background gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.1),transparent_50%)] pointer-events-none" />
            </div>

            {/* Script panel - 40% */}
            <div className="w-[40%] h-full bg-card border-l border-border p-6 overflow-y-auto">
                {/* Header */}
                <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-xl font-bold text-foreground">{currentScript.title}</h2>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>{currentScript.time}</span>
                        </div>
                    </div>
                    {currentScript.notes && (
                        <div className="flex items-start gap-2 p-3 rounded-lg bg-primary/10 border border-primary/30">
                            <Volume2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <p className="text-sm text-primary font-medium">{currentScript.notes}</p>
                        </div>
                    )}
                </div>

                {/* Script */}
                <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Roteiro</h3>
                    <div className="text-foreground leading-relaxed whitespace-pre-line text-base">
                        {currentScript.script}
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-8 pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground text-center">
                        🔒 Versão de treino • {currentSlide + 1} / {TOTAL_SLIDES}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PresentationBC2026Training;
