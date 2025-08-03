"use client"
import HeroSection from "@/components/blocks/hero-section-1";
import { DemoOne } from "@/components/footer";
import { CardCurtainRevealDemo } from "@/components/landingcards";
import HandWrittenTitleDemo from "@/components/titlestext";
import RevealImageListDemo from "@/components/services";
import CardsFlow from "@/components/cards-flow";
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

  return (
   <>
   <HeroSection/>
   <HandWrittenTitleDemo title="Why Us" triggerOnScroll={true}/>
   <div className="flex justify-center mt-6">
     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
       {CardCurtainRevealDemo(text1.text, text1.title)}
       {CardCurtainRevealDemo(text2.text, text2.title)}
       {CardCurtainRevealDemo(text3.text, text3.title)}
     </div>
   </div>
   {/* <HaloFeatures 
     heading="What Makes Us Different"
     subheading="Influencer-first approach with authentic storytelling and social-age brand building"
     cards={paraInfluenceCards}
   /> */}
   {/* <CenteredLogoDemo /> */}
   <CardsFlow/>
  {/* <Gallery4Demo/> */}
   <RevealImageListDemo/>
   <DemoOne/>
   </>
  );
}
