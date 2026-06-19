export default function GuidePage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-bold text-slate-100 mb-4">Mental Models</h1>
        <p className="text-slate-400 mb-6">This guide is being expanded. Read the detailed articles below.</p>
        <div className="space-y-3">
          <a href="/articles/discipline-over-motivation/" className="block text-gold-400 hover:text-gold-500 font-medium">
            Discipline Over Motivation &rarr;
          </a>
          <a href="/articles/digital-declutter/" className="block text-gold-400 hover:text-gold-500 font-medium">
            Digital Declutter &rarr;
          </a>
        </div>
      </div>
    </main>
  )
}
