import MaskedPattern from './pattern.js';
import '../core/change-details.js';
import { normalizePrepare } from '../core/utils.js';
import IMask from '../core/holder.js';
import '../_rollupPluginBabelHelpers-6b3bd404.js';
import './base.js';
import '../core/continuous-tail-details.js';
import './pattern/input-definition.js';
import './factory.js';
import './pattern/fixed-definition.js';
import './pattern/chunk-tail-details.js';
import './pattern/cursor.js';
import './regexp.js';

/** Pattern which accepts ranges */
class MaskedRange extends MaskedPattern {
  /**
    Optionally sets max length of pattern.
    Used when pattern length is longer then `to` param length. Pads zeros at start in this case.
  */

  /** Min bound */

  /** Max bound */

  /** */

  get _matchFrom() {
    return this.maxLength - String(this.from).length;
  }

  /**
    @override
  */
  _update(opts) {
    // TODO type
    opts = Object.assign({
      to: this.to || 0,
      from: this.from || 0,
      maxLength: this.maxLength || 0
    }, opts);
    let maxLength = String(opts.to).length;
    if (opts.maxLength != null) maxLength = Math.max(maxLength, opts.maxLength);
    opts.maxLength = maxLength;
    const fromStr = String(opts.from).padStart(maxLength, '0');
    const toStr = String(opts.to).padStart(maxLength, '0');
    let sameCharsCount = 0;
    while (sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount]) ++sameCharsCount;
    opts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, '\\0') + '0'.repeat(maxLength - sameCharsCount);
    super._update(opts);
  }

  /**
    @override
  */
  get isComplete() {
    return super.isComplete && Boolean(this.value);
  }
  boundaries(str) {
    let minstr = '';
    let maxstr = '';
    const [, placeholder, num] = str.match(/^(\D*)(\d*)(\D*)/) || [];
    if (num) {
      minstr = '0'.repeat(placeholder.length) + num;
      maxstr = '9'.repeat(placeholder.length) + num;
    }
    minstr = minstr.padEnd(this.maxLength, '0');
    maxstr = maxstr.padEnd(this.maxLength, '9');
    return [minstr, maxstr];
  }

  // TODO str is a single char everytime
  /**
    @override
  */
  doPrepare(ch) {
    let flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let details;
    [ch, details] = normalizePrepare(super.doPrepare(ch.replace(/\D/g, ''), flags));
    if (!this.autofix || !ch) return ch;
    const fromStr = String(this.from).padStart(this.maxLength, '0');
    const toStr = String(this.to).padStart(this.maxLength, '0');
    let nextVal = this.value + ch;
    if (nextVal.length > this.maxLength) return '';
    const [minstr, maxstr] = this.boundaries(nextVal);
    if (Number(maxstr) < this.from) return fromStr[nextVal.length - 1];
    if (Number(minstr) > this.to) {
      if (this.autofix === 'pad' && nextVal.length < this.maxLength) {
        return ['', details.aggregate(this.append(fromStr[nextVal.length - 1] + ch, flags))];
      }
      return toStr[nextVal.length - 1];
    }
    return ch;
  }

  /**
    @override
  */
  doValidate() {
    const str = this.value;
    const firstNonZero = str.search(/[^0]/);
    if (firstNonZero === -1 && str.length <= this._matchFrom) return true;
    const [minstr, maxstr] = this.boundaries(str);
    return this.from <= Number(maxstr) && Number(minstr) <= this.to && super.doValidate(...arguments);
  }
}
IMask.MaskedRange = MaskedRange;

export { MaskedRange as default };
