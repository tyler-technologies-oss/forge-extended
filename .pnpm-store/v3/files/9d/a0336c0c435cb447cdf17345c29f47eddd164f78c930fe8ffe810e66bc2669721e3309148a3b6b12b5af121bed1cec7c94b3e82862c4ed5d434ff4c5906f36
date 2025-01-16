export const getPropertyDescriptor = (instance, key) => {
    while (instance) {
        const descriptor = Object.getOwnPropertyDescriptor(instance, key);
        if (descriptor)
            return descriptor;
        instance = Object.getPrototypeOf(instance);
    }
};
//# sourceMappingURL=get-property-descriptor.js.map