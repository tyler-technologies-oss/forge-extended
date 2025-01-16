"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringify = void 0;
const stringifier_1 = require("postcss/lib/stringifier");
const util_js_1 = require("./util.js");
/**
 * Stringifies PostCSS nodes while taking interpolated expressions
 * into account.
 */
class LitStringifier extends stringifier_1.default {
    /** @inheritdoc */
    constructor(builder) {
        const wrappedBuilder = (str, node, type) => {
            // We purposely ignore the root node since the only thing we should
            // be stringifying here is already JS (before/after raws) so likely
            // already contains backticks on purpose.
            //
            // Similarly, if there is no node, we're probably stringifying
            // pure JS which never contained any CSS. Or something really weird
            // we don't want to touch anyway.
            //
            // For everything else, we want to escape backticks.
            if (!node || node?.type === 'root') {
                builder(str, node, type);
            }
            else {
                let processedString = str.replace(/\\/g, '\\\\').replace(/`/g, '\\`');
                const mappingKeys = [...Object.keys(util_js_1.placeholderMapping), 'default'];
                for (const key of mappingKeys) {
                    const mapping = key === 'default'
                        ? util_js_1.defaultPlaceholder
                        : util_js_1.placeholderMapping[key];
                    if (mapping) {
                        processedString = processedString.replace(mapping.regex, (placeholder, i) => this._replacePlaceholders(placeholder, node, Number(i)));
                    }
                }
                builder(processedString, node, type);
            }
        };
        super(wrappedBuilder);
    }
    /**
     * Replaces a placeholder with the original expression it represents
     * @param {string} placeholder Original placeholder string
     * @param {AnyNode} node Node which contains the placeholder
     * @param {number} expressionIndex Index of the expression this is a
     * placeholder for
     * @return {string}
     */
    _replacePlaceholders(placeholder, node, expressionIndex) {
        const root = node.root();
        const expressionStrings = root.raws['litTemplateExpressions'];
        if (expressionStrings && !Number.isNaN(expressionIndex)) {
            const expression = expressionStrings[expressionIndex];
            if (expression) {
                return expression;
            }
        }
        return placeholder;
    }
    /** @inheritdoc */
    document(node) {
        if (node.nodes.length === 0) {
            this.builder(node.source?.input.css ?? '');
        }
        else {
            super.document(node);
        }
    }
    /** @inheritdoc */
    root(node) {
        this.builder(node.raws.codeBefore ?? '', node, 'start');
        this.body(node);
        // Here we want to recover any previously removed JS indentation
        // if possible. Otherwise, we use the `after` string as-is.
        const after = node.raws['litAfter'] ?? node.raws.after;
        if (after) {
            this.builder(after);
        }
        this.builder(node.raws.codeAfter ?? '', node, 'end');
    }
    /** @inheritdoc */
    raw(node, own, detect) {
        if (own === 'before' && node.raws['before'] && node.raws['litBefore']) {
            return node.raws['litBefore'];
        }
        if (own === 'after' && node.raws['after'] && node.raws['litAfter']) {
            return node.raws['litAfter'];
        }
        if (own === 'between' && node.raws['between'] && node.raws['litBetween']) {
            return node.raws['litBetween'];
        }
        return super.raw(node, own, detect);
    }
    /** @inheritdoc */
    rawValue(node, prop) {
        const litProp = `lit${prop[0]?.toUpperCase()}${prop.slice(1)}`;
        if (Object.prototype.hasOwnProperty.call(node.raws, litProp)) {
            return `${node.raws[litProp]}`;
        }
        return super.rawValue(node, prop);
    }
}
const stringify = (node, builder) => {
    const str = new LitStringifier(builder);
    str.stringify(node);
};
exports.stringify = stringify;
