import { Link } from "react-router-dom";
import { Heart, ArrowRight } from "lucide-react";
import yaLogo from "@/assets/ya-logo.png";

const Landing = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 text-center space-y-12 max-w-3xl">
                {/* Logo */}
                <img
                    src={yaLogo}
                    alt="Yá Logo"
                    className="h-32 sm:h-40 md:h-48 object-contain mx-auto animate-fade-up"
                />

                {/* Tagline */}
                <div className="space-y-4 animate-fade-up delay-200">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        Yá: <span className="text-gradient">mãe</span>, em yorubá.
                    </h1>
                    <div className="inline-flex items-center gap-2 text-primary">
                        <Heart className="w-5 h-5 animate-pulse" fill="currentColor" />
                        <p className="text-lg sm:text-xl md:text-2xl">
                            Uma IA que cuida de quem cuida de todo mundo
                        </p>
                        <Heart className="w-5 h-5 animate-pulse" fill="currentColor" />
                    </div>
                </div>

                {/* Version links */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-400">
                    <Link
                        to="/v1"
                        className="group flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all"
                    >
                        <span className="text-lg font-medium">Versão Dev</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        to="/v2"
                        className="group flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-all"
                    >
                        <span className="text-lg font-medium">Versão Produção</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>

            {/* Decorations */}
            <div className="absolute top-10 left-10 w-2 h-2 bg-primary rounded-full animate-pulse" />
            <div className="absolute top-20 right-20 w-3 h-3 bg-secondary rounded-full animate-pulse delay-200" />
            <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-accent rounded-full animate-pulse delay-400" />
        </div>
    );
};

export default Landing;
