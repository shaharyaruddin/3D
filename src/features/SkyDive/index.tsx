"use client";

import { Bounded } from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Scene from "./Scene";
import { View } from "@react-three/drei";

export type SkyDiveProps = SliceComponentProps<Content.SkyDiveSlice>;

const SkyDive = ({ slice }: SkyDiveProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="skydive relative h-screen overflow-hidden bg-gradient-to-br from-[#00D2FF] to-sky-800"
    >
      <View className="absolute inset-0 z-0 h-screen w-screen">
        <Scene
          flavor={slice.primary.flavor}
          sentence="Dive into a burst of tropical flavor!"
        />
      </View>

      <div className="relative z-10 flex h-full items-center justify-center text-center px-4">
        <h2 className="sr-only">
          Dive into a burst of tropical flavor!
        </h2>
      </div>
    </Bounded>
  );
};

export default SkyDive;
