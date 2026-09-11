/**
 * GENERATED from the Tyler Forge Sass source — do not hand-edit.
 *
 *   source: <forge>/packages/forge/src/lib/core/styles/tokens/theme/*.scss
 *   recipe: compile `theme.properties` / `theme.properties-dark` and read the
 *           resolved custom properties back out. Forge publishes no JSON of
 *           resolved theme tokens, so compiling the Sass is the only
 *           authoritative source.
 *
 * Forge emits the light set on `:root` via `forge.css`; the dark set ships only
 * as the `theme-dark.theme-properties` mixin, which host applications attach to a
 * selector of their own choosing (commonly `body.dark-theme`).
 */

/** The custom property prefix every Forge theme token carries. */
export const FORGE_THEME_TOKEN_PREFIX = '--forge-theme-';

/** A theme token value is either a color or, for `surface-bright-shadow`, a box-shadow. */
export type ForgeThemeTokenKind = 'color' | 'shadow';

/** A map of bare Forge theme token names (no `--forge-theme-` prefix) to CSS values. */
export type ForgeThemeTokenMap = Record<string, string>;

/** A display grouping of related theme tokens. */
export interface ForgeThemeTokenGroup {
  /** Stable key for the group. */
  key: string;
  /** Human readable group name. */
  label: string;
  /** The bare token names belonging to the group. */
  tokens: string[];
}

/** The resolved Forge light theme token values. */
export const FORGE_THEME_LIGHT_TOKENS: Readonly<ForgeThemeTokenMap> = {
  brand: '#283593',
  'on-brand': '#ffffff',
  primary: '#3f51b5',
  'primary-container-minimum': '#f7f8fc',
  'primary-container-low': '#e8eaf6',
  'primary-container': '#d1d5ed',
  'primary-container-high': '#b6bde3',
  'on-primary': '#ffffff',
  'on-primary-container-minimum': '#222c62',
  'on-primary-container-low': '#222c62',
  'on-primary-container': '#222c62',
  'on-primary-container-high': '#000000',
  secondary: '#ffc107',
  'secondary-container-minimum': '#fffdf5',
  'secondary-container-low': '#fff8e1',
  'secondary-container': '#fff0c3',
  'secondary-container-high': '#ffe7a1',
  'on-secondary': '#000000',
  'on-secondary-container-minimum': '#8a6804',
  'on-secondary-container-low': '#8a6804',
  'on-secondary-container': '#8a6804',
  'on-secondary-container-high': '#000000',
  tertiary: '#3d5afe',
  'tertiary-container-minimum': '#f7f8ff',
  'tertiary-container-low': '#e8ebff',
  'tertiary-container': '#d0d7ff',
  'tertiary-container-high': '#b5c0ff',
  'on-tertiary': '#ffffff',
  'on-tertiary-container-minimum': '#213189',
  'on-tertiary-container-low': '#213189',
  'on-tertiary-container': '#213189',
  'on-tertiary-container-high': '#000000',
  surface: '#ffffff',
  'surface-inverse': '#333333',
  'surface-container': '#e0e0e0',
  'surface-container-minimum': '#f5f5f5',
  'surface-container-low': '#ebebeb',
  'surface-container-medium': '#c2c2c2',
  'surface-container-high': '#9e9e9e',
  'surface-dim': '#fafafa',
  'surface-bright': '#ffffff',
  'surface-bright-shadow':
    '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
  'on-surface': '#000000',
  'on-surface-inverse': '#ffffff',
  'on-surface-container': '#000000',
  'on-surface-container-minimum': '#000000',
  'on-surface-container-low': '#000000',
  'on-surface-container-medium': '#000000',
  'on-surface-container-high': '#000000',
  'text-high': 'rgba(0, 0, 0, 0.87)',
  'text-high-inverse': 'rgba(255, 255, 255, 0.87)',
  'text-medium': 'rgba(0, 0, 0, 0.6)',
  'text-medium-inverse': 'rgba(255, 255, 255, 0.6)',
  'text-low': 'rgba(0, 0, 0, 0.38)',
  'text-low-inverse': 'rgba(255, 255, 255, 0.38)',
  'text-lowest': 'rgba(0, 0, 0, 0.12)',
  'text-lowest-inverse': 'rgba(255, 255, 255, 0.12)',
  success: '#2e7d32',
  'success-container-minimum': '#f7faf7',
  'success-container-low': '#e6efe6',
  'success-container': '#cde0ce',
  'success-container-high': '#b0ceb1',
  'on-success': '#ffffff',
  'on-success-container-minimum': '#19441b',
  'on-success-container-low': '#19441b',
  'on-success-container': '#19441b',
  'on-success-container-high': '#000000',
  error: '#b00020',
  'error-container-minimum': '#fcf5f6',
  'error-container-low': '#f6e0e4',
  'error-container': '#ecc2c9',
  'error-container-high': '#e19eaa',
  'on-error': '#ffffff',
  'on-error-container-minimum': '#5f0011',
  'on-error-container-low': '#5f0011',
  'on-error-container': '#5f0011',
  'on-error-container-high': '#000000',
  warning: '#d14900',
  'warning-container-minimum': '#fdf8f5',
  'warning-container-low': '#f9e9e0',
  'warning-container': '#f4d3c2',
  'warning-container-high': '#eeba9e',
  'on-warning': '#ffffff',
  'on-warning-container-minimum': '#712700',
  'on-warning-container-low': '#712700',
  'on-warning-container': '#712700',
  'on-warning-container-high': '#000000',
  info: '#1565c0',
  'info-container-minimum': '#f6f9fc',
  'info-container-low': '#e3edf7',
  'info-container': '#c7daf0',
  'info-container-high': '#a6c4e7',
  'on-info': '#ffffff',
  'on-info-container-minimum': '#0b3768',
  'on-info-container-low': '#0b3768',
  'on-info-container': '#0b3768',
  'on-info-container-high': '#000000',
  'outline-high': '#212121',
  'outline-medium': '#757575',
  'outline-low': '#9e9e9e',
  outline: '#e0e0e0'
};

