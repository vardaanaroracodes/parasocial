"use client";

import { PulseBeamsFirstDemo } from "@/components/calltoactionpulse";
import { HaloFeatures } from "@/components/cardGrid";
// import FeaturesGrid from "@/components/features";
import DemoOne from "@/components/headerService";
import { D4Carousel } from "@/components/ruler";

export default function ServicesLanding() {
  const serviceWords = [
    "Para-Influence",
   
  ];

  return (
    <>
        <DemoOne 
          words={serviceWords}
          subheading="Pragmatically Influencing the Future"
        />
        {/* <FeaturesGrid /> */}
        <HaloFeatures/>
        <D4Carousel />
        <PulseBeamsFirstDemo/>
    </>
  );
}