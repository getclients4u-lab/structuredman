'use client'

import { ArrowDown, Target, Zap, Brain } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-500/10 via-slate-950 to-slate-950" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium mb-8">
          <Zap className="w-4 h-4" />
          The Modern Man's Framework for Discipline
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6">
          Build the <span className="gold-gradient">Unbreakable</span>
          <br />
          Structure You Need
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed">
          Stop drifting. Start architecting your days with military precision. 
          Structured Man is the definitive resource for men who refuse to settle 
          for mediocrity in their habits, mindset, and purpose.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#features"
            className="px-8 py-4 text-base font-bold bg-gold-500 hover:bg-gold-600 text-slate-950 rounded-xl transition-all hover:scale-105 shadow-lg shadow-gold-500/20"
          >
            Explore the Pillars
          </a>
          <a
            href="#articles"
            className="px-8 py-4 text-base font-bold border border-slate-700 hover:border-gold-500/50 text-slate-200 rounded-xl transition-all hover:bg-white/5"
          >
            Read the Guides
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { icon: Target, label: 'Clarity of Purpose', desc: 'Define your mission with precision' },
            { icon: Brain, label: 'Mental Fortitude', desc: 'Train your mind like a weapon' },
            { icon: Zap, label: 'Relentless Action', desc: 'Execute without excuses' },
          ].map((item) => (
            <div key={item.label} className="glass rounded-xl p-5 text-left card-hover">
              <item.icon className="w-6 h-6 text-gold-400 mb-3" />
              <div className="font-semibold text-slate-100">{item.label}</div>
              <div className="text-sm text-slate-400 mt-1">{item.desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 animate-bounce">
          <ArrowDown className="w-6 h-6 mx-auto text-slate-600" />
        </div>
      </div>
    </section>
  )
}
