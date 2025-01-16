import { createAbility } from './ability.js';
export const attachShadowCallback = Symbol();
export const attachInternalsCallback = Symbol();
const shadows = new WeakMap();
const internals = new WeakMap();
const internalsCalled = new WeakSet();
export const controllable = createAbility((Class) => class extends Class {
    // TS mandates Constructors that get mixins have `...args: any[]`
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(...args) {
        super(...args);
        const shadowRoot = this.shadowRoot;
        if (shadowRoot && shadowRoot !== shadows.get(this))
            this[attachShadowCallback](shadowRoot);
        if (!internalsCalled.has(this)) {
            try {
                this.attachInternals();
            }
            catch {
                // Ignore errors
            }
        }
    }
    connectedCallback() {
        this.setAttribute('data-catalyst', '');
        super.connectedCallback?.();
    }
    attachShadow(...args) {
        const shadowRoot = super.attachShadow(...args);
        this[attachShadowCallback](shadowRoot);
        return shadowRoot;
    }
    [attachShadowCallback](shadowRoot) {
        shadows.set(this, shadowRoot);
    }
    attachInternals() {
        if (internals.has(this) && !internalsCalled.has(this)) {
            internalsCalled.add(this);
            return internals.get(this);
        }
        const elementInternals = super.attachInternals();
        this[attachInternalsCallback](elementInternals);
        internals.set(this, elementInternals);
        return elementInternals;
    }
    [attachInternalsCallback](elementInternals) {
        const shadowRoot = elementInternals.shadowRoot;
        if (shadowRoot && shadowRoot !== shadows.get(this)) {
            this[attachShadowCallback](shadowRoot);
        }
    }
});
//# sourceMappingURL=controllable.js.map