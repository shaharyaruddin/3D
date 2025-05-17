"use client";

import { Bounded } from "@/components/Bounded";
import { View } from "@react-three/drei";
import Scene from "./Scene";
import clsx from "clsx";

const hardcodedSections = [
  {
    heading: "Awaken Your Senses",
    body: "Dive into vibrant flavors crafted to energize and delight with every sip.",
  },
  {
    heading: "Refresh with Confidence",
    body: "Bold taste meets cool refreshment – your perfect companion for every moment.",
  },
  {
    heading: "Taste the Revolution",
    body: "Break free from ordinary. Embrace unique flavors that challenge the norm.",
  },
];

const AlternatingText = (): JSX.Element => {
  return (
    <Bounded
      data-slice-type="alternating_text"
      data-slice-variation="default"
      className="alternating-text-container relative bg-gradient-to-br from-[#FEE140] via-[#FA709A] to-[#FEE140] text-white"
    >
      <div className="relative z-[10] grid">
        {/* 3D Scene */}
        <View className="alternating-text-view absolute left-0 top-0 h-screen w-full">
          <Scene />
        </View>

        {/* Hardcoded Sections */}
        {hardcodedSections.map((item, index) => (
          <div
            key={item.heading}
            className="alternating-section grid h-screen place-items-center gap-x-12 md:grid-cols-2"
          >
            <div
              className={clsx(
                index % 2 === 0 ? "col-start-1" : "md:col-start-2",
                "rounded-3xl p-8 backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl transition duration-300 ease-in-out hover:scale-[1.02]"
              )}
            >
              <h2 className="text-balance text-5xl md:text-6xl font-extrabold tracking-tight text-white">
                {item.heading}
              </h2>
              <p className="mt-6 text-lg md:text-xl text-slate-100">
                {item.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default AlternatingText;
