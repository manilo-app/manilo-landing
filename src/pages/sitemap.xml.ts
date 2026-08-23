import type { APIRoute } from 'astro';
import { SITE } from '../consts';
import { PAGE_LOCALES, DEFAULT_LOCALE, localeUrl } from '../i18n/config';

export const GET: APIRoute = () => {
  const blocks: string[] = [];
  for (const [path, locales] of Object.entries(PAGE_LOCALES)) {
    const alts =
      locales.length > 1
        ? [
            ...locales.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE}${localeUrl(l, path)}"/>`),
            `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${localeUrl(DEFAULT_LOCALE, path)}"/>`,
          ].join('\n') + '\n'
        : '';
    for (const l of locales) {
      blocks.push(`  <url>\n    <loc>${SITE}${localeUrl(l, path)}</loc>\n${alts}  </url>`);
    }
  }
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${blocks.join('\n')}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
