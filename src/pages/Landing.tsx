import { Heart, LogIn } from "lucide-react";
import yaLogo from "@/assets/logos/ya_logo_branco.svg";

const Landing = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
            {/* Login Button - Fixed top right */}
            <a
                href="/dashboard/"
                className="fixed top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 bg-primary/20 hover:bg-primary/30 border border-primary/30 rounded-full text-primary font-medium transition-all hover:scale-105"
            >
                <LogIn className="w-4 h-4" />
                <span className="hidden sm:inline">Entrar</span>
            </a>

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
            </div>

            {/* Decorations */}
            <div className="absolute top-10 left-10 w-2 h-2 bg-primary rounded-full animate-pulse" />
            <div className="absolute top-20 right-20 w-3 h-3 bg-secondary rounded-full animate-pulse delay-200" />
            <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-accent rounded-full animate-pulse delay-400" />
        </div>
    );
};

export default Landing;
