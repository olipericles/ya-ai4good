import { useState, useEffect } from "react";
import { Heart, Globe, Lock, Unlock, X, ChevronRight, PlayCircle, FileText, LayoutDashboard } from "lucide-react";
import DonationCard from "@/components/DonationCard";
import { translations } from "./LandingTranslations";
import WaitlistFormModal from "@/components/landing/WaitlistFormModal";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import yaLogo from "@/assets/logos/ya_logo_branco.svg";
import equipePericles from "@/assets/team/equipe-pericles.png";
import equipeAdriele from "@/assets/team/equipe-adriele.png";
import equipeLua from "@/assets/team/equipe-lua.png";
import interacaoAudio from "@/assets/images/interacao-carol-audio.jpeg";
import interacaoSaldo from "@/assets/images/interacao-carol-saldo.jpeg";
import dashCarol from "@/assets/images/dash-carol.jpeg";
import demoVideo from "@/assets/videos/demo.mp4";
import logoPoupa from "@/assets/logos/logo-poupa.png";
import logoGranazen from "@/assets/logos/logo-granazen.png";
import MediaMarquee from "@/components/landing/MediaMarquee";

const LandingPage = () => {
    const { lang } = useLanguage();
    const [showPitchModal, setShowPitchModal] = useState(false);
    const [pitchPassword, setPitchPassword] = useState("");
    const [isPitchAuth, setIsPitchAuth] = useState(false);
    const [pitchError, setPitchError] = useState(false);
    const [showWaitlistForm, setShowWaitlistForm] = useState(false);
    const t = translations[lang];

    useEffect(() => {
        document.title = t.meta.title;
        const meta = document.querySelector('meta[name="description"]');
        if (meta) {
            meta.setAttribute("content", t.meta.desc);
        }

        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('waitlist') === 'true') {
            setShowWaitlistForm(true);
        }
    }, [t]);

    const team = [
        {
            name: "Adriele Ornellas",
            role: t.team.roles.adriele,
            img: equipeAdriele,
            linkedin: "https://www.linkedin.com/in/adrieleornellas/"
        },
        {
            name: "Luã Mota",
            role: t.team.roles.lua,
            img: equipeLua,
            linkedin: "https://www.linkedin.com/in/luaamota/"
        },
        {
            name: "Péricles Oliveira",
            role: t.team.roles.pericles,
            img: equipePericles,
            linkedin: "https://www.linkedin.com/in/olipericles/"
        }
    ];

    const handlePitchLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (pitchPassword.toLowerCase() === "ai4good") {
            setIsPitchAuth(true);
            setPitchError(false);
        } else {
            setPitchError(true);
        }
    };

    // Single pitch version using standard route names

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
                        <a href="#lista-de-espera" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.nav.waitlist}</a>
                        <button onClick={() => setShowPitchModal(true)} className="text-sm font-bold text-primary hover:text-secondary transition-colors flex items-center gap-1 ml-2">
                            <Lock className="w-3 h-3" /> Pitch Deck
                        </button>
                    </nav>
                    <div className="flex items-center gap-3 relative">
                        <LanguageToggle />

                        <a
                            href="https://wa.me/5571992433241?text=Ol%C3%A1!%20Quero%20participar%20do%20piloto%20da%20Y%C3%A1"
                            target="_blank"
                            rel="noreferrer"
                            className="hidden sm:inline-flex px-4 py-2 rounded-full bg-gradient-hero text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
                        >
                            {t.nav.contact}
                        </a>
                        <a href="/dashboard" className="text-sm font-bold text-white/60 hover:text-white transition-colors flex items-center gap-1 ml-1 sm:ml-2">
                            Entrar <ChevronRight className="w-3.5 h-3.5" />
                        </a>
                    </div>
                </div>
            </header>

            {/* Hero V5 / V4 Aesthetic */}
            <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-[#0A0A0A] text-white">
                {/* Subtle Background Glows to preserve text legibility */}
                <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-secondary/10 rounded-full blur-[180px] pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

                <div className="max-w-6xl mx-auto px-6 text-center relative z-10 w-full">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-xl px-5 py-2 mb-12 animate-fade-up">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/70">{t.hero.badge}</span>
                    </div>

                    {/* Logo */}
                    <img src={yaLogo} alt="Yá Logo" className="h-28 sm:h-40 object-contain mx-auto mb-10 animate-fade-up delay-100" />

                    {/* Giant Typography */}
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.9] tracking-tighter mb-8 animate-fade-up delay-200">
                        {t.hero.title1}
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary drop-shadow-[0_0_40px_rgba(226,107,88,0.4)]">
                            {t.hero.titleHighlight}
                        </span>
                        <br />
                        <span className="italic font-serif font-light text-white/80">{t.hero.title2}</span>
                    </h1>

                    {/* Stats inside brutalist box */}
                    <div className="bg-card/40 border border-primary/30 backdrop-blur-3xl p-8 max-w-3xl mx-auto rounded-[2rem] shadow-2xl mb-12 animate-fade-up delay-300">
                        <p className="text-2xl sm:text-3xl text-white font-medium mb-2">
                            <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-4xl mr-2">{t.hero.stat1Highlight}</span>
                            {t.hero.stat1}
                        </p>
                        <p className="text-lg font-mono text-white/50 tracking-wide uppercase">
                            {t.hero.stat2}
                        </p>
                    </div>

                    {/* Quote */}
                    <p className="text-xl sm:text-2xl text-white/60 italic font-serif max-w-4xl mx-auto mb-16 animate-fade-up delay-400">
                        {t.hero.quote}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-up delay-500">
                        <button
                            onClick={() => setShowWaitlistForm(true)}
                            className="bg-gradient-hero text-white font-black text-xl px-12 py-5 rounded-full shadow-[0_0_40px_rgba(226,107,88,0.4)] hover:scale-105 hover:shadow-[0_0_60px_rgba(226,107,88,0.6)] transition-all duration-500 uppercase tracking-widest"
                        >
                            {t.hero.ctaPrimary}
                        </button>
                        <a
                            href="#solucao"
                            className="px-10 py-5 rounded-full border-2 border-white/20 bg-transparent text-white font-bold text-lg hover:bg-white/10 transition-colors uppercase tracking-widest"
                        >
                            {t.hero.ctaSecondary}
                        </a>
                    </div>
                </div>
            </section>

            {/* O Problema */}
            <section id="problema" className="py-20 sm:py-32 relative bg-[#060606] text-white">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[300px] bg-gradient-to-r from-primary/10 to-secondary/10 blur-[120px] pointer-events-none mix-blend-screen" />
                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-sm font-mono uppercase tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold">{t.problem.badge}</span>
                        <h2 className="text-4xl sm:text-6xl font-black mt-4 tracking-tight">{t.problem.title}</h2>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 sm:p-16 mb-16 relative overflow-hidden backdrop-blur-md">
                        <blockquote className="relative z-10 text-2xl sm:text-4xl font-serif italic text-center text-white/90 leading-tight">
                            "{t.problem.quote1}"
                            <br /><br />
                            <strong className="font-sans font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary not-italic">{t.problem.quote2}</strong>
                        </blockquote>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {t.problem.stats.map((stat, i) => (
                            <div key={i} className="bg-black/50 border border-white/10 rounded-[2rem] p-10 text-center hover:border-primary/30 hover:bg-white/5 transition-all duration-500 group">
                                <div className="text-5xl sm:text-7xl font-black text-white mb-4 group-hover:scale-110 transition-transform duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-white/60">{stat.value}</div>
                                <div className="text-base text-white/50 uppercase tracking-widest font-mono">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* A Solução */}
            <section id="solucao" className="py-20 sm:py-32 bg-[#0A0A0A] text-white relative">
                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <div className="text-left mb-16 max-w-3xl">
                        <span className="text-sm font-mono uppercase tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold">{t.solution.badge}</span>
                        <h2 className="text-4xl sm:text-6xl font-black mt-4 tracking-tight mb-8">{t.solution.title}</h2>
                        <p className="text-xl sm:text-2xl text-white/60 leading-relaxed font-light">
                            {t.solution.subtitle1}<strong className="text-white font-bold">{t.solution.subtitleHighlight1}</strong>{t.solution.subtitle2}<strong className="text-white font-bold">{t.solution.subtitleHighlight2}</strong>{t.solution.subtitle3}
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="flex-shrink-0 relative group perspective-1000">
                            {/* Glow behind phone */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl rounded-[3rem] scale-90 group-hover:scale-100 transition-transform duration-700" />
                            <div className="relative rounded-[2.5rem] shadow-[0_0_40px_rgba(0,0,0,0.5)] border-[6px] border-[#2A2A2A] bg-black max-w-[281px] w-[281px] h-[570px] overflow-hidden transform rotate-y-[-5deg] group-hover:rotate-y-0 transition-transform duration-700">
                                <video
                                    src={demoVideo}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="absolute inset-0 w-full h-full object-cover object-center z-30"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-[#0B141A] -z-10">
                                    <img src={yaLogo} alt="Yá" className="w-16 opacity-30" />
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 space-y-6">
                            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-10 hover:border-primary/50 hover:bg-white/10 transition-all duration-500 group">
                                <div className="text-4xl mb-6 bg-white/10 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform duration-300">📸</div>
                                <h3 className="text-2xl font-bold mb-4 text-white">{t.solution.feature1Title}</h3>
                                <p className="text-lg text-white/60 leading-relaxed">
                                    {t.solution.feature1Desc1}<strong className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold">{t.solution.feature1DescHighlight}</strong>
                                </p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-10 hover:border-primary/50 hover:bg-white/10 transition-all duration-500 group">
                                <div className="text-4xl mb-6 bg-white/10 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform duration-300">🎙️</div>
                                <h3 className="text-2xl font-bold mb-4 text-white">{t.solution.feature2Title}</h3>
                                <p className="text-lg text-white/60 leading-relaxed">
                                    {t.solution.feature2Desc1}<strong className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold">{t.solution.feature2DescHighlight}</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16 text-center">
                        <button
                            onClick={() => setShowWaitlistForm(true)}
                            className="bg-gradient-hero text-white font-black text-lg px-10 py-4 rounded-full shadow-[0_0_30px_rgba(226,107,88,0.3)] hover:scale-105 hover:shadow-[0_0_50px_rgba(226,107,88,0.5)] transition-all duration-500 uppercase tracking-widest"
                        >
                            {t.hero.ctaPrimary}
                        </button>
                    </div>
                </div>
            </section>

            {/* Diferenciais */}
            <section id="diferenciais" className="py-20 sm:py-32 bg-[#060606] text-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-sm font-mono uppercase tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold">{t.differentials.badge}</span>
                        <h2 className="text-4xl sm:text-6xl font-black mt-4 tracking-tight">{t.differentials.title}</h2>
                        {t.differentials.subtitle && (
                            <p className="text-lg text-white/50 mt-6 max-w-2xl mx-auto leading-relaxed">
                                {t.differentials.subtitle}
                            </p>
                        )}
                    </div>

                    {/* Desktop View */}
                    <div className="hidden md:block overflow-x-auto rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-sm p-4">
                        <table className="w-full text-base">
                            <thead>
                                <tr>
                                    <th className="text-left p-6 font-bold text-white/80 uppercase tracking-widest text-xs border-b border-white/10">{t.differentials.headers[0]}</th>
                                    <th className="p-6 font-bold text-white/80 uppercase tracking-widest text-xs border-b border-white/10">
                                        <div className="flex items-center justify-center gap-3 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                                            <img src={logoPoupa} alt="Poupa.ai" className="h-6" />
                                            /
                                            <img src={logoGranazen} alt="GranaZen" className="h-6" />
                                        </div>
                                    </th>
                                    <th className="p-6 bg-gradient-hero border-b border-white/20 rounded-tr-xl">
                                        <img src={yaLogo} alt="Yá" className="h-8 mx-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] invert" />
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {t.differentials.rows.map((row, i) => (
                                    <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                                        <td className="p-6 font-bold text-white group-hover:text-primary transition-colors">{row.label}</td>
                                        <td className="p-6 text-center text-white/40 font-mono text-sm">{row.other}</td>
                                        <td className="p-6 text-center font-bold text-lg text-primary">
                                            {row.ya}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile View */}
                    <div className="flex flex-col gap-6 md:hidden">
                        {t.differentials.rows.map((row, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-[1.5rem] p-6 flex flex-col gap-4">
                                <h3 className="font-bold text-white text-lg border-b border-white/10 pb-3">{row.label}</h3>

                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-2 text-white/50 text-xs font-bold uppercase tracking-widest">
                                            <div className="flex bg-black/50 px-3 py-1.5 rounded-full border border-white/10 gap-2 items-center">
                                                <img src={logoPoupa} alt="Poupa.ai" className="h-3 grayscale opacity-60" />
                                                <span>/</span>
                                                <img src={logoGranazen} alt="GranaZen" className="h-3 grayscale opacity-60" />
                                            </div>
                                        </div>
                                        <div className="text-white/60 font-mono text-sm pl-2">{row.other}</div>
                                    </div>

                                    <div className="flex flex-col gap-2 bg-gradient-to-r from-primary/10 to-transparent p-4 rounded-xl border border-primary/20">
                                        <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest">
                                            <div className="flex bg-primary/20 px-3 py-1.5 rounded-full border border-primary/30 items-center">
                                                <img src={yaLogo} alt="Yá" className="h-3" />
                                            </div>
                                        </div>
                                        <div className="text-primary font-bold pl-1">{row.ya}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Yá vs Bancos Tradicionais */}
            <section className="py-20 sm:py-32 bg-[#060606] text-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-sm font-mono uppercase tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold">{t.bankComparison.badge}</span>
                        <h2 className="text-4xl sm:text-6xl font-black mt-4 tracking-tight">{t.bankComparison.title}</h2>
                        {t.bankComparison.subtitle && (
                            <p className="text-lg text-white/50 mt-6 max-w-2xl mx-auto leading-relaxed">
                                {t.bankComparison.subtitle}
                            </p>
                        )}
                    </div>

                    {/* Desktop View */}
                    <div className="hidden md:block overflow-x-auto rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-sm p-4">
                        <table className="w-full text-base">
                            <thead>
                                <tr>
                                    <th className="text-left p-6 font-bold text-white/80 uppercase tracking-widest text-xs border-b border-white/10">{"Critério"}</th>
                                    <th className="p-6 font-bold text-white/80 uppercase tracking-widest text-xs border-b border-white/10">
                                        <div className="flex items-center justify-center gap-2 opacity-60">
                                            <span className="text-white/60 text-lg">⌘</span>
                                            <span>{t.bankComparison.otherLabel}</span>
                                        </div>
                                    </th>
                                    <th className="p-6 bg-gradient-hero border-b border-white/20 rounded-tr-xl">
                                        <img src={yaLogo} alt="Yá" className="h-8 mx-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] invert" />
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {t.bankComparison.rows.map((row, i) => (
                                    <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                                        <td className="p-6 font-bold text-white group-hover:text-primary transition-colors">{row.label}</td>
                                        <td className="p-6 text-center text-white/40 font-mono text-sm">{row.other}</td>
                                        <td className="p-6 text-center font-bold text-lg text-primary">
                                            {row.ya}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile View */}
                    <div className="flex flex-col gap-6 md:hidden">
                        {t.bankComparison.rows.map((row, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-[1.5rem] p-6 flex flex-col gap-4">
                                <h3 className="font-bold text-white text-lg border-b border-white/10 pb-3">{row.label}</h3>

                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-2 text-white/50 text-xs font-bold uppercase tracking-widest">
                                            <div className="flex bg-black/50 px-3 py-1.5 rounded-full border border-white/10 gap-2 items-center opacity-60">
                                                <span className="text-xs">⌘</span>
                                                <span>{t.bankComparison.otherLabel}</span>
                                            </div>
                                        </div>
                                        <div className="text-white/60 font-mono text-sm pl-2">{row.other}</div>
                                    </div>

                                    <div className="flex flex-col gap-2 bg-gradient-to-r from-primary/10 to-transparent p-4 rounded-xl border border-primary/20">
                                        <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest">
                                            <div className="flex bg-primary/20 px-3 py-1.5 rounded-full border border-primary/30 items-center">
                                                <img src={yaLogo} alt="Yá" className="h-3" />
                                            </div>
                                        </div>
                                        <div className="text-primary font-bold pl-1">{row.ya}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-16 text-center">
                        <button
                            onClick={() => setShowWaitlistForm(true)}
                            className="bg-white/5 border border-white/20 hover:bg-white/10 text-white font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 uppercase tracking-widest"
                        >
                            {t.hero.ctaPrimary}
                        </button>
                    </div>
                </div>
            </section>

            {/* Impacto */}
            <section id="impacto" className="py-20 sm:py-32 bg-[#0A0A0A] text-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-sm font-mono uppercase tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold">{t.impact.badge}</span>
                        <h2 className="text-4xl sm:text-6xl font-black mt-4 tracking-tight">{t.impact.title}</h2>
                    </div>

                    <div className="bg-[#111] border border-white/10 rounded-[3rem] p-12 sm:p-24 text-center relative overflow-hidden shadow-[0_0_80px_rgba(226,107,88,0.15)] group">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-[130px] group-hover:blur-[80px] pointer-events-none transition-all duration-1000" />
                        <div className="relative z-10">
                            <div className="text-7xl sm:text-[10rem] font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary leading-none mb-6 drop-shadow-[0_0_30px_rgba(226,107,88,0.3)]">{t.impact.number}</div>
                            <div className="text-2xl sm:text-3xl text-white font-bold mb-6 tracking-tight">{t.impact.subtitle}</div>
                            <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
                                {t.impact.desc}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Jornada */}
            <section className="py-20 sm:py-32 relative bg-[#060606] text-white hidden md:block">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[800px] bg-gradient-to-b from-primary/10 to-secondary/10 blur-[150px] pointer-events-none mix-blend-screen" />

                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-24">
                        <span className="text-sm font-mono uppercase tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold">{t.journey.badge}</span>
                        <h2 className="text-4xl sm:text-6xl font-black mt-4 tracking-tight">{t.journey.title}</h2>
                    </div>

                    <div className="max-w-4xl mx-auto relative px-4 sm:px-0">
                        {/* Linha vertical conectora */}
                        <div className="absolute left-[27px] sm:left-1/2 top-4 bottom-4 w-px bg-white/10 sm:-ml-px" />

                        <div className="relative space-y-16">
                            {t.journey.steps.map((step, idx) => {
                                const isHighlighted = step.highlight;
                                const isLeftSide = idx % 2 === 0;

                                return (
                                    <div key={idx} className="relative flex flex-col sm:flex-row items-center sm:justify-between group">

                                        <div className={`hidden sm:flex sm:w-full items-center justify-between`}>
                                            {/* Lado Esquerdo */}
                                            <div className={`w-[45%] flex justify-end ${!isLeftSide ? 'invisible' : ''}`}>
                                                {((content) => 'link' in step && step.link ? <a href={step.link as string} className="block w-full max-w-lg cursor-pointer hover:scale-105 transition-transform duration-500">{content}</a> : <div className="w-full max-w-lg">{content}</div>)(
                                                    <div className={`bg-black/80 border border-white/10 rounded-[2rem] p-8 hover:border-primary/50 transition-all duration-500 relative overflow-hidden backdrop-blur-xl w-full text-right ${isHighlighted ? 'border-primary/30 shadow-[0_0_30px_rgba(226,107,88,0.15)] bg-white/5' : ''}`}>
                                                        {isHighlighted && <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 blur-xl pointer-events-none" />}
                                                        <div className="flex items-center gap-4 mb-4 justify-end">
                                                            {isHighlighted && step.badge && (
                                                                <span className="text-xs uppercase font-black tracking-widest px-3 py-1 rounded bg-gradient-hero text-white">
                                                                    {step.badge}
                                                                </span>
                                                            )}
                                                            <span className={`font-mono text-sm uppercase tracking-wider ${isHighlighted ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold' : 'text-white/40'}`}>
                                                                {step.date}
                                                            </span>
                                                        </div>
                                                        <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                                                        <p className="text-white/60 leading-relaxed">{step.desc}</p>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Ponto Central Desktop */}
                                            <div className="absolute left-1/2 -ml-[11px] flex items-center justify-center z-10 transition-transform duration-500 group-hover:scale-150">
                                                <div className={`w-[22px] h-[22px] rounded-full border-4 border-[#060606] transition-colors
                                                    ${isHighlighted
                                                        ? 'bg-gradient-to-br from-primary to-secondary shadow-[0_0_20px_5px_rgba(226,107,88,0.6)]'
                                                        : 'bg-white/20 group-hover:bg-white/50'
                                                    }`}
                                                />
                                            </div>

                                            {/* Lado Direito */}
                                            <div className={`w-[45%] flex justify-start ${isLeftSide ? 'invisible' : ''}`}>
                                                {((content) => 'link' in step && step.link ? <a href={step.link as string} className="block w-full max-w-lg cursor-pointer hover:scale-105 transition-transform duration-500">{content}</a> : <div className="w-full max-w-lg">{content}</div>)(
                                                    <div className={`bg-black/80 border border-white/10 rounded-[2rem] p-8 hover:border-primary/50 transition-all duration-500 relative overflow-hidden backdrop-blur-xl w-full text-left ${isHighlighted ? 'border-primary/30 shadow-[0_0_30px_rgba(226,107,88,0.15)] bg-white/5' : ''}`}>
                                                        {isHighlighted && <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 blur-xl pointer-events-none" />}
                                                        <div className="flex items-center gap-4 mb-4 justify-start">
                                                            <span className={`font-mono text-sm uppercase tracking-wider ${isHighlighted ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold' : 'text-white/40'}`}>
                                                                {step.date}
                                                            </span>
                                                            {isHighlighted && step.badge && (
                                                                <span className="text-xs uppercase font-black tracking-widest px-3 py-1 rounded bg-gradient-hero text-white">
                                                                    {step.badge}
                                                                </span>
                                                            )}
                                                        </div>
                                                        <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                                                        <p className="text-white/60 leading-relaxed">{step.desc}</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Imprensa / A Yá na mídia */}
            <MediaMarquee />

            {/* Equipe */}
            <section id="equipe" className="py-20 sm:py-32 bg-[#0A0A0A] text-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <span className="text-sm font-mono uppercase tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold">{t.team.badge}</span>
                        <h2 className="text-4xl sm:text-6xl font-black mt-4 tracking-tight">{t.team.title}</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-5xl mx-auto">
                        {team.map((member) => (
                            <div key={member.name} className="flex flex-col items-center group">
                                <a href={member.linkedin} target="_blank" rel="noreferrer" className="w-64 h-64 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden mb-8 border border-white/10 bg-white/5 shadow-2xl relative block grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:-translate-y-4 group-hover:border-primary/50 group-hover:shadow-[0_20px_50px_rgba(226,107,88,0.2)]">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />
                                    <img src={member.img} alt={member.name} className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700" />
                                </a>
                                <h3 className="font-black text-2xl mb-2 text-white text-center tracking-tight">{member.name}</h3>
                                <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-sm uppercase tracking-widest font-mono mb-6 text-center font-bold">{member.role}</p>
                                <a href={member.linkedin} target="_blank" rel="noreferrer" className="text-white/40 hover:text-white p-3 bg-white/5 rounded-full border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all" aria-label={`LinkedIn de ${member.name}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                    </svg>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Donation Card */}
            <DonationCard />

            {/* CTA Section */}
            <section id="lista-de-espera" className="py-24 sm:py-40 relative bg-[#060606] text-white overflow-hidden text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 blur-[150px] pointer-events-none mix-blend-screen" />
                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <h2 className="text-5xl sm:text-7xl font-black mb-6 tracking-tighter leading-none">
                        {t.cta.title}
                    </h2>
                    <p className="text-lg sm:text-xl text-white/60 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        {t.cta.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button
                            onClick={() => setShowWaitlistForm(true)}
                            className="bg-gradient-hero text-white font-black text-xl px-12 py-6 rounded-full shadow-[0_0_40px_rgba(168,85,247,0.4)] hover:scale-105 hover:shadow-[0_0_60px_rgba(226,107,88,0.6)] transition-all duration-500 uppercase tracking-widest"
                        >
                            {t.cta.button1}
                        </button>
                        <a
                            href="mailto:ya.ai4good@gmail.com"
                            className="px-12 py-6 rounded-full border-2 border-white/20 bg-black/50 backdrop-blur-md text-white font-bold text-xl hover:bg-white/10 hover:border-white/40 transition-colors uppercase tracking-widest"
                        >
                            {t.cta.button2}
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-white/10 py-16 bg-[#0A0A0A] text-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <img src={yaLogo} alt="Yá" className="h-12 opacity-80" />
                            </div>
                            <p className="text-sm text-white/50 leading-relaxed font-mono">
                                {t.footer.desc}
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-white/40">{t.footer.navTitle}</h4>
                            <ul className="space-y-4 text-base font-medium text-white/80">
                                <li><a href="#" className="hover:text-primary transition-colors">{t.footer.navItems[0]}</a></li>
                                <li><a href="#problema" className="hover:text-primary transition-colors">{t.footer.navItems[1]}</a></li>
                                <li><a href="#solucao" className="hover:text-primary transition-colors">{t.footer.navItems[2]}</a></li>
                                <li><a href="#equipe" className="hover:text-primary transition-colors">{t.footer.navItems[3]}</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-white/40">{t.footer.contactTitle}</h4>
                            <div className="space-y-2 font-mono text-sm text-white/70">
                                <p>Salvador, Bahia</p>
                                <p>ya.ai4good@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-white/10 pt-8 text-center">
                        <p className="text-xs text-white/30 font-mono uppercase tracking-widest">{t.footer.rights}</p>
                    </div>
                </div>
            </footer>

            {/* Pitch Deck Modal */}
            {showPitchModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-all duration-300">
                    <div className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 max-w-2xl w-full shadow-2xl relative animate-fade-up">
                        <button
                            onClick={() => { setShowPitchModal(false); setPitchPassword(""); setPitchError(false); setIsPitchAuth(false); }}
                            className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="mb-8">
                            <h2 className="text-3xl font-black text-white mb-2 flex items-center gap-3">
                                {isPitchAuth ? <Unlock className="w-8 h-8 text-primary" /> : <Lock className="w-8 h-8 text-white/50" />}
                                Pitch Deck Access
                            </h2>
                            <p className="text-white/60 font-mono text-sm uppercase tracking-widest">
                                {isPitchAuth ? "Acesso liberado aos assets" : "Área restrita. Insira a senha."}
                            </p>
                        </div>

                        {!isPitchAuth ? (
                            <form onSubmit={handlePitchLogin} className="space-y-4">
                                <div>
                                    <input
                                        type="password"
                                        value={pitchPassword}
                                        onChange={(e) => setPitchPassword(e.target.value)}
                                        placeholder="Senha"
                                        className={`w-full bg-white/5 border ${pitchError ? 'border-red-500' : 'border-white/10 focus:border-primary'} rounded-xl px-6 py-4 text-white font-mono outline-none transition-colors`}
                                        autoFocus
                                    />
                                    {pitchError && <span className="text-red-500 text-xs font-mono mt-2 ml-2 block uppercase">* Senha incorreta</span>}
                                </div>
                                <button type="submit" className="w-full bg-gradient-hero text-white font-black px-6 py-4 rounded-xl uppercase tracking-widest hover:scale-[1.02] transition-transform">
                                    Entrar
                                </button>
                            </form>
                        ) : (
                            <div className="space-y-4 animate-fade-in">
                                <div className="flex flex-col sm:flex-row items-center justify-between bg-white/5 border border-white/10 rounded-xl p-4 gap-4 hover:bg-white/10 transition-colors mt-4">
                                    <span className="font-bold text-lg text-white">Yá - Pitch Deck Oficial</span>
                                    <div className="flex gap-2 w-full sm:w-auto flex-wrap justify-end">
                                        <a href="/vBC2026" className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 py-2 bg-white/10 hover:bg-primary/20 hover:text-primary text-white rounded-lg text-sm font-bold transition-colors">
                                            <PlayCircle className="w-4 h-4" /> Slides
                                        </a>
                                        <a href="/vBC2026t" className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 py-2 bg-white/10 hover:bg-primary/20 hover:text-primary text-white rounded-lg text-sm font-bold transition-colors">
                                            <ChevronRight className="w-4 h-4" /> Treino
                                        </a>
                                        <a href="/vBC2026s" className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 py-2 bg-white/10 hover:bg-primary/20 hover:text-primary text-white rounded-lg text-sm font-bold transition-colors">
                                            <FileText className="w-4 h-4" /> Script
                                        </a>
                                        <a href="/vBC2026op" className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 py-2 bg-white/10 hover:bg-primary/20 hover:text-primary text-white rounded-lg text-sm font-bold transition-colors">
                                            <LayoutDashboard className="w-4 h-4" /> OP
                                        </a>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row items-center justify-between bg-white/5 border border-white/10 rounded-xl p-4 gap-4 hover:bg-white/10 transition-colors">
                                    <span className="font-bold text-lg text-white">Yá - Pós-BC</span>
                                    <div className="flex gap-2 w-full sm:w-auto flex-wrap justify-end">
                                        <a href="/rba" className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 py-2 bg-white/10 hover:bg-primary/20 hover:text-primary text-white rounded-lg text-sm font-bold transition-colors">
                                            <PlayCircle className="w-4 h-4" /> RBA
                                        </a>
                                        <a href="/trindai" className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 py-2 bg-white/10 hover:bg-primary/20 hover:text-primary text-white rounded-lg text-sm font-bold transition-colors">
                                            <PlayCircle className="w-4 h-4" /> Trind AI
                                        </a>
                                        <a href="/baia" className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 py-2 bg-white/10 hover:bg-primary/20 hover:text-primary text-white rounded-lg text-sm font-bold transition-colors">
                                            <PlayCircle className="w-4 h-4" /> BaIA
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Waitlist Form Modal */}
            <WaitlistFormModal
                isOpen={showWaitlistForm}
                onClose={() => setShowWaitlistForm(false)}
            />

        </div>
    );
};

export default LandingPage;
