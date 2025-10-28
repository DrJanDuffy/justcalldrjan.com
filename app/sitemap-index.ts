import { MetadataRoute } from 'next'

export default function sitemapIndex(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.calldrduffy.com/sitemap.xml',
      lastModified: new Date(),
    },
  ]
}

