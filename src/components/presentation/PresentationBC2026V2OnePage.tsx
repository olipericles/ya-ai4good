import SlideWaiting from "./bc2026v2/SlideWaiting";
import SlideImpact from "./bc2026v2/SlideImpact";
import SlideProblemV2 from "./bc2026v2/SlideProblemV2";
import SlideSolutionV2 from "./bc2026v2/SlideSolutionV2";
import SlideTestV2 from "./bc2026v2/SlideTestV2";
import SlideVoicesV2 from "./bc2026v2/SlideVoicesV2";
import SlideScaleV2 from "./bc2026v2/SlideScaleV2";
import SlidePath from "./bc2026v2/SlidePath";
import SlideTeamV2 from "./bc2026v2/SlideTeamV2";
import SlideQRCode from "./bc2026v2/SlideQRCode";

const PresentationBC2026V2OnePage = () => {
    return (
        <div className="bg-background text-foreground">
            <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.1),transparent_50%)] pointer-events-none z-0" />

            <div className="relative z-10">
                <SlideWaiting isActive={true} mode="section" slideNumber={0} />
                <SlideImpact isActive={true} mode="section" slideNumber={1} />
                <SlideProblemV2 isActive={true} mode="section" slideNumber={2} />
                <SlideSolutionV2 isActive={true} mode="section" slideNumber={3} />
                <SlideTestV2 isActive={true} mode="section" slideNumber={4} />
                <SlideVoicesV2 isActive={true} mode="section" slideNumber={5} />
                <SlideScaleV2 isActive={true} mode="section" slideNumber={6} />
                <SlidePath isActive={true} mode="section" slideNumber={7} />
                <SlideTeamV2 isActive={true} mode="section" slideNumber={8} />
                <SlideQRCode isActive={true} mode="section" slideNumber={9} />
            </div>
        </div>
    );
};

export default PresentationBC2026V2OnePage;
