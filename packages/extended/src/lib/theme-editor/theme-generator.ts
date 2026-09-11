/**
 * Derives a complete Forge theme token set from a handful of seed colors.
 *
 * The accent/status ramps follow the same recipe as the official
 * `tyler-technologies-oss/forge-theme-generator`:
 *
 *   on-<name>             = accessible text color found by walking lightness until
 *                           the target contrast ratio is met
 *   <name>-container-*    = chroma.scale([brighten(seed, 2), tint(seed, 0.95)])
 *                             .mode('oklch').colors(4)
 *                           mapped high -> container -> low -> minimum
 *   on-<name>-container-* = accessible text color per container step
 *
 * Surface, text and outline ramps are NOT taken from that tool: its surface path
 * is demo-only (it scales plain white to black and assigns a color to
 * `surface-bright-shadow`, which holds a box-shadow value). They are instead
 * reproduced from the lightness relationships measured in Forge's own shipped
 * light and dark token sets, so seeding with the Forge defaults lands back on
 * (approximately) the Forge defaults.
 */

import {
  brighten,
  contrast,
  darken,
  flatten,
  luminance,
  parseColor,
  rgbToLab,
  scaleOklch,
  shade,
  tint,
  toCssColor,
  toHex,
  withLightness,
  type Rgba
} from './theme-color';
import {
  FORGE_COLOR_EMPHASIS,
  FORGE_THEME_DARK_TOKENS,
  FORGE_THEME_LIGHT_TOKENS,
  FORGE_THEME_TOKEN_KINDS,
  type ForgeThemeTokenMap
} from './theme-tokens';

/** Which set of surface/outline relationships to derive against. */
export type ThemeGeneratorMode = 'light' | 'dark';

/** The seed colors a generated palette is derived from. */
export interface ForgeThemeSeeds {
  brand?: string;
  primary?: string;
  secondary?: string;
  tertiary?: string;
  surface?: string;
  success?: string;
  error?: string;
  warning?: string;
  info?: string;
}

/** Options controlling how derived colors are chosen. */
export interface ThemeGeneratorOptions {
  /** Which Forge mode's surface/outline relationships to derive against. */
  mode?: ThemeGeneratorMode;
  /** The desired WCAG ratio for derived `on-*` colors. Defaults to 7. */
  targetContrast?: number;
  /**
   * Use pure white/black for `on-<accent>` and `on-surface`, which is what
   * Forge's own shipped tokens do. Defaults to `true`.
   */
  pureOnColors?: boolean;
}

/** One `on-*` token measured against the background it sits on. */
export interface ThemeContrastEntry {
  /** The `on-*` token name. */
  foreground: string;
  /** The background token name. */
  background: string;
  /** The WCAG 2.x contrast ratio, rounded to two decimals. */
  ratio: number;
}

/** The seed keys the editor exposes, in display order. */
export const FORGE_THEME_SEED_KEYS: readonly (keyof ForgeThemeSeeds)[] = [
  'brand',
  'primary',
  'secondary',
  'tertiary',
  'surface',
  'success',
  'error',
  'warning',
  'info'
];

const ACCENTS = ['primary', 'secondary', 'tertiary', 'success', 'error', 'warning', 'info'] as const;
const CONTAINER_LEVELS = ['container-high', 'container', 'container-low', 'container-minimum'] as const;

/** Lab lightness offsets from the surface color, measured from Forge's shipped tokens. */
const SURFACE_DELTAS: Record<ThemeGeneratorMode, Record<string, number>> = {
  light: {
    'surface-dim': -1.73,
    'surface-bright': 0,
    'surface-container-minimum': -3.46,
    'surface-container-low': -6.95,
    'surface-container': -10.82,
    'surface-container-medium': -21.57,
    'surface-container-high': -34.89,
    'surface-inverse': -78.75
  },
  dark: {
    'surface-dim': -5.26,
    'surface-bright': 3.7,
    'surface-container-minimum': 3.7,
    'surface-container-low': 7.76,
    'surface-container': 11.29,
    'surface-container-medium': 34.01,
    'surface-container-high': 47.11,
    'surface-inverse': 67.27
  }
};

