import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Award, ChevronRight, Check, Loader2, Heart, Users, Gift, BarChart3,
  Star, FileText, ArrowRight, MessageCircle, Clock, Smartphone, UserCheck,
  TrendingUp, Quote, Instagram, Globe
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import yaLogo from "@/assets/logos/ya_logo_branco.svg";
import aureaPhoto from "@/assets/maes/aurea.jpeg";
import { useIBGE } from "@/hooks/useIBGE";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { communityTranslations } from "./CommunityTranslations";
import DonationCard from "@/components/DonationCard";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const }
  })
};

/* ─── Header ─── */
const Header = ({ t, toggleLang }: any) => (
  <header className="absolute top-0 w-full z-50 bg-transparent">
    <div className="container mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
      <a href="/" className="cursor-pointer hover:opacity-80 transition-opacity">
        <img src={yaLogo} alt="Yá Logo" className="h-6 opacity-80 object-contain" />
      </a>
      <button
        onClick={toggleLang}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-card/40 backdrop-blur-md hover:bg-muted transition-colors text-xs font-semibold text-foreground uppercase tracking-widest"
      >
        <Globe className="w-3.5 h-3.5" />
        <span>{t.nav.toggle}</span>
      </button>
    </div>
  </header>
);

/* ─── 1. Hero ─── */
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

        <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4 pt-2">
          <Button size="lg" className="bg-gradient-hero text-white font-semibold rounded-2xl shadow-lg hover:opacity-90 transition-opacity" asChild>
            <a href="#formulario" className="flex items-center gap-2">
              👉 {t.hero.btnPrimary} <ChevronRight size={18} />
            </a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Right side: Áurea + Award */}
      <motion.div
        initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="hidden lg:flex flex-col items-center gap-6"
      >
        <div className="flex flex-col items-center">
          <div className="w-40 h-40 rounded-full border-4 border-primary/30 overflow-hidden mb-4 shadow-xl">
            <img src={aureaPhoto} alt="Áurea" className="w-full h-full object-cover" />
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
            <div>{t.credibility.bcLabel}</div>
            <div className="text-xs font-normal">{t.credibility.bcSub}</div>
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

