"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { FooterText } from "@/components/footer-text";

export function SparklesPreview() {
  return (
    <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        Acme
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}

export function SparklesPreviewDark() {
  return (
    <div className="h-[40rem] relative w-full bg-slate-950 flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={1}
        />
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        Build faster
      </h1>
    </div>
  );
}

interface SparklesPreviewColorfulProps {
  mainText?: string;
  subText?: string;
  particleDensity?: number;
  particleColor?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  className?: string;
}

export function SparklesPreviewColorful({
  mainText = "Paracommerce",
  subText = "Where Content Converts and Carts Get Full",
  particleDensity = 400,
  particleColor = "#f97316",
  minSize = 1.0,
  maxSize = 3.0,
  speed = 0.5,
  className = ""
}: SparklesPreviewColorfulProps) {
  return (
    <div className={`h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden ${className}`}>
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlescolorful"
          background="transparent"
          minSize={minSize}
          maxSize={maxSize}
          particleDensity={particleDensity}
          className="w-full h-full"
          particleColor={particleColor}
          speed={speed}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 relative z-20">
        <FooterText text={mainText} fontSize="clamp(3rem, 8vw, 8rem)" />
        <p className="text-orange-300 cursor-default text-center">
          {subText}
        </p>
      </div>
    </div>
  );
}
