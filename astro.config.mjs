import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://manilo.app',
  // 'file' keeps the exact URL scheme of the old hand-written site: /integrations -> integrations.html
  build: { format: 'file' },
  trailingSlash: 'never',
  compressHTML: false,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'es', 'fr', 'hi', 'it', 'ja', 'ko', 'pl', 'pt', 'ru', 'tr', 'uk', 'zh'],
    routing: { prefixDefaultLocale: false },
  },
});
