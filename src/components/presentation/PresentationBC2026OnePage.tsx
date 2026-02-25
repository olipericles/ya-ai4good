import { CreditCard, Pill, Bike, TrendingUp, Store, Receipt, MessageCircle, ExternalLink, Smartphone, Brain, LineChart, BarChart3, Mic, Camera, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import yaLogo from "@/assets/ya-logo.png";

const PresentationBC2026OnePage = () => {
    const problems = [
        { icon: CreditCard, label: "Taxa surpresa", emoji: "💳" },
        { icon: Pill, label: "Remédio de emergência", emoji: "💊" },
        { icon: Bike, label: "Delivery acumulado", emoji: "🛵" },
        { icon: TrendingUp, label: "Juros sem avisar", emoji: "📈" },
        { icon: Store, label: "Farmácia 24h", emoji: "🏪" },
        { icon: Receipt, label: "R$12 que virou R$200", emoji: "🧾" },
    ];

    const features = [
        { icon: Mic, title: "Áudio", desc: "Fala um áudio, Yá entende" },
        { icon: Camera, title: "Foto do cupom", desc: "OCR automático" },
        { icon: Brain, title: "IA empática", desc: "Tom acolhedor, sem julgamento" },
        { icon: LineChart, title: "Insights", desc: "Padrões que você não vê" },
    ];

    const funnel = [
        { label: "Alcance", value: "23 mães contatadas", pct: "100%", bg: "bg-primary/20" },
        { label: "Interesse", value: "18 querem participar", pct: "78%", bg: "bg-primary/30" },
        { label: "Piloto", value: "10 vagas iniciais", pct: "43%", bg: "bg-primary/40" },
    ];

    const voices = [
        { quote: "Eu nunca soube pra onde meu dinheiro ia. Agora eu mando um áudio e ela me mostra.", author: "Mãe solo, 28 anos, Salvador" },
        { quote: "É como ter uma amiga que entende de dinheiro e não me julga.", author: "Mãe solo, 34 anos, Salvador" },
        { quote: "Minha filha me viu usando e disse: mãe, você tá ficando esperta!", author: "Mãe solo, 41 anos, Salvador" },
    ];

    const scaleSteps = [
        { phase: "Fase 1", title: "Piloto Salvador", desc: "10 mães, validação intensiva", metrics: "NPS, retenção, economia real", icon: Users, color: "text-primary" },
        { phase: "Fase 2", title: "Expansão Regional", desc: "100 mães, 3 comunidades", metrics: "Parcerias ONGs locais", icon: BarChart3, color: "text-secondary" },
        { phase: "Fase 3", title: "Escala Nacional", desc: "1.000+ mães, modelo replicável", metrics: "API aberta, dados públicos", icon: LineChart, color: "text-accent" },
    ];

    const team = [
        { name: "Adriele Ornellas", role: "Pessoas & Comunidades", role2: "Conexão direta com mães solo", img: "/img/equipe-adriele-real.png" },
        { name: "Péricles Oliveira", role: "IA & Estratégia", role2: "Arquitetura e visão de produto", img: "/img/equipe-pericles-real.png" },
        { name: "Luã Mota", role: "Software & Dados", role2: "Backend, infra e análise", img: "/img/equipe-lua-real.png" },
    ];

    const whatsappNumber = "5571992433241";
    const initialMessage = encodeURIComponent("Olá! Quero participar do piloto da Yá");
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${initialMessage}`;
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(whatsappLink)}`;

    return (
        <div className="bg-background text-foreground">
            {/* Background gradient */}
            <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.1),transparent_50%)] pointer-events-none z-0" />

            {/* 1. Opening */}
            <section className="relative min-h-screen flex items-center justify-center p-6 md:p-12">
                <div className="text-center space-y-8 max-w-5xl mx-auto">
                    <div className="space-y-4">
                        <h1 className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-primary via-orange-400 to-primary bg-clip-text text-transparent">
                            11 milhões
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                            de lares chefiados por mães solo no Brasil
                        </p>
                    </div>
                    <div className="mt-12 p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm max-w-xl mx-auto">
                        <p className="text-lg md:text-xl text-foreground/90">
                            <span className="text-primary font-bold">90%</span> do crescimento na última década:
                            <span className="text-primary font-semibold"> mulheres negras e pardas</span>
                        </p>
                    </div>
                    <div className="mt-8 flex justify-center">
                        <img src={yaLogo} alt="Yá Logo" className="h-24 md:h-32 object-contain" />
                    </div>
                    <p className="text-sm text-muted-foreground/60 mt-8">Fonte: FGV/IBRE 2022</p>
                </div>
            </section>

            {/* 2. Problem */}
            <section className="relative min-h-screen flex items-center justify-center p-6 md:p-12 bg-card/20">
                <div className="text-center space-y-10 max-w-5xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground">
                        Pra onde foi o dinheiro?
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mt-8">
                        {problems.map((problem, index) => (
                            <div key={index} className="p-4 md:p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:scale-105">
                                <span className="text-3xl md:text-4xl mb-2 block">{problem.emoji}</span>
                                <p className="text-sm md:text-base text-foreground/80 font-medium">{problem.label}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 max-w-2xl mx-auto">
                        <p className="text-xl md:text-2xl text-muted-foreground italic">
                            "Não é falta de esforço. <span className="text-primary font-semibold">É falta de ferramenta.</span>"
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. Solution */}
            <section className="relative min-h-screen flex items-center justify-center p-6 md:p-12">
                <div className="text-center space-y-10 max-w-5xl mx-auto">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-6xl font-bold text-foreground">
                            Yá no <span className="text-primary">WhatsApp</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Onde <span className="text-primary font-bold">98%</span> já estão. Sem baixar nada. Sem aprender nada novo.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <div className="relative">
                            <Smartphone className="w-16 h-16 md:w-24 md:h-24 text-primary" />
                            <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#25D366] animate-ping" />
                            <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#25D366]" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {features.map((feature, index) => (
                            <div key={index} className="p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm text-center hover:border-primary/30 transition-colors">
                                <feature.icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                                <h3 className="font-bold mb-1">{feature.title}</h3>
                                <p className="text-sm text-muted-foreground">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Test/Pilot */}
            <section className="relative min-h-screen flex items-center justify-center p-6 md:p-12 bg-card/20">
                <div className="text-center space-y-10 max-w-5xl mx-auto">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-6xl font-bold text-foreground">
                            Piloto <span className="text-primary">Salvador</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Pesquisa de campo real — não é dado de paper.
                        </p>
                    </div>
                    <div className="max-w-2xl mx-auto space-y-4">
                        {funnel.map((step, index) => (
                            <div key={index} className={`p-6 rounded-2xl ${step.bg} border border-border/30 backdrop-blur-sm flex items-center justify-between`}>
                                <div className="text-left">
                                    <p className="text-sm text-muted-foreground font-medium">{step.label}</p>
                                    <p className="text-lg font-bold text-foreground">{step.value}</p>
                                </div>
                                <span className="text-2xl font-black text-primary">{step.pct}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-lg text-muted-foreground">
                        <span className="text-primary font-bold">78%</span> de conversão espontânea — sem marketing, sem incentivo.
                    </p>
                </div>
            </section>

            {/* 5. Voices */}
            <section className="relative min-h-screen flex items-center justify-center p-6 md:p-12">
                <div className="text-center space-y-10 max-w-5xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground">
                        Vozes que <span className="text-primary">importam</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {voices.map((voice, index) => (
                            <div key={index} className="p-6 md:p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm text-left">
                                <p className="text-lg text-foreground/90 italic mb-4">"{voice.quote}"</p>
                                <p className="text-sm text-muted-foreground">— {voice.author}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Scale */}
            <section className="relative min-h-screen flex items-center justify-center p-6 md:p-12 bg-card/20">
                <div className="text-center space-y-10 max-w-5xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground">
                        Escalar o <span className="text-primary">sucesso</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {scaleSteps.map((step, index) => (
                            <div key={index} className="p-6 md:p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm text-center hover:border-primary/30 transition-colors">
                                <step.icon className={`w-12 h-12 mx-auto mb-4 ${step.color}`} />
                                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{step.phase}</p>
                                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                <p className="text-muted-foreground mb-3">{step.desc}</p>
                                <p className="text-sm text-primary font-medium">{step.metrics}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Vision */}
            <section className="relative min-h-screen flex items-center justify-center p-6 md:p-12">
                <div className="text-center space-y-10 max-w-5xl mx-auto">
                    <h2 className="text-5xl md:text-8xl font-bold">
                        <span className="text-primary">1.000</span> mães
                    </h2>
                    <p className="text-2xl md:text-3xl text-muted-foreground">em 6 meses</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-8">
                        <div className="p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
                            <p className="text-3xl font-bold text-primary mb-2">R$ 150</p>
                            <p className="text-muted-foreground">economia média/mês por mãe</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
                            <p className="text-3xl font-bold text-secondary mb-2">R$ 1.8M</p>
                            <p className="text-muted-foreground">impacto econômico anual projetado</p>
                        </div>
                    </div>
                    <p className="text-xl text-foreground/70 max-w-2xl mx-auto italic">
                        "Cada real economizado é um remédio, um alimento, uma oportunidade."
                    </p>
                </div>
            </section>

            {/* 8. Team */}
            <section className="relative min-h-screen flex items-center justify-center p-6 md:p-12 bg-card/20">
                <div className="text-center space-y-10 max-w-5xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground">
                        Quem <span className="text-primary">constrói</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {team.map((member, index) => (
                            <div key={index} className="flex flex-col items-center gap-4">
                                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-primary/30">
                                    <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="text-center">
                                    <p className="text-lg md:text-xl font-semibold text-foreground">{member.name}</p>
                                    <p className="text-sm md:text-base text-muted-foreground">{member.role}</p>
                                    <p className="text-sm md:text-base text-muted-foreground">{member.role2}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 max-w-2xl mx-auto">
                        <p className="text-lg md:text-xl text-muted-foreground italic">
                            "A gente não estudou esse problema num paper - <span className="text-primary font-semibold">a gente viveu do lado dele.</span>"
                        </p>
                    </div>
                </div>
            </section>

            {/* 9. Closing */}
            <section className="relative min-h-screen flex items-center justify-center p-6 md:p-12">
                <div className="text-center space-y-10 flex flex-col items-center justify-center">
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground">
                        11M mães. 22M crianças.
                    </h2>
                    <div className="my-8 flex justify-center">
                        <img src={yaLogo} alt="Yá Logo" className="h-32 md:h-48 object-contain" />
                    </div>
                    <p className="text-xl md:text-2xl text-muted-foreground">
                        <span className="text-primary font-semibold">mãe</span>, em yorubá
                    </p>
                    <p className="text-lg md:text-xl text-foreground/80 max-w-xl mx-auto">
                        Uma IA que cuida de quem cuida de todo mundo.
                    </p>
                    <div className="mt-12">
                        <p className="text-3xl md:text-4xl font-bold text-primary flex items-center gap-3">
                            <Heart className="w-8 h-8" fill="currentColor" />
                            Obrigada.
                            <Heart className="w-8 h-8" fill="currentColor" />
                        </p>
                    </div>
                </div>
            </section>

            {/* 10. Demo */}
            <section className="relative min-h-screen flex items-center justify-center p-6 md:p-12 bg-card/20">
                <div className="flex flex-col items-center justify-center gap-8 md:gap-12 max-w-6xl mx-auto">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-5xl font-black">
                            Experimente a <span className="text-primary">Yá</span> agora!
                        </h2>
                        <p className="text-base md:text-xl text-foreground/60">
                            Escaneie o QR Code ou clique no botão para começar
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-32 w-full">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-[3rem] group-hover:bg-primary/30 transition-all duration-500" />
                            <div className="relative bg-card border border-border p-6 rounded-[2.5rem] shadow-2xl overflow-hidden">
                                <img src={qrCodeUrl} alt="WhatsApp QR Code" className="w-56 h-56 md:w-80 md:h-80 rounded-2xl shadow-inner bg-white p-4" />
                                <div className="absolute top-0 right-0 p-3">
                                    <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg">
                                        <MessageCircle className="w-5 h-5 text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center md:items-start gap-6 md:gap-8 max-w-sm">
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
            </section>
        </div>
    );
};

export default PresentationBC2026OnePage;
