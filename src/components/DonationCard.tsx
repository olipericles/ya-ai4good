import { Heart, ExternalLink } from "lucide-react";

const BENFEITORIA_URL = "https://benfeitoria.com/projeto/a-ya-mostra-sem-julgar-no-whatsapp-que-voce-ja-usa-253i";

interface DonationCardProps {
  variant?: "inline" | "floating";
}

const t = {
  pt: {
    badge: "Apoie a Yá",
    title: "Ajude mães solo a terem controle financeiro",
    desc: "Cada doação nos aproxima de levar a Yá para mais comunidades. 100% do arrecadado vai para operação e expansão do projeto.",
    btn: "Doar pela Benfeitoria",
    footer: "Transparência total. Prestação de contas pública.",
  },
  en: {
    badge: "Support Yá",
    title: "Help single mothers gain financial control",
    desc: "Every donation brings us closer to reaching more communities. 100% of funds go to project operations and expansion.",
    btn: "Donate on Benfeitoria",
    footer: "Full transparency. Public accountability.",
  },
};

import { useLanguage } from "@/contexts/LanguageContext";

const DonationCard = ({ variant = "inline" }: DonationCardProps) => {
  const { lang } = useLanguage();
  const c = t[lang];

  if (variant === "floating") {
    return (
      <a
        href={BENFEITORIA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-[#FF7B54] via-[#E13C6E] to-[#7329A3] text-white font-bold shadow-[0_0_30px_rgba(226,107,88,0.4)] hover:shadow-[0_0_50px_rgba(226,107,88,0.6)] hover:scale-105 transition-all duration-300"
      >
        <Heart className="w-5 h-5 animate-pulse" fill="currentColor" />
        <span className="hidden sm:inline">{c.btn}</span>
        <ExternalLink className="w-4 h-4 opacity-70" />
      </a>
    );
  }

  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="relative max-w-3xl mx-auto overflow-hidden rounded-3xl border border-[#FF7B54]/20 bg-gradient-to-br from-[#FF7B54]/5 via-[#E13C6E]/5 to-[#7329A3]/5 backdrop-blur-md shadow-2xl">
          {/* Glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF7B54]/15 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#7329A3]/15 blur-[80px] rounded-full pointer-events-none" />

          <div className="relative z-10 p-8 md:p-12 text-center space-y-5">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#FF7B54]/15 text-[#FF7B54] border border-[#FF7B54]/20">
              <Heart className="w-3.5 h-3.5 animate-pulse" fill="currentColor" />
              {c.badge}
            </span>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
              {c.title}
            </h3>

            {/* Description */}
            <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-xl mx-auto">
              {c.desc}
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href={BENFEITORIA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#FF7B54] via-[#E13C6E] to-[#7329A3] text-white font-bold text-lg shadow-[0_0_30px_rgba(226,107,88,0.3)] hover:shadow-[0_0_50px_rgba(226,107,88,0.5)] hover:scale-105 transition-all duration-300"
              >
                <Heart className="w-5 h-5" fill="currentColor" />
                {c.btn}
                <ExternalLink className="w-4 h-4 opacity-70" />
              </a>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-white/30 pt-2">
              {c.footer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationCard;