/** The resolved Forge dark theme token values. */
export const FORGE_THEME_DARK_TOKENS: Readonly<ForgeThemeTokenMap> = {
  brand: '#212121',
  'on-brand': '#ffffff',
  primary: '#8c9eff',
  'primary-container-minimum': '#303134',
  'primary-container-low': '#383a45',
  'primary-container': '#43475f',
  'primary-container-high': '#50577c',
  'on-primary': '#000000',
  'on-primary-container-minimum': '#c1cbff',
  'on-primary-container-low': '#c1cbff',
  'on-primary-container': '#c1cbff',
  'on-primary-container-high': '#ffffff',
  secondary: '#ffe082',
  'secondary-container-minimum': '#34332f',
  'secondary-container-low': '#454236',
  'secondary-container': '#5f5741',
  'secondary-container-high': '#7c704d',
  'on-secondary': '#000000',
  'on-secondary-container-minimum': '#ffeebc',
  'on-secondary-container-low': '#ffeebc',
  'on-secondary-container': '#ffeebc',
  'on-secondary-container-high': '#ffffff',
  tertiary: '#ffe082',
  'tertiary-container-minimum': '#34332f',
  'tertiary-container-low': '#454236',
  'tertiary-container': '#5f5741',
  'tertiary-container-high': '#7c704d',
  'on-tertiary': '#000000',
  'on-tertiary-container-minimum': '#ffeebc',
  'on-tertiary-container-low': '#ffeebc',
  'on-tertiary-container': '#ffeebc',
  'on-tertiary-container-high': '#ffffff',
  surface: '#2c2c2c',
  'surface-inverse': '#d5d5d5',
  'surface-container': '#454545',
  'surface-container-minimum': '#343434',
  'surface-container-low': '#3d3d3d',
  'surface-container-medium': '#7c7c7c',
  'surface-container-high': '#9e9e9e',
  'surface-dim': '#212121',
  'surface-bright': '#343434',
  'surface-bright-shadow':
    '0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12)',
  'on-surface': '#ffffff',
  'on-surface-inverse': '#000000',
  'on-surface-container': '#ffffff',
  'on-surface-container-minimum': '#ffffff',
  'on-surface-container-low': '#ffffff',
  'on-surface-container-medium': '#ffffff',
  'on-surface-container-high': '#000000',
  'text-high': 'rgba(255, 255, 255, 0.87)',
  'text-high-inverse': 'rgba(0, 0, 0, 0.87)',
  'text-medium': 'rgba(255, 255, 255, 0.6)',
  'text-medium-inverse': 'rgba(0, 0, 0, 0.6)',
  'text-low': 'rgba(255, 255, 255, 0.38)',
  'text-low-inverse': 'rgba(0, 0, 0, 0.38)',
  'text-lowest': 'rgba(255, 255, 255, 0.12)',
  'text-lowest-inverse': 'rgba(0, 0, 0, 0.12)',
  success: '#86b260',
  'success-container-minimum': '#30312e',
  'success-container-low': '#373c32',
  'success-container': '#424c38',
  'success-container-high': '#4e5f40',
  'on-success': '#000000',
  'on-success-container-minimum': '#bed5a9',
  'on-success-container-low': '#bed5a9',
  'on-success-container': '#bed5a9',
  'on-success-container-high': '#ffffff',
  error: '#ec8396',
  'error-container-minimum': '#342f30',
  'error-container-low': '#433639',
  'error-container': '#5a4145',
  'error-container-high': '#754d54',
  'on-error': '#000000',
  'on-error-container-minimum': '#f5bcc6',
  'on-error-container-low': '#f5bcc6',
  'on-error-container': '#f5bcc6',
  'on-error-container-high': '#ffffff',
  warning: '#f8b27c',
  'warning-container-minimum': '#34312f',
  'warning-container-low': '#443c36',
  'warning-container': '#5d4c3f',
  'warning-container-high': '#7a5f4a',
  'on-warning': '#000000',
  'on-warning-container-minimum': '#fbd5b8',
  'on-warning-container-low': '#fbd5b8',
  'on-warning-container': '#fbd5b8',
  'on-warning-container-high': '#ffffff',
  info: '#1565c0',
  'info-container-minimum': '#2b2e32',
  'info-container-low': '#29333e',
  'info-container': '#263a50',
  'info-container-high': '#234264',
  'on-info': '#ffffff',
  'on-info-container-minimum': '#81acdd',
  'on-info-container-low': '#81acdd',
  'on-info-container': '#81acdd',
  'on-info-container-high': '#ffffff',
  'outline-high': '#e4e4e4',
  'outline-medium': '#9e9e9e',
  'outline-low': '#757575',
  outline: '#424242'
};

