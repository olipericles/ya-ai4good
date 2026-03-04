import SlideWaitingV4 from "./bc2026v4/SlideWaitingV4";
import SlideImpactV4 from "./bc2026v4/SlideImpactV4";
import SlideProblemV4 from "./bc2026v4/SlideProblemV4";
import SlideSolutionV4 from "./bc2026v4/SlideSolutionV4";
import SlideTestV4 from "./bc2026v4/SlideTestV4";
import SlideVoicesV4 from "./bc2026v4/SlideVoicesV4";
import SlideScaleV4 from "./bc2026v4/SlideScaleV4";
import SlidePathV4 from "./bc2026v4/SlidePathV4";
import SlideTeamV4 from "./bc2026v4/SlideTeamV4";
import SlideQRCodeV4 from "./bc2026v4/SlideQRCodeV4";

const PresentationBC2026V4OnePage = () => {
    return (
        <div className="bg-background text-foreground">
            <div className="fixed inset-0 transition-colors duration-1000 z-0 bg-[#060606]" />

            <div className="relative z-10 font-sans selection:bg-primary selection:text-black">
                <SlideWaitingV4 isActive={true} mode="section" slideNumber={0} />
                <SlideImpactV4 isActive={true} mode="section" slideNumber={1} />
                <SlideProblemV4 isActive={true} mode="section" slideNumber={2} />
                <SlideSolutionV4 isActive={true} mode="section" slideNumber={3} />
                <SlideTestV4 isActive={true} mode="section" slideNumber={4} />
                <SlideVoicesV4 isActive={true} mode="section" slideNumber={5} />
                <SlideScaleV4 isActive={true} mode="section" slideNumber={6} />
                <SlidePathV4 isActive={true} mode="section" slideNumber={7} />
                <SlideTeamV4 isActive={true} mode="section" slideNumber={8} />
                <SlideQRCodeV4 isActive={true} mode="section" slideNumber={9} />
            </div>
        </div>
    );
};

export default PresentationBC2026V4OnePage;