/** Absolute Lab lightness targets for the outline ramp, from Forge's shipped tokens. */
const OUTLINE_LIGHTNESS: Record<ThemeGeneratorMode, Record<string, number>> = {
  light: { 'outline-high': 12.74, 'outline-medium': 49.24, 'outline-low': 65.11, outline: 89.18 },
  dark: { 'outline-high': 90.59, 'outline-medium': 65.11, 'outline-low': 49.24, outline: 27.97 }
};

/** Forge composes text colors as pure black/white at these emphasis steps. */
const TEXT_EMPHASIS: Record<string, string> = {
  'text-high': 'highest',
  'text-medium': 'medium-high',
  'text-low': 'medium-low',
  'text-lowest': 'lower'
};

interface ResolvedOptions {
  mode: ThemeGeneratorMode;
  targetContrast: number;
  pureOnColors: boolean;
}

function seedsFrom(tokens: Readonly<ForgeThemeTokenMap>): Required<ForgeThemeSeeds> {
  return {
    brand: tokens.brand,
    primary: tokens.primary,
    secondary: tokens.secondary,
    tertiary: tokens.tertiary,
    surface: tokens.surface,
    success: tokens.success,
    error: tokens.error,
    warning: tokens.warning,
    info: tokens.info
  };
}

/** The seed colors matching the Forge light defaults. */
export function forgeLightSeeds(): Required<ForgeThemeSeeds> {
  return seedsFrom(FORGE_THEME_LIGHT_TOKENS);
}

/** The seed colors matching the Forge dark defaults. */
export function forgeDarkSeeds(): Required<ForgeThemeSeeds> {
  return seedsFrom(FORGE_THEME_DARK_TOKENS);
}

/**
 * Walks CIELab lightness away from `background` in one direction, returning the
 * first color to clear `targetContrast` or the highest-contrast color on the ramp.
 */
function rampToward(background: Rgba, goDarker: boolean, targetContrast: number): { hex: string; contrast: number } {
  const STEP = 0.025; // upstream's step size
  const MAX_ITERATIONS = 2000;
  // A 0.45 Lab lightness step often rounds to the same hex once two sRGB channels
  // have clamped, so a single no-change step is not the end of the ramp. Only
  // treat a long plateau as terminal.
  const MAX_PLATEAU = 24;

  let candidate = background;
  let best = toHex(background);
  let bestContrast = contrast(background, background);
  let plateau = 0;

  for (let i = 0; i < MAX_ITERATIONS; i++) {
    const ratio = contrast(background, candidate);
    if (ratio > bestContrast) {
      bestContrast = ratio;
      best = toHex(candidate);
    }
    if (ratio >= targetContrast) {
      return { hex: toHex(candidate), contrast: ratio };
    }

    const next = goDarker ? darken(candidate, STEP) : brighten(candidate, STEP);
    const nextHex = toHex(next);
    plateau = nextHex === toHex(candidate) ? plateau + 1 : 0;
    if (plateau >= MAX_PLATEAU) {
      break;
    }
    candidate = next;

    // Pure black/white is the end of the ramp.
    if (nextHex === '#000000' || nextHex === '#ffffff') {
      const endRatio = contrast(background, next);
      if (endRatio > bestContrast) {
        bestContrast = endRatio;
        best = nextHex;
      }
      break;
    }
  }
  return { hex: best, contrast: bestContrast };
}

/**
 * Finds a readable ink for `background` by walking the background's own lightness
 * until it clears `targetContrast`. This is the upstream algorithm, so
 * `on-container` colors stay in the same hue family as their container.
 *
 * `targetContrast` is not always reachable: nothing contrasts 7:1 with a
 * mid-lightness orange like Forge's own `#d14900` warning (the best any color can
 * manage there is about 4.66:1). Two deliberate departures from upstream cover
 * that case:
 *
 *   - Upstream picks the ramp direction from a single `luminance > 0.3` test and
 *     commits to it. For a mid-lightness background that can be the worse of the
 *     two directions, so we fall back to the other one when the target is
 *     unreachable in the preferred direction.
 *   - Upstream stops at whatever color it happened to reach. We return the
 *     highest-contrast color the ramp produced, and the contrast report surfaces
 *     the shortfall.
 *
 * @param background The background color to find an ink for.
 * @param targetContrast The desired WCAG contrast ratio.
 */
