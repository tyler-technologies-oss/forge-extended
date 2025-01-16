declare type PropertyType = 'field' | 'getter' | 'setter' | 'method';
export interface PropertyDecorator {
    (proto: object, key: PropertyKey, descriptor?: PropertyDescriptor): void;
    readonly static: unique symbol;
}
declare type GetMarks<T> = (instance: T) => Set<PropertyKey>;
declare type InitializeMarks<T> = (instance: T) => void;
declare type Context = {
    kind: PropertyType;
    name: PropertyKey;
    access: PropertyDescriptor;
};
export declare function createMark<T extends object>(validate: (context: {
    name: PropertyKey;
    kind: PropertyType;
}) => void, initialize: (instance: T, context: Context) => PropertyDescriptor | void): [PropertyDecorator, GetMarks<T>, InitializeMarks<T>];
export {};
//# sourceMappingURL=mark.d.ts.map