/** Alpha values Forge composes its text emphasis steps from. */
export const FORGE_COLOR_EMPHASIS: Readonly<Record<string, string>> = {
  highest: '0.87',
  inverse: '0.8',
  higher: '0.7',
  high: '0.65',
  'medium-high': '0.6',
  medium: '0.54',
  'medium-low': '0.38',
  low: '0.24',
  lower: '0.12',
  lowest: '0.08',
  minimum: '0.04'
};

/** The theme tokens arranged into the groups the editor renders. */
export const FORGE_THEME_TOKEN_GROUPS: readonly ForgeThemeTokenGroup[] = [
  {
    key: 'brand',
    label: 'Brand',
    tokens: ['brand', 'on-brand']
  },
  {
    key: 'primary',
    label: 'Primary',
    tokens: [
      'primary',
      'on-primary',
      'primary-container-minimum',
      'primary-container-low',
      'primary-container',
      'primary-container-high',
      'on-primary-container-minimum',
      'on-primary-container-low',
      'on-primary-container',
      'on-primary-container-high'
    ]
  },
  {
    key: 'secondary',
    label: 'Secondary',
    tokens: [
      'secondary',
      'on-secondary',
      'secondary-container-minimum',
      'secondary-container-low',
      'secondary-container',
      'secondary-container-high',
      'on-secondary-container-minimum',
      'on-secondary-container-low',
      'on-secondary-container',
      'on-secondary-container-high'
    ]
  },
  {
    key: 'tertiary',
    label: 'Tertiary',
    tokens: [
      'tertiary',
      'on-tertiary',
      'tertiary-container-minimum',
      'tertiary-container-low',
      'tertiary-container',
      'tertiary-container-high',
      'on-tertiary-container-minimum',
      'on-tertiary-container-low',
      'on-tertiary-container',
      'on-tertiary-container-high'
    ]
  },
  {
    key: 'surface',
    label: 'Surface',
    tokens: [
      'surface',
      'on-surface',
      'surface-inverse',
      'surface-container',
      'surface-container-minimum',
      'surface-container-low',
      'surface-container-medium',
      'surface-container-high',
      'surface-dim',
      'surface-bright',
      'surface-bright-shadow',
      'on-surface-inverse',
      'on-surface-container',
      'on-surface-container-minimum',
      'on-surface-container-low',
      'on-surface-container-medium',
      'on-surface-container-high'
    ]
  },
  {
    key: 'text',
    label: 'Text',
    tokens: [
      'text-high',
      'text-high-inverse',
      'text-medium',
      'text-medium-inverse',
      'text-low',
      'text-low-inverse',
      'text-lowest',
      'text-lowest-inverse'
    ]
  },
  {
    key: 'success',
    label: 'Success',
    tokens: [
      'success',
      'on-success',
      'success-container-minimum',
      'success-container-low',
      'success-container',
      'success-container-high',
      'on-success-container-minimum',
      'on-success-container-low',
      'on-success-container',
      'on-success-container-high'
    ]
  },
  {
    key: 'error',
    label: 'Error',
    tokens: [
      'error',
      'on-error',
      'error-container-minimum',
      'error-container-low',
      'error-container',
      'error-container-high',
      'on-error-container-minimum',
      'on-error-container-low',
      'on-error-container',
      'on-error-container-high'
    ]
  },
  {
    key: 'warning',
    label: 'Warning',
    tokens: [
      'warning',
      'on-warning',
      'warning-container-minimum',
      'warning-container-low',
      'warning-container',
      'warning-container-high',
      'on-warning-container-minimum',
      'on-warning-container-low',
      'on-warning-container',
      'on-warning-container-high'
    ]
  },
  {
    key: 'info',
    label: 'Info',
    tokens: [
      'info',
      'on-info',
      'info-container-minimum',
      'info-container-low',
      'info-container',
      'info-container-high',
      'on-info-container-minimum',
      'on-info-container-low',
      'on-info-container',
      'on-info-container-high'
    ]
  },
  {
    key: 'outline',
    label: 'Outline',
    tokens: ['outline', 'outline-high', 'outline-medium', 'outline-low']
  }
];

