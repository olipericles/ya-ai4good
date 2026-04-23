import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  EyeOff, Unlink, ShieldAlert, BarChart3, DollarSign, Heart, TrendingUp,
  Building2, MessageCircle, FileText, ArrowRight, Mail, Award, ChevronRight,
  Users, Zap, Shield, BadgeCheck, Megaphone, PieChart, Star, Check, Loader2, Quote, Instagram, Globe
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import yaLogo from "@/assets/logos/ya_logo_branco.svg";
import aureaPlaceholder from "@/assets/maes/aurea.jpeg";
import { useIBGE } from "@/hooks/useIBGE";
import { seloTranslations } from "./SeloTranslations";
import DonationCard from "@/components/DonationCard";

const DATA_ENCERRAMENTO = "30/06/2026";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const }
  })
};

import { LanguageToggle } from "@/components/LanguageToggle";

/* ─── Header Toggler ─── */
const Header = ({ t }: any) => (
  <header className="absolute top-0 w-full z-50 bg-transparent">
    <div className="container mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
      <a href="/" className="cursor-pointer hover:opacity-80 transition-opacity">
        <img src={yaLogo} alt="Yá Logo" className="h-6 opacity-80 object-contain" />
      </a>
      <div className="flex items-center gap-4">
        <LanguageToggle />
      </div>
    </div>
  </header>
);

/* ─── Hero ─── */
const HeroSection = ({ t }: any) => (
  <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-20">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[120px]" />
    </div>

    <div className="container mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-12 items-center py-10">
      <motion.div initial="hidden" animate="visible" className="space-y-6">
        <motion.span
          variants={fadeUp} custom={0}
          className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/15 text-primary border border-primary/20"
        >
          {t.hero.badge}
        </motion.span>

        <motion.h1
          variants={fadeUp} custom={1}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight"
        >
          {t.hero.title1}
          <span className="text-gradient">{t.hero.titleHighlight}</span>
        </motion.h1>

        <motion.p variants={fadeUp} custom={2} className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
          {t.hero.desc}
        </motion.p>

        <motion.p variants={fadeUp} custom={2.5} className="text-sm text-muted-foreground/70 italic max-w-lg">
          {t.hero.italic}
        </motion.p>

        <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4 pt-2">
          <Button size="lg" className="bg-gradient-hero text-white font-semibold rounded-2xl shadow-lg hover:opacity-90 transition-opacity" asChild>
            <a href="#contato" className="flex items-center gap-2">
              {t.hero.btnPrimary} <ChevronRight size={18} />
            </a>
          </Button>
          <Button variant="outline" size="lg" className="rounded-2xl border-border/60" asChild>
            <a href="#contato">{t.hero.btnSecondary}</a>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="hidden lg:flex flex-col items-center gap-6"
      >
        <div className="flex flex-col items-center">
          <div className="w-40 h-40 rounded-full border-4 border-primary/30 overflow-hidden mb-4 shadow-xl">
            <img src={aureaPlaceholder} alt="Áurea" className="w-full h-full object-cover" />
          </div>
          <Card className="bg-card/80 backdrop-blur-md border-border/40 rounded-2xl max-w-md text-center p-4">
            <Quote size={20} className="text-primary/50 mx-auto mb-2" />
            <p className="text-sm italic text-foreground mb-2">{t.hero.aureaQuote}</p>
            <p className="text-xs text-muted-foreground font-semibold">{t.hero.aureaName}</p>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 backdrop-blur-md rounded-2xl text-center p-4 w-full max-w-md flex items-center justify-center gap-3">
          <Award size={32} className="text-primary" />
          <div className="text-left">
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">{t.hero.awardTitle}</p>
            <p className="text-sm font-semibold">{t.hero.awardSub}</p>
            <p className="text-[10px] text-muted-foreground">{t.hero.awardDesc}</p>
          </div>
        </Card>
      </motion.div>
    </div>
  </section>
);

