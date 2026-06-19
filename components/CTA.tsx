'use client'

import { Mail, CheckCircle } from 'lucide-react'
import { useState } from 'react'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-gold-500/5 to-slate-950" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold mb-6">
          Stop Drifting. <span className="gold-gradient">Start Building.</span>
        </h2>
        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
          Join thousands of men who receive our weekly Field Report. 
          One high-leverage tactic, one mental model, one challenge — delivered every Sunday.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-gold-500 hover:bg-gold-600 text-slate-950 font-bold rounded-xl transition-colors"
            >
              Join the List
            </button>
          </form>
        ) : (
          <div className="flex items-center justify-center gap-2 text-gold-400 font-medium">
            <CheckCircle className="w-5 h-5" />
            You are on the list. Check your inbox.
          </div>
        )}

        <p className="text-xs text-slate-600 mt-4">
          No spam. No fluff. Unsubscribe anytime with one click.
        </p>
      </div>
    </section>
  )
}
