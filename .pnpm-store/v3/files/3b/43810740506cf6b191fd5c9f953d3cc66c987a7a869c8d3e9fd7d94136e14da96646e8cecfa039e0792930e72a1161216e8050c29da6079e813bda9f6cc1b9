import { _ as _objectWithoutPropertiesLoose } from '../_rollupPluginBabelHelpers-6b3bd404.js';
import { DIRECTION, normalizePrepare, objectIncludes } from '../core/utils.js';
import ChangeDetails from '../core/change-details.js';
import createMask from './factory.js';
import Masked from './base.js';
import IMask from '../core/holder.js';
import '../core/continuous-tail-details.js';

const _excluded = ["compiledMasks", "currentMaskRef", "currentMask"],
  _excluded2 = ["mask"];
/** Dynamic mask for choosing apropriate mask in run-time */
class MaskedDynamic extends Masked {
  /** Currently chosen mask */

  /** Compliled {@link Masked} options */

  /** Chooses {@link Masked} depending on input value */

  /**
    @param {Object} opts
  */
  constructor(opts) {
    super(Object.assign({}, MaskedDynamic.DEFAULTS, opts));
    this.currentMask = null;
  }

  /**
    @override
  */
  _update(opts) {
    super._update(opts);
    if ('mask' in opts) {
      // mask could be totally dynamic with only `dispatch` option
      this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map(m => createMask(m)) : [];

      // this.currentMask = this.doDispatch(''); // probably not needed but lets see
    }
  }

  /**
    @override
  */
  _appendCharRaw(ch) {
    let flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const details = this._applyDispatch(ch, flags);
    if (this.currentMask) {
      details.aggregate(this.currentMask._appendChar(ch, this.currentMaskFlags(flags)));
    }
    return details;
  }
  _applyDispatch() {
    let appended = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    let flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let tail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    const prevValueBeforeTail = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._value : this.value;
    const inputValue = this.rawInputValue;
    const insertValue = flags.tail && flags._beforeTailState != null ?
    // $FlowFixMe - tired to fight with type system
    flags._beforeTailState._rawInputValue : inputValue;
    const tailValue = inputValue.slice(insertValue.length);
    const prevMask = this.currentMask;
    const details = new ChangeDetails();
    const prevMaskState = prevMask === null || prevMask === void 0 ? void 0 : prevMask.state;

    // clone flags to prevent overwriting `_beforeTailState`
    this.currentMask = this.doDispatch(appended, Object.assign({}, flags), tail);

    // restore state after dispatch
    if (this.currentMask) {
      if (this.currentMask !== prevMask) {
        // if mask changed reapply input
        this.currentMask.reset();
        if (insertValue) {
          // $FlowFixMe - it's ok, we don't change current mask above
          const d = this.currentMask.append(insertValue, {
            raw: true
          });
          details.tailShift = d.inserted.length - prevValueBeforeTail.length;
        }
        if (tailValue) {
          // $FlowFixMe - it's ok, we don't change current mask above
          details.tailShift += this.currentMask.append(tailValue, {
            raw: true,
            tail: true
          }).tailShift;
        }
      } else {
        // Dispatch can do something bad with state, so
        // restore prev mask state
        this.currentMask.state = prevMaskState;
      }
    }
    return details;
  }
  _appendPlaceholder() {
    const details = this._applyDispatch(...arguments);
    if (this.currentMask) {
      details.aggregate(this.currentMask._appendPlaceholder());
    }
    return details;
  }

  /**
   @override
  */
  _appendEager() {
    const details = this._applyDispatch(...arguments);
    if (this.currentMask) {
      details.aggregate(this.currentMask._appendEager());
    }
    return details;
  }
  appendTail(tail) {
    const details = new ChangeDetails();
    if (tail) details.aggregate(this._applyDispatch('', {}, tail));
    return details.aggregate(this.currentMask ? this.currentMask.appendTail(tail) : super.appendTail(tail));
  }
  currentMaskFlags(flags) {
    var _flags$_beforeTailSta, _flags$_beforeTailSta2;
    return Object.assign({}, flags, {
      _beforeTailState: ((_flags$_beforeTailSta = flags._beforeTailState) === null || _flags$_beforeTailSta === void 0 ? void 0 : _flags$_beforeTailSta.currentMaskRef) === this.currentMask && ((_flags$_beforeTailSta2 = flags._beforeTailState) === null || _flags$_beforeTailSta2 === void 0 ? void 0 : _flags$_beforeTailSta2.currentMask) || flags._beforeTailState
    });
  }

  /**
    @override
  */
  doDispatch(appended) {
    let flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let tail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    return this.dispatch(appended, this, flags, tail);
  }

  /**
    @override
  */
  doValidate(flags) {
    return super.doValidate(flags) && (!this.currentMask || this.currentMask.doValidate(this.currentMaskFlags(flags)));
  }

  /**
    @override
  */
  doPrepare(str) {
    let flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let [s, details] = normalizePrepare(super.doPrepare(str, flags));
    if (this.currentMask) {
      let currentDetails;
      [s, currentDetails] = normalizePrepare(super.doPrepare(s, this.currentMaskFlags(flags)));
      details = details.aggregate(currentDetails);
    }
    return [s, details];
  }

  /**
    @override
  */
  reset() {
    var _this$currentMask;
    (_this$currentMask = this.currentMask) === null || _this$currentMask === void 0 ? void 0 : _this$currentMask.reset();
    this.compiledMasks.forEach(m => m.reset());
  }

  /**
    @override
  */
  get value() {
    return this.currentMask ? this.currentMask.value : '';
  }
  set value(value) {
    super.value = value;
  }

