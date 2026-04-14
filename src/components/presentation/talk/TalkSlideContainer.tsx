import { useState, useEffect, useCallback, ReactNode } from "react";

interface TalkSlideContainerProps {
  children: ReactNode;
  className?: string;
}

const TalkSlideContainer = ({ children, className = "" }: TalkSlideContainerProps) => {
  const [scale, setScale] = useState(1);

  const updateScale = useCallback(() => {
    const scaleX = window.innerWidth / 1920;
    const scaleY = window.innerHeight / 1080;
    setScale(Math.min(scaleX, scaleY));
  }, []);

  useEffect(() => {
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [updateScale]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        className={`absolute w-[1920px] h-[1080px] left-1/2 top-1/2 origin-center ${className}`}
        style={{
          marginLeft: -960,
          marginTop: -540,
          transform: `scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default TalkSlideContainer;
