// demo.tsx
import React from 'react';
import Component from '@/components/ui/text-marque';

interface MarqueServiceProps {
  topText?: string;
  bottomText?: string;
  height?: string;
  topVelocity?: number;
  bottomVelocity?: number;
  delay?: number;
  className?: string;
  textClassName?: string;
}

function MarqueService({
  topText = "Choose Paracommerce",
  bottomText = "We are Legit AF.",
  height = "h-[500px]",
  topVelocity = -3,
  bottomVelocity = 3,
  delay = 500,
  className = "",
  textClassName = ""
}: MarqueServiceProps) {
  return (
    <>
      <div className={`${height} grid place-content-center bg-black ${className}`}>
        <Component
          delay={delay}
          baseVelocity={topVelocity}
          clasname={`font-bold tracking-[-0.07em] leading-[90%] text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 ${textClassName}`}
        >
          {topText}
        </Component>
        <Component
          delay={delay}
          baseVelocity={bottomVelocity}
          clasname={`font-bold tracking-[-0.07em] leading-[90%] text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-red-600 ${textClassName}`}
        >
          {bottomText}
        </Component>
      </div>
    </>
  );
}

export { MarqueService };