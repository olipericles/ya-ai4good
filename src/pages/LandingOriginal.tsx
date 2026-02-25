import { useEffect } from "react";
import { Heart } from "lucide-react";
import yaLogo from "@/assets/ya-logo.png";

const LandingOriginal = () => {
    useEffect(() => {
        document.title = "Yá | Assistente Financeiro para Mães Solo | AI4Good 2026";
        const meta = document.querySelector('meta[name="description"]');
        if (meta) {
            meta.setAttribute("content", "Yá - Assistente financeiro via WhatsApp para mães solo brasileiras. Top 3 AI4Good 2026 — Harvard & MIT.");
        }
    }, []);

    const team = [
        { name: "Péricles Oliveira", role: "Estrategista de IA e Negócios", img: "/img/equipe-pericles-real.png", linkedin: "https://www.linkedin.com/in/olipericles/" },
        { name: "Adriele Ornellas", role: "Especialista em Pessoas e Comunidades", img: "/img/equipe-adriele-real.png", linkedin: "https://www.linkedin.com/in/adrieleornellas/" },
        { name: "Luã Mota", role: "Arquiteto de Software", img: "/img/equipe-lua-real.png", linkedin: "https://www.linkedin.com/in/lua-mota/" },
    ];

    const stats = [
        { value: "64%", label: "vivem em situação de pobreza" },
        { value: "39%", label: "menos renda que homens casados com filhos" },
        { value: "72%", label: "enfrentam essa jornada sozinhas" },
    ];

    const differentials = [
        { label: "Output", other: "Responde só em texto", ya: "🎙️ Responde em áudio" },
        { label: "Tom", other: "Genérico", ya: "💬 Linguagem acessível" },
        { label: "Foco", other: "Classe média", ya: "👩‍👧 Mães solo" },
        { label: "Impacto", other: "Individual", ya: "📊 Dados para políticas públicas" },
        { label: "Comunidade", other: "Não possui", ya: "🤝 Rede de apoio entre usuárias" },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Header */}
            <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <img src={yaLogo} alt="Yá" className="h-8 object-contain" />
                    <nav className="hidden md:flex items-center gap-6">
                        <a href="#problema" className="text-sm text-muted-foreground hover:text-foreground transition-colors">O Problema</a>
                        <a href="#solucao" className="text-sm text-muted-foreground hover:text-foreground transition-colors">A Solução</a>
                        <a href="#impacto" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Impacto</a>
                        <a href="#equipe" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Equipe</a>
                    </nav>
                    <a
                        href="https://wa.me/5571992433141?text=Ol%C3%A1!%20Quero%20participar%20do%20piloto%20da%20Y%C3%A1"
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded-full bg-gradient-hero text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
                    >
                        Fale Conosco
                    </a>
                </div>
            </header>

            {/* Hero */}
            <section className="relative py-20 sm:py-28 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.15),transparent_60%)] pointer-events-none" />
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm font-semibold text-primary mb-8 animate-fade-up">
                        🏆 Top 3 AI4Good 2026 — Harvard & MIT
                    </div>

                    <img src={yaLogo} alt="Yá Logo" className="h-24 sm:h-32 object-contain mx-auto mb-8 animate-fade-up delay-100" />

                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-black leading-tight mb-6 animate-fade-up delay-200">
                        Consciência financeira na{" "}
                        <span className="text-gradient">palma da mão</span>
                        <br />para quem mais precisa.
                    </h1>

                    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 animate-fade-up delay-300">
                        <span className="text-gradient font-bold text-2xl sm:text-3xl">11 milhões</span>{" "}
                        de lares chefiados por mães solo no Brasil.
                    </p>
                    <p className="text-sm text-muted-foreground mb-8 animate-fade-up delay-300">
                        Mais do que a população inteira de Portugal.
                    </p>

                    <p className="text-foreground/60 italic mb-10 animate-fade-up delay-400">
                        "Yá significa 'mãe' em Yorubá. Um nome que carrega ancestralidade e acolhimento."
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-500">
                        <a
                            href="https://wa.me/5571992433141?text=Ol%C3%A1!%20Quero%20participar%20do%20piloto%20da%20Y%C3%A1"
                            target="_blank"
                            rel="noreferrer"
                            className="px-8 py-3 rounded-xl bg-gradient-hero text-primary-foreground font-semibold hover:opacity-90 transition-opacity shadow-lg"
                        >
                            Quero Participar do Piloto
                        </a>
                        <a
                            href="#solucao"
                            className="px-8 py-3 rounded-xl border border-border bg-card/50 backdrop-blur-sm text-foreground font-medium hover:bg-card transition-colors"
                        >
                            Conhecer o Projeto ↓
                        </a>
                    </div>
                </div>
            </section>

            {/* O Problema */}
            <section id="problema" className="py-20 sm:py-28">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-xs uppercase tracking-widest text-primary font-semibold">O Problema</span>
                        <h2 className="text-3xl sm:text-4xl font-bold mt-3">O Peso Invisível</h2>
                    </div>

                    <div className="bg-gradient-hero rounded-2xl p-8 sm:p-12 mb-12 relative overflow-hidden">
                        <div className="absolute inset-0 bg-primary/20 blur-[80px] pointer-events-none" />
                        <blockquote className="relative z-10 text-lg sm:text-2xl font-medium italic text-center text-primary-foreground leading-relaxed">
                            "Eu já vi minha prima chorar no fim do mês sem entender como o dinheiro acabou.
                            <br /><strong>Não é falta de esforço. É falta de ferramenta."</strong>
                        </blockquote>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {stats.map((stat) => (
                            <div key={stat.label} className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-colors">
                                <div className="text-4xl sm:text-5xl font-black text-gradient mb-2">{stat.value}</div>
                                <div className="text-sm text-muted-foreground">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* A Solução */}
            <section id="solucao" className="py-20 sm:py-28 bg-card/30">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-xs uppercase tracking-widest text-primary font-semibold">A Solução</span>
                        <h2 className="text-3xl sm:text-4xl font-bold mt-3">Como funciona no WhatsApp</h2>
                        <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
                            Onde <strong className="text-foreground">98%</strong> acessam a internet e <strong className="text-foreground">91%</strong> estão presentes todos os dias.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-shrink-0">
                            <img
                                src="/img/ya-whatsapp-mockup.jpg"
                                alt="Conversa com assistente Yá no WhatsApp"
                                className="rounded-2xl shadow-lg border border-border max-w-[300px] w-full"
                            />
                        </div>

                        <div className="flex-1 space-y-8">
                            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors">
                                <div className="text-3xl mb-3">📸</div>
                                <h3 className="text-lg font-bold mb-2">Cupom Fiscal</h3>
                                <p className="text-muted-foreground">
                                    Tirou foto do cupom fiscal, a Yá lê com OCR e registra os gastos automaticamente. <strong className="text-foreground">2 segundos.</strong>
                                </p>
                            </div>
                            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors">
                                <div className="text-3xl mb-3">🎙️</div>
                                <h3 className="text-lg font-bold mb-2">Áudio Natural</h3>
                                <p className="text-muted-foreground">
                                    Manda um áudio perguntando sobre a semana, recebe insights personalizados. <strong className="text-foreground">Sem precisar digitar.</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Diferenciais */}
            <section id="diferenciais" className="py-20 sm:py-28">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-xs uppercase tracking-widest text-primary font-semibold">Diferenciais</span>
                        <h2 className="text-3xl sm:text-4xl font-bold mt-3">Por que a Yá é diferente?</h2>
                    </div>

                    <div className="overflow-x-auto rounded-xl border border-border">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-muted/50">
                                    <th className="text-left p-4 font-semibold text-foreground">Critério</th>
                                    <th className="p-4 font-semibold text-foreground">
                                        <div className="flex items-center justify-center gap-2">
                                            <img src="/img/logo-poupa.png" alt="Poupa.ai" className="h-5" />
                                            /
                                            <img src="/img/logo-granazen.png" alt="GranaZen" className="h-5" />
                                        </div>
                                    </th>
                                    <th className="p-4 font-semibold bg-primary/10 border-t-2 border-primary">
                                        <img src={yaLogo} alt="Yá" className="h-7 mx-auto" />
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {differentials.map((row) => (
                                    <tr key={row.label} className="border-t border-border hover:bg-card/50 transition-colors">
                                        <td className="p-4 font-semibold text-foreground">{row.label}</td>
                                        <td className="p-4 text-center text-muted-foreground">{row.other}</td>
                                        <td className="p-4 text-center bg-primary/5 text-primary font-semibold">{row.ya}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Impacto */}
            <section id="impacto" className="py-20 sm:py-28 bg-card/30">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-xs uppercase tracking-widest text-primary font-semibold">Impacto</span>
                        <h2 className="text-3xl sm:text-4xl font-bold mt-3">Impacto que vai além do individual</h2>
                    </div>

                    <div className="bg-gradient-hero rounded-2xl p-10 sm:p-16 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-secondary/10 blur-[100px] pointer-events-none" />
                        <div className="relative z-10">
                            <div className="text-5xl sm:text-7xl font-black text-accent mb-2">30M+</div>
                            <div className="text-xl text-primary-foreground font-medium mb-4">de vidas impactadas</div>
                            <p className="text-primary-foreground/80 max-w-lg mx-auto">
                                Pesquisa realizada com 23 mães solo de Salvador. 18 mães já pediram para participar do piloto.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Jornada */}
            <section className="py-20 sm:py-28">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-xs uppercase tracking-widest text-primary font-semibold">Nossa Trajetória</span>
                        <h2 className="text-3xl sm:text-4xl font-bold mt-3">Jornada no AI4Good</h2>
                    </div>

                    <div className="max-w-lg mx-auto bg-card border border-border rounded-2xl overflow-hidden flex items-center hover:border-primary/30 transition-colors">
                        <div className="p-6 flex flex-col items-center gap-2 bg-muted/30">
                            <img src="/img/ya-qrcode.png" alt="QR Code Demo" className="w-32 h-32 object-contain rounded-lg bg-white p-1" />
                            <span className="text-xs font-bold text-primary uppercase tracking-wider">Demo ao Vivo</span>
                        </div>
                        <div className="p-6">
                            <h3 className="font-bold text-lg mb-2">AI4Good 2026 — Top 3</h3>
                            <p className="text-muted-foreground text-sm">Top 3 entre 188 projetos de todo o Brasil. Em processo de seleção para a Brazil Conference.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Equipe */}
            <section id="equipe" className="py-20 sm:py-28 bg-card/30">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-xs uppercase tracking-widest text-primary font-semibold">Equipe</span>
                        <h2 className="text-3xl sm:text-4xl font-bold mt-3">Quem está por trás</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {team.map((member) => (
                            <div key={member.name} className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-colors group">
                                <img src={member.img} alt={member.name} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="p-5 text-center">
                                    <h3 className="font-bold text-lg">{member.name}</h3>
                                    <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                                    <a href={member.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" className="inline">
                                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 sm:py-28">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 text-primary mb-6">
                        <Heart className="w-5 h-5 animate-pulse" fill="currentColor" />
                        <span className="text-lg font-medium">Uma IA que cuida de quem cuida de todo mundo</span>
                        <Heart className="w-5 h-5 animate-pulse" fill="currentColor" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-8">Faça parte dessa transformação</h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/5571992433141?text=Ol%C3%A1!%20Quero%20participar%20do%20piloto%20da%20Y%C3%A1"
                            target="_blank"
                            rel="noreferrer"
                            className="px-8 py-4 rounded-xl bg-gradient-hero text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg"
                        >
                            🤱 Quero Participar como Mãe
                        </a>
                        <a
                            href="mailto:s.olipericles@gmail.com"
                            className="px-8 py-4 rounded-xl border border-border bg-card text-foreground font-semibold text-lg hover:border-primary/30 transition-colors"
                        >
                            🤝 Quero ser Parceiro
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-border py-12 bg-card/50">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <img src={yaLogo} alt="Yá" className="h-10" />
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Projeto AI4Good 2026 — Assistente financeiro para mães solo brasileiras. Top 3 entre 188 projetos.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-3">Navegação</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li><a href="#" className="hover:text-foreground transition-colors">Início</a></li>
                                <li><a href="#problema" className="hover:text-foreground transition-colors">O Problema</a></li>
                                <li><a href="#solucao" className="hover:text-foreground transition-colors">A Solução</a></li>
                                <li><a href="#equipe" className="hover:text-foreground transition-colors">Equipe</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-3">Contato</h4>
                            <p className="text-sm text-muted-foreground">Salvador, Bahia</p>
                            <p className="text-sm text-muted-foreground">s.olipericles@gmail.com</p>
                        </div>
                    </div>
                    <div className="border-t border-border pt-6 text-center">
                        <p className="text-xs text-muted-foreground">© 2026 Yá — AI4Good. Todos os direitos reservados.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingOriginal;
