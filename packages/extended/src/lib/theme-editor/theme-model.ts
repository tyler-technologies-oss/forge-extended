/**
 * The theme model and the export/import formats.
 *
 * A theme is two independent variants, light and dark, because they are two
 * designs rather than one design with a switch: an accent that reads on white is
 * usually wrong on near-black. `polarity` says which one is being authored;
 * `mode` says whether to emit only the authored overrides or a complete set.
 *
 * The editor does not apply themes. It produces one, and the host application
 * persists and applies it — in the intended flow the branding API does. Two
 * things are worth knowing for whoever writes that applier:
 *
 * - Forge has no machinery that turns a theme object into custom properties.
 *   `forge-theme-toggle` only sets `data-forge-theme` on `<html>` and relies on
 *   the host having authored a rule for it; that attribute appears nowhere in
 *   Forge core. Applying a theme means emitting real CSS.
 * - Forge ships its light set as `:root { ... }` (via `forge.css`) but its dark
 *   set only as a Sass mixin that applications attach to a class on `<body>`.
 *   A custom property declared on `<body>` beats one inherited from `:root`, so
 *   an override that targets only `:root` loses on a page already in dark mode.
 */

import { oklchToRgb, parseColor, rgbToOklch } from './theme-color';
import {
  forgeDarkSeeds,
  forgeLightSeeds,
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
 * - `patch` emits only the tokens explicitly set, leaving the host application's
 *   own light/dark theme in place and nudging individual tokens.
 * - `replace` emits the stock set for the active polarity, then the overrides on
 *   top, so the page is forced onto this theme entirely.
 *
 * Which stock set `replace` starts from is decided by the theme's `polarity`,
 * not by this. The two were conflated before, which meant the emit mode silently
 * decided whether a generated palette came out light or dark.
 */
export type ForgeThemeMode = 'patch' | 'replace';

/** Which surface a variant is authored against. */
export type ForgeThemePolarity = ThemeGeneratorMode;

/**
 * One polarity's independently authored state.
 *
 * Light and dark are separate variants because they are separate designs: an
 * accent that reads well on white is usually wrong on near-black. Editing
 * `primary` in light must not touch dark, so each keeps its own overrides and
 * its own seeds.
 */
export interface ForgeThemeVariant {
  /** Token overrides, keyed by bare token name (no `--forge-theme-` prefix). */
  tokens: ForgeThemeTokenMap;
  /** The seed colors this variant's palette was last generated from. */
  seeds: ForgeThemeSeeds | null;
}

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

/** A complete, editable Forge theme: a light variant and a dark one. */
export interface ForgeTheme {
  /** A human readable name, carried through export and import. */
  name: string;
  /** How the theme emits its tokens. */
  mode: ForgeThemeMode;
  /** Which variant is currently being authored and previewed. */
  polarity: ForgeThemePolarity;
  /** The two independently authored variants. */
  variants: Record<ForgeThemePolarity, ForgeThemeVariant>;
  /**
   * Global non-color knobs. Shared across polarities: corner roundness, density
   * and type are properties of the design, not of the surface.
   */
  knobs: ForgeThemeKnobs;
  /** The derivation options, shared across polarities. */
  generator: Required<Pick<ThemeGeneratorOptions, 'targetContrast' | 'pureOnColors'>>;
}

/**
 * What `createForgeTheme` and `loadTheme` accept.
 *
 * Deliberately more tolerant than `ForgeTheme`: partial, and it still takes the
 * flat pre-variant shape (`tokens`/`seeds` at the top level, `mode: 'light'`),
 * which is both the import-migration path and a convenient shorthand for
 * "a theme with these tokens". Output is always a strict `ForgeTheme`.
 */
export interface ForgeThemeInput {
  name?: string;
  /** `'light'`/`'dark'` are accepted for the pre-variant shape and mean `replace`. */
  mode?: ForgeThemeMode | ForgeThemePolarity;
  polarity?: ForgeThemePolarity;
  variants?: Partial<Record<ForgeThemePolarity, Partial<ForgeThemeVariant>>>;
  knobs?: Partial<ForgeThemeKnobs>;
  generator?: Partial<ThemeGeneratorOptions>;
  /** Pre-variant shape, or shorthand for the active polarity's overrides. */
  tokens?: ForgeThemeTokenMap;
  /** Pre-variant shape, or shorthand for the active polarity's seeds. */
  seeds?: ForgeThemeSeeds | null;
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

/** Options shared by the CSS and Sass exports. */
export interface ForgeThemeExportOptions {
  /**
   * Express each derived ramp as a CSS relative color of the token it came from,
   * so changing a base updates its ramp instead of leaving it frozen at export
   * time. Off by default: a literal value works in every engine and every tool.
   */
  relativeColors?: boolean;
}

/** The version marker written into exported JSON. */
export const FORGE_THEME_EXPORT_VERSION = 1;

// Forge multiplies the shape factor into every shape token, so one value rounds
// every corner in the app.
const SHAPE_FACTOR_PROPERTY = '--forge-shape-factor';
const SPACING_PROPERTY_PREFIX = '--forge-spacing-';
const FONT_FAMILY_PROPERTY = '--forge-typography-font-family';
const FONT_SIZE_PROPERTY = '--forge-typography-font-size';

/** Knobs with nothing set. */
export function emptyForgeThemeKnobs(): ForgeThemeKnobs {
  return { shapeFactor: null, spacingScale: null, fontFamily: '', fontSize: '' };
}

/** A theme with nothing set: the Forge defaults, untouched. */
/** An untouched variant: no overrides, no seeds chosen yet. */
export function emptyForgeThemeVariant(): ForgeThemeVariant {
  return { tokens: {}, seeds: null };
}

export function emptyForgeTheme(): ForgeTheme {
  return {
    name: 'Untitled theme',
    mode: 'patch',
    polarity: 'light',
    variants: { light: emptyForgeThemeVariant(), dark: emptyForgeThemeVariant() },
    knobs: emptyForgeThemeKnobs(),
    generator: { targetContrast: 7, pureOnColors: true }
  };
}

/** The variant currently being authored. */
export function activeForgeThemeVariant(theme: ForgeTheme): ForgeThemeVariant {
  return theme.variants[theme.polarity];
}

/**
 * Returns a copy of the theme with the *active* variant patched. Every edit goes
 * through here, which is what keeps light and dark from leaking into each other.
 */
export function withForgeThemeVariant(theme: ForgeTheme, patch: Partial<ForgeThemeVariant>): ForgeTheme {
  return {
    ...theme,
    variants: {
      ...theme.variants,
      [theme.polarity]: { ...activeForgeThemeVariant(theme), ...patch }
    }
  };
}

/**
 * Creates a theme, filling in every field that was not supplied.
 * @param overrides Partial theme values to start from.
 */
export function createForgeTheme(overrides?: ForgeThemeInput | null): ForgeTheme {
  // Normalizing does all the defaulting, so there is no need to spread an empty
  // theme in first — and doing so would hand `normalizeVariants` a populated
  // `variants`, defeating the flat-shape fallback.
  return normalizeForgeTheme(overrides ?? {}) ?? emptyForgeTheme();
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

  // `mode` used to be 'patch' | 'light' | 'dark', conflating what to emit with
  // which surface to derive for. Split them: a legacy 'light'/'dark' meant
  // "replace, with that polarity".
  const legacyMode = source.mode as unknown;
  const legacyPolarity = legacyMode === 'dark' ? 'dark' : legacyMode === 'light' ? 'light' : null;
  const mode: ForgeThemeMode = legacyMode === 'replace' || legacyPolarity ? 'replace' : 'patch';
  // Most explicit wins: an actual `polarity`, then the generator mode it briefly
  // lived on, then the legacy emit mode it lived on before that.
  const generatorMode = (generator as { mode?: unknown }).mode;
  const generatorPolarity: ForgeThemePolarity | null =
    generatorMode === 'dark' || generatorMode === 'light' ? generatorMode : null;
  const declaredPolarity: ForgeThemePolarity | null =
    source.polarity === 'dark' || source.polarity === 'light' ? source.polarity : null;
  const polarity: ForgeThemePolarity = declaredPolarity ?? generatorPolarity ?? legacyPolarity ?? 'light';

  return {
    name,
    mode,
    polarity,
    variants: normalizeVariants(source, polarity),
    knobs: {
      shapeFactor: toFiniteNumber(knobs.shapeFactor),
      spacingScale: toFiniteNumber(knobs.spacingScale),
      fontFamily: typeof knobs.fontFamily === 'string' ? knobs.fontFamily : '',
      fontSize: typeof knobs.fontSize === 'string' ? knobs.fontSize : ''
    },
    generator: {
      targetContrast: Number(generator.targetContrast) || 7,
      pureOnColors: generator.pureOnColors !== false
    }
  };
}

/**
 * Reads both variants, accepting the flat pre-variant shape as well: a theme
 * exported before light and dark were separate has one token map, which belongs
 * to whichever polarity it was authored against.
 */
function normalizeVariants(
  source: Record<string, unknown>,
  polarity: ForgeThemePolarity
): Record<ForgeThemePolarity, ForgeThemeVariant> {
  const variants = (source.variants ?? {}) as Record<string, unknown>;
  const read = (key: ForgeThemePolarity): ForgeThemeVariant => {
    const variant = (variants[key] ?? {}) as Record<string, unknown>;
    return {
      tokens: normalizeTokenMap(variant.tokens),
      seeds: normalizeSeeds(variant.seeds)
    };
  };

  const result = { light: read('light'), dark: read('dark') };
  if (!variants.light && !variants.dark) {
    result[polarity] = {
      tokens: normalizeTokenMap(source.tokens),
      seeds: normalizeSeeds(source.seeds)
    };
  }
  return result;
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
  // `replace` starts from the stock set for the polarity being authored; `patch`
  // starts from nothing so the host application's own theme shows through.
  const base = theme.mode === 'replace' ? forgeStockTokens(theme.polarity) : null;
  const resolved: ForgeThemeTokenMap = base ? { ...base } : {};
  for (const [token, value] of Object.entries(activeForgeThemeVariant(theme).tokens)) {
    if (value) {
      resolved[token] = value;
    }
  }
  return resolved;
}

/** The stock Forge token set for a polarity. */
export function forgeStockTokens(polarity: ForgeThemePolarity): ForgeThemeTokenMap {
  return polarity === 'dark' ? FORGE_THEME_DARK_TOKENS : FORGE_THEME_LIGHT_TOKENS;
}

/** The stock seed colors for a polarity. */
export function forgeStockSeeds(polarity: ForgeThemePolarity): Required<ForgeThemeSeeds> {
  return polarity === 'dark' ? forgeDarkSeeds() : forgeLightSeeds();
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

function declarations(theme: ForgeTheme, important: boolean, options?: ForgeThemeExportOptions): string[] {
  const bang = important ? ' !important' : '';
  const lines: string[] = [];
  for (const [token, value] of Object.entries(emittedTokenValues(theme, options).values)) {
    lines.push(`  ${FORGE_THEME_TOKEN_PREFIX}${token}: ${value}${bang};`);
  }
  for (const [name, value] of Object.entries(resolveForgeThemeKnobs(theme))) {
    lines.push(`  ${name}: ${value}${bang};`);
  }
  return lines;
}

/**
 * The value to emit for each token: the literal color, or a relative-color
 * expression when one reproduces it and `relativeColors` is on. The single seam
 * both the CSS and the Sass export go through, so the toggle behaves the same
 * in either.
 */
function emittedTokenValues(
  theme: ForgeTheme,
  options?: ForgeThemeExportOptions
): { values: ForgeThemeTokenMap; derived: number; total: number } {
  const tokens = resolveForgeThemeTokens(theme);
  const total = Object.keys(tokens).length;
  if (!options?.relativeColors) {
    return { values: tokens, derived: 0, total };
  }

  const values: ForgeThemeTokenMap = {};
  let derived = 0;
  for (const [token, value] of Object.entries(tokens)) {
    const baseToken = relativeBaseFor(token);
    const expression =
      baseToken && tokens[baseToken] ? relativeColorExpression(tokens[baseToken], value, baseToken) : null;
    if (expression) {
      derived++;
      values[token] = expression;
    } else {
      values[token] = value;
    }
  }
  return { values, derived, total };
}

/**
 * The note that ships with a relative-color export. The failure mode on an older
 * engine is quiet — the declaration is dropped and Forge's own compiled-in
 * fallback applies — so the caveat travels with the stylesheet.
 */
function relativeColorsNote(derived: number, total: number): string {
  return (
    `/* ${derived} of ${total} tokens derive from their base with CSS relative colors,\n` +
    `   so changing a base updates its ramp. Needs Chrome 119+, Safari 16.4+, Firefox 128+.\n` +
    `   'on-' inks and the 'text-' scale are literal: a contrast search is not a transform. */\n`
  );
}

/**
 * Emits a plain `:root` block, for pasting into an application's global stylesheet.
 * @param theme The theme to emit.
 */
export function exportForgeThemeCss(theme: ForgeTheme, options?: ForgeThemeExportOptions): string {
  const { derived, total } = emittedTokenValues(theme, options);
  const header = derived ? relativeColorsNote(derived, total) : '';
  return `${header}:root {\n${declarations(theme, false, options).join('\n')}\n}\n`;
}

/**
 * Which token a derived token is derived *from*. Accent ramps hang off their
 * accent; the surface, text and outline scales hang off `surface`.
 */
function relativeBaseFor(token: string): string | null {
  if (token.startsWith('on-') || token.startsWith('text-') || token === 'surface-bright-shadow') {
    return null; // inks come from a contrast search, not a transform
  }
  if (token === 'surface' || token === 'brand') {
    return null; // seeds
  }
  if (token.startsWith('surface-') || token.startsWith('outline')) {
    return token === 'outline' || token.startsWith('outline-') || token.startsWith('surface-') ? 'surface' : null;
  }
  const accent = ACCENT_TOKENS.find(name => token.startsWith(`${name}-`));
  return accent ?? null;
}

const ACCENT_TOKENS = ['primary', 'secondary', 'tertiary', 'success', 'error', 'warning', 'info'];

/**
 * Expresses a token as a CSS relative color derived from its base, when that
 * expression actually reproduces the value.
 *
 * The coefficients come from the colors the generator produced, so the emitted
 * formula evaluates to exactly what the editor showed — and then keeps tracking
 * the base if an application changes it later, which is the point.
 *
 * Returns null when a transform cannot express the value: a neutral base has no
 * chroma to scale, so a multiplier cannot reach a tinted derivative.
 */
function relativeColorExpression(baseValue: string, targetValue: string, baseToken: string): string | null {
  const base = parseColor(baseValue);
  const target = parseColor(targetValue);
  if (!base || !target || (base[3] ?? 1) < 1 || (target[3] ?? 1) < 1) {
    return null;
  }

  const [baseL, baseC, baseH] = rgbToOklch(base);
  const [targetL, targetC, targetH] = rgbToOklch(target);
  const deltaL = round(targetL - baseL, 4);
  const lightness = deltaL === 0 ? 'l' : `calc(l + ${deltaL})`;
  const reference = `var(${FORGE_THEME_TOKEN_PREFIX}${baseToken})`;

  // The ramp is interpolated in OkLCh between two endpoints whose hues differ a
  // little, so a derived colour is rarely exactly the base's hue. Carry the
  // difference as a delta rather than forcing `h` and missing the value.
  const neutralBase = Number.isNaN(baseH) || baseC < 1e-4;
  const deltaH = neutralBase || Number.isNaN(targetH) ? 0 : round(shortestHueDelta(baseH, targetH), 3);
  const hue = deltaH === 0 ? 'h' : `calc(h + ${deltaH})`;
  const hueValue = baseH + deltaH;

  // Only emit a formula that evaluates back to the value — otherwise the export
  // would not match what was previewed. Two forms, most relative first:
  //
  //  1. chroma as a multiple of the base's. Fully relative, so a base swapped
  //     for a more or less saturated colour carries the whole ramp with it.
  //  2. chroma fixed, lightness and hue still tracking. Needed because scaling
  //     chroma in OkLCh can leave the sRGB gamut, and the clipping that follows
  //     is not what a plain multiply predicts — common with vivid seeds.
  const chromaScale = baseC < 1e-4 ? null : round(targetC / baseC, 4);
  if (chromaScale !== null && sameColor(oklchToRgb([baseL + deltaL, baseC * chromaScale, hueValue]), target)) {
    const chroma = chromaScale === 1 ? 'c' : `calc(c * ${chromaScale})`;
    return `oklch(from ${reference} ${lightness} ${chroma} ${hue})`;
  }

  const fixedChroma = round(targetC, 4);
  if (!neutralBase && sameColor(oklchToRgb([baseL + deltaL, fixedChroma, hueValue]), target)) {
    return `oklch(from ${reference} ${lightness} ${fixedChroma} ${hue})`;
  }

  //  3. chroma and hue both absolute, lightness still tracking. A neutral base -
  //     Forge's own surfaces are pure greys - has no chroma to scale and no
  //     meaningful hue to offset from, but the surface ramp is a lightness ramp:
  //     this keeps it following the surface, which is the part that matters.
  const fixedHue = Number.isNaN(targetH) ? 0 : round(targetH, 3);
  if (sameColor(oklchToRgb([baseL + deltaL, fixedChroma, Number.isNaN(targetH) ? NaN : fixedHue]), target)) {
    return `oklch(from ${reference} ${lightness} ${fixedChroma} ${fixedHue})`;
  }

  return null;
}

/** The signed hue difference in degrees, taking the short way round. */
function shortestHueDelta(from: number, to: number): number {
  let delta = (to - from) % 360;
  if (delta > 180) {
    delta -= 360;
  }
  if (delta < -180) {
    delta += 360;
  }
  return delta;
}

function round(value: number, places: number): number {
  const factor = 10 ** places;
  return Math.round(value * factor) / factor;
}

function sameColor(a: readonly number[], b: readonly number[]): boolean {
  return Math.abs(a[0] - b[0]) <= 1 && Math.abs(a[1] - b[1]) <= 1 && Math.abs(a[2] - b[2]) <= 1;
}

export function exportForgeThemeScss(theme: ForgeTheme, options?: ForgeThemeExportOptions): string {
  // `provide()` takes bare token names and interpolates the value verbatim, so a
  // relative-colour expression passes straight through it.
  const { values, derived, total } = emittedTokenValues(theme, options);
  const entries = Object.entries(values).map(([token, value]) => `    ${token}: ${value}`);
  const knobs = Object.entries(resolveForgeThemeKnobs(theme)).map(([name, value]) => `  ${name}: ${value};`);

  let out = derived ? relativeColorsNote(derived, total) : '';
  out += "@use '@tylertech/forge/sass/theme';\n\n:root {\n";
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
export function exportForgeTheme(
  theme: ForgeTheme,
  format: ForgeThemeExportFormat,
  options?: ForgeThemeExportOptions
): string {
  switch (format) {
    case 'scss':
      return exportForgeThemeScss(theme, options);
    case 'css':
      return exportForgeThemeCss(theme, options);
    default:
      // JSON carries the theme itself, so there is nothing to express relatively.
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

  // Both variants are validated: a file can carry a dark palette the editor is
  // not currently showing, and importing garbage into it would surface later as
  // a mysterious dead property.
  const unknown = new Set<string>();
  for (const variant of Object.values(theme.variants)) {
    for (const token of Object.keys(variant.tokens)) {
      if (!(token in FORGE_THEME_LIGHT_TOKENS)) {
        unknown.add(token);
        delete variant.tokens[token];
      }
    }
  }
  if (unknown.size) {
    const names = [...unknown];
    const shown = names.slice(0, 3).join(', ');
    warnings.push(
      `Dropped ${names.length} unknown token name${names.length > 1 ? 's' : ''} (${shown}${names.length > 3 ? ', …' : ''}).`
    );
  }
  const authored = Object.values(theme.variants).some(variant => Object.keys(variant.tokens).length);
  if (!authored && theme.mode === 'patch') {
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
  const active = activeForgeThemeVariant(theme);
  const resolvedSeeds = seeds ?? active.seeds ?? forgeStockSeeds(theme.polarity);
  const generated = generateForgeTheme(resolvedSeeds, { ...theme.generator, mode: theme.polarity });

  // Only the active variant is regenerated. Generating produces all 101 tokens,
  // so the emit mode becomes `replace`: a generated palette is a whole theme.
  return withForgeThemeVariant(
    { ...theme, mode: 'replace' },
    {
      seeds: { ...resolvedSeeds },
      tokens: generated
    }
  );
}

/**
 * Switches which variant is being authored.
 *
 * Light and dark are independent designs, so this swaps the whole editing
 * surface rather than re-deriving anything: whatever was authored for the
 * outgoing polarity is left exactly as it was, and returning to it restores it.
 *
 * A variant that has never been touched is seeded from that polarity's stock
 * colors, so switching to dark for the first time starts from Forge's dark
 * palette rather than from light accents on a near-black surface.
 */
export function setForgeThemePolarity(theme: ForgeTheme, polarity: ForgeThemePolarity): ForgeTheme {
  if (polarity === theme.polarity) {
    return theme;
  }
  const switched: ForgeTheme = { ...theme, polarity };
  const incoming = switched.variants[polarity];
  const untouched = !incoming.seeds && !Object.keys(incoming.tokens).length;

  return untouched ? withForgeThemeVariant(switched, { seeds: forgeStockSeeds(polarity) }) : switched;
}
