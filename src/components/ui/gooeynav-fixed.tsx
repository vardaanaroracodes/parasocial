"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

interface GooeyNavItem {
  label: string
  href: string
  dropdown?: {
    label: string
    href: string
    description?: string
  }[]
}

export interface GooeyNavProps {
  items: GooeyNavItem[]
  animationTime?: number
  particleCount?: number
  particleDistances?: [number, number]
  timeVariance?: number
  initialActiveIndex?: number
  logo?: {
    src?: string
    alt?: string
    text?: string
    href?: string
    className?: string
  }
}

export const GooeyNavFixed: React.FC<GooeyNavProps> = ({
  items,
  animationTime = 600,
  particleCount = 15,
  particleDistances = [90, 10],
  timeVariance = 300,
  initialActiveIndex = 0,
  logo,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLUListElement>(null)
  const filterRef = useRef<HTMLSpanElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)
  const [activeIndex, setActiveIndex] = useState<number>(initialActiveIndex)
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null)
  const [isClient, setIsClient] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsClient(true)
  }, [])

  const makeParticles = (element: HTMLElement) => {
    if (!isClient) return
    
    for (let i = 0; i < particleCount; i++) {
      const span = document.createElement("span")
      span.className = "particle"
      element.appendChild(span)

      const size = Math.random() * particleDistances[0] + particleDistances[1]
      const duration = Math.random() * timeVariance + animationTime

      span.style.top = `${Math.random() * 100}%`
      span.style.left = `${Math.random() * 100}%`
      span.style.width = `${size}px`
      span.style.height = `${size}px`
      span.style.animationDuration = `${duration}ms`

      setTimeout(() => {
        if (span.parentNode) {
          span.parentNode.removeChild(span)
        }
      }, duration)
    }
  }

  const updateEffectPosition = (element: HTMLElement) => {
    if (!filterRef.current || !textRef.current) return

    const rect = element.getBoundingClientRect()
    const containerRect = containerRef.current?.getBoundingClientRect()
    if (!containerRect) return

    const left = rect.left - containerRect.left
    const top = rect.top - containerRect.top

    const styles = {
      width: `${rect.width}px`,
      height: `${rect.height}px`,
      left: `${left}px`,
      top: `${top}px`,
    }

    Object.assign(filterRef.current.style, styles)
    Object.assign(textRef.current.style, styles)
    textRef.current.innerText = element.innerText
  }

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      // For anchor links, use window location to scroll to element
      window.location.href = href
    } else {
      // For regular routes, use Next.js router
      router.push(href)
    }
  }

  const handleClick = (e: React.MouseEvent<HTMLLIElement> | React.KeyboardEvent<HTMLLIElement>, index: number) => {
    const liEl = e.currentTarget
    const item = items[index]
    
    setActiveIndex(index)
    updateEffectPosition(liEl)

    if (textRef.current) {
      textRef.current.classList.remove("active")
      void textRef.current.offsetWidth
      textRef.current.classList.add("active")
    }

    if (filterRef.current && isClient) {
      makeParticles(filterRef.current)
    }

    // Navigate to the href if it's not a dropdown
    if (item.href && !item.dropdown) {
      setTimeout(() => {
        handleNavigation(item.href)
      }, 100)
    }
  }

  const handleDropdownToggle = (index: number, e: React.MouseEvent) => {
    e.preventDefault()
    setDropdownOpen(dropdownOpen === index ? null : index)
  }

  const closeDropdown = () => {
    setDropdownOpen(null)
  }

  useEffect(() => {
    if (!navRef.current || !containerRef.current || !isClient) return

    const container = containerRef.current
    const navElement = navRef.current
    const activeElement = navElement.children[activeIndex] as HTMLElement

    if (activeElement) {
      updateEffectPosition(activeElement)
    }

    const resizeObserver = new ResizeObserver(() => {
      if (activeElement) {
        updateEffectPosition(activeElement)
      }
    })

    resizeObserver.observe(container)

    return () => {
      resizeObserver.unobserve(container)
    }
  }, [activeIndex, items, isClient])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        closeDropdown()
      }
    }

    if (isClient) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      if (isClient) {
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }
  }, [isClient])

  if (!isClient) {
    // Render a simple static version during SSR
    return (
      <div className="flex items-center justify-center space-x-6">
        {logo && (
          <div className="flex items-center mr-4">
            <span className="text-lg font-bold text-white dark:text-black">
              {logo.text || "LOGO"}
            </span>
          </div>
        )}
        {items.map((item, index) => (
          <div key={index} className="py-2 px-3 sm:py-3 sm:px-5">
            <span className="text-white dark:text-black">{item.label}</span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <>
      <div className="gooey-nav relative flex items-center justify-center" ref={containerRef}>
        <nav>
          {logo && (
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center">
              {logo.src ? (
                <img
                  src={logo.src}
                  alt={logo.alt || "Logo"}
                  className={cn("h-8 w-8 object-contain", logo.className)}
                />
              ) : (
                <a
                  href={logo.href || "/"}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavigation(logo.href || "/")
                  }}
                  className="text-lg font-bold text-white dark:text-black no-underline"
                >
                  {logo.text || "LOGO"}
                </a>
              )}
            </div>
          )}

          <ul
            className="flex items-center justify-center space-x-1 relative"
            ref={navRef}
            role="menubar"
            aria-label="Main navigation"
          >
            {items.map((item, index) => (
              <li
                key={index}
                className={cn(
                  `py-2 px-3 sm:py-3 sm:px-5 rounded-full relative cursor-pointer text-white dark:text-black`,
                  activeIndex === index ? "active" : "",
                )}
                onClick={(e) => {
                  if (item.dropdown) {
                    handleDropdownToggle(index, e)
                  } else {
                    handleClick(e, index)
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    if (item.dropdown) {
                      handleDropdownToggle(index, e as unknown as React.MouseEvent)
                    } else {
                      handleClick(e, index)
                    }
                  }
                }}
                role="menuitem"
                aria-current={activeIndex === index ? "page" : undefined}
                aria-haspopup={item.dropdown ? "menu" : undefined}
                aria-expanded={item.dropdown ? dropdownOpen === index : undefined}
                tabIndex={0}
              >
                <span className="outline-none no-underline flex items-center gap-1">
                  {item.label}
                  {item.dropdown && (
                    <svg
                      className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        dropdownOpen === index ? "rotate-180" : "",
                      )}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>

                {/* Dropdown Menu */}
                {item.dropdown && dropdownOpen === index && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 py-2">
                    {item.dropdown.map((dropdownItem, dropdownIndex) => (
                      <div
                        key={dropdownIndex}
                        className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                        onClick={(e) => {
                          e.preventDefault()
                          closeDropdown()
                          handleNavigation(dropdownItem.href)
                        }}
                      >
                        <div className="font-medium">{dropdownItem.label}</div>
                        {dropdownItem.description && (
                          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {dropdownItem.description}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <span className="effect filter" ref={filterRef} />
        <span className="effect text" ref={textRef} />
      </div>

      <style jsx>{`
        .gooey-nav {
          filter: url(#gooey);
        }
        
        .effect {
          position: absolute;
          pointer-events: none;
          border-radius: 9999px;
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .effect.filter {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        .effect.text {
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 500;
          opacity: 0;
          transform: scale(0.8);
        }
        
        .effect.text.active {
          opacity: 1;
          transform: scale(1);
        }
        
        .particle {
          position: absolute;
          background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%);
          border-radius: 50%;
          pointer-events: none;
          animation: float 2s ease-out forwards;
        }
        
        @keyframes float {
          0% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) scale(0);
            opacity: 0;
          }
        }
      `}</style>

      <svg width="0" height="0">
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="gooey" />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop"/>
          </filter>
        </defs>
      </svg>
    </>
  )
}
