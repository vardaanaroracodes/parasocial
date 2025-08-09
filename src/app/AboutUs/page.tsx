"use client"

import { AboutHero } from "@/components/about-hero"
import { Process } from "@/components/cards-about"
import { AnimatedPinDemo } from "@/components/team-card"
import { CareersSection } from "@/components/careers-section"
import { MarqueService } from "@/components/marquee-services"

export default function AboutUs(){

    return(
        <>
        <AboutHero/>
        <Process theme="orange"/>
        <AnimatedPinDemo
    teamMembers={[
    {
      name: "Ravi Javeri",
      imageUrl: "/ravi.jpeg",
      linkedinUrl: "https://linkedin.com/in/alexparker",
      role: "-"
    },
    {
      name: "Neetant Arora",
      imageUrl: "/neetant.jpeg",
      linkedinUrl: "https://linkedin.com/in/sarahwilson",
      role: "-"
    },
    {
      name: "Shailendra ",
      imageUrl: "/shail.jpeg",
      linkedinUrl: "https://linkedin.com/in/davidchen",
      role: "-"
    }
  ]}
        
        />
        <CareersSection />
        <MarqueService
            topText="Join Parqsquad"
          bottomText="We know you got it."
          height="h-[600px]"
        />
        </>
    )
}