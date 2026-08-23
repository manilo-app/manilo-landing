import type { APIRoute } from 'astro';
import { SITE } from '../consts';

const EXCLUDED = new Set(['404']);

const pageFiles = import.meta.glob('./*.astro');
const paths = Object.keys(pageFiles)
  .map((file) => file.replace('./', '').replace('.astro', ''))
  .filter((name) => !EXCLUDED.has(name))
  .map((name) => (name === 'index' ? '/' : `/${name}`))
  .sort();

export const GET: APIRoute = () => {
  const urls = paths.map((p) => `  <url><loc>${SITE}${p}</loc></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
