import { register } from './register.js';
import { bind, bindShadow } from './bind.js';
import { autoShadowRoot } from './auto-shadow-root.js';
import { defineObservedAttributes, initializeAttrs } from './attr.js';
const symbol = Symbol.for('catalyst');
export class CatalystDelegate {
    constructor(classObject) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const delegate = this;
        const connectedCallback = classObject.prototype.connectedCallback;
        classObject.prototype.connectedCallback = function () {
            delegate.connectedCallback(this, connectedCallback);
        };
        const disconnectedCallback = classObject.prototype.disconnectedCallback;
        classObject.prototype.disconnectedCallback = function () {
            delegate.disconnectedCallback(this, disconnectedCallback);
        };
        const attributeChangedCallback = classObject.prototype.attributeChangedCallback;
        classObject.prototype.attributeChangedCallback = function (name, oldValue, newValue) {
            delegate.attributeChangedCallback(this, name, oldValue, newValue, attributeChangedCallback);
        };
        let observedAttributes = classObject.observedAttributes || [];
        Object.defineProperty(classObject, 'observedAttributes', {
            configurable: true,
            get() {
                return delegate.observedAttributes(this, observedAttributes);
            },
            set(attributes) {
                observedAttributes = attributes;
            }
        });
        defineObservedAttributes(classObject);
        register(classObject);
    }
    observedAttributes(instance, observedAttributes) {
        return observedAttributes;
    }
    connectedCallback(instance, connectedCallback) {
        instance.toggleAttribute('data-catalyst', true);
        customElements.upgrade(instance);
        autoShadowRoot(instance);
        initializeAttrs(instance);
        bind(instance);
        connectedCallback?.call(instance);
        if (instance.shadowRoot)
            bindShadow(instance.shadowRoot);
    }
    disconnectedCallback(element, disconnectedCallback) {
        disconnectedCallback?.call(element);
    }
    attributeChangedCallback(instance, name, oldValue, newValue, attributeChangedCallback) {
        initializeAttrs(instance);
        if (name !== 'data-catalyst' && attributeChangedCallback) {
            attributeChangedCallback.call(instance, name, oldValue, newValue);
        }
    }
}
export function meta(proto, name) {
    if (!Object.prototype.hasOwnProperty.call(proto, symbol)) {
        const parent = proto[symbol];
        const map = (proto[symbol] = new Map());
        if (parent) {
            for (const [key, value] of parent) {
                map.set(key, new Set(value));
            }
        }
    }
    const map = proto[symbol];
    if (!map.has(name))
        map.set(name, new Set());
    return map.get(name);
}
//# sourceMappingURL=core.js.map