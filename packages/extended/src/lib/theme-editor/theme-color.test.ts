import { expect } from '@esm-bundle/chai';
import {
  LAB_KN,
  brighten,
  contrast,
  contrastOf,
  darken,
  flatten,
  isValidColor,
  labToRgb,
  luminance,
  mixLrgb,
  oklchToRgb,
  parseColor,
  rgbToLab,
  rgbToOklch,
  scaleOklch,
  shade,
  tint,
  toCssColor,
  toHex,
  withLightness,
  type Rgba
} from './theme-color';

const rgba = (r: number, g: number, b: number, a = 1): Rgba => [r, g, b, a];

describe('ThemeEditor color math', () => {
  describe('parseColor', () => {
    it('should parse six digit hex', () => {
      expect(parseColor('#3F51B5')).to.deep.equal([63, 81, 181, 1]);
    });

    it('should parse three digit hex', () => {
      expect(parseColor('#abc')).to.deep.equal([170, 187, 204, 1]);
    });

    it('should parse four digit hex with alpha', () => {
      const parsed = parseColor('#0000000f');
      expect(parsed![0]).to.equal(0);
      expect(parsed![3]).to.be.closeTo(0.0588, 0.001);
    });

    it('should parse eight digit hex with alpha', () => {
      const parsed = parseColor('#11223380');
      expect(parsed!.slice(0, 3)).to.deep.equal([17, 34, 51]);
      expect(parsed![3]).to.be.closeTo(0.502, 0.001);
    });

    it('should reject hex of an unsupported length', () => {
      expect(parseColor('#12345')).to.be.null;
    });

    it('should reject hex with non-hex digits', () => {
      expect(parseColor('#zzzzzz')).to.be.null;
      expect(parseColor('#zzz')).to.be.null;
    });

    it('should parse the css color keywords it supports', () => {
      expect(parseColor('white')).to.deep.equal([255, 255, 255, 1]);
      expect(parseColor(' BLACK ')).to.deep.equal([0, 0, 0, 1]);
      expect(parseColor('transparent')).to.deep.equal([0, 0, 0, 0]);
    });

    it('should parse rgb() and rgba()', () => {
      expect(parseColor('rgb(1, 2, 3)')).to.deep.equal([1, 2, 3, 1]);
      expect(parseColor('rgba(0, 0, 0, 0.87)')).to.deep.equal([0, 0, 0, 0.87]);
    });

    it('should parse the space and slash rgb syntax', () => {
      expect(parseColor('rgb(10 20 30 / 0.5)')).to.deep.equal([10, 20, 30, 0.5]);
    });

    it('should parse percentage channels and clamp alpha', () => {
      expect(parseColor('rgb(100%, 0%, 50%)')).to.deep.equal([255, 0, 128, 1]);
      expect(parseColor('rgba(0, 0, 0, 4)')).to.deep.equal([0, 0, 0, 1]);
    });

    it('should reject rgb() with too few channels', () => {
      expect(parseColor('rgb(1, 2)')).to.be.null;
    });

    it('should reject rgb() with non-numeric channels', () => {
      expect(parseColor('rgb(a, b, c)')).to.be.null;
    });

    it('should parse channel arrays', () => {
      expect(parseColor([300, -4, 12])).to.deep.equal([255, 0, 12, 1]);
      expect(parseColor([1, 2, 3, 0.25])).to.deep.equal([1, 2, 3, 0.25]);
    });

    it('should reject short channel arrays', () => {
      expect(parseColor([1, 2])).to.be.null;
    });

    it('should reject values that are not colors', () => {
      expect(parseColor('not-a-color')).to.be.null;
      expect(parseColor(null)).to.be.null;
      expect(parseColor(undefined)).to.be.null;
    });
  });

  describe('isValidColor', () => {
    it('should accept colors and reject everything else', () => {
      expect(isValidColor('#fff')).to.be.true;
      expect(isValidColor('rgba(0, 0, 0, 0.5)')).to.be.true;
      expect(isValidColor('nope')).to.be.false;
    });
  });

  describe('formatting', () => {
    it('should format as hex, discarding alpha', () => {
      expect(toHex(rgba(63, 81, 181, 0.5))).to.equal('#3f51b5');
    });

    it('should format opaque colors as hex', () => {
      expect(toCssColor(rgba(255, 255, 255))).to.equal('#ffffff');
    });

    it('should format translucent colors as rgba', () => {
      expect(toCssColor(rgba(0, 0, 0, 0.87))).to.equal('rgba(0, 0, 0, 0.87)');
    });

    it('should treat a missing alpha as opaque', () => {
      expect(toCssColor([1, 2, 3] as unknown as Rgba)).to.equal('#010203');
    });
  });

  describe('CIELab', () => {
    it('should round trip a color through Lab', () => {
      const original = rgba(63, 81, 181);
      const round = labToRgb(rgbToLab(original));
      expect(round.slice(0, 3)).to.deep.equal([63, 81, 181]);
    });

    it('should report pure white as L* 100', () => {
      expect(rgbToLab(rgba(255, 255, 255))[0]).to.be.closeTo(100, 0.01);
    });

    it('should report pure black as L* 0', () => {
      expect(rgbToLab(rgba(0, 0, 0))[0]).to.be.closeTo(0, 0.01);
    });

    it('should treat NaN chroma channels as neutral', () => {
      const grey = labToRgb([53.59, NaN, NaN]);
      expect(grey[0]).to.equal(grey[1]);
      expect(grey[1]).to.equal(grey[2]);
    });
  });

  describe('OkLCh', () => {
    it('should round trip a color through OkLCh', () => {
      const round = oklchToRgb(rgbToOklch(rgba(61, 90, 254)));
      expect(round.slice(0, 3)).to.deep.equal([61, 90, 254]);
    });

    it('should report a neutral color as hueless', () => {
      expect(Number.isNaN(rgbToOklch(rgba(128, 128, 128))[2])).to.be.true;
    });

    it('should render a hueless color as a neutral', () => {
      const neutral = oklchToRgb([0.6, 0.2, NaN]);
      expect(neutral[0]).to.equal(neutral[1]);
      expect(neutral[1]).to.equal(neutral[2]);
    });
  });

  describe('lightness operations', () => {
    it('should brighten by shifting Lab lightness by the chroma-js step', () => {
      const base = rgba(63, 81, 181);
      const brightened = brighten(base, 1);
      expect(rgbToLab(brightened)[0] - rgbToLab(base)[0]).to.be.closeTo(LAB_KN, 1);
    });

    it('should darken in the opposite direction', () => {
      const base = rgba(63, 81, 181);
      expect(rgbToLab(darken(base, 1))[0]).to.be.lessThan(rgbToLab(base)[0]);
    });

    it('should default the brighten amount to one step', () => {
      expect(brighten(rgba(63, 81, 181))).to.deep.equal(brighten(rgba(63, 81, 181), 1));
    });

    it('should default the darken amount to one step', () => {
      expect(darken(rgba(63, 81, 181))).to.deep.equal(darken(rgba(63, 81, 181), 1));
    });

    it('should set an absolute lightness', () => {
      expect(rgbToLab(withLightness(rgba(63, 81, 181), 50))[0]).to.be.closeTo(50, 0.5);
    });

    it('should clamp an out of range lightness', () => {
      expect(rgbToLab(withLightness(rgba(63, 81, 181), 500))[0]).to.be.at.least(96);
      expect(rgbToLab(withLightness(rgba(63, 81, 181), -500))[0]).to.be.at.most(6);
    });

    it('should damp chroma toward grey', () => {
      const damped = withLightness(rgba(63, 81, 181), 50, 0);
      expect(damped[0]).to.equal(damped[2]);
    });
  });

  describe('mixing', () => {
    it('should mix in linear light rgb', () => {
      expect(mixLrgb(rgba(0, 0, 0), rgba(255, 255, 255), 1).slice(0, 3)).to.deep.equal([255, 255, 255]);
    });

    it('should default to an even mix', () => {
      expect(mixLrgb(rgba(0, 0, 0), rgba(255, 255, 255))[0]).to.equal(180);
    });

    it('should tint toward white', () => {
      expect(luminance(tint(rgba(63, 81, 181), 0.9))).to.be.greaterThan(luminance(rgba(63, 81, 181)));
    });

    it('should shade toward black', () => {
      expect(luminance(shade(rgba(63, 81, 181), 0.9))).to.be.lessThan(luminance(rgba(63, 81, 181)));
    });

    it('should default the tint and shade fraction', () => {
      expect(tint(rgba(0, 0, 0))).to.deep.equal(mixLrgb(rgba(0, 0, 0), rgba(255, 255, 255), 0.5));
      expect(shade(rgba(255, 255, 255))).to.deep.equal(mixLrgb(rgba(255, 255, 255), rgba(0, 0, 0), 0.5));
    });
  });

  describe('scaleOklch', () => {
    it('should include both endpoints', () => {
      const steps = scaleOklch(rgba(0, 0, 0), rgba(255, 255, 255), 4);
      expect(steps).to.have.lengthOf(4);
      expect(toHex(steps[0])).to.equal('#000000');
      expect(toHex(steps[3])).to.equal('#ffffff');
    });

    it('should return the start color when asked for a single sample', () => {
      expect(toHex(scaleOklch(rgba(63, 81, 181), rgba(255, 255, 255), 1)[0])).to.equal('#3f51b5');
    });

    it('should interpolate hue the short way round when the delta exceeds 180', () => {
      // Red (~29 deg) to blue (~264 deg) is 235 deg forward, so the short path runs backwards
      // through magenta rather than forwards through green.
      const middle = rgbToOklch(scaleOklch(rgba(255, 0, 0), rgba(0, 0, 255), 3)[1]);
      expect(middle[2]).to.be.greaterThan(264);
    });

    it('should interpolate hue the short way round when the delta is below -180', () => {
      const middle = rgbToOklch(scaleOklch(rgba(0, 0, 255), rgba(255, 0, 0), 3)[1]);
      expect(middle[2]).to.be.greaterThan(264);
    });

    it('should keep a hueless run hueless', () => {
      const steps = scaleOklch(rgba(0, 0, 0), rgba(128, 128, 128), 3);
      expect(steps[1][0]).to.equal(steps[1][2]);
    });

    it('should adopt the defined hue when only one endpoint has one', () => {
      const fromNeutral = rgbToOklch(scaleOklch(rgba(128, 128, 128), rgba(255, 0, 0), 3)[1]);
      const toNeutral = rgbToOklch(scaleOklch(rgba(255, 0, 0), rgba(128, 128, 128), 3)[1]);
      expect(Number.isNaN(fromNeutral[2])).to.be.false;
      expect(Number.isNaN(toNeutral[2])).to.be.false;
    });
  });

  describe('contrast', () => {
    it('should report the maximum ratio for black on white', () => {
      expect(contrast(rgba(0, 0, 0), rgba(255, 255, 255))).to.be.closeTo(21, 0.01);
    });

    it('should report one for a color against itself', () => {
      expect(contrast(rgba(63, 81, 181), rgba(63, 81, 181))).to.equal(1);
    });

    it('should measure css color strings', () => {
      expect(contrastOf('#000000', '#ffffff')).to.be.closeTo(21, 0.01);
    });

    it('should return null when either css value is not a color', () => {
      expect(contrastOf('nope', '#ffffff')).to.be.null;
      expect(contrastOf('#ffffff', 'nope')).to.be.null;
    });
  });

  describe('flatten', () => {
    it('should leave an opaque color alone', () => {
      expect(flatten(rgba(1, 2, 3), rgba(255, 255, 255))).to.deep.equal([1, 2, 3, 1]);
    });

    it('should composite a translucent color onto its backdrop', () => {
      expect(flatten(rgba(0, 0, 0, 0.5), rgba(255, 255, 255))).to.deep.equal([128, 128, 128, 1]);
    });

    it('should treat a missing alpha as opaque', () => {
      expect(flatten([10, 20, 30] as unknown as Rgba, rgba(0, 0, 0))).to.deep.equal([10, 20, 30, 1]);
    });
  });
});
