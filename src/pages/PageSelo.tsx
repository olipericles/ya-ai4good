import { useState } from "react";
import { motion } from "framer-motion";
import {
  Eye, Link2, ShieldAlert, BarChart3, DollarSign, Heart, TrendingUp,
  Building2, MessageCircle, FileText, ArrowRight, Mail, Award, ChevronRight,
  Users, Zap, Shield, BadgeCheck, Megaphone, PieChart, Star, Check, Loader2
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import yaLogo from "@/assets/logos/ya_logo_branco.svg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const }
  })
};

/* ─── Hero ─── */
const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[120px]" />
    </div>

    <div className="container mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
      <motion.div initial="hidden" animate="visible" className="space-y-6">
        <motion.span
          variants={fadeUp} custom={0}
          className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/15 text-primary border border-primary/20"
        >
          Yá for Business
        </motion.span>

        <motion.h1
          variants={fadeUp} custom={1}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight"
        >
          Não entregamos PDF com foto de mãe feliz.{" "}
          <span className="text-gradient">Entregamos o Selo de Impacto Yá.</span>
        </motion.h1>

        <motion.p variants={fadeUp} custom={2} className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
          Conectamos seu investimento social diretamente ao CPF anonimizado da mãe solo e medimos em tempo real a curva de inadimplência, o aumento da poupança para educação e o score financeiro da família.
        </motion.p>

        <motion.p variants={fadeUp} custom={2.5} className="text-sm text-muted-foreground/70 italic max-w-lg">
          Isso não é relato social. Isso é Materialidade Financeira para o seu balanço patrimonial.
        </motion.p>

        <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4 pt-2">
          <Button size="lg" className="bg-gradient-hero text-white font-semibold rounded-2xl shadow-lg hover:opacity-90 transition-opacity" asChild>
            <a href="#contato" className="flex items-center gap-2">
              Quero o Selo de Impacto da minha marca <ChevronRight size={18} />
            </a>
          </Button>
          <Button variant="outline" size="lg" className="rounded-2xl border-border/60" asChild>
            <a href="#contato">Agendar demonstração de 15 min</a>
          </Button>
        </motion.div>
      </motion.div>

      {/* dashboard mock */}
      <motion.div
        initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="hidden lg:block"
      >
        <Card className="bg-card/80 backdrop-blur-xl border-border/40 rounded-3xl shadow-2xl p-6 space-y-4">
          <p className="text-xs text-muted-foreground tracking-wide uppercase">Renda Disponível Após Uso da Yá</p>
          <div className="flex items-end gap-3 h-40">
            {[35, 50, 62, 78, 90, 100].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: 0.8 + i * 0.12, duration: 0.6, ease: "easeOut" as const }}
                className="flex-1 rounded-xl bg-gradient-to-t from-secondary to-primary"
              />
            ))}
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Jan</span><span>Fev</span><span>Mar</span><span>Abr</span><span>Mai</span><span>Jun</span>
          </div>
          <div className="flex items-center gap-2 pt-2">
            <TrendingUp size={16} className="text-primary" />
            <span className="text-sm font-semibold text-primary">+62% renda liberada</span>
          </div>
        </Card>
      </motion.div>
    </div>
  </section>
);

