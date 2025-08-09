"use client";
import React, { useId } from "react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

interface Sparkle {
  id: string;
  x: number;
  y: number;
  size: number;
  delay: number;
}

export const SparklesCore = (props: ParticlesProps) => {
  const {
    id,
    className,
    background = "transparent",
    minSize = 1,
    maxSize = 3,
    particleColor = "#ffffff",
    particleDensity = 50,
  } = props;

  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const generatedId = useId();
  const componentId = id || generatedId;

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles: Sparkle[] = [];
      for (let i = 0; i < particleDensity; i++) {
        newSparkles.push({
          id: `sparkle-${i}`,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * (maxSize - minSize) + minSize,
          delay: Math.random() * 3,
        });
      }
      setSparkles(newSparkles);
    };

    generateSparkles();
  }, [particleDensity, minSize, maxSize]);

  return (
    <div 
      className={cn("relative h-full w-full overflow-hidden", className)}
      style={{ background }}
    >
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute rounded-full"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            backgroundColor: particleColor,
            boxShadow: `0 0 ${sparkle.size * 2}px ${particleColor}`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: sparkle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};
