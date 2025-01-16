import { Root, Document, ChildNode } from 'postcss';
import { TaggedTemplateExpression } from '@babel/types';
/**
 * Creates an AST walker/visitor for correcting PostCSS AST locations to
 * those in the original JavaScript document.
 * @param {TaggedTemplateExpression} expr Expression the original source came
 * from
 * @return {Function}
 */
export declare function locationCorrectionWalker(expr: TaggedTemplateExpression): (node: Document | Root | ChildNode) => void;