/** The value kind of each theme token. */
export const FORGE_THEME_TOKEN_KINDS: Readonly<Record<string, ForgeThemeTokenKind>> = {
  brand: 'color',
  'on-brand': 'color',
  primary: 'color',
  'primary-container-minimum': 'color',
  'primary-container-low': 'color',
  'primary-container': 'color',
  'primary-container-high': 'color',
  'on-primary': 'color',
  'on-primary-container-minimum': 'color',
  'on-primary-container-low': 'color',
  'on-primary-container': 'color',
  'on-primary-container-high': 'color',
  secondary: 'color',
  'secondary-container-minimum': 'color',
  'secondary-container-low': 'color',
  'secondary-container': 'color',
  'secondary-container-high': 'color',
  'on-secondary': 'color',
  'on-secondary-container-minimum': 'color',
  'on-secondary-container-low': 'color',
  'on-secondary-container': 'color',
  'on-secondary-container-high': 'color',
  tertiary: 'color',
  'tertiary-container-minimum': 'color',
  'tertiary-container-low': 'color',
  'tertiary-container': 'color',
  'tertiary-container-high': 'color',
  'on-tertiary': 'color',
  'on-tertiary-container-minimum': 'color',
  'on-tertiary-container-low': 'color',
  'on-tertiary-container': 'color',
  'on-tertiary-container-high': 'color',
  surface: 'color',
  'surface-inverse': 'color',
  'surface-container': 'color',
  'surface-container-minimum': 'color',
  'surface-container-low': 'color',
  'surface-container-medium': 'color',
  'surface-container-high': 'color',
  'surface-dim': 'color',
  'surface-bright': 'color',
  'surface-bright-shadow': 'shadow',
  'on-surface': 'color',
  'on-surface-inverse': 'color',
  'on-surface-container': 'color',
  'on-surface-container-minimum': 'color',
  'on-surface-container-low': 'color',
  'on-surface-container-medium': 'color',
  'on-surface-container-high': 'color',
  'text-high': 'color',
  'text-high-inverse': 'color',
  'text-medium': 'color',
  'text-medium-inverse': 'color',
  'text-low': 'color',
  'text-low-inverse': 'color',
  'text-lowest': 'color',
  'text-lowest-inverse': 'color',
  success: 'color',
  'success-container-minimum': 'color',
  'success-container-low': 'color',
  'success-container': 'color',
  'success-container-high': 'color',
  'on-success': 'color',
  'on-success-container-minimum': 'color',
  'on-success-container-low': 'color',
  'on-success-container': 'color',
  'on-success-container-high': 'color',
  error: 'color',
  'error-container-minimum': 'color',
  'error-container-low': 'color',
  'error-container': 'color',
  'error-container-high': 'color',
  'on-error': 'color',
  'on-error-container-minimum': 'color',
  'on-error-container-low': 'color',
  'on-error-container': 'color',
  'on-error-container-high': 'color',
  warning: 'color',
  'warning-container-minimum': 'color',
  'warning-container-low': 'color',
  'warning-container': 'color',
  'warning-container-high': 'color',
  'on-warning': 'color',
  'on-warning-container-minimum': 'color',
  'on-warning-container-low': 'color',
  'on-warning-container': 'color',
  'on-warning-container-high': 'color',
  info: 'color',
  'info-container-minimum': 'color',
  'info-container-low': 'color',
  'info-container': 'color',
  'info-container-high': 'color',
  'on-info': 'color',
  'on-info-container-minimum': 'color',
  'on-info-container-low': 'color',
  'on-info-container': 'color',
  'on-info-container-high': 'color',
  'outline-high': 'color',
  'outline-medium': 'color',
  'outline-low': 'color',
  outline: 'color'
};

/**
 * The Forge spacing scale. Not part of the theme module, but the editor can scale
 * it as a global density knob.
 */
export const FORGE_SPACING_TOKENS: Readonly<Record<string, string>> = {
  xxxsmall: '2px',
  xxsmall: '4px',
  xsmall: '8px',
  small: '12px',
  medium: '16px',
  'medium-large': '20px',
  large: '24px',
  xlarge: '32px',
  xxlarge: '48px',
  xxxlarge: '56px'
};

/** Every Forge theme token name, in declaration order. */
export const FORGE_THEME_TOKEN_NAMES: readonly string[] = Object.keys(FORGE_THEME_LIGHT_TOKENS);
