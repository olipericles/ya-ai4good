import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Clock, Volume2, User } from "lucide-react";
import SlideWaiting, { SLIDE_WAITING_STEPS } from "./bc2026v2/SlideWaiting";
import SlideImpact, { SLIDE_IMPACT_STEPS } from "./bc2026v2/SlideImpact";
import SlideProblemV2, { SLIDE_PROBLEM_V2_STEPS } from "./bc2026v2/SlideProblemV2";
import SlideSolutionV2, { SLIDE_SOLUTION_V2_STEPS } from "./bc2026v2/SlideSolutionV2";
import SlideTestV2, { SLIDE_TEST_V2_STEPS } from "./bc2026v2/SlideTestV2";
import SlideVoicesV2, { SLIDE_VOICES_V2_STEPS } from "./bc2026v2/SlideVoicesV2";
import SlideScaleV2, { SLIDE_SCALE_V2_STEPS } from "./bc2026v2/SlideScaleV2";
import SlidePath, { SLIDE_PATH_STEPS } from "./bc2026v2/SlidePath";
import SlideTeamV2, { SLIDE_TEAM_V2_STEPS } from "./bc2026v2/SlideTeamV2";
import SlideQRCode, { SLIDE_QRCODE_STEPS } from "./bc2026v2/SlideQRCode";

const STEPS_PER_SLIDE = [
    SLIDE_WAITING_STEPS, SLIDE_IMPACT_STEPS, SLIDE_PROBLEM_V2_STEPS,
    SLIDE_SOLUTION_V2_STEPS, SLIDE_TEST_V2_STEPS, SLIDE_VOICES_V2_STEPS,
    SLIDE_SCALE_V2_STEPS, SLIDE_PATH_STEPS, SLIDE_TEAM_V2_STEPS, SLIDE_QRCODE_STEPS,
];

const TOTAL_SLIDES = STEPS_PER_SLIDE.length;

