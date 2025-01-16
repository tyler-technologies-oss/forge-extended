import MaskedPattern from './pattern.js';
import IMask from '../core/holder.js';
import '../_rollupPluginBabelHelpers-6b3bd404.js';
import '../core/utils.js';
import '../core/change-details.js';
import './base.js';
import '../core/continuous-tail-details.js';
import './pattern/input-definition.js';
import './factory.js';
import './pattern/fixed-definition.js';
import './pattern/chunk-tail-details.js';
import './pattern/cursor.js';
import './regexp.js';

/** Pattern which validates enum values */
class MaskedEnum extends MaskedPattern {
  /**
    @override
    @param {Object} opts
  */
  _update(opts) {
    // TODO type
    if (opts.enum) opts.mask = '*'.repeat(opts.enum[0].length);
    super._update(opts);
  }

  /**
    @override
  */
  doValidate() {
    return this.enum.some(e => e.indexOf(this.unmaskedValue) >= 0) && super.doValidate(...arguments);
  }
}
IMask.MaskedEnum = MaskedEnum;

export { MaskedEnum as default };
