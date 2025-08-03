"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface HandWrittenTitleProps {
    title?: string;
    triggerOnScroll?: boolean;
}

function HandWrittenTitle({
    title = "Hand Written",
    triggerOnScroll = false,
}: HandWrittenTitleProps) {
    const [isInView, setIsInView] = useState(!triggerOnScroll);
    const [textWidth, setTextWidth] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (!triggerOnScroll) return;

        const currentRef = containerRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            {
                threshold: 0.3,
                rootMargin: "0px 0px -100px 0px",
            }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [triggerOnScroll]);

    useEffect(() => {
        if (textRef.current) {
            const width = textRef.current.offsetWidth;
            setTextWidth(width);
        }
    }, [title]);

    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { duration: 2.5, ease: [0.43, 0.13, 0.23, 0.96] as const },
                opacity: { duration: 0.5 },
            },
        },
    };

    // Calculate responsive circle dimensions based on text width
    const padding = 80; // Extra padding around text
    const circleWidth = Math.max(textWidth + padding, 400); // Minimum width
    const circleHeight = 200; // Fixed height for consistency
    const centerX = circleWidth / 2;
    const centerY = circleHeight / 2;
    const radiusX = (circleWidth - 100) / 2; // Ellipse radius X
    const radiusY = (circleHeight - 60) / 2; // Ellipse radius Y

    // Create responsive bezier curve path similar to original
    const createResponsivePath = () => {
        // Scale factors based on text width
        const scaleX = circleWidth / 1200; // Original width was 1200
        const scaleY = circleHeight / 600; // Original height was 600
        
        // Calculate responsive coordinates
        const x1 = 1100 * scaleX;
        const y1 = 50 * scaleY;
        const x2 = 1400 * scaleX;
        const y2 = 250 * scaleY;
        const x3 = 1200 * scaleX;
        const y3 = 430 * scaleY;
        const x4 = 600 * scaleX;
        const y4 = 470 * scaleY;
        const x5 = 200 * scaleX;
        const y5 = 470 * scaleY;
        const x6 = 100 * scaleX;
        const y6 = 430 * scaleY;
        const x7 = 100 * scaleX;
        const y7 = 250 * scaleY;
        const x8 = 100 * scaleX;
        const y8 = 70 * scaleY;
        const x9 = 300 * scaleX;
        const y9 = 30 * scaleY;
        const x10 = 600 * scaleX;
        const y10 = 30 * scaleY;
        const x11 = 900 * scaleX;
        const y11 = 30 * scaleY;
        const x12 = 1100 * scaleX;
        const y12 = 130 * scaleY;
        const x13 = 1100 * scaleX;
        const y13 = 130 * scaleY;
        
        return `M ${x1} ${y1} 
                C ${x2} ${y2}, ${x3} ${y3}, ${x4} ${y4}
                C ${x5} ${y5}, ${x6} ${y6}, ${x7} ${y7}
                C ${x8} ${y8}, ${x9} ${y9}, ${x10} ${y10}
                C ${x11} ${y11}, ${x12} ${y12}, ${x13} ${y13}`;
    };

    const responsivePath = createResponsivePath();

    return (
        <div ref={containerRef} className="relative w-full max-w-4xl mx-auto py-24">
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.svg
                    width={circleWidth}
                    height={circleHeight}
                    viewBox={`0 0 ${circleWidth} ${circleHeight}`}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="w-full h-full"
                >
                    <motion.path
                        d={responsivePath}
                        fill="none"
                        strokeWidth="8"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        variants={draw}
                        className="text-black dark:text-white opacity-90"
                    />
                </motion.svg>
            </div>
            <div className="relative text-center z-10 flex flex-col items-center justify-center">
                <motion.h1
                    ref={textRef}
                    className="text-4xl md:text-6xl text-black dark:text-white tracking-tighter flex items-center gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    {title}
                </motion.h1>
            </div>
        </div>
    );
}


export { HandWrittenTitle }