import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Structured Man',
  description: 'Terms of service for Structured Man.',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-100 mb-6">Terms of Service</h1>
        <div className="prose-custom">
          <p>By accessing Structured Man, you agree to these terms.</p>
          <h2>Use of Content</h2>
          <p>All content is for informational purposes only. It is not medical, legal, or professional advice. Consult appropriate professionals before making significant life changes.</p>
          <h2>Intellectual Property</h2>
          <p>All content on this site is the property of Structured Man and may not be reproduced without permission.</p>
          <h2>Limitation of Liability</h2>
          <p>Structured Man is not liable for any damages arising from the use of this site or its content.</p>
        </div>
      </div>
    </main>
  )
}
