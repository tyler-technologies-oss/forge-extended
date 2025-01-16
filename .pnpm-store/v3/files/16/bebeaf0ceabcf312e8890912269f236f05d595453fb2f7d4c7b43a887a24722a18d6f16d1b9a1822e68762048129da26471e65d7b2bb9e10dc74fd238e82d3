import ChangeDetails from '../core/change-details.js';
import ContinuousTailDetails from '../core/continuous-tail-details.js';
import { isString, normalizePrepare, DIRECTION, forceDirection } from '../core/utils.js';
import IMask from '../core/holder.js';

/** Supported mask type */

/** Append flags */

/** Extract flags */

/** Provides common masking stuff */
class Masked {
  // $Shape<MaskedOptions>; TODO after fix https://github.com/facebook/flow/issues/4773

  /** @type {Mask} */

  /** */ // $FlowFixMe no ideas
  /** Transforms value before mask processing */
  /** Validates if value is acceptable */
  /** Does additional processing in the end of editing */
  /** Format typed value to string */
  /** Parse strgin to get typed value */
  /** Enable characters overwriting */
  /** */
  /** */
  /** */
  constructor(opts) {
    this._value = '';
    this._update(Object.assign({}, Masked.DEFAULTS, opts));
    this.isInitialized = true;
  }

  /** Sets and applies new options */
  updateOptions(opts) {
    if (!Object.keys(opts).length) return;
    // $FlowFixMe
    this.withValueRefresh(this._update.bind(this, opts));
  }

  /**
    Sets new options
    @protected
  */
  _update(opts) {
    Object.assign(this, opts);
  }

  /** Mask state */
  get state() {
    return {
      _value: this.value
    };
  }
  set state(state) {
    this._value = state._value;
  }

  /** Resets value */
  reset() {
    this._value = '';
  }

  /** */
  get value() {
    return this._value;
  }
  set value(value) {
    this.resolve(value);
  }

