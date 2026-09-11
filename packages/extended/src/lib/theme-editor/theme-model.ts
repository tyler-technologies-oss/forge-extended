/**
 * The theme model, live-preview CSS generation, and the export/import formats.
 *
 * ## Why the selector list and `!important` matter
 *
 * Forge declares its light tokens with `:root { ... }` (via `forge.css`) but host
 * applications apply the dark set by attaching the `theme-dark.theme-properties`
 * mixin to a *class*, and then putting that class on `<body>`:
 *
 * ```scss
 * .dark-theme { @include theme-dark.theme-properties; }
 * ```
 * ```ts
 * document.body.classList.toggle('dark-theme', isDark);
 * ```
 *
 * A custom property declared on `<body>` wins over one inherited from `:root` for
 * `<body>` and everything beneath it, so declaring the preview at `:root` alone
 * loses on a page that is already in dark mode. The preview therefore declares on
 * the conventional theme carriers too and marks every declaration `!important`,
 * which beats any non-important author rule on the same element regardless of
 * specificity. `forge-theme-toggle`'s `data-forge-theme` attribute is covered the
 * same way.
 *
 * Custom properties inherit through shadow boundaries, so overriding them on
 * `<body>` reaches inside every Forge web component's shadow root as well.
 */

import {
  generateForgeTheme,
  type ForgeThemeSeeds,
  type ThemeGeneratorMode,
  type ThemeGeneratorOptions
} from './theme-generator';
import {
  FORGE_SPACING_TOKENS,
  FORGE_THEME_DARK_TOKENS,
  FORGE_THEME_LIGHT_TOKENS,
  FORGE_THEME_TOKEN_PREFIX,
  type ForgeThemeTokenMap
} from './theme-tokens';

/**
 * How a theme emits its tokens.
 *
 * - `patch` emits only the tokens explicitly set, leaving the page's own
 *   light/dark theme in place and nudging individual tokens.
 * - `light` emits the full Forge light set, then the overrides on top.
 * - `dark` emits the full Forge dark set, then the overrides on top.
 */
export type ForgeThemeMode = 'patch' | ThemeGeneratorMode;

/** Global non-color knobs a theme can set alongside its color tokens. */
export interface ForgeThemeKnobs {
  /**
   * `--forge-shape-factor`. Forge multiplies this into every shape token
   * (`calc(var(--forge-shape-large) * var(--forge-shape-factor, 1))`), so one
   * value rounds every corner in the app.
   */
  shapeFactor: number | null;
  /** A multiplier applied to every `--forge-spacing-*` step. */
  spacingScale: number | null;
  /** `--forge-typography-font-family`. */
  fontFamily: string;
  /** `--forge-typography-font-size`. */
  fontSize: string;
}

/** A complete, editable Forge theme. */
export interface ForgeTheme {
  /** A human readable name, carried through export and import. */
  name: string;
  /** How the theme emits its tokens. */
  mode: ForgeThemeMode;
  /** Token overrides, keyed by bare token name (no `--forge-theme-` prefix). */
  tokens: ForgeThemeTokenMap;
  /** Global non-color knobs. */
  knobs: ForgeThemeKnobs;
  /** The seed colors the palette was last generated from, when applicable. */
  seeds: ForgeThemeSeeds | null;
  /** The options the palette was last generated with. */
  generator: Required<Pick<ThemeGeneratorOptions, 'targetContrast' | 'pureOnColors'>>;
}

/** The outcome of importing theme JSON. */
export interface ForgeThemeImportResult {
  /** The imported theme, or `null` when the payload was unusable. */
  theme: ForgeTheme | null;
  /** Non-fatal problems, such as unknown token names that were dropped. */
  warnings: string[];
  /** A fatal problem, or `null` when the import succeeded. */
  error: string | null;
}

/** The export formats the editor produces. */
export type ForgeThemeExportFormat = 'json' | 'scss' | 'css';

/** The `id` given to the `<style>` element the live preview injects. */
export const FORGE_THEME_PREVIEW_STYLE_ID = 'forge-theme-editor-preview';

/** The version marker written into exported JSON. */
export const FORGE_THEME_EXPORT_VERSION = 1;

