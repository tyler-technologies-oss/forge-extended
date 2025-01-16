export const dasherize = (str) => String(typeof str === 'symbol' ? str.description : str)
    .replace(/([A-Z]($|[a-z]))/g, '-$1')
    .replace(/--/g, '-')
    .replace(/^-|-$/, '')
    .toLowerCase();
export const mustDasherize = (str, type = 'property') => {
    const dashed = dasherize(str);
    if (!dashed.includes('-')) {
        throw new DOMException(`${type}: ${String(str)} is not a valid ${type} name`, 'SyntaxError');
    }
    return dashed;
};
//# sourceMappingURL=dasherize.js.map