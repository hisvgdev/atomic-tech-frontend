import { MetadataRoute } from 'next'

const buildDate = new Date().toISOString().split('T')[0]
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || ''

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
     return [
          {
               url: baseUrl,
               lastModified: new Date(buildDate),
               changeFrequency: 'monthly',
               priority: 1,
          },
          {
               url: `${baseUrl}/policy`,
               lastModified: new Date(buildDate),
               changeFrequency: 'monthly',
               priority: 1,
          },
          {
               url: `${baseUrl}/cases`,
               lastModified: new Date(buildDate),
               changeFrequency: 'monthly',
               priority: 1,
          },
          {
               url: `${baseUrl}/journal`,
               lastModified: new Date(buildDate),
               changeFrequency: 'monthly',
               priority: 1,
          },
          {
               url: `${baseUrl}/articles`,
               lastModified: new Date(buildDate),
               changeFrequency: 'monthly',
               priority: 1,
          },
          {
               url: `${baseUrl}/articles/`,
               lastModified: new Date(buildDate),
               changeFrequency: 'monthly',
               priority: 0.8,
          },
     ]
}
