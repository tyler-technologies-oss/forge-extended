import { createMark } from './mark.js';
import { createAbility } from './ability.js';
export class ContextEvent extends Event {
    constructor(context, callback, multiple) {
        super('context-request', { bubbles: true, composed: true });
        this.context = context;
        this.callback = callback;
        this.multiple = multiple;
    }
}
function isContextEvent(event) {
    return (event instanceof Event &&
        event.type === 'context-request' &&
        'context' in event &&
        'callback' in event &&
        'multiple' in event);
}
const contexts = new WeakMap();
const [provide, getProvide, initProvide] = createMark(({ name, kind }) => {
    if (kind === 'setter')
        throw new Error(`@provide cannot decorate setter ${String(name)}`);
    if (kind === 'method')
        throw new Error(`@provide cannot decorate method ${String(name)}`);
}, (instance, { name, kind, access }) => {
    return {
        get: () => (kind === 'getter' ? access.get.call(instance) : access.value),
        set: (newValue) => {
            access.set?.call(instance, newValue);
            for (const callback of contexts.get(instance)?.get(name) || [])
                callback(newValue);
        }
    };
});
const [consume, getConsume, initConsume] = createMark(({ name, kind }) => {
    if (kind === 'method')
        throw new Error(`@consume cannot decorate method ${String(name)}`);
}, (instance, { name, access }) => {
    const initialValue = access.get?.call(instance) ?? access.value;
    let currentValue = initialValue;
    instance.dispatchEvent(new ContextEvent({ name, initialValue }, (value, dispose) => {
        if (!disposes.has(instance))
            disposes.set(instance, new Map());
        const instanceDisposes = disposes.get(instance);
        if (instanceDisposes.has(name)) {
            const oldDispose = instanceDisposes.get(name);
            if (oldDispose !== dispose)
                oldDispose();
        }
        if (dispose)
            instanceDisposes.set(name, dispose);
        currentValue = value;
        access.set?.call(instance, currentValue);
    }, true));
    return { get: () => currentValue };
});
const disposes = new WeakMap();
export { consume, provide, getProvide, getConsume };
export const providable = createAbility((Class) => class extends Class {
    // TS mandates Constructors that get mixins have `...args: any[]`
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(...args) {
        super(...args);
        initProvide(this);
        const provides = getProvide(this);
        if (provides.size) {
            if (!contexts.has(this))
                contexts.set(this, new Map());
            const instanceContexts = contexts.get(this);
            this.addEventListener('context-request', event => {
                if (!isContextEvent(event))
                    return;
                const name = event.context.name;
                if (!provides.has(name))
                    return;
                const value = this[name];
                const dispose = () => instanceContexts.get(name)?.delete(callback);
                const eventCallback = event.callback;
                const callback = (newValue) => eventCallback(newValue, dispose);
                if (event.multiple) {
                    if (!instanceContexts.has(name))
                        instanceContexts.set(name, new Set());
                    instanceContexts.get(name).add(callback);
                }
                event.stopPropagation();
                callback(value);
            });
        }
    }
    connectedCallback() {
        initConsume(this);
        super.connectedCallback?.();
    }
    disconnectedCallback() {
        for (const dispose of disposes.get(this)?.values() || []) {
            dispose();
        }
    }
});
//# sourceMappingURL=providable.js.map