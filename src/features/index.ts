import dynamic from "next/dynamic";

export const components = {
  alternating_text: dynamic(() => import("./AlternatingText"), { ssr: false }),
  big_text: dynamic(() => import("./BigText"), { ssr: false }),
  carousel: dynamic(() => import("./Carousel"), { ssr: false }),
  hero: dynamic(() => import("./Hero"), { ssr: false }),
  sky_dive: dynamic(() => import("./SkyDive"), { ssr: false }),
};
