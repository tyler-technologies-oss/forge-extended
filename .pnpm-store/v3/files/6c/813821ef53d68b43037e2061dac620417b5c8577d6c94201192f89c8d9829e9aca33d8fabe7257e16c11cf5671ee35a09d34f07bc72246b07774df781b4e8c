"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = void 0;
const postcss_1 = require("postcss");
const parser_1 = require("@babel/parser");
const traverse_1 = require("@babel/traverse");
const util_js_1 = require("./util.js");
const locationCorrection_js_1 = require("./locationCorrection.js");
const userConfig_js_1 = require("./userConfig.js");
const configKey = 'postcss-lit';
/**
 * Parses CSS from within tagged template literals in a JavaScript document
 * @param {string} source Source code to parse
 * @param {*=} opts Options to pass to PostCSS' parser when parsing
 * @return {Root|Document}
 */
const parse = (source, opts) => {
    const doc = new postcss_1.Document();
    const sourceAsString = source.toString();
    const userConfig = (0, userConfig_js_1.getUserConfig)(configKey);
    const ast = (0, parser_1.parse)(sourceAsString, {
        ...userConfig.babelOptions
    });
    const extractedStyles = new Set();
    (0, traverse_1.default)(ast, {
        TaggedTemplateExpression: (path) => {
            if (path.node.tag.type === 'Identifier' &&
                path.node.tag.name === 'css' &&
                !(0, util_js_1.hasDisableComment)(path)) {
                extractedStyles.add(path.node);
            }
        }
    });
    let currentOffset = 0;
    for (const node of extractedStyles) {
        if (!node.quasi.range) {
            continue;
        }
        const startIndex = node.quasi.range[0] + 1;
        const expressionStrings = [];
        const placeholders = new Map();
        let styleText = '';
        for (let i = 0; i < node.quasi.quasis.length; i++) {
            const template = node.quasi.quasis[i];
            const expr = node.quasi.expressions[i];
            const nextTemplate = node.quasi.quasis[i + 1];
            if (template) {
                styleText += template.value.raw;
                if (expr && nextTemplate && nextTemplate.range && template.range) {
                    const exprText = sourceAsString.slice(template.range[1], nextTemplate.range[0]);
                    const placeholder = (0, util_js_1.createPlaceholder)(i, styleText, nextTemplate?.value.raw);
                    placeholders.set(i, placeholder);
                    styleText += placeholder;
                    expressionStrings.push(exprText);
                }
            }
        }
        const baseIndentation = (node.quasi.loc?.end.column ?? 1) - 1;
        const sourceLines = styleText.split('\n');
        const baseIndentations = new Map();
        const indentationPattern = new RegExp(`^[ \\t]{${baseIndentation}}`);
        const emptyLinePattern = /^[ \\t\r]*$/;
        const deindentedLines = [];
        const prefixOffsets = { lines: 0, offset: 0 };
        if (sourceLines.length > 1 &&
            sourceLines[0] !== undefined &&
            emptyLinePattern.test(sourceLines[0])) {
            prefixOffsets.lines = 1;
            prefixOffsets.offset = sourceLines[0].length + 1;
            sourceLines.shift();
        }
        for (let i = 0; i < sourceLines.length; i++) {
            const sourceLine = sourceLines[i];
            if (sourceLine !== undefined) {
                if (indentationPattern.test(sourceLine)) {
                    deindentedLines.push(sourceLine.replace(indentationPattern, ''));
                    baseIndentations.set(i + 1, baseIndentation);
                    // Roots don't have an end line, so we can't look this up so easily
                    // later on. Having a special '-1' key helps here.
                    if (i === sourceLines.length - 1) {
                        baseIndentations.set(-1, baseIndentation);
                    }
                }
                else {
                    deindentedLines.push(sourceLine);
                }
            }
        }
        const deindentedStyleText = deindentedLines
            .join('\n')
            .replace(/\\\\/g, '\\');
        let root;
        try {
            root = (0, postcss_1.parse)(deindentedStyleText, {
                ...opts,
                map: false
            });
        }
        catch (err) {
            if (err instanceof postcss_1.CssSyntaxError) {
                const line = node.loc
                    ? ` (${opts?.from ?? 'unknown'}:${node.loc.start.line})`
                    : opts?.from;
                console.warn('[postcss-lit]', `Skipping template${line}` +
                    ' as it included either invalid syntax or complex' +
                    ' expressions the plugin could not interpret. Consider using a' +
                    ' "// postcss-lit-disable-next-line" comment to disable' +
                    ' this message');
            }
            // skip this template since it included invalid
            // CSS or overly complex interpolations presumably
            continue;
        }
        root.raws['litPrefixOffsets'] = prefixOffsets;
        root.raws['litTemplateExpressions'] = expressionStrings;
        root.raws['litPlaceholders'] = placeholders;
        root.raws['litBaseIndentations'] = baseIndentations;
        // TODO (43081j): remove this if stylelint/stylelint#5767 ever gets fixed,
        // or they drop the indentation rule. Their indentation rule depends on
        // `beforeStart` existing as they unsafely try to call `endsWith` on it.
        if (!root.raws['beforeStart']) {
            root.raws['beforeStart'] = '';
        }
        root.raws.codeBefore = sourceAsString.slice(currentOffset, startIndex + prefixOffsets.offset);
        root.parent = doc;
        // TODO (43081j): stylelint relies on this existing, really unsure why.
        // it could just access root.parent to get the document...
        root.document = doc;
        const walker = (0, locationCorrection_js_1.locationCorrectionWalker)(node);
        walker(root);
        root.walk(walker);
        doc.nodes.push(root);
        currentOffset = node.quasi.range[1] - 1;
    }
    if (doc.nodes.length > 0) {
        const last = doc.nodes[doc.nodes.length - 1];
        if (last) {
            last.raws.codeAfter = sourceAsString.slice(currentOffset);
        }
    }
    doc.source = {
        input: new postcss_1.Input(sourceAsString, opts),
        start: {
            line: 1,
            column: 1,
            offset: 0
        }
    };
    return doc;
};
exports.parse = parse;
