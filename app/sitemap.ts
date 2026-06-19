import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://structuredman.vercel.app'

  const routes = [
    '',
    '/articles/5am-protocol',
    '/articles/discipline-over-motivation',
    '/articles/iron-pyramid',
    '/articles/digital-declutter',
    '/guides/morning-routine',
    '/guides/physical-discipline',
    '/guides/mental-models',
    '/guides/career-weaponization',
    '/guides/social-calibration',
    '/guides/evening-recalibration',
    '/privacy',
    '/terms',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
