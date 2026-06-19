import type { Metadata } from 'next'
import { Clock, Calendar, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'The Iron Pyramid: A Minimalist Approach to Strength | Structured Man',
  description: 'Three movements. Progressive overload. Unshakeable consistency. Build strength without complexity.',
  openGraph: {
    title: 'The Iron Pyramid: A Minimalist Approach to Strength',
    description: 'Three movements. Progressive overload. Unshakeable consistency. Build strength without complexity.',
    type: 'article',
    authors: ['Structured Man'],
    tags: ['fitness', 'strength training', 'minimalist workout', 'discipline'],
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
            Physical Discipline
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 mb-4 leading-tight">
            The Iron Pyramid: A Minimalist Approach to Strength
          </h1>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> June 19, 2026</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6 min read</span>
          </div>
        </header>

        <div className="prose-custom">
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            The fitness industry profits from complexity. New programs, new equipment, new supplements. 
            The truth is simpler than they want you to believe. Three movements, performed with perfect 
            form and progressive overload, will build more strength than 90% of gym routines.
          </p>

          <h2>The Three Movements</h2>
          <h3>1. The Squat</h3>
          <p>
            The king of all exercises. Squats develop total lower-body strength, core stability, 
            and hormonal response. Bodyweight squats to start. Goblet squats when ready. 
            Barbell back squats when you have mastered the pattern.
          </p>

          <h3>2. The Pushup</h3>
          <p>
            The pushup is the squat of the upper body. It trains the chest, shoulders, triceps, 
            and core simultaneously. Begin on your knees if necessary. Progress to diamond pushups, 
            archer pushups, and eventually one-arm variations.
          </p>

          <h3>3. The Row</h3>
          <p>
            Every push needs a pull. Rows correct posture, prevent injury, and build a strong back. 
            Inverted rows under a table. Resistance band rows. Dumbbell rows. The progression is infinite.
          </p>

          <h2>The Protocol</h2>
          <p>
            Three sessions per week. Alternate between strength days and skill days. 
            On strength days, perform 5 sets of 5 reps with maximum effort. 
            On skill days, perform 3 sets of 10 reps with perfect form and controlled tempo.
          </p>

          <blockquote>
            "The goal is not to be sore. The goal is to be stronger."
          </blockquote>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'The Iron Pyramid: A Minimalist Approach to Strength',
        author: { '@type': 'Organization', name: 'Structured Man' },
        publisher: { '@type': 'Organization', name: 'Structured Man' },
        datePublished: '2026-06-19',
        description: 'Three movements. Progressive overload. Unshakeable consistency. Build strength without complexity.',
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://structuredman.vercel.app/articles/iron-pyramid' },
      })}} />
    </article>
  )
}
