import React from "react";
import Image from "next/image";


type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="bg-gradient-to-br from-sky-400 via-sky-600 to-sky-800 text-white ">
      <div className="relative mx-auto flex w-full max-w-4xl justify-center px-4 py-10">
        {/* <FizziLogo /> */}
 <Image
src='/Frissko.png'
alt="logo"
width={200}
height={200}
      />

        {/* <div className="absolute z-50 right-24 top-0 size-28 origin-center -translate-y-14 md:size-48 md:-translate-y-28">

          <CircleText/>
        </div> */}
      </div>
    </footer>
  );
}