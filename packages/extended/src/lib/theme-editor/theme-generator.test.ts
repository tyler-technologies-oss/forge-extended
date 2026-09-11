import { expect } from '@esm-bundle/chai';
import { contrastOf, parseColor } from './theme-color';
import {
  FORGE_THEME_SEED_KEYS,
  accessibleTextColor,
  auditForgeThemeContrast,
  bestPureOnColor,
  forgeDarkSeeds,
  forgeLightSeeds,
  generateForgeTheme
} from './theme-generator';
import {
  FORGE_THEME_DARK_TOKENS,
  FORGE_THEME_LIGHT_TOKENS,
  FORGE_THEME_TOKEN_GROUPS,
  FORGE_THEME_TOKEN_KINDS,
  FORGE_THEME_TOKEN_NAMES
} from './theme-tokens';

describe('ThemeEditor token catalog', () => {
  it('should hold the 101 Forge theme tokens', () => {
    expect(FORGE_THEME_TOKEN_NAMES).to.have.lengthOf(101);
  });

  it('should resolve the same token names for light and dark', () => {
    expect(Object.keys(FORGE_THEME_DARK_TOKENS)).to.deep.equal([...FORGE_THEME_TOKEN_NAMES]);
  });

  it('should place every token in exactly one display group', () => {
    const grouped = FORGE_THEME_TOKEN_GROUPS.flatMap(group => group.tokens);
    expect(grouped).to.have.lengthOf(101);
    expect(new Set(grouped).size).to.equal(101);
    for (const token of FORGE_THEME_TOKEN_NAMES) {
      expect(grouped).to.include(token);
    }
  });

  it('should classify every token but the shadow as a color', () => {
    const shadows = FORGE_THEME_TOKEN_NAMES.filter(token => FORGE_THEME_TOKEN_KINDS[token] === 'shadow');
    expect(shadows).to.deep.equal(['surface-bright-shadow']);
  });

  it('should hold a parseable color for every color token', () => {
    for (const token of FORGE_THEME_TOKEN_NAMES) {
      if (FORGE_THEME_TOKEN_KINDS[token] !== 'color') {
        continue;
      }
      expect(parseColor(FORGE_THEME_LIGHT_TOKENS[token]), token).to.not.be.null;
      expect(parseColor(FORGE_THEME_DARK_TOKENS[token]), token).to.not.be.null;
    }
  });
});

