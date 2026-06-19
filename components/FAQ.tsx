'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What is Structured Man, and who is it for?',
    answer: 'Structured Man is a digital resource dedicated to helping men build unbreakable discipline, master their habits, and optimize their lives through structure and systems. It is for any man who is tired of drifting, making excuses, and ready to architect his life with intention.',
  },
  {
    question: 'How is this different from generic self-improvement content?',
    answer: 'We cut the motivational fluff. Every guide is built on behavioral science, real-world protocols used by elite performers, and actionable systems you can implement today. No vague advice. No inspirational quotes without context. Only structure.',
  },
  {
    question: 'Do I need to wake up at 5 AM to follow your system?',
    answer: 'No. The 5 AM Protocol is one option among many. What matters is designing a morning routine that gives you 2-3 hours of uninterrupted, high-leverage activity before the world demands your attention. Your wake time should match your chronotype and obligations.',
  },
  {
    question: 'Is there a paid community or coaching program?',
    answer: 'Currently, all core content is free. We are building a private community for men who want accountability, direct access to advanced protocols, and a network of similarly driven individuals. Join the waitlist to be notified when it opens.',
  },
  {
    question: 'How do I start if I have zero discipline right now?',
    answer: 'Start with the Evening Recalibration guide. Most men fail in the morning because they went to bed without a plan. One habit, executed consistently for 30 days, will create more change than ten habits attempted for three days.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 bg-slate-900/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Common <span className="gold-gradient">Questions</span>
          </h2>
          <p className="text-lg text-slate-400">
            Direct answers. No evasion. If your question is not here, reach out.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass rounded-xl overflow-hidden"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-slate-100 pr-4" itemProp="name">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gold-400 shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div
                  className="px-5 pb-5 text-slate-400 leading-relaxed"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text">{faq.answer}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
