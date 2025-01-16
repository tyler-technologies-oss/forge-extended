import { getPropertyDescriptor } from './get-property-descriptor.js';
const getType = (descriptor) => {
    if (descriptor) {
        if (typeof descriptor.value === 'function')
            return 'method';
        if (typeof descriptor.get === 'function')
            return 'getter';
        if (typeof descriptor.set === 'function')
            return 'setter';
    }
    return 'field';
};
export function createMark(validate, initialize) {
    const marks = new WeakMap();
    const get = (proto) => {
        if (!marks.has(proto)) {
            const parent = Object.getPrototypeOf(proto);
            marks.set(proto, new Set(parent ? get(parent) || [] : []));
        }
        return marks.get(proto);
    };
    const marker = (proto, name, descriptor) => {
        if (get(proto).has(name))
            return;
        validate({ name, kind: getType(descriptor) });
        get(proto).add(name);
    };
    marker.static = Symbol();
    const getMarks = (instance) => {
        const proto = Object.getPrototypeOf(instance);
        for (const key of proto.constructor[marker.static] || []) {
            marker(proto, key, Object.getOwnPropertyDescriptor(proto, key));
        }
        return new Set(get(proto));
    };
    return [
        marker,
        getMarks,
        (instance) => {
            for (const name of getMarks(instance)) {
                const access = getPropertyDescriptor(instance, name) || {
                    value: void 0,
                    configurable: true,
                    writable: true,
                    enumerable: true
                };
                const newDescriptor = initialize(instance, { name, kind: getType(access), access }) || access;
                Object.defineProperty(instance, name, Object.assign({ configurable: true, enumerable: true }, newDescriptor));
            }
        }
    ];
}
//# sourceMappingURL=mark.js.map