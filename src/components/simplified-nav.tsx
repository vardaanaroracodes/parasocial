"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

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

const SimplifiedNav = () => {
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      // For anchor links, use window location to scroll to element
      window.location.href = href
    } else {
      // For regular routes, use Next.js router
      router.push(href)
    }
  }

  const handleMobileNavigation = (value: string) => {
    if (value) {
      handleNavigation(value)
    }
  }

  const toggleDropdown = (index: number) => {
    setDropdownOpen(dropdownOpen === index ? null : index)
  }

  const closeDropdown = () => {
    setDropdownOpen(null)
  }

  // Render static version during SSR to prevent hydration mismatch
  if (!mounted) {
    return (
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40 w-full max-w-6xl px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <div className="bg-black rounded-full px-6 py-3 border border-orange-900/30 shadow-lg w-fit mx-auto">
            <div className="flex items-center justify-center space-x-6">
              <div className="text-lg font-bold text-orange-100 mr-8">PARASOCIAL</div>
              {items.map((item, index) => (
                <div key={index} className="py-2 px-3 text-orange-200">
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="bg-black rounded-full px-4 py-2 border border-orange-900/30 shadow-lg">
            <div className="flex items-center justify-between text-orange-100 text-sm">
              <span className="font-bold">PARASOCIAL</span>
              <div className="flex items-center space-x-2">
                <span>/</span>
                <span className="text-orange-200">Menu</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <>
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40 w-full max-w-6xl px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <div className="bg-black rounded-full px-6 py-3 border border-orange-900/30 shadow-lg w-fit mx-auto">
            <div className="flex items-center justify-center space-x-1">
              <div className="text-lg font-bold text-orange-100 mr-8">
                <Link href="/" className="text-orange-100 no-underline hover:text-orange-400 transition-colors">
                  PARASOCIAL
                </Link>
              </div>
              
              {items.map((item, index) => (
                <div key={index} className="relative">
                  {item.dropdown ? (
                    <div className="relative">
                      <button
                        className="py-2 px-4 text-orange-200 hover:bg-orange-500/20 hover:text-orange-400 rounded-full transition-all duration-300 flex items-center gap-1 cursor-pointer"
                        onClick={() => toggleDropdown(index)}
                      >
                        {item.label}
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            dropdownOpen === index ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {dropdownOpen === index && (
                        <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900 border border-orange-900/30 rounded-lg shadow-lg z-50 py-2">
                          {item.dropdown.map((dropdownItem, dropdownIndex) => (
                            <div
                              key={dropdownIndex}
                              className="block px-4 py-3 text-sm text-orange-200 hover:bg-orange-500/20 hover:text-orange-400 transition-colors cursor-pointer"
                              onClick={() => {
                                closeDropdown()
                                handleNavigation(dropdownItem.href)
                              }}
                            >
                              <div className="font-medium">{dropdownItem.label}</div>
                              {dropdownItem.description && (
                                <div className="text-xs text-orange-300/70 mt-1">
                                  {dropdownItem.description}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      className="py-2 px-4 text-orange-200 hover:bg-orange-500/20 hover:text-orange-400 rounded-full transition-all duration-300 cursor-pointer"
                      onClick={() => handleNavigation(item.href)}
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Mobile Breadcrumb Navigation */}
        <div className="md:hidden">
          <div className="bg-black rounded-full px-4 py-2 border border-orange-900/30 shadow-lg">
            <div className="flex items-center justify-between text-orange-100 text-sm">
              <Link href="/" className="font-bold text-orange-100 no-underline hover:text-orange-400 transition-colors">PARASOCIAL</Link>
              <div className="flex items-center space-x-2">
                <span>/</span>
                <select 
                  className="bg-transparent border-none text-orange-200 focus:outline-none cursor-pointer hover:text-orange-400 transition-colors"
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

      {/* Click outside to close dropdown */}
      {dropdownOpen !== null && (
        <div 
          className="fixed inset-0 z-30" 
          onClick={closeDropdown}
        />
      )}
    </>
  )
}

export { SimplifiedNav }
