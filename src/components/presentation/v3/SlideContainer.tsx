import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type TransitionType = "fade-zoom" | "slide-left" | "slide-right" | "slide-up" | "zoom-rotate" | "blur-scale";

interface SlideContainerProps {
  children: ReactNode;
  className?: string;
  isActive: boolean;
  transition?: TransitionType;
}

const transitionStyles: Record<TransitionType, { active: string; inactive: string }> = {
  "fade-zoom": {
    active: "opacity-100 scale-100 blur-0",
    inactive: "opacity-0 scale-110 blur-sm",
  },
  "slide-left": {
    active: "opacity-100 translate-x-0",
    inactive: "opacity-0 translate-x-full",
  },
  "slide-right": {
    active: "opacity-100 translate-x-0",
    inactive: "opacity-0 -translate-x-full",
  },
  "slide-up": {
    active: "opacity-100 translate-y-0",
    inactive: "opacity-0 translate-y-24",
  },
  "zoom-rotate": {
    active: "opacity-100 scale-100 rotate-0",
    inactive: "opacity-0 scale-50 rotate-6",
  },
  "blur-scale": {
    active: "opacity-100 scale-100 blur-0",
    inactive: "opacity-0 scale-90 blur-md",
  },
};

const SlideContainer = ({ children, className, isActive, transition = "blur-scale" }: SlideContainerProps) => {
  const styles = transitionStyles[transition];

  return (
    <div
      className={cn(
        "absolute inset-0 flex items-center justify-center p-4 sm:p-6 md:p-8 transition-all duration-1000 ease-out",
        isActive ? `${styles.active} z-10` : `${styles.inactive} z-0 pointer-events-none`,
        className
      )}
    >
      <div className={cn(
        "w-full max-w-7xl mx-auto transition-all duration-1000 delay-200",
        isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}>
        {children}
      </div>
    </div>
  );
};

export default SlideContainer;
