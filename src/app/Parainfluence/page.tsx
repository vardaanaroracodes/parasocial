"use client";

import { ContactCtaCard } from "@/components/ui/contact-cta-card";
import { HaloFeatures } from "@/components/cardGrid";
// import FeaturesGrid from "@/components/features";
import DemoOne from "@/components/headerService";
import { D4Carousel } from "@/components/ruler";
import { TextRevealCardPreview } from "@/components/textreveal";
import { SparklesPreviewColorful } from "@/components/service-hero";
import { MarqueService } from "@/components/marquee-services";
import CTA from "@/components/cta-call";

export default function ServicesLanding() {
  const serviceWords = [
    "Para-Influence",
   
  ];

  const influenceCards = [
    {
      title: "Influencer Partnerships",
      description: "We connect brands with authentic voices that resonate. Our curated network of influencers spans every niche, ensuring your message reaches the right audience with genuine impact and measurable results.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" stroke="#fb923c" strokeWidth="2"/>
          <path d="M23 21V19C23 18.1645 22.7155 17.3541 22.2094 16.7018C21.7033 16.0494 20.9994 15.5906 20.2 15.4" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Campaign Strategy",
      description: "From concept to execution, we craft influencer campaigns that drive engagement and conversions. Our data-driven approach ensures every collaboration tells your brand story while achieving your marketing goals.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Content Creation",
      description: "Authentic content that doesn't feel like an ad. We work with influencers to create engaging posts, stories, and videos that naturally integrate your brand into their narrative and captivate their audience.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.5 4H20.5C21.0304 4 21.5391 4.21071 21.9142 4.58579C22.2893 4.96086 22.5 5.46957 22.5 6V20C22.5 20.5304 22.2893 21.0391 21.9142 21.4142C21.5391 21.7893 21.0304 22 20.5 22H3.5C2.96957 22 2.46086 21.7893 2.08579 21.4142C1.71071 21.0391 1.5 20.5304 1.5 20V6C1.5 5.46957 1.71071 4.96086 2.08579 4.58579C2.46086 4.21071 2.96957 4 3.5 4H9.5" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16.5 2C16.8978 1.60218 17.4374 1.37868 18 1.37868C18.5626 1.37868 19.1022 1.60218 19.5 2C19.8978 2.39782 20.1213 2.93739 20.1213 3.5C20.1213 4.06261 19.8978 4.60218 19.5 5L12 12.5L8.5 13.5L9.5 10L16.5 2Z" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Performance Analytics",
      description: "Real-time insights that matter. We track engagement, reach, conversions, and ROI across all influencer partnerships, providing transparent reporting that proves the impact of every collaboration on your bottom line.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3V21H21" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 9L12 6L16 10L20 6" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 14V18" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13 11V18" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 8V18" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <>
      <SparklesPreviewColorful
        mainText="Para-Influence"
        subText="Pragmatically Influencing the Future"
      />
        {/* <DemoOne 
          words={serviceWords}
          subheading="Pragmatically Influencing the Future"
        /> */}
        {/* <FeaturesGrid /> */}
        <HaloFeatures
          heading="What's in our Influence Arsenal"
          subheading="Because authentic influence isn't bought, it's built through genuine connections and strategic partnerships."
          cards={influenceCards}
          gridCols={2}
          gap={6}
        />
        <div className="w-full min-h-screen bg-black">
          <TextRevealCardPreview
            text="You bring the audience"
            revealText="We bring the influence"
            title="Authentic connections drive real results."
            description="Para-Influence — where genuine partnerships create lasting impact. We connect brands with authentic voices who resonate with their audience, turning followers into loyal customers through strategic influencer collaborations."
          />
        </div>
        <D4Carousel /> 
        <CTA />
        <MarqueService
          topText="Choose Para-Influence"
          bottomText="Authentic Influence, Real Results"
          height="h-[600px]"
        />
        <ContactCtaCard />
    </>
  );
}