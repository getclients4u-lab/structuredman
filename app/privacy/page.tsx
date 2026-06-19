import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Structured Man',
  description: 'Privacy policy for Structured Man.',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-100 mb-6">Privacy Policy</h1>
        <div className="prose-custom">
          <p>Structured Man respects your privacy. We collect only the information necessary to deliver our content and services.</p>
          <h2>Information We Collect</h2>
          <p>When you subscribe to our newsletter, we collect your email address. We do not sell, rent, or share your personal information with third parties.</p>
          <h2>Cookies</h2>
          <p>We use minimal cookies to ensure the site functions correctly. We do not use tracking cookies for advertising purposes.</p>
          <h2>Contact</h2>
          <p>For privacy-related questions, contact mystuff7509@gmail.com.</p>
        </div>
      </div>
    </main>
  )
}
