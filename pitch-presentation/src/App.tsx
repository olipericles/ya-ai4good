import { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface SlideProps {
  title: string;
  children: React.ReactNode;
}

const Slide = ({ title, children }: SlideProps) => (
  <div className="flex flex-col items-center justify-center h-full p-8 text-center animate-fade-in">
    <h1 className="text-4xl md:text-6xl font-bold mb-8 text-slate-800">{title}</h1>
    <div className="text-xl md:text-2xl text-slate-600 max-w-4xl">
      {children}
    </div>
  </div>
);

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "AI4Good",
      content: (
        <>
          <p className="mb-4">Transformando o futuro com Inteligência Artificial.</p>
          <p className="text-blue-600 font-semibold">Uma iniciativa revolucionária.</p>
        </>
      )
    },
    {
      title: "O Problema",
      content: (
        <ul className="text-left list-disc pl-6 space-y-2">
          <li>Acesso limitado a tecnologias de ponta.</li>
          <li>Falta de integração entre setores.</li>
          <li>Desperdício de recursos em soluções não escaláveis.</li>
        </ul>
      )
    },
    {
      title: "A Solução",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="p-6 bg-white rounded-xl shadow-lg border border-slate-100">
            <h3 className="text-lg font-bold mb-2">Plataforma Unificada</h3>
            <p className="text-base text-slate-500">Tudo em um só lugar.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg border border-slate-100">
            <h3 className="text-lg font-bold mb-2">IA Acessível</h3>
            <p className="text-base text-slate-500">Para todos os públicos.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg border border-slate-100">
            <h3 className="text-lg font-bold mb-2">Impacto Real</h3>
            <p className="text-base text-slate-500">Métricas que importam.</p>
          </div>
        </div>
      )
    },
    {
      title: "Obrigado",
      content: (
        <div className="flex flex-col items-center">
          <p className="mb-8">Junte-se a nós nessa jornada.</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
            Saiba Mais
          </button>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-slate-50 to-slate-200 overflow-hidden relative">
      <div className="absolute top-4 left-4 text-slate-400 font-mono text-sm">
        AI4Good Pitch Deck
      </div>

      <main className="h-full w-full">
        {slides[currentSlide].content && (
          <Slide title={slides[currentSlide].title}>
            {slides[currentSlide].content}
          </Slide>
        )}
      </main>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-4">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full hover:bg-slate-200 text-slate-600 transition-colors"
          aria-label="Previous slide"
        >
          <ArrowLeft size={24} />
        </button>
        <span className="text-slate-500 font-medium">
          {currentSlide + 1} / {slides.length}
        </span>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full hover:bg-slate-200 text-slate-600 transition-colors"
          aria-label="Next slide"
        >
          <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );
}

export default App;
