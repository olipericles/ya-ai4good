import { useState, useEffect } from 'react';
import { Download, X, Share, PlusSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DISMISS_KEY = 'ya_pwa_dismissed';

export const PWAPrompt = () => {
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const [showPrompt, setShowPrompt] = useState(false);
    const [isIOS, setIsIOS] = useState(false);

    useEffect(() => {
        // If the user already dismissed the prompt, don't show it again for 7 days
        const dismissedAt = localStorage.getItem(DISMISS_KEY);
        if (dismissedAt) {
            const days = (Date.now() - Number(dismissedAt)) / (1000 * 60 * 60 * 24);
            if (days < 7) return;
        }

        // Check if it's iOS
        const isIosDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
        setIsIOS(isIosDevice);

        // Check if already installed (standalone mode)
        // @ts-ignore
        const isStandalone = window.matchMedia('(display-mode: standalone)').matches || navigator.standalone || document.referrer.includes('android-app://');

        if (isStandalone) return; // Already installed as PWA

        const handleBeforeInstallPrompt = (e: Event) => {
            e.preventDefault();
            setDeferredPrompt(e);
            setShowPrompt(true);
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        // iOS Safari doesn't fire beforeinstallprompt — show manual instructions after a delay
        if (isIosDevice && !isStandalone) {
            const timer = setTimeout(() => setShowPrompt(true), 3000);
            return () => {
                clearTimeout(timer);
                window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
            };
        }

        return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    }, []);

    const handleDismiss = () => {
        localStorage.setItem(DISMISS_KEY, String(Date.now()));
        setShowPrompt(false);
    };

    const handleInstallClick = async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            if (outcome === 'accepted') {
                handleDismiss();
            }
            setDeferredPrompt(null);
        }
    };

    if (!showPrompt) return null;

    return (
        <div className="fixed bottom-6 left-4 right-4 z-50 max-w-sm mx-auto animate-in fade-in slide-in-from-bottom-10 duration-700">
            <div className="bg-dark-900/80 backdrop-blur-xl border border-white/10 p-5 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.8)] relative overflow-hidden flex flex-col gap-4">
                <div className="absolute top-0 left-0 w-32 h-32 bg-primary/20 blur-[40px] rounded-full pointer-events-none -z-10" />

                <button
                    onClick={handleDismiss}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                    <X className="w-4 h-4" />
                </button>

                <div className="flex items-start gap-4 pt-1">
                    <div className="w-12 h-12 bg-black/40 rounded-2xl flex items-center justify-center border border-white/5 shrink-0 shadow-inner">
                        <img src="/favicon.png" alt="Yá Logo" className="w-8 h-8 object-contain" />
                    </div>
                    <div>
                        <h3 className="text-white font-display font-bold text-lg leading-tight mb-1">
                            Instalar Aplicativo
                        </h3>
                        <p className="text-gray-400 text-sm leading-snug">
                            Adicione a Yá à sua tela inicial para acessar rápido, direto no seu painel!
                        </p>
                    </div>
                </div>

                {isIOS ? (
                    <div className="bg-white/5 border border-white/5 rounded-xl p-3 text-xs text-gray-300 flex items-center gap-3">
                        <span className="flex-1">
                            Toque em <Share className="w-4 h-4 inline mx-1" /> Compartilhar e depois em <strong className="text-white">Adicionar à Tela de Início</strong> <PlusSquare className="w-4 h-4 inline mx-1" />
                        </span>
                    </div>
                ) : (
                    <Button
                        onClick={handleInstallClick}
                        className="w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-xl h-12 shadow-[0_0_15px_rgba(229,91,60,0.3)] transition-all font-display text-base"
                    >
                        <Download className="w-5 h-5 mr-2" />
                        Instalar Yá Agora
                    </Button>
                )}
            </div>
        </div>
    );
};
