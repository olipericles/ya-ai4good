import { useState } from "react";
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

// Import maes placeholder - user can update this later
import aureaPlaceholder from "@/assets/maes/aurea.jpeg"; 

// Variáveis da Cohort Fundadora 2026
const VAGAS_APOIADORA = 5;
const VAGAS_PARCEIRA = 3;
const VAGAS_FUNDADORA = 2;
const DATA_ENCERRAMENTO = "30/06/2026";

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
          Conectamos seu investimento social diretamente ao CPF anonimizado da mãe solo, e medimos em tempo real a curva de inadimplência, o aumento de poupança para educação e o score financeiro da família. Edição 2026 para Marcas Pioneiras com vagas limitadas.
        </motion.p>

        <motion.p variants={fadeUp} custom={2.5} className="text-sm text-muted-foreground/70 italic max-w-lg">
          Isso não é relato social. Isso é Materialidade Financeira para o seu balanço patrimonial.
        </motion.p>

        <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4 pt-2">
          <Button size="lg" className="bg-gradient-hero text-white font-semibold rounded-2xl shadow-lg hover:opacity-90 transition-opacity" asChild>
            <a href="#contato" className="flex items-center gap-2">
              Candidate-se como Marca Pioneira <ChevronRight size={18} />
            </a>
          </Button>
          <Button variant="outline" size="lg" className="rounded-2xl border-border/60" asChild>
            <a href="#contato">Conhecer o método em 20 minutos</a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Hero Visual Composition */}
      <motion.div
        initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="hidden lg:flex flex-col items-center gap-6"
      >
        {/* Aurea Photo & Quote */}
        <div className="flex flex-col items-center">
          <div className="w-40 h-40 rounded-full border-4 border-primary/30 overflow-hidden mb-4 shadow-xl">
            {/* Using a placeholder from assets/maes - user can change to official photo */}
            <img src={aureaPlaceholder} alt="Áurea Valéria" className="w-full h-full object-cover" />
          </div>
          <Card className="bg-card/80 backdrop-blur-md border-border/40 rounded-2xl max-w-md text-center p-4">
            <Quote size={20} className="text-primary/50 mx-auto mb-2" />
            <p className="text-sm italic text-foreground mb-2">
              "Eu tinha medo de ver os números. A Yá me mostrou sem julgamento."
            </p>
            <p className="text-xs text-muted-foreground font-semibold">
              Áurea, mãe transformada do piloto Yá
            </p>
          </Card>
        </div>

        {/* Award Badge Placeholder */}
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 backdrop-blur-md rounded-2xl text-center p-4 w-full max-w-md flex items-center justify-center gap-3">
          <Award size={32} className="text-primary" />
          <div className="text-left">
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Vencedor AI4Good 2026</p>
            <p className="text-sm font-semibold">Brazil Conference Harvard e MIT</p>
            <p className="text-[10px] text-muted-foreground">Único projeto da região Nordeste entre 188 inscritos</p>
          </div>
        </Card>


      </motion.div>
    </div>
  </section>
);

/* ─── Faixa de Credibilidade (NOVA) ─── */
const pressLinks = [
  {
    name: "Alma Preta",
    links: [
      { type: "portal", url: "https://almapreta.com.br/sessao/cotidiano/projeto-salvador-maes-solo-gestao-financeira/" }
    ]
  },
  {
    name: "Nordeste Eu Sou",
    links: [
      { type: "portal", url: "https://nordesteusou.com.br/noticias/da-periferia-para-harvard-jovens-de-salvador-vencem-premio-internacional-com-ia-que-ajuda-maes-solo/" },
      { type: "instagram", url: "https://www.instagram.com/p/DWgtyMWFlWA" }
    ]
  },
  {
    name: "JC Bairro da Paz",
    links: [
      { type: "instagram", url: "https://www.instagram.com/p/DWgvOcvFvWw" }
    ]
  },
  {
    name: "G1 Bahia",
    date: "abril 2026",
    links: [
      { type: "portal", url: "#" }
    ]
  },
  {
    name: "Conexão Bahia",
    date: "maio 2026",
    links: [
      { type: "portal", url: "#" }
    ]
  }
];

