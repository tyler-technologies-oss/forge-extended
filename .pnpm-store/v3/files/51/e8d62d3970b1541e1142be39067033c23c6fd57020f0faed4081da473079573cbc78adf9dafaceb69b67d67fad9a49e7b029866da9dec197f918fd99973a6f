"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripStyles = void 0;
const parser_1 = require("@babel/parser");
const traverse_1 = require("@babel/traverse");
const generator_1 = require("@babel/generator");
/**
 * Extracts the HTML templates from a given JS source code string.
 * @param {string} content JS source code
 * @return {string}
 */
function stripStyles(content) {
    const ast = (0, parser_1.parse)(content, {
        sourceType: 'unambiguous',
        plugins: ['typescript', ['decorators', { decoratorsBeforeExport: true }]],
        ranges: true
    });
    (0, traverse_1.default)(ast, {
        TaggedTemplateExpression: (path) => {
            if (path.node.tag.type === 'Identifier' && path.node.tag.name === 'css') {
                path.remove();
            }
        }
    });
    const { code } = (0, generator_1.default)(ast);
    return code;
}
exports.stripStyles = stripStyles;