export function accessibleTextColor(background: string, targetContrast: number): string {
  const parsed = parseColor(background);
  if (!parsed) {
    return '#000000';
  }

  // Upstream's direction heuristic, and it is the right one nearly always.
  const preferDarker = luminance(parsed) > 0.3;
  const first = rampToward(parsed, preferDarker, targetContrast);
  if (first.contrast >= targetContrast) {
    return first.hex;
  }

  // Target out of reach going that way — see if the other direction does better.
  const second = rampToward(parsed, !preferDarker, targetContrast);
  return second.contrast > first.contrast ? second.hex : first.hex;
}

/**
 * Picks whichever of pure white/black contrasts better against a background.
 * @param background The background color.
 */
export function bestPureOnColor(background: string): string {
  const parsed = parseColor(background);
  if (!parsed) {
    return '#000000';
  }
  const white: Rgba = [255, 255, 255, 1];
  const black: Rgba = [0, 0, 0, 1];
  return contrast(parsed, white) >= contrast(parsed, black) ? '#ffffff' : '#000000';
}

function onColorFor(background: string, options: ResolvedOptions): string {
  return options.pureOnColors ? bestPureOnColor(background) : accessibleTextColor(background, options.targetContrast);
}

/**
 * Builds the four container steps plus their on-colors for one accent.
 *
 * Containers ramp from the most emphasized step down to one that barely reads
 * against the page surface. Upstream only implements the light direction
 * (brighten then tint toward white); running that against a dark theme yields
 * near-white containers, which is wrong, so dark mode mirrors it (darken then
 * shade toward black) to match how Forge's own dark containers behave:
 * `primary #8c9eff` -> `container-high #50577c` -> `container-minimum #303134`.
 */
function accentRamp(name: string, seed: string, options: ResolvedOptions): ForgeThemeTokenMap {
  const out: ForgeThemeTokenMap = {};
  const base = parseColor(seed);
  if (!base) {
    return out;
  }

  const baseHex = toHex(base);
  out[name] = baseHex;
  out[`on-${name}`] = onColorFor(baseHex, options);

  const isDark = options.mode === 'dark';
  const from = isDark ? darken(base, 2) : brighten(base, 2);
  const to = isDark ? shade(base, 0.95) : tint(base, 0.95);
  const steps = scaleOklch(from, to, CONTAINER_LEVELS.length);

  CONTAINER_LEVELS.forEach((level, index) => {
    const container = toHex(steps[index]);
    out[`${name}-${level}`] = container;
    out[`on-${name}-${level}`] = accessibleTextColor(container, options.targetContrast);
  });
  return out;
}

/** Builds the surface ramp, its on-colors, the text scale and the outline ramp. */
function surfaceRamp(seed: string, options: ResolvedOptions): ForgeThemeTokenMap {
  const out: ForgeThemeTokenMap = {};
  const base = parseColor(seed);
  if (!base) {
    return out;
  }

  const baseHex = toHex(base);
  out.surface = baseHex;
  out['on-surface'] = onColorFor(baseHex, options);

  const deltas = SURFACE_DELTAS[options.mode];
  const baseLightness = rgbToLab(base)[0];
  for (const [token, delta] of Object.entries(deltas)) {
    // `surface-inverse` is a near-neutral in both Forge themes, so damp its chroma.
    const chromaScale = token === 'surface-inverse' ? 0.2 : 1;
    out[token] = toHex(withLightness(base, baseLightness + delta, chromaScale));
  }

  // Every surface that carries content needs its own readable ink. That includes
  // `surface-inverse`, whose ink must be derived against the inverse surface — not
  // flipped from `on-surface`, which only happens to be correct when `on-surface`
  // is pure black or white.
  for (const token of Object.keys(deltas)) {
    if (token !== 'surface-inverse' && !token.startsWith('surface-container')) {
      continue;
    }
    out[`on-${token}`] = onColorFor(out[token], options);
  }

  // Text tokens are pure black/white at fixed emphasis steps, polarity set by the surface.
  const onDark = luminance(base) < 0.5;
  const baseInk = onDark ? 255 : 0;
  const inverseInk = onDark ? 0 : 255;
  for (const [token, emphasis] of Object.entries(TEXT_EMPHASIS)) {
    const alpha = parseFloat(FORGE_COLOR_EMPHASIS[emphasis]);
    out[token] = toCssColor([baseInk, baseInk, baseInk, alpha]);
    out[`${token}-inverse`] = toCssColor([inverseInk, inverseInk, inverseInk, alpha]);
  }

  for (const [token, lightness] of Object.entries(OUTLINE_LIGHTNESS[options.mode])) {
    out[token] = toHex(withLightness(base, lightness, 0.25));
  }
  return out;
}

