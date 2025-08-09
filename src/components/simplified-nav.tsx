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
  const [mounted, setMounted] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (!mounted) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = mobileOpen ? "hidden" : previousOverflow || ""
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [mobileOpen, mounted])

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
      setMobileOpen(false)
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
        <div className="rounded-full px-5 py-2 w-fit mx-auto backdrop-blur-md bg-white/5 dark:bg-black/30 supports-[backdrop-filter:blur(0px)]:bg-white/10 border border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
          <div className="flex items-center justify-center space-x-1">
            <div className="text-lg font-bold text-orange-100 mr-6 px-2">
              {mounted ? (
                <Link href="/" className="inline-flex items-center no-underline">
                  <img
                    src="/parasocial-nobg1.png"
                    alt="Parasocial logo wordmark"
                    className="w-[180px] mt-4 h-auto select-none object-contain drop-shadow-[0_0_6px_rgba(255,130,0,0.35)] hover:scale-105 transition-transform duration-300"
                  />
                </Link>
              ) : (
                <img
                  src="/parasocial-nobg1.png"
                  alt="Parasocial logo wordmark"
                  className="w-[180px] mt-4 h-auto select-none object-contain drop-shadow-[0_0_6px_rgba(255,130,0,0.35)]"
                />
              )}
            </div>
            
            {items.map((item, index) => (
              <div key={index} className="relative">
                {item.dropdown && mounted ? (
                  <div className="relative">
                    <button
                      className="py-1.5 px-3 text-orange-200 hover:bg-orange-500/20 hover:text-orange-400 rounded-full transition-all duration-300 flex items-center gap-1 cursor-pointer"
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
                      <div className="absolute top-full left-0 mt-2 w-64 backdrop-blur-md bg-black/60 border border-white/15 rounded-lg shadow-xl z-[9999] py-2">
                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                          <div
                            key={dropdownIndex}
                            className="block px-4 py-3 text-sm text-orange-200 hover:bg-white/10 hover:text-orange-300 transition-colors cursor-pointer"
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
                  <div className="py-1.5 px-3 text-orange-200">
                    {mounted ? (
                      <button
                        className="hover:bg-white/10 hover:text-orange-300 rounded-full transition-all duration-300 cursor-pointer"
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
        <div className="rounded-full px-3.5 py-1.5 border border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.12)] bg-black">
          <div className="flex items-center justify-between text-orange-100 text-sm">
            {mounted ? (
              <Link href="/" className="font-bold text-orange-100 no-underline hover:text-orange-400 transition-colors inline-flex items-center px-1">
                <img
                  src="/parasocial-nobg.png"
                  alt="Parasocial logo wordmark"
                  className="w-[150px] h-auto select-none object-contain drop-shadow-[0_0_6px_rgba(255,130,0,0.35)] hover:scale-105 transition-transform duration-300"
                />
              </Link>
            ) : (
              <span className="font-bold inline-flex items-center px-1">
                <img
                  src="/parasocial-nobg.png"
                  alt="Parasocial logo wordmark"
                  className="w-[150px] h-auto select-none object-contain drop-shadow-[0_0_6px_rgba(255,130,0,0.35)]"
                />
              </span>
            )}
            {mounted && (
              <button
                aria-label="Open menu"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 active:scale-95 transition-all text-orange-200"
                onClick={() => setMobileOpen(true)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M3.75 5.25A.75.75 0 0 1 4.5 4.5h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 7.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm.75 6.75a.75.75 0 0 0 0 1.5h15a.75.75 0 0 0 0-1.5h-15Z" clipRule="evenodd" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Mobile fullscreen overlay menu */}
        {mounted && mobileOpen && (
          <div className="fixed inset-0 z-[10000]">
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setMobileOpen(false)}
            />
            <div className="absolute inset-x-4 top-20 rounded-2xl border border-white/15 bg-black shadow-2xl p-4 text-orange-100">
              <div className="flex items-center justify-between mb-2 px-1">
                <span className="text-sm uppercase tracking-wider text-orange-300/80">Menu</span>
                <button
                  aria-label="Close menu"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 active:scale-95 transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 1 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <div className="divide-y divide-white/10">
                {[
                  { label: "Home", href: "/" },
                  { label: "About", href: "/AboutUs" },
                  { label: "Para-Commerce", href: "/Paracommerce" },
                  { label: "Para-Influence", href: "/Parainfluence" },
                  { label: "Para-Studio", href: "/Parastudio" },
                  { label: "Contact", href: "/ContactUs" },
                ].map((link) => (
                  <button
                    key={link.href}
                    className="w-full text-left px-3 py-4 hover:bg-white/10 rounded-xl transition-colors"
                    onClick={() => handleMobileNavigation(link.href)}
                  >
                    <span className="text-base font-medium">{link.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
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
