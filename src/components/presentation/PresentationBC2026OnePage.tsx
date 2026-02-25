import SlideOpening from "./bc2026/SlideOpening";
import SlideProblem from "./bc2026/SlideProblem";
import SlideSolution from "./bc2026/SlideSolution";
import SlideTest from "./bc2026/SlideTest";
import SlideVoices from "./bc2026/SlideVoices";
import SlideScale from "./bc2026/SlideScale";
import SlideVision from "./bc2026/SlideVision";
import SlideTeam from "./bc2026/SlideTeam";
import SlideClosing from "./bc2026/SlideClosing";
import SlideDemo from "./bc2026/SlideDemo";

const PresentationBC2026OnePage = () => {
    return (
        <div className="bg-background text-foreground">
            {/* Background gradient */}
            <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.1),transparent_50%)] pointer-events-none z-0" />

            <div className="relative z-10">
                <SlideOpening isActive={true} mode="section" />
                <SlideProblem isActive={true} mode="section" />
                <SlideSolution isActive={true} mode="section" />
                <SlideTest isActive={true} mode="section" />
                <SlideVoices isActive={true} mode="section" />
                <SlideScale isActive={true} mode="section" />
                <SlideVision isActive={true} mode="section" />
                <SlideTeam isActive={true} mode="section" />
                <SlideClosing isActive={true} mode="section" />
                <SlideDemo isActive={true} mode="section" />
            </div>
        </div>
    );
};

export default PresentationBC2026OnePage;
