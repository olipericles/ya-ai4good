import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type SlideMode = "slide" | "section";

interface SlideContainerV2Props {
    children: ReactNode;
    className?: string;
    isActive: boolean;
    mode?: SlideMode;
    slideNumber?: number;
}

const SlideContainerV2 = ({ children, className, isActive, mode = "slide", slideNumber }: SlideContainerV2Props) => {
    const badge = slideNumber !== undefined ? (
        <div className="absolute top-4 left-4 z-50 w-10 h-10 rounded-full bg-primary/90 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center shadow-lg">
            <span className="text-sm font-bold text-primary-foreground">{slideNumber}</span>
        </div>
    ) : null;

    if (mode === "section") {
        return (
            <section className={cn("relative min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8", className)}>
                {badge}
                <div className="w-full max-w-7xl mx-auto">
                    {children}
                </div>
            </section>
        );
    }

    return (
        <div
            className={cn(
                "absolute inset-0 flex items-center justify-center p-4 sm:p-6 md:p-8 transition-all duration-700 ease-out",
                isActive ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 z-0 pointer-events-none",
                className
            )}
        >
            {badge}
            <div className={cn(
                "w-full max-w-7xl mx-auto transition-all duration-700 delay-200",
                isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
                {children}
            </div>
        </div>
    );
};

export default SlideContainerV2;