/* ─── Problema ─── */
const ProblemSection = () => (
  <section className="py-24 relative">
    <div className="container mx-auto px-6 lg:px-12">
      <motion.h2
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeUp} custom={0}
        className="text-3xl md:text-4xl font-bold text-center mb-4"
      >
        Sua empresa investe em impacto.{" "}
        <span className="text-primary">Mas onde está a prova financeira?</span>
      </motion.h2>
      <motion.p
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeUp} custom={1}
        className="text-center text-muted-foreground max-w-2xl mx-auto mb-14"
      >
        ESG genérico, falta de mensuração real, greenwashing involuntário e dificuldade de mostrar ROI ao conselho. Soa familiar?
      </motion.p>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: Eye, title: "Invisibilidade", desc: "Você doa, mas não sabe se o dinheiro virou comida na mesa ou pagou juros do banco." },
          { icon: Link2, title: "Desconexão", desc: "11 Milhões de mães solo são o motor da economia, mas seu app ou produto não fala a língua delas." },
          { icon: ShieldAlert, title: "Risco Regulatório", desc: "Normas IFRS S1 e Resolução CVM 193 exigem dados de impacto social auditáveis. Você tem?" }
        ].map((p, i) => (
          <motion.div key={p.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}>
            <Card className="bg-card/60 backdrop-blur-md border-border/30 rounded-3xl h-full hover:border-primary/30 transition-colors">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <p.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Solução + Selo ─── */
const SolutionSection = () => (
  <section className="py-24 relative">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-secondary/5 blur-[100px] rounded-full" />
    </div>
    <div className="container mx-auto px-6 lg:px-12 relative z-10">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-bold leading-tight">
            O selo que transforma impacto social em{" "}
            <span className="text-gradient">dado financeiro mensurável.</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-muted-foreground leading-relaxed text-lg">
            Uma plataforma de inteligência (SaaS) que conecta sua marca à comunidade Yá de forma anonimizada e LGPD-compliant. Três lados ganham.
          </motion.p>
          <motion.ul variants={fadeUp} custom={2} className="space-y-3">
            {[
              "Dados de impacto real em tempo real",
              "Relatórios auditáveis padrão IFRS",
              "Integração anonimizada LGPD-compliant",
              "Dashboard executivo para o Board"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <ChevronRight size={12} className="text-primary" />
                </div>
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div variants={fadeUp} custom={2} className="flex justify-center">
          <div className="relative">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 backdrop-blur-md border-2 border-primary/30 flex flex-col items-center justify-center text-center p-10 shadow-2xl">
              <Award size={48} className="text-primary mb-3" />
              <p className="font-extrabold text-lg leading-tight">Selo Yá de Origem</p>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                Esta empresa reduz a pobreza menstrual e o superendividamento feminino.
              </p>
            </div>
            <div className="absolute -z-10 inset-0 rounded-full bg-primary/10 blur-[60px]" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

/* ─── Triple Win ─── */
const tripleWin = [
  {
    icon: Zap, title: "Yá",
    items: ["Escala de usuárias", "Retenção via marca", "Dados em tempo real"]
  },
  {
    icon: Users, title: "Comunidade",
    items: ["Queda de inadimplência", "Poupança para educação", "Score financeiro melhor"]
  },
  {
    icon: Building2, title: "Sua Marca",
    items: ["ROI de vendas direto", "Materialidade financeira", "Credencial ESG forte + Selo"]
  },
];

const TripleWinSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-6 lg:px-12">
      <motion.h2
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeUp} custom={0}
        className="text-3xl md:text-4xl font-bold text-center mb-4"
      >
        Como funciona: <span className="text-gradient">Triple Win</span>
      </motion.h2>
      <motion.p
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeUp} custom={1}
        className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto"
      >
        Três lados ganham. Nenhum fica de fora.
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
                <ul className="space-y-2">
                  {tw.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-muted-foreground">
                      <Check size={14} className="text-primary flex-shrink-0" />
                      <span>{item}</span>
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

/* ─── KPIs ─── */
const kpis = [
  { icon: BarChart3, label: "Redução do CAC", value: "3x", desc: "Consumidoras impactadas compram 3x mais da marca apoiadora." },
  { icon: DollarSign, label: "Renda Liberada", value: "R$ 147", desc: "Por mês em média deixam de ir para juros e vão para o consumo essencial." },
  { icon: Heart, label: "NPS Social", value: "78%", desc: "Das mães sentem menos ansiedade financeira." },
  { icon: TrendingUp, label: "Índice de Retenção", value: "+40%", desc: "Aumento na fidelidade à marca patrocinadora." },
];

const KPISection = () => (
  <section className="py-24">
    <div className="container mx-auto px-6 lg:px-12">
      <motion.h2
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeUp} custom={0}
        className="text-3xl md:text-4xl font-bold text-center mb-4"
      >
        O que seu CFO verá no <span className="text-primary">Dashboard.</span>
      </motion.h2>
      <motion.p
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeUp} custom={1}
        className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto"
      >
        Métricas reais de impacto social traduzidas para a linguagem do seu Board.
      </motion.p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((k, i) => (
          <motion.div key={k.label} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}>
            <Card className="bg-card/60 backdrop-blur-md border-border/30 rounded-3xl h-full hover:border-primary/30 transition-colors group">
              <CardContent className="p-8 space-y-4 text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <k.icon size={28} className="text-primary" />
                </div>
                <p className="text-4xl font-extrabold text-gradient">{k.value}</p>
                <h3 className="text-base font-bold">{k.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{k.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Benefits ─── */
const benefits = [
  { icon: BadgeCheck, text: "Direito de usar o Selo Yá em campanhas e relatório anual" },
  { icon: Shield, text: "Prova mensurável para CVM e investidores" },
  { icon: PieChart, text: "ROI de vendas direto via mães solo" },
  { icon: Megaphone, text: "Dados exclusivos de consumo desse público" },
];

const BenefitsSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-6 lg:px-12">
      <motion.h2
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeUp} custom={0}
        className="text-3xl md:text-4xl font-bold text-center mb-14"
      >
        Benefícios para <span className="text-gradient">sua marca.</span>
      </motion.h2>

      <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {benefits.map((b, i) => (
          <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}
            className="flex items-start gap-4 p-6 rounded-2xl bg-card/40 border border-border/20"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <b.icon size={20} className="text-primary" />
            </div>
            <p className="text-foreground leading-relaxed">{b.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Timeline ─── */
const TimelineSection = () => (
  <section className="py-24 relative">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
    </div>
    <div className="container mx-auto px-6 lg:px-12 relative z-10">
      <motion.h2
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeUp} custom={0}
        className="text-3xl md:text-4xl font-bold text-center mb-14"
      >
        Do Investimento ao <span className="text-gradient">Relatório Auditável.</span>
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 relative">
        <div className="hidden md:block absolute top-16 left-[16.6%] right-[16.6%] h-0.5 bg-gradient-to-r from-primary/40 via-secondary/40 to-primary/40" />
        {[
          { icon: Building2, title: "Investimento", desc: "Sua marca investe no programa Yá para uma comunidade ou região." },
          { icon: MessageCircle, title: "Uso da IA", desc: "As mães usam a IA no WhatsApp (anonimizado)." },
          { icon: FileText, title: "Relatório", desc: "Você recebe um Relatório de Materialidade mensal para o Board." },
        ].map((s, i) => (
          <motion.div key={s.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}
            className="flex flex-col items-center text-center"
          >
            <div className="relative z-10 w-16 h-16 rounded-full bg-card border-2 border-primary/40 flex items-center justify-center mb-6 shadow-lg">
              <s.icon size={28} className="text-primary" />
            </div>
            <span className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Passo {i + 1}</span>
            <h3 className="text-xl font-bold mb-2">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed max-w-xs">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Pricing ─── */
const packages = [
  {
    name: "Starter", price: "R$ 48 mil", period: "/ano", highlight: false,
    features: ["Selo Yá para 1 campanha", "Relatório mensal básico", "Até 500 mães impactadas", "Dashboard com métricas-chave"]
  },
  {
    name: "Growth", price: "R$ 98 mil", period: "/ano", highlight: true, badge: "Mais vendido",
    features: ["Selo Yá para campanhas ilimitadas", "Relatório mensal completo + auditoria", "Até 2.000 mães impactadas", "Dashboard avançado + API", "Dados exclusivos de consumo"]
  },
  {
    name: "Enterprise", price: "R$ 198 mil", period: "/ano", highlight: false,
    features: ["Tudo do Growth", "Comunidades ilimitadas", "White-label do relatório", "Suporte dedicado", "Consultoria trimestral de materialidade"]
  },
];

const PricingSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-6 lg:px-12">
      <motion.h2
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeUp} custom={0}
        className="text-3xl md:text-4xl font-bold text-center mb-4"
      >
        Escolha seu nível de <span className="text-gradient">impacto.</span>
      </motion.h2>
      <motion.p
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeUp} custom={1}
        className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto"
      >
        Cada pacote entrega resultados mensuráveis para seu relatório anual.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {packages.map((pkg, i) => (
          <motion.div key={pkg.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}>
            <Card className={`rounded-3xl h-full relative overflow-hidden transition-colors ${
              pkg.highlight
                ? "bg-gradient-to-b from-primary/10 to-card border-primary/40 shadow-xl"
                : "bg-card/60 backdrop-blur-md border-border/30 hover:border-primary/30"
            }`}>
              {pkg.badge && (
                <div className="absolute top-0 right-0 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-bl-2xl">
                  {pkg.badge}
                </div>
              )}
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-bold">{pkg.name}</h3>
                  <div className="mt-2">
                    <span className="text-3xl font-extrabold text-gradient">{pkg.price}</span>
                    <span className="text-muted-foreground text-sm">{pkg.period}</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full rounded-2xl font-semibold ${
                    pkg.highlight
                      ? "bg-gradient-hero text-white hover:opacity-90"
                      : "bg-card border border-primary/30 text-primary hover:bg-primary/10"
                  }`}
                  asChild
                >
                  <a href="#contato">Quero este plano</a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── CTA + Form ─── */
const CTASection = () => {
  const [form, setForm] = useState({ nome: "", empresa: "", cargo: "", email: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.email.trim()) return;
    setLoading(true);
    // Simulates sending — replace with real endpoint
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1200);
  };

  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/15 via-primary/10 to-background" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          {/* left copy */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
            <motion.p variants={fadeUp} custom={0} className="text-primary font-semibold uppercase tracking-widest text-sm">
              Seja pioneira
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-extrabold leading-tight">
              Seja a primeira marca a carregar o{" "}
              <span className="text-gradient">Selo de Impacto Yá</span> em 2026.
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed">
              Chega de PDF bonito. Vamos falar de Resultado Social Auditável.
            </motion.p>
            <motion.p variants={fadeUp} custom={3} className="text-sm text-muted-foreground flex items-center gap-2">
              <Mail size={14} /> impacto@ya-assistente.com.br
            </motion.p>
          </motion.div>

          {/* right form */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}>
            <Card className="bg-card/80 backdrop-blur-xl border-border/40 rounded-3xl shadow-2xl">
              <CardContent className="p-8">
                {submitted ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center mx-auto">
                      <Check size={32} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Recebemos seu interesse!</h3>
                    <p className="text-muted-foreground">O time Yá entrará em contato em até 48h.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-lg font-bold mb-2">Agendar reunião com o time Yá</h3>
                    <Input
                      placeholder="Seu nome"
                      value={form.nome}
                      onChange={(e) => setForm({ ...form, nome: e.target.value })}
                      className="rounded-xl bg-muted/50 border-border/30"
                      maxLength={100}
                      required
                    />
                    <Input
                      placeholder="Empresa"
                      value={form.empresa}
                      onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                      className="rounded-xl bg-muted/50 border-border/30"
                      maxLength={100}
                    />
                    <Input
                      placeholder="Cargo"
                      value={form.cargo}
                      onChange={(e) => setForm({ ...form, cargo: e.target.value })}
                      className="rounded-xl bg-muted/50 border-border/30"
                      maxLength={100}
                    />
                    <Input
                      type="email"
                      placeholder="E-mail corporativo"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="rounded-xl bg-muted/50 border-border/30"
                      maxLength={255}
                      required
                    />
                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-hero text-white font-semibold rounded-2xl shadow-lg hover:opacity-90 transition-opacity"
                      size="lg"
                    >
                      {loading ? <Loader2 size={18} className="animate-spin" /> : <>Quero o meu Selo agora <ArrowRight size={18} /></>}
                    </Button>
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
const Footer = () => (
  <footer className="border-t border-border/30 py-8">
    <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
      <img src={yaLogo} alt="Yá" className="h-6 opacity-60" />
      <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Yá — AI for Good. Todos os direitos reservados.</p>
    </div>
  </footer>
);

/* ─── Page ─── */
const PageSelo = () => (
  <div className="min-h-screen bg-background text-foreground">
    <HeroSection />
    <ProblemSection />
    <SolutionSection />
    <TripleWinSection />
    <KPISection />
    <BenefitsSection />
    <TimelineSection />
    <PricingSection />
    <CTASection />
    <Footer />
  </div>
);

export default PageSelo;
