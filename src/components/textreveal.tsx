"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal";

interface TextRevealCardPreviewProps {
  text?: string;
  revealText?: string;
  title?: string;
  description?: string;
  className?: string;
}

export function TextRevealCardPreview({
  text = "You know the business",
  revealText = "We know the chemistry ",
  title = "Sometimes, you just need to see it.",
  description = "Para-Commerce — where content converts and carts get full. We create shoppable experiences that turn viewers into buyers through strategic content that drives both engagement and sales.",
  className = ""
}: TextRevealCardPreviewProps = {}) {
  return (
    <div className={`flex items-center justify-center bg-black min-h-screen w-full px-4 ${className}`}>
      <TextRevealCard
        text={text}
        revealText={revealText}
        className="w-full max-w-6xl"
      >
        <TextRevealCardTitle className="text-orange-300 text-xl md:text-2xl mb-4">
          {title}
        </TextRevealCardTitle>
        <TextRevealCardDescription className="text-orange-200/70 text-base md:text-lg">
          {description}
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
