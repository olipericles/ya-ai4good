import g1Bahia from "@/assets/logos/press/g1-bahia.png";
import tvBahia from "@/assets/logos/press/tv-bahia.jpg";
import bahiaFm from "@/assets/logos/press/bahia-fm.jpg";
import almaPreta from "@/assets/logos/press/alma-preta.png";
import aloAloBahia from "@/assets/logos/press/aloalo-bahia.png";

type MediaItem = {
  name: string;
  url: string;
  /** Optional: path to image logo. If absent, a typographic fallback renders the name. */
  logo?: string;
  /** Tailwind class for the typographic fallback (font / weight / case / tracking). */
  textClass?: string;
};

const mediaUpper: MediaItem[] = [
  {
    name: "G1 Bahia",
    logo: g1Bahia,
    url: "https://g1.globo.com/ba/bahia/noticia/2026/04/20/baianos-criam-ferramenta-de-ia-para-ajudar-maes-solo-e-vencem-programa-em-harvard-e-mit.ghtml",
  },
  {
    name: "TV Bahia",
    logo: tvBahia,
    url: "#",
  },
  {
    name: "Bahia FM",
    logo: bahiaFm,
    url: "https://www.youtube.com/live/QSm47aZ0xJM?t=2153",
  },
  {
    name: "Alma Preta",
    logo: almaPreta,
    url: "https://almapreta.com.br/sessao/cotidiano/projeto-salvador-maes-solo-gestao-financeira/",
  },
  {
    name: "NORDESTeuSOU",
    url: "https://nordesteusou.com.br/noticias/da-periferia-para-harvard-jovens-de-salvador-vencem-premio-internacional-com-ia-que-ajuda-maes-solo/",
    textClass: "font-black uppercase tracking-tight italic",
  },
  {
    name: "Alô Alô Bahia",
    logo: aloAloBahia,
    url: "https://aloalobahia.com/noticias/2026/04/20/baianos-criam-ia-para-apoio-financeiro-de-maes-solo-e-vencem-programa-em-harvard/",
  },
  {
    name: "Let's Go Bahia",
    url: "https://letsgobahia.com.br/noticia/default/jovens-de-salvador-criam-ia-para-apoiar-maes-solo-e-sao-premiados-em-conferencia-em-boston",
    textClass: "font-extrabold italic tracking-tight",
  },
  {
    name: "Comédia Baiana",
    url: "https://www.instagram.com/p/DXb5Cd0Du9o/",
    textClass: "font-serif italic font-bold",
  },
];

const mediaLower: MediaItem[] = [
  {
    name: "Toda Bahia",
    url: "https://todabahia.com.br/baianos-criam-ferramenta-de-ia-para-maes-solo-e-vencem-conferencia-em-harvard-e-mit/",
    textClass: "font-black uppercase tracking-wider",
  },
  {
    name: "Informe Baiano",
    url: "https://www.instagram.com/p/DXXe4FsD7yD/",
    textClass: "font-bold uppercase tracking-tight",
  },
  {
    name: "Folha do Estado",
    url: "https://www.jornalfolhadoestado.com/blogs/ponto-e-virgula/ponto-e-virgula-21-04-2026/",
    textClass: "font-serif font-bold",
  },
  {
    name: "Taktá",
    url: "https://takta.com.br/ultimas-noticias/baianos-vencem-programa-em-harvard-e-mit-com-ia-voltada-para-maes-solo/",
    textClass: "font-black lowercase tracking-tighter",
  },
  {
    name: "Jacobina Notícia",
    url: "https://www.jacobinanoticia.com.br/2026/04/baianos-criam-ferramenta-de-ia-para.html",
    textClass: "font-bold uppercase tracking-tight",
  },
  {
    name: "Líder FM 96,5",
    url: "https://www.liderfm965.com.br/noticiaatual/ba_baianos-criam-ferramenta-de-ia-para-ajudar-maes-solo-e-vencem-programa-em-harvard-e-mit",
    textClass: "font-black italic uppercase",
  },
  {
    name: "Portal Spy",
    url: "https://www.portalspy.com.br/2026/04/baianos-criam-ferramenta-de-ia-para.html",
    textClass: "font-extrabold uppercase tracking-widest",
  },
  {
    name: "Cebolinha Notícias",
    url: "https://cebolinhanoticias.com.br/noticia/6082/baianos-criam-ferramenta-de-ia-para-ajudar-maes-solo-e-vencem-programa-em-harvard-e-mit.html",
    textClass: "font-bold uppercase tracking-tight",
  },
];

const MediaItemView = ({ item }: { item: MediaItem }) => {
  const inner = item.logo ? (
    <img
      src={item.logo}
      alt={item.name}
      loading="lazy"
      className="h-9 md:h-12 w-auto object-contain max-w-[180px] grayscale brightness-[2.2] contrast-125"
    />
  ) : (
    <span
      className={`text-white text-lg md:text-2xl whitespace-nowrap leading-none ${item.textClass ?? "font-bold"}`}
    >
      {item.name}
    </span>
  );

  const baseClass =
    "flex-shrink-0 flex items-center justify-center h-9 md:h-12 px-3 opacity-60 hover:opacity-100 transition-opacity duration-300";

  if (item.url === "#") {
    return (
      <span className={baseClass} title={item.name} aria-label={item.name}>
        {inner}
      </span>
    );
  }

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={baseClass}
      title={item.name}
    >
      {inner}
    </a>
  );
};

const MarqueeRow = ({
  items,
  direction,
}: {
  items: MediaItem[];
  direction: "left" | "right";
}) => {
  const duplicated = [...items, ...items];
  const animationName = direction === "left" ? "ya-marquee-left" : "ya-marquee-right";

  return (
    <div className="relative w-full overflow-hidden group">
      {/* Edge fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10" />

      <div
        className="flex gap-12 md:gap-20 w-max group-hover:[animation-play-state:paused] motion-reduce:!animation-none motion-reduce:flex-wrap motion-reduce:justify-center"
        style={{
          animation: `${animationName} 50s linear infinite`,
        }}
      >
        {duplicated.map((item, idx) => (
          <MediaItemView key={`${item.name}-${idx}`} item={item} />
        ))}
      </div>

      <style>{`
        @keyframes ya-marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes ya-marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="ya-marquee"] { animation: none !important; }
        }
      `}</style>
    </div>
  );
};

const MediaMarquee = () => {
  return (
    <section
      id="midia"
      className="py-20 sm:py-28 bg-[#0A0A0A] text-white overflow-hidden border-y border-white/5"
      aria-label="A Yá na mídia"
    >
      <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
        <span className="text-sm font-mono uppercase tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold">
          Imprensa
        </span>
        <h2 className="text-4xl sm:text-5xl font-black mt-4 tracking-tight">
          A Yá na mídia
        </h2>
        <p className="text-base sm:text-lg text-white/60 mt-4 max-w-2xl mx-auto">
          Mais de 20 veículos contaram a história. De Salvador para o mundo.
        </p>
      </div>

      <MarqueeRow items={mediaUpper} direction="left" />
      <div className="mt-8">
        <MarqueeRow items={mediaLower} direction="right" />
      </div>
    </section>
  );
};

export default MediaMarquee;