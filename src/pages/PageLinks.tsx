import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Users, Building2, Mail, Sparkles, Heart, ChevronRight, Instagram, Linkedin, MessageCircle } from "lucide-react";
import yaLogo from "@/assets/logos/ya_logo_branco.svg";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";
import { linksTranslations } from "./LinksTranslations";

type LinkItem = {
  title: string;
  subtitle: string;
  href: string;
  external?: boolean;
  icon: React.ComponentType<{ className?: string }>;
};

const baseLinks = [
  { icon: MessageCircle },
  { icon: Users },
  { icon: Building2 },
  { icon: Mail, external: true },
  { icon: Sparkles },
  { icon: Heart, external: true },
];

const trackClick = (label: string) => {
  // Fires to gtag/plausible if available, otherwise no-op
  try {
    // @ts-expect-error - gtag may not be defined
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      // @ts-expect-error - gtag may not be defined
      window.gtag("event", "links_click", { button: label });
    }
    // @ts-expect-error - plausible may not be defined
    if (typeof window !== "undefined" && typeof window.plausible === "function") {
      // @ts-expect-error - plausible may not be defined
      window.plausible("LinksClick", { props: { button: label } });
    }
  } catch {
    // ignore
  }
};

const PageLinks = () => {
  const { lang } = useLanguage();
  const t = linksTranslations[lang];

  const links: LinkItem[] = t.links.map((link, index) => ({
    ...link,
    ...baseLinks[index]
  }));

  useEffect(() => {
    document.title = t.meta.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        t.meta.desc
      );
    }
  }, [t]);

  return (
    <main
      className="min-h-screen w-full flex flex-col items-center px-6 py-12"
      style={{ backgroundColor: "#1A1A2E" }}
    >
      {/* Header */}
      <header className="w-full max-w-[480px] flex flex-col items-center text-center animate-fade-in relative pt-4">
        <div className="absolute top-0 right-0">
          <LanguageToggle />
        </div>
        <img src={yaLogo} alt="Yá" className="w-24 h-24 mb-5" />
        <p
          className="text-white/80 text-base mb-4 max-w-[320px]"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {t.header.subtitle}
        </p>
        <span
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border"
          style={{
            color: "#F5A623",
            borderColor: "rgba(245, 166, 35, 0.4)",
            backgroundColor: "rgba(245, 166, 35, 0.08)",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {t.header.badge}
        </span>
      </header>

      {/* Buttons */}
      <nav className="w-full max-w-[480px] flex flex-col gap-4 mt-10">
        {links.map((item, i) => {
          const Icon = item.icon;
          const content = (
            <div
              className="group relative flex items-center gap-4 w-full p-4 rounded-2xl text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
              style={{
                background: "linear-gradient(90deg, #E8673C 0%, #C040A0 50%, #8C30B0 100%)",
                boxShadow: "0 4px 20px -6px rgba(192, 64, 160, 0.4)",
              }}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(90deg, #F07a4d 0%, #D24fb0 50%, #9d3fc0 100%)",
                }}
              />
              <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-white/15 backdrop-blur-sm shrink-0">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div className="relative flex-1 min-w-0 text-left">
                <div
                  className="text-base font-semibold leading-tight"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {item.title}
                </div>
                <div
                  className="text-sm text-white/70 mt-0.5 leading-snug"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {item.subtitle}
                </div>
              </div>
              <ChevronRight className="relative w-5 h-5 text-white/80 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          );

          const style = {
            animation: "fadeUp 0.5s ease-out both",
            animationDelay: `${150 + i * 100}ms`,
          } as React.CSSProperties;

          if (item.external) {
            return (
              <a
                key={item.title}
                href={item.href}
                onClick={() => trackClick(item.title)}
                className="block"
                style={style}
              >
                {content}
              </a>
            );
          }
          return (
            <Link
              key={item.title}
              to={item.href}
              onClick={() => trackClick(item.title)}
              className="block"
              style={style}
            >
              {content}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <footer
        className="w-full max-w-[480px] mt-16 flex flex-col items-center text-center gap-4"
        style={{ animation: "fadeUp 0.6s ease-out 700ms both" }}
      >
        <div className="flex items-center gap-6">
          <a
            href="https://instagram.com/ya.ai4good"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackClick("Instagram")}
            className="text-white/60 hover:text-white transition-colors flex items-center gap-1.5 text-sm"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <Instagram className="w-4 h-4" />
            @ya.ai4good
          </a>
          <a
            href="https://www.linkedin.com/company/ya-ai4good"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackClick("LinkedIn")}
            className="text-white/60 hover:text-white transition-colors flex items-center gap-1.5 text-sm"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </div>
        <p
          className="text-xs text-white/40 max-w-[320px] leading-relaxed"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {t.footer.rights}
        </p>
      </footer>
    </main>
  );
};

export default PageLinks;