  /**
    @override
  */
  get unmaskedValue() {
    return this.currentMask ? this.currentMask.unmaskedValue : '';
  }
  set unmaskedValue(unmaskedValue) {
    super.unmaskedValue = unmaskedValue;
  }

  /**
    @override
  */
  get typedValue() {
    return this.currentMask ? this.currentMask.typedValue : '';
  }

  // probably typedValue should not be used with dynamic
  set typedValue(value) {
    let unmaskedValue = String(value);

    // double check it
    if (this.currentMask) {
      this.currentMask.typedValue = value;
      unmaskedValue = this.currentMask.unmaskedValue;
    }
    this.unmaskedValue = unmaskedValue;
  }
  get displayValue() {
    return this.currentMask ? this.currentMask.displayValue : '';
  }

  /**
    @override
  */
  get isComplete() {
    var _this$currentMask2;
    return Boolean((_this$currentMask2 = this.currentMask) === null || _this$currentMask2 === void 0 ? void 0 : _this$currentMask2.isComplete);
  }

  /**
    @override
  */
  get isFilled() {
    var _this$currentMask3;
    return Boolean((_this$currentMask3 = this.currentMask) === null || _this$currentMask3 === void 0 ? void 0 : _this$currentMask3.isFilled);
  }

  /**
    @override
  */
  remove() {
    const details = new ChangeDetails();
    if (this.currentMask) {
      details.aggregate(this.currentMask.remove(...arguments))
      // update with dispatch
      .aggregate(this._applyDispatch());
    }
    return details;
  }

  /**
    @override
  */
  get state() {
    var _this$currentMask4;
    return Object.assign({}, super.state, {
      _rawInputValue: this.rawInputValue,
      compiledMasks: this.compiledMasks.map(m => m.state),
      currentMaskRef: this.currentMask,
      currentMask: (_this$currentMask4 = this.currentMask) === null || _this$currentMask4 === void 0 ? void 0 : _this$currentMask4.state
    });
  }
  set state(state) {
    const {
        compiledMasks,
        currentMaskRef,
        currentMask
      } = state,
      maskedState = _objectWithoutPropertiesLoose(state, _excluded);
    this.compiledMasks.forEach((m, mi) => m.state = compiledMasks[mi]);
    if (currentMaskRef != null) {
      this.currentMask = currentMaskRef;
      this.currentMask.state = currentMask;
    }
    super.state = maskedState;
  }

  /**
    @override
  */
  extractInput() {
    return this.currentMask ? this.currentMask.extractInput(...arguments) : '';
  }

  /**
    @override
  */
  extractTail() {
    return this.currentMask ? this.currentMask.extractTail(...arguments) : super.extractTail(...arguments);
  }

  /**
    @override
  */
  doCommit() {
    if (this.currentMask) this.currentMask.doCommit();
    super.doCommit();
  }

  /**
    @override
  */
  nearestInputPos() {
    return this.currentMask ? this.currentMask.nearestInputPos(...arguments) : super.nearestInputPos(...arguments);
  }
  get overwrite() {
    return this.currentMask ? this.currentMask.overwrite : super.overwrite;
  }
  set overwrite(overwrite) {
    console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings');
  }
  get eager() {
    return this.currentMask ? this.currentMask.eager : super.eager;
  }
  set eager(eager) {
    console.warn('"eager" option is not available in dynamic mask, use this option in siblings');
  }
  get skipInvalid() {
    return this.currentMask ? this.currentMask.skipInvalid : super.skipInvalid;
  }
  set skipInvalid(skipInvalid) {
    if (this.isInitialized || skipInvalid !== Masked.DEFAULTS.skipInvalid) {
      console.warn('"skipInvalid" option is not available in dynamic mask, use this option in siblings');
    }
  }

  /**
    @override
  */
  maskEquals(mask) {
    return Array.isArray(mask) && this.compiledMasks.every((m, mi) => {
      if (!mask[mi]) return;
      const _mask$mi = mask[mi],
        {
          mask: oldMask
        } = _mask$mi,
        restOpts = _objectWithoutPropertiesLoose(_mask$mi, _excluded2);
      return objectIncludes(m, restOpts) && m.maskEquals(oldMask);
    });
  }

  /**
    @override
  */
  typedValueEquals(value) {
    var _this$currentMask5;
    return Boolean((_this$currentMask5 = this.currentMask) === null || _this$currentMask5 === void 0 ? void 0 : _this$currentMask5.typedValueEquals(value));
  }
}
MaskedDynamic.DEFAULTS = {
  dispatch: (appended, masked, flags, tail) => {
    if (!masked.compiledMasks.length) return;
    const inputValue = masked.rawInputValue;

    // simulate input
    const inputs = masked.compiledMasks.map((m, index) => {
      const isCurrent = masked.currentMask === m;
      const startInputPos = isCurrent ? m.value.length : m.nearestInputPos(m.value.length, DIRECTION.FORCE_LEFT);
      if (m.rawInputValue !== inputValue) {
        m.reset();
        m.append(inputValue, {
          raw: true
        });
      } else if (!isCurrent) {
        m.remove(startInputPos);
      }
      m.append(appended, masked.currentMaskFlags(flags));
      m.appendTail(tail);
      return {
        index,
        weight: m.rawInputValue.length,
        totalInputPositions: m.totalInputPositions(0, Math.max(startInputPos, m.nearestInputPos(m.value.length, DIRECTION.FORCE_LEFT)))
      };
    });

    // pop masks with longer values first
    inputs.sort((i1, i2) => i2.weight - i1.weight || i2.totalInputPositions - i1.totalInputPositions);
    return masked.compiledMasks[inputs[0].index];
  }
};
IMask.MaskedDynamic = MaskedDynamic;

export { MaskedDynamic as default };
