'use client'

import { useState } from 'react'
import { Menu, X, Shield } from 'lucide-react'

const navLinks = [
  { href: '#features', label: 'Pillars' },
  { href: '#articles', label: 'Guides' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <Shield className="w-6 h-6 text-gold-400" />
            <span className="gold-gradient">STRUCTURED MAN</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-gold-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              className="px-4 py-2 text-sm font-semibold bg-gold-500 hover:bg-gold-600 text-slate-950 rounded-lg transition-colors"
            >
              Start Building
            </a>
          </div>

          <button
            className="md:hidden text-slate-300"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-slate-900/95 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-base font-medium text-slate-300 hover:text-gold-400"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              className="block w-full text-center px-4 py-2 text-sm font-semibold bg-gold-500 text-slate-950 rounded-lg"
              onClick={() => setOpen(false)}
            >
              Start Building
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
