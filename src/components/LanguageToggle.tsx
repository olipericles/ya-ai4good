import React from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface LanguageToggleProps {
  className?: string;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ className = "" }) => {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-card/40 backdrop-blur-md hover:bg-muted transition-colors text-xs font-semibold text-foreground uppercase tracking-widest ${className}`}
    >
      <Globe className="w-3.5 h-3.5" />
      <span>{lang === "pt" ? "EN" : "PT"}</span>
    </button>
  );
};
