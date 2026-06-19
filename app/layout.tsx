import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Structured Man | Discipline, Habits & Masculine Optimization',
  description: 'Build unbreakable discipline, master your habits, and optimize every area of your life. The modern man\'s guide to structure, productivity, and purpose.',
  keywords: ['discipline', 'habits', 'masculine development', 'productivity', 'self improvement', 'routine', 'mindset', 'structured life'],
  authors: [{ name: 'Structured Man' }],
  creator: 'Structured Man',
  publisher: 'Structured Man',
  robots: 'index, follow',
  openGraph: {
    title: 'Structured Man | Discipline, Habits & Masculine Optimization',
    description: 'Build unbreakable discipline, master your habits, and optimize every area of your life.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Structured Man',
    url: 'https://structuredman.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Structured Man | Discipline, Habits & Masculine Optimization',
    description: 'Build unbreakable discipline, master your habits, and optimize every area of your life.',
  },
  alternates: {
    canonical: 'https://structuredman.vercel.app',
  },
  verification: {
    google: 'structuredman-verification',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Merriweather:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Structured Man',
              url: 'https://structuredman.vercel.app',
              description: 'Build unbreakable discipline, master your habits, and optimize every area of your life.',
              publisher: {
                '@type': 'Organization',
                name: 'Structured Man',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://structuredman.vercel.app/logo.png',
                },
              },
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://structuredman.vercel.app/search?q={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body className="antialiased bg-slate-950 text-slate-50">
        {children}
      </body>
    </html>
  )
}
