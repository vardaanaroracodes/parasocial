"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { GooeyNavFixed } from "@/components/ui/gooeynav-fixed"

const items = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  {
    label: "Services",
    href: "#services",
    dropdown: [
      {
        label: "Para-Commerce",
        href: "/Paracommerce",
        description: "Where content converts and carts get full",
      },
      {
        label: "Para-Influence",
        href: "/Parainfluence",
        description: "Amplifying voices that matter",
      },
      {
        label: "Para-Studio",
        href: "/Parastudio",
        description: "Where creativity gets real",
      },
    ],
  },
  { label: "Contact", href: "#contact" },
]

const GooeyNavWithImageDemo = () => {
  const router = useRouter()

  const handleMobileNavigation = (value: string) => {
    if (value) {
      if (value.startsWith('#')) {
        // For anchor links, use window location
        window.location.href = value
      } else {
        // For regular routes, use Next.js router
        router.push(value)
      }
    }
  }

  return (
    <>
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40 w-full max-w-6xl px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <div className="bg-black dark:bg-white rounded-full px-6 py-3 border border-gray-700 dark:border-gray-300 shadow-lg w-fit mx-auto">
            <GooeyNavFixed
              items={items}
              particleCount={15}
              particleDistances={[90, 10]}
              initialActiveIndex={0}
              animationTime={600}
              timeVariance={300}
              logo={{
                text: "PARASOCIAL",
                href: "/",
              }}
            />
          </div>
        </div>
        
        {/* Mobile Breadcrumb Navigation */}
        <div className="md:hidden">
          <div className="bg-black rounded-full px-4 py-2 border border-gray-700 shadow-lg">
            <div className="flex items-center justify-between text-white text-sm">
              <Link href="/" className="font-bold">PARASOCIAL</Link>
              <div className="flex items-center space-x-2">
                <span>/</span>
                <select 
                  className="bg-transparent border-none text-white focus:outline-none cursor-pointer"
                  onChange={(e) => handleMobileNavigation(e.target.value)}
                  defaultValue=""
                >
                  <option value="">Menu</option>
                  <option value="/">Home</option>
                  <option value="#about">About</option>
                  <option value="/Paracommerce">Para-Commerce</option>
                  <option value="/Parainfluence">Para-Influence</option>
                  <option value="/Parastudio">Para-Studio</option>
                  <option value="#contact">Contact</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export { GooeyNavWithImageDemo }
