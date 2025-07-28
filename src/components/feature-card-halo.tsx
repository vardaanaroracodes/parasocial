import { GradientCard } from "@/components/ui/gradient-cards"
import React from "react"

interface HaloCardProps {
  title?: string;
  description?: string;
  linkText?: string;
  linkHref?: string;
  icon?: React.ReactNode;
  showLink?: boolean;
}

export const HaloCard = (props: HaloCardProps) => {
    return <GradientCard {...props} />
}