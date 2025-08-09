"use client";

import { ContactCtaCard } from "@/components/ui/contact-cta-card";
import { HaloFeatures } from "@/components/cardGrid";
// import FeaturesGrid from "@/components/features";
import DemoOne from "@/components/headerService";

import { TextRevealCardPreview } from "@/components/textreveal";
import { SparklesPreviewColorful } from "@/components/service-hero";
import { MarqueService } from "@/components/marquee-services";
import CTA from "@/components/cta-call";
export default function ParaStudio() {
  const serviceWords = [
    "Para-Studio",

  ];

  const studioCards = [
    {
      title: "Creative Production",
      description: "From concept to creation, we bring ideas to life with cinematic quality and creative flair. Our studio produces content that not only looks stunning but tells compelling stories that resonate with audiences.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="23 7 16 12 23 17 23 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" stroke="white" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: "Video Production & Post",
      description: "Professional video production with cutting-edge post-production services. We create visually stunning content that captures attention and delivers your message with impact and style.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="13" r="4" stroke="white" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: "Photography & Visual Design",
      description: "Stunning photography and visual design that captures the essence of your brand. From product shoots to lifestyle photography, we create images that speak louder than words.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 20H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16.5 3.5C16.8978 3.10217 17.4374 2.87868 18 2.87868C18.5626 2.87868 19.1022 3.10217 19.5 3.5C19.8978 3.89782 20.1213 4.43739 20.1213 5C20.1213 5.56261 19.8978 6.10217 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Creative Direction & Branding",
      description: "End-to-end creative direction that brings your brand vision to life. From concept development to final execution, we ensure every creative element aligns with your brand story and resonates with your audience. Whether it's brand films, campaigns, or creative content, we direct with purpose and deliver with impact.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 11C9 12.3807 10.1193 13.5 11.5 13.5C12.8807 13.5 14 12.3807 14 11V5C14 3.61929 12.8807 2.5 11.5 2.5C10.1193 2.5 9 3.61929 9 5V11Z" stroke="white" strokeWidth="2"/>
          <path d="M7 19V13C7 11.8954 7.89543 11 9 11H14C15.1046 11 16 11.8954 16 13V19H7Z" stroke="white" strokeWidth="2"/>
          <path d="M5 19H18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    }
  ];

  return (
    <>
      <SparklesPreviewColorful
        mainText="Para-Studio" 
        subText="Where Creativity Meets Production Excellence"
      />
        {/* <DemoOne 
          words={serviceWords}
          subheading="Where Creativity Meets Production Excellence"
        /> */}
        {/* <FeaturesGrid /> */}
        <HaloFeatures
          heading="What's in our Creative Arsenal"
          subheading="Because great content isn&apos;t just made, it&apos;s crafted with vision, precision, and a touch of magic."
          cards={studioCards}
          gridCols={2}
          gap={6}
        />
        <div className="w-full min-h-screen bg-black">
          <TextRevealCardPreview/>
        </div>
        {/* <D4Carousel /> */}
        
        <CTA />
        <MarqueService
          topText="Choose Para-Studio"
          bottomText="We ain't Kidding."
          height="h-[600px]"
        />
    </>
  );
}