const CredibilitySection = () => (
  <section className="bg-[#252540]/30 border-y border-border/20 py-8 relative z-20">
    <div className="container mx-auto px-6 lg:px-12">
      <p className="text-center text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-6">Reconhecido por:</p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
        
        {/* Prêmio principal */}
        <motion.a 
          href="https://brazilconference.org/" target="_blank" rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity mb-2 md:mb-0"
        >
           <Award size={24} className="text-primary" />
           <div className="text-sm font-bold leading-tight">
              <div>Vencedor AI4Good 2026</div>
              <div className="text-xs font-normal">Brazil Conference</div>
           </div>
        </motion.a>

        {/* Imprensa renderizada automaticamente */}
        {pressLinks.map((press) => (
          <motion.div 
            key={press.name}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          >
            <div className="text-sm font-bold border border-border/50 rounded px-4 py-1.5 bg-muted/20 mb-2">
              {press.name}
            </div>
            
            {press.date && <span className="text-[10px] text-muted-foreground mb-2 -mt-1">{press.date}</span>}
            
            <div className="flex gap-2">
              {press.links.map((link, idx) => (
                <a 
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="p-1.5 rounded-full bg-card border border-border/50 hover:border-primary/50 hover:text-primary transition-colors text-muted-foreground shadow-sm"
                  title={link.type === 'instagram' ? "Ver no Instagram" : "Ler no portal"}
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
          { icon: EyeOff, title: "Invisibilidade", desc: "Você doa, mas não sabe se o dinheiro virou comida na mesa ou pagou juros do banco." },
          { icon: Unlink, title: "Desconexão", desc: "O Brasil tem 11,3 milhões de domicílios chefiados por mães solo, e 64% das mães solo negras vivem abaixo da linha de pobreza segundo o IBGE. Sua marca chega até elas com a linguagem certa?" },
          { icon: ShieldAlert, title: "Risco Regulatório", desc: "Normas IFRS S1 e Resolução CVM 193 exigem dados de impacto social auditáveis. Você tem?" }
        ].map((p, i) => (
          <motion.div key={p.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}>
            <Card className="bg-card/60 backdrop-blur-md border-border/30 rounded-3xl h-full hover:border-primary/30 transition-colors">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
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
            Uma plataforma em construção pela equipe que venceu o AI4Good 2026, conectando sua marca à comunidade Yá de forma anonimizada e LGPD-compliant. Três lados ganham.
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
          <motion.p variants={fadeUp} custom={3} className="text-sm text-primary/80 italic pt-2">
            Marcas Pioneiras 2026: as primeiras a ajudar a moldar a safra inicial do Selo Yá.
          </motion.p>
        </div>

        <motion.div variants={fadeUp} custom={2} className="flex justify-center">
          <div className="relative">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 backdrop-blur-md border-2 border-primary/30 flex flex-col items-center justify-center text-center p-10 shadow-2xl">
              <Award size={48} className="text-primary mb-3" />
              <p className="font-extrabold text-xl leading-tight">Selo Yá de Origem</p>
              <p className="text-sm text-white font-bold mt-2 leading-relaxed drop-shadow-sm">
                Sua empresa entre as marcas pioneiras da primeira safra
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
    items: ["Visibilidade financeira sem julgamento", "Queda de inadimplência mensurável", "Score financeiro real e crescente"]
  },
  {
    icon: Building2, title: "Sua Marca",
    items: ["ROI mensurável de programas ESG", "Materialidade financeira auditável (IFRS S1 e CVM 193)", "Credencial ESG validada + Selo Yá de Origem"]
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
                <ul className="space-y-3">
                  {tw.items.map((item, j) => (
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

/* ─── Aurea Story (NOVA) ─── */
const AureaStorySection = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-secondary/5" />
    <div className="container mx-auto px-6 lg:px-12 relative z-10">
      <div className="bg-card border border-border/30 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col lg:flex-row gap-12 items-center">
        
        <div className="w-full lg:w-2/5 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl z-10 relative">
              <img src={aureaPlaceholder} alt="Áurea Valéria" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-card border border-primary/30 rounded-2xl p-4 shadow-xl z-20 max-w-[200px]">
              <Quote className="text-primary mb-2" size={20} />
              <p className="text-xs font-bold leading-tight">
                "Eu tinha medo de ver os números. A Yá me mostrou sem julgamento."
              </p>
            </div>
            <div className="absolute inset-0 bg-primary/20 blur-[80px] -z-10 rounded-full" />
          </div>
        </div>

        <div className="w-full lg:w-3/5 space-y-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Conheça a Áurea</h2>
            <p className="text-lg text-primary font-semibold">
              Mãe transformada do piloto Yá, natural de Miguel Calmon, na Chapada Diamantina
            </p>
          </div>
          
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Áurea Valéria é mãe solo do Isaque, sete anos, e empreendedora digital. Ensina mulheres a fazer renda no TikTok Shop e é Head de afiliadas da @usebigboom. Antes da Yá, ela tinha medo de abrir os apps do banco. Hoje, registra os gastos com a Yá no WhatsApp todos os dias, sabe pra onde o dinheiro vai e ajuda outras mães a fazer o mesmo.
            </p>
            <p>
              Em maio de 2026, a história da Áurea vai ao ar no programa Conexão Bahia, da TV Bahia.
            </p>
          </div>

          <div className="pt-4 border-t border-border/40">
            <p className="text-sm font-semibold italic text-foreground">
              Áurea Valéria, mãe transformada do piloto Yá
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
);

/* ─── KPIs ─── */
const kpis = [
  { icon: BarChart3, label: "Potencial de redução de CAC em programas de impacto", value: "3x*" },
  { icon: DollarSign, label: "Estimativa de renda liberada por mãe ao mês", value: "R$ 147*" },
  { icon: Heart, label: "Meta de satisfação para a primeira safra", value: "NPS 70+*" },
  { icon: TrendingUp, label: "Potencial de aumento em lealdade e recompra da marca", value: "40%+*" },
];

const KPISection = () => (
  <section className="py-24">
    <div className="container mx-auto px-6 lg:px-12">
      <motion.h2
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeUp} custom={0}
        className="text-3xl md:text-4xl font-bold text-center mb-4"
      >
        O que sua área de sustentabilidade verá no <span className="text-primary">relatório mensal.</span>
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
                <p className="text-sm font-bold leading-snug">{k.label}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-8 text-center text-sm font-medium text-muted-foreground/90 max-w-3xl mx-auto px-4">
        * Projeções baseadas em literatura de impacto e em dados do piloto Yá. Métricas reais serão entregues mensalmente para as marcas pioneiras.
      </div>
    </div>
  </section>
);

/* ─── Pricing ─── */
const packages = [
  {
    name: "Apoiadora", price: "R$ 48 mil", period: "/ano", highlight: false,
    features: [
      "Selo Yá para uma comunidade", 
      "Relatório mensal básico", 
      "Até 100 mães impactadas", 
      "Dashboard com métricas-chave",
      "Logo no relatório anual de impacto Yá"
    ]
  },
  {
    name: "Parceira", price: "R$ 98 mil", period: "/ano", highlight: true, badge: "Recomendado",
    features: [
      "Selo Yá para até 3 comunidades", 
      "Relatório mensal completo, com curadoria", 
      "Até 300 mães impactadas", 
      "Dashboard avançado com API", 
      "Sessão exclusiva com equipe Yá trimestral",
      "Co-criação de uma campanha narrativa"
    ]
  },
  {
    name: "Fundadora", price: "R$ 198 mil", period: "/ano", highlight: false,
    features: [
      "Tudo da Parceira", 
      "Comunidades ilimitadas (dentro da região)", 
      "White label do relatório", 
      "Suporte dedicado", 
      "Consultoria trimestral de materialidade ESG",
      "Selo Yá Fundadora 2026 em campanhas",
      "Convite para o círculo consultivo das marcas pioneiras Yá, encontros trimestrais com o time fundador a partir de 2027"
    ]
  },
];

const PricingSection = () => (
  <section className="py-24 relative">
    <div className="container mx-auto px-6 lg:px-12">
      <motion.h2
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeUp} custom={0}
        className="text-3xl md:text-4xl font-bold text-center mb-4"
      >
        Marcas Pioneiras 2026: <span className="text-gradient">três níveis de protagonismo.</span>
      </motion.h2>
      <motion.p
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeUp} custom={1}
        className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto"
      >
        Vagas limitadas. As marcas pioneiras assinam contrato anual e ajudam a moldar a primeira safra do Selo Yá.
        <br/><span className="inline-block mt-2 font-semibold">As marcas pioneiras de 2026 mantêm condições especiais nas safras seguintes.</span>
      </motion.p>
      
      <motion.div variants={fadeUp} custom={1.5} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex justify-center mb-12">
        <div className="bg-orange-500/15 border border-orange-500/20 text-orange-500 px-6 py-2 rounded-full font-bold text-sm shadow-sm">
          {VAGAS_APOIADORA} vagas Apoiadora | {VAGAS_PARCEIRA} vagas Parceira | {VAGAS_FUNDADORA} vagas Fundadora. Encerramento: {DATA_ENCERRAMENTO}
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
        {packages.map((pkg, i) => (
          <motion.div key={pkg.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}>
            <Card className={`rounded-3xl h-full flex flex-col relative overflow-hidden transition-colors ${
              pkg.highlight
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
                  <div className="mt-2 text-primary font-extrabold text-3xl">
                    {pkg.price} <span className="text-muted-foreground text-sm font-normal">{pkg.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full rounded-2xl font-semibold mt-auto ${
                    pkg.highlight
                      ? "bg-gradient-hero text-white hover:opacity-90 shadow-lg"
                      : "bg-card border-2 border-border text-foreground hover:border-primary/50"
                  }`}
                  asChild
                >
                  <a href="#contato">Candidatar como {pkg.name}</a>
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
  const [form, setForm] = useState({ 
    nome: "", empresa: "", email: "", 
    tamanho: "", estagio: "", tier: "" 
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.email.trim()) return;
    setLoading(true);
    // Simulates sending
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1200);
  };

  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-primary/5 to-background" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* left copy */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
            <motion.p variants={fadeUp} custom={0} className="text-primary font-semibold uppercase tracking-widest text-sm">
              Processo de Seleção
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-extrabold leading-tight">
              Candidate sua marca a ser <span className="text-gradient">Pioneira em 2026.</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed text-lg">
              Receba uma resposta personalizada da nossa equipe em até 5 dias úteis. Conversa exploratória sem compromisso.
            </motion.p>
            <motion.p variants={fadeUp} custom={3} className="text-sm text-foreground font-semibold flex items-center gap-2">
              <Mail size={16} className="text-primary" /> ya.ai4good@gmail.com
            </motion.p>
          </motion.div>

          {/* right form */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}>
            <Card className="bg-card/80 backdrop-blur-xl border-border/40 rounded-3xl shadow-2xl overflow-hidden">
              <CardContent className="p-8">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <Check size={40} className="text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Candidatura Enviada!</h3>
                    <p className="text-muted-foreground">Nossa equipe comercial analisará suas informações e entrará em contato nos próximos 5 dias úteis para os próximos passos.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-muted-foreground ml-1">Seu nome</label>
                        <Input
                          placeholder="Ex: Ana Silva"
                          value={form.nome}
                          onChange={(e) => setForm({ ...form, nome: e.target.value })}
                          className="rounded-xl bg-muted/50 border-border/30 h-12"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-muted-foreground ml-1">E-mail corporativo</label>
                        <Input
                          type="email"
                          placeholder="ana@empresa.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="rounded-xl bg-muted/50 border-border/30 h-12"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-muted-foreground ml-1">Empresa</label>
                      <Input
                        placeholder="Nome da sua empresa"
                        value={form.empresa}
                        onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                        className="rounded-xl bg-muted/50 border-border/30 h-12"
                        required
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-muted-foreground ml-1">Tamanho da equipe</label>
                        <Select onValueChange={(v) => setForm({...form, tamanho: v})}>
                          <SelectTrigger className="w-full rounded-xl bg-muted/50 border-border/30 h-12">
                            <SelectValue placeholder="Selecione..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ate-100">Até 100 funcionários</SelectItem>
                            <SelectItem value="100-1000">100 a 1000 funcionários</SelectItem>
                            <SelectItem value="mais-1000">Mais de 1000 funcionários</SelectItem>
                            <SelectItem value="capital-aberto">Capital aberto</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-muted-foreground ml-1">Estágio do programa ESG</label>
                        <Select onValueChange={(v) => setForm({...form, estagio: v})}>
                          <SelectTrigger className="w-full rounded-xl bg-muted/50 border-border/30 h-12">
                            <SelectValue placeholder="Selecione..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="explorando">Explorando opções</SelectItem>
                            <SelectItem value="estruturando">Estruturando setor</SelectItem>
                            <SelectItem value="ativo-orcamento">Ativo (com orçamento)</SelectItem>
                            <SelectItem value="cvm-193">Capital aberto (CVM 193)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      <label className="text-xs font-semibold text-muted-foreground ml-1">Tier de Interesse (opcional)</label>
                      <Select onValueChange={(v) => setForm({...form, tier: v})}>
                        <SelectTrigger className="w-full rounded-xl bg-muted/50 border-border/30 h-12">
                          <SelectValue placeholder="Qual vaga interessa?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="apoiadora">Apoiadora (R$ 48 mil)</SelectItem>
                          <SelectItem value="parceira">Parceira (R$ 98 mil)</SelectItem>
                          <SelectItem value="fundadora">Fundadora (R$ 198 mil)</SelectItem>
                          <SelectItem value="indeciso">Ainda decidindo</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-hero text-white font-bold rounded-2xl shadow-lg hover:opacity-90 transition-all h-14 text-lg mt-4"
                    >
                      {loading ? <Loader2 size={24} className="animate-spin" /> : <>Enviar Candidatura <ArrowRight size={20} className="ml-2" /></>}
                    </Button>
                    
                    <p className="text-[10px] text-muted-foreground/80 text-center pt-4 px-2 leading-relaxed">
                      A Yá é desenvolvida por uma equipe de Salvador, Bahia, vencedora do AI4Good 2026 do Brazil Conference (Harvard e MIT). CNPJ em estruturação para 2026. Operação atual via Instituto Yá.
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
    <CredibilitySection />
    <ProblemSection />
    <SolutionSection />
    <TripleWinSection />
    <AureaStorySection />
    <KPISection />
    <PricingSection />
    <CTASection />
    <Footer />
  </div>
);

export default PageSelo;