/* ─── 2. O que é a Yá ─── */
const WhatIsSection = ({ t }: any) => (
  <section className="py-16 relative">
    <div className="container mx-auto px-6 lg:px-12">
      <motion.h2 variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center mb-4">
        {t.whatIs.title1}<span className="text-gradient">{t.whatIs.titleHighlight}</span>
      </motion.h2>
      <motion.p variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center text-muted-foreground max-w-2xl mx-auto mb-10 text-lg">
        {t.whatIs.desc}
      </motion.p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {t.whatIs.items.map((item: any, i: number) => (
          <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}>
            <Card className="bg-card/60 backdrop-blur-md border-border/30 rounded-3xl h-full hover:border-primary/30 transition-colors group">
              <CardContent className="p-8 space-y-4 text-center">
                <div className="text-4xl mb-2">{item.emoji}</div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── 3. Para quem é ─── */
const AudienceSection = ({ t }: any) => (
  <section className="py-16 relative overflow-hidden">
    <div className="absolute inset-0 bg-[#252540]/20" />
    <div className="container mx-auto px-6 lg:px-12 relative z-10">
      <motion.h2 variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center mb-4">
        {t.audience.title1}<span className="text-gradient">{t.audience.titleHighlight}</span>
      </motion.h2>
      <motion.p variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center text-muted-foreground max-w-2xl mx-auto mb-10 text-lg">
        {t.audience.desc}
      </motion.p>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {t.audience.items.map((item: any, i: number) => (
          <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}>
            <Card className="bg-card/60 backdrop-blur-md border-border/30 rounded-3xl h-full hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] group">
              <CardContent className="p-8 space-y-4 text-center">
                <div className="text-5xl mb-3">{item.emoji}</div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── 4. O que sua comunidade ganha ─── */
const BenefitsSection = ({ t }: any) => {
  const iconMap: Record<string, any> = { gift: Gift, chart: BarChart3, report: FileText, star: Star };
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
      </div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.h2 variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center mb-4">
          {t.benefits.title1}<span className="text-gradient">{t.benefits.titleHighlight}</span>
        </motion.h2>
        <motion.p variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center text-muted-foreground max-w-2xl mx-auto mb-10 text-lg">
          {t.benefits.desc}
        </motion.p>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {t.benefits.items.map((item: any, i: number) => {
            const Icon = iconMap[item.icon] || Gift;
            return (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}>
                <Card className="bg-card/60 backdrop-blur-md border-border/30 rounded-3xl h-full hover:border-primary/30 transition-colors group">
                  <CardContent className="p-8 flex gap-5 items-start">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon size={28} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ─── 5. Como funciona o piloto ─── */
const HowItWorksSection = ({ t }: any) => {
  const stepIcons = [Clock, Smartphone, UserCheck, TrendingUp];
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#252540]/20" />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.h2 variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center mb-4">
          {t.howItWorks.title1}<span className="text-gradient">{t.howItWorks.titleHighlight}</span>
        </motion.h2>
        <motion.p variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center text-muted-foreground max-w-2xl mx-auto mb-10 text-lg">
          {t.howItWorks.desc}
        </motion.p>
        <div className="max-w-3xl mx-auto space-y-0">
          {t.howItWorks.steps.map((step: any, i: number) => {
            const Icon = stepIcons[i];
            return (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}>
                <div className="flex gap-6 items-start relative">
                  {i < t.howItWorks.steps.length - 1 && (
                    <div className="absolute left-7 top-16 w-[2px] h-full bg-gradient-to-b from-primary/30 to-transparent" />
                  )}
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 relative z-10 border border-primary/20">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <div className="pb-10">
                    <span className="text-xs text-primary font-bold tracking-widest uppercase">{step.number}</span>
                    <h3 className="text-xl font-bold mt-1">{step.title}</h3>
                    <p className="text-muted-foreground mt-2 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ─── 6. O que vamos medir ─── */
const MetricsSection = ({ t }: any) => (
  <section className="py-16 relative">
    <div className="container mx-auto px-6 lg:px-12">
      <motion.h2 variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center mb-4">
        {t.metrics.title1}<span className="text-gradient">{t.metrics.titleHighlight}</span>
      </motion.h2>
      <motion.p variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center text-muted-foreground max-w-2xl mx-auto mb-10 text-lg">
        {t.metrics.desc}
      </motion.p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {t.metrics.items.map((item: any, i: number) => (
          <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}>
            <Card className="bg-card/60 backdrop-blur-md border-border/30 rounded-3xl h-full hover:border-primary/30 transition-colors group text-center">
              <CardContent className="p-8 space-y-3">
                <div className="text-4xl">{item.value}</div>
                <h3 className="text-lg font-bold">{item.label}</h3>
                <p className="text-xs text-muted-foreground">{item.sub}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── 7. Escassez ─── */
const ScarcitySection = ({ t }: any) => (
  <section className="py-16 relative">
    <div className="container mx-auto px-6 lg:px-12">
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
        className="max-w-3xl mx-auto"
      >
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/5 border border-primary/20 p-8 md:p-12">
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 blur-[80px] rounded-full animate-pulse-slow" />
          <div className="relative z-10 text-center space-y-4">
            <h3 className="text-2xl md:text-3xl font-extrabold">{t.scarcity.title}</h3>
            <p className="text-lg text-foreground leading-relaxed max-w-xl mx-auto">{t.scarcity.desc}</p>
            <p className="text-sm text-primary font-semibold italic">{t.scarcity.detail}</p>
            <div className="pt-4">
              <Button size="lg" className="bg-gradient-hero text-white font-bold rounded-2xl shadow-lg hover:opacity-90 transition-opacity" asChild>
                <a href="#formulario" className="flex items-center gap-2">
                  {t.scarcity.btnLabel} <ArrowRight size={18} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ─── 8. História da Áurea ─── */
const AureaStorySection = ({ t }: any) => (
  <section className="py-16 relative overflow-hidden">
    <div className="absolute inset-0 bg-secondary/5" />
    <div className="container mx-auto px-6 lg:px-12 relative z-10">
      <div className="bg-card border border-border/30 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col lg:flex-row gap-12 items-center">
        <div className="w-full lg:w-2/5 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl z-10 relative">
              <img src={aureaPhoto} alt="Áurea" className="w-full h-full object-cover" />
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

/* ─── 9. Prova Social ─── */
const ProofSection = ({ t }: any) => {
  const proofIcons = [Award, Heart, Users];
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#252540]/20" />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.h2 variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center mb-10">
          {t.proof.title1}<span className="text-gradient">{t.proof.titleHighlight}</span>
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {t.proof.items.map((item: any, i: number) => {
            const Icon = proofIcons[i];
            return (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}>
                <Card className="bg-card/60 backdrop-blur-md border-border/30 rounded-3xl h-full hover:border-primary/30 transition-colors">
                  <CardContent className="p-8 space-y-4 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                      <Icon size={32} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ─── 10. CTA + Formulário ─── */
const CTAFormSection = ({ t }: any) => {
  const [form, setForm] = useState({
    nome: "", comunidade: "", mulheres: "", cidade: "", estado: "", whatsapp: "", motivo: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const trustIcons = [Check, MessageCircle, Heart];
  const { ufs, cidades, loading: loadingCidades } = useIBGE(form.estado);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.comunidade.trim() || !form.whatsapp.trim() || !form.cidade.trim() || !form.estado.trim() || !form.mulheres.trim() || Number(form.mulheres) < 1) return;
    const whatsappLimpo = form.whatsapp.replace(/\D/g, "");
    if (whatsappLimpo.length < 10) {
      alert("Por favor, insira um número de WhatsApp válido (com DDD).");
      return;
    }
    
    setLoading(true);
    try {
      const baseUrl = import.meta.env.VITE_API_URL || "https://www.praxisagencia.com.br";
      const response = await fetch(`${baseUrl}/api/forms/submit/comunidade`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: form.nome,
          comunidade: form.comunidade,
          mulheres: form.mulheres ? parseInt(form.mulheres, 10) : null,
          cidade: form.cidade,
          estado: form.estado,
          whatsapp: form.whatsapp,
          motivo: form.motivo
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
    <section id="formulario" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full" />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* CTA */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
            <motion.p variants={fadeUp} custom={0} className="text-primary font-semibold uppercase tracking-widest text-sm">
              {t.cta.badge}
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              {t.cta.title1}<span className="text-gradient">{t.cta.titleHighlight}</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              {t.cta.desc}
            </motion.p>

            <motion.div variants={fadeUp} custom={3} className="space-y-3 pt-4">
              {t.cta.trust.map((text: string, i: number) => {
                const Icon = trustIcons[i];
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                      <Icon size={12} className="text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{text}</span>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}>
            <Card className="bg-card/80 backdrop-blur-xl border-border/40 rounded-3xl shadow-2xl overflow-hidden">
              <CardContent className="p-8">
                {submitted ? (
                  <div className="w-full text-center animate-fade-in">
                    <h3 className="text-2xl font-bold mb-2">{t.form.successTitle}</h3>
                    <p className="text-muted-foreground mb-6">Escolha o melhor horário para conversarmos sobre a sua comunidade.</p>
                    <iframe 
                      src="https://calendly.com/s-olipericles/ya-para-comunidades?hide_event_type_details=1&hide_gdpr_banner=1&background_color=17171a&text_color=f6f4f0&primary_color=e26b58" 
                      width="100%" 
                      height="700" 
                      frameBorder="0"
                      className="rounded-xl overflow-hidden"
                    />
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-xl font-bold text-center mb-6">{t.form.title}</h3>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-muted-foreground ml-1">{t.form.fNome} *</label>
                        <Input
                          placeholder={t.form.fNomePlace} value={form.nome}
                          onChange={(e) => setForm({ ...form, nome: e.target.value })}
                          className="rounded-xl bg-muted/50 border-border/30 h-12" required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-muted-foreground ml-1">{t.form.fComunidade} *</label>
                        <Input
                          placeholder={t.form.fComunidadePlace} value={form.comunidade}
                          onChange={(e) => setForm({ ...form, comunidade: e.target.value })}
                          className="rounded-xl bg-muted/50 border-border/30 h-12" required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-muted-foreground ml-1">{t.form.fMulheres} *</label>
                        <Input
                          placeholder={t.form.fMulheresPlace} value={form.mulheres}
                          onChange={(e) => setForm({ ...form, mulheres: e.target.value })}
                          className="rounded-xl bg-muted/50 border-border/30 h-12" type="number" required min="1"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-muted-foreground ml-1">{t.form.fCidade} / UF *</label>
                        <div className="flex gap-2">
                          <div className="w-[90px]">
                            <Select onValueChange={(v) => setForm({...form, estado: v, cidade: ""})} value={form.estado || undefined}>
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
                              list="cidades-list-comunidade"
                              placeholder={loadingCidades ? "Carregando..." : t.form.fCidadePlace} 
                              value={form.cidade}
                              onChange={(e) => setForm({ ...form, cidade: e.target.value })}
                              className="rounded-xl bg-muted/50 border-border/30 h-12 w-full" 
                              required 
                              disabled={!form.estado || loadingCidades}
                            />
                            <datalist id="cidades-list-comunidade">
                              {cidades.map(c => <option key={c.id} value={c.nome} />)}
                            </datalist>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-muted-foreground ml-1">{t.form.fWhatsapp} *</label>
                      <Input
                        placeholder={t.form.fWhatsappPlace} value={form.whatsapp}
                        onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                        className="rounded-xl bg-muted/50 border-border/30 h-12" required type="tel"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-muted-foreground ml-1">{t.form.fMotivo}</label>
                      <Textarea
                        placeholder={t.form.fMotivoPlace} value={form.motivo}
                        onChange={(e) => setForm({ ...form, motivo: e.target.value })}
                        className="rounded-xl bg-muted/50 border-border/30 min-h-[100px] resize-none"
                        rows={4}
                      />
                    </div>

                    <Button
                      type="submit" disabled={loading}
                      className="w-full bg-gradient-hero text-white font-bold rounded-2xl shadow-lg hover:opacity-90 transition-all h-14 text-lg mt-4"
                    >
                      {loading ? <Loader2 size={24} className="animate-spin" /> : <>{t.form.btnSubmit} <ArrowRight size={20} className="ml-2" /></>}
                    </Button>

                    <p className="text-[10px] text-muted-foreground/80 text-center pt-4 px-2 leading-relaxed">
                      {t.form.legal}
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

/* ─── Page ─── */
const PageCommunity = () => {
  const [lang, setLang] = useState<"pt" | "en">("pt");
  const t = communityTranslations[lang];

  useEffect(() => {
    document.title = t.meta.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t.meta.desc);
  }, [t]);

  const toggleLang = () => setLang(prev => prev === "pt" ? "en" : "pt");

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors relative">
      <Header t={{ nav: { toggle: lang === "pt" ? "EN" : "PT" } }} toggleLang={toggleLang} />
      <HeroSection t={t} />
      <CredibilitySection t={t} />
      <WhatIsSection t={t} />
      <AudienceSection t={t} />
      <BenefitsSection t={t} />
      <HowItWorksSection t={t} />
      <MetricsSection t={t} />
      <ScarcitySection t={t} />
      <AureaStorySection t={t} />
      <ProofSection t={t} />
      <CTAFormSection t={t} />
      <DonationCard lang={lang} />
      <Footer t={t} />
    </div>
  );
};

export default PageCommunity;
