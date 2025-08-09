"use client"

import { HaloCard } from "./feature-card-halo"
import { motion } from "framer-motion"
import React from "react"

interface CardData {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface HaloFeaturesProps {
  heading?: string;
  subheading?: string;
  cards?: CardData[];
  className?: string;
  gridCols?: number;
  gap?: number;
  maxCols?: number;
}

const defaultCards: CardData[] = [
  {
    title: "Discover",
    description: "We help you uncover what's right for your brand to get going",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 13L12 4L21 13" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 21V9L15 3V21" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: "Decode",
    description: "Deep insights into user behavior engagement and trends",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="3" stroke="#fb923c" strokeWidth="2"/>
        <path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="#fb923c" strokeWidth="2"/>
      </svg>
    )
  },
  {
    title: "Design",
    description: "Making it more attractive than it could be, engage and deliver",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 12C2 12 5 5 12 5S22 12 22 12S19 19 12 19S2 12 2 12Z" stroke="#fb923c" strokeWidth="2"/>
        <circle cx="12" cy="12" r="3" stroke="#fb923c" strokeWidth="2"/>
      </svg>
    )
  },
  {
    title: "Deploy",
    description: "We don't only build, we create a E-2-E environment for you till the project.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z" stroke="#fb923c" strokeWidth="2"/>
      </svg>
    )
  }
];

export function HaloFeatures({ 
  heading = "We Follow The D4 Principle",
  subheading = "Powering. Campaigning. Controlling.",
  cards = defaultCards,
  className = "bg-black py-16 px-6",
  gridCols = 2,
  gap = 4,
  maxCols = 4
}: HaloFeaturesProps) {

    // Determine the appropriate grid class based on number of cards and constraints
    const getGridClass = () => {
      const numCards = cards.length;
      const actualCols = Math.min(gridCols, maxCols, numCards);
      
      const gridClasses = {
        1: "grid-cols-1",
        2: "grid-cols-1 md:grid-cols-2", 
        3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
      };
      
      return gridClasses[actualCols as keyof typeof gridClasses] || "grid-cols-2";
    };

    const getGapClass = () => {
      const gapClasses = {
        2: "gap-2",
        3: "gap-3", 
        4: "gap-4",
        6: "gap-6",
        8: "gap-8"
      };
      
      return gapClasses[gap as keyof typeof gapClasses] || "gap-4";
    };

    return (

        <div className={className}>
        {/* Animated heading */}
        <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <motion.h2 
                className="text-4xl md:text-5xl font-bold text-orange-300 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
                {heading}
            </motion.h2>
            <motion.p 
                className="text-lg text-orange-200/70 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
               {subheading}
            </motion.p>
        </motion.div>

        <div className={`grid ${getGridClass()} ${getGapClass()}`}>
            {cards.map((card, index) => (
                <HaloCard 
                    key={index}
                    title={card.title}
                    description={card.description}
                    icon={card.icon}
                />
            ))}
        </div>
        </div>
    )
}
