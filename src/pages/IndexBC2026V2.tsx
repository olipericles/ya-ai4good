
import HeroSection from "@/components/landing/bc2026v2/HeroSection";
import ProblemSection from "@/components/landing/bc2026v2/ProblemSection";
import SolutionSection from "@/components/landing/bc2026v2/SolutionSection";
import PilotSection from "@/components/landing/bc2026v2/PilotSection";
import VoicesSection from "@/components/landing/bc2026v2/VoicesSection";
import ScaleSection from "@/components/landing/bc2026v2/ScaleSection";
import VisionSection from "@/components/landing/bc2026v2/VisionSection";
import TeamSection from "@/components/landing/bc2026v2/TeamSection";
import ClosingSection from "@/components/landing/bc2026v2/ClosingSection";
import DemoSection from "@/components/landing/bc2026v2/DemoSection";
import FooterBC from "@/components/landing/bc2026v2/FooterBC";
import { useEffect } from "react";

const IndexBC2026V2 = () => {

    useEffect(() => {
        // Update page title and meta description for SEO
        document.title = "Yá - Assistente Financeira para Mães Solo | AI4Good 2026";
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Yá é uma assistente financeira no WhatsApp para mães solo. 11 milhões de mães. Uma IA que cuida de quem cuida de todo mundo. Projeto AI4Good - Brazil Conference 2026.');
        } else {
            const meta = document.createElement('meta');
            meta.name = 'description';
            meta.content = 'Yá é uma assistente financeira no WhatsApp para mães solo. 11 milhões de mães. Uma IA que cuida de quem cuida de todo mundo. Projeto AI4Good - Brazil Conference 2026.';
            document.head.appendChild(meta);
        }
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
            <HeroSection />
            <ProblemSection />
            <SolutionSection />
            <PilotSection />
            <VoicesSection />
            <ScaleSection />
            <VisionSection />
            <TeamSection />
            <ClosingSection />
            <DemoSection />
            <FooterBC />
        </div>
    );
};

export default IndexBC2026V2;
