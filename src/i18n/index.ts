const modules = import.meta.glob('./*/*.json', { eager: true }) as Record<string, { default: unknown }>;

// Missing translation falls back to English so a partially translated
// locale renders instead of crashing the build.
export function getDict<T = Record<string, unknown>>(locale: string, name: string): T {
  const m = modules[`./${locale}/${name}.json`] ?? modules[`./en/${name}.json`];
  if (!m) throw new Error(`i18n: no dictionary "${name}" (locale ${locale}, no en fallback)`);
  return m.default as T;
}
