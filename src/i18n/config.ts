export const LOCALES = ['en', 'de', 'es', 'fr', 'hi', 'it', 'ja', 'ko', 'pl', 'pt', 'ru', 'tr', 'uk', 'zh'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_NAMES: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
  es: 'Español',
  fr: 'Français',
  hi: 'हिन्दी',
  it: 'Italiano',
  ja: '日本語',
  ko: '한국어',
  pl: 'Polski',
  pt: 'Português',
  ru: 'Русский',
  tr: 'Türkçe',
  uk: 'Українська',
  zh: '简体中文',
};

// Which logical pages exist in which locales. Single source of truth for
// getStaticPaths, hreflang alternates, the sitemap, and the language switcher.
export const PAGE_LOCALES: Record<string, readonly Locale[]> = {
  '/': LOCALES,
  '/integrations': ['en'],
  '/chatgpt': ['en'],
  '/support': ['en'],
  '/api-v1': ['en'],
  '/privacy': ['en'],
  '/terms': ['en'],
};

export function localeUrl(locale: string, path: string): string {
  if (locale === DEFAULT_LOCALE) return path;
  return path === '/' ? `/${locale}` : `/${locale}${path}`;
}

// Nav links must always land on a page that exists: fall back to English
// until that page's translation ships.
export function navUrl(locale: string, path: string): string {
  const avail = PAGE_LOCALES[path] ?? [DEFAULT_LOCALE];
  return localeUrl(avail.includes(locale as Locale) ? locale : DEFAULT_LOCALE, path);
}

// Each message written in its own target language — shown to visitors whose
// browser prefers that locale while they are on a different-language page.
export const BANNER_MESSAGES: Record<Locale, string> = {
  en: 'View this page in English',
  de: 'Diese Seite auf Deutsch ansehen',
  es: 'Ver esta página en español',
  fr: 'Voir cette page en français',
  hi: 'यह पेज हिन्दी में देखें',
  it: 'Vedi questa pagina in italiano',
  ja: 'このページを日本語で見る',
  ko: '이 페이지를 한국어로 보기',
  pl: 'Zobacz tę stronę po polsku',
  pt: 'Ver esta página em português',
  ru: 'Смотреть эту страницу на русском',
  tr: 'Bu sayfayı Türkçe görüntüle',
  uk: 'Переглянути цю сторінку українською',
  zh: '查看此页面的简体中文版',
};
