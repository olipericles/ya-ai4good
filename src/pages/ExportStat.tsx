import React from "react";

const ExportStat = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-transparent p-12">
      {/* Target Element */}
      <div 
        id="export-target"
        className="relative w-fit max-w-4xl rounded-[2rem] p-12 md:p-16 overflow-hidden bg-card/80 backdrop-blur-xl border border-primary/30 shadow-[0_0_80px_rgba(232,92,58,0.2)] flex flex-col justify-center"
      >
        {/* Subtle glow effect behind */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/15 rounded-full blur-[80px] -z-10" />

        <h2 className="text-foreground/90 text-4xl sm:text-5xl font-bold mb-2 tracking-tight">
          Não é só
        </h2>
        <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 text-6xl sm:text-8xl lg:text-[7rem] font-black uppercase tracking-tighter mb-8 drop-shadow-md leading-none">
          ESTATÍSTICA
        </h1>
        
        <div className="flex items-center gap-4">
          <div className="h-1 w-12 bg-primary rounded-full"></div>
          <p className="text-primary text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide">
            É realidade de muitas famílias
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExportStat;