/**
 * The selectors the live preview declares its tokens on.
 *
 * `:root` alone is not enough — see the note at the top of this file.
 */
export const FORGE_THEME_PREVIEW_SELECTORS: readonly string[] = [
  ':root',
  'body',
  '.dark-theme',
  '.light-theme',
  '.app-theme-dark',
  '.app-theme-light',
  '[data-forge-theme="dark"]',
  '[data-forge-theme="light"]'
];

const SHAPE_FACTOR_PROPERTY = '--forge-shape-factor';
const SPACING_PROPERTY_PREFIX = '--forge-spacing-';
const FONT_FAMILY_PROPERTY = '--forge-typography-font-family';
const FONT_SIZE_PROPERTY = '--forge-typography-font-size';
const MODES: readonly ForgeThemeMode[] = ['patch', 'light', 'dark'];

/** Knobs with nothing set. */
export function emptyForgeThemeKnobs(): ForgeThemeKnobs {
  return { shapeFactor: null, spacingScale: null, fontFamily: '', fontSize: '' };
}

/** A theme with nothing set: the Forge defaults, untouched. */
export function emptyForgeTheme(): ForgeTheme {
  return {
    name: 'Untitled theme',
    mode: 'patch',
    tokens: {},
    knobs: emptyForgeThemeKnobs(),
    seeds: null,
    generator: { targetContrast: 7, pureOnColors: true }
  };
}

/**
 * Creates a theme, filling in every field that was not supplied.
 * @param overrides Partial theme values to start from.
 */
export function createForgeTheme(overrides?: Partial<ForgeTheme> | null): ForgeTheme {
  return normalizeForgeTheme({ ...emptyForgeTheme(), ...(overrides ?? {}) }) ?? emptyForgeTheme();
}

/**
 * Fills in anything a theme is missing and coerces the shapes the editor relies
 * on. Unknown token names are kept here and dropped by {@link parseForgeThemeJson},
 * which reports them.
 *
 * @param theme The value to normalize.
 * @returns The normalized theme, or `null` when the value is not an object.
 */
export function normalizeForgeTheme(theme: unknown): ForgeTheme | null {
  if (!theme || typeof theme !== 'object' || Array.isArray(theme)) {
    return null;
  }
  const source = theme as Partial<ForgeTheme> & Record<string, unknown>;
  const knobs = (source.knobs ?? {}) as Partial<ForgeThemeKnobs>;
  const generator = (source.generator ?? {}) as Partial<ThemeGeneratorOptions>;
  const name = typeof source.name === 'string' && source.name.trim() ? source.name.trim() : 'Untitled theme';

  return {
    name,
    mode: MODES.includes(source.mode as ForgeThemeMode) ? (source.mode as ForgeThemeMode) : 'patch',
    tokens: normalizeTokenMap(source.tokens),
    knobs: {
      shapeFactor: toFiniteNumber(knobs.shapeFactor),
      spacingScale: toFiniteNumber(knobs.spacingScale),
      fontFamily: typeof knobs.fontFamily === 'string' ? knobs.fontFamily : '',
      fontSize: typeof knobs.fontSize === 'string' ? knobs.fontSize : ''
    },
    seeds: normalizeSeeds(source.seeds),
    generator: {
      targetContrast: Number(generator.targetContrast) || 7,
      pureOnColors: generator.pureOnColors !== false
    }
  };
}

