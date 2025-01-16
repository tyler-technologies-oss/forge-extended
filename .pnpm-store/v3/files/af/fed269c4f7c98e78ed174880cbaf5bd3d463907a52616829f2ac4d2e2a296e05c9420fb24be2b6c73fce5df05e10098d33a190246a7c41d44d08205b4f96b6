"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPlaceholder = exports.placeholderMapping = exports.defaultPlaceholder = exports.hasDisableComment = exports.isDisableComment = void 0;
/**
 * Determines if a given comment is a postcss-lit-disable comment
 * @param {Comment} node Node to test
 * @return {boolean}
 */
function isDisableComment(node) {
    return (node.type === 'CommentLine' &&
        node.value.includes('postcss-lit-disable-next-line'));
}
exports.isDisableComment = isDisableComment;
/**
 * Determines if a node has a leading postcss-lit-disable comment
 * @param {NodePath<TaggedTemplateExpression>} path NodePath to test
 * @return {boolean}
 */
function hasDisableComment(path) {
    // The comment could be directly above the node or above any of its parents
    return (path.find((p) => 
    // There could be multiple preceding the comments
    p.node.leadingComments?.some(isDisableComment) === true) !== null);
}
exports.hasDisableComment = hasDisableComment;
const whitespacePattern = /\s/;
exports.defaultPlaceholder = {
    create(key) {
        return `POSTCSS_LIT_${key}`;
    },
    regex: /POSTCSS_LIT_(\d+)/
};
exports.placeholderMapping = {
    block: {
        create(key) {
            return `/* POSTCSS_LIT_${key} */`;
        },
        regex: /\/\* POSTCSS_LIT_(\d+)\*\//
    },
    statement: {
        create(key) {
            return `/* POSTCSS_LIT_${key} */`;
        },
        regex: /\/\* POSTCSS_LIT_(\d+) \*\//
    },
    property: {
        create(key) {
            return `--POSTCSS_LIT_${key}`;
        },
        regex: /--POSTCSS_LIT_(\d+)/
    }
};
/**
 * Computes the placeholder for an expression
 * @param {number} i Expression index
 * @param {string=} prefix Source prefix so far
 * @param {string=} suffix Source suffix
 * @return {string}
 */
function createPlaceholder(i, prefix, suffix) {
    if (!prefix) {
        return exports.defaultPlaceholder.create(i);
    }
    const position = computePossiblePosition(prefix, suffix);
    return (exports.placeholderMapping[position] ?? exports.defaultPlaceholder).create(i);
}
exports.createPlaceholder = createPlaceholder;
/**
 * Finds the first non-space character of a string
 * @param {string} str String to search
 * @return {string|null}
 */
function findFirstNonSpaceChar(str) {
    for (let i = 0; i < str.length; i++) {
        const chr = str[i];
        if (chr === undefined) {
            return null;
        }
        if (whitespacePattern.test(chr)) {
            continue;
        }
        return chr;
    }
    return null;
}
/**
 * Computes whether the current position may be block-level or not,
 * such that we can choose a more appropriate placeholder.
 * @param {string} prefix Source prefix to scan
 * @param {string=} suffix Source suffix to scan
 * @return {boolean}
 */
function computePossiblePosition(prefix, suffix) {
    let possiblyInComment = false;
    let possiblePosition = 'default';
    for (let i = prefix.length; i > 0; i--) {
        const chr = prefix[i];
        if (possiblyInComment) {
            if (chr === '/' && prefix[i + 1] === '*') {
                possiblyInComment = false;
            }
            continue;
        }
        else {
            if (chr === '/' && prefix[i + 1] === '*') {
                possiblePosition = 'comment';
                break;
            }
        }
        if (chr === '*' && prefix[i + 1] === '/') {
            possiblyInComment = true;
            continue;
        }
        if (chr === ';') {
            possiblePosition = 'statement';
            break;
        }
        if (chr === ':') {
            possiblePosition = 'default';
            break;
        }
        if (chr === '}') {
            possiblePosition = 'block';
            break;
        }
        if (chr === '{') {
            possiblePosition = 'statement';
            break;
        }
    }
    if (suffix) {
        const nextChr = findFirstNonSpaceChar(suffix);
        switch (possiblePosition) {
            case 'block': {
                if (nextChr === '{') {
                    possiblePosition = 'selector';
                }
                break;
            }
            case 'statement': {
                if (nextChr === ':') {
                    possiblePosition = 'property';
                }
                break;
            }
        }
    }
    return possiblePosition;
}
