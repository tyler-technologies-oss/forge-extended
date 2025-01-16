import IMask from '../core/holder.js';

/**
  Generic element API to use with mask
  @interface
*/
class MaskElement {
  /** */

  /** */

  /** */

  /** Safely returns selection start */
  get selectionStart() {
    let start;
    try {
      start = this._unsafeSelectionStart;
    } catch (e) {}
    return start != null ? start : this.value.length;
  }

  /** Safely returns selection end */
  get selectionEnd() {
    let end;
    try {
      end = this._unsafeSelectionEnd;
    } catch (e) {}
    return end != null ? end : this.value.length;
  }

  /** Safely sets element selection */
  select(start, end) {
    if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd) return;
    try {
      this._unsafeSelect(start, end);
    } catch (e) {}
  }

  /** Should be overriden in subclasses */
  _unsafeSelect(start, end) {}
  /** Should be overriden in subclasses */
  get isActive() {
    return false;
  }
  /** Should be overriden in subclasses */
  bindEvents(handlers) {}
  /** Should be overriden in subclasses */
  unbindEvents() {}
}
IMask.MaskElement = MaskElement;

export { MaskElement as default };
