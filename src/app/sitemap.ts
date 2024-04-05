import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: process.env.NEXT_PUBLIC_APP_BASE_URL as string,
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 1,
    },
  ]
}