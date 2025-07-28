"use client"
import HeroSection from "@/components/blocks/hero-section-1";
import { DemoOne } from "@/components/footer";
import { CardCurtainRevealDemo } from "@/components/landingcards";
import { HaloFeatures } from "@/components/cardGrid";
import HandWrittenTitleDemo from "@/components/titlestext";
import RevealImageListDemo from "@/components/services";
const text1 = {
  title: "Who Are We ?",
  text: "Founded in 2025, Parasocial is an influencer-first agency, and a content production company based out of India. Embodying an Influencer & Social First Approach @ Parasocial we embrace all the complexities and deliver stories to our clients with redefining narratives distilled into brief and powerful messages for the brand.",
}
const text2 = {
  title: "What Do We Do ?",
  text: " In a world of short video lengths, recommendations and waning attention, the skill to share an engaging, authentic and credible brand stories in a byte sized story format requires adapting to complexity and speed. Brands need to move from just informing and telling stories to narratives which inspire, converse, entertain, reach and impact positive sales.",
}
const text3 = {
  title: "How Do We Do It ?",
  text: "@ Parasocial, we embrace the new reality of unpredictable social media and identify, the best opportunities, ideas, authentic influencers and networks for our clients and match them to build emotive, memorable SOCIAL AGE brands. With our in -house production capabilities for your tailor -made creative assets we deliver lower costs of production by using our expertise in video production, editing, dubbing and content creation",
}

export default function Home() {
  const paraInfluenceCards = [
    {
      title: "Influence",
      description: "Connecting brands with authentic influencers who resonate with your target audience",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="2"/>
          <path d="M23 21V19C23 18.1645 22.7155 17.3541 22.2094 16.6972C21.7032 16.0403 20.9991 15.5727 20.2 15.3654" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55343C18.7122 5.25615 19.0078 6.11937 19.0078 7.005C19.0078 7.89063 18.7122 8.75385 18.1676 9.45657C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Content",
      description: "Creating compelling content that tells your brand story in authentic and engaging ways",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 2V8H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 13H8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 17H8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 9H9H8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Strategy",
      description: "Data-driven strategies that amplify your brand's reach and impact across social platforms",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 12H18L15 21L9 3L6 12H2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Production",
      description: "In-house production capabilities delivering high-quality creative assets at competitive costs",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="23 7 16 12 23 17 23 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" stroke="white" strokeWidth="2"/>
        </svg>
      )
    }
  ];

  return (
   <>
   <HeroSection/>
   <HandWrittenTitleDemo title="Why Us" triggerOnScroll={true} />
   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {CardCurtainRevealDemo(text1.text, text1.title)}
    {CardCurtainRevealDemo(text2.text, text2.title)}
    {CardCurtainRevealDemo(text3.text, text3.title)}
   </div>
   <HaloFeatures 
     heading="What Makes Us Different"
     subheading="Influencer-first approach with authentic storytelling and social-age brand building"
     cards={paraInfluenceCards}
   />
  {/* <Gallery4Demo/> */}
   <RevealImageListDemo/>
   <DemoOne/>
   </>
  );
}
