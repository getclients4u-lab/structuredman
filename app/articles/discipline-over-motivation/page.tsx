import type { Metadata } from 'next'
import { Clock, Calendar, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Discipline Over Motivation: The Neuroscience of Consistency | Structured Man',
  description: 'Learn how to hack your dopamine circuits to make hard actions automatic, not optional.',
  openGraph: {
    title: 'Discipline Over Motivation: The Neuroscience of Consistency',
    description: 'Learn how to hack your dopamine circuits to make hard actions automatic, not optional.',
    type: 'article',
    authors: ['Structured Man'],
    tags: ['discipline', 'neuroscience', 'habits', 'dopamine'],
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
            Discipline Over Motivation: The Neuroscience of Consistency
          </h1>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> June 19, 2026</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 12 min read</span>
          </div>
        </header>

        <div className="prose-custom">
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            Motivation is a liar. It arrives unannounced, whispers promises of transformation, 
            and vanishes the moment the task becomes difficult. Discipline, by contrast, is a system. 
            It does not require feeling. It requires architecture.
          </p>

          <h2>The Dopamine Trap</h2>
          <p>
            Modern life has hijacked your dopamine system. Social media, junk food, pornography, 
            and instant entertainment provide unnaturally high dopamine spikes with zero effort. 
            The result is a desensitized reward circuit. Ordinary tasks — reading, exercising, 
            deep work — feel impossibly boring by comparison.
          </p>
          <p>
            The solution is not to try harder. The solution is to restructure your environment 
            so that high-dopamine distractions are inaccessible, and productive behaviors are frictionless.
          </p>

          <h2>The Habit Stack</h2>
          <p>
            Every behavior is cued by a preceding behavior. When you finish your morning coffee, 
            you automatically check your phone. This is not a choice. It is a conditioned response. 
            The habit stack exploits this mechanism by intentionally sequencing productive behaviors 
            onto existing anchors.
          </p>
          <blockquote>
            "After I pour my coffee, I will write for 25 minutes before touching any device."
          </blockquote>

          <h2>Identity-Based Habits</h2>
          <p>
            The most sustainable form of discipline is identity-based. You do not say "I am trying to run." 
            You say "I am a runner." Every action that aligns with that identity reinforces it. 
            Every action that contradicts it creates cognitive dissonance. Over time, the identity 
            becomes self-fulfilling.
          </p>

          <h2>The Two-Minute Rule</h2>
          <p>
            When resistance is overwhelming, reduce the behavior to its two-minute version. 
            "Run five miles" becomes "Put on my shoes and step outside." "Write a chapter" becomes 
            "Open the document and write one sentence." Momentum is more important than magnitude 
            at the start.
          </p>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Discipline Over Motivation: The Neuroscience of Consistency',
        author: { '@type': 'Organization', name: 'Structured Man' },
        publisher: { '@type': 'Organization', name: 'Structured Man' },
        datePublished: '2026-06-19',
        description: 'Learn how to hack your dopamine circuits to make hard actions automatic, not optional.',
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://structuredman.vercel.app/articles/discipline-over-motivation' },
      })}} />
    </article>
  )
}
