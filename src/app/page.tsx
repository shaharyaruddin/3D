import { Metadata } from "next";

import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/features";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Frissko",
    description:
      "Frissko is the ultimate refreshment experience – bold flavors, vibrant fizz, and a splash of cool in every sip. Taste the vibe, feel the chill.",
    openGraph: {
      title: "Frissko – The Coolest Sip of Your Day",
      description:
        "Discover Frissko – a new wave of refreshment. Fizzy, flavorful, and made to energize your vibe.",

      images: "",
      siteName: "Frissko",
    },
  };
}

export default async function Index() {
  const client = createClient();
  const home = await client.getByUID("page", "home");

  return <SliceZone slices={home.data.slices} components={components} />;
}
