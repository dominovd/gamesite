'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Inline nav icons — no extra dependency
function IconGamepad({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <path d="M6 12h4m-2-2v4" />
      <circle cx="16" cy="10" r="1" fill="currentColor" stroke="none" />
      <circle cx="18" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}
function IconMouse({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="2" width="14" height="20" rx="7" />
      <path d="M12 2v6" />
    </svg>
  )
}
function IconMonitor({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  )
}

const NAV_LINKS = [
  { href: '/username-generator', label: 'Username Generator', Icon: IconGamepad },
  { href: '/sensitivity-calculator', label: 'Sens Calculator', Icon: IconMouse },
  { href: '/can-i-run', label: 'Can I Run It', Icon: IconMonitor },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-bg-primary/90 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-purple to-accent-cyan flex items-center justify-center text-white font-bold text-sm">
              H
            </div>
            <span className="font-bold text-slate-100 text-lg tracking-tight">
              hplaptop<span className="text-accent-purple">.co</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-accent-purple/15 text-accent-purple-light'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-bg-tertiary'
                  }`}
                >
                  <link.Icon className={isActive ? 'text-accent-purple-light' : 'text-slate-500'} />
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-bg-tertiary transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border py-3 pb-4 space-y-1 animate-fade-in">
            {NAV_LINKS.map((link) => {
              const isActive = pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-accent-purple/15 text-accent-purple-light'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-bg-tertiary'
                  }`}
                >
                  <link.Icon className={isActive ? 'text-accent-purple-light' : 'text-slate-500'} />
                  {link.label}
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </header>
  )
}
