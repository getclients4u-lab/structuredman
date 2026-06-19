import type { Metadata } from 'next'
import { Clock, Calendar, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Digital Declutter: Reclaiming Your Attention | Structured Man',
  description: 'Your attention is the most valuable currency you possess. Protect it with ruthless, systematic boundaries.',
  openGraph: {
    title: 'Digital Declutter: Reclaiming Your Attention in a Distracted World',
    description: 'Your attention is the most valuable currency you possess. Protect it with ruthless, systematic boundaries.',
    type: 'article',
    authors: ['Structured Man'],
    tags: ['digital minimalism', 'attention', 'focus', 'productivity'],
  },
}

export default function ArticlePage() {
  return (
    <article className="min-h-screen bg-slate-950 pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <a href="/" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-gold-400 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </a>

        <header className="mb-10">
          <span className="inline-block px-3 py-1 rounded-full bg-gold-500/10 text-gold-400 text-xs font-semibold mb-4">
            Mental Models
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 mb-4 leading-tight">
            Digital Declutter: Reclaiming Your Attention in a Distracted World
          </h1>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> June 19, 2026</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 10 min read</span>
          </div>
        </header>

        <div className="prose-custom">
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            The average man checks his phone 96 times per day. That is once every ten minutes. 
            Each interruption costs an average of 23 minutes of refocus time. The math is devastating. 
            You are not living your life. You are reacting to notifications.
          </p>

          <h2>The Attention Economy</h2>
          <p>
            Your attention is the product. Social media platforms, news aggregators, and streaming 
            services are not designed to serve you. They are designed to harvest your cognitive resources 
            and sell them to advertisers. The longer you stare, the more money they make.
          </p>

          <h2>The 30-Day Declutter</h2>
          <p>
            Step one: Delete every social media app from your phone. Not the accounts. The apps. 
            Step two: Remove all non-essential notifications. Your phone should never buzz, ding, or light up 
            without your explicit permission. Step three: Establish phone-free zones. The bedroom. 
            The dinner table. The first hour after waking.
          </p>

          <h2>Replacement Behaviors</h2>
          <p>
            Nature abhors a vacuum. If you remove distraction without replacement, you will relapse. 
            Fill the void with high-quality alternatives: physical books, long-form writing, 
            face-to-face conversation, walking without a destination.
          </p>

          <blockquote>
            "Boredom is not a problem to be solved. It is the gateway to creativity."
          </blockquote>

          <h2>The Maintenance Protocol</h2>
          <p>
            After 30 days, reintroduce technology with intention. Ask: does this tool serve my mission, 
            or does it serve itself? If the answer is unclear, the answer is no.
          </p>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Digital Declutter: Reclaiming Your Attention in a Distracted World',
        author: { '@type': 'Organization', name: 'Structured Man' },
        publisher: { '@type': 'Organization', name: 'Structured Man' },
        datePublished: '2026-06-19',
        description: 'Your attention is the most valuable currency you possess. Protect it with ruthless, systematic boundaries.',
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://structuredman.vercel.app/articles/digital-declutter' },
      })}} />
    </article>
  )
}
