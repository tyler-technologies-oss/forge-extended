import { NodePath } from '@babel/traverse';
import { TaggedTemplateExpression, Comment } from '@babel/types';
/**
 * Determines if a given comment is a postcss-lit-disable comment
 * @param {Comment} node Node to test
 * @return {boolean}
 */
export declare function isDisableComment(node: Comment): boolean;
/**
 * Determines if a node has a leading postcss-lit-disable comment
 * @param {NodePath<TaggedTemplateExpression>} path NodePath to test
 * @return {boolean}
 */
export declare function hasDisableComment(path: NodePath<TaggedTemplateExpression>): boolean;
export declare type Position = 'block' | 'statement' | 'default' | 'selector' | 'property' | 'comment';
interface PlaceholderConfig {
    create(key: number): string;
    regex: RegExp;
}
export declare const defaultPlaceholder: PlaceholderConfig;
export declare const placeholderMapping: Partial<Record<Position, PlaceholderConfig>>;
/**
 * Computes the placeholder for an expression
 * @param {number} i Expression index
 * @param {string=} prefix Source prefix so far
 * @param {string=} suffix Source suffix
 * @return {string}
 */
export declare function createPlaceholder(i: number, prefix?: string, suffix?: string): string;
export {};
