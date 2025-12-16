import { useState, useRef, useEffect, ReactNode } from "react";

interface HoverInfoProps {
    children: ReactNode;
    tooltip: ReactNode;
    className?: string;
}

const HoverInfo = ({ children, tooltip, className = "" }: HoverInfoProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const [position, setPosition] = useState<"top" | "bottom">("top");
    const triggerRef = useRef<HTMLSpanElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const showTooltip = () => {
        timeoutRef.current = setTimeout(() => {
            setIsVisible(true);
        }, 300); // 300ms delay
    };

    const hideTooltip = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setIsVisible(false);
    };

    useEffect(() => {
        if (isVisible && triggerRef.current) {
            const rect = triggerRef.current.getBoundingClientRect();
            const spaceAbove = rect.top;
            const spaceBelow = window.innerHeight - rect.bottom;

            setPosition(spaceAbove > spaceBelow ? "top" : "bottom");
        }
    }, [isVisible]);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (
        <span
            ref={triggerRef}
            className={`relative inline-block cursor-help border-b border-dotted border-primary/50 ${className}`}
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}
            onFocus={showTooltip}
            onBlur={hideTooltip}
            tabIndex={0}
            role="button"
            aria-describedby={isVisible ? "hover-tooltip" : undefined}
        >
            {children}

            {isVisible && (
                <div
                    ref={tooltipRef}
                    id="hover-tooltip"
                    role="tooltip"
                    className={`
            absolute z-50 px-4 py-3 
            bg-card/95 backdrop-blur-sm border border-border 
            rounded-xl shadow-xl
            text-sm text-foreground/90 font-normal not-italic
            min-w-[200px] max-w-[320px]
            animate-fade-in
            ${position === "top"
                            ? "bottom-full mb-2 left-1/2 -translate-x-1/2"
                            : "top-full mt-2 left-1/2 -translate-x-1/2"
                        }
          `}
                    onMouseEnter={() => setIsVisible(true)}
                    onMouseLeave={hideTooltip}
                >
                    {/* Arrow */}
                    <div
                        className={`
              absolute w-3 h-3 bg-card border-border rotate-45
              ${position === "top"
                                ? "bottom-[-6px] left-1/2 -translate-x-1/2 border-r border-b"
                                : "top-[-6px] left-1/2 -translate-x-1/2 border-l border-t"
                            }
            `}
                    />
                    {tooltip}
                </div>
            )}
        </span>
    );
};

export default HoverInfo;
