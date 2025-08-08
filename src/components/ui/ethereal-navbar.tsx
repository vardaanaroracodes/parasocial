"use client"
import React from "react"
import { Github } from "lucide-react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "lg"
  children: React.ReactNode
}

const Button = ({ variant = "default", size = "sm", className = "", children, ...props }: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 disabled:pointer-events-none disabled:opacity-50"

  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    default: "bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-400 hover:to-red-400",
    outline:
      "border border-orange-500/40 bg-white/5 backdrop-blur-xl text-white hover:bg-orange-500/10 hover:border-orange-500/60",
    ghost: "text-orange-300 hover:text-white hover:bg-orange-500/10",
  }

  const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
    sm: "h-9 px-4 py-2 text-sm",
    lg: "px-8 py-6 text-lg",
  }

  return (
    <button
      className={`group relative overflow-hidden rounded-full ${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center">{children}</span>
      <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
    </button>
  )
}

export default function EtherealNavbar() {
  return (
    <nav className="relative z-20 w-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <div className="flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-orange-400 via-orange-300 to-red-400 bg-clip-text text-transparent">Parasocial</span>
          </div>

          {/* Glassmorphic Navigation Pills */}
          <div className="hidden md:flex items-center space-x-1 rounded-full bg-white/5 backdrop-blur-xl border border-orange-500/20 p-1 -mr-6">
            <a href="#" className="rounded-full px-4 py-2 text-sm font-medium text-white/90 transition-all hover:bg-orange-500/10 hover:text-white">Home</a>
            <a href="#" className="rounded-full px-4 py-2 text-sm font-medium text-white/90 transition-all hover:bg-orange-500/10 hover:text-white">Components</a>
            <a href="#" className="rounded-full px-4 py-2 text-sm font-medium text-white/90 transition-all hover:bg-orange-500/10 hover:text-white">Templates</a>
            <a href="#" className="rounded-full px-4 py-2 text-sm font-medium text-white/90 transition-all hover:bg-orange-500/10 hover:text-white">Docs</a>
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}



