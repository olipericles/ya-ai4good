import { useState, useEffect } from "react";
import { Heart, Globe } from "lucide-react";
import { translations } from "./LandingTranslations";
import yaLogo from "@/assets/logos/ya_logo_branco.svg";
import equipePericles from "@/assets/team/equipe-pericles.png";
import equipeAdriele from "@/assets/team/equipe-adriele.png";
import equipeLua from "@/assets/team/equipe-lua.png";
import yaWhatsappMockup from "@/assets/images/ya-whatsapp-mockup.jpg";
import logoPoupa from "@/assets/logos/logo-poupa.png";
import logoGranazen from "@/assets/logos/logo-granazen.png";
import yaQrcode from "@/assets/logos/ya-qrcode.png";

const LandingOriginal = () => {
    const [lang, setLang] = useState<"pt" | "en">("pt");
    const t = translations[lang];

    useEffect(() => {
        document.title = t.meta.title;
        const meta = document.querySelector('meta[name="description"]');
        if (meta) {
            meta.setAttribute("content", t.meta.desc);
        }
    }, [t]);

    const team = [
        { name: "Péricles Oliveira", role: t.team.roles.pericles, img: equipePericles, linkedin: "https://www.linkedin.com/in/olipericles/" },
        { name: "Adriele Ornellas", role: t.team.roles.adriele, img: equipeAdriele, linkedin: "https://www.linkedin.com/in/adrieleornellas/" },
        { name: "Luã Mota", role: t.team.roles.lua, img: equipeLua, linkedin: "https://www.linkedin.com/in/lua-mota/" },
    ];

    const toggleLang = () => {
        setLang(prev => prev === "pt" ? "en" : "pt");
    };

    return (
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
            {/* Header */}
            <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <img src={yaLogo} alt="Yá" className="h-8 object-contain" />
                    <nav className="hidden md:flex items-center gap-6">
                        <a href="#problema" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.nav.problem}</a>
                        <a href="#solucao" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.nav.solution}</a>
                        <a href="#impacto" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.nav.impact}</a>
                        <a href="#equipe" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.nav.team}</a>
                    </nav>
                    <div className="flex items-center gap-3 relative">
                        {/* Language Toggle */}
                        <button
                            onClick={toggleLang}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-card hover:bg-muted transition-colors text-xs font-medium"
                            title={lang === "pt" ? "Switch to English" : "Mudar para Português"}
                        >
                            <Globe className="w-3.5 h-3.5" />
                            <span>{lang === "pt" ? "EN" : "PT"}</span>
                        </button>

                        <a
                            href="https://wa.me/5571992433241?text=Ol%C3%A1!%20Quero%20participar%20do%20piloto%20da%20Y%C3%A1"
                            target="_blank"
                            rel="noreferrer"
                            className="hidden sm:inline-flex px-4 py-2 rounded-full bg-gradient-hero text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
                        >
                            {t.nav.contact}
                        </a>
                    </div>
                </div>
            </header>

            {/* Hero */}
            <section className="relative py-12 sm:py-16 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.15),transparent_60%)] pointer-events-none" />
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm font-semibold text-primary mb-8 animate-fade-up">
                        {t.hero.badge}
                    </div>

                    <img src={yaLogo} alt="Yá Logo" className="h-24 sm:h-32 object-contain mx-auto mb-8 animate-fade-up delay-100" />

                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-black leading-tight mb-6 animate-fade-up delay-200">
                        {t.hero.title1}
                        <span className="text-gradient">{t.hero.titleHighlight}</span>
                        <br />{t.hero.title2}
                    </h1>

                    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 animate-fade-up delay-300">
                        <span className="text-gradient font-bold text-2xl sm:text-3xl">{t.hero.stat1Highlight}</span>
                        {t.hero.stat1}
                    </p>
                    <p className="text-sm text-muted-foreground mb-8 animate-fade-up delay-300">
                        {t.hero.stat2}
                    </p>

                    <p className="text-foreground/60 italic mb-10 animate-fade-up delay-400">
                        {t.hero.quote}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-500">
                        <a
                            href="https://wa.me/5571992433241?text=Ol%C3%A1!%20Quero%20participar%20do%20piloto%20da%20Y%C3%A1"
                            target="_blank"
                            rel="noreferrer"
                            className="px-8 py-3 rounded-xl bg-gradient-hero text-primary-foreground font-semibold hover:opacity-90 transition-opacity shadow-lg"
                        >
                            {t.hero.ctaPrimary}
                        </a>
                        <a
                            href="#solucao"
                            className="px-8 py-3 rounded-xl border border-border bg-card/50 backdrop-blur-sm text-foreground font-medium hover:bg-card transition-colors"
                        >
                            {t.hero.ctaSecondary}
                        </a>
                    </div>
                </div>
            </section>

            {/* O Problema */}
            <section id="problema" className="py-12 sm:py-16">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-xs uppercase tracking-widest text-primary font-semibold">{t.problem.badge}</span>
                        <h2 className="text-3xl sm:text-4xl font-bold mt-3">{t.problem.title}</h2>
                    </div>

                    <div className="bg-gradient-hero rounded-2xl p-8 sm:p-12 mb-12 relative overflow-hidden">
                        <div className="absolute inset-0 bg-primary/20 blur-[80px] pointer-events-none" />
                        <blockquote className="relative z-10 text-lg sm:text-2xl font-medium italic text-center text-primary-foreground leading-relaxed">
                            {t.problem.quote1}
                            <br /><strong>{t.problem.quote2}</strong>
                        </blockquote>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {t.problem.stats.map((stat, i) => (
                            <div key={i} className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-colors">
                                <div className="text-4xl sm:text-5xl font-black text-gradient mb-2">{stat.value}</div>
                                <div className="text-sm text-muted-foreground">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* A Solução */}
            <section id="solucao" className="py-12 sm:py-16 bg-card/30">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-xs uppercase tracking-widest text-primary font-semibold">{t.solution.badge}</span>
                        <h2 className="text-3xl sm:text-4xl font-bold mt-3">{t.solution.title}</h2>
                        <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
                            {t.solution.subtitle1}<strong className="text-foreground">{t.solution.subtitleHighlight1}</strong>{t.solution.subtitle2}<strong className="text-foreground">{t.solution.subtitleHighlight2}</strong>{t.solution.subtitle3}
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-shrink-0">
                            <img
                                src={yaWhatsappMockup}
                                alt="Conversa com assistente Yá no WhatsApp"
                                className="rounded-2xl shadow-lg border border-border max-w-[300px] w-full"
                            />
                        </div>

                        <div className="flex-1 space-y-8">
                            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors">
                                <div className="text-3xl mb-3">📸</div>
                                <h3 className="text-lg font-bold mb-2">{t.solution.feature1Title}</h3>
                                <p className="text-muted-foreground">
                                    {t.solution.feature1Desc1}<strong className="text-foreground">{t.solution.feature1DescHighlight}</strong>
                                </p>
                            </div>
                            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors">
                                <div className="text-3xl mb-3">🎙️</div>
                                <h3 className="text-lg font-bold mb-2">{t.solution.feature2Title}</h3>
                                <p className="text-muted-foreground">
                                    {t.solution.feature2Desc1}<strong className="text-foreground">{t.solution.feature2DescHighlight}</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Diferenciais */}
            <section id="diferenciais" className="py-12 sm:py-16">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-xs uppercase tracking-widest text-primary font-semibold">{t.differentials.badge}</span>
                        <h2 className="text-3xl sm:text-4xl font-bold mt-3">{t.differentials.title}</h2>
                    </div>

                    <div className="overflow-x-auto rounded-xl border border-border">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-muted/50">
                                    <th className="text-left p-4 font-semibold text-foreground">{t.differentials.headers[0]}</th>
                                    <th className="p-4 font-semibold text-foreground">
                                        <div className="flex items-center justify-center gap-2">
                                            <img src={logoPoupa} alt="Poupa.ai" className="h-5" />
                                            /
                                            <img src={logoGranazen} alt="GranaZen" className="h-5" />
                                        </div>
                                    </th>
                                    <th className="p-4 font-semibold bg-primary/10 border-t-2 border-primary">
                                        <img src={yaLogo} alt="Yá" className="h-7 mx-auto" />
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {t.differentials.rows.map((row, i) => (
                                    <tr key={i} className="border-t border-border hover:bg-card/50 transition-colors">
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
            <section id="impacto" className="py-12 sm:py-16 bg-card/30">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-xs uppercase tracking-widest text-primary font-semibold">{t.impact.badge}</span>
                        <h2 className="text-3xl sm:text-4xl font-bold mt-3">{t.impact.title}</h2>
                    </div>

                    <div className="bg-gradient-hero rounded-2xl p-10 sm:p-16 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-secondary/10 blur-[100px] pointer-events-none" />
                        <div className="relative z-10">
                            <div className="text-5xl sm:text-7xl font-black text-accent mb-2">{t.impact.number}</div>
                            <div className="text-xl text-primary-foreground font-medium mb-4">{t.impact.subtitle}</div>
                            <p className="text-primary-foreground/80 max-w-lg mx-auto">
                                {t.impact.desc}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Jornada */}
            <section className="py-12 sm:py-16">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-xs uppercase tracking-widest text-primary font-semibold">{t.journey.badge}</span>
                        <h2 className="text-3xl sm:text-4xl font-bold mt-3">{t.journey.title}</h2>
                    </div>

                    <div className="max-w-3xl mx-auto relative px-4 sm:px-0">
                        {/* Linha vertical conectora */}
                        <div className="absolute left-[27px] sm:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-primary/50 via-border to-primary/50 sm:-ml-px" />

                        <div className="relative space-y-12">
                            {t.journey.steps.map((step, idx) => {
                                const isHighlighted = step.highlight;
                                const isLeftSide = idx % 2 === 0;

                                return (
                                    <div key={idx} className="relative flex flex-col sm:flex-row items-center sm:justify-between group">

                                        {/* Lado Esquerdo (Vazio no mobile, Data/Texto no desktop dependendo da linha) */}
                                        <div className={`hidden sm:block sm:w-[45%] text-right ${isLeftSide ? '' : 'sm:order-2 sm:text-left'}`}>
                                            <div className="bg-card/40 border border-border rounded-xl p-5 hover:border-primary/30 hover:bg-card/60 transition-all duration-300 relative overflow-hidden backdrop-blur-sm shadow-sm group-hover:shadow-md group-hover:-translate-y-1">
                                                {isHighlighted && <div className="absolute inset-0 bg-primary/10 blur-xl pointer-events-none" />}

                                                <div className="flex items-center gap-3 mb-2 justify-end sm:justify-start">
                                                    {isHighlighted && step.badge && (
                                                        <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-primary text-primary-foreground ${isLeftSide ? 'order-first sm:order-last' : ''}`}>
                                                            {step.badge}
                                                        </span>
                                                    )}
                                                    <span className={`text-sm font-medium ${isHighlighted ? 'text-primary' : 'text-muted-foreground'}`}>
                                                        {step.date}
                                                    </span>
                                                </div>
                                                <h3 className="text-lg font-bold mb-1 text-foreground">{step.title}</h3>
                                                <p className="text-sm text-muted-foreground">{step.desc}</p>
                                            </div>
                                        </div>

                                        {/* Ponto Central */}
                                        <div className="absolute left-0 sm:left-1/2 sm:-ml-[15px] flex items-center justify-center sm:order-1">
                                            <div className={`w-[22px] h-[22px] rounded-full border-4 border-background z-10 
                                                ${isHighlighted
                                                    ? 'bg-primary shadow-[0_0_15px_4px_rgba(226,107,88,0.4)] animate-pulse'
                                                    : 'bg-muted-foreground/30 shadow-none'
                                                }`}
                                            />
                                        </div>

                                        {/* Mobile View & Lado Direito Desktop */}
                                        <div className={`pl-12 w-full sm:pl-0 sm:w-[45%] text-left ${isLeftSide ? 'sm:order-2' : ''} ${!isLeftSide && 'sm:hidden'}`}>
                                            <div className={`sm:hidden bg-card/40 border border-border rounded-xl p-5 hover:border-primary/30 transition-all duration-300 relative overflow-hidden backdrop-blur-sm ${isHighlighted && 'border-primary/50'}`}>
                                                {isHighlighted && <div className="absolute inset-0 bg-primary/10 blur-xl pointer-events-none" />}
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span className={`text-sm font-medium ${isHighlighted ? 'text-primary' : 'text-muted-foreground'}`}>{step.date}</span>
                                                    {isHighlighted && step.badge && (
                                                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-primary text-primary-foreground">{step.badge}</span>
                                                    )}
                                                </div>
                                                <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                                                <p className="text-sm text-muted-foreground">{step.desc}</p>
                                            </div>
                                        </div>

                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Equipe */}
            <section id="equipe" className="py-12 sm:py-16 bg-card/30">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-xs uppercase tracking-widest text-primary font-semibold">{t.team.badge}</span>
                        <h2 className="text-3xl sm:text-4xl font-bold mt-3">{t.team.title}</h2>
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
            <section className="py-12 sm:py-16">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 text-primary mb-6">
                        <Heart className="w-5 h-5 animate-pulse" fill="currentColor" />
                        <span className="text-lg font-medium">{t.cta.slogan}</span>
                        <Heart className="w-5 h-5 animate-pulse" fill="currentColor" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-8">{t.cta.title}</h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/5571992433241?text=Ol%C3%A1!%20Quero%20participar%20do%20piloto%20da%20Y%C3%A1"
                            target="_blank"
                            rel="noreferrer"
                            className="px-8 py-4 rounded-xl bg-gradient-hero text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg"
                        >
                            {t.cta.button1}
                        </a>
                        <a
                            href="mailto:ya.ai4good@gmail.com"
                            className="px-8 py-4 rounded-xl border border-border bg-card text-foreground font-semibold text-lg hover:border-primary/30 transition-colors"
                        >
                            {t.cta.button2}
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
                                {t.footer.desc}
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-3">{t.footer.navTitle}</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li><a href="#" className="hover:text-foreground transition-colors">{t.footer.navItems[0]}</a></li>
                                <li><a href="#problema" className="hover:text-foreground transition-colors">{t.footer.navItems[1]}</a></li>
                                <li><a href="#solucao" className="hover:text-foreground transition-colors">{t.footer.navItems[2]}</a></li>
                                <li><a href="#equipe" className="hover:text-foreground transition-colors">{t.footer.navItems[3]}</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-3">{t.footer.contactTitle}</h4>
                            <p className="text-sm text-muted-foreground">Salvador, Bahia</p>
                            <p className="text-sm text-muted-foreground">ya.ai4good@gmail.com</p>
                        </div>
                    </div>
                    <div className="border-t border-border pt-6 text-center">
                        <p className="text-xs text-muted-foreground">{t.footer.rights}</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingOriginal;
