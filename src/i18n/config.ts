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

// Page path -> the dictionary that carries its content.
export const PAGE_DICTS: Record<string, string> = {
  '/': 'home',
  '/integrations': 'integrations',
  '/chatgpt': 'chatgpt',
  '/support': 'support',
  '/api-v1': 'api',
  '/privacy': 'privacy',
  '/terms': 'terms',
};

// A locale gets a page only once its dictionary exists — otherwise the per-file
// fallback would serve English prose under a localized URL. Derived from the
// files on disk, so routes, hreflang, the sitemap and the switcher all follow
// automatically as translations land.
const available = new Set(
  Object.keys(import.meta.glob('./*/*.json')).map((p) => p.replace('./', '').replace('.json', '')),
);

export const PAGE_LOCALES: Record<string, readonly Locale[]> = Object.fromEntries(
  Object.entries(PAGE_DICTS).map(([path, dict]) => [
    path,
    LOCALES.filter((l) => l === DEFAULT_LOCALE || available.has(`${l}/${dict}`)),
  ]),
);

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
