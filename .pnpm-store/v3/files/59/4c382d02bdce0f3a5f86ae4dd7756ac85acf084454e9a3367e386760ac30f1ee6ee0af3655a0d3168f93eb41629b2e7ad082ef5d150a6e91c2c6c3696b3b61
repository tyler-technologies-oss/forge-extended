import Masked from './base.js';
import IMask from '../core/holder.js';
import '../core/change-details.js';
import '../core/continuous-tail-details.js';
import '../core/utils.js';

/** Masking by RegExp */
class MaskedRegExp extends Masked {
  /**
    @override
    @param {Object} opts
  */
  _update(opts) {
    if (opts.mask) opts.validate = value => value.search(opts.mask) >= 0;
    super._update(opts);
  }
}
IMask.MaskedRegExp = MaskedRegExp;

export { MaskedRegExp as default };
