import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://manilo.app',
  // 'file' keeps the exact URL scheme of the old hand-written site: /integrations -> integrations.html
  build: { format: 'file' },
  trailingSlash: 'never',
  compressHTML: false,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'fr', 'it', 'pl', 'uk'],
    routing: { prefixDefaultLocale: false },
  },
});