/**
 * Generates a full 101-token Forge theme from seed colors.
 *
 * Any token the generator does not compute (currently only
 * `surface-bright-shadow`) is carried over from the Forge defaults for the mode so
 * that the result is always a complete, coherent theme.
 *
 * @param seeds The seed colors. Anything omitted falls back to the Forge default
 * for the mode.
 * @param options Generation options.
 * @returns A map of bare token names to CSS values.
 */
export function generateForgeTheme(
  seeds?: ForgeThemeSeeds | null,
  options?: ThemeGeneratorOptions
): ForgeThemeTokenMap {
  const resolvedOptions: ResolvedOptions = {
    mode: options?.mode === 'dark' ? 'dark' : 'light',
    targetContrast: Number(options?.targetContrast) || 7,
    pureOnColors: options?.pureOnColors !== false
  };

  const isDark = resolvedOptions.mode === 'dark';
  const defaults = isDark ? FORGE_THEME_DARK_TOKENS : FORGE_THEME_LIGHT_TOKENS;
  const resolvedSeeds: Required<ForgeThemeSeeds> = {
    ...(isDark ? forgeDarkSeeds() : forgeLightSeeds()),
    ...stripEmptySeeds(seeds)
  };

  const tokens: ForgeThemeTokenMap = { ...defaults };
  Object.assign(tokens, surfaceRamp(resolvedSeeds.surface, resolvedOptions));
  for (const accent of ACCENTS) {
    Object.assign(tokens, accentRamp(accent, resolvedSeeds[accent], resolvedOptions));
  }

  const brand = parseColor(resolvedSeeds.brand);
  if (brand) {
    const brandHex = toHex(brand);
    tokens.brand = brandHex;
    tokens['on-brand'] = onColorFor(brandHex, resolvedOptions);
  }
  return tokens;
}

function stripEmptySeeds(seeds?: ForgeThemeSeeds | null): ForgeThemeSeeds {
  const out: ForgeThemeSeeds = {};
  if (!seeds) {
    return out;
  }
  for (const key of FORGE_THEME_SEED_KEYS) {
    const value = seeds[key];
    if (typeof value === 'string' && value.trim()) {
      out[key] = value.trim();
    }
  }
  return out;
}

/**
 * Reports the contrast ratio of every `on-*` token against the background token it
 * names, worst first, so an illegible theme is obvious before it ships.
 *
 * Translucent foregrounds are flattened onto their background before measuring,
 * which is what a browser actually renders.
 *
 * @param tokens The resolved theme token map.
 */
export function auditForgeThemeContrast(tokens: Readonly<ForgeThemeTokenMap>): ThemeContrastEntry[] {
  const entries: ThemeContrastEntry[] = [];
  for (const token of Object.keys(tokens)) {
    if (!token.startsWith('on-')) {
      continue;
    }
    const background = token.slice(3);
    if (!(background in tokens) || FORGE_THEME_TOKEN_KINDS[background] !== 'color') {
      continue;
    }
    const backgroundColor = parseColor(tokens[background]);
    const foregroundColor = parseColor(tokens[token]);
    if (!backgroundColor || !foregroundColor) {
      continue;
    }
    entries.push({
      foreground: token,
      background,
      ratio: +contrast(backgroundColor, flatten(foregroundColor, backgroundColor)).toFixed(2)
    });
  }
  return entries.sort((a, b) => a.ratio - b.ratio);
}
