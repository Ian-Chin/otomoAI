import { getAllSlugs } from '@/data/blog-posts';

export default function sitemap() {
  const blogSlugs = getAllSlugs().map((slug) => ({
    url: `https://otomoai.com/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    {
      url: 'https://otomoai.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://otomoai.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...blogSlugs,
  ];
}
