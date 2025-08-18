"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const items = [
  { label: "Home", href: "/" },
  { label: "About", href: "/AboutUs" },
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
        label: "Para-Fluence",
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
  { label: "Contact", href: "/ContactUs" },
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

  const navContent = (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <div className="bg-black rounded-full px-6 py-3 border border-orange-900/30 shadow-lg w-fit mx-auto">
          <div className="flex items-center justify-center space-x-1">
            <div className="text-lg font-bold text-orange-100 mr-8">
              {mounted ? (
                <Link href="/" className="inline-flex items-center no-underline">
                  <img
                    src="/parasocial-nobg.png"
                    alt="Parasocial Logo"
                    className="h-8 w-auto select-none"
                  />
                </Link>
              ) : (
                <img src="/parasocial.svg" alt="Parasocial Logo" className="h-8 w-auto select-none" />
              )}
            </div>
            
            {items.map((item, index) => (
              <div key={index} className="relative">
                {item.dropdown && mounted ? (
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
                      <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900 border border-orange-900/30 rounded-lg shadow-lg z-[9999] py-2">
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
                  <div className="py-2 px-4 text-orange-200">
                    {mounted ? (
                      <button
                        className="hover:bg-orange-500/20 hover:text-orange-400 rounded-full transition-all duration-300 cursor-pointer"
                        onClick={() => handleNavigation(item.href)}
                      >
                        {item.label}
                      </button>
                    ) : (
                      item.label
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="bg-black rounded-full px-4 py-2 border border-orange-900/30 shadow-lg">
          <div className="flex items-center justify-between text-orange-100 text-sm">
            {mounted ? (
              <Link href="/" className="font-bold text-orange-100 no-underline hover:text-orange-400 transition-colors inline-flex items-center">
                <img src="/parasocial.svg" alt="Parasocial Logo" className="h-7 w-auto select-none" />
              </Link>
            ) : (
              <span className="font-bold inline-flex items-center">
                <img src="/parasocial.svg" alt="Parasocial Logo" className="h-7 w-auto select-none" />
              </span>
            )}
            <div className="flex items-center space-x-2">
              <span>/</span>
              {mounted ? (
                <select 
                  className="bg-transparent border-none text-orange-200 focus:outline-none cursor-pointer hover:text-orange-400 transition-colors"
                  onChange={(e) => handleMobileNavigation(e.target.value)}
                  defaultValue=""
                >
                  <option value="">Menu</option>
                  <option value="/">Home</option>
                  <option value="/AboutUs">About</option>
                  <option value="/Paracommerce">Para-Commerce</option>
                  <option value="/Parainfluence">Para-Fluence</option>
                  <option value="/Parastudio">Para-Studio</option>
                  <option value="/ContactUs">Contact</option>
                </select>
              ) : (
                <span className="text-orange-200">Menu</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )

  return (
    <>
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-[9999] w-full max-w-6xl px-4">
        {navContent}
      </nav>

      {/* Click outside to close dropdown */}
      {mounted && dropdownOpen !== null && (
        <div 
          className="fixed inset-0 z-[9998]" 
          onClick={closeDropdown}
        />
      )}
    </>
  )
}

export { SimplifiedNav }
