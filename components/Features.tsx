'use client'

import { Sun, Dumbbell, BookOpen, Users, Moon, TrendingUp } from 'lucide-react'

const pillars = [
  {
    icon: Sun,
    title: 'Morning Architecture',
    description: 'Design a wake-up protocol that primes your nervous system for dominance. No snooze. No hesitation. Immediate momentum.',
    href: '/guides/morning-routine',
  },
  {
    icon: Dumbbell,
    title: 'Physical Discipline',
    description: 'Your body is the foundation. Learn training systems that build strength, resilience, and an unshakable sense of self.',
    href: '/guides/physical-discipline',
  },
  {
    icon: BookOpen,
    title: 'Mental Models',
    description: 'Adopt the frameworks used by elite performers. Stoicism, second-order thinking, and strategic decision-making.',
    href: '/guides/mental-models',
  },
  {
    icon: TrendingUp,
    title: 'Career Weaponization',
    description: 'Turn your professional life into a force multiplier. Skill acquisition, networking, and wealth architecture.',
    href: '/guides/career-weaponization',
  },
  {
    icon: Users,
    title: 'Social Calibration',
    description: 'Master the dynamics of leadership, relationships, and social influence without losing your core integrity.',
    href: '/guides/social-calibration',
  },
  {
    icon: Moon,
    title: 'Evening Recalibration',
    description: 'Wind down with intention. Recovery protocols that ensure you wake up stronger than the day before.',
    href: '/guides/evening-recalibration',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            The Six <span className="gold-gradient">Pillars</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Every structured life is built on these non-negotiable foundations. 
            Neglect one, and the entire architecture weakens.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <a
              key={pillar.title}
              href={pillar.href}
              className="group glass rounded-2xl p-6 card-hover block"
            >
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mb-4 group-hover:bg-gold-500/20 transition-colors">
                <pillar.icon className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">{pillar.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{pillar.description}</p>
              <div className="mt-4 text-gold-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Read Guide →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
