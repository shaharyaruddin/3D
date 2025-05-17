import React from "react";
import { FizziLogo } from "@/components/FizziLogo";
import Image from "next/image";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="-mb-28 flex justify-center py-4">
      {/* <FizziLogo className="z-10 h-20 cursor-pointer text-sky-800" /> */}
      <Image
src='/Frissko.png'
alt="logo"
width={200}
height={200}
      />
    </header>
  );
}