"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"

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
  { label: "Contact", href: "/ContactUs" },
]

const SimplifiedNav = () => {
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
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
          <div className="rounded-full px-6 py-3 border w-fit mx-auto bg-white/5 backdrop-blur-xl border-white/10 shadow-lg">
            <div className="flex items-center justify-center space-x-6">
              <div className="text-lg font-bold text-white/90 mr-8">PARASOCIAL</div>
              {items.map((item, index) => (
                <div key={index} className="py-2 px-3 text-white/90">
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="rounded-2xl px-4 py-2 border bg-white/5 backdrop-blur-xl border-white/10 shadow-lg">
            <div className="flex items-center justify-between text-white text-sm">
              <span className="font-bold">PARASOCIAL</span>
              <span>Menu</span>
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
          <div className="rounded-full px-6 py-3 border w-fit mx-auto bg-white/5 backdrop-blur-xl border-white/10 shadow-lg">
            <div className="flex items-center justify-center space-x-1">
              <div className="text-lg font-bold text-white mr-8">
                <Link href="/" className="text-white no-underline hover:text-gray-300 transition-colors">
                  PARASOCIAL
                </Link>
              </div>
              
              {items.map((item, index) => (
                <div key={index} className="relative">
                  {item.dropdown ? (
                    <div className="relative">
                      <button
                        className="py-2 px-4 text-white hover:bg-white/10 rounded-full transition-colors flex items-center gap-1 cursor-pointer"
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
                        <div className="absolute top-full left-0 mt-2 w-64 rounded-xl border bg-black/60 backdrop-blur-xl border-white/10 shadow-xl z-50 py-2">
                          {item.dropdown.map((dropdownItem, dropdownIndex) => (
                            <div
                              key={dropdownIndex}
                              className="block px-4 py-3 text-sm text-gray-200 hover:bg-white/10 transition-colors cursor-pointer"
                              onClick={() => {
                                closeDropdown()
                                handleNavigation(dropdownItem.href)
                              }}
                            >
                              <div className="font-medium text-white">{dropdownItem.label}</div>
                              {dropdownItem.description && (
                                <div className="text-xs text-gray-300 mt-1">{dropdownItem.description}</div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      className="py-2 px-4 text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
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
        
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="rounded-2xl px-4 py-2 border bg-white/5 backdrop-blur-xl border-white/10 shadow-lg">
            <div className="flex items-center justify-between text-white text-sm">
              <Link href="/" className="font-bold text-white no-underline">PARASOCIAL</Link>
              <button
                className="p-2 rounded-lg hover:bg-white/10 active:scale-95 transition"
                aria-label="Toggle menu"
                onClick={() => setMobileOpen((v) => !v)}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
            {mobileOpen && (
              <div className="mt-2 rounded-xl border border-white/10 bg-white/10 backdrop-blur-xl divide-y divide-white/10 overflow-hidden">
                <button className="w-full text-left px-4 py-3 text-white/90 hover:bg-white/10 transition" onClick={() => { setMobileOpen(false); handleNavigation('/') }}>Home</button>
                <button className="w-full text-left px-4 py-3 text-white/90 hover:bg-white/10 transition" onClick={() => { setMobileOpen(false); handleNavigation('/AboutUs') }}>About</button>
                <div className="px-4 py-2 text-xs uppercase tracking-wide text-white/50">Services</div>
                <button className="w-full text-left px-4 py-3 text-white/90 hover:bg-white/10 transition" onClick={() => { setMobileOpen(false); handleNavigation('/Paracommerce') }}>Para-Commerce</button>
                <button className="w-full text-left px-4 py-3 text-white/90 hover:bg-white/10 transition" onClick={() => { setMobileOpen(false); handleNavigation('/Parainfluence') }}>Para-Influence</button>
                <button className="w-full text-left px-4 py-3 text-white/90 hover:bg-white/10 transition" onClick={() => { setMobileOpen(false); handleNavigation('/Parastudio') }}>Para-Studio</button>
                <button className="w-full text-left px-4 py-3 text-white/90 hover:bg-white/10 transition" onClick={() => { setMobileOpen(false); handleNavigation('/ContactUs') }}>Contact</button>
              </div>
            )}
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
