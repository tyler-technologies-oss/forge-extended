import { expect } from '@esm-bundle/chai';
import {
  FORGE_THEME_EXPORT_VERSION,
  createForgeTheme,
  emptyForgeTheme,
  emptyForgeThemeKnobs,
  exportForgeTheme,
  exportForgeThemeCss,
  exportForgeThemeJson,
  exportForgeThemeRelativeCss,
  exportForgeThemeScss,
  normalizeForgeTheme,
  parseForgeThemeJson,
  activeForgeThemeVariant,
  regenerateForgeTheme,
  resolveForgeThemeKnobs,
  resolveForgeThemeTokens,
  setForgeThemePolarity,
  type ForgeTheme
} from './theme-model';
import { forgeDarkSeeds, forgeLightSeeds } from './theme-generator';
import { FORGE_THEME_DARK_TOKENS, FORGE_THEME_LIGHT_TOKENS } from './theme-tokens';

/** Pulls `--name: value` pairs out of an emitted stylesheet. */
function parseDeclarations(css: string): Record<string, string> {
  return Object.fromEntries([...css.matchAll(/^\s*(--[a-z0-9-]+):\s*(.+);$/gm)].map(match => [match[1], match[2]]));
}

describe('ThemeEditor theme model', () => {
  describe('createForgeTheme', () => {
    it('should produce a complete theme from nothing', () => {
      const theme = createForgeTheme();
      expect(theme.name).to.equal('Untitled theme');
      expect(theme.mode).to.equal('patch');
      expect(theme.variants.light).to.deep.equal({ tokens: {}, seeds: null });
      expect(theme.variants.dark).to.deep.equal({ tokens: {}, seeds: null });
      expect(theme.knobs).to.deep.equal(emptyForgeThemeKnobs());
      expect(theme.polarity).to.equal('light');
      expect(theme.generator).to.deep.equal({ targetContrast: 7, pureOnColors: true });
    });

    it('should keep the overrides it is given', () => {
      const theme = createForgeTheme({ name: 'Brandy', mode: 'dark', tokens: { primary: '#ff0000' } });
      expect(theme.name).to.equal('Brandy');
      expect(theme.mode).to.equal('replace');
      expect(activeForgeThemeVariant(theme).tokens).to.deep.equal({ primary: '#ff0000' });
    });

    it('should accept a null override', () => {
      expect(createForgeTheme(null)).to.deep.equal(emptyForgeTheme());
    });
  });

  describe('normalizeForgeTheme', () => {
    it('should reject a value that is not an object', () => {
      expect(normalizeForgeTheme(null)).to.be.null;
      expect(normalizeForgeTheme('theme')).to.be.null;
      expect(normalizeForgeTheme([])).to.be.null;
    });

    it('should trim the name and fall back when it is blank', () => {
      expect(normalizeForgeTheme({ name: '  Spaced  ' })!.name).to.equal('Spaced');
      expect(normalizeForgeTheme({ name: '   ' })!.name).to.equal('Untitled theme');
      expect(normalizeForgeTheme({ name: 42 })!.name).to.equal('Untitled theme');
    });

    it('should fall back on an unknown mode', () => {
      expect(normalizeForgeTheme({ mode: 'neon' })!.mode).to.equal('patch');
      expect(normalizeForgeTheme({ mode: 'light' })!.mode).to.equal('replace');
    });

    it('should drop token values that are not non-empty strings', () => {
      const theme = normalizeForgeTheme({
        tokens: { primary: '  #ff0000  ', secondary: '', tertiary: 12, brand: null }
      })!;
      expect(activeForgeThemeVariant(theme).tokens).to.deep.equal({ primary: '#ff0000' });
    });

    it('should tolerate a tokens value that is not an object', () => {
      expect(activeForgeThemeVariant(normalizeForgeTheme({ tokens: 'nope' })!).tokens).to.deep.equal({});
      expect(activeForgeThemeVariant(normalizeForgeTheme({ tokens: null })!).tokens).to.deep.equal({});
    });

    it('should coerce numeric knobs and blank out the rest', () => {
      const theme = normalizeForgeTheme({
        knobs: { shapeFactor: '2', spacingScale: 'wide', fontFamily: 'Inter', fontSize: 14 }
      })!;
      expect(theme.knobs.shapeFactor).to.equal(2);
      expect(theme.knobs.spacingScale).to.be.null;
      expect(theme.knobs.fontFamily).to.equal('Inter');
      expect(theme.knobs.fontSize).to.equal('');
    });

    it('should tolerate a knobs value that is not an object', () => {
      expect(normalizeForgeTheme({ knobs: null })!.knobs).to.deep.equal(emptyForgeThemeKnobs());
    });

    it('should keep only string seeds and drop an empty seed map', () => {
      expect(
        activeForgeThemeVariant(normalizeForgeTheme({ seeds: { primary: ' #f00 ', secondary: 9 } })!).seeds
      ).to.deep.equal({
        primary: '#f00'
      });
      expect(activeForgeThemeVariant(normalizeForgeTheme({ seeds: {} })!).seeds).to.be.null;
      expect(activeForgeThemeVariant(normalizeForgeTheme({ seeds: [] })!).seeds).to.be.null;
      expect(activeForgeThemeVariant(normalizeForgeTheme({ seeds: 'red' })!).seeds).to.be.null;
    });

    it('should default the generator options', () => {
      expect(normalizeForgeTheme({ generator: { targetContrast: 'nope' } })!.generator).to.deep.equal({
        targetContrast: 7,
        pureOnColors: true
      });
      expect(normalizeForgeTheme({ generator: { pureOnColors: false } })!.generator.pureOnColors).to.be.false;
    });
  });

  describe('resolveForgeThemeTokens', () => {
    it('should emit only the overrides in patch mode', () => {
      const theme = createForgeTheme({ tokens: { primary: '#ff0000' } });
      expect(resolveForgeThemeTokens(theme)).to.deep.equal({ primary: '#ff0000' });
    });

    it('should layer the overrides over the full light set', () => {
      const theme = createForgeTheme({ mode: 'light', tokens: { primary: '#ff0000' } });
      const resolved = resolveForgeThemeTokens(theme);
      expect(Object.keys(resolved)).to.have.lengthOf(101);
      expect(resolved.primary).to.equal('#ff0000');
      expect(resolved.secondary).to.equal(FORGE_THEME_LIGHT_TOKENS.secondary);
    });

    it('should layer the overrides over the full dark set', () => {
      const resolved = resolveForgeThemeTokens(createForgeTheme({ mode: 'dark' }));
      expect(resolved.surface).to.equal(FORGE_THEME_DARK_TOKENS.surface);
    });
  });

  describe('resolveForgeThemeKnobs', () => {
    it('should emit nothing when no knob is set', () => {
      expect(resolveForgeThemeKnobs(createForgeTheme())).to.deep.equal({});
    });

    it('should emit the shape factor', () => {
      const knobs = resolveForgeThemeKnobs(createForgeTheme({ knobs: { ...emptyForgeThemeKnobs(), shapeFactor: 2 } }));
      expect(knobs['--forge-shape-factor']).to.equal('2');
    });

    it('should scale every spacing step', () => {
      const knobs = resolveForgeThemeKnobs(
        createForgeTheme({ knobs: { ...emptyForgeThemeKnobs(), spacingScale: 1.5 } })
      );
      expect(knobs['--forge-spacing-medium']).to.equal('24px');
      expect(knobs['--forge-spacing-xxxsmall']).to.equal('3px');
    });

    it('should emit the typography knobs', () => {
      const knobs = resolveForgeThemeKnobs(
        createForgeTheme({ knobs: { ...emptyForgeThemeKnobs(), fontFamily: 'Inter', fontSize: '15px' } })
      );
      expect(knobs['--forge-typography-font-family']).to.equal('Inter');
      expect(knobs['--forge-typography-font-size']).to.equal('15px');
    });
  });

  describe('exportForgeThemeCss', () => {
    it('should emit a plain root block with no important flags', () => {
      const css = exportForgeThemeCss(createForgeTheme({ tokens: { primary: '#ff0000' } }));
      expect(css).to.include(':root {');
      expect(css).to.include('--forge-theme-primary: #ff0000;');
      expect(css).to.not.include('!important');
    });
  });

  describe('exportForgeThemeScss', () => {
    it('should use the Forge theme provide mixin with bare token names', () => {
      const scss = exportForgeThemeScss(createForgeTheme({ tokens: { primary: '#ff0000' } }));
      expect(scss).to.include("@use '@tylertech/forge/sass/theme';");
      expect(scss).to.include('@include theme.provide(');
      expect(scss).to.include('primary: #ff0000');
      expect(scss).to.not.include('--forge-theme-primary');
    });

    it('should emit the knobs alongside the token map', () => {
      const scss = exportForgeThemeScss(
        createForgeTheme({ tokens: { primary: '#ff0000' }, knobs: { ...emptyForgeThemeKnobs(), shapeFactor: 2 } })
      );
      expect(scss).to.include('@include theme.provide(');
      expect(scss).to.include('--forge-shape-factor: 2;');
    });

    it('should emit only the knobs when no token is set', () => {
      const scss = exportForgeThemeScss(createForgeTheme({ knobs: { ...emptyForgeThemeKnobs(), shapeFactor: 2 } }));
      expect(scss).to.not.include('theme.provide');
      expect(scss).to.include('--forge-shape-factor: 2;');
    });

    it('should emit an empty root block for an untouched theme', () => {
      expect(exportForgeThemeScss(createForgeTheme())).to.include(':root {\n}');
    });
  });

  describe('exportForgeThemeJson', () => {
    it('should stamp the export version', () => {
      const parsed = JSON.parse(exportForgeThemeJson(createForgeTheme({ name: 'Brandy' })));
      expect(parsed.forgeThemeEditor).to.equal(FORGE_THEME_EXPORT_VERSION);
      expect(parsed.name).to.equal('Brandy');
    });

    it('should round trip through the importer', () => {
      const theme = createForgeTheme({
        name: 'Brandy',
        mode: 'light',
        tokens: { primary: '#ff0000' },
        knobs: { ...emptyForgeThemeKnobs(), shapeFactor: 2 },
        seeds: { primary: '#ff0000' }
      });
      const result = parseForgeThemeJson(exportForgeThemeJson(theme));
      expect(result.error).to.be.null;
      expect(result.theme).to.deep.equal(theme);
    });
  });

  describe('exportForgeTheme', () => {
    it('should dispatch on the requested format', () => {
      const theme = createForgeTheme({ tokens: { primary: '#ff0000' } });
      expect(exportForgeTheme(theme, 'json')).to.equal(exportForgeThemeJson(theme));
      expect(exportForgeTheme(theme, 'scss')).to.equal(exportForgeThemeScss(theme));
      expect(exportForgeTheme(theme, 'css')).to.equal(exportForgeThemeCss(theme));
    });
  });

  describe('parseForgeThemeJson', () => {
    it('should report invalid json', () => {
      const result = parseForgeThemeJson('{ nope');
      expect(result.theme).to.be.null;
      expect(result.error).to.include('Not valid JSON');
    });

    it('should report json that holds no theme', () => {
      const result = parseForgeThemeJson('"just a string"');
      expect(result.theme).to.be.null;
      expect(result.error).to.equal('No theme found in that JSON.');
    });

    it('should accept a theme object', () => {
      const result = parseForgeThemeJson('{"name":"Brandy","tokens":{"primary":"#ff0000"}}');
      expect(result.theme!.name).to.equal('Brandy');
      expect(activeForgeThemeVariant(result.theme!).tokens.primary).to.equal('#ff0000');
      expect(result.warnings).to.be.empty;
    });

    it('should accept a theme wrapper', () => {
      const result = parseForgeThemeJson('{"theme":{"name":"Wrapped","tokens":{"primary":"#ff0000"}}}');
      expect(result.theme!.name).to.equal('Wrapped');
    });

    it('should accept a themes array wrapper', () => {
      const result = parseForgeThemeJson('{"themes":[{"name":"First","tokens":{"primary":"#ff0000"}}]}');
      expect(result.theme!.name).to.equal('First');
    });

    it('should accept a bare array and warn about the extras', () => {
      const result = parseForgeThemeJson('[{"name":"First","tokens":{}},{"name":"Second","tokens":{}}]');
      expect(result.theme!.name).to.equal('First');
      expect(result.warnings).to.include('Imported the first of 2 themes.');
    });

    it('should accept a bare token map', () => {
      const result = parseForgeThemeJson('{"primary":"#ff0000","surface":"#ffffff"}');
      expect(activeForgeThemeVariant(result.theme!).tokens).to.deep.equal({ primary: '#ff0000', surface: '#ffffff' });
    });

    it('should drop unknown token names rather than emitting dead properties', () => {
      const result = parseForgeThemeJson(
        '{"tokens":{"primary":"#ff0000","made-up":"#000","also-made-up":"#000","third":"#000","fourth":"#000"}}'
      );
      expect(activeForgeThemeVariant(result.theme!).tokens).to.deep.equal({ primary: '#ff0000' });
      expect(result.warnings[0]).to.include('Dropped 4 unknown token names');
      expect(result.warnings[0]).to.include('…');
    });

    it('should use the singular when only one token name is unknown', () => {
      const result = parseForgeThemeJson('{"tokens":{"primary":"#ff0000","made-up":"#000"}}');
      expect(result.warnings[0]).to.include('Dropped 1 unknown token name (made-up)');
    });

    it('should warn when a patch theme sets no tokens', () => {
      const result = parseForgeThemeJson('{"name":"Empty","tokens":{}}');
      expect(result.theme).to.not.be.null;
      expect(result.warnings).to.include('That theme set no tokens.');
    });

    it('should not warn about an empty token map when a full set is emitted', () => {
      const result = parseForgeThemeJson('{"name":"Stock dark","mode":"dark","tokens":{}}');
      expect(result.warnings).to.be.empty;
    });
  });

  describe('regenerateForgeTheme', () => {
    it('should derive the full token set from the theme seeds', () => {
      const theme = createForgeTheme({ seeds: { primary: '#ff0000' } });
      const regenerated = regenerateForgeTheme(theme);
      expect(Object.keys(activeForgeThemeVariant(regenerated).tokens)).to.have.lengthOf(101);
      expect(activeForgeThemeVariant(regenerated).tokens.primary).to.equal('#ff0000');
      expect(activeForgeThemeVariant(regenerated).seeds).to.deep.equal({ primary: '#ff0000' });
    });

    it('should move a patch theme onto a full light set', () => {
      expect(regenerateForgeTheme(createForgeTheme()).mode).to.equal('replace');
    });

    it('should derive from the palette polarity, not the emit mode', () => {
      // A patch theme whose palette is dark still derives dark ramps; generating
      // then emits the whole set, because a generated palette is a whole theme.
      const regenerated = regenerateForgeTheme(
        createForgeTheme({ mode: 'patch', generator: { mode: 'dark' } } as never)
      );

      expect(regenerated.polarity).to.equal('dark');
      expect(activeForgeThemeVariant(regenerated).tokens.surface).to.equal(FORGE_THEME_DARK_TOKENS.surface);
      expect(regenerated.mode).to.equal('replace');
    });

    it('should accept seeds passed in directly', () => {
      const regenerated = regenerateForgeTheme(createForgeTheme(), { primary: '#00ff00' });
      expect(activeForgeThemeVariant(regenerated).tokens.primary).to.equal('#00ff00');
      expect(activeForgeThemeVariant(regenerated).seeds).to.deep.equal({ primary: '#00ff00' });
    });

    it('should generate the stock palette when there are no seeds', () => {
      const regenerated = regenerateForgeTheme(createForgeTheme());
      // Regenerating records what it derived from, so the palette view can show it.
      expect(activeForgeThemeVariant(regenerated).seeds).to.deep.equal(forgeLightSeeds());
      expect(activeForgeThemeVariant(regenerated).tokens.primary).to.equal(FORGE_THEME_LIGHT_TOKENS.primary);
    });
  });

  describe('exportForgeThemeRelativeCss', () => {
    const darkTheme = (): ForgeTheme =>
      regenerateForgeTheme(
        createForgeTheme({
          polarity: 'dark',
          // A vivid seed on purpose: scaling chroma in OkLCh can leave the sRGB
          // gamut, which is where a naive formula stops reproducing the value.
          variants: { dark: { seeds: { ...forgeDarkSeeds(), primary: '#b8f21a', secondary: '#ff2bd6' } } }
        })
      );

    it('should derive every container from its accent', () => {
      const css = exportForgeThemeRelativeCss(darkTheme());

      for (const level of ['minimum', 'low', '', 'high']) {
        const token = level ? `primary-container-${level}` : 'primary-container';
        const line = css.split('\n').find(l => l.includes(`--forge-theme-${token}:`))!;
        expect(line, token).to.include('oklch(from var(--forge-theme-primary)');
      }
    });

    it('should derive the surface and outline ramps from surface', () => {
      const css = exportForgeThemeRelativeCss(darkTheme());

      expect(css).to.match(/--forge-theme-surface-container:\s*oklch\(from var\(--forge-theme-surface\)/);
      expect(css).to.match(/--forge-theme-outline:\s*oklch\(from var\(--forge-theme-surface\)/);
    });

    it('should leave the inks literal', () => {
      const css = exportForgeThemeRelativeCss(darkTheme());

      // An `on-` colour is the result of an iterative contrast search and the
      // `text-` scale is pure ink at a fixed alpha. Neither is a transform.
      for (const line of css.split('\n')) {
        if (/--forge-theme-(on-|text-)/.test(line)) {
          expect(line, line).to.not.include('oklch(from');
        }
      }
    });

    it('should leave the seeds and the shadow literal', () => {
      const css = exportForgeThemeRelativeCss(darkTheme());

      expect(css).to.include('--forge-theme-primary: #b8f21a;');
      expect(css).to.not.match(/--forge-theme-surface-bright-shadow:\s*oklch/);
    });

    it('should carry the global knobs', () => {
      const theme = { ...darkTheme(), knobs: { ...emptyForgeThemeKnobs(), shapeFactor: 3 } };

      expect(exportForgeThemeRelativeCss(theme)).to.include('--forge-shape-factor: 3;');
    });

    it('should say what it needs and what it did', () => {
      const css = exportForgeThemeRelativeCss(darkTheme());

      // The failure mode is silent on an old engine, so the caveat ships with it.
      expect(css).to.include('Chrome 119+');
      expect(css).to.match(/\d+ of \d+ tokens derive/);
    });

    // The point of the whole format: every formula has to resolve to the colour
    // the generator produced, or the export is lying about what was previewed.
    // Compared through a canvas so the comparison is on colour rather than on
    // whether the browser echoed oklch() or rgb().
    it('should resolve to exactly the generated colors', () => {
      const theme = darkTheme();
      const flat = parseDeclarations(exportForgeThemeCss(theme));
      const relative = parseDeclarations(exportForgeThemeRelativeCss(theme));

      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      const context = canvas.getContext('2d')!;
      const host = document.createElement('div');
      host.setAttribute(
        'style',
        Object.entries(flat)
          .map(([k, v]) => `${k}:${v}`)
          .join(';')
      );
      document.body.appendChild(host);
      const probe = document.createElement('div');
      host.appendChild(probe);

      const pixel = (color: string): number[] => {
        probe.style.color = '';
        probe.style.color = color;
        context.clearRect(0, 0, 1, 1);
        context.fillStyle = getComputedStyle(probe).color;
        context.fillRect(0, 0, 1, 1);
        return [...context.getImageData(0, 0, 1, 1).data].slice(0, 3);
      };

      const formulas = Object.entries(relative).filter(([, value]) => value.startsWith('oklch(from'));
      const mismatches: string[] = [];
      for (const [token, expression] of formulas) {
        const got = pixel(expression);
        const want = pixel(flat[token]);
        if (got.some((channel, i) => Math.abs(channel - want[i]) > 1)) {
          mismatches.push(`${token}: ${got} vs ${want}`);
        }
      }
      host.remove();

      expect(formulas.length, 'nothing was derived, so nothing was proven').to.be.greaterThan(30);
      expect(mismatches, mismatches.join('; ')).to.be.empty;
    });
  });

  describe('setForgeThemePolarity', () => {
    it('should default a new theme to the light surface', () => {
      expect(createForgeTheme().polarity).to.equal('light');
    });

    it('should swap which variant is active without deriving anything', () => {
      const dark = setForgeThemePolarity(createForgeTheme(), 'dark');

      expect(dark.polarity).to.equal('dark');
      expect(dark.mode).to.equal('patch');
      // Nothing derived: it hands over the dark starting point and waits.
      expect(activeForgeThemeVariant(dark).tokens).to.deep.equal({});
      expect(activeForgeThemeVariant(dark).seeds).to.deep.equal(forgeDarkSeeds());
    });

    it('should leave each variant alone', () => {
      const light = createForgeTheme({ tokens: { primary: '#ff00ff' }, seeds: { primary: '#ff00ff' } });

      const dark = setForgeThemePolarity(light, 'dark');

      expect(dark.variants.light.tokens.primary).to.equal('#ff00ff');
      expect(dark.variants.dark.tokens).to.deep.equal({});
      expect(activeForgeThemeVariant(dark).seeds!.primary).to.equal(forgeDarkSeeds().primary);
    });

    it('should not re-seed a variant that has already been authored', () => {
      const authored = setForgeThemePolarity(
        createForgeTheme({ variants: { dark: { seeds: { primary: '#00ffcc' } } } }),
        'dark'
      );

      expect(activeForgeThemeVariant(authored).seeds!.primary).to.equal('#00ffcc');
    });

    it('should round trip, restoring what each side held', () => {
      const authored = createForgeTheme({ seeds: { primary: '#ff00ff' } });
      const dark = setForgeThemePolarity(authored, 'dark');
      const back = setForgeThemePolarity(dark, 'light');

      expect(back.polarity).to.equal('light');
      expect(activeForgeThemeVariant(back).seeds!.primary).to.equal('#ff00ff');
    });

    it('should be a no-op for the polarity already active', () => {
      const theme = createForgeTheme();
      expect(setForgeThemePolarity(theme, 'light')).to.equal(theme);
    });

    it('should migrate a theme saved before the palette owned the polarity', () => {
      // The polarity used to be read off the emit mode, so an older dark theme
      // has no generator.mode at all. This is the import path.
      const legacy = normalizeForgeTheme({ mode: 'dark', generator: { targetContrast: 5 } })!;

      expect(legacy.polarity).to.equal('dark');
      expect(legacy.generator.targetContrast).to.equal(5);
    });

    it('should not infer a dark polarity for a light or patch theme', () => {
      expect(normalizeForgeTheme({ mode: 'patch' })!.polarity).to.equal('light');
      expect(normalizeForgeTheme({ mode: 'light' })!.polarity).to.equal('light');
    });

    it('should prefer an explicit polarity over the emit mode', () => {
      const explicit = normalizeForgeTheme({ mode: 'dark', generator: { mode: 'light' } })!;

      expect(explicit.polarity).to.equal('light');
    });
  });
});
