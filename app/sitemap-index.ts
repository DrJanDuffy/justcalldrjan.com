import { MetadataRoute } from 'next'

export default function sitemapIndex(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.justcalldrjan.com/sitemap.xml',
      lastModified: new Date(),
    },
  ]
}

