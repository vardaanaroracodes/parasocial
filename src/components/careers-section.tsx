"use client";
import React from "react";
import { TextRevealCardPreview } from "@/components/textreveal";
import { FuzzyText } from "@/components/ui/fuzzy-text";
import { MediaButton } from "@/components/ui/media-button";

export function CareersSection() {
  return (
    <div className="w-full bg-black">
      {/* Main Careers Section */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-black py-20 px-6 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-950/20 via-black to-red-950/20"></div>
        
        {/* Ambient orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-red-500/8 to-orange-500/8 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-orange-400/5 to-red-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <div className="mb-12">
            <FuzzyText 
              fontSize="4rem"
              fontWeight={700}
              color="#fb923c"
              className="text-center mb-6"
            >
              Join the ParaSquad
            </FuzzyText>
            
            <h2 className="text-2xl md:text-3xl text-orange-200 mb-8 font-light">
              Work shouldn't feel like... work.
            </h2>
          </div>

          {/* Main Content */}
          <div className="text-left max-w-3xl mx-auto space-y-6 mb-12">
            <p className="text-lg text-orange-100 leading-relaxed">
              At Parasocial, we're building the ParaSquad — a team of storytellers, strategists, makers, and doers who live and breathe the Social Age.
            </p>
            
            <p className="text-lg text-orange-100 leading-relaxed">
              We're not here for clock-watchers. We're here for big-picture thinkers, micro-detail nerds, design junkies, and creative tech-heads who can dream it and build it.
            </p>
            
            <p className="text-lg text-orange-100 leading-relaxed">
              Whether you're a content wizard, a culture sponge, a pixel-perfect designer, or someone with a skill we didn't know we needed — let's talk.
            </p>
            
            <div className="bg-orange-900/20 border border-orange-700/30 rounded-lg p-6 my-8">
              <p className="text-orange-200 text-lg leading-relaxed">
                <span className="text-orange-400 font-semibold">Work from anywhere (or everywhere)</span> — we're cool with IRL, virtual, or hybrid setups.<br />
                Because real talent doesn't punch in — it shows up.
              </p>
            </div>
            
            <p className="text-xl text-orange-100 font-medium text-center">
              Sound like your vibe? Slide into our inbox.<br />
              <span className="text-orange-400">Let's build cool stuff together.</span>
            </p>
          </div>
           {/* <TextRevealCardPreview
        text="Think you've got what it takes?"
        revealText="We know you do."
        title="Ready to make waves in the Social Age?"
        description="From concept to culture — we're looking for minds that can navigate the creative chaos and turn trends into triumphs. Join us in redefining what's possible in the digital space."
        className="min-h-screen"
      /> */}

          {/* CTA Button */}
          <div className="relative z-10">
            <MediaButton
              label="Join the Squad"
              mediaUrl="https://i.pinimg.com/originals/71/fb/91/71fb9176f16357776802391df14b4e40.gif"
            />
          </div>
        </div>
      </div>

      {/* Text Reveal Section for additional engagement */}
     
    </div>
  );
}