function toFiniteNumber(value: unknown): number | null {
  if (value === null || value === undefined || value === '') {
    return null;
  }
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function normalizeTokenMap(tokens: unknown): ForgeThemeTokenMap {
  const out: ForgeThemeTokenMap = {};
  if (!tokens || typeof tokens !== 'object') {
    return out;
  }
  for (const [token, value] of Object.entries(tokens as Record<string, unknown>)) {
    if (typeof value === 'string' && value.trim()) {
      out[token] = value.trim();
    }
  }
  return out;
}

function normalizeSeeds(seeds: unknown): ForgeThemeSeeds | null {
  if (!seeds || typeof seeds !== 'object' || Array.isArray(seeds)) {
    return null;
  }
  const out: ForgeThemeSeeds = {};
  for (const [key, value] of Object.entries(seeds as Record<string, unknown>)) {
    if (typeof value === 'string' && value.trim()) {
      out[key as keyof ForgeThemeSeeds] = value.trim();
    }
  }
  return Object.keys(out).length ? out : null;
}

/**
 * Resolves a theme to the final token map that will be emitted: the mode's base
 * set (for `light`/`dark`) with the theme's own overrides on top.
 * @param theme The theme to resolve.
 */
export function resolveForgeThemeTokens(theme: ForgeTheme): ForgeThemeTokenMap {
  const base =
    theme.mode === 'light' ? FORGE_THEME_LIGHT_TOKENS : theme.mode === 'dark' ? FORGE_THEME_DARK_TOKENS : null;
  const resolved: ForgeThemeTokenMap = base ? { ...base } : {};
  for (const [token, value] of Object.entries(theme.tokens)) {
    if (value) {
      resolved[token] = value;
    }
  }
  return resolved;
}

/**
 * Resolves a theme's non-color knobs to `custom property -> value` pairs.
 * @param theme The theme to resolve.
 */
export function resolveForgeThemeKnobs(theme: ForgeTheme): Record<string, string> {
  const out: Record<string, string> = {};
  const { shapeFactor, spacingScale, fontFamily, fontSize } = theme.knobs;

  if (shapeFactor !== null) {
    out[SHAPE_FACTOR_PROPERTY] = String(shapeFactor);
  }
  if (spacingScale !== null) {
    for (const [name, value] of Object.entries(FORGE_SPACING_TOKENS)) {
      const pixels = parseFloat(value);
      if (Number.isFinite(pixels)) {
        out[`${SPACING_PROPERTY_PREFIX}${name}`] = `${Math.round(pixels * spacingScale * 100) / 100}px`;
      }
    }
  }
  if (fontFamily) {
    out[FONT_FAMILY_PROPERTY] = fontFamily;
  }
  if (fontSize) {
    out[FONT_SIZE_PROPERTY] = fontSize;
  }
  return out;
}

function declarations(theme: ForgeTheme, important: boolean): string[] {
  const bang = important ? ' !important' : '';
  const lines: string[] = [];
  for (const [token, value] of Object.entries(resolveForgeThemeTokens(theme))) {
    lines.push(`  ${FORGE_THEME_TOKEN_PREFIX}${token}: ${value}${bang};`);
  }
  for (const [name, value] of Object.entries(resolveForgeThemeKnobs(theme))) {
    lines.push(`  ${name}: ${value}${bang};`);
  }
  return lines;
}

/**
 * Builds the stylesheet the live preview injects into the document.
 *
 * @param theme The theme to emit.
 * @param selectors The selectors to declare on. Defaults to
 * {@link FORGE_THEME_PREVIEW_SELECTORS}.
 */
export function buildForgeThemePreviewCss(theme: ForgeTheme, selectors?: readonly string[]): string {
  const list = (selectors?.length ? selectors : FORGE_THEME_PREVIEW_SELECTORS).join(',\n');
  const lines = declarations(theme, true);
  let css = '/* forge-theme-editor preview */\n';
  if (lines.length) {
    css += `${list} {\n${lines.join('\n')}\n}\n`;
  }
  return css;
}

/**
 * Emits a plain `:root` block, for pasting into an application's global stylesheet.
 * @param theme The theme to emit.
 */
export function exportForgeThemeCss(theme: ForgeTheme): string {
  return `:root {\n${declarations(theme, false).join('\n')}\n}\n`;
}

/**
 * Emits Sass using Forge's own `theme.provide()` mixin, which validates every
 * token name at compile time and emits the `--forge-theme-*` declarations.
 * @param theme The theme to emit.
 */
export function exportForgeThemeScss(theme: ForgeTheme): string {
  // `provide()` takes bare token names and interpolates the value verbatim.
  const entries = Object.entries(resolveForgeThemeTokens(theme)).map(([token, value]) => `    ${token}: ${value}`);
  const knobs = Object.entries(resolveForgeThemeKnobs(theme)).map(([name, value]) => `  ${name}: ${value};`);

  let out = "@use '@tylertech/forge/sass/theme';\n\n:root {\n";
  if (entries.length) {
    out += `  @include theme.provide(\n    (\n${entries.join(',\n')}\n    )\n  );\n`;
  }
  if (knobs.length) {
    out += (entries.length ? '\n' : '') + knobs.join('\n') + '\n';
  }
  out += '}\n';
  return out;
}

/**
 * Emits the whole theme as JSON, for sharing or checking into a repository.
 * @param theme The theme to emit.
 */
export function exportForgeThemeJson(theme: ForgeTheme): string {
  return JSON.stringify({ forgeThemeEditor: FORGE_THEME_EXPORT_VERSION, ...theme }, null, 2);
}

/**
 * Emits a theme in the requested format.
 * @param theme The theme to emit.
 * @param format The format to emit.
 */
export function exportForgeTheme(theme: ForgeTheme, format: ForgeThemeExportFormat): string {
  switch (format) {
    case 'scss':
      return exportForgeThemeScss(theme);
    case 'css':
      return exportForgeThemeCss(theme);
    default:
      return exportForgeThemeJson(theme);
  }
}

function candidateFrom(raw: unknown): unknown {
  if (Array.isArray(raw)) {
    return raw[0];
  }
  if (raw && typeof raw === 'object') {
    const record = raw as Record<string, unknown>;
    if (record.theme && typeof record.theme === 'object') {
      return record.theme;
    }
    if (Array.isArray(record.themes)) {
      return record.themes[0];
    }
    // A bare token map, which is what a hand-written theme snippet usually is.
    if (!('tokens' in record) && Object.keys(record).some(key => key in FORGE_THEME_LIGHT_TOKENS)) {
      return { tokens: record };
    }
  }
  return raw;
}

/**
 * Parses theme JSON, accepting anything the editor might plausibly be handed: a
 * theme object, a `{ theme }` or `{ themes: [] }` wrapper, an array of themes, or
 * a bare token map.
 *
 * Unknown token names are dropped rather than imported, because an invalid name
 * would emit a `--forge-theme-*` property that nothing reads — a silent no-op that
 * looks like a bug in the component.
 *
 * @param text The JSON text to parse.
 */
export function parseForgeThemeJson(text: string): ForgeThemeImportResult {
  let raw: unknown;
  try {
    raw = JSON.parse(text);
  } catch (error) {
    return { theme: null, warnings: [], error: `Not valid JSON: ${(error as Error).message}` };
  }

  const warnings: string[] = [];
  if (Array.isArray(raw) && raw.length > 1) {
    warnings.push(`Imported the first of ${raw.length} themes.`);
  }

  const theme = normalizeForgeTheme(candidateFrom(raw));
  if (!theme) {
    return { theme: null, warnings, error: 'No theme found in that JSON.' };
  }

  const unknown = Object.keys(theme.tokens).filter(token => !(token in FORGE_THEME_LIGHT_TOKENS));
  for (const token of unknown) {
    delete theme.tokens[token];
  }
  if (unknown.length) {
    const shown = unknown.slice(0, 3).join(', ');
    warnings.push(
      `Dropped ${unknown.length} unknown token name${unknown.length > 1 ? 's' : ''} (${shown}${unknown.length > 3 ? ', …' : ''}).`
    );
  }
  if (!Object.keys(theme.tokens).length && theme.mode === 'patch') {
    warnings.push('That theme set no tokens.');
  }
  return { theme, warnings, error: null };
}

/**
 * Replaces a theme's tokens with a palette derived from its seeds.
 * @param theme The theme to regenerate.
 * @param seeds The seed colors to derive from. Defaults to the theme's own seeds.
 */
export function regenerateForgeTheme(theme: ForgeTheme, seeds?: ForgeThemeSeeds | null): ForgeTheme {
  const resolvedSeeds = seeds ?? theme.seeds;
  const mode = theme.mode === 'dark' ? 'dark' : 'light';
  return {
    ...theme,
    mode,
    seeds: resolvedSeeds ? { ...resolvedSeeds } : null,
    tokens: generateForgeTheme(resolvedSeeds, { ...theme.generator, mode })
  };
}