const SCRIPTS = [
    {
        title: "SLIDE 0 — Tela de Espera",
        time: "—",
        speaker: "Ninguém",
        notes: "Logo Yá + slogan. Time caminha ao palco.",
        script: `[Slide automático, sem narração]\n\nTime se posiciona no palco.`,
    },
    {
        title: "SLIDE 1 — Impacto",
        time: "~45s",
        speaker: "Adriele",
        notes: "Tom pessoal, olhar para a plateia.",
        script: `"Minha prima cria dois filhos sozinha. Minha vizinha, três. A mãe da minha melhor amiga criou quatro. Eu cresci cercada de mulheres que faziam milagre com pouco, e que no fim do mês não sabiam explicar pra onde o dinheiro tinha ido.

(clique → 11 milhões) Essas mulheres são 11 milhões de brasileiras. (clique → Portugal) Mais do que a população inteira de Portugal. (clique → 90%) E 90% desse crescimento na última década são mulheres negras.

Isso não é estatística pra mim. É a foto da minha família."`,
    },
    {
        title: "SLIDE 2 — O Problema Invisível",
        time: "~40s",
        speaker: "Adriele",
        notes: "Tom de empatia. Frase final é a revelação.",
        script: `"O maior inimigo não é a conta grande. É o gasto invisível.

(clique) A taxa que veio sem avisar. (clique) O lanche de 12 reais que virou 200 no mês. (clique) O remédio de emergência de madrugada.

Eu já vi minha prima chorar no fim do mês sem entender como o dinheiro acabou. E não é falta de esforço.

(clique → revelação) É falta de ferramenta."`,
    },
    {
        title: "SLIDE 3 — A Solução",
        time: "~45s",
        speaker: "Luã",
        notes: "Transição: Adriele → Luã. 'É falta de ferramenta' → 'A Yá é...'",
        script: `"A Yá é uma assistente financeira que vive onde nossa usuária já vive: no WhatsApp.

(clique) Ela manda um áudio dizendo 'gastei 50 no mercado', manda foto do cupom, ou simplesmente digita. A IA transcreve, categoriza e organiza.

(clique) Sem app pra baixar. Sem formulário. Sem fricção.

(clique) 97% das pessoas de baixa renda acessam internet pelo celular. 91% usam WhatsApp todo dia. A gente não pede pra mudarem de vida, a gente entra na vida delas."`,
    },
    {
        title: "SLIDE 4 — O Teste",
        time: "~40s",
        speaker: "Luã → Péricles",
        notes: "Luã faz ponte, Péricles detalha.",
        script: `Luã:
"Mas a gente não veio aqui só com ideia. A gente veio com dados."

Péricles (assume):
"Em fevereiro de 2026, rodamos um piloto de 2 semanas com 18 mães em Salvador.

10 fizeram cadastro. 5 se engajaram de verdade, registrando gastos consistentemente. E 2 relataram transformação real na forma como enxergam suas finanças."`,
    },
    {
        title: "SLIDE 5 — As Vozes",
        time: "~60s",
        speaker: "Péricles → Adriele",
        notes: "⚠️ CORAÇÃO DO PITCH. Falar mais devagar. Deixar as citações respirarem.",
        script: `Péricles:
"E o que essas mães nos disseram mudou tudo."

Adriele (assume):
(clique → citação 1) "Uma delas me disse: 'Eu achava que o problema era o salário. Era o delivery.'

(clique → contexto) Ela descobriu que gastava mais de 300 reais por mês em delivery que não percebia. Redirecionou pra compras no mercado.

(clique → citação 2) Outra me disse: 'Pela primeira vez em 3 anos, sobrou 50 reais no fim do mês.'

50 reais. Pode parecer pouco. Mas pra quem nunca sobrou nada, é o começo de uma reserva. É dignidade."`,
    },
    {
        title: "SLIDE 6 — Escalar o Sucesso",
        time: "~50s",
        speaker: "Péricles",
        notes: "🎯 Tom de CONQUISTA. Usar 'investimento', não 'custo por mãe'.",
        script: `(clique → coluna esquerda) "A gente tá muito feliz. Porque em apenas duas semanas, com custo praticamente zero, a gente mudou a vida de duas pessoas. Duas mães que pela primeira vez conseguiram enxergar pra onde o dinheiro ia.

(clique → coluna direita) Agora imagina o que a gente pode fazer em seis meses. Com mil mães.

A tecnologia já existe. O produto já funciona. A gente só precisa de escala."`,
    },
    {
        title: "SLIDE 7 — O Caminho",
        time: "~40s",
        speaker: "Péricles",
        notes: "Tom muda: de conquista para reflexão aberta. CTA sutil.",
        script: `"Sabemos o resultado que conseguimos. Sabemos o custo para chegar a mil.

(clique) O próximo passo é encontrar essas mil mães. Talvez integrando com CRAS. (clique) Talvez com ONGs e associações que já atendem essa população. (clique) Talvez através de políticas públicas que já existem.

O WhatsApp já tá lá. A mãe já tá lá. A Yá já funciona. (clique) A gente só precisa do caminho até elas.

E se alguém aqui puder nos ajudar a encontrar esse caminho, a gente vai adorar essa conversa."`,
    },
    {
        title: "SLIDE 8 — Nós",
        time: "~50s",
        speaker: "Todos (Jogral)",
        notes: "⚠️ Precisa ensaiar o jogral. Alternativa: Adriele fecha sozinha.",
        script: `Adriele: "Somos Adriele..."
Luã: "...Luã..."
Péricles: "...e Péricles."

Adriele: "Três pessoas da periferia de Salvador."
Péricles: "A gente não estudou esse problema num paper."

TODOS JUNTOS: "A gente viveu do lado dele."

(pausa de 2 segundos)

Adriele:
"Yá significa mãe, em yorubá. São 11 milhões de mães. 22 milhões de crianças. A gente não tá só ajudando elas a controlar dinheiro. A gente tá tentando quebrar um ciclo."

(pausa)

"Obrigada."`,
    },
    {
        title: "SLIDE 9 — QR Code",
        time: "—",
        speaker: "Ninguém",
        notes: "Slide silencioso. QR Code visível para a plateia.",
        script: `[Slide de encerramento]\n\nDeixar o QR Code visível. Serve de fundo durante aplausos e perguntas.`,
    },
];

