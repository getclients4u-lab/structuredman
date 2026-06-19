export default function SchemaOrg() {
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Structured Man',
      url: 'https://structuredman.vercel.app',
      logo: 'https://structuredman.vercel.app/logo.png',
      sameAs: [
        'https://twitter.com/structuredman',
        'https://github.com/myocjade511/structuredman',
      ],
      description: 'Build unbreakable discipline, master your habits, and optimize every area of your life.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is Structured Man, and who is it for?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Structured Man is a digital resource dedicated to helping men build unbreakable discipline, master their habits, and optimize their lives through structure and systems. It is for any man who is tired of drifting, making excuses, and ready to architect his life with intention.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is this different from generic self-improvement content?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We cut the motivational fluff. Every guide is built on behavioral science, real-world protocols used by elite performers, and actionable systems you can implement today. No vague advice. No inspirational quotes without context. Only structure.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need to wake up at 5 AM to follow your system?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The 5 AM Protocol is one option among many. What matters is designing a morning routine that gives you 2-3 hours of uninterrupted, high-leverage activity before the world demands your attention.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I start if I have zero discipline right now?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Start with the Evening Recalibration guide. Most men fail in the morning because they went to bed without a plan. One habit, executed consistently for 30 days, will create more change than ten habits attempted for three days.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://structuredman.vercel.app',
        },
      ],
    },
  ]

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
