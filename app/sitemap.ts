import { MetadataRoute } from 'next';
import { routes } from '@/config/routes';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://maddierosecodes.com';

  // Generate sitemap entries from routes
  const routeEntries = routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route.path === '/' ? 1 : 0.8,
  }));

  return routeEntries;
}