  /** Resolve new value */
  resolve(value) {
    let flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      input: true
    };
    this.reset();
    this.append(value, flags, '');
    this.doCommit();
    return this.value;
  }

  /** */
  get unmaskedValue() {
    return this.value;
  }
  set unmaskedValue(value) {
    this.reset();
    this.append(value, {}, '');
    this.doCommit();
  }

  /** */
  get typedValue() {
    return this.doParse(this.value);
  }
  set typedValue(value) {
    this.value = this.doFormat(value);
  }

  /** Value that includes raw user input */
  get rawInputValue() {
    return this.extractInput(0, this.value.length, {
      raw: true
    });
  }
  set rawInputValue(value) {
    this.reset();
    this.append(value, {
      raw: true
    }, '');
    this.doCommit();
  }
  get displayValue() {
    return this.value;
  }

  /** */
  get isComplete() {
    return true;
  }

  /** */
  get isFilled() {
    return this.isComplete;
  }

  /** Finds nearest input position in direction */
  nearestInputPos(cursorPos, direction) {
    return cursorPos;
  }
  totalInputPositions() {
    let fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    let toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
    return Math.min(this.value.length, toPos - fromPos);
  }

  /** Extracts value in range considering flags */
  extractInput() {
    let fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    let toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
    return this.value.slice(fromPos, toPos);
  }

  /** Extracts tail in range */
  extractTail() {
    let fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    let toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
    return new ContinuousTailDetails(this.extractInput(fromPos, toPos), fromPos);
  }

  /** Appends tail */
  // $FlowFixMe no ideas
  appendTail(tail) {
    if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
    return tail.appendTo(this);
  }

  /** Appends char */
  _appendCharRaw(ch) {
    if (!ch) return new ChangeDetails();
    this._value += ch;
    return new ChangeDetails({
      inserted: ch,
      rawInserted: ch
    });
  }

  /** Appends char */
  _appendChar(ch) {
    let flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let checkTail = arguments.length > 2 ? arguments[2] : undefined;
    const consistentState = this.state;
    let details;
    [ch, details] = normalizePrepare(this.doPrepare(ch, flags));
    details = details.aggregate(this._appendCharRaw(ch, flags));
    if (details.inserted) {
      let consistentTail;
      let appended = this.doValidate(flags) !== false;
      if (appended && checkTail != null) {
        // validation ok, check tail
        const beforeTailState = this.state;
        if (this.overwrite === true) {
          consistentTail = checkTail.state;
          checkTail.unshift(this.value.length - details.tailShift);
        }
        let tailDetails = this.appendTail(checkTail);
        appended = tailDetails.rawInserted === checkTail.toString();

        // not ok, try shift
        if (!(appended && tailDetails.inserted) && this.overwrite === 'shift') {
          this.state = beforeTailState;
          consistentTail = checkTail.state;
          checkTail.shift();
          tailDetails = this.appendTail(checkTail);
          appended = tailDetails.rawInserted === checkTail.toString();
        }

        // if ok, rollback state after tail
        if (appended && tailDetails.inserted) this.state = beforeTailState;
      }

      // revert all if something went wrong
      if (!appended) {
        details = new ChangeDetails();
        this.state = consistentState;
        if (checkTail && consistentTail) checkTail.state = consistentTail;
      }
    }
    return details;
  }

  /** Appends optional placeholder at end */
  _appendPlaceholder() {
    return new ChangeDetails();
  }

  /** Appends optional eager placeholder at end */
  _appendEager() {
    return new ChangeDetails();
  }

  /** Appends symbols considering flags */
  // $FlowFixMe no ideas
  append(str, flags, tail) {
    if (!isString(str)) throw new Error('value should be string');
    const details = new ChangeDetails();
    const checkTail = isString(tail) ? new ContinuousTailDetails(String(tail)) : tail;
    if (flags !== null && flags !== void 0 && flags.tail) flags._beforeTailState = this.state;
    for (let ci = 0; ci < str.length; ++ci) {
      const d = this._appendChar(str[ci], flags, checkTail);
      if (!d.rawInserted && !this.doSkipInvalid(str[ci], flags, checkTail)) break;
      details.aggregate(d);
    }
    if ((this.eager === true || this.eager === 'append') && flags !== null && flags !== void 0 && flags.input && str) {
      details.aggregate(this._appendEager());
    }

    // append tail but aggregate only tailShift
    if (checkTail != null) {
      details.tailShift += this.appendTail(checkTail).tailShift;
      // TODO it's a good idea to clear state after appending ends
      // but it causes bugs when one append calls another (when dynamic dispatch set rawInputValue)
      // this._resetBeforeTailState();
    }

    return details;
  }

  /** */
  remove() {
    let fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    let toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
    this._value = this.value.slice(0, fromPos) + this.value.slice(toPos);
    return new ChangeDetails();
  }

  /** Calls function and reapplies current value */
  withValueRefresh(fn) {
    if (this._refreshing || !this.isInitialized) return fn();
    this._refreshing = true;
    const rawInput = this.rawInputValue;
    const value = this.value;
    const ret = fn();
    this.rawInputValue = rawInput;
    // append lost trailing chars at end
    if (this.value && this.value !== value && value.indexOf(this.value) === 0) {
      this.append(value.slice(this.value.length), {}, '');
    }
    delete this._refreshing;
    return ret;
  }

  /** */
  runIsolated(fn) {
    if (this._isolated || !this.isInitialized) return fn(this);
    this._isolated = true;
    const state = this.state;
    const ret = fn(this);
    this.state = state;
    delete this._isolated;
    return ret;
  }

  /** */
  doSkipInvalid(ch) {
    return this.skipInvalid;
  }

  /**
    Prepares string before mask processing
    @protected
  */
  doPrepare(str) {
    let flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return this.prepare ? this.prepare(str, this, flags) : str;
  }

  /**
    Validates if value is acceptable
    @protected
  */
  doValidate(flags) {
    return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
  }

  /**
    Does additional processing in the end of editing
    @protected
  */
  doCommit() {
    if (this.commit) this.commit(this.value, this);
  }

  /** */
  doFormat(value) {
    return this.format ? this.format(value, this) : value;
  }

  /** */
  doParse(str) {
    return this.parse ? this.parse(str, this) : str;
  }

  /** */
  splice(start, deleteCount, inserted, removeDirection) {
    let flags = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
      input: true
    };
    const tailPos = start + deleteCount;
    const tail = this.extractTail(tailPos);
    const eagerRemove = this.eager === true || this.eager === 'remove';
    let oldRawValue;
    if (eagerRemove) {
      removeDirection = forceDirection(removeDirection);
      oldRawValue = this.extractInput(0, tailPos, {
        raw: true
      });
    }
    let startChangePos = start;
    const details = new ChangeDetails();

    // if it is just deletion without insertion
    if (removeDirection !== DIRECTION.NONE) {
      startChangePos = this.nearestInputPos(start, deleteCount > 1 && start !== 0 && !eagerRemove ? DIRECTION.NONE : removeDirection);

      // adjust tailShift if start was aligned
      details.tailShift = startChangePos - start;
    }
    details.aggregate(this.remove(startChangePos));
    if (eagerRemove && removeDirection !== DIRECTION.NONE && oldRawValue === this.rawInputValue) {
      if (removeDirection === DIRECTION.FORCE_LEFT) {
        let valLength;
        while (oldRawValue === this.rawInputValue && (valLength = this.value.length)) {
          details.aggregate(new ChangeDetails({
            tailShift: -1
          })).aggregate(this.remove(valLength - 1));
        }
      } else if (removeDirection === DIRECTION.FORCE_RIGHT) {
        tail.unshift();
      }
    }
    return details.aggregate(this.append(inserted, flags, tail));
  }
  maskEquals(mask) {
    return this.mask === mask;
  }
  typedValueEquals(value) {
    const tval = this.typedValue;
    return value === tval || Masked.EMPTY_VALUES.includes(value) && Masked.EMPTY_VALUES.includes(tval) || this.doFormat(value) === this.doFormat(this.typedValue);
  }
}
Masked.DEFAULTS = {
  format: String,
  parse: v => v,
  skipInvalid: true
};
Masked.EMPTY_VALUES = [undefined, null, ''];
IMask.Masked = Masked;

export { Masked as default };
