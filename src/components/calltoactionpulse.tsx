"use client";

import { PulseBeams } from "@/components/ui/pulse-beams";
import { motion } from "framer-motion";
import Link from "next/link";

const beams = [
  {
    path: "M269 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5",
    gradientConfig: {
      initial: {
        x1: "0%",
        x2: "0%",
        y1: "80%",
        y2: "100%",
      },
      animate: {
        x1: ["0%", "0%", "200%"],
        x2: ["0%", "0%", "180%"],
        y1: ["80%", "0%", "0%"],
        y2: ["100%", "20%", "20%"],
      },
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "linear" as const,
        repeatDelay: 2,
        delay: Math.random() * 2,
      },
    },
    connectionPoints: [
      { cx: 6.5, cy: 398.5, r: 6 },
      { cx: 269, cy: 220.5, r: 6 }
    ]
  },
  {
    path: "M568 200H841C846.523 200 851 195.523 851 190V40",
    gradientConfig: {
      initial: {
        x1: "0%",
        x2: "0%",
        y1: "80%",
        y2: "100%",
      },
      animate: {
        x1: ["20%", "100%", "100%"],
        x2: ["0%", "90%", "90%"],
        y1: ["80%", "80%", "-20%"],
        y2: ["100%", "100%", "0%"],
      },
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "linear" as const,
        repeatDelay: 2,
        delay: Math.random() * 2,
      },
    },
    connectionPoints: [
      { cx: 851, cy: 34, r: 6.5 },
      { cx: 568, cy: 200, r: 6 }
    ]
  },
  {
    path: "M425.5 274V333C425.5 338.523 421.023 343 415.5 343H152C146.477 343 142 347.477 142 353V426.5",
    gradientConfig: {
      initial: {
        x1: "0%",
        x2: "0%",
        y1: "80%",
        y2: "100%",
      },
      animate: {
        x1: ["20%", "100%", "100%"],
        x2: ["0%", "90%", "90%"],
        y1: ["80%", "80%", "-20%"],
        y2: ["100%", "100%", "0%"],
      },
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "linear" as const,
        repeatDelay: 2,
        delay: Math.random() * 2,
      },
    },
    connectionPoints: [
      { cx: 142, cy: 427, r: 6.5 },
      { cx: 425.5, cy: 274, r: 6 }
    ]
  },
  {
    path: "M493 274V333.226C493 338.749 497.477 343.226 503 343.226H760C765.523 343.226 770 347.703 770 353.226V427",
    gradientConfig: {
      initial: {
        x1: "40%",
        x2: "50%",
        y1: "160%",
        y2: "180%",
      },
      animate: {
        x1: "0%",
        x2: "10%",
        y1: "-40%",
        y2: "-20%",
      },
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "linear" as const,
        repeatDelay: 2,
        delay: Math.random() * 2,
      },
    },
    connectionPoints: [
      { cx: 770, cy: 427, r: 6.5 },
      { cx: 493, cy: 274, r: 6 }
    ]
  },
  {
    path: "M380 168V17C380 11.4772 384.477 7 390 7H414",
    gradientConfig: {
      initial: {
        x1: "-40%",
        x2: "-10%",
        y1: "0%",
        y2: "20%",
      },
      animate: {
        x1: ["40%", "0%", "0%"],
        x2: ["10%", "0%", "0%"],
        y1: ["0%", "0%", "180%"],
        y2: ["20%", "20%", "200%"],
      },
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "linear" as const,
        repeatDelay: 2,
        delay: Math.random() * 2,
      },
    },
    connectionPoints: [
      { cx: 420.5, cy: 6.5, r: 6 },
      { cx: 380, cy: 168, r: 6 }
    ]
  }
] satisfies Array<{
  path: string;
  gradientConfig: {
    initial: { x1: string; x2: string; y1: string; y2: string; };
    animate: { x1: string | string[]; x2: string | string[]; y1: string | string[]; y2: string | string[]; };
    transition: {
      duration: number;
      repeat: number;
      repeatType: "loop";
      ease: "linear";
      repeatDelay: number;
      delay: number;
    };
  };
  connectionPoints: Array<{ cx: number; cy: number; r: number; }>;
}>;

const gradientColors = {
  start: "#18CCFC",
  middle: "#6344F5",
  end: "#AE48FF"
};

export const PulseBeamsFirstDemo = () => {
  return (
    <div className="bg-black h-screen flex flex-col">
      {/* Animated heading */}
      <motion.div 
        className="text-center py-4 flex-shrink-0"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          One Click. From Greatness.
        </motion.h2>
      </motion.div>

      <div className="flex-1 relative flex items-center justify-center">
        <PulseBeams
          beams={beams}
          gradientColors={gradientColors}
          className="bg-transparent w-full h-full"
        >
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="z-40">
        <Link
          href="/ContactUs"
          className="relative group inline-flex items-center justify-center w-[320px] h-[120px] rounded-full p-[2px] bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-500 hover:from-cyan-300 hover:via-fuchsia-400 hover:to-purple-400 transition-colors duration-300 shadow-2xl shadow-zinc-900"
        >
          <span className="absolute inset-0 blur-xl opacity-40 group-hover:opacity-60 transition-opacity bg-gradient-to-r from-cyan-400/50 via-fuchsia-500/50 to-purple-500/50 rounded-full" />
          <span className="relative w-full h-full rounded-full bg-zinc-950/90 ring-1 ring-white/10 flex items-center justify-center gap-2">
            <span className="md:text-4xl text-base bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 via-neutral-400 to-neutral-200">Contact Us</span>
          </span>
        </Link>
      </motion.div>
    </PulseBeams>
      </div>
    </div>
  );
};