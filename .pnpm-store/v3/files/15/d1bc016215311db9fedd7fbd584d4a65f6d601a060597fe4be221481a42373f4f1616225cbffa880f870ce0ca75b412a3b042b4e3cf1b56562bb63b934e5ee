import type { CustomElementClass } from './custom-element.js';
export interface Controllable {
    [attachShadowCallback]?(shadowRoot: ShadowRoot): void;
    [attachInternalsCallback]?(internals: ElementInternals): void;
}
export interface ControllableClass {
    new (...args: any[]): Controllable;
}
export declare const attachShadowCallback: unique symbol;
export declare const attachInternalsCallback: unique symbol;
export declare const controllable: <T extends CustomElementClass>(Class: T) => T & ControllableClass;
//# sourceMappingURL=controllable.d.ts.map