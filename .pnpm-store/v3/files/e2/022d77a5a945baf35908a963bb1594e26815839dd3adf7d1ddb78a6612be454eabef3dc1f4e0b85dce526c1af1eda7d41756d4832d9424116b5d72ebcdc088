import type { CustomElementClass, CustomElement } from './custom-element.js';
export interface Context<T> {
    name: PropertyKey;
    initialValue?: T;
}
export declare type ContextCallback<ValueType> = (value: ValueType, dispose?: () => void) => void;
export declare type ContextType<T extends Context<unknown>> = T extends Context<infer Y> ? Y : never;
export declare class ContextEvent<T extends Context<unknown>> extends Event {
    readonly context: T;
    readonly callback: ContextCallback<ContextType<T>>;
    readonly multiple?: boolean | undefined;
    constructor(context: T, callback: ContextCallback<ContextType<T>>, multiple?: boolean | undefined);
}
declare const provide: import("./mark.js").PropertyDecorator, getProvide: (instance: CustomElement) => Set<PropertyKey>;
declare const consume: import("./mark.js").PropertyDecorator, getConsume: (instance: CustomElement) => Set<PropertyKey>;
export { consume, provide, getProvide, getConsume };
export declare const providable: <T extends CustomElementClass>(Class: T) => T;
//# sourceMappingURL=providable.d.ts.map