import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SlideContainerProps {
  children: ReactNode;
  className?: string;
  isActive: boolean;
}

const SlideContainer = ({ children, className, isActive }: SlideContainerProps) => {
  return (
    <div
      className={cn(
        "absolute inset-0 flex items-center justify-center p-8 md:p-16 transition-all duration-700",
        isActive ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 z-0 pointer-events-none",
        className
      )}
    >
      <div className="w-full max-w-6xl mx-auto">
        {children}
      </div>
    </div>
  );
};

export default SlideContainer;