describe('ThemeEditor palette generator', () => {
  describe('accessibleTextColor', () => {
    it('should find an ink that clears the target against a light background', () => {
      const ink = accessibleTextColor('#ffffff', 7);
      expect(contrastOf('#ffffff', ink)!).to.be.at.least(7);
    });

    it('should find an ink that clears the target against a dark background', () => {
      const ink = accessibleTextColor('#101010', 7);
      expect(contrastOf('#101010', ink)!).to.be.at.least(7);
    });

    it('should return the best available ink when the target is unreachable', () => {
      // Nothing contrasts 7:1 with Forge's own mid-lightness warning orange; the
      // best any color manages is about 4.66:1.
      const ink = accessibleTextColor('#d14900', 7);
      const ratio = contrastOf('#d14900', ink)!;
      expect(ratio).to.be.lessThan(7);
      expect(ratio).to.be.at.least(4.5);
    });

    it('should try the other lightness direction when the preferred one falls short', () => {
      // A mid-lightness background whose preferred (darker) direction cannot reach
      // 21:1, so the brighter direction has to be tried and wins.
      const ink = accessibleTextColor('#767676', 21);
      expect(ink).to.be.oneOf(['#000000', '#ffffff']);
    });

    it('should reach pure black or white when the target is the maximum ratio', () => {
      expect(accessibleTextColor('#ffffff', 21)).to.equal('#000000');
      expect(accessibleTextColor('#000000', 21)).to.equal('#ffffff');
    });

    it('should fall back to black for a value that is not a color', () => {
      expect(accessibleTextColor('not-a-color', 7)).to.equal('#000000');
    });

    it('should find an ink for every shipped Forge color token', () => {
      for (const token of FORGE_THEME_TOKEN_NAMES) {
        if (FORGE_THEME_TOKEN_KINDS[token] !== 'color') {
          continue;
        }
        expect(parseColor(accessibleTextColor(FORGE_THEME_LIGHT_TOKENS[token], 7)), token).to.not.be.null;
        expect(parseColor(accessibleTextColor(FORGE_THEME_DARK_TOKENS[token], 4.5)), token).to.not.be.null;
      }
    });
  });

  describe('bestPureOnColor', () => {
    it('should pick black on a light background', () => {
      expect(bestPureOnColor('#ffffff')).to.equal('#000000');
    });

    it('should pick white on a dark background', () => {
      expect(bestPureOnColor('#121212')).to.equal('#ffffff');
    });

    it('should fall back to black for a value that is not a color', () => {
      expect(bestPureOnColor('nope')).to.equal('#000000');
    });
  });

  describe('seeds', () => {
    it('should expose a seed for every seed key', () => {
      for (const key of FORGE_THEME_SEED_KEYS) {
        expect(forgeLightSeeds()[key], key).to.be.a('string');
        expect(forgeDarkSeeds()[key], key).to.be.a('string');
      }
    });

    it('should read the light seeds from the light token set', () => {
      expect(forgeLightSeeds().primary).to.equal(FORGE_THEME_LIGHT_TOKENS.primary);
    });

    it('should read the dark seeds from the dark token set', () => {
      expect(forgeDarkSeeds().primary).to.equal(FORGE_THEME_DARK_TOKENS.primary);
    });
  });

  describe('generateForgeTheme', () => {
    it('should generate the complete token set', () => {
      const tokens = generateForgeTheme();
      expect(Object.keys(tokens)).to.have.lengthOf(101);
      for (const token of FORGE_THEME_TOKEN_NAMES) {
        expect(tokens[token], token).to.be.a('string');
      }
    });

    it('should land back near the Forge light defaults when seeded with them', () => {
      const tokens = generateForgeTheme(forgeLightSeeds());
      expect(tokens.primary).to.equal(FORGE_THEME_LIGHT_TOKENS.primary);
      expect(tokens.surface).to.equal(FORGE_THEME_LIGHT_TOKENS.surface);
      expect(tokens['text-high']).to.equal(FORGE_THEME_LIGHT_TOKENS['text-high']);
      expect(tokens['on-primary']).to.equal(FORGE_THEME_LIGHT_TOKENS['on-primary']);
    });

    it('should carry over tokens it does not compute', () => {
      expect(generateForgeTheme()['surface-bright-shadow']).to.equal(FORGE_THEME_LIGHT_TOKENS['surface-bright-shadow']);
    });

    it('should ramp dark containers darker than the accent, not lighter', () => {
      const tokens = generateForgeTheme(forgeDarkSeeds(), { mode: 'dark' });
      const accent = contrastOf('#000000', tokens.primary)!;
      const containerHigh = contrastOf('#000000', tokens['primary-container-high'])!;
      const containerMinimum = contrastOf('#000000', tokens['primary-container-minimum'])!;
      expect(containerHigh).to.be.lessThan(accent);
      expect(containerMinimum).to.be.lessThan(containerHigh);
    });

    it('should ramp light containers lighter than the accent', () => {
      const tokens = generateForgeTheme(forgeLightSeeds(), { mode: 'light' });
      const accent = contrastOf('#ffffff', tokens.primary)!;
      const containerMinimum = contrastOf('#ffffff', tokens['primary-container-minimum'])!;
      expect(containerMinimum).to.be.lessThan(accent);
    });

    it('should land back near the Forge dark defaults when seeded with them', () => {
      const tokens = generateForgeTheme(forgeDarkSeeds(), { mode: 'dark' });
      expect(tokens.primary).to.equal(FORGE_THEME_DARK_TOKENS.primary);
      expect(tokens.surface).to.equal(FORGE_THEME_DARK_TOKENS.surface);
      expect(tokens['text-high']).to.equal(FORGE_THEME_DARK_TOKENS['text-high']);
    });

    it('should derive an ink for the inverse surface against the inverse surface', () => {
      const tokens = generateForgeTheme();
      expect(contrastOf(tokens['surface-inverse'], tokens['on-surface-inverse'])!).to.be.at.least(4.5);
    });

    it('should honour the seeds it is given', () => {
      const tokens = generateForgeTheme({ primary: '#ff0000', brand: '#00ff00' });
      expect(tokens.primary).to.equal('#ff0000');
      expect(tokens.brand).to.equal('#00ff00');
    });

    it('should ignore blank seeds', () => {
      const tokens = generateForgeTheme({ primary: '   ', secondary: undefined });
      expect(tokens.primary).to.equal(FORGE_THEME_LIGHT_TOKENS.primary);
    });

    it('should skip a seed that is not a color', () => {
      const tokens = generateForgeTheme({ primary: 'not-a-color', brand: 'also-not', surface: 'nope' });
      expect(tokens.primary).to.equal(FORGE_THEME_LIGHT_TOKENS.primary);
      expect(tokens.brand).to.equal(FORGE_THEME_LIGHT_TOKENS.brand);
      expect(tokens.surface).to.equal(FORGE_THEME_LIGHT_TOKENS.surface);
    });

    it('should use derived accent inks when pure on-colors are turned off', () => {
      const tokens = generateForgeTheme({ surface: '#ffffff' }, { pureOnColors: false, targetContrast: 7 });
      expect(tokens['on-surface']).to.not.equal('#000000');
      expect(contrastOf('#ffffff', tokens['on-surface'])!).to.be.at.least(7);
    });

    it('should default an unusable target contrast to seven', () => {
      const tokens = generateForgeTheme(null, { targetContrast: 0 });
      expect(tokens['on-primary-container-high']).to.be.a('string');
    });

    it('should not emit an unknown token name', () => {
      for (const token of Object.keys(generateForgeTheme(forgeDarkSeeds(), { mode: 'dark' }))) {
        expect(FORGE_THEME_TOKEN_NAMES, token).to.include(token);
      }
    });
  });

  describe('auditForgeThemeContrast', () => {
    it('should measure every on-token against its background, worst first', () => {
      const report = auditForgeThemeContrast(FORGE_THEME_LIGHT_TOKENS);
      expect(report.length).to.be.greaterThan(20);
      for (let i = 1; i < report.length; i++) {
        expect(report[i].ratio).to.be.at.least(report[i - 1].ratio);
      }
    });

    it('should name both sides of each pair', () => {
      const entry = auditForgeThemeContrast(FORGE_THEME_LIGHT_TOKENS).find(item => item.foreground === 'on-primary');
      expect(entry!.background).to.equal('primary');
      expect(entry!.ratio).to.be.greaterThan(1);
    });

    it('should skip an on-token with no matching background', () => {
      const report = auditForgeThemeContrast({ 'on-nothing': '#000000' });
      expect(report).to.be.empty;
    });

    it('should skip a background that is not a color', () => {
      const report = auditForgeThemeContrast({
        'surface-bright-shadow': '0 0 0 red',
        'on-surface-bright-shadow': '#000000'
      });
      expect(report).to.be.empty;
    });

    it('should skip pairs it cannot parse', () => {
      expect(auditForgeThemeContrast({ primary: 'nope', 'on-primary': '#fff' })).to.be.empty;
      expect(auditForgeThemeContrast({ primary: '#fff', 'on-primary': 'nope' })).to.be.empty;
    });

    it('should flatten a translucent foreground onto its background', () => {
      const report = auditForgeThemeContrast({ primary: '#ffffff', 'on-primary': 'rgba(0, 0, 0, 0.5)' });
      expect(report[0].ratio).to.be.closeTo(3.95, 0.2);
    });
  });
});
