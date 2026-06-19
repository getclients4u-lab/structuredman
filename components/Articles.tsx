'use client'

import { Clock, ArrowRight } from 'lucide-react'

const articles = [
  {
    title: 'The 5AM Protocol: Why Winners Wake Before the World',
    excerpt: 'The first two hours of your day determine the rest. Here is the exact protocol used by Navy SEALs, executives, and elite athletes to dominate their mornings.',
    readTime: '8 min read',
    href: '/articles/5am-protocol',
    category: 'Morning Architecture',
  },
  {
    title: 'Discipline Over Motivation: The Neuroscience of Consistency',
    excerpt: 'Motivation is a feeling. Discipline is a system. Learn how to hack your dopamine circuits to make hard actions automatic, not optional.',
    readTime: '12 min read',
    href: '/articles/discipline-over-motivation',
    category: 'Mental Models',
  },
  {
    title: 'The Iron Pyramid: A Minimalist Approach to Strength',
    excerpt: 'You do not need a gym membership or complex equipment. Three movements. Progressive overload. Unshakeable consistency. That is all.',
    readTime: '6 min read',
    href: '/articles/iron-pyramid',
    category: 'Physical Discipline',
  },
  {
    title: 'Digital Declutter: Reclaiming Your Attention in a Distracted World',
    excerpt: 'Your attention is the most valuable currency you possess. Here is how to protect it with ruthless, systematic boundaries.',
    readTime: '10 min read',
    href: '/articles/digital-declutter',
    category: 'Mental Models',
  },
]

export default function Articles() {
  return (
    <section id="articles" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Latest <span className="gold-gradient">Field Guides</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-xl">
              Tactical, actionable, and free of fluff. Every guide is designed to produce immediate behavioral change.
            </p>
          </div>
          <a href="/articles" className="mt-4 sm:mt-0 text-gold-400 font-medium hover:text-gold-500 transition-colors flex items-center gap-1">
            View All <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <a
              key={article.href}
              href={article.href}
              className="group glass rounded-2xl p-6 card-hover block"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-gold-500/10 text-gold-400 text-xs font-semibold">
                  {article.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-500">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readTime}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-gold-400 transition-colors">
                {article.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {article.excerpt}
              </p>
              <span className="text-sm font-medium text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Read Guide →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
