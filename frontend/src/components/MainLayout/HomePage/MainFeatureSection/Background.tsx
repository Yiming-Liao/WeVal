import { Earth } from "@/components/svg";
import MapNewSouthWales from "@/components/svg/MainFeature/MapNewSouthWales";
import { Area } from "@/types/area.types";
import gsap from "gsap";
import { FC, useEffect, useRef, useState } from "react";

const Background: FC<{ area: Area }> = ({ area }) => {
  const backgroundRef = useRef<HTMLDivElement | null>(null);

  // Background component
  const [backgroundComponent, setBackgroundComponent] = useState(
    <div className="absolute top-0 2xl:left-[min(36%,1000px)] lg:left-[32%] w-fit h-full pt-9 pb-10">
      <Earth />
    </div>
  );

  // Swithing animation
  useEffect(() => {
    if (!backgroundRef.current || area === "") return;

    const tl = gsap.timeline();
    tl.fromTo(
      backgroundRef.current,
      { opacity: 1, scale: 1 },
      {
        opacity: 0,
        scale: area === "default" ? 0.8 : 1.2,
        transformOrigin: "center",
        duration: 0.2,
        // Switch background after animation finished.
        onComplete: () => {
          switch (area) {
            case "new_south_wales":
              setBackgroundComponent(<MapNewSouthWales />);
              break;
            default:
              setBackgroundComponent(
                <div className="absolute top-0 2xl:left-[min(36%,1000px)] lg:left-[32%] w-fit h-full pt-9 pb-10">
                  <Earth />
                </div>
              );
          }
        },
      }
    ).fromTo(
      backgroundRef.current,
      { scale: area === "default" ? 1.2 : 0.8 },
      { opacity: 1, scale: 1, transformOrigin: "center", duration: 0.2 },
      "+=.1"
    );
  }, [area]);

  return (
    <div ref={backgroundRef} className="size-full">
      {backgroundComponent}
    </div>
  );
};

export default Background;