/* ─── Faixa de Credibilidade ─── */
const pressLinksData = [
  { name: "Alma Preta", links: [{ type: "portal", url: "https://almapreta.com.br/sessao/cotidiano/projeto-salvador-maes-solo-gestao-financeira/" }] },
  { name: "Nordeste Eu Sou", links: [{ type: "portal", url: "https://nordesteusou.com.br/noticias/da-periferia-para-harvard-jovens-de-salvador-vencem-premio-internacional-com-ia-que-ajuda-maes-solo/" }, { type: "instagram", url: "https://www.instagram.com/p/DWgtyMWFlWA" }] },
  { name: "JC Bairro da Paz", links: [{ type: "instagram", url: "https://www.instagram.com/p/DWgvOcvFvWw" }] },
  { name: "G1 Bahia", dateRaw: "04/2026", links: [{ type: "portal", url: "#" }] },
  { name: "Conexão Bahia", dateRaw: "05/2026", links: [{ type: "portal", url: "#" }] }
];

const CredibilitySection = ({ t }: any) => (
  <section className="bg-[#252540]/30 border-y border-border/20 py-8 relative z-20">
    <div className="container mx-auto px-6 lg:px-12">
      <p className="text-center text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-6">{t.credibility.title}</p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
        <motion.a
          href="https://brazilconference.org/" target="_blank" rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity mb-2 md:mb-0"
        >
          <Award size={24} className="text-primary" />
          <div className="text-sm font-bold leading-tight">
            <div>{t.hero.awardTitle}</div>
            <div className="text-xs font-normal">Brazil Conference</div>
          </div>
        </motion.a>

        {pressLinksData.map((press) => (
          <motion.div
            key={press.name}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          >
            <div className="text-sm font-bold border border-border/50 rounded px-4 py-1.5 bg-muted/20 mb-2">
              {press.name}
            </div>
            {press.dateRaw && <span className="text-[10px] text-muted-foreground mb-2 -mt-1">{press.dateRaw}</span>}
            <div className="flex gap-2">
              {press.links.map((link, idx) => (
                <a
                  key={idx} href={link.url} target="_blank" rel="noopener noreferrer"
                  className="p-1.5 rounded-full bg-card border border-border/50 hover:border-primary/50 hover:text-primary transition-colors text-muted-foreground shadow-sm"
                >
                  {link.type === 'instagram' ? <Instagram size={14} /> : <Globe size={14} />}
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Problema ─── */
const ProblemSection = ({ t }: any) => (
  <section className="py-16 relative">
    <div className="container mx-auto px-6 lg:px-12">
      <motion.h2 variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center mb-4">
        {t.problem.title1}<span className="text-primary">{t.problem.titleHighlight}</span>
      </motion.h2>
      <motion.p variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
        {t.problem.desc}
      </motion.p>
      <div className="grid md:grid-cols-3 gap-8">
        {[EyeOff, Unlink, ShieldAlert].map((Icon, i) => (
          <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}>
            <Card className="bg-card/60 backdrop-blur-md border-border/30 rounded-3xl h-full hover:border-primary/30 transition-colors">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold">{t.problem.cards[i].title}</h3>
                <p className="text-muted-foreground leading-relaxed">{t.problem.cards[i].desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Solução ─── */
const SolutionSection = ({ t }: any) => (
  <section className="py-16 relative">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-secondary/5 blur-[100px] rounded-full" />
    </div>
    <div className="container mx-auto px-6 lg:px-12 relative z-10">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-bold leading-tight">
            {t.solution.title1}<span className="text-gradient">{t.solution.titleHighlight}</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-muted-foreground leading-relaxed text-lg">
            {t.solution.desc}
          </motion.p>
          <motion.ul variants={fadeUp} custom={2} className="space-y-3">
            {t.solution.points.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <ChevronRight size={12} className="text-primary" />
                </div>
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </motion.ul>
          <motion.p variants={fadeUp} custom={3} className="text-sm text-primary/80 italic pt-2">
            {t.solution.italic}
          </motion.p>
        </div>

        <motion.div variants={fadeUp} custom={2} className="flex justify-center w-full lg:justify-end pr-0 lg:pr-12">
          <div className="relative group perspective-1000">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-secondary/40 to-accent/40 blur-[80px] -z-10 group-hover:blur-[100px] transition-all duration-700" />

            {/* Outer Hexagon Shield (Border) */}
            <div
              className="w-[280px] h-[340px] md:w-[320px] md:h-[380px] bg-gradient-to-br from-[#FF7B54] via-[#E13C6E] to-[#7329A3] p-[2px] shadow-2xl relative transition-transform duration-700 group-hover:scale-105 mx-auto"
              style={{ clipPath: "polygon(50% 0%, 100% 18%, 100% 82%, 50% 100%, 0% 82%, 0% 18%)" }}
            >
              {/* Inner Hexagon Shield */}
              <div
                className="w-full h-full bg-[#171523] relative"
                style={{ clipPath: "polygon(50% 0%, 100% 18%, 100% 82%, 50% 100%, 0% 82%, 0% 18%)" }}
              >
                {/* Logo Circle */}
                <div className="absolute top-[16%] left-1/2 -translate-x-1/2 w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[#FF7B54] via-[#E13C6E] to-[#7329A3] flex items-center justify-center p-4 shadow-inner">
                  <img src={yaLogo} alt="Yá Logo" className="w-[85%] object-contain drop-shadow-md" />
                </div>

                {/* Details Container */}
                <div className="absolute top-[56%] md:top-[55%] left-0 w-full flex flex-col items-center">
                  <div className="w-8 h-[2px] bg-gradient-to-r from-[#FF7B54] to-[#E13C6E] opacity-90 mb-3" />
                  <p className="text-[10.5px] md:text-[11.5px] font-black tracking-[0.2em] uppercase text-white mb-1">
                    Marca Pioneira
                  </p>
                  <p className="text-3xl md:text-[36px] font-normal tracking-wide text-[#FF7B54] leading-none" style={{ fontFamily: 'sans-serif' }}>
                    2026
                  </p>
                </div>

                {/* Subtitle */}
                <p className="absolute bottom-[16%] left-0 w-full text-center text-[7.5px] md:text-[8px] font-bold tracking-[0.15em] text-white/30 uppercase">
                  Selo de impacto verificado
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

/* ─── Triple Win ─── */
const TripleWinSection = ({ t }: any) => {
  const tripleWin = [
    { icon: Zap, title: t.triple.yaTitle, items: t.triple.yaItems },
    { icon: Users, title: t.triple.comTitle, items: t.triple.comItems },
    { icon: Building2, title: t.triple.brandTitle, items: t.triple.brandItems },
  ];
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.h2 variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center mb-4">
          {t.triple.title1}<span className="text-gradient">{t.triple.titleHighlight}</span>
        </motion.h2>
        <motion.p variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          {t.triple.desc}
        </motion.p>
        <div className="grid md:grid-cols-3 gap-8">
          {tripleWin.map((tw, i) => (
            <motion.div key={tw.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}>
              <Card className="bg-card/60 backdrop-blur-md border-border/30 rounded-3xl h-full hover:border-primary/30 transition-colors">
                <CardContent className="p-8 space-y-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <tw.icon size={28} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{tw.title}</h3>
                  <ul className="space-y-3">
                    {tw.items.map((item: string, j: number) => (
                      <li key={j} className="flex items-start gap-2 text-muted-foreground">
                        <Check size={16} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Story ─── */
const AureaStorySection = ({ t }: any) => (
  <section className="py-16 relative overflow-hidden">
    <div className="absolute inset-0 bg-secondary/5" />
    <div className="container mx-auto px-6 lg:px-12 relative z-10">
      <div className="bg-card border border-border/30 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col lg:flex-row gap-12 items-center">
        <div className="w-full lg:w-2/5 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl z-10 relative">
              <img src={aureaPlaceholder} alt="Áurea" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-card border border-primary/30 rounded-2xl p-4 shadow-xl z-20 max-w-[200px]">
              <Quote className="text-primary mb-2" size={20} />
              <p className="text-xs font-bold leading-tight">{t.story.quote}</p>
            </div>
            <div className="absolute inset-0 bg-primary/20 blur-[80px] -z-10 rounded-full" />
          </div>
        </div>
        <div className="w-full lg:w-3/5 space-y-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{t.story.title}</h2>
            <p className="text-lg text-primary font-semibold">{t.story.subTitle}</p>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>{t.story.p1}</p>
            <p>{t.story.p2}</p>
          </div>
          <div className="pt-4 border-t border-border/40">
            <p className="text-sm font-semibold italic text-foreground">{t.story.imgSign}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─── KPIs ─── */
const KPISection = ({ t }: any) => {
  const kpiIcons = [BarChart3, DollarSign, Heart, TrendingUp];
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.h2 variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center mb-4">
          {t.kpi.title1}<span className="text-primary">{t.kpi.titleHighlight}</span>
        </motion.h2>
        <motion.p variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          {t.kpi.desc}
        </motion.p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.kpi.metrics.map((k: any, i: number) => {
            const Icon = kpiIcons[i];
            return (
              <motion.div key={k.label} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}>
                <Card className="bg-card/60 backdrop-blur-md border-border/30 rounded-3xl h-full hover:border-primary/30 transition-colors group">
                  <CardContent className="p-8 space-y-4 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                      <Icon size={28} className="text-primary" />
                    </div>
                    <p className="text-4xl font-extrabold text-gradient">{k.value}</p>
                    <p className="text-sm font-bold leading-snug">{k.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
        <div className="mt-8 text-center text-sm font-medium text-muted-foreground/90 max-w-3xl mx-auto px-4">
          {t.kpi.disclaimer}
        </div>
      </div>
    </section>
  );
};

/* ─── Pricing ─── */
const PricingSection = ({ t }: any) => {
  const p = t.pricing;
  const packages = [p.pacote1, p.pacote2, p.pacote3];
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.h2 variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center mb-4">
          {p.title1}<span className="text-gradient">{p.titleHighlight}</span>
        </motion.h2>
        <motion.p variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          {p.desc}
          <br /><span className="inline-block mt-2 font-semibold">{p.specialCond}</span>
        </motion.p>

        <motion.div variants={fadeUp} custom={1.5} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex justify-center mb-12">
          <div className="bg-orange-500/15 border border-orange-500/20 text-orange-500 px-6 py-2 rounded-full font-bold text-sm shadow-sm text-center">
            {p.vagasInfo.replace("{data}", DATA_ENCERRAMENTO)}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {packages.map((pkg, i) => (
            <motion.div key={pkg.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}>
              <Card className={`rounded-3xl h-full flex flex-col relative overflow-hidden transition-colors ${pkg.badge
                  ? "bg-gradient-to-b from-primary/10 to-card border-primary/40 shadow-xl"
                  : "bg-card/60 backdrop-blur-md border-border/30 hover:border-primary/30"
                }`}>
                {pkg.badge && (
                  <div className="absolute top-0 right-0 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-bl-2xl">
                    {pkg.badge}
                  </div>
                )}
                <CardContent className="p-8 flex-1 flex flex-col">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold">{pkg.name}</h3>
                    {pkg.tagline && (
                      <p className="mt-2 text-sm text-muted-foreground italic">{pkg.tagline}</p>
                    )}
                  </div>
                  <ul className="space-y-4 mb-8 flex-1">
                    {pkg.features.map((f: string, j: number) => (
                      <li key={j} className="flex items-start gap-3 text-sm">
                        <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full rounded-2xl font-semibold mt-auto ${pkg.badge
                        ? "bg-gradient-hero text-white hover:opacity-90 shadow-lg"
                        : "bg-card border-2 border-border text-foreground hover:border-primary/50"
                      }`}
                    asChild
                  >
                    <a href="#contato">{p.cta} {pkg.name}</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── CTA + Form ─── */
const CTASection = ({ t }: any) => {
  const [form, setForm] = useState({
    nome: "", empresa: "", email: "", tamanho: "", estagio: "", whatsapp: "", cidade: "", estado: ""
  });
  const [coberturaNacional, setCoberturaNacional] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const f = t.form;
  const { ufs, cidades, loading: loadingCidades } = useIBGE(form.estado);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.email.trim() || !form.empresa.trim() || !form.whatsapp.trim()) {
      alert("Por favor, preencha todos os campos obrigatórios (marcados com *).");
      return;
    }

    if (!coberturaNacional && (!form.cidade.trim() || !form.estado.trim())) {
      alert("Por favor, preencha a Cidade e UF ou marque a opção 'Cobertura Nacional'.");
      return;
    }

    const wppLimpo = form.whatsapp.replace(/\D/g, "");
    if (wppLimpo.length < 10) {
      alert("Por favor, insira um WhatsApp ou Celular válido (com DDD).");
      return;
    }
    if (!form.email.includes("@") || !form.email.includes(".")) {
      alert("Por favor, insira um e-mail corporativo válido.");
      return;
    }

    setLoading(true);
    try {
      const baseUrl = import.meta.env.VITE_API_URL || "https://www.praxisagencia.com.br";
      const response = await fetch(`${baseUrl}/api/forms/submit/parceiros`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: form.nome,
          email: form.email,
          empresa: form.empresa,
          whatsapp: form.whatsapp,
          cidade: coberturaNacional ? "Nacional" : form.cidade,
          estado: coberturaNacional ? "BR" : form.estado,
          tamanho: form.tamanho || null,
          estagio: form.estagio || null
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Ocorreu um erro ao enviar. Tente novamente.");
      }
    } catch (err) {
      console.error(err);
      alert("Ocorreu um erro ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-primary/5 to-background" />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
            <motion.p variants={fadeUp} custom={0} className="text-primary font-semibold uppercase tracking-widest text-sm">
              {f.badge}
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-extrabold leading-tight">
              {f.title1} <span className="text-gradient">{f.titleHighlight}</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed text-lg">
              {f.desc}
            </motion.p>
            <motion.p variants={fadeUp} custom={3} className="text-sm text-foreground font-semibold flex items-center gap-2">
              <Mail size={16} className="text-primary" /> ya.ai4good@gmail.com
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}>
            <Card className="bg-card/80 backdrop-blur-xl border-border/40 rounded-3xl shadow-2xl overflow-hidden">
              <CardContent className="p-8">
                {submitted ? (
                  <div className="w-full text-center animate-fade-in">
                    <h3 className="text-2xl font-bold mb-2">{f.successTitle}</h3>
                    <p className="text-muted-foreground mb-6">Escolha o melhor horário para falarmos sobre a nossa parceria.</p>
                    <iframe
                      src="https://calendly.com/s-olipericles/ya-para-comunidades-clone?hide_event_type_details=1&hide_gdpr_banner=1&background_color=17171a&text_color=f6f4f0&primary_color=e26b58"
                      width="100%"
                      height="700"
                      frameBorder="0"
                      className="rounded-xl overflow-hidden"
                    />
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-muted-foreground ml-1">{f.fNome}</label>
                        <Input
                          placeholder={f.fNomePlace} value={form.nome}
                          onChange={(e) => setForm({ ...form, nome: e.target.value })}
                          className="rounded-xl bg-muted/50 border-border/30 h-12" required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-muted-foreground ml-1">{f.fEmail}</label>
                        <Input
                          type="email" placeholder={f.fEmailPlace} value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="rounded-xl bg-muted/50 border-border/30 h-12" required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-muted-foreground ml-1">{f.fEmpresa}</label>
                      <Input
                        placeholder={f.fEmpresaPlace} value={form.empresa}
                        onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                        className="rounded-xl bg-muted/50 border-border/30 h-12" required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-muted-foreground ml-1">WhatsApp / Celular *</label>
                      <Input
                        placeholder="(11) 99999-9999" value={form.whatsapp}
                        onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                        className="rounded-xl bg-muted/50 border-border/30 h-12" required type="tel"
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between ml-1 mb-1">
                        <label className="text-xs font-semibold text-muted-foreground">Cidade / UF *</label>
                        <label className="flex items-center gap-2 cursor-pointer text-xs text-muted-foreground hover:text-white transition-colors">
                          <input
                            type="checkbox"
                            checked={coberturaNacional}
                            onChange={(e) => setCoberturaNacional(e.target.checked)}
                            className="rounded border-border/30 bg-muted/50 w-4 h-4 accent-primary"
                          />
                          Cobertura Nacional
                        </label>
                      </div>

                      {!coberturaNacional && (
                        <div className="flex gap-2">
                          <div className="w-[90px]">
                            <Select onValueChange={(v) => setForm({ ...form, estado: v, cidade: "" })} value={form.estado || undefined}>
                              <SelectTrigger className="w-full rounded-xl bg-muted/50 border-border/30 h-12">
                                <SelectValue placeholder="UF" />
                              </SelectTrigger>
                              <SelectContent>
                                {ufs.map(uf => <SelectItem key={uf.sigla} value={uf.sigla}>{uf.sigla}</SelectItem>)}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="flex-1 relative">
                            <Input
                              list="cidades-list-selo"
                              placeholder={loadingCidades ? "Carregando..." : "Sua Cidade"}
                              value={form.cidade}
                              onChange={(e) => setForm({ ...form, cidade: e.target.value })}
                              className="rounded-xl bg-muted/50 border-border/30 h-12 w-full"
                              required={!coberturaNacional}
                              disabled={!form.estado || loadingCidades}
                            />
                            <datalist id="cidades-list-selo">
                              {cidades.map(c => <option key={c.id} value={c.nome} />)}
                            </datalist>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-muted-foreground ml-1">{f.fTamanho}</label>
                        <Select onValueChange={(v) => setForm({ ...form, tamanho: v })}>
                          <SelectTrigger className="w-full rounded-xl bg-muted/50 border-border/30 h-12">
                            <SelectValue placeholder="Selecione..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ate-100">{f.fTam1}</SelectItem>
                            <SelectItem value="100-1000">{f.fTam2}</SelectItem>
                            <SelectItem value="mais-1000">{f.fTam3}</SelectItem>
                            <SelectItem value="capital-aberto">{f.fTam4}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-muted-foreground ml-1">{f.fEstagio}</label>
                        <Select onValueChange={(v) => setForm({ ...form, estagio: v })}>
                          <SelectTrigger className="w-full rounded-xl bg-muted/50 border-border/30 h-12">
                            <SelectValue placeholder="Selecione..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="explorando">{f.fEst1}</SelectItem>
                            <SelectItem value="estruturando">{f.fEst2}</SelectItem>
                            <SelectItem value="ativo-orcamento">{f.fEst3}</SelectItem>
                            <SelectItem value="cvm-193">{f.fEst4}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Button
                      type="submit" disabled={loading}
                      className="w-full bg-gradient-hero text-white font-bold rounded-2xl shadow-lg hover:opacity-90 transition-all h-14 text-lg mt-4"
                    >
                      {loading ? <Loader2 size={24} className="animate-spin" /> : <>{f.btnSubmit} <ArrowRight size={20} className="ml-2" /></>}
                    </Button>

                    <p className="text-[10px] text-muted-foreground/80 text-center pt-4 px-2 leading-relaxed">
                      {f.legal}
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ─── Footer ─── */
const Footer = ({ t }: any) => (
  <footer className="border-t border-border/30 py-8">
    <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
      <img src={yaLogo} alt="Yá" className="h-6 opacity-60" />
      <p className="text-xs text-muted-foreground">{t.footer.rights.replace("{year}", new Date().getFullYear().toString())}</p>
    </div>
  </footer>
);

import { useLanguage } from "@/contexts/LanguageContext";

/* ─── Page ─── */
const PageSelo = () => {
  const { lang } = useLanguage();
  const t = seloTranslations[lang];

  useEffect(() => {
    document.title = t.meta.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t.meta.desc);
  }, [t]);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors relative">
      <Header t={t} />
      <HeroSection t={t} />
      <CredibilitySection t={t} />
      <ProblemSection t={t} />
      <SolutionSection t={t} />
      <TripleWinSection t={t} />
      <AureaStorySection t={t} />
      <KPISection t={t} />
      <PricingSection t={t} />
      <CTASection t={t} />
      <DonationCard />
      <Footer t={t} />
    </div>
  );
};

export default PageSelo;
