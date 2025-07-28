"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center bg-black h-[40rem] rounded-2xl w-full">
      <TextRevealCard
        text="You know the business"
        revealText="We know the chemistry "
      >
        <TextRevealCardTitle>
          Sometimes, you just need to see it.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          Para-Studio — the creative zone where ideas evolve into binge-worthy visuals that actually hit. Whether it&apos;s a scroll-stopping vertical reel or a cinematic brand film, we craft content that moves people and metrics alike.
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
