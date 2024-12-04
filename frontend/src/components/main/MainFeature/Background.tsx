import {
  Earth,
  MapNewSouthWales,
  MapNorthTerritory,
  MapQueensland,
  MapSouthAustralia,
  MapTasmania,
  MapVictoria,
  MapWesternAustralia,
} from "@/components/svg/main/MainFeature";
import { Region } from "@/types/region.types";
import gsap from "gsap";
import { FC, useEffect, useRef, useState } from "react";

const Background: FC<{ region: Region }> = ({ region }) => {
  const backgroundRef = useRef<HTMLDivElement | null>(null);
  const [isFirstTime, setIsFirstTime] = useState<boolean>(true);

  // Background component
  const [backgroundComponent, setBackgroundComponent] = useState(
    <div className="absolute top-0 2xl:left-[min(36%,1000px)] lg:left-[32%] w-fit h-full pt-9 pb-10">
      <Earth />
    </div>
  );

  // Swithing animation
  useEffect(() => {
    if (!backgroundRef.current || region === "") return;

    const tl = gsap.timeline();
    tl.fromTo(
      backgroundRef.current,
      { opacity: 1, scale: 1 },
      {
        opacity: 0,
        scale: isFirstTime ? 1.2 : 1,
        transformOrigin: "center",
        duration: 0.2,
        // Switch background after animation finished.
        onComplete: () => {
          setIsFirstTime(false); // Disable scale animation after first time selection

          // Background SVGs
          switch (region) {
            case Region.NEW_SOUTH_WALES:
              setBackgroundComponent(<MapNewSouthWales />);
              break;
            case Region.VICTORIA:
              setBackgroundComponent(<MapVictoria />);
              break;
            case Region.TASMANIA:
              setBackgroundComponent(<MapTasmania />);
              break;
            case Region.QUEENSLAND:
              setBackgroundComponent(<MapQueensland />);
              break;
            case Region.NORTHERN_TERRITORY:
              setBackgroundComponent(<MapNorthTerritory />);
              break;
            case Region.SOUTH_AUSTRALIA:
              setBackgroundComponent(<MapSouthAustralia />);
              break;
            case Region.WESTERN_AUSTRALIA:
              setBackgroundComponent(<MapWesternAustralia />);
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
      { scale: isFirstTime ? 0.8 : 1 },
      { opacity: 1, scale: 1, transformOrigin: "center", duration: 0.2 },
      "+=.1"
    );
  }, [region]);

  return (
    <div ref={backgroundRef} className="size-full">
      {backgroundComponent}
    </div>
  );
};

export default Background;
