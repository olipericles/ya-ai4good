import SlideOpeningV3 from "./bc2026v3/SlideOpeningV3";
import SlideImpactV3 from "./bc2026v3/SlideImpactV3";
import SlideProblemV3 from "./bc2026v3/SlideProblemV3";
import SlideSolutionV3 from "./bc2026v3/SlideSolutionV3";
import SlideTestV3 from "./bc2026v3/SlideTestV3";
import SlideVoicesV3 from "./bc2026v3/SlideVoicesV3";
import SlideScaleV3 from "./bc2026v3/SlideScaleV3";
import SlidePathV3 from "./bc2026v3/SlidePathV3";
import SlideVisionV3 from "./bc2026v3/SlideVisionV3";
import SlideTeamV3 from "./bc2026v3/SlideTeamV3";
import SlideClosingV3 from "./bc2026v3/SlideClosingV3";
import SlideDemoV3 from "./bc2026v3/SlideDemoV3";

const PresentationBC2026V3OnePage = () => {
    return (
        <div className="bg-background text-foreground">
            <div className="fixed inset-0 transition-colors duration-1000 z-0 bg-[#060606]" />

            <div className="relative z-10">
                <SlideOpeningV3 isActive={true} mode="section" />
                <SlideImpactV3 isActive={true} mode="section" />
                <SlideProblemV3 isActive={true} mode="section" />
                <SlideSolutionV3 isActive={true} mode="section" />
                <SlideTestV3 isActive={true} mode="section" />
                <SlideVoicesV3 isActive={true} mode="section" />
                <SlideScaleV3 isActive={true} mode="section" />
                <SlidePathV3 isActive={true} mode="section" />
                <SlideVisionV3 isActive={true} mode="section" />
                <SlideTeamV3 isActive={true} mode="section" />
                <SlideClosingV3 isActive={true} mode="section" />
                <SlideDemoV3 isActive={true} mode="section" />
            </div>
        </div>
    );
};

export default PresentationBC2026V3OnePage;
