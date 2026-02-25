
const FooterBC = () => {
    return (
        <footer className="py-12 px-6 bg-background border-t border-border/10 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Logos Placeholder */}
                <div className="flex justify-center items-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    <span className="text-2xl font-bold text-foreground">Yá</span>
                    <span className="w-px h-6 bg-border" />
                    <span className="text-lg font-medium text-muted-foreground">AI4Good</span>
                    <span className="w-px h-6 bg-border" />
                    <span className="text-lg font-medium text-muted-foreground">Brazil Conference 2026</span>
                </div>

                <div className="space-y-2">
                    <p className="text-sm text-foreground/80">Projeto selecionado como finalista do programa AI4Good 2026</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Harvard/MIT | Março 2026</p>
                </div>

                <div className="pt-8 border-t border-border/5">
                    <p className="text-xs text-muted-foreground/50">
                        Desenvolvido por <span className="hover:text-primary transition-colors cursor-default">Praxis Agência</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default FooterBC;
