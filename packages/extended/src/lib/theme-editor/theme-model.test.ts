import { expect } from '@esm-bundle/chai';
import {
  FORGE_THEME_EXPORT_VERSION,
  FORGE_THEME_PREVIEW_SELECTORS,
  buildForgeThemePreviewCss,
  createForgeTheme,
  emptyForgeTheme,
  emptyForgeThemeKnobs,
  exportForgeTheme,
  exportForgeThemeCss,
  exportForgeThemeJson,
  exportForgeThemeScss,
  normalizeForgeTheme,
  parseForgeThemeJson,
  regenerateForgeTheme,
  resolveForgeThemeKnobs,
  resolveForgeThemeTokens
} from './theme-model';
import { FORGE_THEME_DARK_TOKENS, FORGE_THEME_LIGHT_TOKENS } from './theme-tokens';

describe('ThemeEditor theme model', () => {
  describe('createForgeTheme', () => {
    it('should produce a complete theme from nothing', () => {
      const theme = createForgeTheme();
      expect(theme.name).to.equal('Untitled theme');
      expect(theme.mode).to.equal('patch');
      expect(theme.tokens).to.deep.equal({});
      expect(theme.knobs).to.deep.equal(emptyForgeThemeKnobs());
      expect(theme.seeds).to.be.null;
      expect(theme.generator).to.deep.equal({ targetContrast: 7, pureOnColors: true });
    });

    it('should keep the overrides it is given', () => {
      const theme = createForgeTheme({ name: 'Brandy', mode: 'dark', tokens: { primary: '#ff0000' } });
      expect(theme.name).to.equal('Brandy');
      expect(theme.mode).to.equal('dark');
      expect(theme.tokens).to.deep.equal({ primary: '#ff0000' });
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
      expect(normalizeForgeTheme({ mode: 'light' })!.mode).to.equal('light');
    });

    it('should drop token values that are not non-empty strings', () => {
      const theme = normalizeForgeTheme({
        tokens: { primary: '  #ff0000  ', secondary: '', tertiary: 12, brand: null }
      })!;
      expect(theme.tokens).to.deep.equal({ primary: '#ff0000' });
    });

    it('should tolerate a tokens value that is not an object', () => {
      expect(normalizeForgeTheme({ tokens: 'nope' })!.tokens).to.deep.equal({});
      expect(normalizeForgeTheme({ tokens: null })!.tokens).to.deep.equal({});
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
      expect(normalizeForgeTheme({ seeds: { primary: ' #f00 ', secondary: 9 } })!.seeds).to.deep.equal({
        primary: '#f00'
      });
      expect(normalizeForgeTheme({ seeds: {} })!.seeds).to.be.null;
      expect(normalizeForgeTheme({ seeds: [] })!.seeds).to.be.null;
      expect(normalizeForgeTheme({ seeds: 'red' })!.seeds).to.be.null;
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

  describe('buildForgeThemePreviewCss', () => {
    it('should declare on every conventional theme carrier', () => {
      const css = buildForgeThemePreviewCss(createForgeTheme({ tokens: { primary: '#ff0000' } }));
      for (const selector of FORGE_THEME_PREVIEW_SELECTORS) {
        expect(css).to.include(selector);
      }
    });

    it('should mark every declaration important', () => {
      const css = buildForgeThemePreviewCss(createForgeTheme({ tokens: { primary: '#ff0000' } }));
      expect(css).to.include('--forge-theme-primary: #ff0000 !important;');
    });

    it('should cover the theme toggle attribute as well as the class conventions', () => {
      const css = buildForgeThemePreviewCss(createForgeTheme({ tokens: { primary: '#ff0000' } }));
      expect(css).to.include('[data-forge-theme="dark"]');
      expect(css).to.include('.dark-theme');
    });

    it('should honour a custom selector list', () => {
      const css = buildForgeThemePreviewCss(createForgeTheme({ tokens: { primary: '#ff0000' } }), ['.host-theme']);
      expect(css).to.include('.host-theme {');
      expect(css).to.not.include(':root');
    });

    it('should fall back to the default selectors for an empty list', () => {
      const css = buildForgeThemePreviewCss(createForgeTheme({ tokens: { primary: '#f00' } }), []);
      expect(css).to.include(':root');
    });

    it('should emit no rule block when the theme sets nothing', () => {
      const css = buildForgeThemePreviewCss(createForgeTheme());
      expect(css).to.not.include('{');
    });

    it('should include the knob declarations', () => {
      const css = buildForgeThemePreviewCss(createForgeTheme({ knobs: { ...emptyForgeThemeKnobs(), shapeFactor: 0 } }));
      expect(css).to.include('--forge-shape-factor: 0 !important;');
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
      expect(result.theme!.tokens.primary).to.equal('#ff0000');
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
      expect(result.theme!.tokens).to.deep.equal({ primary: '#ff0000', surface: '#ffffff' });
    });

    it('should drop unknown token names rather than emitting dead properties', () => {
      const result = parseForgeThemeJson(
        '{"tokens":{"primary":"#ff0000","made-up":"#000","also-made-up":"#000","third":"#000","fourth":"#000"}}'
      );
      expect(result.theme!.tokens).to.deep.equal({ primary: '#ff0000' });
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
      expect(Object.keys(regenerated.tokens)).to.have.lengthOf(101);
      expect(regenerated.tokens.primary).to.equal('#ff0000');
      expect(regenerated.seeds).to.deep.equal({ primary: '#ff0000' });
    });

    it('should move a patch theme onto a full light set', () => {
      expect(regenerateForgeTheme(createForgeTheme()).mode).to.equal('light');
    });

    it('should keep a dark theme dark', () => {
      const regenerated = regenerateForgeTheme(createForgeTheme({ mode: 'dark' }));
      expect(regenerated.mode).to.equal('dark');
      expect(regenerated.tokens.surface).to.equal(FORGE_THEME_DARK_TOKENS.surface);
    });

    it('should accept seeds passed in directly', () => {
      const regenerated = regenerateForgeTheme(createForgeTheme(), { primary: '#00ff00' });
      expect(regenerated.tokens.primary).to.equal('#00ff00');
      expect(regenerated.seeds).to.deep.equal({ primary: '#00ff00' });
    });

    it('should generate the stock palette when there are no seeds', () => {
      const regenerated = regenerateForgeTheme(createForgeTheme());
      expect(regenerated.seeds).to.be.null;
      expect(regenerated.tokens.primary).to.equal(FORGE_THEME_LIGHT_TOKENS.primary);
    });
  });
});
