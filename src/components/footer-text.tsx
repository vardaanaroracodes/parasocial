"use client"

import * as React from "react"
import { useState } from "react"
import { FuzzyText } from "@/components/ui/fuzzy-text"

interface FooterTextProps {
  text: string
  fontSize?: string
}

export default function FooterText({ text, fontSize = "clamp(4rem, 12vw, 12rem)" }: FooterTextProps) {
  const [enableHover, setEnableHover] = useState(true)
  const [hoverIntensity, setHoverIntensity] = useState(0.4)
  
  return (
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={hoverIntensity}
        enableHover={enableHover}
        color="#f97316" // Orange-500 color to match theme
        fontSize={fontSize}
      >
        {text}
      </FuzzyText>
  )
}

export { FooterText }