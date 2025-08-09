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
      linkedinUrl: "https://www.linkedin.com/in/ravijhaveri/",
      role: "-"
    },
    {
      name: "Neet Arora",
      imageUrl: "/neetant.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/neet-arora-a875171/",
      role: "-"
    },
    {
      name: "Shailendra Agrawal ",
      imageUrl: "/shail.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/shailendra-agrawal-86025b66/",
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