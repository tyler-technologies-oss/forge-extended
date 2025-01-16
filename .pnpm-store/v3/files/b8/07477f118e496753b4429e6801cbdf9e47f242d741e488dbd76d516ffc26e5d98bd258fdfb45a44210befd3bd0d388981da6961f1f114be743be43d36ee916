const abilityMarkers = new WeakMap();
export const createAbility = (decorate) => {
    return (Class) => {
        const markers = abilityMarkers.get(Class);
        if (markers?.has(decorate))
            return Class;
        const NewClass = decorate(Class);
        Object.defineProperty(NewClass, 'name', { value: Class.name });
        const newMarkers = new Set(markers);
        newMarkers.add(decorate);
        abilityMarkers.set(NewClass, newMarkers);
        return NewClass;
    };
};
//# sourceMappingURL=ability.js.map