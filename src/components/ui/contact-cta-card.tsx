"use client";

import Link from "next/link";

export function ContactCtaCard() {
  return (
    <div className="w-full bg-neutral-950 py-16">
      <div className="mx-auto max-w-5xl px-4">
        <div className="relative overflow-hidden rounded-3xl p-[2px] bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500 shadow-2xl">
          <div className="relative rounded-[calc(1.5rem-2px)] bg-neutral-900 px-8 py-12 md:px-12 md:py-16">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br from-orange-500/20 to-amber-400/10 blur-3xl" />

            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
                  Ready to create something bold?
                </h3>
                <p className="mt-2 text-neutral-300 max-w-2xl">
                  Tell us about your goals—we’ll craft the strategy, content, and execution to make it real.
                </p>
              </div>

              <div className="flex-shrink-0">
                <Link
                  href="/ContactUs"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white bg-orange-500 hover:bg-orange-400 active:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
                >
                  Contact Us
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-4 w-4"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