const PresentationBC2026V2Training = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentStep, setCurrentStep] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const goToSlide = useCallback((index: number) => {
        if (isTransitioning) return;
        if (index < 0 || index >= TOTAL_SLIDES) return;
        setIsTransitioning(true);
        setCurrentSlide(index);
        setCurrentStep(0);
        setTimeout(() => setIsTransitioning(false), 500);
    }, [isTransitioning]);

    const next = useCallback(() => {
        if (isTransitioning) return;
        const maxSteps = STEPS_PER_SLIDE[currentSlide];
        if (currentStep < maxSteps) {
            setCurrentStep(prev => prev + 1);
        } else {
            goToSlide(currentSlide + 1);
        }
    }, [currentSlide, currentStep, isTransitioning, goToSlide]);

    const prev = useCallback(() => {
        if (isTransitioning) return;
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
        } else if (currentSlide > 0) {
            const prevSlideIndex = currentSlide - 1;
            setIsTransitioning(true);
            setCurrentSlide(prevSlideIndex);
            setCurrentStep(STEPS_PER_SLIDE[prevSlideIndex]);
            setTimeout(() => setIsTransitioning(false), 500);
        }
    }, [currentSlide, currentStep, isTransitioning]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") {
                e.preventDefault(); next();
            } else if (e.key === "ArrowLeft") {
                e.preventDefault(); prev();
            } else if (e.key === "Home") {
                e.preventDefault(); goToSlide(0);
            } else if (e.key === "End") {
                e.preventDefault(); goToSlide(TOTAL_SLIDES - 1);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [next, prev, goToSlide]);

    const currentScript = SCRIPTS[currentSlide];

    return (
        <div className="relative w-full h-screen bg-background overflow-hidden flex">
            {/* Slide area — 60% */}
            <div className="relative w-[60%] h-full">
                <div className="absolute inset-0">
                    <SlideWaiting isActive={currentSlide === 0} step={currentStep} />
                    <SlideImpact isActive={currentSlide === 1} step={currentStep} />
                    <SlideProblemV2 isActive={currentSlide === 2} step={currentStep} />
                    <SlideSolutionV2 isActive={currentSlide === 3} step={currentStep} />
                    <SlideTestV2 isActive={currentSlide === 4} step={currentStep} />
                    <SlideVoicesV2 isActive={currentSlide === 5} step={currentStep} />
                    <SlideScaleV2 isActive={currentSlide === 6} step={currentStep} />
                    <SlidePath isActive={currentSlide === 7} step={currentStep} />
                    <SlideTeamV2 isActive={currentSlide === 8} step={currentStep} />
                    <SlideQRCode isActive={currentSlide === 9} step={currentStep} />
                </div>

                {/* Navigation */}
                <button
                    onClick={(e) => { e.stopPropagation(); prev(); }}
                    className={`absolute left-4 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full bg-card/80 border border-border backdrop-blur-sm hover:bg-primary/20 transition-all ${currentSlide === 0 && currentStep === 0 ? "opacity-30 pointer-events-none" : "opacity-100"}`}
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                    onClick={(e) => { e.stopPropagation(); next(); }}
                    className={`absolute right-4 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full bg-card/80 border border-border backdrop-blur-sm hover:bg-primary/20 transition-all ${currentSlide === TOTAL_SLIDES - 1 ? "opacity-30 pointer-events-none" : "opacity-100"}`}
                >
                    <ChevronRight className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1.5">
                    {Array.from({ length: TOTAL_SLIDES }).map((_, index) => (
                        <button
                            key={index}
                            onClick={(e) => { e.stopPropagation(); goToSlide(index); }}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${index === currentSlide ? "w-6 bg-primary" : "bg-foreground/20 hover:bg-foreground/40"}`}
                        />
                    ))}
                </div>

                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.1),transparent_50%)] pointer-events-none" />
            </div>

            {/* Script panel — 40% */}
            <div className="w-[40%] h-full bg-card border-l border-border p-6 overflow-y-auto">
                <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-xl font-bold text-foreground">{currentScript.title}</h2>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>{currentScript.time}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 mb-3 p-2 rounded-lg bg-muted/30">
                        <User className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">{currentScript.speaker}</span>
                    </div>

                    {currentScript.notes && (
                        <div className="flex items-start gap-2 p-3 rounded-lg bg-primary/10 border border-primary/30">
                            <Volume2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <p className="text-sm text-primary font-medium">{currentScript.notes}</p>
                        </div>
                    )}
                </div>

                <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Roteiro</h3>
                    <div className="text-foreground leading-relaxed whitespace-pre-line text-base">
                        {currentScript.script}
                    </div>
                </div>

                {/* Step indicator */}
                {STEPS_PER_SLIDE[currentSlide] > 0 && (
                    <div className="mt-6 p-3 rounded-lg bg-muted/30 border border-border">
                        <p className="text-xs text-muted-foreground">
                            Sub-step: <span className="text-primary font-bold">{currentStep}</span> / {STEPS_PER_SLIDE[currentSlide]}
                        </p>
                    </div>
                )}

                <div className="mt-8 pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground text-center">
                        🔒 Versão de treino V2 • {currentSlide} / {TOTAL_SLIDES - 1}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PresentationBC2026V2Training;
